import React from 'react';
import './DecoratedText.css';

interface DecoratedTextProps {
  text: string;
  decoratedIndex: number;
  imageSrc: string;
  style?: React.CSSProperties;
  translation?: { x: number; y: number };
}

export default function DecoratedText({ text, decoratedIndex, imageSrc, translation }: DecoratedTextProps) {
  if (decoratedIndex < 0 || decoratedIndex >= text.length) {
    console.error('decoratedIndex is out of range.');
    return <span>{text}</span>;
  }

  const before = text.slice(0, decoratedIndex);
  const decoratedLetter = text[decoratedIndex];
  const after = text.slice(decoratedIndex + 1);

  return (
    <span className="decorated-text">
      {before}
      <span className="letter-wrapper">
        {decoratedLetter}
        <img
          src={imageSrc}
          alt=""
          className="letter-image"
          style={translation ? {
            "--tx": `${translation.x}em`,
            "--ty": `${translation.y}em`,
          } as React.CSSProperties : undefined}
        />
      </span>
      {after}
    </span>
  );
};
