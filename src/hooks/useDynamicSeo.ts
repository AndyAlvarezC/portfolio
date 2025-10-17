import { useEffect } from 'react';

export interface Section {
  id: string;
  title: string;
  description: string;
  image?: string;
  url?: string;
}

export const useDynamicSeo = (sections: Section[]) => {
  useEffect(() => {
    const updateSeo = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;

      for (const sec of sections) {
        const el = document.getElementById(sec.id);
        if (
          el &&
          scrollPos >= el.offsetTop &&
          scrollPos < el.offsetTop + el.offsetHeight
        ) {
          document.title = sec.title;

          const metaDesc = document.querySelector('meta[name="description"]');
          if (metaDesc) metaDesc.setAttribute('content', sec.description);

          const ogTitle = document.querySelector('meta[property="og:title"]');
          const ogDesc = document.querySelector(
            'meta[property="og:description"]'
          );
          const ogUrl = document.querySelector('meta[property="og:url"]');
          const ogImage = document.querySelector('meta[property="og:image"]');

          if (ogTitle) ogTitle.setAttribute('content', sec.title);
          if (ogDesc) ogDesc.setAttribute('content', sec.description);
          if (ogUrl && sec.url) ogUrl.setAttribute('content', sec.url);
          if (ogImage && sec.image) ogImage.setAttribute('content', sec.image);

          const twTitle = document.querySelector('meta[name="twitter:title"]');
          const twDesc = document.querySelector(
            'meta[name="twitter:description"]'
          );
          const twImage = document.querySelector('meta[name="twitter:image"]');

          if (twTitle) twTitle.setAttribute('content', sec.title);
          if (twDesc) twDesc.setAttribute('content', sec.description);
          if (twImage && sec.image) twImage.setAttribute('content', sec.image);

          const jsonLd = document.getElementById('json-ld');
          if (jsonLd && sec.url) {
            jsonLd.innerHTML = JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Andy Álvarez',
              url: sec.url,
              sameAs: [
                'https://github.com/AndyAlvarezC',
                'https://www.linkedin.com/in/andy-alvarez-6961b4300/',
              ],
              jobTitle: 'Frontend Developer',
            });
          }

          break;
        }
      }
    };

    updateSeo();
    window.addEventListener('scroll', updateSeo);
    return () => window.removeEventListener('scroll', updateSeo);
  }, [sections]);
};
