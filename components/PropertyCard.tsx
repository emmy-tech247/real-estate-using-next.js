import Link from "next/link";
import { ArrowUpRight, BedDouble, Bath, Ruler } from "lucide-react";
import { Property, formatNaira } from "@/lib/properties";

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <Link href={`/properties/${property.id}`} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden bg-neutral-200">
        <div
          className="hero-image absolute inset-0 transition duration-700 group-hover:scale-105"
          style={{ backgroundImage: `url(${property.image})` }}
        />
        <div className="absolute left-4 top-4 bg-white px-3 py-2 text-xs font-semibold uppercase tracking-wider">
          {property.status}
        </div>
        <div className="absolute bottom-4 right-4 flex h-11 w-11 items-center justify-center rounded-full bg-white opacity-0 transition group-hover:opacity-100">
          <ArrowUpRight size={18} />
        </div>
      </div>

      <div className="border-b border-[#ddd8cb] py-5">
        <div className="flex items-start justify-between gap-5">
          <div>
            <h3 className="serif text-2xl">{property.title}</h3>
            <p className="mt-1 text-sm text-neutral-500">{property.location}</p>
          </div>
          <p className="whitespace-nowrap text-sm font-semibold">{formatNaira(property.price)}</p>
        </div>

        <div className="mt-5 flex gap-5 text-sm text-neutral-500">
          <span className="flex items-center gap-1.5"><BedDouble size={16} /> {property.beds} Beds</span>
          <span className="flex items-center gap-1.5"><Bath size={16} /> {property.baths} Baths</span>
          <span className="flex items-center gap-1.5"><Ruler size={16} /> {property.area} m²</span>
        </div>
      </div>
    </Link>
  );
}
