import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
const RestaurantMenu = () => {

    const {id} = useParams();
    const menu = useRestaurantMenu(id);
    const onlineStatus = useOnlineStatus();
    
    if(menu===null){
        return <Shimmer/>;
    }
    if(onlineStatus === false){
        return(
         <h1>
              Looks like you're offline. Please check your internet connection again.
         </h1>
        )
     }
 
    const{
        name,cuisines,costForTwoMessage
    } = menu?.cards[0]?.card?.card?.info;
    const{
       itemCards
    } = menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;
    return(
        <div className="restaurant-menu">
           <h1>{name}</h1>
           <p>{cuisines.join(" , ")} - {costForTwoMessage}</p>
           <ul>
              {
                itemCards.map(item =>
                <li key={item?.card?.info?.id}>
                    {item?.card?.info?.name} 
                </li>
                )
              }
           </ul>
        </div>
    )
}
export default RestaurantMenu;