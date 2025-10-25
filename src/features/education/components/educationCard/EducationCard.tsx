import "./educationCard.css";

type EducationCardProp = {
  Degree: string;
  Date: string;
  GPA: string;
  School: string;
  Info: string
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
        <div className="gpa">{GPA}</div>
        <div className="school">{School}</div>
      </div>
      <div className="info-box">{Info}</div>
    </div>
  );
}
