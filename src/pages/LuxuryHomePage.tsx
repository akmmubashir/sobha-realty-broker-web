import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue } from
'framer-motion';
import {
  ArrowRight,
  MapPin,
  Check,
  Instagram,
  Twitter,
  Facebook,
  Mail,
  Phone,
  Compass,
  PenTool,
  Key,
  MessageSquare,
  Award,
  Leaf,
  Wifi,
  Video } from
'lucide-react';
import { PropertyCard } from '../components/PropertyCard';
import { StatCounter } from '../components/StatCounter';
import { TestimonialCard } from '../components/TestimonialCard';
import { TextReveal } from '../components/TextReveal';
import { MagneticButton } from '../components/MagneticButton';
// Mock Data
const properties = [
{
  id: '1',
  title: 'The Obsidian Villa',
  location: 'Beverly Hills, CA',
  price: '$12,500,000',
  image:
  'https://images.unsplash.com/photo-1600596542815-6ad4c727dd2d?q=80&w=2675&auto=format&fit=crop',
  beds: 5,
  baths: 6,
  sqft: 6500
},
{
  id: '2',
  title: 'Midnight Penthouse',
  location: 'Manhattan, NY',
  price: '$18,900,000',
  image:
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop',
  beds: 3,
  baths: 3.5,
  sqft: 4200
},
{
  id: '3',
  title: 'Coastal Noir Estate',
  location: 'Malibu, CA',
  price: '$24,000,000',
  image:
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2653&auto=format&fit=crop',
  beds: 6,
  baths: 8,
  sqft: 8200
},
{
  id: '4',
  title: 'Alpine Shadow Retreat',
  location: 'Aspen, CO',
  price: '$15,750,000',
  image:
  'https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=2565&auto=format&fit=crop',
  beds: 5,
  baths: 5,
  sqft: 5800
},
{
  id: '5',
  title: 'Urban Onyx Loft',
  location: 'London, UK',
  price: '£8,500,000',
  image:
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop',
  beds: 2,
  baths: 2,
  sqft: 2800
},
{
  id: '6',
  title: 'Desert Mirage',
  location: 'Palm Springs, CA',
  price: '$7,200,000',
  image:
  'https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=2680&auto=format&fit=crop',
  beds: 4,
  baths: 4.5,
  sqft: 4500
}];

const amenities = [
{
  icon: 'Pool',
  label: 'Infinity Pools'
},
{
  icon: 'Gym',
  label: 'Private Wellness'
},
{
  icon: 'Wine',
  label: 'Wine Cellars'
},
{
  icon: 'Car',
  label: 'Underground Parking'
},
{
  icon: 'Shield',
  label: '24/7 Security'
},
{
  icon: 'Home',
  label: 'Smart Home'
},
{
  icon: 'Sun',
  label: 'Private Terraces'
},
{
  icon: 'Star',
  label: 'Concierge Service'
}];

const testimonials = [
{
  quote:
  "The attention to detail is simply unmatched. They didn't just find us a house; they found us a masterpiece that fits our lifestyle perfectly.",
  author: 'Alexander V.',
  role: 'Art Collector'
},
{
  quote:
  'Professionalism at its peak. The team understood our need for privacy and exclusivity. The process was seamless from start to finish.',
  author: 'Sarah J.',
  role: 'Tech Executive'
},
{
  quote:
  'Living in a Sobha-inspired property has redefined luxury for us. The architecture speaks a language of elegance and timelessness.',
  author: 'James & Elena',
  role: 'Architects'
}];

const processSteps = [
{
  icon: MessageSquare,
  title: 'Consultation',
  description:
  'We begin by understanding your unique vision, lifestyle needs, and investment goals.'
},
{
  icon: Compass,
  title: 'Discovery',
  description:
  'Our team curates a selection of exclusive properties that align with your criteria.'
},
{
  icon: PenTool,
  title: 'Design',
  description:
  'For custom builds, we collaborate with world-renowned architects to shape your dream.'
},
{
  icon: Key,
  title: 'Delivery',
  description:
  'A seamless handover process, ensuring every detail is perfect before you step inside.'
}];

