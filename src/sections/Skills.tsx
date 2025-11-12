import { useTranslation } from 'react-i18next';
import Cards from '../components/cards/SkillCard';
import { Reveal } from '../hooks/useScrollReveal';

export default function Skills() {
  const { t } = useTranslation();
  return (
    <>
      <section
        id="skills"
        className="flex flex-col min-h-screen items-center justify-center w-full scroll-mt-20 relative overflow-hidden"
      >
        {/* Gradient background decorations */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-400/10 rounded-full blur-3xl" />
        
        <Reveal animation="fade-up">
          <div className="max-w-7xl w-full p-10 rounded-2xl text-center relative z-10">
            {/* Title with gradient */}
            <div className="mb-16">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
                {t('skills.title')}
              </h1>
              <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full mx-auto" />
            </div>
            <Cards />
          </div>
        </Reveal>
      </section>
    </>
  );
}