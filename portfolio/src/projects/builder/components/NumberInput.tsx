import { useState } from "react";

export default function NumberInput({ value, onChange, step = .01 }: {
    value: number;
    onChange: (v: number) => void;
    step?: number;
}) {
    const [raw, setRaw] = useState(String(value));

    return (
        <input
            className="field-input field-input-sm"
            type="number"
            step={step}
            value={raw}
            onChange={e => setRaw(e.target.value)}
            onBlur={() => {
                const parsed = parseFloat(raw);
                if (!isNaN(parsed)) {
                    onChange(parsed);
                } else {
                    setRaw(String(value));
                }
            }}
        />
    );
}