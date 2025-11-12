import { useTranslation } from 'react-i18next';
import { Reveal } from '../hooks/useScrollReveal';

export default function About() {
  const { t } = useTranslation();

  return (
    <section
      id="about"
      className="flex flex-col min-h-screen justify-center items-center w-full scroll-mt-20 relative overflow-hidden"
    >
      {/* Fondos con gradientes suaves */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-32 left-16 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-400/10 rounded-full blur-3xl" />

      <Reveal animation="fade-up">
        <div className="max-w-5xl w-full px-10 md:px-16 py-20 rounded-3xl text-center relative z-10 backdrop-blur-xl shadow-2xl">
          {/* Título */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-6">
              {t('about.title')}
            </h1>
            <div className="w-24 h-1.5 bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full mx-auto" />
          </div>

          {/* Contenido principal */}
          <div className="flex flex-col gap-10 text-left text-gray-700 text-lg text-white md:text-xl leading-relaxed mx-auto max-w-3xl">
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

          {/* Línea de cierre */}
          <div className="mt-16 w-32 h-1.5 mx-auto bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full" />
        </div>
      </Reveal>
    </section>
  );
}
