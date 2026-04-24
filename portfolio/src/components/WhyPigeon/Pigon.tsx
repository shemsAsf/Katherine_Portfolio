import Gallery from "../layout/Gallery/Gallery";
import "./Pigeon.css";
import DecoratedText from "@/components/DecoratedText/DecoratedText";

const images: string[] = [

    "image 9.png",
    "image 10.png",
    "image 13.png",
    "image 14.png",
    "Group 4.png",
    "image 11.png",
    "image 12.png",
    "image 17.png",
]

export default function Pigeon() {
    return (
        <div className="pigeon-main">
            <div className="pigeon-flex-container">
                <div className="gallery-col">
                    <h3 className="l-txt tit">WHY ?</h3>
                    <p className="l-txt">
                        Pigeons are surprisingly <strong>intelligent</strong>,
                        exhibiting cognitive abilities that go
                        beyond their reputation, including
                        passing the mirror test, recognizing
                        letters, and even distinguishing between
                        individual humans in photographs.
                    </p>
                    <div className="pigeon-gallery">
                        {[0, 1].map(row => (
                            <div className="pigeon-gallery-row" key={row}>
                                {images.slice(
                                    row * Math.ceil(images.length / 2),
                                    (row + 1) * Math.ceil(images.length / 2)
                                ).map((item, index) => (
                                    <img
                                        key={index}
                                        src={"Img/Pigeons/PigeonGallery/" + item}
                                        alt={item}
                                    />
                                ))}
                                {row == 1 ?
                                    <h3 className="l-txt vert-text">WHY NOT?</h3> :
                                    <></>
                                }
                            </div>
                        ))}
                    </div>
                </div>


                <img
                    src="/Img/Pigeons/speaking_pigeon.png"
                    className="speaking-pigeon"
                    alt="speaking-pigeon" />

                <div className="chart">
                    <img
                        src="/Img/Pigeons/pigeonChart.png"
                        className="pigeon-chart"
                        alt="pigeon-chart" />
                    <ul className="pigeon-list">
                        <li>Urban Wisdom and Digital World </li>
                        <li>Messenger of Ideas </li>
                        <li>Communication & Intelligence </li>
                        <li>Peace & Love </li>
                        <li>Loyalty & Devotion</li>
                    </ul>
                </div>
            </div>
        </div >
    );
}
