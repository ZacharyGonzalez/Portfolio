import "./timelineNode.css";
import TimelineEvent from "../timelineEvent/TimelineEvent";

type TimelineNodeProp = {
  year: string;
  desc: string;
};

export default function TimelineNode({ year, desc }: TimelineNodeProp) {
  return (
    <div className="timeline-node">
      <div className="node-icon">O</div>
      <div className="year">{year}</div>
      <TimelineEvent desc={desc} />
    </div>
  );
}
