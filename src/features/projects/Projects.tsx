import "./projects.css";
import ProjectTile from "./components/projectTile/ProjectTile";
import Banner from "../../components/layout/banner/Banner";
export default function Projects() {
  return (
    <>
      <Banner title={"Projects"} />

      <div className="projects">
        <ProjectTile />
      </div>
    </>
  );
}
