import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemLists";
import { clearCart } from "../utils/cartSlice";
import NoCart from "./NoCart";
import { useState } from "react";


const Cart=()=>{

    const dispatch=useDispatch();
    const [isModalOpen,setIsModalOpen]=useState(false);
    const cartitems=useSelector((store)=>store.cart.items);
    const isCartEmpty=cartitems.length==0;

    const handleClear=()=>{
        dispatch(clearCart());
    }

    const handleOrder=()=>{
            setIsModalOpen(true);
    }

    const handleOrderClear=()=>{
        handleClear();
    }


    const items=[];

    cartitems.map((item)=>(
        items.push(item.card.info.price/100?item.card.info.price/100:item.card.info.defaultPrice/100)
    ))

    let sum=0;
    items.map((price)=>(
        sum +=price
    ));

    return cartitems.length===0 ? (<NoCart/>):
        (
        <div className="px-20 py-4 mx-[250px] my-10 shadow-2xl">
           <div className="font-bold text-xl my-8 mx-auto text-center">
                Let's Pack!
           </div>
            { !isCartEmpty && (
                <div>
                <button className="font-bold p-1 my-2 m-2 bg-gray-600 hover:bg-red-600 text-xs text-white rounded justify-start" onClick={handleClear}>
                  clear cart</button>
                 <div className="">
                     <ItemList  items={cartitems} />
                 </div>
                 <h2 className="font-serif justify-start  mx-2 mt-4 text-lg underline">Bill Details</h2>
                 <div className="justify-between flex m-2">
                     <div className="m-1">
                         <ul>
                             <li className="text-sm font-normal text-gray-500">Item Total</li>
                             <li className="text-sm font-normal text-gray-500">Delivery Fee</li>
                             <li className="text-sm font-normal text-gray-500">Extra discount for you</li>
                             <li className="text-sm font-normal text-gray-500">Platform Fee</li>
                             <li className="text-sm font-normal text-gray-500">GST and Restaurant Charges</li>
                         </ul>
                     </div>
                     <div className="m-1">
                         <ul>
                             <li className="text-sm font-normal text-gray-500">₹{sum}</li>
                             <li className="text-sm font-normal text-gray-500">₹49</li>
                             <li className="text-sm font-normal text-gray-500">-₹15</li>
                             <li className="text-sm font-normal text-gray-500">₹9</li>
                             <li className="text-sm font-normal text-gray-500">₹28</li>
                         </ul>
                     </div>
                 </div>
                 <hr className="border-0 bg-gray-300 my-2 h-px"></hr>
                 <div className="flex justify-between m-2">
                     <div className="m-1">
                         <ul>
                             <li className="text-sm font-semibold">To Pay</li>
                         </ul>
                     </div>
                     <div className="m-1">
                         <ul>
                             <li className="text-sm font-semibold">₹{sum+49-15+9+28}</li>
                         </ul>
                     </div>
                 </div>
                 <div className="text-center m-2">
                     <button className="bg-green-500 text-white text-sm px-3 mt-2 hover:bg-teal-700 rounded-lg py-2" onClick={()=>{handleOrder()}}>Place Order</button>
                 </div>
                 <p className="text-gray-400 text-center mx-auto my-2 font-serif text-[0.64rem]">Note: The bill section for cart is static.</p>
                 </div>
            )}

            {isModalOpen && (
                <div className="flex fixed items-center justify-center bg-black inset-0 bg-opacity-50">
                    <div className="bg-slate-100 font-serif p-6 rounded shadow-lg mx-auto text-center">
                        <h2 className="text-lg font-sans font-bold mb-4">Order placed {"✅"}</h2>
                        <p className="text-sm">Thanks for ordering from Foodie.co !</p>
                        <button className="bg-black text-white p-2 mt-4 font-serif rounded text-sm" onClick={()=>{handleOrderClear()}}>Clear</button>
                    </div>
                </div>
            )}
         </div>
    );
}

export default Cart;