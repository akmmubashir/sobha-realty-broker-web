import React, { Children } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
export function HeroSection() {
  const headline = 'The Architecture of Silence';
  const words = headline.split(' ');
  const container = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.3
      }
    }
  };
  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(10px)'
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100
      }
    }
  };
  return (
    <section
      id="hero"
      className="relative h-screen w-full overflow-hidden flex flex-col md:flex-row bg-editorial-bg">

      {/* Left Content */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 z-10 relative">
        <motion.div
          initial={{
            opacity: 0,
            x: -20
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          transition={{
            duration: 0.8
          }}
          className="mb-6 flex items-center gap-4">

          <span className="h-[1px] w-12 bg-editorial-text"></span>
          <span className="text-sm tracking-[0.2em] uppercase text-editorial-textLight font-medium">
            Vol. 24 — Editorial
          </span>
        </motion.div>

        <motion.h1
          className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif text-editorial-text leading-[0.9] mb-8"
          variants={container}
          initial="hidden"
          animate="visible">

          {words.map((word, index) =>
          <motion.span
            key={index}
            variants={child}
            className="inline-block mr-[0.2em] last:mr-0">

              {word}
            </motion.span>
          )}
        </motion.h1>

        <motion.p
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            delay: 1.2,
            duration: 0.8
          }}
          className="text-xl md:text-2xl text-editorial-textLight max-w-md font-light italic font-serif">

          Exploring the intersection of minimalist design, authentic materials,
          and modern spaces.
        </motion.p>

        <motion.div
          initial={{
            opacity: 0
          }}
          animate={{
            opacity: 1
          }}
          transition={{
            delay: 1.5,
            duration: 1
          }}
          className="absolute bottom-12 left-8 md:left-16 lg:left-24 flex items-center gap-2 text-editorial-text/60">

          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{
              y: [0, 5, 0]
            }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: 'easeInOut'
            }}>

            <ArrowDown size={16} />
          </motion.div>
        </motion.div>
      </div>

      {/* Right Image Parallax */}
      <div className="absolute inset-0 md:relative md:w-1/2 h-full overflow-hidden">
        <div className="absolute inset-0 bg-editorial-bg/20 md:bg-transparent z-0 md:z-auto pointer-events-none mix-blend-overlay" />
        <motion.div
          className="w-full h-[120%] relative -top-[10%]"
          initial={{
            scale: 1.1,
            opacity: 0
          }}
          animate={{
            scale: 1,
            opacity: 1
          }}
          transition={{
            duration: 1.5,
            ease: 'easeOut'
          }}>

          <img
            src="https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&w=2574&auto=format&fit=crop"
            alt="Minimalist architecture"
            className="w-full h-full object-cover" />

        </motion.div>
      </div>
    </section>);

}