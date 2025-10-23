import SplitScreen from "../../../../components/layout/SplitScreen";
import Banner from "../../../../components/layout/Banner";
export default function Achievements() {
  return (
    <div className="Achievements">
      <Banner
        title={
          <SplitScreen
            left={<SplitScreen left={<>left left</>} right={<>left right</>} />}
            right={
              <SplitScreen left={<>right left</>} right={<>right right</>} />
            }
          />
        }
      />
    </div>
  );
}
