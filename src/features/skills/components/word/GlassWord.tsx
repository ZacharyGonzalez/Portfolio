import "./glassWord.css";
import GlassLetter from "./component/glassLetter/GlassLetter";
export default function GlassWord() {
  return (
    <div className="glass-word">
      <GlassLetter letter={"H"} />
      <GlassLetter letter={"E"} />
      <GlassLetter letter={"L"} />
      <GlassLetter letter={"L"} />
      <GlassLetter letter={"O"} />
    </div>
  );
}
