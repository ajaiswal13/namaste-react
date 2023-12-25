import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [loginBtnName,setLoginBtnName] = useState("Logout");
    return(
        <div className="header">
          <div className="logo-container">
            <img 
            className="logo"
            src={LOGO_URL}
            />
          </div>
          <div className="nav-links">
             <ul>
               <li>
                <Link to="/"> Home</Link>
                </li>
               <li>
                <Link to="/about">About Us</Link>
               </li>
               <li>
                <Link to="/contact">Contact</Link>
               </li>
               <li>Cart</li>
               <button className="login-btn"
               onClick={() => {
                  loginBtnName === "Logout" ? setLoginBtnName("Login") : setLoginBtnName("Logout")
               }}>{loginBtnName}</button>
             </ul>
          </div>
        </div>
    );
}

export default Header;