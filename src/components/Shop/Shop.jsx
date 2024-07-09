import React, { useState } from "react";
import Product from "./Product/Product";
import Cart from "./Cart/Cart";

const Shop = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    newCart = [...cart, selectedProduct];
    setCart(newCart);
  };

  return (
    <div className="container mx-auto pt-5">
      <div className="flex justify-between">
        <div className="w-9/12 me-3">
          <Product handleAddToCart={handleAddToCart}></Product>
        </div>
        <div className="cart w-3/12 ms-3">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
