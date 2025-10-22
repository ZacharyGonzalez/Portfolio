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
      <div className="Greeting">{Greeting}</div>
      <div className="Name">{Name}</div>
      <div className="Desc">{Desc}</div>
    </div>
  );
}
