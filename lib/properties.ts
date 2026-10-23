export type Property = {
  id: string;
  title: string;
  location: string;
  price: number;
  type: string;
  beds: number;
  baths: number;
  area: number;
  status: string;
  featured?: boolean;
  image: string;
  gallery: string[];
  description: string;
  amenities: string[];
};

export const properties: Property[] = [
  {
    id: "oak-residence",
    title: "The Oak Residence",
    location: "Maitama, Abuja",
    price: 185000000,
    type: "Detached Duplex",
    beds: 5,
    baths: 6,
    area: 680,
    status: "For Sale",
    featured: true,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85"
    ],
    description: "A refined five-bedroom residence designed around natural light, generous proportions and quiet luxury. The property combines contemporary architecture with warm, timeless finishes.",
    amenities: ["Swimming Pool", "Smart Home", "Borehole", "Fitted Kitchen", "BQ", "24/7 Security"]
  },
  {
    id: "lagoon-penthouse",
    title: "Lagoon View Penthouse",
    location: "Ikoyi, Lagos",
    price: 420000000,
    type: "Penthouse",
    beds: 4,
    baths: 5,
    area: 510,
    status: "For Sale",
    featured: true,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85"
    ],
    description: "An elegant penthouse with panoramic city and lagoon views, sophisticated interiors and expansive entertaining spaces in one of Lagos' most established neighbourhoods.",
    amenities: ["Lagoon View", "Private Elevator", "Gym", "Pool", "Concierge", "Parking"]
  },
  {
    id: "olive-villa",
    title: "Olive Garden Villa",
    location: "GRA, Enugu",
    price: 125000000,
    type: "Luxury Villa",
    beds: 4,
    baths: 5,
    area: 590,
    status: "For Sale",
    featured: true,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1800&q=85",
    gallery: [
      "https://images.unsplash.com/photo-1600566753051-f0b89df2dd90?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?auto=format&fit=crop&w=1600&q=85"
    ],
    description: "A private garden villa with an effortless indoor-outdoor flow, generous bedrooms and beautifully considered entertaining areas.",
    amenities: ["Private Garden", "Cinema Room", "Fitted Kitchen", "Solar Power", "Staff Quarters", "Security"]
  },
  {
    id: "cedar-apartment",
    title: "Cedar Park Apartment",
    location: "Wuse 2, Abuja",
    price: 85000000,
    type: "Apartment",
    beds: 3,
    baths: 4,
    area: 240,
    status: "For Sale",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=85",
    gallery: [],
    description: "A beautifully finished three-bedroom apartment with excellent natural light and premium shared facilities.",
    amenities: ["Gym", "Pool", "Parking", "Security", "Power Backup"]
  },
  {
    id: "maple-townhouse",
    title: "Maple Townhouse",
    location: "Lekki Phase 1, Lagos",
    price: 145000000,
    type: "Townhouse",
    beds: 4,
    baths: 5,
    area: 360,
    status: "For Sale",
    image: "https://images.unsplash.com/photo-1600585152915-d208bec867a1?auto=format&fit=crop&w=1800&q=85",
    gallery: [],
    description: "A modern townhouse created for effortless family living, with excellent finishes and a practical floor plan.",
    amenities: ["Garden", "BQ", "Fitted Kitchen", "Parking", "Security"]
  },
  {
    id: "palm-court",
    title: "Palm Court Residence",
    location: "Asokoro, Abuja",
    price: 265000000,
    type: "Detached Duplex",
    beds: 6,
    baths: 7,
    area: 820,
    status: "For Sale",
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1800&q=85",
    gallery: [],
    description: "A substantial family residence set within a prestigious district, offering privacy, scale and elegant contemporary interiors.",
    amenities: ["Pool", "Cinema", "Gym", "BQ", "Large Garden", "Security"]
  }
];

export function formatNaira(value: number) {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0
  }).format(value);
}
