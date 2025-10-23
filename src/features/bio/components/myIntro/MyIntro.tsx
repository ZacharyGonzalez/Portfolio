import "./myIntro.css";
import MyLinks from "../myLinks/MyLinks";
type MyIntroProp = {
  Job: string;
  Greeting: string;
  Name: string;
  Desc: string;
};
export default function MyIntro({ Job, Greeting, Name, Desc }: MyIntroProp) {
  return (
    <div className="my-intro">
      <div className="who-am-i">
        <div className="job-reposition">
          <div className="job">{Job}</div>
          <div className="greeting">{Greeting}</div>
        </div>
        <div className="name">{Name}</div>
      </div>
      <div className="desc">{Desc}</div>
      <MyLinks />
    </div>
  );
}
