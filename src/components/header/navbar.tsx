"use client";
import Link from "next/link";
import React from "react";
import { ShoppingCart } from "lucide-react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { RootState } from "@/stores/store";
import { updateSearchStr } from "@/features/navbarSlice";

const Navbar: React.FC = () => {
  const dispatch = useDispatch();
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const { searchStr } = useAppSelector((state) => state.navbar);
  return (
    <nav className="bg-blue-600 text-white p-4 mb-2">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo on the left */}
        <div className="flex-shrink-0 hidden sm:block">
          <Link href="/" className="text-2xl font-bold">
            StoreWhatbytes
          </Link>
        </div>

        {/* Search bar in the center */}
        <div className="mx-4 w-2/5">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              dispatch(updateSearchStr(e.target.value))
            }
            value={searchStr}
            className="w-full rounded-md bg-white border border-gray-300 px-4 py-2 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm sm:text-base md:text-lg lg:text-xl"
          />
        </div>

        {/* Cart button on the right */}
        <div>
          <Link href="/cart">
            <button
              type="button"
              className="relative flex justify-center px-5 py-2 rounded bg-blue-700 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white cursor-pointer"
              aria-label="View cart"
            >
              <ShoppingCart className="w-10 h-6" />
              Cart
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
