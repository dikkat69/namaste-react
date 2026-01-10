import { DISH_IMG } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div className="space-y-6">
      {items.map((item) => (
        <div
          key={item.id}
          className="flex justify-between gap-4 pb-6 border-b border-gray-100"
        >
          {/* Left */}
          <div className="flex-1">
            <h3 className="font-medium text-gray-900">{item.name}</h3>
            <p className="text-sm text-gray-600 mt-1">₹{item.price}</p>
            <p className="text-sm text-gray-500 mt-1">
              {item.description}
            </p>
          </div>

          {/* Right */}
          <div className="relative w-28 h-24 flex-shrink-0">
            <img
              src={DISH_IMG}
              alt={item.name}
              className="w-full h-full object-cover rounded-lg"
            />

            <button
              className="absolute -bottom-3 left-1/2 -translate-x-1/2
                         bg-white text-green-600 border border-gray-300
                         px-4 py-1 text-sm font-semibold rounded shadow-sm
                         hover:bg-green-50 transition"
            >
              ADD
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
