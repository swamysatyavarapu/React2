import { CDN_URL } from "../utils/constant";

const RestaurantCard=(props)=>{
    const {resData}=props;

    const{name,cuisines,avgRating,areaName,sla}=resData?.info
    return(
        <div className="p-2 m-1 mx-3 w-[225px] rounded-lg  hover:scale-105 border-solid border-black shadow-md h-full">
            <div className="">
                <img className="w-[100%] h-[210px] rounded-t-lg" alt="res-logo" src= {CDN_URL+resData.info.cloudinaryImageId}/>
            </div>
            <div className="p-3">
                 <div className="flex flex-wrap justify-between">
                     <h2 className="font-bold w-9/12">{name}</h2>
                     <h4 className=" p-1 bg-green-500 text-white text-center rounded-lg w-3/12 h-7 font-bold">{avgRating}★</h4>
                 </div>
                 <h4 className="font-medium text-sm text-gray-500 overflow-hidden">{cuisines.join(", ")}</h4>
                 <h4 className="font-medium">{sla.slaString}</h4>
                 <h4 className="pt-2">📍{areaName}</h4>
            </div>
          
        </div>
    );
}

export default RestaurantCard;