import './App.css'

import LandingPage from '../features/landingPage/landingPage.tsx'
import Education from '../features/education/education.tsx'
import ShortProfile from '../features/shortProfile/shortProfile.tsx'
import RecentProjects from '../features/recentProjects/recentProjects.tsx'
import MyExperience from '../features/myExperience/myExperience.tsx'
import Finale from '../features/finale/finale.tsx'

function App() {    
  return (
    <div className='main-parent'>
      <LandingPage/>
      <Education/>
      <ShortProfile/>
      <RecentProjects/>
      <MyExperience/>
      <Finale/>
    </div>
  )
}
export default App
