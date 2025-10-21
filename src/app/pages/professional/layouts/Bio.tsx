import "../styles/bio.css";
import SplitScreen from "../../../../components/layout/SplitScreen";
export default function Bio() {
  return (
    <div className="bio">
      <SplitScreen
        left={<>PLACEHOLDER FOR BIO</>}
        right={<>PLACEHOLDER FOR CATCH</>}
      />
    </div>
  );
}
