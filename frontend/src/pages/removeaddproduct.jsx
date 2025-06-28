import { useDispatch, useSelector } from "react-redux";
import { closeCart, removeaddproduct } from "../redux/counter/counterSlice";

const Removecart = () => {
  const dispatch = useDispatch();
  const addtocart = useSelector((state) => state.counter.addtocart);
  const isCartOpen = useSelector((state) => state.counter.isCartOpen);

  return (
    <div
      className={`fixed top-13 right-0 h-screen w-[368px] p-5 bg-white border-l border-gray-300 transition-transform duration-700 ease-in-out z-40 ${isCartOpen ? "translate-x-0" : "translate-x-full"
        }`}
    >
      <button
        onClick={() => dispatch(closeCart())}
        className="absolute right-5 top-2 text-2xl font-bold text-red-600"
      >
        ×
      </button>

      <h2 className="text-2xl font-bold mb-4 text-center">🛒 Cart Items</h2>

      {/* 🔥 Yeh wrap wala div */}
      <div className="h-[calc(100vh-80px)] overflow-y-auto pr-2">
        {addtocart.length === 0 ? (
          <p className="text-gray-500 text-center">Your cart is empty.</p>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {addtocart.map((e) => (
              <div
                key={e.cartId}
                className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center"
              >
                <img
                  src={e.image}
                  alt={e.name}
                  className="w-fit h-36 object-cover rounded-md mb-2"
                />
                <div className="text-lg font-medium">{e.name}</div>
                <div className="text-sm text-gray-600">{e.price}</div>
                <button
                  onClick={() => dispatch(removeaddproduct(e.cartId))}
                  className="mt-3 bg-red-500 text-white px-4 py-1 rounded hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>

  );
};
export default Removecart