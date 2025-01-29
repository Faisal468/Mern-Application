import  {StrictMode} from "react";
import { NavLink } from "react-router-dom";
import { createRoot } from "react-dom/client";
import { Link } from "react-router-dom";
import React from "react";

import Logo from "../../assets/images/logo.png";
import "./Header.css";
// import Weather from "../../Weather/weather";



export const Header = () => {
  return (
    <>
      <header>
        <nav>
          <div className="topp">
            <div className="logo">
              <NavLink to={'/'}>
              <img src={Logo} alt="Logo" />
              </NavLink>
            </div>
            <ul className="nav-links">
              <li>
                <NavLink to={'/weather'}> Weather </NavLink>
              </li>
              <li>|</li>
              <li>
              <NavLink to={'/signin'}> Sign In </NavLink>
              
              </li>
              <li>|</li>
              <li>
                
                <NavLink to={'/createyouraccount'}>Create Your Account</NavLink>
                
              </li>
              <li>|</li>
              <li>
                <NavLink to={'/Booking '}>Booking Data</NavLink> 
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};
