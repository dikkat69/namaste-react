import ItemList from "./ItemList";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Page Header */}
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Your Cart</h1>

        {cartItems.length > 0 && (
          <button
            onClick={handleClearCart}
            className="text-sm text-red-600 border border-red-200
                       px-4 py-2 rounded-md hover:bg-red-50 transition"
          >
            Clear Cart
          </button>
        )}
      </div>

      {/* Empty State */}
      {cartItems.length === 0 ? (
        <div className="flex flex-col items-center justify-center
                        bg-gray-50 border border-dashed border-gray-300
                        rounded-lg py-20">
          <p className="text-lg font-medium text-gray-700">
            Your cart is empty
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Add some delicious food to get started 🍕
          </p>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <ItemList items={cartItems} />
        </div>
      )}
    </div>
  );
};

export default Cart;
