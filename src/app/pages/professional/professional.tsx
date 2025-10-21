import Bio from "./layouts/Bio"
import Education from "./layouts/Education"
import Skills from "./layouts/Skills"
import Projects from "./layouts/Projects"
import Timeline from "./layouts/Timeline"
export default function Professional() {
    return (
    <div>
        <Bio />
        <Education />
        <Skills/>
        <Projects/>
        <Timeline/>
    </div>
    )
}