import NameComponent from "../components/namecomponent"
import Options from "../components/Options"
import './topBar.css'
export default function TopBar(){
    return(
    <div className="top-bar">
        <NameComponent/><Options/>
    </div>
    )
}