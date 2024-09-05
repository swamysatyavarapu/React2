import { useState } from "react";
import ItemList from "./ItemLists";

const RestaurantCategory=({data})=>{
  
  const[showItems,setShowItems]=useState(false)
   const handleClick=()=>{
       setShowItems(!showItems)
   }
    return(
        <div> 
            <div className=" w-6/12 mx-auto my-4 border bg-gray-50 p-2 shadow-lg">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span className="font-bold text-lg">{data.title}({data.itemCards.length})</span>
                <span>🔽</span>
                </div>
                <div>{ showItems && <ItemList items={data.itemCards} />}</div>
            </div>
        </div>
    );
}

export default RestaurantCategory;