import React from 'react';
import { motion, useTransform } from 'framer-motion';
import { Leaf, Wifi } from 'lucide-react';

export function SustainabilitySection({ scrollYProgress }: { scrollYProgress: any }) {
    return (
        <section className="py-24 md:py-32 px-6 md:px-12 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="order-2 md:order-1"
                >
                    <span className="text-xs uppercase tracking-[0.3em] text-gray-500 mb-4 block">
                        Future Living
                    </span>
                    <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
                        Innovation Meets <br /> Sustainability
                    </h2>
                    <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
                        We are committed to building a greener future. Our properties integrate state-of-the-art smart home technology with eco-conscious design principles, ensuring efficiency without compromising on luxury.
                    </p>
                    <div className="grid grid-cols-2 gap-8">
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="flex flex-col gap-2 p-4 border border-white/5 hover:border-white/20 transition-colors"
                        >
                            <Leaf className="w-8 h-8 text-white mb-2" strokeWidth={1} />
                            <h4 className="text-lg font-serif">Eco-Friendly</h4>
                            <p className="text-sm text-gray-500 font-light">LEED Certified Materials</p>
                        </motion.div>
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="flex flex-col gap-2 p-4 border border-white/5 hover:border-white/20 transition-colors"
                        >
                            <Wifi className="w-8 h-8 text-white mb-2" strokeWidth={1} />
                            <h4 className="text-lg font-serif">Smart Integration</h4>
                            <p className="text-sm text-gray-500 font-light">Full Home Automation</p>
                        </motion.div>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="relative order-1 md:order-2 perspective-1000"
                >
                    <motion.div
                        style={{
                            rotateY: useTransform(scrollYProgress, [0.5, 0.8], [15, -15])
                        }}
                        className="aspect-square overflow-hidden shadow-2xl"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop"
                            alt="Smart Home"
                            className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
