import React from 'react';
import { motion } from 'framer-motion';

const pressLogos = [
  'Architectural Digest',
  'Forbes',
  'Wall Street Journal',
  'Vogue Living',
  'Elle Decor',
  'The New York Times'
];

export function PressSection() {
  return (
    <section className="py-20 border-t border-white/5 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gray-600 mb-12">As Featured In</p>
        <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50">
          {pressLogos.map((logo, index) => (
            <motion.div
              key={index}
              whileHover={{ opacity: 1, scale: 1.1, y: -5 }}
              className="text-xl md:text-2xl font-serif text-gray-400 cursor-default transition-all"
            >
              {logo}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
