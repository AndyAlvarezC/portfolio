import { useTranslation } from 'react-i18next';
import SocialCard from '../components/cards/SocialCard';
import Form from '../components/ui/form/Form';
import { Reveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const { t } = useTranslation();
  return (
    <section
      id="contact"
      className="flex flex-col min-h-screen items-center justify-center w-full relative overflow-hidden py-20"
    >
      {/* Gradient background decorations */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-400/10 rounded-full blur-3xl" />
      
      <div className="w-[90%] lg:w-full max-w-6xl relative z-10">
        <Reveal animation="fade-up">
          {/* Title with gradient */}
          <div className="mb-20 text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              {t("contact.title")}
            </h1>
            <div className="w-24 h-1.5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full mx-auto mb-6" />
          </div>
          
          <SocialCard />
          <Form />
        </Reveal>
      </div>
    </section>
  );
}