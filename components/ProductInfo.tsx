"use client";

import { getSizeName } from "@/uitls";
import { useState } from "react";
//import { useShoppingCart } from "use-shopping-cart";

const ProductInfo = ({ product }: any) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  //const { addItem, incrementItem, cartDetails } = useShoppingCart();
  // Check if an item is already in cart
  //const isInCart = !!cartDetails?.[product._id]; //!! forces the value to be boolean

//   const addToCart = () => {
//     const item = {
//       ...product,
//       product_data: {
//         size: selectedSize,
//       },
//     };
//     // If item is already in cart, increments the quantity, otherwise adds the new item to cart
//     isInCart ? incrementItem(item._id) : addItem(item);
//   };

  return (
    <div>
      <h1>{product.name}</h1>
      <h2>{product.categories[0]}</h2>
      <p>
        MRP: {product.currency}
        {product.price}
      </p>
      <p>incl. of taxes</p>
      <p>(Also includes all applicable duties)</p>
      <p>Colors Available:</p>
      <p>{product.colors.join(", ")}</p>
      <p>
        Size: <strong>{getSizeName(selectedSize)}</strong>
      </p>
      {product.sizes.map((size: string) => (
        <button
          key={size}
          onClick={() => setSelectedSize(size)}
          className="rounded-lg px-4 py-2 bg-yellow-500 hover:bg-yellow-700 focus:outline-none focus:ring focus:ring-yellow-200"
        >
          {getSizeName(size)}
        </button>
      ))}
      <p>{product.description}</p>
      {/* Add to Cart Button */}
      <button
        // onClick={addToCart}
        className="rounded-lg px-4 py-2 bg-yellow-500 hover:bg-yellow-700 focus:outline-none focus:ring focus:ring-yellow-200"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductInfo;
