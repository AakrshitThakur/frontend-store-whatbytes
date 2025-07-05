import Link from "next/link";
import React from "react";
import { ShoppingCart, User } from "lucide-react";

const cartCount: number = 3;

const Navbar: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo on the left */}
        <div className="flex-shrink-0">
          <Link href="/" className="text-2xl font-bold">
            MyLogo
          </Link>
        </div>

        {/* Search bar in the center */}
        <div className="mx-4">
          <input
            type="text"
            placeholder="Search..."
            className="w-full rounded-md bg-white border border-gray-300 px-4 py-2 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Cart button on the right */}
        <div>
          <button
            type="button"
            className="relative flex justify-center p-2 rounded bg-blue-700 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-white"
            aria-label="View cart"
          >
            <ShoppingCart className="w-10 h-6" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white rounded-full text-xs w-4 h-4 flex items-center justify-center">
                {cartCount}
              </span>
            )}
            Cart
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
