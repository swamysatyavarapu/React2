import { Index_URL } from "../utils/constant";


const RestaurantIndexImage=(props)=>{

    const{data}=props;

    return(
        <div>
            <div className=" mr-5 p-1 w-[200px] hover:scale-105 cursor-pointer">
                <img src={Index_URL+data.imageId}/>
            </div>
        </div>
    );
}

export default RestaurantIndexImage;