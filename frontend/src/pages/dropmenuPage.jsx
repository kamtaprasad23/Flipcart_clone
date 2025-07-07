import { useEffect, useState } from "react";
import axios from "axios";

function Dropmenupage({ categorySlug }) {
  const [categoryData, setCategoryData] = useState(null);
  const [activeSubCat, setActiveSubCat] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/categories?slug=${categorySlug}`);
        setCategoryData(res.data);
        setActiveSubCat(res.data.subCategories[0]?.name);  // Default first subCategory active
      } catch (error) {
        console.error("Error fetching category data", error);
      } finally {
        setLoading(false);
      }
    };

    if (categorySlug) {
      fetchCategoryData();
    }
  }, [categorySlug]);

  if (loading) {
    return <div className="p-6">Loading {categorySlug} data...</div>;
  }

  if (!categoryData) {
    return <div className="p-6">No data found for {categorySlug}</div>;
  }

  return (
    <div className="absolute top-48 text-black bg-white rounded-xl shadow-lg w-[600px] h-fit p-2 flex z-50">
      {/* Left Menu */}
      <div className="w-56 border-r">
        {categoryData.subCategories.map((subCat) => (
          <div
            key={subCat.name}
            className={`cursor-pointer px-4 py-2 text-sm font-medium ${
              activeSubCat === subCat.name ? "bg-gray-100 text-blue-600" : ""
            }`}
            onMouseEnter={() => setActiveSubCat(subCat.name)}
          >
            {subCat.name}
          </div>
        ))}
      </div>

      {/* Right Sub Items */}
      <div className="flex-1 p-3">
        {categoryData.subCategories
          .filter((subCat) => subCat.name === activeSubCat)
          .map((subCat) => (
            <div key={subCat.name}>
              <h3 className="font-semibold text-gray-600 mb-2">More in {subCat.name}</h3>
              <div className="grid grid-cols-1 gap-2">
                {subCat.subItems.map((item) => (
                  <div
                    key={item.slug}
                    className="text-sm cursor-pointer hover:underline"
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Dropmenupage;
