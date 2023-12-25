import { RESTAURANT_IMG } from "../utils/constants";
const RestaurantCard = (props) => {
   const {resData} = props;
   const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    sla,
    costForTwo
   } = resData?.info;
    return(
       <div className="restaurant-card">
           <img 
            alt="res-card" 
            className="res-card"
            src={RESTAURANT_IMG + cloudinaryImageId} />
            <h3>{name}</h3>
            <h4>{avgRating} stars</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{sla?.slaString}</h4>
            <h4>{costForTwo}</h4>
       </div>
    );
}

export default RestaurantCard;