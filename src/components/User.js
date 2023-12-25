import { useState } from "react";

const User = (props) => {
  const {name,number,type} = props;
  const[count1] = useState(1);
  const[count2] = useState(2);
  return(
     <div className="user-card">
        <h2>Name : {name}</h2>
        <h3>Number : {number}</h3>
        <h3>Type : {type}</h3>
        <p>Count1:{count1} Count2: {count2}</p> 
     </div>
  );
};
export default User;