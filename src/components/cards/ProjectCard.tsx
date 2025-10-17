import { useTranslation } from 'react-i18next';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  code: string;
  skills: React.ReactElement[];
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  link,
  code,
  skills,
}) => {
  const { t } = useTranslation();
  return (
    <div className="project-card  rounded-lg overflow-hidden shadow-lg bg-gray-100 transition-all ease-in-out duration-300 hover:scale-102 cursor-pointer">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover shadow-sm"
      />
      <div className="p-4">
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-700">{description}</p>
        <div className="flex gap-2 mt-2">
          {skills.map((Skill, index) => (
            <div key={index} className="flex items-center gap-2 text-xl">
              {Skill}
            </div>
          ))}
        </div>
        <div className="flex flex-row gap-6">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 block mt-4 font-bold hover:underline"
          >
            {t('projects.links.web')}
          </a>
          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 block mt-4 font-bold hover:underline"
          >
            {t('projects.links.code')}
          </a>
        </div>
      </div>
    </div>
  );
};
