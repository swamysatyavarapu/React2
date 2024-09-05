import { CDN_URL } from "../utils/constant";

const RestaurantCard=(props)=>{
    const {resData}=props;

    const{name,cuisines,avgRating,costForTwo,sla}=resData?.info
    return(
        <div className="p-2 m-2 w-[200px] bg-gray-100 rounded-lg hover:border border-solid border-black ">
            <img className="rounded-lg" alt="res-logo" src= {CDN_URL+resData.info.cloudinaryImageId}/>
            <h2 className="font-bold py-2">{name}</h2>
            <h4 className="font-semibold">{cuisines.join(", ")}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo}</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    );
}

export default RestaurantCard;