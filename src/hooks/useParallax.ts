import { useScroll, useTransform, MotionValue } from 'framer-motion';
import { useRef } from 'react';

/**
 * Custom hook for parallax effects using Framer Motion
 * @param distance The distance in pixels the element should move relative to scroll
 * @returns ref to attach to the element and the y transform value
 */
export function useParallax(distance: number = 50) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [-distance, distance]);

  return { ref, y };
}