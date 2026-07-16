import './testimony.css'
import vectorLine from '../assets/Vector 5.png'

const avatars=[1,2,3,4,5,6,7,8]

function Testimonies(){
    return(
        <section className='testimony'>
            <h2><span className='green-pill-test'>What</span> our customers<br /> says About Us</h2>
            <img src= {vectorLine} className='zigzag-test' alt=''/>
            <div className='testimony-wrapper'>
                <div className='avatar-scatter'>
                    {avatars.map((num,index) =>(
                        <img 
                        key = {index}
                        src={`https://i.pravatar.cc/100?img=${num + 20}`}
                        alt="customer"
                        className={`scatter-avatar scatter-${index}`}
                        />
                    ))}
                </div>
                <div className='testimony-bubble'>
                    <p>
                        <span className='clover'>🍀</span>Elementum delivered the site within the timeline as they requested.
                        In the end, the client found a 50% increase in traffic within days
                        since its launch. They also had an impressive ability to use
                        technologies that the company hasn't used, which have also proved
                        to be easy to use and reliable.<span className='clover'>🍀</span>
                    </p>
                </div>
            </div>
        </section>
        
    )
}
export default Testimonies