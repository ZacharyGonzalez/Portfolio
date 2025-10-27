import Card from "./components/card/Card";
import './achievements.css'
export default function Achievements() {

  const achievements = [
    {title:'3', info:'Years of Experience'},
    {title:'4', info:'Projects Deployed'},
    {title:'20', info:'Projects worked on'},
    {title:'28', info:'Years Old'},
  ]
  return (
    <div className="achievements">
      {achievements.map((achieve,idx)=>(
        <Card key={idx} title={achieve.title} info={achieve.info}/>
      ))}
    </div>
  );
}
