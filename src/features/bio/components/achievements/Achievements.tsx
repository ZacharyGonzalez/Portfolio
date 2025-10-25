import Card from "./components/card/Card";
import './achievements.css'
export default function Achievements() {
  return (
    <div className="achievements">
      <Card title="4" info="Projects Deployed" />
      <Card title="3" info="Years of Experience" />
      <Card title="20" info="Projects Worked on" />
      <Card title="28" info="Age" />
    </div>
  );
}
