import { useState, useEffect } from 'react';

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    let timeout: number;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            clearTimeout(timeout);
            timeout = window.setTimeout(() => {
              setActiveSection(entry.target.id);
            }, 100); // 100ms debounce para suavizar
          }
        });
      },
      { threshold: window.innerWidth < 768 ? 0.3 : 0.6, rootMargin: '-80px 0px 0px 0px' }
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      clearTimeout(timeout);
    };
  }, []);

  return activeSection;
};
