import react, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from "react-router-dom";
function Navbar() {
    const [user ,setUser] = useState({});

    
    useEffect(() => {
        const  storageuser =JSON.parse(localStorage.getItem( 'user'  || '{}' ));
        console.log(storageuser?.name);
       setUser(storageuser);
       
    },[])
    return (
        <>
            <div className='nav'>
                <h2 className='app-name'>Mony-Minder 💰</h2>
                <div>
                    <Link to="/" className="navbar-links">Home</Link>
                    <Link to="/mytransactions" className="navbar-links">My Transactions</Link>
                    <Link to="/addtransactions" className="navbar-links">Add Transactions</Link>
                    <Link to="/login" className="navbar-links">Login</Link>
                    <Link to="/signup" className="navbar-links">Signup</Link>
                   
                </div>
                
                <div className='loged-user-name'>
                Hello,{user?.name  || "User"}
                </div>
                {
                   user?.name? (<span className="logout-btn" onClick={() => {
                    localStorage.removeItem("user");
                    window.location.href ="/login" ;
                 }} >
                     Logout
                     </span>)
                     :
                     null
                }
            </div>
        </>
    )
}
export default Navbar;