import React, { useRef } from 'react';
import {
  useScroll,
  useMotionValue
} from
  'framer-motion';
import Header from '../components/header';
import { HeroSection } from '../components/HeroSection';
import { ProcessSection } from '../components/ProcessSection';
import { PropertiesSection } from '../components/PropertiesSection';
import { PhilosophySection } from '../components/PhilosophySection';
import { SustainabilitySection } from '../components/SustainabilitySection';
import { AmenitiesSection } from '../components/AmenitiesSection';
import { LocationSection } from '../components/LocationSection';
import { GallerySection } from '../components/GallerySection';
import { VirtualTourSection } from '../components/VirtualTourSection';
import { StatisticsSection } from '../components/StatisticsSection';
import { AwardsSection } from '../components/AwardsSection';
import { TestimonialsSection } from '../components/TestimonialsSection';
import { PressSection } from '../components/PressSection';
import { FooterSection } from '../components/FooterSection';

export function LuxuryHomePage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start']
  });
  // Mouse parallax for hero
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set(clientX / innerWidth - 0.5);
    mouseY.set(clientY / innerHeight - 0.5);
  };
  return (
    <div
      className="bg-black min-h-screen text-white overflow-x-hidden font-sans perspective-1000"
      onMouseMove={handleMouseMove}>
      {/* Navigation */}
      <Header />
      {/* 1. Hero & About Section with Advanced Parallax */}
      <HeroSection />
      {/* 2. Process / Timeline Section */}
      <ProcessSection />
      {/* 3. Featured Properties Grid with 3D Tilt */}
      <PropertiesSection />
      {/* 4. Architecture Philosophy (Parallax) */}
      <PhilosophySection />
      {/* 5. Sustainability & Innovation */}
      <SustainabilitySection scrollYProgress={scrollYProgress} />
      {/* 6. Amenities Grid */}
      <AmenitiesSection />
      {/* 7. Location / Map Placeholder */}
      <LocationSection scrollYProgress={scrollYProgress} />
      {/* 8. Gallery (Masonry-ish) */}
      <GallerySection />
      {/* 9. Virtual Tour CTA */}
      <VirtualTourSection scrollYProgress={scrollYProgress} />
      {/* 10. Statistics */}
      <StatisticsSection />
      {/* 11. Awards & Recognition with 3D Hover */}
      <AwardsSection />
      {/* 12. Testimonials */}
      <TestimonialsSection />
      {/* 13. Press & Media */}
      <PressSection />
      {/* 14. Contact / Footer */}
      <FooterSection />
    </div>);

}