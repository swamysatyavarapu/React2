import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Body=()=>{

const [listOfRestaurant, setListOfRestaurant]=useState([]);
const [filterRestaurant,setFilterRestaurant]=useState([]);

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
}


   const onlinestatus=useOnlineStatus();

   if(onlinestatus===false)
   {
        return <h1> No internet connection, Please check your internet connection......!</h1>;
   }
/*
//  Conditional Rendering...
    if(listOfRestaurant.length===0)
    {
        return <Shimmer/>;
    }
*/

    return listOfRestaurant.length===0 ? (<Shimmer/>) : 
    (
        <div className="body">
            <div className="search">
                <input type="Text" id="searchItem" className="border border-solid border-black ml-[450] w-72 rounded-lg" placeholder="Search For Restaurant" value={searchText} 
                      onChange={(e)=>{
                            setSearchText(e.target.value);
                      }}
                />
                <button className="ml-5 bg-blue-100 rounded-lg font-medium border px-1" onClick={()=>{
                    const filterRestaurant=listOfRestaurant.filter((res)=>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                    );

                    setFilterRestaurant(filterRestaurant);
                }}>
                    Search
                </button>
            </div>
            <div className="filter">
                <button className="m-4 bg-gray-100 border border-soild border-black rounded-lg p-1 " onClick={()=>{
                    const filterListed=filterRestaurant.filter((restuarant)=>
                            restuarant.info.avgRating>4.3
                    );
                    setFilterRestaurant(filterListed);
                }}
                >  
                Top Rated Restaurant
                </button>
            </div>
            <div className="flex flex-wrap p-2 m-2">
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