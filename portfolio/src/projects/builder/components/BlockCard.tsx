import { useState } from "react";
import type { ElementSchema } from "../ElementSchema";
import { FieldEditor } from "./FieldEditor";
import { BuilderBlock } from "../Builder";

interface Props {
    block: BuilderBlock;
    schema: ElementSchema;
    onUpdate: (props: Record<string, unknown>) => void;
    onRemove: () => void;
    onMoveUp: () => void;
    onMoveDown: () => void;
    isFirst: boolean;
    isLast: boolean;
    toolOptions: { name: string; url: string; }[];
    pigeonOptions: string[];
}

export function BlockCard({
    block,
    schema,
    onUpdate,
    onRemove,
    onMoveUp,
    onMoveDown,
    isFirst,
    isLast,
    toolOptions,
    pigeonOptions
}: Props) {
    const [expanded, setExpanded] = useState(true);

    const updateField = (key: string, value: unknown) => {
        onUpdate({ ...block.props, [key]: value });
    };

    return (
        <div className="block-card">
            <div className="block-card-header">
                <div className="block-card-title">
                    <span className="block-card-type">{schema?.label ?? block.type}</span>
                </div>
                <div className="block-card-actions">
                    <button onClick={onMoveUp} disabled={isFirst} title="Move up">↑</button>
                    <button onClick={onMoveDown} disabled={isLast} title="Move down">↓</button>
                    <button onClick={() => setExpanded(e => !e)} title="Toggle">
                        {expanded ? "▲" : "▼"}
                    </button>
                    <button onClick={onRemove} className="block-card-remove" title="Remove">✕</button>
                </div>
            </div>

            {expanded && (
                <div className="block-card-fields">
                    {schema?.fields.map(field => (
                        <FieldEditor
                            key={field.key}
                            field={field}
                            value={block.props[field.key]}
                            onChange={(val) => updateField(field.key, val)}
                            toolOptions={toolOptions}
                            pigeonOptions={pigeonOptions}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}