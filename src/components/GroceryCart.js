import { useDispatch, useSelector } from "react-redux";
import GroceryCard from "./GroceryCard";
import { GROC_URL } from "../utils/constant";
import { clearGroceryCart } from "../utils/grocerySlice";
//import { GROC_URL } from "../utils/constant";
//import GroceryCard from "./GroceryCard";



const GroceryCart=()=>{


    const dispatch=useDispatch();

    const handleClear=()=>{
        dispatch(clearGroceryCart());
    }

    const cartItems=useSelector((store)=>store.grocery.items);

    return(
           <div className="p-2 m-2 text-center">
               <div className="p-2 m-2">
                 <h1 className="font-bold text-lg p-2 m-2">Cart</h1>
               </div>
               <div className="w-6/12 m-auto">
                  {cartItems.map((item,index)=>(
                     <div className=" border border-solid border-black p-2 m-2 text-left flex justify-between">
                        <div className="w-9/12">
                            <h1 className="font-bold text-lg">{item.display_name}</h1>
                            <h2 className="font-semibold text-lg">{item.variations[0].sku_quantity_with_combo} - ₹{item.variations[0].price.mrp}</h2>
                        </div>
                        <div className="w-3/12">
                           <button className="bg-green-500 text-white  mx-[120px] p-2 rounded-lg absolute" onClick={()=>handleAddItems(data)}>+</button>
                           <img src={GROC_URL+item.variations[0].images[0]}/>
                        </div>
                     </div>
                  ))}
               </div>
               {cartItems.length===0 ? <h1>Cart is empty,Please add Groceries into the Cart..!</h1>: <button className="p-1 m-2 bg-black text-white rounded" onClick={handleClear}>Clear</button>}
            </div>

    );
}

export default GroceryCart;