import { useTranslation } from 'react-i18next';
import { Reveal } from '../hooks/useScrollReveal';
import { lazy, Suspense } from 'react';

// Lazy load del background para mejorar el tiempo de carga inicial
const SkillsBackground = lazy(() => import('../components/skills/ui/SkillsBackground'));
const SkillsGrid = lazy(() => import('../components/skills/ui/SkillsGrid'));

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section
      id="skills"
      className="flex flex-col min-h-screen items-center justify-center w-full scroll-mt-20 relative overflow-hidden"
    >
      {/* Lazy load background */}
      <Suspense fallback={<div className="absolute inset-0 bg-linear-to-b from-blue-950 to-purple-950" />}>
        <SkillsBackground />
      </Suspense>

      <Reveal animation="fade-up">
        <div className="max-w-7xl w-full p-4 md:p-10 rounded-2xl text-center relative z-10 shadow-md will-change-transform ">
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              {t('skills.title')}
            </h1>
          </div>

          {/* Lazy load SkillsGrid */}
          <Suspense fallback={<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-12" />}>
            <SkillsGrid />
          </Suspense>
        </div>
      </Reveal>
    </section>
  );
}
