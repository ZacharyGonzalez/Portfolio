import './card.css'
type CardProp = {
    emphasis: string;
    description: string;
}
export default function Card({ emphasis, description }: CardProp) {
    return (
        <div className="card">
            <h1>{emphasis}</h1> {description}
        </div>
    )
}