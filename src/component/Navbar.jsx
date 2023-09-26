import React, { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Check if a token is available in local storage
    const token = localStorage.getItem('user');
    setIsLoggedIn(!!token); // Set isLoggedIn to true if token is available
  }, []);

  const handleLogout = () => {
    // Clear the token from local storage on logout
    localStorage.removeItem('user');
    setIsLoggedIn(false);
  };
  return (
    <div>
  <nav className="navbar navbar-expand-md navbar-dark" >
<Link className="navbar-brand" to= "/" style={{fontSize: '40px', marginTop: '10px', color: 'black'}}>bulk sms</Link>
<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon" style={{backgroundColor: 'black'}}></span>
</button>
<div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/" style={{marginLeft:'150px',marginTop:'30px',color:'black'}}>Home</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/About-Us" style={{marginLeft:'150px',marginTop:'30px',color:'black'}}>About Us</Link>
      </li>
      <li className="nav-item">
      <Link className="nav-link" to="/ContactUs" style={{marginLeft:'150px',marginTop:'30px',color:'black'}}>Contact us</Link>
       
      </li>    
      <li className="nav-item">
      <Link className="nav-link" to="/Help" style={{marginLeft:'150px',marginTop:'30px',color:'black'}}>Help</Link>

      </li>    



{isLoggedIn ? (
          // Display "Logout" if the user is logged in
          
        <>
             <li className="nav-item">
      <Link className="nav-link" to="/dashboard" style={{marginLeft:'150px',marginTop:'30px',color:'black'}}>Dashboard</Link>
      </li> 
            <li className="nav-item">
            <button className="nav-link" onClick={handleLogout} style={{marginLeft:'150px',marginTop:'30px',color:'black'}}>Logout</button>
          </li>
        </>
        ) : (
          // Display "Login" and "Register" if the user is not logged in
          <>
                <li className="nav-item">
      <Link className="nav-link" to="/Register" style={{marginLeft:'150px',marginTop:'30px',color:'black'}}>Register</Link>

      </li>    
      <li className="nav-item">
      <Link className="nav-link" to="/Login" style={{marginLeft:'150px',marginTop:'30px',color:'black'}}>Login</Link>
      </li>    
          </>
        )}


    </ul>
  </div>  
</nav><br />

<div style={{border: '1px solid black',}}></div>
<br /><br />
      
      <Outlet/>
      <br /><br />
<div style={{border: '1px solid black',}}></div>
<br />

      <Footer/>
      
    </div>
  );
};

export default Navbar;
