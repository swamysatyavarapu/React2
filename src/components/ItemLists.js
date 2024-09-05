import { CDN_URL } from "../utils/constant";

const ItemList=({items})=>{

    return(
        <div>
            {items.map((item)=>(
                <div key={item.card.info.id} className="border-b border-gray-300 p-2 m-2 text-left flex justify-between">
                    <div className="w-9/12">
                        <span className="font-semibold">{item.card.info.name}</span>
                        <h4>₹{item.card.info.price/100?item.card.info.price/100:item.card.info.defaultPrice/100}</h4>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>
                    <div className="w-3/12 p-4">
                        <button className="absolute border border-black shadow-md bg-white text-green-400 font-semibold rounded-md my-[68px] w-16">ADD</button> 
                        <img  src={CDN_URL+item.card.info.imageId} />  
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ItemList;