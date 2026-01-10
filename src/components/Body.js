import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useRestaurantList from "../utils/useRestaurantList";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const restaurantList = useRestaurantList();

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setFilteredRestaurant(restaurantList);
  }, [restaurantList]);

  const isOnline = useOnlineStatus();

  if (!isOnline) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl font-semibold mb-2">
          Restaurant Menu
        </h2>
        <p className="text-gray-600">
          You are offline. Please check your internet connection.
        </p>
      </div>
    );
  }

  if (restaurantList.length === 0) return <Shimmer />;

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-3xl font-bold text-center mb-6">
        Restaurant Menu
      </h2>

      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-8">
        <input
          className="w-full sm:w-72 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400"
          type="text"
          placeholder="Search restaurants..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        <button
          className="px-5 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition"
          onClick={() => {
            const filtered = restaurantList.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(filtered);
          }}
        >
          Search
        </button>

        <button
          className="px-5 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition"
          onClick={() => {
            const filtered = restaurantList.filter(
              (res) => res.info.avgRating >= 4.5
            );
            setFilteredRestaurant(filtered);
          }}
        >
          Top Rated
        </button>
      </div>

      {/* Restaurant Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={`/restaurant/${restaurant.info.id}`}
            className="hover:scale-[1.02] transition"
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
