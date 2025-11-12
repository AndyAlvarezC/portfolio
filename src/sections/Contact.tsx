import { useTranslation } from 'react-i18next';

import { Reveal } from '../hooks/useScrollReveal';
import ContactSocialCard from '../components/contact/ui/ContactSocialCard';
import ContactForm from '../components/contact/ui/ContactForm';
import ContactBackground from '../components/contact/ui/ContactBackground';

export default function Contact() {
  const { t } = useTranslation();
  return (
    <section
      id="contact"
      className="flex flex-col min-h-screen items-center justify-center w-full relative overflow-hidden py-20"
    >
      {/* Gradient background decorations */}
      <div>
        <ContactBackground />
      </div>
      
      <div className="w-[90%] lg:w-full max-w-6xl relative z-10">
        <Reveal animation="fade-up">
          {/* Title with gradient */}
          <div className="mb-20 text-center">
            <h1 className="text-5xl md:text-6xl font-bold bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent mb-4">
              {t("contact.title")}
            </h1>
          </div>
          
          <div>
            <ContactSocialCard />
            <ContactForm />
          </div>
        </Reveal>
      </div>
    </section>
  );
}