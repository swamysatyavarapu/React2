import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantIndex from "./RestaurantIndex";


const Body=()=>{

const [listOfRestaurant, setListOfRestaurant]=useState([]);
const [filterRestaurant,setFilterRestaurant]=useState([]);
const [restaurantIndex,setRestaurantIndex]=useState([]);
const[searchText,setSearchText]=useState("")

useEffect(()=>{
    fetchData();
},[]);


const fetchData = async()=>{
    const data= await fetch(
       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9428958&lng=77.7366242&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const json=await data.json();

       setListOfRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       setFilterRestaurant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
       setRestaurantIndex(json?.data?.cards[0]);
}


   const onlinestatus=useOnlineStatus();

   if(onlinestatus===false)
   {
        return <h1> No internet connection, Please check your internet connection......!</h1>;
   }

    return listOfRestaurant.length===0 ? (<Shimmer/>) : 
    (
        <div className="body">
            <div className="border-b">
                    <RestaurantIndex data={restaurantIndex}/>
            </div>
            <div className="flex p-2 m-2 ">
                <div className="filter ml-[200px] ">
                     <button className="bg-gradient-to-l from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white hover:text-black font-bold p-2 w-[16rem] rounded-lg" onClick={()=>{
                         const filterListed=filterRestaurant.filter((restuarant)=>
                             restuarant.info.avgRating>4.3
                             );
                          setFilterRestaurant(filterListed);
                        }}
                     >  
                     Top Rated Restaurants
                    </button>
                </div>
                <div className="flex border-2 rounded-full justify-between shadow-md px-6 py-1 w-[32rem] ml-[3.4rem]">
                    <input type="Text" id="searchItem" className= "focus:outline-none focus:border-transparent flex-grow text-left" placeholder="Search For Restaurant" value={searchText} 
                          onChange={(e)=>{
                              setSearchText(e.target.value);
                         }}
                    />
                    <button className="" onClick={()=>{
                    const filterRestaurant=listOfRestaurant.filter((res)=>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                            setFilterRestaurant(filterRestaurant);
                         }}>
                    <img className="w-5" src="https://foodie-co.netlify.app/search.2220a127.svg"/>
                   </button>
                </div>
            </div>
            <div className="flex flex-wrap p-6 m-7 gap-y-3">
               {filterRestaurant.map((restuarant)=>(
                <Link
                   key={restuarant.info.id} 
                   to={"/restaurant/"+ restuarant.info.id}
                 >
                <RestaurantCard  resData={restuarant}/>
                </Link>
               ))}

            </div>
        </div>
    );
}

export default Body;