import Navbar from "@/components/layout/navbar";
import { Sidebar } from "@/components/main-section/sidebar";
import { ProductGrid } from "@/components/main-section/product-grid";

export default function Home() {
  return (
    <div id="home">
      <Navbar />
      <main className="flex flex-col sm:flex-row min-h-screen">
        <Sidebar />
        <ProductGrid />
      </main>
    </div>
  );
}
