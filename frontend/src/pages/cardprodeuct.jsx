import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, addproduct } from '../redux/counter/counterSlice.jsx'

const Product = () => {
  const [products, setProducts] = useState([]);
  const scrollRef = useRef(null);

  const dispatch = useDispatch()

  useEffect(() => {
    axios.get("https://e-commerce-website-backend-oq8z.onrender.com/getproducts")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch products:", error);
      });
  }, []);

  // Function to scroll by one card width
  const scroll = (direction) => {
    const { current } = scrollRef;
    const cardWidth = 210; // ek card ki width (including margin)
    if (direction === "left") {
      current.scrollBy({ left: -cardWidth, behavior: "smooth" });
    } else {
      current.scrollBy({ left: cardWidth, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white py-8 px-4">
      <h2 className="text-2xl font-bold mb-4">Best of Electronics</h2>

      {/* Scroll buttons */}
      <div className="relative">
        {/* Left Button */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-gray-200 hover:bg-gray-300"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto no-scrollbar gap-4 scroll-smooth"
        >
          {products.map((e) => (
            <div
              key={e._id}
              className="min-w-[250px] max-w-[250px]  rounded-lg overflow-hidden shadow-sm"
            >
              <img
                src={e.image}
                alt={e.name}
                className="w-full h-60 object-cover"
              />
              <div className="p-2">
                <h3 className="text-sm font-medium truncate">{e.name}</h3>
                <p className="text-xs text-gray-500 mt-1">From {e.price}</p>
              </div>
              <button onClick={() =>
                dispatch(addproduct({
                  cartId: e._id,   
                  name: e.name,
                  image: e.image,
                  price: e.price
                }))
              }
                className="mx-15 p-1 px-2 bg-blue-600 text-white text-xs text-white rounded cursor-pointer">Add to Cart</button>
            </div>
          ))}
        </div>

        {/* Right Button */}
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-gray-200 hover:bg-gray-300"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};

export default Product;
