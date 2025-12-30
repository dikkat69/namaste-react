const User = ({ name, location, age }) => {
  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm hover:shadow-md transition">
      <h2 className="text-lg font-semibold text-gray-900">
        {name}
      </h2>

      <p className="mt-1 text-sm text-gray-600">
        📍 {location}
      </p>

      <span className="mt-3 inline-block rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
        Age {age}
      </span>
    </div>
  );
};

export default User;
