import "./skills.css";
import Slab from "../../app/pages/professional/components/Slab";
import SplitScreen from "../../components/layout/splitScreen/SplitScreen";

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
