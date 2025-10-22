import "../styles/bio.css";
import SplitScreen from "../../../../components/layout/SplitScreen";
import MyIntro from "../components/MyIntro";
import MyCatch from "../components/MyCatch";
import Banner from "../../../../components/layout/Banner";
export default function Bio() {
  return (
    <div className="bio">
      <SplitScreen
        left={
          <MyIntro
            Job="Software Developer"
            Greeting="Hello I'm"
            Name="Zachary Gonzalez"
            Desc="Full-Stack Developer | Pragmatic, Delivery-oriented professional"
          />
        }
        right={<MyCatch />}
      />
      {/* Banner below uses a split screen with both partitions being another split screen*/}
      <Banner
        title={
          <SplitScreen
            left={<SplitScreen left={<>left left</>} right={<>left right</>} />}
            right={
              <SplitScreen left={<>right left</>} right={<>right right</>} />
            }
          />
        }
      />
    </div>
  );
}
