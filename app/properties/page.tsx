import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SearchBar from "@/components/SearchBar";
import { properties } from "@/lib/properties";

export const metadata: Metadata = { title: "Properties" };

export default function PropertiesPage() {
  return (
    <>
      <div className="relative bg-[#17231d] pt-32 text-white">
        <Header />
        <div className="mx-auto max-w-7xl px-5 pb-16 lg:px-8">
          <p className="text-xs uppercase tracking-[.3em] text-[#d6bb7e]">Our collection</p>
          <h1 className="serif mt-4 text-5xl md:text-7xl">Properties</h1>
          <p className="mt-5 max-w-xl text-white/60">Explore an exclusive collection of distinguished residences, elegant apartments, and exceptional property investment opportunities.</p>
        </div>
      </div>
      <main className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <SearchBar properties={properties} />
      </main>
      <Footer />
    </>
  );
}
