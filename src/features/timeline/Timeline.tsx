import Banner from "../../components/layout/banner/Banner";
import TimelineRuler from "./components/timelineRuler/TimelineRuler";

export default function Timeline() {
  return (
    <>
      <Banner title={"Timeline"} />
      <div className="timeline">
        <TimelineRuler />
      </div>
    </>
  );
}
