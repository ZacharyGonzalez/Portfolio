import "./componentStyles/myIntro.css";
import MyLinks from "./MyLinks";
type MyIntroProp = {
  Job: string;
  Greeting: string;
  Name: string;
  Desc: string;
};
export default function MyIntro({ Job, Greeting, Name, Desc }: MyIntroProp) {
  return (
    <div className="my-intro">
      <div className="job">{Job}</div>
      <div className="greeting">{Greeting}</div>
      <div className="name">{Name}</div>
      <div className="desc">{Desc}</div>
      <MyLinks />
    </div>
  );
}
