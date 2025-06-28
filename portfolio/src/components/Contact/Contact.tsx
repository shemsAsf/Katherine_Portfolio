import React from 'react';
import './Contact.css';
import DecoratedText from '../DecoratedText/DecoratedText';
import RoundCover from '../layout/RoundCover/RoundCover';

export default function Contact() {
    return (
        <div className="contact-container">
            <div className="contact-header">
                <h1>
                    <DecoratedText
                        text="let's talk"
                        decoratedIndex={7}
                        imageSrc={"/Img/Pigeons/speaking_pigeon.png"}
                    />
                </h1>
            </div>
            <RoundCover bg_color='var(--secondary-color)' color="white" />
            <div className="contact-links">
                <a href="https://wa.me/+393383818706" target="_blank" rel="noopener noreferrer">
                    whatsapp
                </a>
                <a href="https://www.linkedin.com/in/katherine-aston/" target="_blank" rel="noopener noreferrer">
                    linkedin
                </a>
                <a href="https://www.behance.net/katherineaston#" target="_blank" rel="noopener noreferrer">
                    behance
                </a>
                <a href="mailto:katherineaston29@gmail.com">
                    mail
                </a>
            </div>
        </div>
    );
};
