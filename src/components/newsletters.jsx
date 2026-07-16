import './newsletters.css'
import Pinkpill from '../assets/Ellipse 739.png'
import line from '../assets/vector 2519.png'

function NewsLetter(){
    return(
    <section className='newsletter-wrapper'>
        <div className='newsletter-inner-wrapper'>
            <img src={line} className='snake-line1' alt=''/>
            <img src={line} className='snake-line2' alt=''/>
            <h2>Subscribe to<br/> our Newsletter</h2>
            <p>To make your stay special and even more memorable</p>
            <button className="subscribe-btn">Subscribe Now</button>
            <img src={Pinkpill} className='pink-pill' alt=''/>
        </div>
    </section>
    )
}
export default NewsLetter