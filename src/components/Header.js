import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useContext } from "react";
const Header = () => {
  const onlineStatus = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);
    return(
        <div className="flex justify-between border-2 bg-orange-200">
          <div className="logo-container">
            <img 
            className="w-24"
            src={LOGO_URL}
            />
          </div>
          <div className="flex items-center">
             <ul className="flex p-4">
               <li className="px-4">
                Online status: {onlineStatus ? "🟢" : "🔴" }
               </li>
               <li className="px-4">
                <Link to="/"> Home</Link>
                </li>
               <li className="px-4">
                <Link to="/about">About Us</Link>
               </li>
               <li className="px-4">
                <Link to="/contact">Contact</Link>
               </li>
               <li className="px-4">
                <Link to="/grocery">Grocery</Link>
               </li>
               <li className="px-4">Cart</li>
               <li className="px-4">{ loggedInUser}</li>
             </ul>
          </div>
        </div>
    );
}

export default Header;