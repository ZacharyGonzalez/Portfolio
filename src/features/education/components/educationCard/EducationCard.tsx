import "./educationCard.css";
import { FaGraduationCap } from "react-icons/fa";

type EducationCardProp = {
  Degree: string;
  Date: string;
  GPA: string;
  School: string;
  Info: string;
};
export default function EducationCard({
  Degree,
  Date,
  GPA,
  School,
  Info,
}: EducationCardProp) {
  return (
    <div className="card-container">
      <div className="education-card">
        <div className="title">{Degree}</div>
        <div className="date">{Date}</div>
        <div className="gpa">
          {" "}
          <FaGraduationCap />
          {GPA}
        </div>
        <div className="school">{School}</div>
      </div>
      <div className="info-box">
        <div className="info-box-school">{School}</div>
        <div className="info-box-info">{Info}</div>
      </div>
    </div>
  );
}
