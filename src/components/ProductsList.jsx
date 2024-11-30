import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct, getProduct } from "../Reduxtoolkit/CreateSlice";
import Loading from "./Loading";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function ProductsList() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.cart.cart);
  const { products, loading, error } = useSelector((state) => state.cart);
  const handleClick = (product) => {
    const existingProduct = data.find((item) => item.id === product.id);
    if (existingProduct) {
      toast.error("Product already exists in cart", {
        position: "top-center",
        autoClose: 3000, 
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
      return;
    }
    dispatch(addProduct(product));
    toast.success("Product added to cart!", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
  };
  

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  if (loading)
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loading />
      </div>
    );

  if (error)
    return (
      <div className="flex items-center justify-center min-h-screen text-red-500">
        <p className="text-lg font-semibold">Error: {error}</p>
      </div>
    );

  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only ">Products</h2>

      <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {products.map((product) => (
          <div key={product.id} className="group  p-4 rounded-lg">
            <img
              alt={product.title}
              src={product.thumbnail}
              className="aspect-square w-full rounded-lg bg-gray-200 object-cover group-hover:opacity-75"
            />
            <h3 className="mt-4 text-sm text-gray-700 ">{product.title}</h3>
            <p className="mt-1 text-lg font-medium text-gray-900">
              ${product.price}
            </p>

            <div className="mt-2 flex items-center mb-3">
              <div className="flex ">
                {[...Array(Math.round(product.rating))].map((_, index) => (
                  <svg
                    key={index}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.207c.969 0 1.371 1.24.588 1.81l-3.401 2.48a1 1 0 00-.364 1.118l1.287 3.957c.3.921-.755 1.688-1.54 1.118l-3.401-2.48a1 1 0 00-1.176 0l-3.401 2.48c-.785.57-1.84-.197-1.54-1.118l1.287-3.957a1 1 0 00-.364-1.118L2.708 9.384c-.783-.57-.38-1.81.588-1.81h4.207a1 1 0 00.95-.69l1.286-3.957z" />
                  </svg>
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-500">
                {product.rating}
              </span>
            </div>

            <button
              className="btn btn-outline w-full btn-info"
              onClick={() => handleClick(product)}
            >
              ADD +
            </button>
          </div>
        ))}
          <ToastContainer />
      </div>
    </div>
  );
}

export default ProductsList;
