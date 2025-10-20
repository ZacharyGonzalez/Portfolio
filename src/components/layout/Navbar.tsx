import './navbar.css'
import Button from '../ui/Button'
function test() {
    return null
}
export default function Navbar() {
    return (
        <div className="navbar">
            <h1>Zachary Gonzalez</h1>
            <Button name={'Identity'} link={test} />
        </div>
    )
}