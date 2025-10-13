import './information.css'
import Card from '../components/card'

export default function Information() {
    return (
        <div className="information">
            <Card emphasis='28' description='Age' />
            <Card emphasis='2' description='Years of experience' />
            <Card emphasis='5' description='Projects worked on' />
            <Card emphasis='2' description='Projects deployed' />
        </div>
    )
}