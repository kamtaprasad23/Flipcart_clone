import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  const fetchProduct = async () => {
    try {
      const { data } = await axios.get(`https://e-commerce-website-2ksc.onrender.com/getproduct/${id}`);
      setProduct(data);
    } catch (err) {
      console.log("Fetch error", err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">{product.name}</h1>
      <img src={product.image} alt="" className="w-60 mb-4" />
      <p className="text-lg font-semibold">₹ {product.price}</p>
      <p className="text-gray-600">{product.description}</p>
    </div>
  );
};

export default ProductDetail;
