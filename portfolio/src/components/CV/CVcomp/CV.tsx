import PercentageBar from "../../layout/PercentageBar/PercentageBar";
import ToolsGrid from "../ToolsGrid/ToolsGrid";
import Timeline from "../Timeline/Timeline"; // <-- import it here
import "./CV.css";

export default function CV() {
    const workTimeline = [
        {
            date: "2023 – now",
            description:
                '2D/3D Motion & Graphic Designer at “Tigre Rossa” Design Agency.\nWorked with companies like Zolar, B Corp, UITP, and others on animation videos and 3D visualizations.',
        },
        {
            date: "2024",
            description:
                "“Kiberdom” mascot animation (3D + 2D).\n2D mascot incorporation into real-life footage.",
        },
        {
            date: "2022",
            description:
                "“Malibu” Beauty Salon branding.\nDeveloped a branding system including guidelines, presentation, and mockups.",
        },
        {
            date: "2022",
            description:
                "128 BPM — 3D CGI animation for Instagram and social media using Blender.",
        },
    ];

    const studyTimeline = [
        {
            date: "2024 - 2025",
            description: ["Marangoni Milano", "Masters in Digital Art Direction"],
        },
        {
            date: "2020 - 2024",
            description: [
                "Higher School of Economics",
                "Bachelor's degree in Communication Graphic Design",
            ],
        },
        {
            date: "Sept – May 2019/20",
            description: [
                "Higher School of Economics",
                "Graphic Design course",
                "History of Design course",
            ],
        },
        {
            date: "Sept – May 2018/19",
            description: [
                "BHSAD (British Higher School of Art and Design)",
                "Graphic Design course",
            ],
        },
        {
            date: "July – Aug 2019",
            description: [
                "TASIS Summer Camp",
                "Drawing & 3D Design course",
                "Digital Music course",
                "Graphic Design course",
            ],
        },
        {
            date: "July – Aug 2018",
            description: ["TASIS Summer Camp", "Television Production"],
        },
    ];

    return (
        <div className="CV-main">
            <div className="CV-title">
                <h1>Curriculum<br />Vitae</h1>
                <br />
                <h2>Multidisciplinary Designer & Motion Artist</h2>
            </div>

            <div className="CV-history-wrapper">
                <Timeline title="WORKING EXPERIENCE" items={workTimeline} />
                <Timeline title="EDUCATION" items={studyTimeline} />

                <div className="CV-history CV-profile">
                    <h2>PROFILE</h2>
                    <p>
                        Graphic designer with 4 years of work experience. With a strong
                        foundation in graphic design, I focus on motion 3D graphics and am
                        interested in game development. I also have a lot of experience in
                        2D animation and branding.
                    </p>
                </div>
            </div>

            <div className="CV-skills">
                <div>
                    <h2>HARD SKILLS</h2>
                    <ToolsGrid />
                </div>
                <div>
                    <h2>SOFT SKILLS</h2>
                    <p>Time management</p>
                    <p>Communication</p>
                    <p>Flexibility</p>
                    <p>Motivation</p>
                    <p>Leadership and teamwork</p>
                    <p>Problem-solving</p>
                </div>
            </div>
            <div className="CV-legal">
                * I authorize the processing of personal 
                data contained in my curriculum vitae based 
                on art. 13 GDPR 679/16.
            </div>
        </div>
    );
}
