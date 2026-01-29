import React from 'react';
import { motion } from 'framer-motion';
import { useParallax } from '../hooks/useParallax';
interface EditorialBlockProps {
  id: string;
  title: string;
  content: string;
  quote: string;
  image: string;
  imageAlt: string;
  align?: 'left' | 'right';
  index: number;
}
export function EditorialBlock({
  id,
  title,
  content,
  quote,
  image,
  imageAlt,
  align = 'left',
  index
}: EditorialBlockProps) {
  const { ref: imageRef, y: imageY } = useParallax(40);
  const isLeft = align === 'left';
  return (
    <section id={id} className="py-24 md:py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div
          className={`flex flex-col ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 md:gap-24 items-center`}>

          {/* Image Side */}
          <motion.div
            className="w-full md:w-1/2 relative"
            initial={{
              opacity: 0,
              x: isLeft ? -50 : 50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              margin: '-10%'
            }}
            transition={{
              duration: 0.8,
              ease: 'easeOut'
            }}>

            <div className="relative overflow-hidden aspect-[3/4] md:aspect-[4/5]">
              <div
                ref={imageRef}
                className="absolute inset-0 -top-[10%] h-[120%] w-full">

                <motion.img
                  style={{
                    y: imageY
                  }}
                  src={image}
                  alt={imageAlt}
                  className="w-full h-full object-cover" />

              </div>

              {/* Decorative border frame */}
              <div className="absolute inset-4 border border-editorial-bg/50 z-10" />
            </div>

            {/* Image caption/number */}
            <div
              className={`absolute -bottom-6 ${isLeft ? '-right-6' : '-left-6'} z-20`}>

              <span className="text-6xl md:text-8xl font-serif text-editorial-gold opacity-50">
                0{index}
              </span>
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="w-full md:w-1/2 space-y-8">
            <motion.div
              initial={{
                opacity: 0,
                y: 30
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true,
                margin: '-10%'
              }}
              transition={{
                duration: 0.6,
                delay: 0.2
              }}>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-editorial-text mb-6">
                {title}
              </h2>
              <div className="w-12 h-1 bg-editorial-gold mb-8" />
              <p className="text-lg md:text-xl text-editorial-textLight leading-relaxed font-light">
                {content}
              </p>
            </motion.div>

            {/* Pull Quote */}
            <motion.blockquote
              className="relative py-8 my-8"
              initial={{
                opacity: 0,
                scale: 0.95
              }}
              whileInView={{
                opacity: 1,
                scale: 1
              }}
              viewport={{
                once: true,
                margin: '-10%'
              }}
              transition={{
                duration: 0.7,
                delay: 0.4
              }}>

              <span className="absolute top-0 left-0 text-6xl text-editorial-gold opacity-30 font-serif">
                "
              </span>
              <p className="text-2xl md:text-3xl font-serif italic text-editorial-text leading-tight pl-8 border-l-2 border-editorial-gold/30">
                {quote}
              </p>
            </motion.blockquote>
          </div>
        </div>
      </div>
    </section>);

}