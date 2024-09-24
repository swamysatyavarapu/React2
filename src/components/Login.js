import { useState } from "react";
import { useNavigate}  from "react-router-dom";


const Login=()=>{

    const[isModalOpen,setIsModalOpen]=useState(false);
    const navigate=useNavigate();

    const handleLogin=()=>{
        setIsModalOpen(true);
    }

    const handleLoginClear=()=>{
        navigate("/");
    }


    return(

         <div className="w-5/12 m-auto mt-20">
            <div class="">
                <div className="m-10">
                    <h1 className=" text-center font-bold text-3xl font-serif">Welcome to <span className="text-3xl  text-indigo-700">F</span><span className=" text-xl pt-[8px] text-black">oodie.co</span></h1>
                </div>
                <form class="bg-white shadow-lg rounded px-8 pt-6 pb-8 mb-4">
                    <div class="mb-4">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                            Username
                        </label>
                        <input class="shadow appearance-none hover:border-gray-500 border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
                    </div>
                    <div class="mb-6">
                         <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                              Password
                        </label>
                        <input class="shadow appearance-none border hover:border-gray-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
                    </div>
                    <div class="flex items-center justify-between">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={()=>{handleLogin()}} type="button">
                            login
                        </button>
                        <a class="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                            Forgot Password?
                        </a>
                    </div>
                </form>
                <p class="text-center text-gray-500 text-xs">
                &copy;2020 Acme Corp. All rights reserved.
                </p>
            </div>
            {isModalOpen && (
                <div className="flex fixed items-center justify-center bg-black inset-0 bg-opacity-50">
                    <div className="bg-slate-100 font-serif p-6 rounded shadow-lg mx-auto text-center">
                        <h2 className="text-lg font-serif font-bold mb-4">Logged in Successfully !</h2>
                        <button className="bg-green-600 text-white p-2 mt-4 font-serif rounded text-sm w-12" onClick={()=>{handleLoginClear()}}>Ok</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Login;