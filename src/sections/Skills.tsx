import { useTranslation } from 'react-i18next';
import Cards from '../components/cards/SkillCard';

import { Reveal } from '../hooks/useScrollReveal';

export default function Skills() {
  const { t } = useTranslation();
  return (
    <>
      <section
        id="skills"
        className="flex flex-col min-h-screen items-center justify-center w-full scroll-mt-20"
      >
        <Reveal animation="fade-up">
          <div className="max-w-5xl w-full p-10 rounded-2xl text-center">
            <h1 className="text-5xl font-bold">{t('skills.title')}</h1>
            <Cards />
          </div>
        </Reveal>
      </section>
    </>
  );
}
