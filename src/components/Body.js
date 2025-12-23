import RestaurantCard from "./RestauranrCard";
import { resList } from "../utils/mockData"; 
import { useState } from "react";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resList);
  return (
    <div className="body">
      <h2 className="menu-heading">Restaurant Menu</h2>
      <div className="filter-btn">
        <button className="Filter-btn" onClick={() => {
          const filterlist = restaurantList.filter((res) => res.info.avgRating > 4.5);
          setRestaurantList(filterlist);
        }}>
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-menu-container">
        {restaurantList.map((restaurant) => {
          return <RestaurantCard key={restaurant.info.id} resData={restaurant} />;
        })}
      </div>
    </div>

  );
};

export default Body;