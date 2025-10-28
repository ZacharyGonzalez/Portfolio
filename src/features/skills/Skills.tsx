import WordContainer from "./components/wordContainer/WordContainer";
import "./skills.css";
import Banner from "../../components/layout/banner/Banner";
export default function Skills() {
  return (
    <>
      <Banner title={"Skills"} />

      <div className="skills">
        <WordContainer />
      </div>
    </>
  );
}
