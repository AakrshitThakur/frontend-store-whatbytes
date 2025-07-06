// app/[id]/page.tsx
"use client";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import Navbar from "@/components/layout/navbar";
import { allProducts } from "@/utils/contants/all-products";

export default function ProductPage() {
  const params = useParams();
  const id = params.id;
  const product = allProducts.find((p) => p.id === id);
  if (!product) return notFound();

  return (
    <div id="product-page">
      <Navbar />
      <main className="max-w-6xl mx-auto p-4 flex flex-col lg:flex-row gap-8">
        {/* Image Section */}
        <div className="flex-1">
          <div className="relative w-full aspect-square rounded-xl overflow-hidden">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Details Section */}
        <div className="flex-1 space-y-4">
          <h1 className="text-3xl font-bold">{product.title}</h1>
          <p className="text-2xl text-blue-600 font-semibold">
            &#8377;{product.price.toFixed(2)}
          </p>
          <p className="text-gray-700">{product.description}</p>
          <p className="text-sm text-gray-500">Category: {product.category}</p>

          {/* Quantity Selector */}
          <div className="flex items-center gap-2 mt-4">
            <label htmlFor="quantity" className="text-sm font-medium">
              Quantity:
            </label>
            <input
              id="quantity"
              type="number"
              defaultValue={1}
              min={1}
              className="w-16 px-2 py-1 border rounded-md"
            />
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition mt-4">
            Add to Cart
          </button>
        </div>
      </main>
    </div>
  );
}
