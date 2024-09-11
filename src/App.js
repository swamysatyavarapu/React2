import React,{lazy,Suspense}from "react";
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Body from "./components/Body"
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
import Login from "./components/Login";
import GroceryCart from "./components/GroceryCart";
//import Grocery from "./components/Grocery";



const AppLayout=()=>{
    return(
        <Provider store={appStore}>
            <UserContext.Provider value={{name:"Swamy"}}>
                 <div className="app">
                      <Header/>
                      <Outlet/>
                 </div>
             </UserContext.Provider>
        </Provider>
    );
}

const Grocery=lazy(()=> import("./components/Grocery"));

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:< Body />,
            },
            {
                path:"/about",
                element:< About />,
            },
            {
                path:"/Contact",
                element:< Contact />,
            },
            {
                path:"/Grocery",
                element:<Suspense fallback={<h1>Loading....!</h1>}>< Grocery/></Suspense>
            },
            {
                path:"/restaurant/:resId",
                element:<RestaurantMenu/>,
            },
            {
                path:"/Cart",
                element:<Cart/>,
            },
            {
                path:"/Login",
                element:<Login/>,
            },
            {
                path:"/Grocerycart",
                element:<GroceryCart/>,
            }
        ],
        errorElement:<Error/>,
    },
])

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);