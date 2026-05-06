import { useState } from "react";
import type { ElementSchema } from "../ElementSchema";

interface Category {
    id: string;
    label: string;
    elements: ElementSchema[];
}

interface Props {
    categories: Category[];
    onSelect: (schema: ElementSchema) => void;
    onClose: () => void;
}

export function ElementPicker({ categories, onSelect, onClose }: Props) {
    const [activeCategory, setActiveCategory] = useState(categories[0]?.id ?? "");

    const current = categories.find(c => c.id === activeCategory);

    return (
        <div className="picker-overlay" onClick={onClose}>
            <div className="picker-modal" onClick={e => e.stopPropagation()}>
                <div className="picker-header">
                    <span>Add Element</span>
                    <button className="picker-close" onClick={onClose}>✕</button>
                </div>

                <div className="picker-body">
                    {/* Category tabs */}
                    <nav className="picker-categories">
                        {categories.map(cat => (
                            <button
                                key={cat.id}
                                className={`picker-cat-btn ${cat.id === activeCategory ? "active" : ""}`}
                                onClick={() => setActiveCategory(cat.id)}
                            >
                                {cat.label}
                            </button>
                        ))}
                    </nav>

                    {/* Element grid */}
                    <div className="picker-elements">
                        {current?.elements.map(schema => (
                            <button
                                key={schema.type}
                                className="picker-element-card"
                                onClick={() => onSelect(schema)}
                            >
                                <span className="picker-element-label">{schema.label}</span>
                                <span className="picker-element-desc">{schema.description}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}