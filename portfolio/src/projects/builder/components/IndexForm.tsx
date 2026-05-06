import { useRef } from "react";
import { getDictFromPath, IndexEntry, uploadTool } from "../BuilderApi";
import { ToolSelectorField } from "./ToolSelectorField";

export type IndexFormValue = Omit<IndexEntry, "id" | "cover"> & { cover: File | string };

interface Props {
    value: IndexFormValue;
    onChange: (v: IndexFormValue) => void;
    projectId: number;
    onProjectIdChange: (id: number) => void;
    toolOptions: { name: string; url: string; }[];
    onToolAdded: (name: string, url: string) => void;
}

export function IndexForm({ value, onChange, projectId, onProjectIdChange, toolOptions, onToolAdded }: Props) {
    const coverRef = useRef<HTMLInputElement>(null);
    const importRef = useRef<HTMLInputElement>(null);

    const token = localStorage.getItem("ekaterina_token");

    value.tools = value.tools.map(v => getDictFromPath(v).name)

    const set = (key: keyof IndexFormValue, val: unknown) =>
        onChange({ ...value, [key]: val });

    const handleImportTool = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file || !token) return;

        if (file.type !== "image/png") {
            alert("Please upload PNG files only.");
            e.target.value = "";
            return;
        }
        const toolName = file.name.replace(/\.png$/i, "");

        if (toolOptions.some(t => t.name === toolName)) {
            alert(`The tool "${toolName}" already exists.`);
            e.target.value = "";
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        try {
            const data = await uploadTool(token, file);
            onToolAdded(data.name, data.url);
        } catch (err) {
            console.error("Failed to upload tool:", err);
        } finally {
            e.target.value = "";
        }
    };

    return (
        <div className="index-form">
            <h3 className="index-form-title">Project Info</h3>

            <label className="field-label">Project ID</label>
            <p>{projectId}</p>

            <label className="field-label">Title <span className="field-required">*</span></label>
            <input
                className="field-input"
                type="text"
                value={value.title}
                placeholder='"Project Title"'
                onChange={e => set("title", e.target.value)}
            />

            <label className="field-label">Subtitle <span className="field-required">*</span></label>
            <input
                className="field-input"
                type="text"
                value={value.subtitle}
                placeholder="Short description"
                onChange={e => set("subtitle", e.target.value)}
            />

            <label className="field-label">Cover Image <span className="field-required">*</span></label>
            <input ref={coverRef} type="file" accept="image/*" style={{ display: "none" }}
                onChange={e => e.target.files?.[0] && set("cover", e.target.files[0])} />
            <button className="field-upload-btn" onClick={() => coverRef.current?.click()}>
                {value.cover instanceof File ? `✓ ${value.cover.name}` : value.cover || "Upload Cover"}
            </button>

            <label className="field-label">Tools</label>

            <div className="index-form-tools">

                <ToolSelectorField
                    value={value.tools}
                    toolOptions={toolOptions}
                    onChange={(tools) => set("tools", tools)} 
                />

                {/* Import new tool button */}
                <input
                    ref={importRef}
                    type="file"
                    accept="image/png"
                    style={{ display: "none" }}
                    onChange={handleImportTool}
                />
                <button
                    className="tool-chip tool-chip-add"
                    onClick={() => importRef.current?.click()}
                    title="Import new tool"
                >
                    +
                </button>
            </div>

            <label className="field-label">Visible</label>
            <label className="field-toggle">
                <input
                    type="checkbox"
                    checked={value.visible}
                    onChange={e => set("visible", e.target.checked)}
                />
                <span>{value.visible ? "Published" : "Hidden"}</span>
            </label>
        </div>
    );
}