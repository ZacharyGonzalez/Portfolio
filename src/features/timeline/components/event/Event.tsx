import './event.css'
type EventProp = {
    year: string,
    title: string,
    desc: string
}
export default function Event({ year, title, desc }: EventProp) {
    //this should contain a card for the event
    return (
        <div className="event">
            <div className='year'>{year}</div>
            <div className='event-item'>
                <div className='title'>{title}</div>
                <div className='desc'>{desc}</div>
            </div>
        </div>
    )
}