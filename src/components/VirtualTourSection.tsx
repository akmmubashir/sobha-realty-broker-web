import React from 'react';
import { motion, useTransform } from 'framer-motion';
import { Video } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

export function VirtualTourSection({ scrollYProgress }: { scrollYProgress: any }) {
  return (
    <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <motion.div
          style={{ scale: useTransform(scrollYProgress, [0.8, 1], [1, 1.2]) }}
          className="w-full h-full"
        >
          <img
            src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=2670&auto=format&fit=crop"
            alt="Interior"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        >
          <Video className="w-12 h-12 text-white mx-auto mb-6 opacity-80" strokeWidth={1} />
        </motion.div>
        <h2 className="text-4xl md:text-6xl font-serif mb-6">Experience It Virtually</h2>
        <p className="text-xl text-gray-300 font-light mb-10 max-w-2xl mx-auto">
          Take an immersive 3D tour of our properties from the comfort of your home.
        </p>
        <MagneticButton className="bg-white text-black px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-gray-200 transition-colors">
          Start Virtual Tour
        </MagneticButton>
      </div>
    </section>
  );
}
