import TopBar from './features/topBar'
import Introduction from './features/introduction'
import Information from './features/information'
import './landingPage.css'

export default function LandingPage() {
    return (
        <div className="landingPageMain">
            <TopBar />
            <Introduction />
            <Information />
        </div >
    )
}