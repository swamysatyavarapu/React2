import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";


const RestaurantMenu=()=>{

   const {resId}=useParams();

   const resInfo=useRestaurantMenu(resId);

     
    if (resInfo===null) return <Shimmer/>;

    const{ name,cuisines,costForTwoMessage,id,avgRating,totalRatingsString,locality,areaName,sla}= resInfo?.cards[2]?.card?.card?.info;

    const{ itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

    return (
        <div className="restaurant-menu">
            <div className="res-name">
            <h2>{name}</h2>
            </div>
            <div className="res-cuisines">
            <h4>{avgRating}({totalRatingsString}) - {costForTwoMessage}</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{locality},{areaName}</h4>
            <h4>{sla.lastMileTravelString} | {sla.slaString}</h4>
            </div>
            <div className="menu"><h3>MENU</h3></div>
            <div className="res-menu">
            <ul>
                {itemCards.map((item)=> 
                      <p key={item.card.info.id}>
                       <li> {item.card.info.name}</li> - Rs.{item.card.info.price/100}
                      </p>
                    )
                }
            </ul>
            </div>
        </div>
    );
}

export default RestaurantMenu;