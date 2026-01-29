import React from 'react';
import { motion, useTransform } from 'framer-motion';
import { MapPin } from 'lucide-react';

export function LocationSection({ scrollYProgress }: { scrollYProgress: any }) {
  return (
    <section className="h-[600px] relative bg-[#121212] flex items-center justify-center overflow-hidden group">
      <motion.div
        style={{
          scale: useTransform(scrollYProgress, [0.7, 0.9], [1, 1.1])
        }}
        className="absolute inset-0 opacity-40 group-hover:opacity-30 transition-opacity duration-700"
      >
        {/* Abstract Map Graphic */}
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path d="M0,50 Q25,30 50,50 T100,50" stroke="white" strokeWidth="0.1" fill="none" />
          <path d="M0,60 Q25,40 50,60 T100,60" stroke="white" strokeWidth="0.1" fill="none" />
          <path d="M0,40 Q25,20 50,40 T100,40" stroke="white" strokeWidth="0.1" fill="none" />
          {/* Random dots for cities */}
          <circle cx="20" cy="45" r="0.5" fill="white" />
          <circle cx="60" cy="55" r="0.5" fill="white" />
          <circle cx="80" cy="35" r="0.5" fill="white" />
        </svg>
      </motion.div>
      <div className="relative z-10 text-center p-8 bg-black/80 backdrop-blur-sm border border-white/10 max-w-md">
        <MapPin className="w-8 h-8 mx-auto mb-4 text-white animate-bounce" />
        <h3 className="text-2xl font-serif mb-2">Prime Locations</h3>
        <p className="text-gray-400 font-light mb-6">
          Strategically located in the world's most coveted neighborhoods, offering connectivity, privacy, and prestige.
        </p>
        <button className="text-xs uppercase tracking-widest border-b border-white pb-1 hover:opacity-70">
          Explore Neighborhoods
        </button>
      </div>
    </section>
  );
}
