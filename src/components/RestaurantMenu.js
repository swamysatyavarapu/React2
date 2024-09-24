import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const RestaurantMenu=()=>{

   const {resId}=useParams();

   const resInfo=useRestaurantMenu(resId);

     
    if (resInfo===null) return <Shimmer/>;

    const{ name,cuisines,costForTwoMessage,id,avgRating,totalRatingsString,locality,areaName,sla}= resInfo?.cards[2]?.card?.card?.info;

    const{ itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;


    const categories=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");


    return (
        
        <div className="text-center justify-evenly shadow-2xl">
            <h2 className="font-bold pt-10 pb-4 text-2xl">{name}</h2>
            <div className="border-4 border-gray-100 m-auto p-4 w-6/12 shadow-lg rounded-xl text-left">
                 <h3 className="font-bold text-lg"><span className="w-3 px-1 h-5 m-1 rounded bg-green-600 text-white">★</span>{avgRating}({totalRatingsString}) - {costForTwoMessage}</h3>
                 <h5 className="text-orange-500 font-bold underline">{cuisines.join(", ")}</h5>
                 <h6 className="font-bold text-sm">{locality},{areaName}</h6>
                 <h6 className="font-bold text-sm">{sla.lastMileTravelString} | {sla.slaString}</h6>
            </div>
            <div className="p-4">
                {categories.map((category)=><RestaurantCategory key={category?.card?.card.title} data={category?.card?.card} />)}
            </div>
        </div>
    );
}

export default RestaurantMenu;