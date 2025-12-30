import User from "./user";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      
      {/* Heading Section */}
      <div className="mb-10">
        <h1 className="text-3xl font-bold text-gray-900">
          About Us
        </h1>
        <p className="mt-2 max-w-2xl text-gray-600">
          This is the about page content.  
          We are building a modern food discovery experience using React.
        </p>
      </div>

      {/* Users Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <User
          name="John Doe Chaudhary"
          location="Haryana"
          age="21"
        />

        <UserClass
          name="Jane Malik"
          location="Delhi"
          age="25"
        />
      </div>
    </div>
  );
};

export default About;
