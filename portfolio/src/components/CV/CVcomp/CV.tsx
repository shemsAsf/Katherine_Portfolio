import ToolsGrid from "../ToolsGrid/ToolsGrid";
import Timeline from "../Timeline/Timeline"; // <-- import it here
import "./CV.css";
import DecoratedText from "@/projects/components/DecoratedText";

export default function CV() {
    const workTimeline = [
        { date: "2025 - now", description: ["**TBX Dgency Motion Design and Art Direction**", "Working with big shows and concerts, visuals for exhibitions, diverse motion design."] },
        { date: "2023 - 2025", description: ['**2D/3D Motion & Graphic Designer in "Tigre Rossa"**', "Design Agency. Working with companies like Zolar, B Corp, UITP, and many others, making animation videos and 3d visualization."] },
        { date: "2024", description: ['"**Kiberdom**" mascot animation (3d+2d).', "2d Mascot incorporation in real life footage"] },
        { date: "2022", description: ['"**Malibu**" Beauty Salon branding. A branding system with guidelines, presentation, mockups'] },
        { date: "2022", description: ["**128 BPM 3d CGI**", "animation for Instagram and social media using Blender"] },

    ];

    const studyTimeline = [
        { date: "2024-2025", description: ["**Marangoni Milano**", "Masters Digital Art Direction"] },
        { date: "2020-2024", description: ["**Higher School of Economics**", "Bachelors degree in Communication Graphic Design"] },
        { date: "September-May 2019/20", description: ["**Higher School of Economics**", "Graphic Design course", "History of Design course"] },
        { date: "September-May 2018/19", description: ["**BHSAD** (British Higher School of Art and Design)", "Graphic Design course"] },
        { date: "July-August 2019", description: ["**TASIS** Summer Camp", "Drawing & 3D Design course", "Digital Music course", "Graphic Design course"] },
        { date: "July-August 2018", description: ["**TASIS** Summer Camp", "Television Production"] },
    ];

    return (
        <div className="CV-main">
            <div className="CV-title">
                <h1>
                    <DecoratedText
                        text="Curriculum"
                        decoratedIndex={9}
                        imageSrc={"/Img/Pigeons/speaking_pigeon.png"}
                        style={{
                            transform: "translate(-23%, 0)",
                            width: "clamp(1rem, 7vw, 6rem)",
                        }}
                    />
                    <br />Vitae</h1>
                <br />
                <p className="l-txt">Art Director & Motion Graphics Specialist</p>
            </div>
            <div className="cv-content">

                <div className="CV-history-wrapper">
                    <Timeline title="WORKING EXPERIENCE" items={workTimeline} />
                    <Timeline title="EDUCATION" items={studyTimeline} />


                </div>

                <div className="CV-history CV-profile">
                    <h2>PROFILE</h2>
                    <p>
                        Multidisciplinary graphic designer and art director
                        with 4 years of work experience. With a strong foundation
                        in communication design, I focus on motion 3D graphics and
                        interested in game development. I also have a lot of
                        experience in the sphere of 2d animation and branding and
                        curating the projects.
                    </p>
                </div>

                <div className="CV-skills">
                    <h2>HARD SKILLS</h2>
                    <ToolsGrid />
                </div>

                <div className="soft-skills">
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
