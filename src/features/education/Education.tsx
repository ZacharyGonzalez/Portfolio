import "./education.css";
import EducationCard from "./components/educationCard/EducationCard";

export default function Education() {
  return (
    <div className="education">
      <EducationCard
        Degree="Associates of Science"
        Date="Sep. 2018 - Dec. 2020"
        GPA="3.7"
        School="Essex Count Community College"
        Info="Rat race robot won second place for state competition in 2020"
      />
      <EducationCard
        Degree="Bachelors of Science"
        Date="Sep. 2022 - Dec. 2024"
        GPA="3.3"
        School="New Jersey Institute of Technology"
        Info="PM for Senior Capstone, achieved second place for best project in 2024"
      />
    </div>
  );
}
