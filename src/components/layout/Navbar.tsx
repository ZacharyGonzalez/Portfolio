import './navbar.css'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
    const navigate = useNavigate();
    return (
        <div className="navbar">
            <h1>Zachary Gonzalez</h1>
            <div>
                <button onClick={() => navigate('/')}>Professional</button>
                <button onClick={() => navigate('/personal')}>Personal</button>
            </div>
        </div>
    )
}