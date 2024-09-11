import { useDispatch } from "react-redux";
import { GROC_URL } from "../utils/constant";
import { addGroceryItem } from "../utils/grocerySlice";

const GroceryCard=(props)=>{
   const{data}=props;

   const dispatch=useDispatch();

   const handleAddItems=(data)=>{
        dispatch(addGroceryItem(data));
   }



    return(
        <div className="rounded-xl cursor-pointer p-4 m-4 w-[15%] ml-10 h-auto hover:scale-105">
            <div className="">
            <button className="bg-green-500 text-white p-1  rounded-lg w-[250x] ml-[110px] font-bold absolute" onClick={()=>handleAddItems(data)}>Add</button>
             <div className="border border-solid rounded-t-lg w-[150px]"> <img src={GROC_URL+data.variations[0].images[0]}/></div>
            </div>
            <h1 className="font-bold text-">{data.display_name}</h1>
            <h1 className="font-semibold text-lg mt-2">{data.variations[0].sku_quantity_with_combo} -  ₹{data.variations[0].price.mrp}</h1>
        </div>
    );
}

export default GroceryCard