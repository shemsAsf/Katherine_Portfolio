import { useState, useCallback, useEffect } from "react";
import { schemaByType, schemasByCategory, buildDefaultProps, type ElementSchema } from "./ElementSchema";
import { fetchPigeons, fetchProject, fetchTools, getDictFromPath, publishProject, uploadImage, type IndexEntry } from "./BuilderApi";
import { IndexForm, IndexFormValue } from "./components/IndexForm";
import { BlockCard } from "./components/BlockCard";
import { ElementPicker } from "./components/ElementPicker";
import "./Builder.css";

export interface BuilderBlock {
    id: string;
    type: string;
    props: Record<string, unknown>;
}

function uid() {
    return Math.random().toString(36).slice(2, 9);
}

interface BuilderProps {
    index?: IndexEntry;
    newId?: number;
}

export default function Builder({ index, newId }: BuilderProps) {
    const token = localStorage.getItem("ekaterina_token") ?? "";

    const [blocks, setBlocks] = useState<BuilderBlock[]>([]);
    const [pickerOpen, setPickerOpen] = useState(false);
    const [insertAt, setInsertAt] = useState<number | null>(null);
    const [publishing, setPublishing] = useState(false);
    const [status, setStatus] = useState<string | null>(null);
    const [projectId, setProjectId] = useState<number>(0);
    const [toolOptions, setToolOptions] = useState<{ name: string; url: string; }[]>([]);
    const [pigeonOptions, setPigeonOptions] = useState<string[]>([]);

    // index.json fields
    const [indexEntry, setIndexEntry] = useState<IndexFormValue>({
        title: "",
        subtitle: "",
        cover: "",
        tools: [],
        visible: true,
    });

    useEffect(() => {
        fetchTools().then(setToolOptions).catch(console.error);
        fetchPigeons().then(setPigeonOptions).catch(console.error);
    }, []);

    useEffect(() => {
        const initializeBuilder = async () => {
            if (!index && !newId) {
                console.error("Builder Error: No index provided and no newId found.");
                setStatus("✗ Error: Missing project data.");
                return;
            }

            try {
                if (index) {
                    setIndexEntry({
                        ...index,
                        cover: index.cover ?? "",
                        tools: index.tools ?? [],
                    } as IndexFormValue);
                    setProjectId(index.id);

                    const data = await fetchProject(index.id);
                    if (data && Array.isArray(data)) {
                        setBlocks(data.map((el: any) => {
                            const schema = schemaByType[el.type];
                            const defaultProps = schema ? buildDefaultProps(schema) : {};
                            const rawProps = el.props ?? {};

                            // normalize tool/pigeon fields
                            const normalizedProps: Record<string, unknown> = {};
                            for (const field of schema?.fields ?? []) {
                                const val = rawProps[field.key];
                                if (val == null) continue; // skip missing fields

                                if (field.type === "toolsSelector" && Array.isArray(val)) {
                                    normalizedProps[field.key] = val
                                        .filter((url: unknown) => typeof url === "string" && url.length > 0)
                                        .map((url: string) => getDictFromPath(url).name);
                                    continue;
                                }

                                if (field.type === "pigeonSelector" && typeof val === "string") {
                                    normalizedProps[field.key] = {
                                        url: val,
                                        translation: { x: 0, y: 0 }
                                    };
                                    continue;
                                }
                            }

                            return {
                                id: uid(),
                                type: el.type,
                                props: { ...defaultProps, ...rawProps, ...normalizedProps }
                            };
                        }));
                    }
                } else if (newId) {
                    setProjectId(newId);
                    setStatus("Creating new project...");
                }
            } catch (err) {
                console.error(err);
                setStatus("✗ Failed to initialize builder.");
            }
        };

        initializeBuilder();
    }, [index, newId]);

    const addBlock = useCallback((schema: ElementSchema, at: number | null) => {
        const block: BuilderBlock = {
            id: uid(),
            type: schema.type,
            props: buildDefaultProps(schema),
        };
        setBlocks(prev => {
            const next = [...prev];
            at === null ? next.push(block) : next.splice(at, 0, block);
            return next;
        });
        setPickerOpen(false);
    }, []);

    const updateBlock = useCallback((id: string, props: Record<string, unknown>) => {
        setBlocks(prev => prev.map(b => b.id === id ? { ...b, props } : b));
    }, []);

    const removeBlock = useCallback((id: string) => {
        setBlocks(prev => prev.filter(b => b.id !== id));
    }, []);

    const moveBlock = useCallback((id: string, dir: -1 | 1) => {
        setBlocks(prev => {
            const idx = prev.findIndex(b => b.id === id);
            if (idx < 0) return prev;
            const next = [...prev];
            const swap = idx + dir;
            if (swap < 0 || swap >= next.length) return prev;
            [next[idx], next[swap]] = [next[swap], next[idx]];
            return next;
        });
    }, []);


    const handlePublish = async () => {
        setPublishing(true);
        setStatus("Uploading images…");
        try {
            // 1 — Upload cover if it's a File
            let coverUrl = indexEntry.cover as string;
            if (indexEntry.cover instanceof File) {
                coverUrl = await uploadImage(token, projectId, "cover", indexEntry.cover);
            }

            // 2 — Walk all blocks and upload any File props
            const resolvedBlocks = await Promise.all(
                blocks.map(async (block, bi) => {
                    const schema = schemaByType[block.type];
                    const resolvedProps: Record<string, unknown> = { ...block.props };

                    for (const field of schema?.fields ?? []) {
                        const val = block.props[field.key];

                        if ((field.type === "image" || field.type === "video") && val instanceof File) {
                            resolvedProps[field.key] = await uploadImage(
                                token,
                                projectId,
                                `body/${bi}/${field.key}`,
                                val
                            );
                        }

                        if (field.type === "imageList" && Array.isArray(val)) {
                            resolvedProps[field.key] = await Promise.all(
                                val.map(async (item: unknown, ii: number) => {
                                    if (item instanceof File) {
                                        return uploadImage(
                                            token,
                                            projectId,
                                            `body/${bi}/${field.key}/${ii}`,
                                            item
                                        );
                                    }
                                    return item;
                                })
                            );
                        }

                        if (field.type === "imageRowList" && Array.isArray(val)) {
                            resolvedProps[field.key] = await Promise.all(
                                val.map(async (item: { url: File | string; width: unknown }, ii: number) => {
                                    if (item.url instanceof File) {
                                        return {
                                            ...item,
                                            url: await uploadImage(
                                                token,
                                                projectId,
                                                `body/${bi}/${field.key}/${ii}`,
                                                item.url
                                            ),
                                        };
                                    }
                                    return item;
                                })
                            );
                        }
                        if (field.type === "toolsSelector") {
                            resolvedProps[field.key] = (val as string[]).map(v => toolOptions.find(t => t.name === v)?.url);
                        }
                    }
                    return { type: block.type, props: resolvedProps };
                })
            );

            // 3 — Publish JSON
            setStatus("Saving project…");
            await publishProject(token, projectId, { ...indexEntry, cover: coverUrl } as IndexEntry, resolvedBlocks);
            setStatus("✓ Published successfully");
        } catch (e: unknown) {
            setStatus("✗ " + (e instanceof Error ? e.message : "Unknown error"));
        } finally {
            setPublishing(false);
        }
    };


    return (
        <div className="builder">
            <aside className="builder-sidebar">
                <div className="builder-logo">Builder</div>

                <IndexForm
                    value={indexEntry}
                    onChange={setIndexEntry}
                    projectId={projectId}
                    onProjectIdChange={setProjectId}
                    toolOptions={toolOptions}
                    onToolAdded={(name, url) => setToolOptions(prev => [...prev, { name, url }])}
                />

                <button
                    className="builder-publish-btn"
                    onClick={handlePublish}
                    disabled={publishing}
                >
                    {publishing ? "Publishing…" : "Publish Project"}
                </button>

                {status && (
                    <p className={`builder-status ${status.startsWith("✓") ? "ok" : status.startsWith("✗") ? "err" : ""}`}>
                        {status}
                    </p>
                )}
            </aside>

            <main className="builder-canvas">
                <div className="builder-blocks">
                    {blocks.length === 0 && (
                        <div className="builder-empty">
                            <p>No blocks yet.</p>
                            <p>Click <strong>+</strong> to add your first element.</p>
                        </div>
                    )}

                    {blocks.map((block, i) => (
                        <div key={block.id} className="builder-block-slot">
                            <button
                                className="builder-insert-btn"
                                onClick={() => { setInsertAt(i); setPickerOpen(true); }}
                                title="Insert element here"
                            >
                                +
                            </button>

                            <BlockCard
                                block={block}
                                schema={schemaByType[block.type]}
                                onUpdate={(props) => updateBlock(block.id, props)}
                                onRemove={() => removeBlock(block.id)}
                                onMoveUp={() => moveBlock(block.id, -1)}
                                onMoveDown={() => moveBlock(block.id, 1)}
                                isFirst={i === 0}
                                isLast={i === blocks.length - 1}
                                toolOptions={toolOptions}
                                pigeonOptions={pigeonOptions}
                            />
                        </div>
                    ))}

                    <button
                        className="builder-add-btn"
                        onClick={() => { setInsertAt(null); setPickerOpen(true); }}
                    >
                        + Add Element
                    </button>
                </div>
            </main>

            {pickerOpen && (
                <ElementPicker
                    categories={schemasByCategory}
                    onSelect={(schema) => addBlock(schema, insertAt)}
                    onClose={() => setPickerOpen(false)}
                />
            )}
        </div>
    );
}