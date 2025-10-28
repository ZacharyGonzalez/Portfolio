import "./glassWord.css";
import GlassLetter from "./component/glassLetter/GlassLetter";
interface GlassWordProps {
  word: string;
}

export default function GlassWord({ word }: GlassWordProps) {
  return (
    <div className="glass-word">
      {word.split("").map((char, index) => (
        <GlassLetter key={index} letter={char} index={index} />
      ))}
    </div>
  );
}
