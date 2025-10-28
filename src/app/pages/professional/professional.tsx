import "./professional.css";
import Bio from "../../../features/bio/Bio";
import Education from "../../../features/education/Education";
import Skills from "../../../features/skills/Skills";
import Projects from "../../../features/projects/Projects";
import Timeline from "../../../features/timeline/Timeline";
export default function Professional() {
  return (
    <div className="professional">
      <Bio />
      <Education />
      <Skills />
      <Projects />
      <Timeline />
    </div>
  );
}
