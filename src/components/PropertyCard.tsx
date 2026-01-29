import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Bed, Bath, Square } from 'lucide-react';
interface PropertyProps {
  id: string;
  title: string;
  location: string;
  price: string;
  image: string;
  beds: number;
  baths: number;
  sqft: number;
  index: number;
}
export function PropertyCard({
  title,
  location,
  price,
  image,
  beds,
  baths,
  sqft,
  index
}: PropertyProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);
  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ['7deg', '-7deg']);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ['-7deg', '7deg']);
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 50
      }}
      whileInView={{
        opacity: 1,
        y: 0
      }}
      viewport={{
        once: true,
        margin: '-50px'
      }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
        ease: [0.215, 0.61, 0.355, 1]
      }}
      className="perspective-1000">

      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: 'preserve-3d'
        }}
        className="group cursor-pointer relative">

        <div className="relative overflow-hidden aspect-[4/5] mb-6 shadow-2xl">
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500 z-10" />
          <motion.img
            src={image}
            alt={title}
            style={{
              transform: 'translateZ(0px)' // Base layer
            }}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />


          {/* Floating Badge */}
          <motion.div
            style={{
              transform: 'translateZ(50px)'
            }}
            className="absolute top-4 right-4 z-20 bg-white text-black px-4 py-2 text-sm font-medium tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">

            VIEW DETAILS
          </motion.div>
        </div>

        <motion.div
          style={{
            transform: 'translateZ(20px)'
          }}
          className="bg-black/80 backdrop-blur-sm p-4 -mt-12 relative z-20 mx-4 border border-white/10">

          <div className="flex justify-between items-start border-b border-white/10 pb-4 mb-4">
            <div>
              <h3 className="text-xl font-serif text-white mb-1 group-hover:text-gray-300 transition-colors">
                {title}
              </h3>
              <p className="text-gray-400 font-light text-xs tracking-wide">
                {location}
              </p>
            </div>
            <div className="text-right">
              <p className="text-lg font-medium text-white">{price}</p>
            </div>
          </div>

          <div className="flex gap-4 text-gray-400 text-xs font-light justify-between">
            <div className="flex items-center gap-1">
              <Bed size={14} strokeWidth={1.5} />
              <span>{beds} Beds</span>
            </div>
            <div className="flex items-center gap-1">
              <Bath size={14} strokeWidth={1.5} />
              <span>{baths} Baths</span>
            </div>
            <div className="flex items-center gap-1">
              <Square size={14} strokeWidth={1.5} />
              <span>{sqft.toLocaleString()} Sq Ft</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>);

}