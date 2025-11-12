import { useTranslation } from 'react-i18next';
import { Reveal } from '../hooks/useScrollReveal';
import { memo, lazy, Suspense } from 'react';
import ContactBackground from '../components/contact/ui/ContactBackground';

const ContactForm = lazy(() => import('../components/contact/ui/ContactForm'));
const ContactSocialCard = lazy(() => import('../components/contact/ui/ContactSocialCard'));

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section
      id="contact"
      className="flex flex-col min-h-screen items-center justify-center w-full relative overflow-hidden py-20 scroll-mt-20"
      style={{ scrollMarginTop: '80px' }}
    >
      <ContactBackground />

      <div className="w-[90%] lg:w-full max-w-6xl relative z-10">
        <Reveal animation="fade-up" className="transform will-change-transform">
          <div className="mb-20 text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              {t('contact.title')}
            </h1>
          </div>

          <Suspense fallback={<p className="text-center py-10 text-gray-400">Cargando...</p>}>
            <ContactSocialCard />
            <ContactForm />
          </Suspense>
        </Reveal>
      </div>
    </section>
  );
}

export const MemoizedContact = memo(Contact);
