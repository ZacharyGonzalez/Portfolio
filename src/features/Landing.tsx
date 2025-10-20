import BottomBar from "../components/layout/BottomBar"
import PairedWindow from "../components/layout/PairedWindow"
import './landing.css'
export default function LandingPage() {
    return (
        <div className="landing">
            <PairedWindow />
            <BottomBar />
        </div>
    )
}