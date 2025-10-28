import "./wordContainer.css";
import GlassWord from "../word/GlassWord";
interface WordContainerProp {
  skill: string;
}
export default function WordContainer({ skill }: WordContainerProp) {
  const skillImages:Record<string,string> ={
    React:'../../../assets/react.png',
    NodeJs:'../../../assets/node.png',
    Python:'../../../assets/python.png',
    Mongodb:'../../../assets/mongodb.png',
    SQL:'../../../assets/sql.png',
    LAngchain:'../../../assets/langchain.png',
  }
    const selectedSkill = (skill: string): string =>
      skillImages[skill] || '/images/default.png'
  
  return (
    <div className="word-container">
      <img
        src={selectedSkill(skill)}
        alt="background"
        className="word-bg"
      />
      <GlassWord word={skill} />
    </div>
  );
}
