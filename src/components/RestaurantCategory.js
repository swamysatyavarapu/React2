import { useState } from "react";
import ItemList from "./ItemLists";

const RestaurantCategory=({data})=>{
  
  const[showItems,setShowItems]=useState(false)
   const handleClick=()=>{
       setShowItems(!showItems)
   }
    return(
        <div> 
            <div className=" w-6/12 mx-auto py-auto">
                <div className="flex justify-between my-4 cursor-pointer" onClick={handleClick}>
                   <span className="font-bold ml-2 text-lg my-auto">{data.title}({data.itemCards.length})</span>
                   <span>🔽</span>
                </div>
                <div>{ showItems && <ItemList items={data.itemCards} />}</div>
                <h1 className="border-[3px] shadow-lg"></h1>
            </div>
        </div>
    );
}

export default RestaurantCategory;