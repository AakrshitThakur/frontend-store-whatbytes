import Navbar from "@/components/header/navbar";
import Footer from "@/components/footer/Footer";
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
      <Footer />
    </div>
  );
}
