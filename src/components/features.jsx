import './features.css'
import vectorLine from '../assets/Vector 5.png'


function FeatureBlock({headerLine1,headerLine2,image,text,reverse,zigzagtop,zigzagleft}){
    return(
        <section className={reverse? "feature-block reverse" : "feature-block"}>
            <div className='feature-img'>
                <img src={image} alt=""/>
            </div>
            <div className='feature-text'>
                <h2>{headerLine1}<br />{headerLine2}</h2>
                <img src={vectorLine} className='zigzag-feature' style={{top:zigzagtop, left:zigzagleft}} alt=''/>
                <p>{text}</p>
                <a href="#" className='read-more'>
                Read more -----------------→
                <span className='arrow'></span>
                </a>
            </div>
        </section>
    )
}
export default FeatureBlock