import ProjectsBackground from '../components/projects/ui/ProjectsBackground';
import ProjectsGrid from '../components/projects/ui/ProjectsGrid';
import ProjectsViewMoreButton from '../components/projects/ui/ProjectsViewMoreButton';

import { Reveal } from '../hooks/useScrollReveal';
import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className="flex flex-col min-h-screen items-center justify-center py-20 w-full scroll-mt-20 relative overflow-hidden"
      style={{ scrollMarginTop: '80px' }}
    >
      {/* Gradient background decorations */}
      <ProjectsBackground />

      {/* Fade-up animation wrapper for smooth appearance */}
      <Reveal animation="fade-up">
        <div className="max-w-7xl w-full md:p-10 rounded-2xl text-center relative z-10">
          
          {/* Section title with gradient text styling */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              {t('projects.title')}
            </h1>
          </div>

          {/* Projects grid layout */}
          <div>
            <ProjectsGrid />
          </div>

          {/* Button that links to more projects on GitHub */}
          <div>
            <ProjectsViewMoreButton />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
