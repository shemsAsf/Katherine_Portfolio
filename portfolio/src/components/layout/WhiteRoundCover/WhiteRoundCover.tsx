import "./WhiteRoundCover.css"

export default function WhiteRoundCover({color}: {color: string}) {
    return (
        <div 
            className="white-cover-bg"
            style={{ backgroundColor: color }}
            >
            <div className="white-cover"/>
        </div>
    )
}