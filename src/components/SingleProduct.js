import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Failed to fetch product details.");
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-blue-500 text-lg font-semibold">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="text-red-500 text-lg font-semibold">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="mb-6 bg-gray-700 text-white px-4 py-2 rounded-lg hover:bg-gray-800"
        >
          Back
        </button>
        <div className="bg-white rounded-lg shadow-md p-6 md:flex md:gap-8">
          <div className="md:w-1/4 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.title}
              className="rounded-lg max-w-full h-auto"
            />
          </div>
          <div className="md:w-2/3">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">
              {product.title}
            </h1>
            <p className="text-gray-600 text-lg mb-4">{product.description}</p>
            <div className="text-gray-700 text-lg">
              <p className="mb-2">
                <span className="font-semibold">Price:</span> ${product.price}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Category:</span> {product.category}
              </p>
              <p className="mb-2">
                <span className="font-semibold">Rating:</span> {product.rating.rate} ⭐
                ({product.rating.count} reviews)
              </p>
              <p className="mb-2">
                <span className="font-semibold">Product ID:</span> {product.id}
              </p>
            </div>
            <button
              onClick={() => alert("Added to cart!")}
              className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
