import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const amenities = [
  { icon: 'Pool', label: 'Infinity Pools' },
  { icon: 'Gym', label: 'Private Wellness' },
  { icon: 'Wine', label: 'Wine Cellars' },
  { icon: 'Car', label: 'Underground Parking' },
  { icon: 'Shield', label: '24/7 Security' },
  { icon: 'Home', label: 'Smart Home' },
  { icon: 'Sun', label: 'Private Terraces' },
  { icon: 'Star', label: 'Concierge Service' }
];

export function AmenitiesSection() {
  return (
    <section id="amenities" className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-[#0a0a0a]">
      <div className="text-center mb-20">
        <span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 block">
          Uncompromising Comfort
        </span>
        <h2 className="text-4xl md:text-5xl font-serif">World-Class Amenities</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
        {amenities.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            whileHover={{ scale: 1.05, zIndex: 10, backgroundColor: '#1a1a1a' }}
            className="bg-black p-10 flex flex-col items-center justify-center text-center group transition-all duration-300 aspect-square cursor-pointer"
          >
            <div className="mb-6 p-4 rounded-full border border-white/10 group-hover:border-white/40 transition-colors duration-300">
              <Check className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-sm uppercase tracking-widest font-light">{item.label}</h3>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
