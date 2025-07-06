// components/Sidebar.tsx
"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateSelectedCats, updateRange } from "@/features/sidebarSlice";
import type { TypedUseSelectorHook } from "react-redux";
import { RootState } from "@/stores/store";

export const Sidebar = () => {
  const dispatch = useDispatch();
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const { selectedCats, categories } = useAppSelector((state) => state.sidebar);

  const [minPrice, setMinPrice] = useState<number>(0);
  const [maxPrice, setMaxPrice] = useState<number>(100000);

  const toggleCategory = (cat: string) => {
    const updated = selectedCats.includes(cat)
      ? selectedCats.filter((c) => c !== cat)
      : [...selectedCats, cat];
    dispatch(updateSelectedCats(updated));
  };

  const handleMinPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const range = {
      min: parseInt(e.target.value),
      max: maxPrice,
    };
    setMinPrice(parseInt(e.target.value));
    dispatch(updateRange(range));
  };

  const handleMaxPrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const range = {
      min: minPrice,
      max: parseInt(e.target.value),
    };
    setMaxPrice(parseInt(e.target.value));
    dispatch(updateRange(range));
  };

  return (
    <aside className="w-full sm:w-64 space-y-6 p-4 border-r">
      <div className="bg-blue-600 text-white p-2 rounded-md">
        {/* Categories */}
        <div className="mb-2">
          <h2 className="text-lg font-semibold mb-2">Categories</h2>
          <div className="space-y-2">
            {categories.map((cat) => (
              <div key={cat} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id={cat}
                  className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                  checked={selectedCats.includes(cat)}
                  onChange={() => toggleCategory(cat)}
                />
                <label htmlFor={cat} className="text-sm">
                  {cat}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div>
          <h2 className="text-lg font-semibold mb-2">Price Range</h2>
          <div className="flex items-center gap-2">
            <input
              type="number"
              value={minPrice}
              min={0}
              max={maxPrice}
              className="w-20 text-xs px-2 py-1 border rounded"
              onChange={handleMinPrice}
            />
            <span>-</span>
            <input
              type="number"
              value={maxPrice}
              min={minPrice}
              max={100000}
              className="w-20 text-xs px-2 py-1 border rounded"
              onChange={handleMaxPrice}
            />
          </div>
          <div className="mt-2 space-y-1">
            <input
              type="range"
              min={0}
              max={100000}
              value={minPrice}
              className="w-full"
              onChange={handleMinPrice}
            />
            <input
              type="range"
              min={0}
              max={100000}
              value={maxPrice}
              className="w-full"
              onChange={handleMaxPrice}
            />
          </div>
          <div className="text-sm mt-1">
            &#8377;{minPrice} - &#8377;{maxPrice}
          </div>
        </div>
      </div>
    </aside>
  );
};
