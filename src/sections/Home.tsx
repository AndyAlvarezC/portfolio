// Imports
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

import Section from '../components/ui/Section';
import TextAnimation from '../components/ui/TextAnimation';
import Button from '../components/ui/Button';

import { Reveal } from '../hooks/useScrollReveal';
import handleScroll from '../utils/handleScroll';

// Home section component
export default function Home() {
  const { t } = useTranslation();

  return (
    <Section id="home" className="px-4">
      {/* Fade-in animation wrapper */}
      <Reveal animation="fade-up">
        {/* Title and animated subtitle */}
        <div className="flex flex-col items-center justify-center md:gap-y-4">
          <h1 className="flex items-center justify-center text-2xl md:text-5xl lg:text-6xl font-bold">
            {/* Left icon */}
            <FontAwesomeIcon
              icon={faCode}
              className="text-[var(--main-color)] mr-3 sm:mr-4 lg:mr-6"
            />
            {t('home.title')}
            {/* Right icon */}
            <FontAwesomeIcon
              icon={faCode}
              className="text-[var(--main-color)] ml-3 sm:ml-4 lg:ml-6"
            />
          </h1>

          {/* Animated text under the title */}
          <h3 className="pt-4">
            <TextAnimation />
          </h3>
        </div>

        {/* Call-to-action button */}
        <div className="mt-32 xl:mt-48">
          <Button
            text={t('home.button')}
            onClickEvent={() => handleScroll('contact')}
            className="m-auto py-3 px-8 font-bold text-lg md:py-4 md:px-16 md:text-xl transition duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:scale-105"
          />
        </div>
      </Reveal>
    </Section>
  );
}
