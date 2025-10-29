import "./education.css";
import EducationCard from "./components/educationCard/EducationCard";
import Banner from "../../components/layout/banner/Banner";
export default function Education() {
  const educationExperience = [
    {
      Degree: "Associates of Science",
      Date: "Sep. 2018 - Dec. 2020",
      GPA: "3.7",
      School: "Essex County Community College",
      Info: "I was a tutor for Calculus and Physics. I also participated in the robotics team state rat race competition where my navigation algorithm won second place.",
    },
    {
      Degree: "Bachelors of Science",
      Date: "Sep. 2022 - Dec. 2024",
      GPA: "3.3",
      School: "New Jersey Institute of Technology",
      Info: `I led multiple teams through Agile Principles, and was the PM for my Senior Capstone; Which won second place at the NJIT Showcase for best project.`,
    },
  ];
  return (
    <>
      <Banner title={"Education"} />
      <div className="education">
        {educationExperience.map((e, idx) => (
          <EducationCard
            key={idx}
            Degree={e.Degree}
            Date={e.Date}
            GPA={e.GPA}
            School={e.School}
            Info={e.Info}
          />
        ))}
      </div>
    </>
  );
}
