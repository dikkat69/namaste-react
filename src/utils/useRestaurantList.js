import { useState, useEffect } from "react";
import { RestaurantList_URL } from "./constants";

const useRestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch(RestaurantList_URL);
      const json = await res.json();

      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setRestaurantList(restaurants || []);
    } catch (err) {
      console.error("Failed to fetch restaurants", err);
      setRestaurantList([]);
    }
  };

  return restaurantList;
};

export default useRestaurantList;
