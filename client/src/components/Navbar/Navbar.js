import react from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
function Navbar() {
    return (
        <>
            <div className='nav'>
                <h2>Mony-Minder 💰</h2>
                <div>
                    <Link to="/login" className="navbar-links">Login</Link>
                    <Link to="/singup" className="navbar-links">Singup</Link>
                </div>
                <div>
                    Hello,User
                </div>
            </div>
        </>
    )
}
export default Navbar;