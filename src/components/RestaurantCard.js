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
       <div className="w-56 p-5 m-3 bg-orange-200 rounded-lg hover:shadow-xl">
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

export default RestaurantCard;