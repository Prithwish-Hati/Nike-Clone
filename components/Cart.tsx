"use client";

import { useRef } from "react";
import toast from "react-hot-toast";
import Image from "next/image";

import { useStateContext } from "@/context/StateContext";
import { chevronLeft, shoppingBag, shoppingCart } from "@/assets/icons";
import Link from "next/link";
import Button from "./Button";
import { urlForImage } from "@/sanity/lib/image";

const Cart = () => {
  const cartRef = useRef();
  const { totalPrice, totalQuantities, cartItems, setShowCart } =
    useStateContext();

  return (
    <div ref={cartRef} className=" fixed right-0 top-0 z-50 bg-slate-100 ">
      <div className="h-screen w-[600px] py-10 px-3">
        <button
          type="button"
          className="flex items-center cursor-pointer font-medium  "
          onClick={() => setShowCart(false)}
        >
          <Image src={chevronLeft} width={50} height={50} alt="close-arrow" />
          <span className="text-xl">Your Cart</span>
          <span className="ml-3 text-coral-red">({totalQuantities} items)</span>
        </button>

        {cartItems.length < 1 && (
          <div className=" flex flex-col p-10 items-center">
            <Image
              src={shoppingCart}
              height={150}
              width={150}
              alt="cart-icon"
              className="cursor-pointer"
            />
            <h3 className="mt-5 text-2xl">Your Shopping Cart is Empty</h3>
            <Link href="/store" className="mt-5">
              <Button
                label="Continue Shopping"
                handleClick={() => setShowCart(false)}
              />
            </Link>
          </div>
        )}

        <div className="flex flex-wrap justify-center items-center gap-4 mt-5 w-full">
          {cartItems.length >= 1 &&
            cartItems.map((item: any) => (
              <div className="flex gap-8 p-5" key={item._id}>
                <Image
                  src={urlForImage(item?.images[1]).url()}
                  width={150}
                  height={150}
                  alt={item.name}
                  className=" rounded-2xl"
                />
                <div className="w-80 ">
                  <h5 className="mt-8 text-xl font-bold">{item.name}</h5>
                  <h4 className="font-medium mt-2">
                    {item.currency}
                    {item.price}
                  </h4>
                  <p className="mt-1">Quanity: {item.quantity}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;
