import "./timelineRuler.css";
import TimelineNode from "../timelineNode/TimelineNode";
export default function TimelineRuler() {
  return (
    <div className="timeline-ruler">
      <TimelineNode
        year={"2025"}
        desc={"Traveled across the US visiting Family"}
      />
      <TimelineNode
        year={"2024"}
        desc={`An interesting year, I led my senior capstone and won second place; while at the same time was taking an `}
      />
    </div>
  );
}
