import { LOGO_URL } from "../utils/constant";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";


const Header=()=>{
    
    const[btnNameReact,setBtnNameReact]=useState("login");

    console.log("Header Render...")

    const {name}=useContext(UserContext);

    useEffect(()=>{
        console.log("useEffect Hook...")
    },[btnNameReact]);


    return(
    <div className="flex  m-2 justify-between bg-pink-50 border border-solid border-black">
        <div className="w-24">
            <img className="logo"  src={LOGO_URL}/>
        </div>
        <div className="flex items-center">
            <ul className="flex p-4 m-4">
                <li className="px-4"> 
                    <Link to="/">Home</Link>
                </li>
                <li className="px-4">
                    <Link to="/about">About us</Link>
                </li>
                <li className="px-4">
                    <Link to="/contact">Contact us</Link>
                </li>
                <li className="px-4">
                    <Link to="/Grocery">Grocery</Link>
                </li >
                <li className="px-4">Cart</li>
                <button className="login-btn" onClick={()=>{
                    btnNameReact === "login" ? setBtnNameReact("logout"):setBtnNameReact("login")
                }}>{btnNameReact}</button>
                <li className="px-4  font-bold">{name}</li>
            </ul>
        </div>
    </div>
    );
}

export default Header;