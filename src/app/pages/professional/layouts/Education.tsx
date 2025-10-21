import '../styles/education.css'
import EducationCard from '../components/EducationCard'
export default function Education() {
    return (
        <div className="education">
            <EducationCard
                Degree="Associates"
                Date="Sep. 2018 - Dec. 2020"
                GPA="3.7"
                School="Essec Count College"
            />
            <EducationCard
                Degree="Bachelors of Science"
                Date="Sep. 2022 - Dec. 2024"
                GPA="3.3"
                School="New Jersey Institute of Technology"
            />
        </div>
    )
}