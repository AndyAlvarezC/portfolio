import { useState, useEffect } from 'react';

export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: window.innerWidth < 768 ? 0.3 : 0.6,
        rootMargin: '-80px 0px 0px 0px',
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return activeSection;
};
