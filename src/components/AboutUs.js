import React from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";
class AboutUsComponent extends React.Component{
  constructor(props){
     super(props);
  }
  componentDidMount(){
  }
  render(){
    return(
      <div>This is About US page for demo purposes
         {/* <User name={"Aish"} number={1234} type={"Functional Component"}></User> */}
         <UserClass></UserClass>
      </div>
    )
  }
};
export default AboutUsComponent;