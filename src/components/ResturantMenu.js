import { useParams } from "react-router-dom";
import { useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
import { restaurantMenus } from "../utils/mockData";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurant = restaurantMenus[resId];

  const [showIndex, setShowIndex] = useState(null);

  if (!restaurant) return <Shimmer />;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Restaurant Info */}
      <h1 className="text-3xl font-bold">{restaurant.name}</h1>
      <p className="text-gray-600 mt-1">
        {restaurant.cuisines.join(", ")}
      </p>
      <p className="mt-2 text-gray-700">
        {restaurant.costForTwoMessage}
      </p>

      {/* Categories Accordion */}
      <div className="mt-8">
        {restaurant.categories.map((category, index) => (
          <RestaurantCategory
            key={category.title}
            data={category}               // ✅ THIS MUST BE category
            showItems={index === showIndex}
            setShowIndex={() =>
              setShowIndex(index === showIndex ? null : index)
            }
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
