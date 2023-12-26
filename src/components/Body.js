import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
 const Body = () => {
    const [listOfRestaurants,setListOfRestaurants] = useState([]);
    const [filteredRestaurants,setFilteredRestaurants] = useState([]);
    const [searchText,setSearchText] = useState("");
    const onlineStatus = useOnlineStatus();

    useEffect(()=>{
          fetchData();
    },[]);

    const fetchData = async () => {
            const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
            const json = await response.json();
            setListOfRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    if(onlineStatus === false){
        return(
         <h1>
              Looks like you're offline. Please check your internet connection again.
         </h1>
        )
     }
 
   
    return listOfRestaurants.length===0 ? <Shimmer/> : (
        <div className="body">
            <div className="filter">
                <div className="search">
                   <input type="text" name="Search" className="searchbar" value={searchText}
                    onChange={(e) => setSearchText(e.target.value)}/>
                   <button name="search-btn"
                    onClick={() => {
                        const filteredRestaurant = listOfRestaurants.filter(
                            (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
                            );
                            setFilteredRestaurants(filteredRestaurant);
                   }}>Search</button>
                </div>
                <button className="filter-btn" onClick={() => {
                    const filteredList = listOfRestaurants.filter(res => res.info.avgRating > 4.5);
                    setFilteredRestaurants(filteredList);
                }}>Top Rated Restaurants</button>
            </div>
            <div className="restaurant-container">
               {filteredRestaurants.map((restaurant) =>{
                    return <Link key={restaurant.info.id} to={"/restaurants/" + restaurant.info.id}><RestaurantCard resData={restaurant}/></Link>;
                })}
            </div>
        </div>
    );
 }
export default Body;