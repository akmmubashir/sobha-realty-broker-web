import React, { useRef } from 'react';
import { motion, useMotionValue, useScroll, useSpring, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { TextReveal } from './TextReveal';
import { MagneticButton } from './MagneticButton';

export function HeroSection() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });
  // Parallax transforms
  const yHero = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const yText = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const opacityHero = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scaleHero = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  // Mouse parallax for hero
  const mouseX = useMotionValue(0);
  const heroX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), {
    stiffness: 100,
    damping: 30
  });

  return (
    <React.Fragment>
      {/* 1. Hero Section with Advanced Parallax */}
      <section
        ref={heroRef}
        className="relative h-screen w-full overflow-hidden flex items-center justify-center">

        <motion.div
          style={{
            y: yHero,
            scale: scaleHero,
            opacity: opacityHero,
            x: heroX
          }}
          className="absolute inset-0 z-0">

          <div className="absolute inset-0 bg-black/30 z-10" />
          <img
            src="/assets/herosection.webp"
            alt="Luxury Architecture"
            className="w-full h-full object-cover" />

        </motion.div>

        <motion.div
          style={{
            y: yText,
            x: useTransform(heroX, (val) => val * -0.5)
          }}
          className="relative z-20 text-center px-4 max-w-5xl mx-auto">

          <motion.p
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              delay: 0.2
            }}
            className="text-sm md:text-base uppercase tracking-[0.3em] mb-6 text-gray-200">

            Redefining Modern Living
          </motion.p>

          <div className="text-5xl md:text-8xl font-serif mb-8 leading-tight">
            <TextReveal
              text="The Art of"
              className="justify-center"
              delay={0.4} />

            <motion.span
              initial={{
                opacity: 0
              }}
              animate={{
                opacity: 1
              }}
              transition={{
                delay: 0.8,
                duration: 1
              }}
              className="italic font-light block">

              Timeless Luxury
            </motion.span>
          </div>

          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              duration: 0.8,
              delay: 1
            }}>

            <MagneticButton className="group flex items-center gap-4 mx-auto text-sm uppercase tracking-widest border-b border-white pb-2 hover:text-gray-300 hover:border-gray-300 transition-all">
              Discover Collection{' '}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
          </motion.div>
        </motion.div>

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
          className="absolute bottom-10 left-0 right-0 flex justify-center">

          <div className="w-[1px] h-24 bg-gradient-to-b from-white to-transparent opacity-50 animate-pulse"></div>
        </motion.div>
      </section>

      {/* 2. About / Legacy Section */}
      <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{
              opacity: 0,
              x: -50
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true,
              margin: '-100px'
            }}
            transition={{
              duration: 0.8
            }}>

            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
              <TextReveal text="Crafting Legacies" />
              <span className="block mt-2">Since 1976</span>
            </h2>
            <motion.div
              initial={{
                width: 0
              }}
              whileInView={{
                width: 80
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 1,
                delay: 0.5
              }}
              className="h-[1px] bg-white mb-8">
            </motion.div>
            <p className="text-gray-400 text-lg leading-relaxed mb-6 font-light">
              We don't just build structures; we curate lifestyles. Our
              philosophy is rooted in the belief that true luxury lies in the
              details the play of light, the texture of materials, and the
              harmony of space.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed font-light">
              For over four decades, we have been at the forefront of
              architectural innovation, creating iconic residences that stand as
              testaments to uncompromising quality and visionary design.
            </p>
          </motion.div>
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              rotateY: 10
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              rotateY: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 1,
              type: 'spring'
            }}
            className="relative perspective-1000">

            <div className="aspect-[3/4] overflow-hidden shadow-2xl transform transition-transform hover:scale-[1.02] duration-700">
              <img
                src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2500&auto=format&fit=crop"
                alt="Architectural Detail"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />

            </div>
            <motion.div
              initial={{
                x: -20,
                opacity: 0
              }}
              whileInView={{
                x: 0,
                opacity: 1
              }}
              transition={{
                delay: 0.5,
                duration: 0.8
              }}
              className="absolute -bottom-10 -left-10 bg-[#121212] p-8 border border-white/10 hidden md:block shadow-xl">

              <p className="font-serif text-3xl">45+</p>
              <p className="text-xs uppercase tracking-widest text-gray-500 mt-2">
                Years of Excellence
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </React.Fragment>
  )
}