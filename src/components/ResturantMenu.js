import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { restaurantMenus } from "../utils/mockData";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const restaurant = restaurantMenus[resId];

  if (!restaurant) return <Shimmer />;

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      
      {/* Restaurant Info */}
      <div className="mb-8 border-b pb-6">
        <h1 className="text-3xl font-bold text-gray-900">
          {restaurant.name}
        </h1>

        <p className="text-gray-600 mt-2">
          {restaurant.cuisines?.join(", ")}
        </p>

        <p className="mt-2 inline-block bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full">
          {restaurant.costForTwoMessage}
        </p>
      </div>

      {/* Menu */}
      {restaurant.menu?.length === 0 && (
        <p className="text-gray-500">No menu available</p>
      )}

      <div className="space-y-8">
        {restaurant.menu?.map((section) => (
          <div key={section.category}>
            
            {/* Category */}
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
              {section.category}
            </h2>

            {/* Items */}
            <div className="space-y-3">
              {section.items?.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center bg-white border border-gray-100 rounded-lg px-4 py-3 hover:bg-gray-50 transition"
                >
                  <span className="text-gray-900 font-medium">
                    {item.name}
                  </span>

                  <span className="text-gray-700 font-semibold">
                    ₹{item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
