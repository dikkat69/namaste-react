import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  const { name, cuisines, avgRating, costForTwo } = resData?.info;
//console.log("RestaurantCard props:", resData);
  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition duration-300 w-full max-w-70 mx-auto">
      
      {/* Image Wrapper (fixed ratio) */}
      <div className="relative w-full h-44 overflow-hidden rounded-t-2xl">
        <img
          src={CDN_URL + resData.info.cloudinaryImageId}
          alt={name}
          className="w-full h-full object-cover"
        />

        {/* Rating badge */}
        <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs font-semibold px-2 py-1 rounded-lg backdrop-blur">
          ⭐ {avgRating}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col justify-between h-35">
        
        {/* Name */}
        <h3 className="text-base font-semibold text-gray-900 truncate">
          {name}
        </h3>

        {/* Cuisines */}
        <p className="text-sm text-gray-500 line-clamp-2 mt-1">
          {cuisines.join(", ")}
        </p>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between text-sm text-gray-700 pt-3">
          <span className="font-medium">{costForTwo}</span>
          <span className="text-gray-400">for two</span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
