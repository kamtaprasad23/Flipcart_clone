import { useDispatch, useSelector } from "react-redux"
import { removeaddproduct } from "../redux/counter/counterSlice";

const Removecart = ()=>{
    const dispatch = useDispatch();
    const addtocart = useSelector((state)=>state.counter.addtocart);
    return(
        <>
        <div className="p-5">
      <h2 className="text-2xl font-bold mb-4 text-center">🛒 Cart Items</h2>

      {addtocart.length === 0 ? (
        <p className="text-gray-500 text-center">Your cart is empty.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {addtocart.map((e) => (
  <div key={e.cartId} className="bg-white p-4 rounded-xl shadow-md flex flex-col items-center">
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
      Remove from Cart
    </button>
  </div>
))}

        </div>
      )}
    </div>
        </>
    )
}
export default Removecart