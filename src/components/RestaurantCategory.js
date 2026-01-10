import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  const handleClick = () => {
    setShowIndex();
  };

  return (
    <div className="max-w-3xl mx-auto">
      {/* Category Header */}
      <div
        onClick={handleClick}
        className="flex justify-between items-center py-5 cursor-pointer
                   border-b border-gray-200 hover:bg-gray-50 transition"
      >
        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            {data.title}
          </h2>
          <p className="text-sm text-gray-500">
            {data.items.length} items
          </p>
        </div>

        {/* Arrow */}
        <span
          className={`transform transition-transform duration-300 text-gray-500 ${
            showItems ? "rotate-180" : ""
          }`}
        >
          ⌄
        </span>
      </div>

      {/* Items */}
      {showItems && (
        <div className="mt-2 mb-6">
          <ItemList items={data.items} />
        </div>
      )}
    </div>
  );
};

export default RestaurantCategory;
