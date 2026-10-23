"use client";

import { FormEvent, useState } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
  }

  return (
    <>
      <div className="relative bg-[#17231d] text-white">
        <Header />
        <div className="mx-auto max-w-7xl px-5 pb-20 pt-36 lg:px-8">
          <p className="text-xs uppercase tracking-[.3em] text-[#d6bb7e]">Get in touch</p>
          <h1 className="serif mt-4 text-5xl md:text-7xl">Let's find your next address.</h1>
        </div>
      </div>

      <main className="mx-auto grid max-w-7xl gap-16 px-5 py-20 lg:grid-cols-[.7fr_1.3fr] lg:px-8">
        <div>
          <h2 className="serif text-3xl">A private conversation is a good place to start.</h2>
          <p className="mt-5 leading-7 text-neutral-600">Whether you're buying, selling or simply exploring the market, tell us what you have in mind.</p>
          <div className="mt-10 space-y-6 text-sm">
            <div className="flex gap-4"><MapPin size={19} /><span>10 Mississippi Street, Maitama, Abuja</span></div>
            <div className="flex gap-4"><Phone size={19} /><span>+234 800 000 0000</span></div>
            <div className="flex gap-4"><Mail size={19} /><span>celestia@gmail.com</span></div>
          </div>
        </div>

        <form onSubmit={submit} className="border border-[#ddd8cb] p-7 md:p-10">
          {sent ? (
            <div className="py-16 text-center">
              <Send className="mx-auto" size={30} />
              <h2 className="serif mt-5 text-3xl">Thank you.</h2>
              <p className="mt-3 text-sm text-neutral-500">Your enquiry has been received. Our team will contact you shortly.</p>
            </div>
          ) : (
            <>
              <div className="grid gap-6 md:grid-cols-2">
                <label className="text-sm">Name<input required name="name" className="mt-2 w-full border-b border-[#ccc5b7] bg-transparent py-3 outline-none focus:border-[#17231d]" /></label>
                <label className="text-sm">Email<input required type="email" name="email" className="mt-2 w-full border-b border-[#ccc5b7] bg-transparent py-3 outline-none focus:border-[#17231d]" /></label>
              </div>
              <label className="mt-8 block text-sm">Phone<input name="phone" className="mt-2 w-full border-b border-[#ccc5b7] bg-transparent py-3 outline-none focus:border-[#17231d]" /></label>
              <label className="mt-8 block text-sm">I'm interested in<select name="interest" className="mt-2 w-full border-b border-[#ccc5b7] bg-transparent py-3 outline-none"><option>Buying a property</option><option>Selling a property</option><option>Property investment</option><option>Private client service</option></select></label>
              <label className="mt-8 block text-sm">Message<textarea required name="message" rows={5} className="mt-2 w-full resize-none border-b border-[#ccc5b7] bg-transparent py-3 outline-none focus:border-[#17231d]" /></label>
              <button className="mt-8 flex items-center gap-2 bg-[#17231d] px-7 py-4 text-sm font-semibold text-white">Send Enquiry <Send size={16} /></button>
            </>
          )}
        </form>
      </main>
      <Footer />
    </>
  );
}
