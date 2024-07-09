import React from "react";
import "./Cart.css";

const Cart = ({ cart }) => {
  return (
    <div className="bg-neutral text-white p-5 rounded-md fixed  right-[4%] w-[300px]">
      <h1 className="my-3 text-2xl">Selected Items: {cart.length}</h1>
      <p className="my-3 text-xl">Shipping Charge: $15</p>
      <p className="my-3 text-xl">Price: $115</p>
      <p className="my-3 text-xl">Tax: $10</p>
      <h1 className="my-3 text-2xl">Total Price: $142.23</h1>
      <div className="my-5">
        <button className="btn  btn-sm text-black">Clear Cart</button>
        <button className="btn  btn-sm text-black ms-5">
          Process the Order
        </button>
      </div>
    </div>
  );
};

export default Cart;
