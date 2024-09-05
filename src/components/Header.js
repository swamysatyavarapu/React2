import { LOGO_URL } from "../utils/constant";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Header=()=>{
    
const[btnNameReact,setBtnNameReact]=useState("login");

    console.log("Header Render...")

useEffect(()=>{
    console.log("useEffect Hook...")
},[btnNameReact]);
    return(
    <div className="header">
        <div className="logo-container">
            <img className="logo"  src={LOGO_URL}/>
        </div>
        <div className="nav-items">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About us</Link>
                </li>
                <li>
                    <Link to="/contact">Contact us</Link>
                </li>
                <li>
                    <Link to="/Grocery">Grocery</Link>
                </li>
                <li>Cart</li>
                <button className="login-btn" onClick={()=>{
                    btnNameReact === "login" ? setBtnNameReact("logout"):setBtnNameReact("login")
                }}>{btnNameReact}</button>
            </ul>
        </div>
    </div>
    );
}

export default Header;