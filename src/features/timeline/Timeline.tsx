import "./timeline.css";
import Banner from "../../components/layout/banner/Banner";
// Timeline: a tree will be the linear progression, a branch will contain the year/date info, the event contains the data
export default function Timeline() {
  return (
    <>
      <Banner title={"Timeline"} />
      <div className="timeline"></div>
    </>
  );
}
