import { useTranslation } from 'react-i18next';
import { Reveal } from '../hooks/useScrollReveal';
import AboutBackground from '../components/about/ui/AboutBackground';

export default function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="flex flex-col min-h-screen justify-center items-center w-full scroll-mt-20 relative overflow-hidden"
    >
      {/* Soft gradient backgrounds */}
      <AboutBackground />

      <Reveal animation="fade-up">
        <div className="max-w-5xl w-full px-10 md:px-16 py-20 rounded-3xl text-center relative z-10 shadow-2xl">
          {/* Title */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
              {t('about.title')}
            </h1>
          </div>

          {/* Main content */}
          <div className="flex flex-col gap-10 text-left text-white text-lg md:text-xl leading-relaxed mx-auto max-w-3xl">
            <p
              className="first-letter:text-5xl first-letter:font-extrabold first-letter:text-indigo-600 first-letter:mr-2"
              dangerouslySetInnerHTML={{ __html: t('about.p1') }}
            />

            <p dangerouslySetInnerHTML={{ __html: t('about.p2') }} />
            <p dangerouslySetInnerHTML={{ __html: t('about.p3') }} />
            <p dangerouslySetInnerHTML={{ __html: t('about.p4') }} />
            <p dangerouslySetInnerHTML={{ __html: t('about.p5') }} />
            <p dangerouslySetInnerHTML={{ __html: t('about.p6') }} />
          </div>

          {/* Closing line */}
          <div className="mt-16 w-32 h-1.5 mx-auto bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full" />
        </div>
      </Reveal>
    </section>
  );
}
