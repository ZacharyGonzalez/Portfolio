import "./wordContainer.css";
import GlassWord from "../word/GlassWord";

export default function WordContainer() {
  return (
    <div className="word-container">
      <div className="col1">
        <GlassWord word="React" />
        <GlassWord word="SQL" />
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
      </div>
    </div>
  );
}
