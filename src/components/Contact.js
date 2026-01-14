const Contact = () => {
  return (
    <div className="max-w-md mx-auto mt-16 px-6">
      <h1 className="text-2xl font-semibold text-gray-900 mb-6 text-center">
        Contact Us
      </h1>

      <form className="bg-white shadow-md rounded-xl p-6 space-y-4">
        {/* Name */}
        <div>
          <input
            type="text"
            placeholder="Your name"
            className="w-full border border-gray-300 rounded-lg px-4 py-2
                       focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        {/* Message */}
        <div>
          <textarea
            placeholder="Your message"
            rows="4"
            className="w-full border border-gray-300 rounded-lg px-4 py-2
                       focus:outline-none focus:ring-2 focus:ring-green-500"
          ></textarea>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg
                     font-medium hover:bg-green-700 transition"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
