import { useState } from "react";
import NumberInput from "./NumberInput";
import DecoratedText from "@/projects/components/DecoratedText";

interface Props {
    value: PigeonValue;
    onChange: (v: PigeonValue) => void;
    pigeonOptions: string[];
}

interface PigeonValue {
    url: string;
    translation?: { x: number; y: number };
}

export function PigeonSelectorField({ value, onChange, pigeonOptions }: Props) {
    const translation = value.translation ?? { x: 0, y: 0 };
    const [previewLetter, setPreviewLetter] = useState("a")

    return (
        <div>
            <div className="pigeon-selector">
                {pigeonOptions.length === 0
                    ? <span className="tools-loading">No pigeons available</span>
                    : pigeonOptions.map(pigeon => (
                        <button
                            key={pigeon}
                            className={`pigeon-chip ${value.url === pigeon ? "active" : ""}`}
                            onClick={() => onChange({ ...value, url: pigeon })}
                            title={pigeon}
                        >
                            <img src={pigeon} alt={pigeon} />
                        </button>
                    ))
                }
            </div>

            <div className="pigeon-translation">
                <NumberInput
                    value={translation.x}
                    onChange={x => onChange({ ...value, translation: { ...translation, x } })}
                />
                <NumberInput
                    value={translation.y}
                    onChange={y => onChange({ ...value, translation: { ...translation, y } })}
                />
            </div>

            <div className="pigeon-preview">
                {
                    (previewLetter !== null) && 
                    (
                        <h1 style={{ marginLeft: "var(--default-left-spacing)" }}>
                            <DecoratedText
                                text={previewLetter}
                                decoratedIndex={0}
                                imageSrc={value.url}
                                translation={value.translation}
                            />
                        </h1>
                    )
                }

                <input
                    type="text"
                    value={previewLetter}
                    onChange={e => setPreviewLetter(e.target.value[0] || '')}
                />
            </div>
        </div>
    );
}