import React, { useState } from "react";
import { Link } from "react-router-dom";

const FashionDropdown = ({ categories }) => {
  const [activeSubCategory, setActiveSubCategory] = useState(null);

  return (
    <div className="absolute top-46 left-36 text-black bg-white rounded-xl shadow-lg w-[600px] p-4 flex gap-6 z-50">
      {/* Main Category Column */}
      <div className="w-48">
        {categories.map((category) => (
          <div key={category._id}>
            <p className="font-bold mb-2">{category.name}</p>
            {category.subCategories.map((sub) => (
              <div
                key={sub.slug}
                className={`text-sm  flex justify-start cursor-pointer py-1 px-2 rounded ${
                  activeSubCategory === sub.slug ? "bg-blue-50 text-blue-600" : ""
                }`}
                onMouseEnter={() => setActiveSubCategory(sub.slug)}
              >
                {sub.name}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* SubItems Column */}
      <div className="flex-1 border-l pl-4">
        {categories.map((category) =>
          category.subCategories
            .filter((sub) => sub.slug === activeSubCategory)
            .map((sub) => (
              <div key={sub.slug}>
                <p className="font-bold mb-2">{sub.name}</p>
                {sub.subItems.map((item) => (
                  <Link
                    to={`/products/${item.slug}`}
                    key={item.slug}
                    className="block text-sm py-1 hover:text-blue-500"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            ))
        )}
      </div>
    </div>
  );
};

export default FashionDropdown;
