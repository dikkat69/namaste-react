import { useRouteError, Link } from "react-router-dom";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-6">
      <div className="max-w-md text-center rounded-xl bg-white p-8 shadow-md">
        
        <h1 className="text-4xl font-bold text-gray-900">
          Oops!
        </h1>

        <p className="mt-2 text-gray-600">
          Something went wrong.
        </p>

        <p className="mt-4 text-sm text-gray-500">
          {error?.status} — {error?.statusText}
        </p>

        <Link
          to="/"
          className="mt-6 inline-block rounded-lg bg-black px-6 py-3 text-sm font-medium text-white hover:bg-gray-800 transition"
        >
          Go Back Home
        </Link>
      </div>
    </div>
  );
};

export default Error;
