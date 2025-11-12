import { ExternalLink, Code2 } from 'lucide-react';
import { memo } from 'react';

interface ModalContentProps {
  extended: string;
  link: string;
  code: string;
  skills: React.ReactElement[];
  t: (key: string) => string;
}

// Memoized modal content
export const ModalContent: React.FC<ModalContentProps> = memo(
  ({ extended, link, code, skills, t }) => {
    return (
      <div className="flex-1 overflow-y-auto p-6 md:p-10 bg-linear-to-b from-gray-50 to-white">
        {/* Technologies */}
        <section className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-linear-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-2xl">🛠️</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              {t('projects.modal.technologies')}
            </h3>
          </div>

          <div className="flex flex-wrap gap-3">
            {skills.map((Skill, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-linear-to-br from-white to-blue-50 border border-blue-100 px-4 py-2 rounded-2xl text-2xl hover:scale-105 transition-transform duration-300 shadow-sm hover:shadow-md"
              >
                {Skill}
              </div>
            ))}
          </div>
        </section>

        {/* Description */}
        <section className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-linear-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-2xl">📋</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">
              {t('projects.modal.description')}
            </h3>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-gray-100 shadow-sm">
            <p className="text-gray-700 leading-7 whitespace-pre-line">{extended}</p>
          </div>
        </section>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t-2 border-gray-200">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-3 bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold py-4 px-6 rounded-2xl text-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
          >
            <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>{t('projects.links.web')}</span>
          </a>

          <a
            href={code}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-3 bg-linear-to-r from-gray-800 via-gray-900 to-black hover:from-gray-900 hover:via-black hover:to-gray-900 text-white font-bold py-4 px-6 rounded-2xl text-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group"
          >
            <Code2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>{t('projects.links.code')}</span>
          </a>
        </div>
      </div>
    );
  }
);

export default ModalContent;
