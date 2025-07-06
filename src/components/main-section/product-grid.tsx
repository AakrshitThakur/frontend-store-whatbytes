// components/main-section/product-grid.tsx
import Image from "next/image";
import { FC } from "react";
import { Star } from "lucide-react";
import { Product } from "@/utils/interfaces/product";
import { useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import { RootState } from "@/stores/store";

interface GridProps {
  products: Product[];
}

export const ProductGrid: FC<GridProps> = ({ products }) => {
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const { selectedCats, categories, range } = useAppSelector(
    (state) => state.sidebar
  );

  return (
    <section className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-2">
      {products.map((product) => (
        <>
          {selectedCats.includes(product.category) &&
            product.price >= range.min &&
            product.price <= range.max && (
              <div
                key={product.id}
                className="border rounded-xl shadow-sm flex flex-col aspect-square p-2 sm:p-3 md:p-2"
              >
                <div className="relative w-full aspect-square mb-2">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <h3 className="text-base md:text-sm font-medium mb-1">
                  {product.title}
                </h3>
                <p className="font-semibold mb-1">
                  &#8377;{product.price.toFixed(2)}
                </p>
                {product.rating !== undefined && (
                  <div className="flex items-center gap-1 mb-2">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${
                          i < product.rating!
                            ? "text-yellow-500"
                            : "text-gray-300"
                        }`}
                        fill={i < product.rating! ? "currentColor" : "none"}
                      />
                    ))}
                  </div>
                )}
                <button className="mt-auto bg-blue-600 text-white py-1 rounded-lg hover:bg-blue-700 transition text-sm">
                  Add to Cart
                </button>
              </div>
            )}
        </>
      ))}
    </section>
  );
};
