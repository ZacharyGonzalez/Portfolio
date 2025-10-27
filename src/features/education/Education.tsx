import "./education.css";
import EducationCard from "./components/educationCard/EducationCard";

export default function Education() {
  const educationExperience = [
    {
      Degree: "Bachelors of Science",
      Date: "Sep. 2022 - Dec. 2024",
      GPA: "3.3",
      School: "New Jersey Institute of Technology",
      Info: `I led multiple teams through Agile Principles, and was the PM for my Senior Capstone; Which won second place at the NJIT Showcase for best project`
    },
    {
      Degree: "Associates of Science",
      Date: "Sep. 2018 - Dec. 2020",
      GPA: "3.7",
      School: "Essex County Community College",
      Info: "Rat race robot won second place for state competition in 2020",
    }
  ]
  return (
    <div className="education">
      {educationExperience.map((e, idx) => (
        <EducationCard
          key={idx}
          Degree={e.Degree}
          Date={e.Date}
          GPA={e.GPA}
          School={e.School}
          Info={e.Info}
        />))}
    </div>
  );
}
