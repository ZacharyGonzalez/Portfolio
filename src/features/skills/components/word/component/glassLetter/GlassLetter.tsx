import "./glassLetter.css";

type GlassLetterProp = {
  letter: string;
  index: number; // used for sequential delay
};

export default function GlassLetter({ letter, index }: GlassLetterProp) {
  return (
    <div
      className="glass-letter"
      style={{ "--delay": `${index * 0.1}s` } as React.CSSProperties}
    >
      {letter}
    </div>
  );
}
