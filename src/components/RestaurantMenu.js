import { useState} from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import useOnlineStatus from "../utils/useOnlineStatus";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {

    const {id} = useParams();
    const menu = useRestaurantMenu(id);
    const onlineStatus = useOnlineStatus();
    const [showIndex, setShowIndex] = useState(0);
    
    if(menu===null){
        return <Shimmer/>;
    }
    if(onlineStatus === false){
        return(
         <h1>Looks like you're offline. Please check your internet connection again.</h1>
        )
    }
 
    const{
        name,cuisines,costForTwoMessage
    } = menu?.cards[0]?.card?.card?.info;
   
    const categories = menu?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        restaurantCard => restaurantCard.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    )
    return(
        <div className="text-center">
           <h1 className="font-bold text-xl my-5">{name}</h1>
           <p className="font-extralight text-lg">{cuisines.join(" , ")} - {costForTwoMessage}</p>
            {categories.map((category,index) =>
                <RestaurantCategory category={category?.card?.card}
                    show={showIndex === index ? true : false}
                    setShowIndex={() =>
                        setShowIndex(index)
                    }
                />
            )}
        </div>
    )
}
export default RestaurantMenu;