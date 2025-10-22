import "../styles/bio.css";
import SplitScreen from "../../../../components/layout/SplitScreen";
import MyIntro from "../components/MyIntro";
export default function Bio() {
  return (
    <div className="bio">
      <SplitScreen left={<MyIntro />} right={<>PLACEHOLDER FOR CATCH</>} />
    </div>
  );
}
