import "./bio.css";
import SplitScreen from "../../components/layout/splitScreen/SplitScreen";
import MyIntro from "./components/myIntro/MyIntro";
import MyImage from "./components/myImage/MyImage";
import Achievements from "./components/achievements/Achievements";
export default function Bio() {
  return (
    <div className="bio">
      <SplitScreen
        left={
          <MyIntro
            Job="Software Developer"
            Greeting="Hello I'm"
            Name="Zachary Gonzalez"
            Desc="Full-Stack Developer | Pragmatic, delivery-oriented professional"
          />
        }
        right={<MyImage />}
      />
      <Achievements />
    </div>
  );
}
