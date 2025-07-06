"use client";
import Navbar from "@/components/layout/navbar";
import { Sidebar } from "@/components/main-section/sidebar";
import { ProductGrid } from "@/components/main-section/product-grid";
import { allProducts } from "@/utils/contants/all-products";

export default function Home() {
  return (
    <div id="home">
      <Navbar />
      <main className="flex min-h-screen">
        <Sidebar />
        <ProductGrid products={allProducts} />
      </main>
    </div>
  );
}
