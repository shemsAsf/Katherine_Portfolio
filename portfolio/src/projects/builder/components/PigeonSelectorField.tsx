import { useState } from "react";
import NumberInput from "./NumberInput";
import DecoratedText from "@/projects/components/DecoratedText";
import PigeonTitle from "@/projects/components/PigeonTitle";

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
            
            <br/>

            <label className="field-label">
                CUSTOM TRANSLATION
            </label>
            
            <br/>

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
            
            <br/>

           <label className="field-label">
                PREVIEW LETTER
            </label>
            
            <br/>

            <input
                type="text"
                value={previewLetter}
                onChange={e => setPreviewLetter(e.target.value[0] || '')}
            />

            <br/>
            <br/>

            <label className="field-label">
                PREVIEW
            </label>  

            <br/>
            <br/>

            <div className="pigeon-preview">
                {
                    (previewLetter !== null) &&
                    (
                        <h1>
                            <PigeonTitle
                                text={previewLetter}
                                index={0}
                                pigeon={value}
                                color="black"
                            />
                        </h1>
                    )
                }
            </div>
        </div>
    );
}