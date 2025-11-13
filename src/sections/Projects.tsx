import { useTranslation } from 'react-i18next';
import { Reveal } from '../hooks/useScrollReveal';
import { lazy, Suspense } from 'react';

// Lazy-load heavy components to improve initial load performance
const ProjectsBackground = lazy(() => import('../components/projects/ui/ProjectsBackground'));
const ProjectsGrid = lazy(() => import('../components/projects/ui/ProjectsGrid'));
const ProjectsViewMoreButton = lazy(
  () => import('../components/projects/ui/ProjectsViewMoreButton')
);

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className="flex flex-col min-h-screen items-center justify-center w-full scroll-mt-20 py-20 relative overflow-hidden"
      style={{ scrollMarginTop: '80px' }}
    >
      {/* Lazy-loaded background */}
      <Suspense
        fallback={<div className="absolute inset-0 bg-linear-to-b from-blue-950 to-purple-950" />}
      >
        <ProjectsBackground />
      </Suspense>

      {/* Main content */}
      <Reveal animation="fade-up">
        <div className="max-w-7xl w-full md:p-10 rounded-2xl text-center relative z-10 shadow-md will-change-transform ">
          {/* Section title  */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              {t('projects.title')}
            </h1>
          </div>

          {/* Projects grid */}
          <Suspense
            fallback={<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8" />}
          >
            <ProjectsGrid />
          </Suspense>

          <Suspense fallback={<div className="mt-8 h-12 w-48 bg-gray-700 rounded-lg mx-auto" />}>
            <ProjectsViewMoreButton />
          </Suspense>
        </div>
      </Reveal>
    </section>
  );
}
