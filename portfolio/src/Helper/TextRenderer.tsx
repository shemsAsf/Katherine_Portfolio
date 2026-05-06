import React from "react";

export const renderText = (line: string): React.ReactNode[] => {
	const parts = line.split(/\*\*(.*?)\*\*/g);
	return parts.map((part, i) =>
		i % 2 === 1 ? <strong key={i}>{part}</strong> : part
	);
};

export const separateParagraphs = (paragraphs: string[], paragraphClass:string = ""): React.ReactNode => {
	
	return (
		<>
			{paragraphs.map((line, index) => (
				<p className={paragraphClass} key={index}>
					{renderText(line)}
				</p>
			))}
		</>
	);
};

export interface ResponsiveProp<T> {
    mobile?: T;
    desktop?: T;
}

export function resolveResponsive<T>(val: T | ResponsiveProp<T>): { m: T; d: T } {
    if (val && typeof val === "object" && ("mobile" in val || "desktop" in val)) {
        const r = val as ResponsiveProp<T>;
        return {
            m: (r.mobile ?? r.desktop) as T,
            d: (r.desktop ?? r.mobile) as T,
        };
    }
    return { m: val as T, d: val as T };
}