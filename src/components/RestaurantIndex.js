
import RestaurantIndexImage from "./RestaurantIndexImage";



const RestaurantIndex=(props)=>{

   const {data}=props;


   const indexImage = data?.card?.card?.gridElements?.infoWithStyle?.info;

   console.log(indexImage);

    return(
        <div>
            <div className="m-2">
                <h1 className="font-bold text-3xl px-8 pt-2">What's On Your Mind?</h1>
            </div>
            <div className="flex justify-between overflow-scroll scroll-auto mt-4 mb-2 no-scrollbar pr-2">
                {indexImage.map((item,index)=>(
                    <RestaurantIndexImage key={index} data={item}/>
                ))
                }
            </div>
        </div>
    );
}

export default RestaurantIndex;