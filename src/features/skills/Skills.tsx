import "./skills.css";
import GlassWord from "./components/word/GlassWord";
export default function Skills() {
  return (
    <div className="skills">
      <div className="row">
        <div className="col1">
          <GlassWord word="React" />
          <GlassWord word="SQL" />
          <GlassWord word="tbd" />
        </div>
        <div>
          <div className="col2">
            <GlassWord word="Node.js" />
            <GlassWord word="MongoDB" />
            <GlassWord word="tbd" />
          </div>
        </div>
        <div className="col3">
          <GlassWord word="Python" />
          <GlassWord word="Langchain" />
          <GlassWord word="tbd" />
        </div>
      </div>
    </div>
  );
}
