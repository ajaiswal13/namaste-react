import React from "react";
class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user:{}
        }
    }
    async componentDidMount(){
        const data = await fetch("https://api.github.com/users/aishwaryaj13");
        const json = await data.json();
        this.setState({
            user:json
        })
    }
    
    render(){
        const {login,url,avatar_url} = this.state.user;
        return(
            <div className="user-card">
               <h2>Name : Aishwarya Jaiswal</h2>
               <img src={avatar_url} />
               <h3>Github Id : {login}</h3>
               <h3>Url : {url}</h3>
            </div>
         );
    }
}

export default UserClass;