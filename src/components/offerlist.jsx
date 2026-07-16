import './offerlist.css'
import vectorLine from '../assets/Vector 5.png'
import bigline from '../assets/Vector 2516.png'

const offers = [
  { label: "Office of multiple interest content", title: "Colaborative & partnership" },
  { label: "The hanger US Air force digital experimental", title: "We talk about our weight" },
  { label: "Delta faucet content, social, digital", title: "Piloting digital confidence" },
]

function OfferList(){
    return(
        <section className='offer-list'>
            <h2>What we <span className='green-pill'>can</span> offer you!</h2>
            <img src={bigline} className='big-line' alt=''/>
            <img src={vectorLine} className='zigzag-offer' alt=''/>
            <div className='offer-rows'>
                {offers.map((offer,index) => (
                    <div className='offer-row' key={index}>
                        <span className='offer-label'>{offer.label}</span>
                        <span className='offer-title'>{offer.title}</span>
                        <span className='offer-arrow'>→</span>
                    </div>
                ))}
            </div>
        </section>
    )
}
export default OfferList