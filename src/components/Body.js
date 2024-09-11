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

        console.log(json);

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
                     <button className=" bg-black text-white shadow-gray-300 border p-1 border-soild border-black rounded-lg" onClick={()=>{
                         const filterListed=filterRestaurant.filter((restuarant)=>
                             restuarant.info.avgRating>4.3
                             );
                          setFilterRestaurant(filterListed);
                        }}
                     >  
                     Top Rated Restaurant
                    </button>
                </div>
                <div className="search">
                    <input type="Text" id="searchItem" className="border border-solid border-black ml-[150px] w-72 rounded-lg p-1" placeholder="Search For Restaurant" value={searchText} 
                          onChange={(e)=>{
                              setSearchText(e.target.value);
                         }}
                    />
                    <button className="ml-5 bg-black text-white rounded-lg font-medium border p-1" onClick={()=>{
                    const filterRestaurant=listOfRestaurant.filter((res)=>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                            setFilterRestaurant(filterRestaurant);
                         }}>
                    Search
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