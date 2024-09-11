import { useEffect, useState } from "react";
import GroceryCard from "./GroceryCard";
//import resGrocery from "../utils/resGrocery";



const Grocery=()=>{

    const[listOfGrocery,setListOfGrocery]=useState([])
    //const[resListGrocery,setResListGrocery]=useState(resGrocery);

    useEffect(()=>{
        fetchGroceryData();
    },[])

    const fetchGroceryData=async()=>{
            const data=await fetch("https://www.swiggy.com/api/instamart/home?clientId=INSTAMART-APP");
            const json=await data.json();

            setListOfGrocery(json?.data?.widgets[2]?.data);
    }


    return(
       <div className="flex flex-wrap p-2 m-2 ">
             {listOfGrocery.map((grocery,index)=>(
                    <GroceryCard key={index}  data={grocery}/>
                ))}
       </div>
    );
}

export default Grocery;