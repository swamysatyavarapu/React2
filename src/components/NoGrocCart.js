import { EMPGROC_URL } from "../utils/constant";


const NoGrocCart=()=>{
    return(
        <div className="no-groc-cart">
            <div className="w-[480px] mx-[420px] mt-4">
                <img src={EMPGROC_URL}/>
            </div>
            <div>
                <h1 className="font-bold text-xl mx-[550px] mt-5">Your cart is empty..!</h1>
                <p className="mx-[150px] mt-2 font-semibold text-gray-700">Looks like you haven’t added anything yet. Order now, and get your groceries delivered right to your doorstep within 2 minutes! Freshness guaranteed, hassle-free, and lightning-fast delivery, so you can enjoy healthy living without the wait! </p>
            </div>
        </div>
    );
}

export default NoGrocCart;