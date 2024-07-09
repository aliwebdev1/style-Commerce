import React, { useEffect, useState } from "react";
import load from "../../../assets/lg.gif";

const Product = ({ handleAddToCart }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="grid grid-cols-3 gap-7">
      {products.map((product) => (
        <div
          key={product.id}
          className="card card-compact bg-base-100 shadow-xl"
        >
          <img src={product.img ? product.img : load} alt={product.name} />

          <div className="card-body">
            <h2 className="card-title">{product?.name}</h2>
            <p>Category: {product?.category}</p>
            <p>Price: ${product?.price}</p>
            <p>Seller: {product?.seller}</p>
            <div className="">
              <button
                onClick={() => handleAddToCart(product)}
                className="btn btn-neutral w-full"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
