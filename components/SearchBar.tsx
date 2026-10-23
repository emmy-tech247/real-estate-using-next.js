"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { Property } from "@/lib/properties";
import PropertyCard from "./PropertyCard";

export default function SearchBar({ properties }: { properties: Property[] }) {
  const [query, setQuery] = useState("");
  const [type, setType] = useState("All");

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      const q = query.toLowerCase();
      const matchesQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.location.toLowerCase().includes(q) ||
        p.type.toLowerCase().includes(q);
      const matchesType = type === "All" || p.type === type;
      return matchesQuery && matchesType;
    });
  }, [properties, query, type]);

  const types = ["All", ...Array.from(new Set(properties.map((p) => p.type)))];

  return (
    <div>
      <div className="mb-10 grid gap-3 border border-[#ddd8cb] bg-[#f7f5ef] p-3 md:grid-cols-[1fr_210px]">
        <div className="flex items-center gap-3 bg-white px-4">
          <Search size={19} className="text-neutral-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by location, property or type..."
            className="h-14 w-full bg-transparent text-sm outline-none"
          />
        </div>
        <div className="flex items-center gap-3 bg-white px-4">
          <SlidersHorizontal size={18} className="text-neutral-400" />
          <select value={type} onChange={(e) => setType(e.target.value)} className="h-14 w-full bg-transparent text-sm outline-none">
            {types.map((item) => <option key={item}>{item}</option>)}
          </select>
        </div>
      </div>

      <p className="mb-5 text-sm text-neutral-500">{filtered.length} properties found</p>
      {filtered.length ? (
        <div className="grid gap-x-7 gap-y-12 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((property) => <PropertyCard key={property.id} property={property} />)}
        </div>
      ) : (
        <div className="border border-dashed border-[#ddd8cb] py-24 text-center">
          <p className="serif text-2xl">No properties found</p>
          <p className="mt-2 text-sm text-neutral-500">Try another location or property type.</p>
        </div>
      )}
    </div>
  );
}
