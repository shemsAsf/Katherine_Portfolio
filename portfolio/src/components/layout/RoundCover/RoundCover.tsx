import "./RoundCover.css"

export default function RoundCover({bg_color, color}: {bg_color: string, color: string}) {
    return (
        <div 
            className="cover-bg"
            style={{ backgroundColor: bg_color }}
            >
            <div className="cover"
            style={{ backgroundColor: color }}/>
        </div>
    )
}