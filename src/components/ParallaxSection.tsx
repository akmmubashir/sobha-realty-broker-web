import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
interface ParallaxSectionProps {
  image: string;
  title?: string;
  subtitle?: string;
  height?: string;
  overlay?: boolean;
}
export function ParallaxSection({
  image,
  title,
  subtitle,
  height = 'h-[80vh]',
  overlay = true
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });
  // Parallax effect for the background image
  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%']);
  // Text fade out as it scrolls up
  const textOpacity = useTransform(scrollYProgress, [0.3, 0.5, 0.8], [0, 1, 0]);
  const textY = useTransform(scrollYProgress, [0.3, 0.6], [50, 0]);
  return (
    <section
      ref={ref}
      className={`relative w-full ${height} overflow-hidden flex items-center justify-center`}>

      {/* Background Image with Parallax */}
      <motion.div
        style={{
          y
        }}
        className="absolute inset-0 w-full h-[140%] -top-[20%]">

        <img
          src={image}
          alt="Architectural detail"
          className="w-full h-full object-cover" />

      </motion.div>

      {/* Overlay */}
      {overlay &&
      <div className="absolute inset-0 bg-editorial-bg/30 mix-blend-multiply" />
      }

      {/* Content */}
      {(title || subtitle) &&
      <motion.div
        style={{
          opacity: textOpacity,
          y: textY
        }}
        className="relative z-10 text-center max-w-4xl px-6">

          {subtitle &&
        <span className="block text-editorial-text font-sans text-sm tracking-[0.2em] uppercase mb-4 bg-editorial-bg/80 backdrop-blur-sm py-2 px-4 mx-auto">
              {subtitle}
            </span>
        }
          {title &&
        <h2 className="text-5xl md:text-7xl lg:text-8xl text-editorial-text font-serif italic bg-editorial-bg/60 backdrop-blur-sm p-4 md:p-8">
              {title}
            </h2>
        }
        </motion.div>
      }
    </section>);

}