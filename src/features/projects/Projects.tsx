import "./projects.css";
import Slab from "../skills/components/slab/Slab";

export default function Projects() {
  return (
    <div className="projects">
      <Slab
        desc="Chess made entirely using C99"
        title="C Chess"
        link="src\assets\profile_test.png"
      />
      <Slab desc="" title="title" link="src\assets\profile_test.png" />
      <Slab desc="" title="title" link="src\assets\profile_test.png" />
      <Slab desc="" title="title" link="src\assets\profile_test.png" />
    </div>
  );
}
