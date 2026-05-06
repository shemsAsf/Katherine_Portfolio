interface Props {
    value: string;
    onChange: (v: string) => void;
    options: string[];
}

export function OptionsSelectorField({ value, onChange, options }: Props) {
    return (
        <div className="index-form-tools">
            {options.map(option => (
                    <button
                        key={option}
                        className={`tool-chip ${value === option ? "active" : ""}`}
                        onClick={() => onChange(option)}
                    >
                        {option}
                    </button>
                ))
            }
        </div>
    );
}