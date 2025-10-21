import './professional.css'
import Bio from "./layouts/Bio"
import Education from "./layouts/Education"
import Skills from "./layouts/Skills"
import Projects from "./layouts/Projects"
import Timeline from "./layouts/Timeline"
import Banner from '../../../components/layout/Banner'
export default function Professional() {
    return (
        <div className='professional'>
            <Bio />
            <Banner title={'Education'} />
            <Education />

            <Banner title={'Skills'} />
            <Skills />

            <Banner title={'Projects'} />
            <Projects />

            <Banner title={'Timeline'} />
            <Timeline />

        </div>
    )
}