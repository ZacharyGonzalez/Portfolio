import '../styles/skills.css'
import Slab from '../components/Slab'
import SplitScreen from '../../../../components/layout/SplitScreen'

export default function Skills() {
    return (
        <div className="skills">
            <Slab />
            <SplitScreen
                left={<Slab />}
                right={<Slab />} />
        </div>
    )
}