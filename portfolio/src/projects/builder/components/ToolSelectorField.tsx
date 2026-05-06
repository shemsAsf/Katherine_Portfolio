interface Props {
    value: string[];
    onChange: (v: string[]) => void;
    toolOptions: { name: string; url: string; }[];
}

export function ToolSelectorField({ value, onChange, toolOptions }: Props) {
    const toggle = (tool: string) => {
        const next = value.includes(tool)
            ? value.filter(t => t !== tool)
            : [...value, tool];
        onChange(next);
    };

    return (
        <div className="index-form-tools">
            {toolOptions.length === 0
                ? <span className="tools-loading">No tools available</span>
                : toolOptions.map(tool => (
                    <button
                        key={tool.name}
                        className={`tool-chip ${value.includes(tool.name) ? "active" : ""}`}
                        onClick={() => toggle(tool.name)}
                    >
                        {tool.name}
                    </button>
                ))
            }
        </div>
    );
}