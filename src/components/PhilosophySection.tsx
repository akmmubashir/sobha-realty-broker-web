import React from 'react';
import { motion, } from 'framer-motion';

export function PhilosophySection() {
    return (
        <section id="philosophy" className="relative py-32 overflow-hidden">
            <div className="absolute inset-0 z-0 h-full">
                <motion.div
                    //   style={{
                    //     y: useTransform(scrollYProgress, [0.4, 0.7], ['-20%', '20%'])
                    //   }}
                    className="absolute inset-0"
                >
                    <img
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop"
                        alt="Abstract Architecture"
                        className="w-full h-full object-cover opacity-30"
                    />
                </motion.div>
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
            </div>
            <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-4xl md:text-7xl font-serif mb-8 leading-tight">
                        "Architecture should speak of its time and place, but yearn for timelessness."
                    </h2>
                    <p className="text-xl text-gray-400 font-light italic">— Frank Gehry</p>
                </motion.div>
            </div>
        </section>
    );
}
