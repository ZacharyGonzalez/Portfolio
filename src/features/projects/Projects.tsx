import "./projects.css";
import ProjectTiles from "./components/projectTile/ProjectTiles";
import Banner from "../../components/layout/banner/Banner";
export default function Projects() {
  return (
    <>
      <Banner title={"Projects"} />

      <div className="projects">
        <ProjectTiles />
      </div>
    </>
  );
}
