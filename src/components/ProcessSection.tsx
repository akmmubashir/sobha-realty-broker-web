import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, Compass, PenTool, Key } from 'lucide-react';

const processSteps = [
  {
    icon: MessageSquare,
    title: 'Consultation',
    description: 'We begin by understanding your unique vision, lifestyle needs, and investment goals.'
  },
  {
    icon: Compass,
    title: 'Discovery',
    description: 'Our team curates a selection of exclusive properties that align with your criteria.'
  },
  {
    icon: PenTool,
    title: 'Design',
    description: 'For custom builds, we collaborate with world-renowned architects to shape your dream.'
  },
  {
    icon: Key,
    title: 'Delivery',
    description: 'A seamless handover process, ensuring every detail is perfect before you step inside.'
  }
];

export function ProcessSection() {
  return (
    <section className="py-24 bg-[#0a0a0a] border-t border-white/5 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 block">
            The Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-serif">Our Process</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            className="hidden md:block absolute top-12 left-0 right-0 h-[1px] bg-white/10 z-0 mx-16 origin-left"
          />
          {processSteps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className="w-24 h-24 rounded-full bg-[#121212] border border-white/20 flex items-center justify-center mb-8 group-hover:border-white group-hover:scale-110 transition-all duration-500 shadow-lg">
                <step.icon className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-500" strokeWidth={1} />
              </div>
              <h3 className="text-xl font-serif mb-4">{step.title}</h3>
              <p className="text-gray-400 text-sm font-light leading-relaxed max-w-[200px]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
