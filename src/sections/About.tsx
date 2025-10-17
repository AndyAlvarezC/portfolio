import { useTranslation } from 'react-i18next';
import { Reveal } from '../hooks/useScrollReveal';

export default function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="flex flex-col min-h-screen justify-center items-center py-26 w-full scroll-mt-20 mb-16"
    >
      {/* Scroll reveal animation */}
      <Reveal animation="fade-up">
        <div className="max-w-5xl w-full p-10 rounded-2xl text-center">
          <h1 className="text-5xl font-bold mb-8">{t('about.title')}</h1>

          {/* Main content */}
          <div className="text-xl text-left gap-12 flex flex-col items-center justify-center mt-16 mb-8">
            <p dangerouslySetInnerHTML={{ __html: t('about.p1') }} />

            <p dangerouslySetInnerHTML={{ __html: t('about.p2') }} />

            <p dangerouslySetInnerHTML={{ __html: t('about.p3') }} />

            <p dangerouslySetInnerHTML={{ __html: t('about.p4') }} />

            <p dangerouslySetInnerHTML={{ __html: t('about.p5') }} />

            <p dangerouslySetInnerHTML={{ __html: t('about.p6') }} />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
