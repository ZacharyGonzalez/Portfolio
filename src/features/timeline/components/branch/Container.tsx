import './container.css'
import Event from '../event/Event'

const eventList = [
    { year: '2020', title: "July", desc: "Department head of HomeDepot" },
    { year: '2021', title: " working", desc: "d2" },
    { year: '2022', title: "September", desc: "Attended NJIT" },
    { year: '2023', title: "NJIT", desc: "d4" },
    { year: '2024', title: "December", desc: "Graduated NJIT" },
    { year: '2025', title: "5", desc: "d5" },

]

export default function Container() {

    return (
        <div className="container">
            {eventList.map((e, idx) => (
                <Event key={idx} year={e.year} title={e.title} desc={e.desc} />
            ))}
        </div>
    )
}