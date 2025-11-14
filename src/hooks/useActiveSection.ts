import { useState, useEffect } from 'react';

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    let timeout: number;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            clearTimeout(timeout);
            timeout = window.setTimeout(() => {
              setActiveSection(entry.target.id);
            }, 120);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '-20% 0px -20% 0px',
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  return activeSection;
};
