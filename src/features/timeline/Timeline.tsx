import "./timeline.css";
import TimelineRuler from "./components/timelineRuler/TimelneRuler";
// Timeline: a tree will be the linear progression, a branch will contain the year/date info, the event contains the data
export default function Timeline() {
  return (
    <div className="timeline">
      <TimelineRuler/>
    </div>
  )
}
