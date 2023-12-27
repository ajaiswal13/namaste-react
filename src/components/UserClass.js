import React from "react";
import UserContext from "../utils/UserContext";
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
                <UserContext.Consumer>
                    {({ loggedInUser }) => <h2>Name : { loggedInUser}</h2>}
               </UserContext.Consumer>
               <img src={avatar_url} />
               <h3>Github Id : {login}</h3>
               <h3>Url : {url}</h3>
            </div>
         );
    }
}

export default UserClass;