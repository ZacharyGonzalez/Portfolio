import "./glassLetter.css";
type GlassLetterProp = {
  letter: string;
};
export default function GlassLetter({ letter }: GlassLetterProp) {
  return <div className="glass-letter">{letter}</div>;
}