const awards = [
{
  title: 'Best Luxury Developer',
  org: 'Global Real Estate Awards',
  year: '2023'
},
{
  title: 'Architectural Excellence',
  org: 'Design & Build',
  year: '2022'
},
{
  title: 'Sustainable Innovation',
  org: 'Green Building Council',
  year: '2023'
},
{
  title: 'Customer Satisfaction',
  org: 'Luxury Lifestyle Awards',
  year: '2021'
}];

const pressLogos = [
'Architectural Digest',
'Forbes',
'Wall Street Journal',
'Vogue Living',
'Elle Decor',
'The New York Times'];

export function LuxuryHomePage() {
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
  const mouseY = useMotionValue(0);
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  };
  const heroX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), {
    stiffness: 100,
    damping: 30
  });
  const heroY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-20, 20]), {
    stiffness: 100,
    damping: 30
  });
  return (
    <div
      className="bg-black min-h-screen text-white overflow-x-hidden font-sans perspective-1000"
      onMouseMove={handleMouseMove}>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 md:px-12 flex justify-between items-center mix-blend-difference backdrop-blur-sm bg-black/10 transition-all duration-300">
        <div className="text-2xl font-serif tracking-widest font-bold">
          SOBHA
        </div>
        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-light">
          <a
            href="#properties"
            className="hover:text-gray-300 transition-colors relative group">

            Properties
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#philosophy"
            className="hover:text-gray-300 transition-colors relative group">

            Philosophy
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#amenities"
            className="hover:text-gray-300 transition-colors relative group">

            Amenities
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a
            href="#contact"
            className="hover:text-gray-300 transition-colors relative group">

            Contact
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-white transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
        <MagneticButton className="border border-white px-6 py-2 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors duration-300">
          Inquire
        </MagneticButton>
      </nav>

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
            src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&w=2671&auto=format&fit=crop"
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
              details—the play of light, the texture of materials, and the
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

      {/* Process / Timeline Section */}
      <section className="py-24 bg-[#0a0a0a] border-t border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-20">
            <span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 block">
              The Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-serif">Our Process</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connecting Line (Desktop) */}
            <motion.div
              initial={{
                scaleX: 0
              }}
              whileInView={{
                scaleX: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 1.5,
                ease: 'easeInOut'
              }}
              className="hidden md:block absolute top-12 left-0 right-0 h-[1px] bg-white/10 z-0 mx-16 origin-left">
            </motion.div>

            {processSteps.map((step, index) =>
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 30
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: index * 0.2,
                duration: 0.8
              }}
              className="relative z-10 flex flex-col items-center text-center group">

                <div className="w-24 h-24 rounded-full bg-[#121212] border border-white/20 flex items-center justify-center mb-8 group-hover:border-white group-hover:scale-110 transition-all duration-500 shadow-lg">
                  <step.icon
                  className="w-8 h-8 text-white group-hover:rotate-12 transition-transform duration-500"
                  strokeWidth={1} />

                </div>
                <h3 className="text-xl font-serif mb-4">{step.title}</h3>
                <p className="text-gray-400 text-sm font-light leading-relaxed max-w-[200px]">
                  {step.description}
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* 3. Featured Properties Grid with 3D Tilt */}
      <section id="properties" className="py-24 bg-black">
        <div className="px-6 md:px-12 max-w-[1600px] mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 block">
                Curated Collection
              </span>
              <h2 className="text-4xl md:text-5xl font-serif">
                Featured Residences
              </h2>
            </div>
            <MagneticButton className="hidden md:flex items-center gap-2 text-sm uppercase tracking-widest hover:text-gray-300 transition-colors">
              View All <ArrowRight size={16} />
            </MagneticButton>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 perspective-2000">
            {properties.map((prop, index) =>
            <PropertyCard key={prop.id} {...prop} index={index} />
            )}
          </div>

          <div className="mt-16 text-center md:hidden">
            <button className="border border-white/20 px-8 py-3 text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-colors">
              View All Properties
            </button>
          </div>
        </div>
      </section>

      {/* 4. Architecture Philosophy (Parallax) */}
      <section id="philosophy" className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            style={{
              y: useTransform(scrollYProgress, [0.4, 0.7], ['-20%', '20%'])
            }}
            className="absolute inset-0">

            <img
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
              alt="Abstract Architecture"
              className="w-full h-full object-cover opacity-30" />

          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.8
            }}>

            <h2 className="text-4xl md:text-7xl font-serif mb-8 leading-tight">
              "Architecture should speak of its time and place, but yearn for
              timelessness."
            </h2>
            <p className="text-xl text-gray-400 font-light italic">
              — Frank Gehry
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sustainability & Innovation */}
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
              once: true
            }}
            transition={{
              duration: 0.8
            }}
            className="order-2 md:order-1">

            <span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 block">
              Future Living
            </span>
            <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
              Innovation Meets <br /> Sustainability
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
              We are committed to building a greener future. Our properties
              integrate state-of-the-art smart home technology with
              eco-conscious design principles, ensuring efficiency without
              compromising on luxury.
            </p>

            <div className="grid grid-cols-2 gap-8">
              <motion.div
                whileHover={{
                  y: -5
                }}
                className="flex flex-col gap-2 p-4 border border-white/5 hover:border-white/20 transition-colors">

                <Leaf className="w-8 h-8 text-white mb-2" strokeWidth={1} />
                <h4 className="text-lg font-serif">Eco-Friendly</h4>
                <p className="text-sm text-gray-500 font-light">
                  LEED Certified Materials
                </p>
              </motion.div>
              <motion.div
                whileHover={{
                  y: -5
                }}
                className="flex flex-col gap-2 p-4 border border-white/5 hover:border-white/20 transition-colors">

                <Wifi className="w-8 h-8 text-white mb-2" strokeWidth={1} />
                <h4 className="text-lg font-serif">Smart Integration</h4>
                <p className="text-sm text-gray-500 font-light">
                  Full Home Automation
                </p>
              </motion.div>
            </div>
          </motion.div>

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
              duration: 0.8
            }}
            className="relative order-1 md:order-2 perspective-1000">

            <motion.div
              style={{
                rotateY: useTransform(scrollYProgress, [0.5, 0.8], [15, -15])
              }}
              className="aspect-square overflow-hidden shadow-2xl">

              <img
                src="https://images.unsplash.com/photo-1558036117-15db5275d42b?q=80&w=2670&auto=format&fit=crop"
                alt="Smart Home"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />

            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 5. Amenities Grid */}
      <section
        id="amenities"
        className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-[#0a0a0a]">

        <div className="text-center mb-20">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 block">
            Uncompromising Comfort
          </span>
          <h2 className="text-4xl md:text-5xl font-serif">
            World-Class Amenities
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {amenities.map((item, i) =>
          <motion.div
            key={i}
            initial={{
              opacity: 0
            }}
            whileInView={{
              opacity: 1
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: i * 0.05
            }}
            whileHover={{
              scale: 1.05,
              zIndex: 10,
              backgroundColor: '#1a1a1a'
            }}
            className="bg-black p-10 flex flex-col items-center justify-center text-center group transition-all duration-300 aspect-square cursor-pointer">

              <div className="mb-6 p-4 rounded-full border border-white/10 group-hover:border-white/40 transition-colors duration-300">
                <Check className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-sm uppercase tracking-widest font-light">
                {item.label}
              </h3>
            </motion.div>
          )}
        </div>
      </section>

      {/* 6. Location / Map Placeholder */}
      <section className="h-[600px] relative bg-[#121212] flex items-center justify-center overflow-hidden group">
        <motion.div
          style={{
            scale: useTransform(scrollYProgress, [0.7, 0.9], [1, 1.1])
          }}
          className="absolute inset-0 opacity-40 group-hover:opacity-30 transition-opacity duration-700">

          {/* Abstract Map Graphic */}
          <svg
            className="w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none">

            <path
              d="M0,50 Q25,30 50,50 T100,50"
              stroke="white"
              strokeWidth="0.1"
              fill="none" />

            <path
              d="M0,60 Q25,40 50,60 T100,60"
              stroke="white"
              strokeWidth="0.1"
              fill="none" />

            <path
              d="M0,40 Q25,20 50,40 T100,40"
              stroke="white"
              strokeWidth="0.1"
              fill="none" />

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
            Strategically located in the world's most coveted neighborhoods,
            offering connectivity, privacy, and prestige.
          </p>
          <button className="text-xs uppercase tracking-widest border-b border-white pb-1 hover:opacity-70">
            Explore Neighborhoods
          </button>
        </div>
      </section>

      {/* 7. Gallery (Masonry-ish) */}
      <section className="py-24 px-4 md:px-8">
        <div className="max-w-[1800px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 h-auto md:h-[800px]">
            {/* Large item */}
            <motion.div
              initial={{
                opacity: 0
              }}
              whileInView={{
                opacity: 1
              }}
              viewport={{
                once: true
              }}
              className="md:col-span-6 md:row-span-2 relative group overflow-hidden h-[400px] md:h-full">

              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=2574&auto=format&fit=crop"
                alt="Interior"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors" />
            </motion.div>

            {/* Small items */}
            <motion.div
              initial={{
                opacity: 0
              }}
              whileInView={{
                opacity: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: 0.1
              }}
              className="md:col-span-3 md:row-span-1 relative group overflow-hidden h-[300px] md:h-full">

              <img
                src="https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2670&auto=format&fit=crop"
                alt="Detail"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

            </motion.div>

            <motion.div
              initial={{
                opacity: 0
              }}
              whileInView={{
                opacity: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: 0.2
              }}
              className="md:col-span-3 md:row-span-1 relative group overflow-hidden h-[300px] md:h-full">

              <img
                src="https://images.unsplash.com/photo-1600607687644-c7171b42498b?q=80&w=2670&auto=format&fit=crop"
                alt="Detail"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

            </motion.div>

            {/* Wide item */}
            <motion.div
              initial={{
                opacity: 0
              }}
              whileInView={{
                opacity: 1
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: 0.3
              }}
              className="md:col-span-6 md:row-span-1 relative group overflow-hidden h-[300px] md:h-full">

              <img
                src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2670&auto=format&fit=crop"
                alt="Detail"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />

            </motion.div>
          </div>
        </div>
      </section>

      {/* Virtual Tour CTA */}
      <section className="relative h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.div
            style={{
              scale: useTransform(scrollYProgress, [0.8, 1], [1, 1.2])
            }}
            className="w-full h-full">

            <img
              src="https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?q=80&w=2670&auto=format&fit=crop"
              alt="Interior"
              className="w-full h-full object-cover" />

          </motion.div>
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{
              scale: 0
            }}
            whileInView={{
              scale: 1
            }}
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 20
            }}>

            <Video
              className="w-12 h-12 text-white mx-auto mb-6 opacity-80"
              strokeWidth={1} />

          </motion.div>
          <h2 className="text-4xl md:text-6xl font-serif mb-6">
            Experience It Virtually
          </h2>
          <p className="text-xl text-gray-300 font-light mb-10 max-w-2xl mx-auto">
            Take an immersive 3D tour of our properties from the comfort of your
            home.
          </p>
          <MagneticButton className="bg-white text-black px-8 py-4 uppercase tracking-widest text-sm font-medium hover:bg-gray-200 transition-colors">
            Start Virtual Tour
          </MagneticButton>
        </div>
      </section>

      {/* 8. Statistics */}
      <section className="py-24 bg-[#0a0a0a] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <StatCounter
              value={45}
              suffix="+"
              label="Years Experience"
              index={0} />

            <StatCounter value={120} suffix="" label="Awards Won" index={1} />
            <StatCounter
              value={850}
              suffix="+"
              label="Properties Sold"
              index={2} />

            <StatCounter
              value={2}
              suffix="B+"
              label="Value Delivered"
              index={3} />

          </div>
        </div>
      </section>

      {/* Awards & Recognition with 3D Hover */}
      <section className="py-24 px-6 md:px-12 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 block">
              Recognition
            </span>
            <h2 className="text-3xl md:text-4xl font-serif">
              Award-Winning Excellence
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-1000">
            {awards.map((award, index) =>
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 20
              }}
              whileInView={{
                opacity: 1,
                y: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                delay: index * 0.1
              }}
              whileHover={{
                rotateX: 10,
                rotateY: 10,
                scale: 1.05,
                zIndex: 10,
                boxShadow: '0 20px 40px rgba(255,255,255,0.1)'
              }}
              className="border border-white/10 p-8 text-center bg-black transition-colors duration-300 group transform-style-3d cursor-default">

                <Award
                className="w-8 h-8 text-white/50 mx-auto mb-6 group-hover:text-white transition-colors"
                strokeWidth={1} />

                <h3 className="text-lg font-serif mb-2 transform-style-3d group-hover:translate-z-10">
                  {award.title}
                </h3>
                <p className="text-sm text-gray-400 mb-1">{award.org}</p>
                <p className="text-xs text-gray-600">{award.year}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* 9. Testimonials */}
      <section className="py-32 px-6 md:px-12 bg-[#0a0a0a]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif mb-4">
              Client Stories
            </h2>
            <div className="w-20 h-[1px] bg-white mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, i) =>
            <TestimonialCard key={i} {...t} index={i} />
            )}
          </div>
        </div>
      </section>

      {/* Press & Media */}
      <section className="py-20 border-t border-white/5 bg-black">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gray-600 mb-12">
            As Featured In
          </p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-50">
            {pressLogos.map((logo, index) =>
            <motion.div
              key={index}
              whileHover={{
                opacity: 1,
                scale: 1.1,
                y: -5
              }}
              className="text-xl md:text-2xl font-serif text-gray-400 cursor-default transition-all">

                {logo}
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* 10. Contact / Footer */}
      <footer
        id="contact"
        className="bg-[#050505] pt-32 pb-12 px-6 md:px-12 border-t border-white/10">

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24">
            <div>
              <h2 className="text-5xl md:text-7xl font-serif mb-8">
                Let's Discuss <br /> Your Vision.
              </h2>
              <p className="text-xl text-gray-400 font-light max-w-md mb-12">
                Whether you're looking to buy, sell, or invest, our team of
                experts is ready to guide you through the world of luxury real
                estate.
              </p>

              <div className="flex flex-col gap-6">
                <a
                  href="mailto:hello@sobharealty.com"
                  className="flex items-center gap-4 text-lg hover:text-gray-300 transition-colors">

                  <Mail className="w-5 h-5" /> hello@sobharealty.com
                </a>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-4 text-lg hover:text-gray-300 transition-colors">

                  <Phone className="w-5 h-5" /> +1 (555) 123-4567
                </a>
                <div className="flex items-center gap-4 text-lg text-gray-400">
                  <MapPin className="w-5 h-5" /> 123 Luxury Lane, Beverly Hills,
                  CA
                </div>
              </div>
            </div>

            <div className="bg-[#121212] p-8 md:p-12 border border-white/5">
              <form className="space-y-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-black border-b border-white/20 p-3 text-white focus:outline-none focus:border-white transition-colors" />

                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-black border-b border-white/20 p-3 text-white focus:outline-none focus:border-white transition-colors" />

                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-black border-b border-white/20 p-3 text-white focus:outline-none focus:border-white transition-colors">
                  </textarea>
                </div>
                <MagneticButton className="w-full bg-white text-black py-4 uppercase tracking-widest text-sm font-medium hover:bg-gray-200 transition-colors">
                  Send Message
                </MagneticButton>
              </form>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/10 text-gray-500 text-xs uppercase tracking-widest">
            <div className="mb-4 md:mb-0">
              &copy; 2024 Sobha Realty. All Rights Reserved.
            </div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Facebook size={18} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>);

}