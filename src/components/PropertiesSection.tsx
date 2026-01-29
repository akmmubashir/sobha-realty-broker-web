import React from 'react';
import { MagneticButton } from './MagneticButton';
import { ArrowRight } from 'lucide-react';
import { PropertyCard } from './PropertyCard';

const properties = [
  {
    id: '1',
    title: 'The Obsidian Villa',
    location: 'Dubai, UAE',
    price: '$12,500,000',
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2680&auto=format&fit=crop',
    beds: 5,
    baths: 6,
    sqft: 6500
  },
  {
    id: '2',
    title: 'Midnight Penthouse',
    location: 'Abu Dhabi, UAE',
    price: '$18,900,000',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop',
    beds: 3,
    baths: 3.5,
    sqft: 4200
  },
  {
    id: '3',
    title: 'Coastal Noir Estate',
    location: 'Dubai, UAE',
    price: '$24,000,000',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop',
    beds: 6,
    baths: 8,
    sqft: 8200
  },
  {
    id: '4',
    title: 'Alpine Shadow Retreat',
    location: 'Abu Dhabi, UAE',
    price: '$15,750,000',
    image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2565&auto=format&fit=crop',
    beds: 5,
    baths: 5,
    sqft: 5800
  },
  {
    id: '5',
    title: 'Urban Onyx Loft',
    location: 'Dubai, UAE',
    price: '£8,500,000',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop',
    beds: 2,
    baths: 2,
    sqft: 2800
  },
  {
    id: '6',
    title: 'Desert Mirage',
    location: 'Sharjah, UAE',
    price: '$7,200,000',
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2680&auto=format&fit=crop',
    beds: 4,
    baths: 4.5,
    sqft: 4500
  }
];

export function PropertiesSection() {
  return (
    <section id="properties" className="py-24 bg-black">
      <div className="px-6 md:px-12 max-w-[1600px] mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 block">
              Curated Collection
            </span>
            <h2 className="text-4xl md:text-5xl font-serif">
              Featured Residences
            </h2>
          </div>
          <MagneticButton className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest hover:text-gray-300 transition-colors">
            View All <ArrowRight size={16} />
          </MagneticButton>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 perspective-2000">
          {properties.map((prop, index) => (
            <PropertyCard key={prop.id} {...prop} index={index} />
          ))}
        </div>
        <div className="mt-16 text-center md:hidden">
          <button className="border border-white/20 px-8 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
            View All Properties
          </button>
        </div>
      </div>
    </section>
  );
}
