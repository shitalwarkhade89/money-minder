import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import menu from "./menu.jpeg"


function Navbar() {
  const [userdata, setUserdata] = useState({});
  const[menuBtn , setMenuBtn] = useState("disply") 

  const navbar = ()=>{

  }

  useEffect(() => {
    const userFromlocalStorage = JSON.parse(localStorage.getItem('user') || '{}');
    setUserdata(userFromlocalStorage);
  }, [])

  return(
    <>
    <div className='nav-container'>
    <Link to='/'className='logo' >Money-Minder💰</Link>
      <img src={menu} alt="menu" className='menu-btn'
      onClick={()=>{
        setMenuBtn(menuBtn == "disply" ? "-" : "disply")
      }}
      />
        <div className={`${menuBtn}`}>

        <Link to="/mytransactions" className='nav-btn'> My Transactions</Link>
        <Link to="/addtransactions" className='nav-btn'>Add Transaction</Link>
        <Link to="/signup" className='nav-btn'>Signup</Link>
        <Link to="/login" className='nav-btn'>Login</Link>

        </div>
        <div className={`user ${menuBtn}`}>
        Hay!😊{userdata.name}

        {
          userdata?.name? (<button className='btn-logout'
          onClick={()=>{
            localStorage.removeItem("user");
            window.location.href = "/login"
          }}
          >Logout</button>) : null
        }
      </div>
    </div>
    </>
  )
}

export default Navbar;











// import react, { useEffect, useState } from 'react';
// import './Navbar.css';
// import { Link } from "react-router-dom";
// function Navbar() {
//     const [user ,setUser] = useState({});

    
//     useEffect(() => {
//         const  storageuser =JSON.parse(localStorage.getItem( 'user'  || '{}' ));
//         console.log(storageuser?.name);
//        setUser(storageuser);
       
//     },[])
//     return (
//         <>
//             <div className='nav'>
//                 <h2 className='app-name'>Money-Minder 💰</h2>
//                 <div>
//                     <Link to="/" className="navbar-links">Home</Link>
//                     <Link to="/mytransactions" className="navbar-links">My Transactions</Link>
//                     <Link to="/addtransactions" className="navbar-links">Add Transactions</Link>
//                     <Link to="/login" className="navbar-links">Login</Link>
//                     <Link to="/signup" className="navbar-links">Signup</Link>
                   
//                 </div>
                
//                 <div className='loged-user-name'>
//                 Hello,{user?.name  || "User"}
//                 </div>
//                 {
//                    user?.name? (<span className="logout-btn" onClick={() => {
//                     localStorage.removeItem("user");
//                     window.location.href ="/login" ;
//                  }} >
//                      Logout
//                      </span>)
//                      :
//                      null
//                 }
//             </div>
//         </>
//     )
// }
// export default Navbar;