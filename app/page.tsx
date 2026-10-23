import Link from "next/link";
import { ArrowRight, ArrowUpRight, Building2, KeyRound, MapPin, Quote } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/lib/properties";

export default function Home() {
  const featured = properties.filter((p) => p.featured);

  return (
    <>
      <main>
        <section className="relative min-h-[720px] overflow-hidden bg-[#17231d] text-white">
          <div
            className="hero-image absolute inset-0 opacity-65"
            style={{ backgroundImage: "url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=90)" }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/15 to-[#17231d]/90" />
          <Header />
          <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-end px-5 pb-20 pt-40 lg:px-8">
            <div className="max-w-4xl">
              <p className="mb-6 text-xs uppercase tracking-[.35em] text-white/70">Exceptional property · Thoughtfully represented</p>
              <h1 className="serif text-5xl leading-[.95] md:text-7xl lg:text-8xl">
                Get a Home<br />That Is a Paradise<br /><i>On Earth.</i>
              </h1>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link href="/properties" className="flex items-center gap-2 bg-white px-6 py-4 text-sm font-semibold text-[#17231d]">
                  Explore Properties <ArrowUpRight size={17} />
                </Link>
                <Link href="/contact" className="flex items-center gap-2 border border-white/40 px-6 py-4 text-sm">
                  Speak with an Advisor
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-[#ddd8cb] bg-[#f7f5ef]">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-8 md:grid-cols-3 lg:px-8">
            {[
              [MapPin, "Curated Locations", "Homes in established and emerging districts"],
              [KeyRound, "Private Advisory", "Discreet guidance from search to completion"],
              [Building2, "Long-Term Value", "Property selected for quality and enduring appeal"]
            ].map(([Icon, title, text]) => (
              <div key={title as string} className="flex gap-4">
                <div className="mt-1"><Icon size={20} strokeWidth={1.5} /></div>
                <div><h3 className="font-semibold">{title as string}</h3><p className="mt-1 text-sm text-neutral-500">{text as string}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="mb-12 flex items-end justify-between gap-5">
            <div>
              <p className="text-xs uppercase tracking-[.3em] text-[#a1844c]">Selected residences</p>
              <h2 className="serif mt-3 text-4xl md:text-5xl">Featured Properties</h2>
            </div>
            <Link href="/properties" className="hidden items-center gap-2 text-sm font-semibold md:flex">View all <ArrowRight size={17} /></Link>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featured.map((property) => <PropertyCard key={property.id} property={property} />)}
          </div>
        </section>

        <section className="bg-[#17231d] text-white">
          <div className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-2 lg:px-8">
            <div>
              <p className="text-xs uppercase tracking-[.3em] text-[#d6bb7e]">The Celestia approach</p>
              <h2 className="serif mt-4 text-4xl leading-tight md:text-6xl">Real estate, thoughtfully tailored to you.</h2>
            </div>
            <div className="lg:pt-12">
              <p className="max-w-xl text-lg leading-8 text-white/65">
                The right property is more than an investment. It is where life happens, ideas flourish, families grow, and new chapters begin. At Celestia Estates, our advisors combine local expertise, discerning curation, and personal service to help you discover properties that feel truly right for your aspirations.

              </p>
              <Link href="/about" className="mt-8 inline-flex items-center gap-2 border-b border-white/30 pb-2 text-sm">Discover our story <ArrowUpRight size={16} /></Link>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-24 lg:px-8">
          <div className="grid gap-12 md:grid-cols-[1fr_1.5fr] md:items-center">
            <div>
              <Quote size={36} strokeWidth={1} className="text-[#b9985b]" />
              <p className="serif mt-7 text-3xl leading-snug">“Celestia made the entire property search feel effortless. Their attention to detail and understanding of what mattered to us led us to a home that feels perfectly suited to our life.”</p>
              <p className="mt-6 text-sm text-neutral-500">— Private Client, Lagos</p>
            </div>
            <div className="relative aspect-[16/9] overflow-hidden">
              <div className="hero-image absolute inset-0" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85)" }} />
            </div>
          </div>
        </section>

        <section className="bg-[#f7f5ef]">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 px-5 py-20 md:flex-row md:items-center lg:px-8">
            <div>
              <p className="text-xs uppercase tracking-[.3em] text-[#a1844c]">Private viewings</p>
              <h2 className="serif mt-2 text-4xl">Your next address may be closer than you think.</h2>
            </div>
            <Link href="/contact" className="flex items-center gap-2 bg-[#17231d] px-7 py-4 text-sm font-semibold text-white">Book a Viewing <ArrowUpRight size={17} /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
