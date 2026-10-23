import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Bath, BedDouble, Check, Ruler } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { formatNaira, properties } from "@/lib/properties";

export function generateStaticParams() {
  return properties.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params;
  const property = properties.find((p) => p.id === id);
  return { title: property?.title ?? "Property" };
}

export default async function PropertyDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const property = properties.find((p) => p.id === id);
  if (!property) notFound();

  const gallery = property.gallery.length ? property.gallery : [property.image];

  return (
    <>
      <div className="relative bg-[#17231d] text-white">
        <Header />
        <div className="mx-auto max-w-7xl px-5 pb-14 pt-32 lg:px-8">
          <Link href="/properties" className="mb-8 inline-flex items-center gap-2 text-sm text-white/60 hover:text-white"><ArrowLeft size={16} /> Back to properties</Link>
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <p className="text-xs uppercase tracking-[.3em] text-[#d6bb7e]">{property.type} · {property.status}</p>
              <h1 className="serif mt-3 text-5xl md:text-7xl">{property.title}</h1>
              <p className="mt-3 text-white/60">{property.location}</p>
            </div>
            <div className="md:text-right">
              <p className="text-sm text-white/50">Guide price</p>
              <p className="serif mt-1 text-3xl">{formatNaira(property.price)}</p>
            </div>
          </div>
        </div>
      </div>

      <main>
        <div className="mx-auto grid max-w-7xl gap-3 px-5 py-5 md:grid-cols-2 lg:px-8">
          {gallery.map((image, index) => (
            <div key={image} className={`hero-image aspect-[4/3] ${index === 0 ? "md:col-span-2 md:aspect-[16/7]" : ""}`} style={{ backgroundImage: `url(${image})` }} />
          ))}
        </div>

        <div className="mx-auto grid max-w-7xl gap-14 px-5 py-16 lg:grid-cols-[1.4fr_.7fr] lg:px-8">
          <div>
            <div className="grid grid-cols-3 border-y border-[#ddd8cb] py-6">
              <div><BedDouble size={20} /><p className="mt-2 text-sm text-neutral-500">{property.beds} Bedrooms</p></div>
              <div><Bath size={20} /><p className="mt-2 text-sm text-neutral-500">{property.baths} Bathrooms</p></div>
              <div><Ruler size={20} /><p className="mt-2 text-sm text-neutral-500">{property.area} m²</p></div>
            </div>
            <h2 className="serif mt-14 text-4xl">About the property</h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-neutral-600">{property.description}</p>
            <h2 className="serif mt-14 text-4xl">Highlights</h2>
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              {property.amenities.map((item) => <div key={item} className="flex items-center gap-3 border-b border-[#eeeae0] pb-3 text-sm"><Check size={17} /> {item}</div>)}
            </div>
          </div>

          <aside className="h-fit bg-[#f7f5ef] p-7 lg:sticky lg:top-8">
            <p className="text-xs uppercase tracking-[.25em] text-[#a1844c]">Interested?</p>
            <h3 className="serif mt-3 text-3xl">Schedule a Private Viewing.</h3>
            <p className="mt-4 text-sm leading-6 text-neutral-500">Share your preferred schedule, and a dedicated property advisor will personally assist you with the next steps.</p>
            <Link href={`/contact?property=${encodeURIComponent(property.title)}`} className="mt-7 flex items-center justify-center gap-2 bg-[#17231d] px-5 py-4 text-sm font-semibold text-white">
              Schedule a Private Tour <ArrowUpRight size={16} />
            </Link>
          </aside>
        </div>
      </main>
      <Footer />
    </>
  );
}
