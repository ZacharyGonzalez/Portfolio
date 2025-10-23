import "./professional.css";
import Bio from "../../../features/bio/Bio";
import Education from "../../../features/education/Education";
import Skills from "../../../features/skills/Skills";
import Projects from "../../../features/projects/Projects";
import Timeline from "../../../features/timeline/Timeline";
import Banner from "../../../components/layout/Banner";
export default function Professional() {
  return (
    <div className="professional">
      <Bio />
      <Banner title={"Education"} />
      <Education />

      <Banner title={"Skills"} />
      <Skills />

      <Banner title={"Projects"} />
      <Projects />

      <Banner title={"Timeline"} />
      <Timeline />
    </div>
  );
}
