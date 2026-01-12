import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";


const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  const isOnline = useOnlineStatus();

const cartItems = useSelector((store)=> store.cart.items);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={LOGO_URL}
            alt="Logo"
            className="h-15 w-20 rounded-md"
          />
          <span className="text-xl font-bold text-gray-800 tracking-tight">
            Food<span className="text-orange-500">Panda</span>
          </span>
        </Link>

        {/* Nav */}
        <nav>
          <ul className="flex items-center gap-6 text-gray-700 font-medium">
            
            <li className="flex items-center gap-1 text-sm">
              <span
                className={`h-2 w-2 rounded-full ${
                  isOnline ? "bg-green-500" : "bg-red-500"
                }`}
              ></span>
              {isOnline ? "Online" : "Offline"}
            </li>

            <li>
              <Link className="hover:text-orange-500 transition" to="/">
                Home
              </Link>
            </li>

            <li>
              <Link className="hover:text-orange-500 transition" to="/about">
                About
              </Link>
            </li>

            <li>
              <Link className="hover:text-orange-500 transition" to="/contact">
                Contact
              </Link>
            </li>

            <li className="text-balance cursor-pointer hover:text-orange-500 transition">
              <Link to="/cart">🛒 Cart - {cartItems.length} Items</Link>
            </li>

            <li>
              <button
                onClick={() =>
                  setLoginBtn(loginBtn === "Login" ? "Logout" : "Login")
                }
                className="ml-2 rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-orange-600 transition"
              >
                {loginBtn}
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
