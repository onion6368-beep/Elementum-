import './footer.css'

const footerColumns = [
  { title: "Company", links: ["Home", "Studio", "Service", "Blog"] },
  { title: "Terms & Policies", links: ["Privacy Policy", "Terms & Conditions", "Explore", "Accesibility"] },
  { title: "Follow Us", links: ["Instagram", "LinkedIn", "Youtube", "Twitter"] },
]

function Footer(){
    return(
        <footer className='footer'>
            <div className='footer-wrapper'>
                {footerColumns.map((col,index) =>(
                    <div className='footer-column' key={index}>
                        <h3>{col.title}</h3>
                        <ul>
                            {col.links.map((link,i)=>(
                                <li key={i}>{link}</li>
                            ))}
                        </ul>
                    </div>
                ))}
                <div className="contact-deets">
                <h3>Contact</h3>
                <p>1498w Fluton ste, STE 2D Chicgo, IL 63867.</p>
                <p>(123) 456789000</p>
                <p>info@elementum.com</p>
                </div>
            </div>
            <p className="footer-copyright">©2023 Elementum. All rights reserved.</p>
        </footer>
    )
}
export default Footer