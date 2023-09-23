"use client";

import { getSizeName } from "@/utils";
import { useState } from "react";
import Button from "./Button";
import { arrowRight, shoppingBag } from "@/assets/icons";

const ProductInfo = ({ product }: any) => {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);

  return (
    <div className="font-montserrat">
      <h1 className="text-3xl font-semibold">{product.name}</h1>
      <h2>{product.categories[0]}</h2>

      <p className="text-xl font-semibold mt-4">
        MRP: {product.currency}
        {product.price}
      </p>
      <p className="text-slate-gray">
        incl. of taxes
        <br />
        (Also includes all applicable duties)
      </p>

      <p className="mt-4">
        <strong>Colors Available: </strong>
        {product.colors.join(" | ")}
      </p>

      <p className="mt-4 mb-1">
        <strong> Size: </strong>
        {getSizeName(selectedSize)}
      </p>
      {product.sizes.map((size: string) => (
        <button
          key={size}
          onClick={() => setSelectedSize(size)}
          className="px-4 py-2 mr-2 border-2 border-slate-200 hover:border-slate-900 focus:outline-none focus:ring focus:ring-coral-red"
        >
          {getSizeName(size)}
        </button>
      ))}

      <p className="mt-4 mb-8 mr-4 font-medium">{product.description}</p>
        
      <Button label="Add to Cart" iconURL={shoppingBag} />
    </div>
  );
};

export default ProductInfo;
