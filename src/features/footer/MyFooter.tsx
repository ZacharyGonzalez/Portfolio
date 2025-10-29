import './footer.css'
import MyLinks from '../bio/components/myLinks/MyLinks'
import Banner from '../../components/layout/banner/Banner'
export default function Footer() {
    return (
        <>

            <Banner title={""} />
            <div className='footer'>
                <div className='head'>
                    <div className='head1'>Let's</div><div className='head2'>Talk</div>
                </div>
                <div className='desc'>I would love to hear from you! </div>
                <div className='bottom'>
                    <MyLinks />
                </div>
            </div>
        </>
    )
}