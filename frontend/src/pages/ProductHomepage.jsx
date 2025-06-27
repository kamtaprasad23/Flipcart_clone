import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useDispatch } from "react-redux";
import {addproduct} from "../redux/counter/counterSlice.jsx"

const ProductHomepage = () => {
  const [products, setProducts] = useState({});
  const dispatch = useDispatch()

  useEffect(() => {
    axios
      .get("http://localhost:5000/homepage-data")
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((error) => {
        console.error("Failed to fetch products:", error);
      });
  }, []);

  const CategorySection = ({ title, items, isScrollable = true }) => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
      const { current } = scrollRef;
      const cardWidth = 220;
      if (direction === "left") {
        current.scrollBy({ left: -cardWidth, behavior: "smooth" });
      } else {
        current.scrollBy({ left: cardWidth, behavior: "smooth" });
      }
    };

    return (
      <div className="bg-white py-6 px-4 rounded-xl mb-6 shadow relative">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">{title}</h2>

        {/* Scroll Buttons */}
        {isScrollable && (
          <>
            <button
              onClick={() => scroll("left")}
              className="absolute left-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-gray-200 hover:bg-gray-300"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="absolute right-2 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-gray-200 hover:bg-gray-300"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}

        {/* Product List */}
        <div
          ref={scrollRef}
          className={`${
            isScrollable
              ? "flex overflow-x-auto no-scrollbar gap-4 scroll-smooth"
              : "grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          }`}
        >
          {items?.map((item) => (
            <div
              key={item._id}
              className="min-w-[200px] rounded-lg p-3 flex flex-col items-center hover:shadow transition"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-32 h-32 object-contain mb-2"
              />
              <div className="text-sm font-medium text-center">{item.title}</div>
              <div className="text-green-600 font-semibold mt-1">₹{item.price}</div>
              <button
               onClick={()=>dispatch (addproduct(
                {
                ...item,
                id: item._id,        
                cartId: Date.now() + Math.random()  
              }
               ))}
                className="mt-2 px-3 py-1 bg-blue-600 text-white text-xs rounded hover:bg-blue-700 transition"> 
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-full mx-auto p-4 bg-gray-50 min-h-screen">
      <CategorySection title="Electronics" items={products.electronics} />
      <CategorySection title="Beauty, Food, Toys & More" items={products.beauty} />
      <CategorySection title="Sports, Healthcare & More" items={products.sports} />
      {/* Disable scroll for this category */}
      <CategorySection
        title="Discounts for You"
        items={products.discounts}
        isScrollable={false}
      />
      <CategorySection title="Home Decor & Furnishings" items={products.homeStyle} />
    </div>
  );
};

export default ProductHomepage;
