import { useEffect, useState, useRef } from 'react';

/**
 * Hook to track which section is currently active in the viewport
 * Useful for navigation highlighting
 */
export function useIntersectionObserver(sectionIds: string[], threshold = 0.5) {
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                setActiveId(id);
              }
            });
          },
          {
            rootMargin: '-20% 0px -20% 0px',
            threshold: threshold
          }
        );

        observer.observe(element);
        observers.push(observer);
      }
    });

    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, [sectionIds, threshold]);

  return activeId;
}