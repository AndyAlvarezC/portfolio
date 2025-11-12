import { ExternalLink, Code2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { memo } from 'react';

interface ProjectCardPreviewProps {
  title: string;
  description: string;
  image: string;
  link: string;
  code: string;
  skills: React.ReactElement[];
  onOpen: () => void;
}

// Memoized preview card for performance
export const ProjectCardPreview: React.FC<ProjectCardPreviewProps> = memo(
  ({ title, description, image, link, code, skills, onOpen }) => {
    const { t } = useTranslation();

    return (
      <div
        className="group project-card rounded-2xl overflow-hidden bg-white transition-all duration-500 hover:scale-[1.03] cursor-pointer relative border border-gray-100 flex flex-col"
        onClick={onOpen}
        style={{ boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)' }}
      >
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-linear-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 transition-all duration-500 z-10 pointer-events-none" />

        {/* Image section */}
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/50 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Content section */}
        <div className="p-7 relative z-20 flex flex-col flex-1">
          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h3>

          <p className="text-gray-600 text-sm mb-5 leading-relaxed line-clamp-2 flex-1 font-semibold text-left">
            {description}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2.5 mb-6">
            {skills.map((Skill, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-10 h-10 bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-xl text-xl shadow-sm hover:shadow-md hover:scale-110 transition-transform duration-300 border border-blue-100/50"
              >
                {Skill}
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 flex items-center justify-center gap-3 bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold py-3 px-4 rounded-2xl text-center transition-transform duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
            >
              <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>{t('projects.links.web')}</span>
            </a>

            <a
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="flex-1 flex items-center justify-center gap-3 bg-linear-to-r from-gray-800 via-gray-900 to-black hover:from-gray-900 hover:via-black hover:to-gray-900 text-white font-bold py-3 px-4 rounded-2xl text-center transition-transform duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
            >
              <Code2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>{t('projects.links.code')}</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
);

export default ProjectCardPreview;
