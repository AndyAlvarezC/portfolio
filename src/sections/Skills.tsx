import { useTranslation } from 'react-i18next';

import SkillsGrid from '../components/skills/ui/SkillsGrid';
import SkillsBackground from '../components/skills/ui/SkillsBackground';

import { Reveal } from '../hooks/useScrollReveal';

export default function Skills() {
  const { t } = useTranslation();

  return (
    // Main skills section
    <section id="skills" className="flex flex-col min-h-screen items-center justify-center w-full scroll-mt-20 relative overflow-hidden">
      <SkillsBackground />

      <Reveal animation="fade-up">
        <div className="max-w-7xl w-full p-4 md:p-10 rounded-2xl text-center relative z-10">
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              {t('skills.title')}
            </h1>
          </div>
          <div>
            <SkillsGrid />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
