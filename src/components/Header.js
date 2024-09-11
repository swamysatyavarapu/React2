import { LOGO_URL } from "../utils/constant";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header=()=>{
    
    const[btnNameReact,setBtnNameReact]=useState("login");


    const {name}=useContext(UserContext);

    useEffect(()=>{

    },[btnNameReact]);

    const cartItems=useSelector((store)=> store.cart.items) 

    const groceryItems=useSelector((store)=> store.grocery.items)


    return(
    <div className="flex  m-2 justify-between bg-pink-50 border border-solid border-black">
        <div className="w-24">
            <img className="logo"  src={LOGO_URL}/>
        </div>
        <div className="flex items-center">
            <ul className="flex p-4 m-4">
                <li className="px-4 font-bold text-lg"> 
                    <Link to="/">Home</Link>
                </li>
                <li className="px-4 font-bold text-lg">
                    <Link to="/about">About us</Link>
                </li>
                <li className="px-4 font-bold text-lg">
                    <Link to="/contact">Contact us</Link>
                </li>
                <li className="px-4 font-bold text-lg">
                    <Link to="/Grocery">Grocerymart</Link>
                </li >
                <li className="px-4 font-bold text-lg">
                    <Link to="/cart">
                        {cartItems.length===0? <h1>Food Cart</h1> : <h1>Food Cart ({cartItems.length})</h1>} 
                    </Link>
                </li>
                <li className="px-4 font-bold text-lg">
                    <Link to="/Grocerycart">
                        {groceryItems.length===0? <h1>Grocery Cart</h1> : <h1>Grocery Cart ({groceryItems.length})</h1>} 
                    </Link>
                </li>
                <button className="login-btn font-bold text-lg" onClick={()=>{
                    btnNameReact === "login" ? setBtnNameReact("logout"):setBtnNameReact("login")
                }}>{btnNameReact}</button>
            </ul>
        </div>
    </div>
    );
}

export default Header;