import "./HSEFonts.css"

interface ShapeData {
    path: string,
    x: number,
    y: number,
    width: number
}

export default function HSEFontsIcons() {
    const shapes: ShapeData[] = [
        { path: "/Img/HSEFonts/Star1.svg", x: 3, y: 6, width: 323 },
        { path: "/Img/HSEFonts/Star3.svg", x: 22, y: -7, width: 315 },
        { path: "/Img/HSEFonts/Star2.svg", x: 90, y: -15, width: 163 },
        { path: "/Img/HSEFonts/Star4.svg", x: 37, y: 22, width: 240 },
        { path: "/Img/HSEFonts/Group 52.svg", x: 55, y: 29, width: 630 },
        { path: "/Img/HSEFonts/Group 47.svg", x: 10, y: 40, width: 1524 },
        { path: "/Img/HSEFonts/Group 50.svg", x: 22, y: 88, width: 100 },
        { path: "/Img/HSEFonts/Group 50.svg", x: 14, y: 88, width: 100 },
        { path: "/Img/HSEFonts/Group 50.svg", x: 6, y: 88, width: 100 },
        { path: "/Img/HSEFonts/Group 51.svg", x: 35, y: 75, width: 150 },
        { path: "/Img/HSEFonts/Vector 12.svg", x: 50, y: 80, width: 750 },
    ]

    return (
        <div className="hsefonticons">
            {shapes.map(({ path, x, y, width }, index) => (
                <img
                    key={index}
                    style={{
                        position: 'absolute',
                        left: `${x}%`,
                        top: `${y}%`,
                        width: `${width / 1719 * 100}%`, // 1440 = your design's base width
                    }}
                    src={path}
                />
            ))}
            <p
                className="m-txt"
                style={{
                    position: 'absolute',
                    right: "4vw",
                    top: `10%`,
                    textAlign: "right"
                }}>
                <strong>Simple graphics,</strong><br />
                since the main focus should be on the text
                + active animation is already present</p>
        </div>
    );
}