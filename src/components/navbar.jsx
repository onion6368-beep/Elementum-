import './navbar.css'

function Navbar(){
    return(
        <nav className="navbar">
            <div className="logo">Elementum</div>
            <ul className="nav-links">
                <li>Home</li>
                <li>Studio</li>
                <li>Services</li>
                <li>Contacts</li>
                <li>FAQS</li>
            </ul>
            <div className="menu-icon">☰</div>
        </nav>
    )
}
export default Navbar