import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemLists";
import { clearCart } from "../utils/cartSlice";


const Cart=()=>{

    const dispatch=useDispatch();

    const handleClear=()=>{
        dispatch(clearCart());
    }

    const cartitems=useSelector((store)=>store.cart.items);

    return(
        <div className="p-4 m-auto text-center">
           <h1 className="font-bold text-lg">Cart</h1> 
           <div className="w-6/12 m-auto">
              <ItemList  items={cartitems} />
           </div>
           { cartitems.length===0 ? <h1>Cart is empty,Please add items into the Cart..!</h1>:<button className="font-bold p-2 m-2 bg-black text-white rounded-lg" onClick={handleClear}>
            Clear</button>}
        </div>
    );
}

export default Cart;