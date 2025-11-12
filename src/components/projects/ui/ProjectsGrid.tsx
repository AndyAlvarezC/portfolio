import { projectsData } from "../../../data/projects";
import { ProjectCard } from "./projectCard/ProjectCard";
import { useTranslation } from "react-i18next";

export default function ProjectsGrid() {
  const { t } = useTranslation();

  return (
    <>
      {/* Projects grid layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 w-full max-w-7xl px-4 mt-10">
        {projectsData.map((project) => (
          <ProjectCard
            key={project.key}
            title={t(`projects.list.${project.key}.title`)}
            description={t(`projects.list.${project.key}.description`)}
            extended={t(`projects.list.${project.key}.extended`)}
            image={project.image}
            link={project.link}
            code={project.code}
            skills={project.skills}
          />
        ))}
      </div>
    </>
  );
}
