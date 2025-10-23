import "./glassWord.css";
import GlassLetter from "./component/glassLetter/GlassLetter";
interface GlassWordProps {
  word: string;
}
export default function GlassWord({ word }: GlassWordProps) {
  function characterizeWord(word: string) {
    return word
      .split("")
      .map((char, index) => <GlassLetter key={index} letter={char} />);
  }

  return <div className="glass-word">{characterizeWord(word)}</div>;
}
