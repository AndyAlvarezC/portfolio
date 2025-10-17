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
      className="flex flex-col min-h-screen items-center justify-center py-16 w-full scroll-mt-20 mb-16"
      style={{ scrollMarginTop: '80px' }}
    >
      <Reveal animation="fade-up">
        <h1 className="text-5xl font-bold text-center mb-12">
          {t('projects.title')}
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 w-full max-w-7xl px-4">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.key}
              title={t(`projects.list.${project.key}.title`)}
              description={t(`projects.list.${project.key}.description`)}
              image={project.image}
              link={project.link}
              code={project.code}
              skills={project.skills}
            />
          ))}
        </div>

        <div className="m-auto pt-16 items-center justify-center text-center">
          <Button
            onClickEvent={() =>
              window.open('https://github.com/AndyAlvarezC?tab=repositories')
            }
            text={t('projects.button')}
            className="m-auto py-4 px-8 md:py-6 md:px-16 text-xl transition duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:scale-105"
          />
        </div>
      </Reveal>
    </section>
  );
}
