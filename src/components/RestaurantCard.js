import { RESTAURANT_IMG } from "../utils/constants";
const RestaurantCard = (props) => {
   const { resData } = props;
   const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    sla,
    costForTwo
   } = resData?.info;
    return(
       <div data-testid="resCard" className="w-56 p-5 m-3 bg-gray-100 rounded-lg hover:shadow-xl">
           <img 
            alt="res-card" 
            className='rounded-lg'
            src={RESTAURANT_IMG + cloudinaryImageId} />
            <h3 className="font-bold py-2 text-lg">{name}</h3>
            <h4>{avgRating} stars</h4>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{sla?.slaString}</h4>
            <h4>{costForTwo}</h4>
       </div>
    );
}

export const withSwiggyOneLabel = (RestaurantCard) => {
   return (props) => {
      return (
           <div className="swiggy-one-filter">
            <label className="bg-orange-600 text-white absolute m-2 p-2 rounded-lg">
               Offer available
            </label>
             <RestaurantCard {...props}/>
           </div>
      );
   }
}

export default RestaurantCard;