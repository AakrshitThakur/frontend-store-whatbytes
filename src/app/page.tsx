"use client";
import { useState } from "react";
import Navbar from "@/components/layout/navbar";
import { Sidebar } from "@/components/main-section/sidebar";
import { ProductGrid } from "@/components/main-section/product-grid";
import { Product } from "@/utils/interfaces/product";

const allProducts: Product[] = [
  {
    id: 1,
    title: "Nike Shoe",
    price: 3000,
    image: "/nike.jpg",
    category: "shoe",
    rating: 4,
  },
  {
    id: 2,
    title: "H&M Shirt",
    price: 600,
    image: "/shirt.jpg",
    category: "shirt",
    rating: 4,
  },
  {
    id: 3,
    title: "Apple iPhone",
    price: 50000,
    image: "/mobile-phone.jpg",
    category: "electronic",
    rating: 5,
  },
  {
    id: 4,
    title: "Panasonic Digital Camera",
    price: 25000,
    image: "/digital-camera.jpg",
    category: "electronic",
    rating: 5,
  },
  {
    id: 5,
    title: "Puma Shoe",
    price: 3500,
    image: "/puma.jpg",
    category: "shoe",
    rating: 5,
  },
  {
    id: 6,
    title: "Polo Shirt",
    price: 400,
    image: "/shirt-2.png",
    category: "shirt",
    rating: 5,
  },
];

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
