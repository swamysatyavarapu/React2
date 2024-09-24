import { CART_LOGO,USER_LOGO } from "../utils/constant";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import Img_logo from "../../fast-food.png";



const Header=()=>{
    
    const[btnNameReact,setBtnNameReact]=useState("login");
    const {name}=useContext(UserContext);
    const cartItems=useSelector((store)=> store.cart.items) 
    const groceryItems=useSelector((store)=> store.grocery.items)

    useEffect(()=>{

    },[btnNameReact]);

    


    return(
    <div className="flex p-2 m-2 justify-between bg-gradient-to-t from-green-100 to-green-300 border border-solid border-black max-h-[100%]">
        <div className="flex my-auto">
            <div className="w-14">
                <img className="rounded" src={Img_logo}/>
            </div>
            <div className="flex font-bold font-serif p-[10px] m-1">
                <h1 className="text-3xl  text-indigo-700">F</h1><h3 className=" text-lg pt-[8px] text-black">oodie.co</h3>
            </div>
        </div>
        <div className="flex items-center">
            <ul className="flex">
                <li className="p-2 m-2 font-serif hover:bg-teal-700 hover:text-white text-black text-lg cursor-pointer"> 
                    <Link to="/">Home</Link>
                </li>
                <li className="p-2 m-2 font-serif hover:bg-teal-700 hover:text-white text-black text-lg cursor-pointer rounded">
                    <Link to="/about">About us</Link>
                </li>
                <li className="p-2 m-2 font-serif hover:bg-teal-700 hover:text-white text-black text-lg cursor-pointer rounded">
                    <Link to="/Grocery">Grocerymart</Link>
                </li >
                <li className="p-2 m-2 font-serif hover:bg-teal-700 hover:text-white text-black text-lg cursor-pointer rounded">
                    <Link to="/cart">
                        {cartItems.length===0? <h1 className="flex">Food<img className="w-6" src={CART_LOGO}/></h1> : <h1 className="flex">Food <img className="w-6" src={CART_LOGO}/> ({cartItems.length})</h1>} 
                    </Link>
                </li>
                <li className="p-2 m-2 font-serif hover:bg-teal-700 hover:text-white text-black text-lg cursor-pointer rounded">
                    <Link to="/Grocerycart">
                        {groceryItems.length===0? <h1 className="flex">Grocery<img className="w-6" src={CART_LOGO}/></h1> : <h1 className="flex">Grocery<img className="w-6" src={CART_LOGO}/> ({groceryItems.length})</h1>} 
                    </Link>
                </li>
                <div className=" hover:bg-teal-700 hover:text-white text-black inline-flex items-center">
                    <div className="flex justify-center mx-auto w-7">
                        <img src={USER_LOGO}/>
                    </div>
                    <Link to="/Login">
                    <button className="text-lg font-serif hover:bg-teal-700 hover:text-white text-black inline-flex items-center justify-center min-w-[60px]" onClick={()=>{
                             btnNameReact === "login" ? setBtnNameReact("logout"):setBtnNameReact("login")
                    }}>{btnNameReact}</button>
                    </Link>
                </div>
            </ul>
        </div>
    </div>
    );
}

export default Header;