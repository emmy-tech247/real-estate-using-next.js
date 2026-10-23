import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <div className="relative bg-[#17231d] text-white">
        <Header />
        <div className="mx-auto max-w-7xl px-5 pb-20 pt-36 lg:px-8">
          <p className="text-xs uppercase tracking-[.3em] text-[#d6bb7e]">About Celestia</p>
          <h1 className="serif mt-4 max-w-4xl text-5xl leading-tight md:text-7xl">A quieter, more considered way to find exceptional property.</h1>
        </div>
      </div>
      <main>
        <section className="mx-auto grid max-w-7xl gap-14 px-5 py-24 md:grid-cols-2 lg:px-8">
          <div className="hero-image min-h-[500px]" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=85)" }} />
          <div className="self-center">
            <p className="text-xs uppercase tracking-[.3em] text-[#a1844c]">Our philosophy</p>
            <h2 className="serif mt-4 text-4xl md:text-5xl">Property should feel personal.</h2>
            <p className="mt-7 leading-8 text-neutral-600">Celestia Estates was created around a simple idea: exceptional property deserves exceptional representation. We combine market knowledge with a highly personal service designed around each client.</p>
            <p className="mt-5 leading-8 text-neutral-600">From the first conversation through negotiation, due diligence and completion, we keep the process clear, discreet and attentive.</p>
          </div>
        </section>
        <section className="bg-[#f7f5ef]">
          <div className="mx-auto grid max-w-7xl gap-8 px-5 py-24 md:grid-cols-3 lg:px-8">
            {[["01", "Curation", "We focus on quality, character, location and long-term relevance."], ["02", "Clarity", "Straightforward advice and communication at every stage."], ["03", "Care", "A relationship-led service that continues beyond the transaction."]].map(([n, title, text]) => (
              <div key={n} className="border-t border-[#d7d0c0] pt-6"><span className="text-sm text-[#a1844c]">{n}</span><h3 className="serif mt-8 text-3xl">{title}</h3><p className="mt-4 leading-7 text-neutral-600">{text}</p></div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
