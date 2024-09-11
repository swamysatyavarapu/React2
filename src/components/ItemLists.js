import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constant";

const ItemList=({items})=>{

   const dispatch=useDispatch();

   const handleAddItem=(item)=>{
        dispatch(addItem(item));
   }

    return(
        <div>
            {items.map((item)=>(
                <div key={item.card.info.id} className="border-b border-gray-300 p-2 m-2 text-left flex justify-between">
                    <div className="w-8/12">
                        <span className="font-bold text-sm">{item.card.info.name}</span>
                        <h4 className="font-semibold text-base">₹{item.card.info.price/100?item.card.info.price/100:item.card.info.defaultPrice/100}</h4>
                        <p className="text-xs font-semibold">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-4">
                        <img  src={CDN_URL+item.card.info.imageId} />  
                    </div>
                    <button className=" w-1/12absolute border border-black shadow-md bg-white text-green-400 font-semibold rounded-md my-[68px] w-16" onClick={()=>handleAddItem(item)}>
                            ADD
                    </button> 
                </div>
            ))}
        </div>
    );
}

export default ItemList;