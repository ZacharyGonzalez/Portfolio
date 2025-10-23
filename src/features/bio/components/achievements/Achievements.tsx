import SplitScreen from "../../../../components/layout/splitScreen/SplitScreen";
import Card from "./components/card/Card";
export default function Achievements() {
  return (
    <div className="Achievements">
      <SplitScreen
        left={
          <SplitScreen
            left={<Card title="4" info="Projects Deployed" />}
            right={<Card title="3" info="Years of Experience" />}
          />
        }
        right={
          <SplitScreen
            left={<Card title="20" info="Projects Worked on" />}
            right={<Card title="28" info="Age" />}
          />
        }
      />
    </div>
  );
}
