import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Search, Handshake, KeyRound, BarChart3 } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = { title: "Services" };

const services = [
  [Search, "Property Search", "A tailored search service for buyers who value time, discretion and access to the right opportunities."],
  [Handshake, "Sales Advisory", "Strategic positioning, presentation and negotiation designed to achieve a considered transaction."],
  [KeyRound, "Private Client", "A highly personal service for clients seeking residences, second homes or investment property."],
  [BarChart3, "Investment Advisory", "Research-led guidance around location, property quality, rental demand and long-term value."]
];

export default function ServicesPage() {
  return (
    <>
      <div className="relative bg-[#17231d] text-white">
        <Header />
        <div className="mx-auto max-w-7xl px-5 pb-20 pt-36 lg:px-8">
          <p className="text-xs uppercase tracking-[.3em] text-[#d6bb7e]">What We Offer</p>
          <h1 className="serif mt-4 max-w-3xl text-5xl md:text-7xl">Expertise that makes every property decision easier.</h1>
        </div>
      </div>
      <main className="mx-auto max-w-7xl px-5 py-20 lg:px-8">
        <div className="grid border-t border-[#ddd8cb] md:grid-cols-2">
          {services.map(([Icon, title, text], i) => (
            <div key={title as string} className={`border-b border-[#ddd8cb] py-12 md:px-10 ${i % 2 === 0 ? "md:border-r" : ""}`}>
              <Icon size={28} strokeWidth={1.3} />
              <h2 className="serif mt-8 text-3xl">{title as string}</h2>
              <p className="mt-4 max-w-md leading-7 text-neutral-600">{text as string}</p>
            </div>
          ))}
        </div>
        <div className="mt-20 bg-[#f7f5ef] p-10 md:p-14">
          <h2 className="serif text-4xl">Searching for something exceptional?</h2>
          <p className="mt-4 max-w-xl text-neutral-600">Tell us what you need, and we'll help you find the right opportunity.</p>
          <Link href="/contact" className="mt-7 inline-flex items-center gap-2 bg-[#17231d] px-6 py-4 text-sm font-semibold text-white">Start a Conversation <ArrowUpRight size={16} /></Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
