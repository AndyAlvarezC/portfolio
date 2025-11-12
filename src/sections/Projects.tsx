import { ProjectCard } from '../components/cards/ProjectCard';
import { projectsData } from '../data/projects';
import { Reveal } from '../hooks/useScrollReveal';
import Button from '../components/ui/Button';
import { useTranslation } from 'react-i18next';

export default function Projects() {
  const { t } = useTranslation();

  return (
    <section
      id="projects"
      className="flex flex-col min-h-screen items-center justify-center py-20 w-full scroll-mt-20 relative overflow-hidden"
      style={{ scrollMarginTop: '80px' }}
    >
      {/* Fondos degradados suaves para un efecto premium */}
      <div className="absolute top-24 left-16 w-80 h-80 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-24 right-16 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-3xl" />

      <Reveal animation="fade-up">
        <div className="max-w-7xl w-full md:p-10 rounded-2xl text-center relative z-10">
          {/* Título con degradado elegante */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              {t('projects.title')}
            </h1>
            <div className="w-24 h-1.5 bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full mx-auto" />
          </div>

          {/* Grid de proyectos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 w-full max-w-7xl px-4 mt-10">
            {projectsData.map((project) => (
              <ProjectCard
                key={project.key}
                title={t(`projects.list.${project.key}.title`)}
                description={t(`projects.list.${project.key}.description`)}
                extended={t(`projects.list.${project.key}.extended`)}
                features={t(`projects.list.${project.key}.features`, { returnObjects: true }) as string[]}
                image={project.image}
                link={project.link}
                code={project.code}
                skills={project.skills}
              />
            ))}
          </div>

          {/* Botón de más proyectos */}
          <div className="m-auto pt-20 flex items-center justify-center">
            <Button
              onClickEvent={() =>
                window.open('https://github.com/AndyAlvarezC?tab=repositories')
              }
              text={t('projects.button')}
              className="py-4 px-10 md:py-6 md:px-16 text-xl bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg transition duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.5)] hover:scale-105"
            />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
