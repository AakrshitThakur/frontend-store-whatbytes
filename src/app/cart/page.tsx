// app/cart/page.tsx
"use client";
import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/layout/navbar";
import { CartItem } from "@/utils/interfaces/cart";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { RootState } from "@/stores/store";
import { updateCartItemQuantity, removeCartItem } from "@/features/cartSlice";

export default function CartPage() {
  const dispatch = useDispatch();
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const cartItems = useAppSelector((state) => state.cart);

  const updateQuantity = (c: CartItem) => {
    dispatch(updateCartItemQuantity(c));
  };

    const removeItem = (id: string) => {
        dispatch(removeCartItem(id));
    };

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div id="cart">
      <Navbar />
      <main className="max-w-4xl mx-auto p-4">
        <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-4 border-b pb-4"
              >
                <div className="relative w-24 h-24 rounded-lg overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h2 className="text-lg font-medium">{item.title}</h2>
                  <p className="text-gray-700">&#8377;{item.price.toFixed(2)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      updateQuantity({
                        ...item,
                        quantity: parseInt(e.target.value),
                      })
                    }
                    className="w-16 px-2 py-1 border rounded"
                  />
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-600 hover:underline text-sm cursor-pointer"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="text-right mt-4">
              <p className="text-xl font-semibold">
                Total: &#8377;{total.toFixed(2)}
              </p>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
