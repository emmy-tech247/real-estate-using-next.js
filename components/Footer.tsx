import Link from "next/link";
import { Instagram, Facebook, Linkedin, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#17231d] text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <div className="serif text-3xl">Celestia.</div>
          <p className="mt-5 max-w-md leading-7 text-white/60">
            Exceptional properties, thoughtfully curated. We help clients discover distinguished
             residences defined by enduring value, distinctive character, and timeless appeal.

          </p>
          <div className="mt-7 flex gap-3">
            {[Instagram, Facebook, Linkedin].map((Icon, i) => (
              <span key={i} className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15">
                <Icon size={17} />
              </span>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-[.2em] text-white/40">Explore</h3>
          <div className="mt-5 flex flex-col gap-3 text-white/75">
            <Link href="/properties">Properties</Link>
            <Link href="/about">Our Story</Link>
            <Link href="/services">Services</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h3 className="text-sm uppercase tracking-[.2em] text-white/40">Contact</h3>
          <div className="mt-5 space-y-3 text-white/75">
            <p>10 Mississippi Street, Maitama,</p>
            <p>Abuja, Nigeria</p>
            <p>celestia@gmail.com</p>
            <p>+234 800 000 0000</p>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-6 text-center text-sm text-white/40">
        © {new Date().getFullYear()} Celestia Estates. All rights reserved.
      </div>
    </footer>
  );
}
