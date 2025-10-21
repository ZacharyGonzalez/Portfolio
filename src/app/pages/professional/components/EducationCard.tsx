import './componentStyles/educationCard.css'
type EducationCardProp = {
    Degree: string,
    Date: string,
    GPA: string,
    School: string,
}
export default function EducationCard({ Degree, Date, GPA, School }: EducationCardProp) {
    return (
        <div className="education-card">
            <div className='title'>
                {Degree}
            </div>
            <div className='date'>
                {Date}
            </div>
            <div className='gpa'>
                {GPA}
            </div>
            <div className='school'>
                {School}
            </div>
        </div>
    )
}