import { Link } from 'react-router-dom'; 
import './Navbar.css';

function Navbar() {
    return (
        <div className="container2">
            <nav className="navbar">
                <ul className="nav-list">
                    <li><Link to="/">Home</Link></li> 
                    <li><Link to="/About">About</Link></li> 
                    <li><Link to="/Prices">Prices</Link></li> 
                    <li><Link to="/Bookings">Booking</Link></li> 
                    <li><Link to="/Contact">Contact</Link></li> 
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;
