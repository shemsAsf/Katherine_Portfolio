import { useRef } from "react";
import type { FieldDef } from "../ElementSchema";
import { ToolSelectorField } from "./ToolSelectorField";
import { PigeonSelectorField } from "./PigeonSelectorField";
import { OptionsSelectorField } from "./OptionsSelectorField";

interface Props {
    field: FieldDef;
    value: unknown;
    onChange: (value: unknown) => void;
    toolOptions: { name: string; url: string; }[];
    pigeonOptions: string[];
}

export function FieldEditor({ field, value, onChange, toolOptions, pigeonOptions }: Props) {
    const fileRef = useRef<HTMLInputElement>(null);

    const str = (v: unknown) => (typeof v === "string" ? v : "");
    const num = (v: unknown) => (typeof v === "number" ? v : field.default ?? 0);
    const arr = (v: unknown): unknown[] => (Array.isArray(v) ? v : []);

    const move = (list: unknown[], from: number, to: number) => {
        const copy = [...list];
        const [item] = copy.splice(from, 1);
        copy.splice(to, 0, item);
        return copy;
    };

    return (
        <div className="field-editor">
            <label className="field-label">
                {field.label}
                {field.required && <span className="field-required"> *</span>}
            </label>

            {/* ── text ──────────────────────────────────────────────────── */}
            {field.type === "text" && (
                <input
                    className="field-input"
                    type="text"
                    value={str(value)}
                    placeholder={field.placeholder}
                    onChange={e => onChange(e.target.value)}
                />
            )}

            {/* ── textarea ──────────────────────────────────────────────── */}
            {field.type === "textarea" && (
                <textarea
                    className="field-textarea"
                    value={str(value)}
                    placeholder={field.placeholder}
                    rows={4}
                    onChange={e => onChange(e.target.value)}
                />
            )}

            {/* ── color ─────────────────────────────────────────────────── */}
            {field.type === "color" && (
                <div className="field-color-row">
                    <input
                        className="field-input"
                        type="text"
                        value={str(value)}
                        placeholder="e.g. #ff0000 or var(--primary-color)"
                        onChange={e => onChange(e.target.value)}
                    />
                    {str(value).startsWith("#") && (
                        <input
                            type="color"
                            value={str(value)}
                            onChange={e => onChange(e.target.value)}
                            style={{ width: 36, height: 36, border: "none", cursor: "pointer" }}
                        />
                    )}
                    <div className="color-presets">
                        <button
                            type="button"
                            className="color-preset-btn primary"
                            onClick={() => onChange("var(--primary-color)")}
                            title="Primary"
                        />
                        <button
                            type="button"
                            className="color-preset-btn secondary"
                            onClick={() => onChange("var(--secondary-color)")}
                            title="Secondary"
                        />
                        <button
                            type="button"
                            className="color-preset-btn white"
                            onClick={() => onChange("#ffffff")}
                            title="White"
                        />
                    </div>
                </div>
            )}

            {/* ── number ────────────────────────────────────────────────── */}
            {field.type === "number" && (
                <input
                    className="field-input"
                    type="number"
                    value={num(value) as number}
                    placeholder={field.placeholder}
                    onChange={e => onChange(Number(e.target.value))}
                />
            )}

            {/* ── boolean ───────────────────────────────────────────────── */}
            {field.type === "boolean" && (
                <label className="field-toggle">
                    <input
                        type="checkbox"
                        checked={!!value}
                        onChange={e => onChange(e.target.checked)}
                    />
                    <span>{value ? "Yes" : "No"}</span>
                </label>
            )}

            {/* ── image (single) ────────────────────────────────────────── */}
            {field.type === "image" && (
                <div className="field-image">
                    <input
                        ref={fileRef}
                        type="file"
                        accept="image/*,video/*"
                        style={{ display: "none" }}
                        onChange={e => e.target.files?.[0] && onChange(e.target.files[0])}
                    />
                    <button className="field-upload-btn" onClick={() => fileRef.current?.click()}>
                        {value instanceof File ? `✓ ${value.name}` : value ? "✓ File set" : "Upload File"}
                    </button>
                    {/* Also allow a URL string */}
                    <input
                        className="field-input"
                        type="text"
                        placeholder="…or paste a URL"
                        value={typeof value === "string" ? value : ""}
                        onChange={e => onChange(e.target.value)}
                    />
                </div>
            )}

            {/* ── stringList ────────────────────────────────────────────── */}
            {field.type === "stringList" && (
                <div className="field-list">
                    {arr(value).map((item, i) => (
                        <div key={i} className="field-list-row">
                            <textarea
                                className="field-textarea"
                                value={str(item)}
                                placeholder={field.placeholder}
                                onChange={e => {
                                    const next = [...arr(value)];
                                    next[i] = e.target.value;
                                    onChange(next);
                                }}
                            />
                            <button
                                className="field-reorder-btn"
                                disabled={i === 0}
                                onClick={() => {
                                    const next = move(arr(value), i, i - 1);
                                    onChange(next);
                                }}
                            >
                                ↑
                            </button>
                            <button
                                className="field-reorder-btn"
                                disabled={i === arr(value).length - 1}
                                onClick={() => {
                                    const next = move(arr(value), i, i + 1);
                                    onChange(next);
                                }}
                            >
                                ↓
                            </button>
                            <button
                                className="field-list-remove"
                                onClick={() => onChange(arr(value).filter((_, j) => j !== i))}
                            >✕</button>
                        </div>
                    ))}
                    <button
                        className="field-list-add"
                        onClick={() => onChange([...arr(value), ""])}
                    >+ Add Item</button>
                </div>
            )}

            {/* ── imageList ─────────────────────────────────────────────── */}
            {field.type === "imageList" && (
                <div className="field-list">
                    <label className="field-upload-btn-sm">
                        + Bulk Upload
                        <input
                            type="file"
                            accept="image/*,video/*"
                            multiple
                            style={{ display: "none" }}
                            onChange={e => {
                                const files = Array.from(e.target.files ?? []);
                                if (!files.length) return;

                                const next = [
                                    ...arr(value),
                                    ...files
                                ];

                                onChange(next);
                            }}
                        />
                    </label>
                    {arr(value).map((item, i) => (
                        <div key={i} className="field-list-row">
                            <span className="field-image-thumb">
                                {item instanceof File
                                    ? `📄 ${item.name}`
                                    : typeof item === "string" && item
                                        ? <img src={item} alt="" style={{ height: 32 }} />
                                        : "—"
                                }
                            </span>
                            <label className="field-upload-btn-sm">
                                Upload
                                <input
                                    type="file"
                                    accept="image/*,video/*"
                                    style={{ display: "none" }}
                                    onChange={e => {
                                        const file = e.target.files?.[0];
                                        if (!file) return;
                                        const next = [...arr(value)];
                                        next[i] = file;
                                        onChange(next);
                                    }}
                                />
                            </label>
                            <button
                                className="field-reorder-btn"
                                disabled={i === 0}
                                onClick={() => {
                                    const next = move(arr(value), i, i - 1);
                                    onChange(next);
                                }}
                            >
                                ↑
                            </button>
                            <button
                                className="field-reorder-btn"
                                disabled={i === arr(value).length - 1}
                                onClick={() => {
                                    const next = move(arr(value), i, i + 1);
                                    onChange(next);
                                }}
                            >
                                ↓
                            </button>
                            <button
                                className="field-list-remove"
                                onClick={() => onChange(arr(value).filter((_, j) => j !== i))}
                            >✕</button>
                        </div>
                    ))}
                    <button
                        className="field-list-add"
                        onClick={() => onChange([...arr(value), ""])}
                    >+ Add Image</button>
                </div>
            )}

            {/* ── imageRowList ──────────────────────────────────────────── */}
            {field.type === "imageRowList" && (
                <div className="field-list">
                    <label className="field-upload-btn-sm">
                        + Bulk Upload
                        <input
                            type="file"
                            accept="image/*,video/*"
                            multiple
                            style={{ display: "none" }}
                            onChange={e => {
                                const files = Array.from(e.target.files ?? []);
                                if (!files.length) return;

                                const next = [
                                    ...arr(value),
                                    ...files.map(file => ({ url: file, width: { mobile: 100, desktop: 50 } }))
                                ];

                                onChange(next);
                            }}
                        />
                    </label>
                    {arr(value).map((item: unknown, i) => {
                        const row = (item as { url?: unknown; width?: { mobile?: number; desktop?: number } }) ?? {};
                        return (
                            <div key={i} className="field-imagerow-item">
                                <label className="field-upload-btn-sm">
                                    {row.url instanceof File ? `✓ ${row.url.name}` : "Upload"}
                                    <input
                                        type="file"
                                        accept="image/*,video/*"
                                        style={{ display: "none" }}
                                        onChange={e => {
                                            const file = e.target.files?.[0];
                                            if (!file) return;
                                            const next = [...arr(value)];
                                            next[i] = { ...row, url: file };
                                            onChange(next);
                                        }}
                                    />
                                </label>
                                <div className="field-input-wrapper">
                                    <label className="field-imagerow-width-label">
                                        <span>M</span>
                                        <input
                                            className="field-input field-input-sm"
                                            type="number"
                                            placeholder="%"
                                            value={row.width?.mobile ?? 100}
                                            onChange={e => {
                                                const next = [...arr(value)];
                                                next[i] = { ...row, width: { ...(row.width ?? {}), mobile: Number(e.target.value) } };
                                                onChange(next);
                                            }}
                                        />
                                    </label>
                                    <label className="field-imagerow-width-label">
                                        <span>D</span>
                                        <input
                                            className="field-input field-input-sm"
                                            type="number"
                                            placeholder="%"
                                            value={row.width?.desktop ?? 50}
                                            onChange={e => {
                                                const next = [...arr(value)];
                                                next[i] = { ...row, width: { ...(row.width ?? {}), desktop: Number(e.target.value) } };
                                                onChange(next);
                                            }}
                                        />
                                    </label>
                                    <button
                                        className="field-reorder-btn"
                                        disabled={i === 0}
                                        onClick={() => {
                                            const next = move(arr(value), i, i - 1);
                                            onChange(next);
                                        }}
                                    >
                                        ↑
                                    </button>
                                    <button
                                        className="field-reorder-btn"
                                        disabled={i === arr(value).length - 1}
                                        onClick={() => {
                                            const next = move(arr(value), i, i + 1);
                                            onChange(next);
                                        }}
                                    >
                                        ↓
                                    </button>
                                    <button
                                        className="field-list-remove"
                                        onClick={() => onChange(arr(value).filter((_, j) => j !== i))}
                                    >✕</button>
                                </div>
                            </div>
                        );
                    })}
                    <button
                        className="field-list-add"
                        onClick={() => onChange([...arr(value), { url: "", width: { mobile: 100, desktop: 50 } }])}
                    >+ Add Image</button>
                </div>
            )}
            {/* ── toolSelector ─────────────────────────────────────────── */}
            {field.type === "toolsSelector" && (
                <ToolSelectorField
                    value={Array.isArray(value) ? value as string[] : []}
                    onChange={onChange}
                    toolOptions={toolOptions}
                />
            )}
            {/* ── pigeonSelector ───────────────────────────────────────── */}
            {field.type === "pigeonSelector" && (
                <PigeonSelectorField
                    value={
                        typeof value === "object" && value !== null && "url" in value
                            ? value as { url: string; translation?: { x: number; y: number } }
                            : { url: "", translation: { x: 0, y: 0 } }
                    }
                    onChange={onChange}
                    pigeonOptions={pigeonOptions}
                />
            )}
            {/* ── pigeonSelector ───────────────────────────────────────── */}
            {field.type === "options" && (
                <OptionsSelectorField
                    value={str(value)}
                    onChange={onChange}
                    options={field.options == null ? [] : field.options}
                />
            )}
        </div>
    );
}