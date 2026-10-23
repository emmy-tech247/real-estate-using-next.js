"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Properties", "/properties"],
    ["About", "/about"],
    ["Services", "/services"],
    ["Contact", "/contact"]
  ];

  return (
    <header className="absolute left-0 top-0 z-50 w-full text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-6 lg:px-8">
        <Link href="/" className="serif text-2xl font-semibold tracking-wide">
          CELESTIA<span className="text-[#d6bb7e]">.</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map(([label, href]) => (
            <Link key={href} href={href} className="text-sm tracking-wide text-white/85 transition hover:text-white">
              {label}
            </Link>
          ))}
          <Link href="/contact" className="group flex items-center gap-2 border border-white/40 px-5 py-3 text-sm transition hover:bg-white hover:text-[#17231d]">
            Schedule a Viewing <ArrowUpRight size={16} className="transition group-hover:translate-x-0.5" />
          </Link>
        </nav>

        <button onClick={() => setOpen(!open)} className="md:hidden" aria-label="Toggle menu">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/20 bg-[#17231d] px-5 py-6 md:hidden">
          <nav className="flex flex-col gap-5">
            {links.map(([label, href]) => (
              <Link key={href} onClick={() => setOpen(false)} href={href} className="text-lg">
                {label}
              </Link>
            ))}
            <Link onClick={() => setOpen(false)} href="/contact" className="border border-white/30 px-5 py-3 text-center">
              Schedule a Viewing
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
