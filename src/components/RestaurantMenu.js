import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {

    const [menu,setMenu] = useState(null);
    const {id} = useParams();
    useEffect(()=>{
         fetchData();
    },[]);

    const fetchData = async () => {
         const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=${id}`);
         const json = await data.json();
         setMenu(json.data);
    }
    if(menu===null){
        return <Shimmer/>;
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