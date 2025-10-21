import "../styles/skills.css";
import Slab from "../components/Slab";
import SplitScreen from "../../../../components/layout/SplitScreen";

export default function Skills() {
  return (
    <div className="skills">
      <Slab desc="desc" title="Front End Designer" link="link" />
      <SplitScreen
        left={<Slab desc="" title="title" link="src\assets\profile_test.png" />}
        right={
          <>
            <Slab desc="desc" title="title" link="link" />
            <Slab desc="desc" title="title" link="link" />
          </>
        }
      />
      <SplitScreen
        left={
          <>
            <Slab desc="desc" title="title" link="link" />
            <Slab desc="desc" title="title" link="link" />
          </>
        }
        right={<Slab desc="desc" title="title" link="link" />}
      />
    </div>
  );
}
