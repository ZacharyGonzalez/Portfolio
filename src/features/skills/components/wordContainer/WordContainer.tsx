import "./wordContainer.css";
import GlassWord from "../word/GlassWord";
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaGitAlt} from "react-icons/fa";
import { SiMongodb, SiLangchain } from "react-icons/si";
import type { JSX } from "react";

interface WordContainerProp {
  skill: string;
}
export default function WordContainer({ skill }: WordContainerProp) {

  const skillIcons: Record<string, JSX.Element> = {
    React: <FaReact size={120} color="#61DBFB" />,
    NodeJs: <FaNodeJs size={120} color="#68A063" />,
    Python: <FaPython size={120} color="#FFD43B" />,
    Mongodb: <SiMongodb size={120} color="#4DB33D" />,
    SQL: <FaDatabase size={120} color="#4479A1" />,
    Langchain: <SiLangchain size={120} color="#00B37E" />,
    Git: <FaGitAlt size={120} color='#d11800ff'/>
  };
  const selectedSkill = (skill: string): JSX.Element =>
    skillIcons[skill] || <FaDatabase size={120} color="#888" />

  return (
    <div className="word-container">
      <div className="word-bg">{selectedSkill(skill)}</div>
      <GlassWord word={skill} />
    </div>
  );
}
