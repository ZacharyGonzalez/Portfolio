import './introduction.css'
import Greetings from '../components/greetings'
import Catch from '../components/catch'

export default function Introduction(){
    return(
    <div className="introduction">
        <Greetings/> <Catch/>
    </div>
    )
}