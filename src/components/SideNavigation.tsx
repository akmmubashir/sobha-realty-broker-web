import React from 'react';
import { motion } from 'framer-motion';
interface SideNavigationProps {
  sections: {
    id: string;
    label: string;
  }[];
  activeSection: string;
}
export function SideNavigation({
  sections,
  activeSection
}: SideNavigationProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return (
    <nav className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-6">
      {sections.map((section) => {
        const isActive = activeSection === section.id;
        return (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group relative flex items-center"
            aria-label={`Scroll to ${section.label}`}>

            {/* Label tooltip on hover */}
            <span
              className={`absolute left-8 whitespace-nowrap text-xs tracking-widest uppercase transition-all duration-300 ${isActive ? 'opacity-100 translate-x-0 text-editorial-text' : 'opacity-0 -translate-x-2 text-editorial-gold group-hover:opacity-100 group-hover:translate-x-0'}`}>

              {section.label}
            </span>

            {/* Dot */}
            <div className="relative flex items-center justify-center w-3 h-3">
              <motion.div
                className={`w-2 h-2 rounded-full transition-colors duration-500 ${isActive ? 'bg-editorial-gold' : 'bg-transparent border border-editorial-text/40 group-hover:border-editorial-gold'}`}
                layoutId="navDot"
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30
                }} />


              {/* Active ring indicator */}
              {isActive &&
              <motion.div
                layoutId="activeRing"
                className="absolute w-4 h-4 rounded-full border border-editorial-gold"
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 30
                }} />

              }
            </div>
          </button>);

      })}

      {/* Vertical line connecting dots */}
      <div className="absolute left-[5px] top-0 bottom-0 w-[1px] bg-editorial-border -z-10" />
    </nav>);

}