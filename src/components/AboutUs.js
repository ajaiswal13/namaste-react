import React from "react";
import UserClass from "./UserClass";
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
         <UserClass name={"Aish"} number={1234} type={"Class based Component"}></UserClass>
      </div>
    )
  }
};
export default AboutUsComponent;