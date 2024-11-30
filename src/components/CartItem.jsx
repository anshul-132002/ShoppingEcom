import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrementproduct,
  incrementProduct,
  removeAllProduct,
  removeProduct,
} from "../Reduxtoolkit/CreateSlice";
import { Link } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";
import { IoMdRemoveCircleOutline } from "react-icons/io";

function CartItem() {
  const dispatch = useDispatch();
  const CartItem = useSelector((state) => state.cart.cart);
  const handleDelete = (id) => {
    dispatch(removeProduct(id));
  };
  const handleDeleteAll = () => {
    dispatch(removeAllProduct());
  };
  const handleIncrement = (id) => {
    dispatch(incrementProduct(id));
  };
  const handleDecrement = (id) => {
    dispatch(decrementproduct(id));
  };
  const total = CartItem.reduce((total, item) => {
    const data = Math.floor(total + item.price * item.quantity);
    return data;
  }, 0);
  return (
    <div>
      <h1 className="text-xl font-mono flex justify-center  uppercase  ">Total Price :
        <span className="text-red-600 font-extrabold">  $ {total}</span>
      </h1>
      {CartItem.length === 0 ? (
        <p className="text-center text-lg font-semibold">Your cart is empty!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {CartItem?.map((item) => (
            <div
              key={item.id}
              className="card card-compact bg-base-100 shadow-xl"
            >
              <figure>
                <img
                  src={item.images}
                  className="h-72 w-72 bject-contain"
                  alt={item.title}
                />
              </figure>
              <div className="card-body">
                <div className="flex justify-between items-center">
                  <span className="card-title font-bold">{item.title}</span>

                  <IoMdAddCircleOutline
                    className="text-xl"
                    onClick={() => handleIncrement(item.id)}
                  />

                  <span className="text-red-600 font-bold">{item.price}</span>
                  <IoMdRemoveCircleOutline
                    className="text-xl"
                    onClick={() => handleDecrement(item.id)}
                  />
                </div>
                {/* <p>{item.description.slice(0, 50)}</p> */}
                <div className="card-actions justify-center mt-4">
                  <button
                    className="btn btn-warning"
                    onClick={() => handleDelete(item.id)}
                  >
                    Remove now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div className="flex justify-center mt-10">
        {CartItem.length == 0 ? (
          <Link to={"/"}>
            <button className="btn btn-outline flex justify-center align-middle">
              Go to Home{" "}
            </button>{" "}
          </Link>
        ) : (
          <button
            className="btn btn-error flex justify-center align-middle"
            onClick={() => handleDeleteAll()}
          >
            Remove All
          </button>
        )}
      </div>
    </div>
  );
}

export default CartItem;
