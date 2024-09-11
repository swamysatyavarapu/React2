import { createSlice } from "@reduxjs/toolkit";



const grocerySlice=createSlice({
    name:'grocery',
    initialState:{
        items:[],
    },
    reducers:{
        addGroceryItem:(state,action)=>{
            state.items.push(action.payload);
        },
        removeGroceryItem:(state)=>{
            state.items.pop();
        },
        clearGroceryCart:(state)=>{
            state.items.length=0;
        }
    }
})

export const{addGroceryItem,removeGroceryItem,clearGroceryCart}=grocerySlice.actions;

export default grocerySlice.reducer;