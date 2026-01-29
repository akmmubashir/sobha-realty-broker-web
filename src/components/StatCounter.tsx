import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  index: number;
}
export function StatCounter({
  value,
  suffix = '',
  label,
  index
}: StatCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: true,
    margin: '-100px'
  });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepTime = duration / steps;
      const increment = value / steps;
      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);
  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 30
      }}
      animate={
      isInView ?
      {
        opacity: 1,
        y: 0
      } :
      {
        opacity: 0,
        y: 30
      }
      }
      transition={{
        duration: 0.8,
        delay: index * 0.1
      }}
      className="text-center">

      <div className="text-5xl md:text-7xl font-serif text-white mb-4">
        {count}
        {suffix}
      </div>
      <div className="text-sm uppercase tracking-[0.2em] text-gray-400 font-light">
        {label}
      </div>
    </motion.div>);

}