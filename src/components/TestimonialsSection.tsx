import React from 'react';
import { TestimonialCard } from './TestimonialCard';

const testimonials = [
  {
    quote: "The attention to detail is simply unmatched. They didn't just find us a house; they found us a masterpiece that fits our lifestyle perfectly.",
    author: 'Alexander V.',
    role: 'Art Collector'
  },
  {
    quote: 'Professionalism at its peak. The team understood our need for privacy and exclusivity. The process was seamless from start to finish.',
    author: 'Sarah J.',
    role: 'Tech Executive'
  },
  {
    quote: 'Living in a Sobha-inspired property has redefined luxury for us. The architecture speaks a language of elegance and timelessness.',
    author: 'James & Elena',
    role: 'Architects'
  }
];

export function TestimonialsSection() {
  return (
    <section className="py-32 px-6 md:px-12 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif mb-4">Client Stories</h2>
          <div className="w-20 h-[1px] bg-white mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} {...t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
