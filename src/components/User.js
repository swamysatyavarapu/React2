import React from "react";

class User extends React.Component{

    constructor(props)
    {
        super(props);

        this.state={
            userInfo:{
                name:"dummy",
                location:"Default",
            }
        }

    }

   async componentDidMount(){
        
    const data=await fetch("https://api.github.com/users/swamysatyavarapu");
    const json=await data.json();
    console.log(json);

    this.setState({
        userInfo:json,
    }
    )
 }


    render(){

        console.log("Render...!")
        const{name,location}=this.state.userInfo;
        return(
            <div className="user-class">
                <h2>Name:{name}</h2>
                <h3>Location: {location}</h3>
                <h3>Contact:96xxxxx42</h3>
            </div>
        );
    }
}

export default User;