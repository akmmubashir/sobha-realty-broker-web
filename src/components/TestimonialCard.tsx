import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  index: number;
}
export function TestimonialCard({
  quote,
  author,
  role,
  index
}: TestimonialProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.95
      }}
      whileInView={{
        opacity: 1,
        scale: 1
      }}
      viewport={{
        once: true
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.1
      }}
      className="bg-[#121212] p-10 md:p-12 border border-white/5 relative group hover:border-white/20 transition-colors duration-500">

      <Quote className="absolute top-10 left-10 text-white/10 w-12 h-12 rotate-180" />

      <div className="relative z-10 pt-8">
        <p className="text-xl md:text-2xl font-serif text-gray-200 leading-relaxed mb-8">
          "{quote}"
        </p>

        <div className="flex items-center gap-4">
          <div className="w-10 h-[1px] bg-white/30"></div>
          <div>
            <h4 className="text-white font-medium tracking-wide">{author}</h4>
            <p className="text-gray-500 text-xs uppercase tracking-wider mt-1">
              {role}
            </p>
          </div>
        </div>
      </div>
    </motion.div>);

}