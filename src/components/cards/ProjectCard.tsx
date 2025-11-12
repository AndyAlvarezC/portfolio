import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X, ExternalLink, Code2 } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  extended: string;
  features: string[];
  image: string;
  link: string;
  code: string;
  skills: React.ReactElement[];
}

  
export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  extended,
  features,
  image,
  link,
  code,
  skills,
}) => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false)

  const handleOpenModal = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      {/* Tarjeta principal */}
      <div
        className="group project-card rounded-2xl overflow-hidden bg-white transition-all duration-500 hover:scale-[1.03] cursor-pointer relative border border-gray-100 flex flex-col"
        onClick={handleOpenModal}
        style={{
          boxShadow: '0 10px 40px -10px rgba(0, 0, 0, 0.1)',
        }}
      >
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-indigo-500/0 group-hover:from-blue-500/5 group-hover:to-indigo-500/5 transition-all duration-500 z-10 pointer-events-none" />

        {/* Imagen */}
        <div className="relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Contenido */}
        <div className="p-7 relative z-20 flex flex-col flex-1">
          <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-600 text-sm mb-5 leading-relaxed line-clamp-2 flex-1">
            {description}
          </p>

          {/* Skills */}
          <div className="flex flex-wrap gap-2.5 mb-6">
            {skills.map((Skill, index) => (
              <div
                key={index}
                className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-xl text-xl shadow-sm hover:shadow-md hover:scale-110 transition-all duration-300 border border-blue-100/50"
              >
                {Skill}
              </div>
            ))}
          </div>

          {/* Botones de acción */}
          <div className="flex flex-row gap-3 mt-auto pt-5 border-t border-gray-100">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 text-center text-blue-600 font-semibold hover:text-blue-700 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-blue-50"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4" />
              <span className="text-sm">Demo</span>
            </a>
            <a
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 text-center text-gray-700 font-semibold hover:text-gray-900 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-gray-50"
              onClick={(e) => e.stopPropagation()}
            >
              <Code2 className="w-4 h-4" />
              <span className="text-sm">Código</span>
            </a>
          </div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/80 backdrop-blur-sm z-50 p-4 animate-in fade-in duration-300"
          onClick={handleOpenModal}
        >
          <div
            className="w-full max-w-5xl max-h-[92vh] bg-white flex flex-col text-black rounded-3xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()}
            style={{
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
            }}
          >
            {/* Header with gradient and image */}
            <div className="relative h-80 overflow-hidden">
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/95 via-indigo-600/95 to-purple-600/95 z-10" />
              
              {/* Background image with blur */}
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover opacity-30"
              />

              {/* Close button */}
              <button
                onClick={handleOpenModal}
                className="absolute top-6 right-6 z-20 bg-white/10 backdrop-blur-md hover:bg-white/20 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 border border-white/20 cursor-pointer"
                aria-label="Cerrar modal"
              >
                <X className="w-6 h-6 text-white" />
              </button>

              {/* Title overlay */}
              <div className="absolute bottom-0 left-0 right-0 z-20 p-8 pb-10">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 drop-shadow-2xl">
                  {title}
                </h2>
                <div className="flex flex-wrap gap-2">
                  {skills.slice(0, 5).map((Skill, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl text-xl border border-white/30 shadow-lg"
                    >
                      <span className="taxt-white filter drop-shadow-md">{Skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Scrollable content */}
            <div className="flex-1 overflow-y-auto p-8 md:p-10 bg-gradient-to-b from-gray-50 to-white">
              
              {/* Technologies section */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
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
                      className="flex items-center gap-3 bg-gradient-to-br from-white to-blue-50 border border-blue-100 px-5 py-3 rounded-2xl text-2xl hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md"
                    >
                      {Skill}
                    </div>
                  ))}
                </div>
              </div>

              {/* Description section */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-2xl">📋</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {t('projects.modal.description')}
                  </h3>
                </div>
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                  <p className="text-gray-700 leading-7 whitespace-pre-line">
                    {extended}
                  </p>
                </div>
              </div>

              {/* Features section */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center shadow-lg">
                    <span className="text-2xl">✨</span>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    {t('projects.modal.features')}
                  </h3>
                </div>
                <div className="grid gap-3">
                  {features.map((feature: string, index: number) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 hover:border-blue-200"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center shadow-sm">
                        <span className="text-white font-bold text-sm">{index + 1}</span>
                      </div>
                      <span className="flex-1 text-gray-700 pt-1">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-8 border-t-2 border-gray-200">
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-bold py-5 px-8 rounded-2xl text-center transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02] group"
                >
                  <ExternalLink className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>{t('projects.links.web')}</span>
                </a>
                <a
                  href={code}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-3 bg-gradient-to-r from-gray-800 via-gray-900 to-black hover:from-gray-900 hover:via-black hover:to-gray-900 text-white font-bold py-5 px-8 rounded-2xl text-center transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-[1.02] group"
                >
                  <Code2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>{t('projects.links.code')}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};