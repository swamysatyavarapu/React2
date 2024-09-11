import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import groceryReducer from "./grocerySlice";

const appStore=configureStore(
    {
        reducer:{
            cart:cartReducer,
            grocery:groceryReducer,
        },
    }
);

export default appStore;