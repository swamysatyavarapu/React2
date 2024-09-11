import { Index_URL } from "../utils/constant";


const RestaurantIndexImage=(props)=>{

    const{data}=props;

    console.log(data);
    return(
        <div>
            <div className=" mr-5 p-1 w-[200px]">
                <img src={Index_URL+data.imageId}/>
            </div>
        </div>
    );
}

export default RestaurantIndexImage;