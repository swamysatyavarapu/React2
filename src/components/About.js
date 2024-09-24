import User from "./User";

const About=()=>{
    return (
        <div>
            <div className="p-4 m-4 border-b border-gray-300">
                <h1 className="font-serif text-5xl">About Us</h1>
            </div>
            <div className="w-8/12">
            <p className="font-bold text-lg ml-10">This app is fully developed using ReactJS, with the primary goal of providing users with a convenient platform that combines both grocery and food delivery services. It aims to simplify daily tasks by offering easy access to grocery shopping and meal ordering, all in one app.
             </p>
            </div>
            <h1 className="font-bold text-green-600 p-4 text-xl">Our Serives</h1>
            <div className="flex flex-wrap cursor-pointer ">
                <img className="rounded-2xl ml-40 mx-7 p-2 w-[300px] border border-gray-100 shadow-lg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR77z-dJaB6Q6i_QqR_4AtdkVFRpGkmEYtE5YQ78rYauhbYZj25yNetgSJUkJM5Y1Jn328&usqp=CAU"/>
                <img className="rounded-2xl mx-7 p-2 w-[300px] border border-gray-100 shadow-lg" src="https://5.imimg.com/data5/SELLER/Default/2022/10/IF/GU/MH/131222222/online-grocery-shopping-store-rohini-500x500.jpg"/>
                <img className="rounded-2xl mx-7 p-2 w-[300px] border border-gray-100 shadow-lg" src="https://www.posist.com/restaurant-times/wp-content/uploads/2020/04/coronavirus-food-delivery-1.jpg"/>
            </div>
            <div className="text-center p-2 m-2 mt-6">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-500">© 2024 <span className="font-bold text-xl text-blue-600"> Swamy's Product™</span>. All Rights Reserved.
                </span>
                <h1 className="text-sm text-gray-500 sm:text-center dark:text-gray-500 mr-2">Made with <span className="font-bold dark:text-gray-700">REACT</span> by</h1>
                <h1 className="text-sm text-gray-500 sm:text-center dark:text-gray-500 mr-2">Swamy♥ Mail Me at swamysatyavarapu@gmail.com</h1>
            </div>
        </div>
    );
}

export default About;