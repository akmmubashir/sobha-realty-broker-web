import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const awards = [
  { title: 'Best Luxury Developer', org: 'Global Real Estate Awards', year: '2023' },
  { title: 'Architectural Excellence', org: 'Design & Build', year: '2022' },
  { title: 'Sustainable Innovation', org: 'Green Building Council', year: '2023' },
  { title: 'Customer Satisfaction', org: 'Luxury Lifestyle Awards', year: '2021' }
];

export function AwardsSection() {
  return (
    <section className="py-24 px-6 md:px-12 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 block">Recognition</span>
          <h2 className="text-3xl md:text-4xl font-serif">Award-Winning Excellence</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
          {awards.map((award, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ rotateX: 10, rotateY: 10, scale: 1.05, zIndex: 10, boxShadow: '0 20px 40px rgba(255,255,255,0.1)' }}
              className="border border-white/10 p-8 text-center bg-black transition-colors duration-300 group transform-style-3d cursor-default"
            >
              <Award className="w-8 h-8 text-white/50 mx-auto mb-6 group-hover:text-white transition-colors" strokeWidth={1} />
              <h3 className="text-lg font-serif mb-2 transform-style-3d group-hover:translate-z-10">{award.title}</h3>
              <p className="text-sm text-gray-400 mb-1">{award.org}</p>
              <p className="text-xs text-gray-600">{award.year}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
