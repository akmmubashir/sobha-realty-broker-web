import React from 'react';
import { HeroSection } from '../components/HeroSection';
import { EditorialBlock } from '../components/EditorialBlock';
import { ParallaxSection } from '../components/ParallaxSection';
import { SideNavigation } from '../components/SideNavigation';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { motion } from 'framer-motion';
export function EditorialPage() {
  const sections = [
  {
    id: 'hero',
    label: 'Intro'
  },
  {
    id: 'form',
    label: 'Form'
  },
  {
    id: 'material',
    label: 'Material'
  },
  {
    id: 'interlude',
    label: 'Vision'
  },
  {
    id: 'space',
    label: 'Space'
  },
  {
    id: 'outro',
    label: 'End'
  }];

  const activeSection = useIntersectionObserver(sections.map((s) => s.id));
  return (
    <div className="bg-editorial-bg min-h-screen selection:bg-editorial-gold selection:text-white">
      <SideNavigation sections={sections} activeSection={activeSection} />

      <HeroSection />

      <EditorialBlock
        id="form"
        index={1}
        title="Form Follows Function"
        content="In the realm of modern architecture, the stripping away of the unnecessary reveals the essence of the structure. It is not merely about absence, but about the perfect presence of what remains. Every line serves a purpose, every curve dictates a movement."
        quote="Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away."
        image="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&w=2568&auto=format&fit=crop"
        imageAlt="Geometric building facade"
        align="left" />


      <EditorialBlock
        id="material"
        index={2}
        title="Material Honesty"
        content="Authenticity in materials creates a dialogue between the built environment and the natural world. Raw concrete, untreated wood, and oxidized metal age with grace, telling the story of time passing. We seek textures that beg to be touched."
        quote="The materials we choose are the vocabulary of our spatial language."
        image="https://images.unsplash.com/photo-1518005052357-e98719a066d2?q=80&w=2670&auto=format&fit=crop"
        imageAlt="Concrete and wood textures"
        align="right" />


      <div id="interlude">
        <ParallaxSection
          image="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2301&auto=format&fit=crop"
          title="The Space Between"
          subtitle="Interlude" />

      </div>

      <EditorialBlock
        id="space"
        index={3}
        title="Spatial Poetry"
        content="Light is the invisible material that shapes our perception of space. It carves volume out of darkness, creating rhythm and depth. The interplay of shadow and illumination transforms a static structure into a living, breathing entity."
        quote="Architecture is the learned game, correct and magnificent, of forms assembled in the light."
        image="https://images.unsplash.com/photo-1470723710355-95304d8aece4?q=80&w=2670&auto=format&fit=crop"
        imageAlt="Light and shadow in hallway"
        align="left" />


      <section
        id="outro"
        className="py-32 px-6 bg-editorial-bgAlt border-t border-editorial-border">

        <div className="max-w-4xl mx-auto text-center">
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
              once: true
            }}
            transition={{
              duration: 0.8
            }}>

            <span className="text-editorial-gold text-sm tracking-[0.3em] uppercase mb-6 block">
              The End
            </span>
            <h2 className="text-5xl md:text-7xl font-serif text-editorial-text mb-8">
              Design for the Ages
            </h2>
            <p className="text-xl text-editorial-textLight font-light max-w-2xl mx-auto mb-12">
              We believe in spaces that inspire, calm, and elevate the human
              spirit. Join us in our pursuit of timeless beauty.
            </p>
            <button className="px-8 py-4 bg-editorial-text text-editorial-bg hover:bg-editorial-gold transition-colors duration-300 text-sm tracking-widest uppercase">
              View Collection
            </button>
          </motion.div>

          <div className="mt-24 flex justify-center gap-12 text-editorial-text/40 text-sm uppercase tracking-widest">
            <span>Instagram</span>
            <span>Twitter</span>
            <span>Pinterest</span>
          </div>
        </div>
      </section>
    </div>);

}