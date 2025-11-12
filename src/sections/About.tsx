import { useTranslation } from 'react-i18next';
import { Reveal } from '../hooks/useScrollReveal';
import { lazy, Suspense } from 'react';

const AboutBackground = lazy(() => import('../components/about/ui/AboutBackground'));

export default function About() {
  const { t } = useTranslation();

  const paragraphs = ['p1','p2','p3','p4','p5','p6'];

  return (
    <section
      id="about"
      className="flex flex-col min-h-screen items-center justify-center w-full scroll-mt-20 py-20 relative overflow-hidden"
    >
      {/* Soft gradient background */}
      <Suspense fallback={<div className="w-full h-96 bg-linear-to-b from-blue-950 to-purple-950" />}>
        <AboutBackground />
      </Suspense>

      <Reveal animation="fade-up">
        <div className="max-w-5xl w-full px-10 md:px-16 py-20 rounded-3xl text-center relative z-10 shadow-md will-change-transform bg-linear-to-b from-blue-950/20 via-indigo-950/10 to-purple-950/20">
          {/* Section title */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
              {t('about.title')}
            </h1>
          </div>

          {/* Paragraphs mapped from array */}
          <div className="flex flex-col gap-10 text-left text-white text-lg md:text-xl leading-relaxed mx-auto max-w-3xl">
            {paragraphs.map((key, index) => (
              <p
                key={key}
                className={index === 0 ? 'first-letter:text-5xl first-letter:font-extrabold first-letter:text-indigo-600 first-letter:mr-2' : ''}
                dangerouslySetInnerHTML={{ __html: t(`about.${key}`) }}
              />
            ))}
          </div>

          {/* Decorative line */}
          <div className="mt-16 w-32 h-1.5 mx-auto bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full" />
        </div>
      </Reveal>
    </section>
  );
}
