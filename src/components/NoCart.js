import { EMPTYCART_URL } from "../utils/constant";



const NoCart=()=>{
    return(
        <div>
            <div className=" w-[350px] mx-[490px]">
                <img src={EMPTYCART_URL}/>
            </div>
            <div>
                <h1 className="font-bold text-xl mx-[580px]">Your cart is empty..!</h1>
                <p className="font-semibold text-gray-700 text-lg mx-80">Looks like you have not added anything to you cart. Go ahead & explore top categories.</p>
            </div>
        </div>
    );
}

export default NoCart;

