const Shimmer = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {Array(8)
          .fill("")
          .map((_, index) => (
            <div
              key={index}
              className="animate-pulse rounded-xl border border-gray-200 bg-white p-4 space-y-4"
            >
              {/* Image shimmer */}
              <div className="h-40 w-full rounded-lg bg-gray-200"></div>

              {/* Title */}
              <div className="h-4 w-3/4 rounded bg-gray-200"></div>

              {/* Cuisine */}
              <div className="h-3 w-full rounded bg-gray-200"></div>

              {/* Price + Rating */}
              <div className="flex justify-between items-center">
                <div className="h-3 w-1/3 rounded bg-gray-200"></div>
                <div className="h-3 w-10 rounded bg-gray-200"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
