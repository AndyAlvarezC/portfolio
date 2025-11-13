import { MdDownload } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import { useActiveSection } from '../../../hooks/useActiveSection';
import { LanguageSelector } from './LanguageSelector';
import Button from '../../ui/Button';
import handleScroll from '../../../utils/handleScroll';
import handleDownload from '../../../utils/handleDownload';
import { memo } from 'react';

interface NavLinksProps {
  isMobile?: boolean;
  onClickLink?: () => void;
}

const sections = [
  { key: 'header.home', id: 'home' },
  { key: 'header.skills', id: 'skills' },
  { key: 'header.projects', id: 'projects' },
  { key: 'header.about', id: 'about' },
  { key: 'header.contact', id: 'contact' },
];

const NavLinks = memo(({ isMobile = false, onClickLink }: NavLinksProps) => {
  const activeSection = useActiveSection();
  const { t, i18n } = useTranslation();

  const cvFile =
    i18n.language === 'es' ? '/resume/CV_Andy_Álvarez.pdf' : '/resume/Resume_Andy_Álvarez.pdf';
  const cvName = i18n.language === 'es' ? 'CV_Andy_Álvarez.pdf' : 'Resume_Andy_Álvarez.pdf';

  return (
    <>
      {sections.map((section) => (
        <a
          key={section.id}
          onClick={() => {
            handleScroll(section.id);
            onClickLink?.();
          }}
          className={`
            relative font-semibold tracking-wide cursor-pointer select-none
            transition-all duration-300
            ${isMobile ? 'text-white text-lg md:text-xl' : 'text-gray-200 text-lg'}
            hover:text-white
            ${
              activeSection === section.id
                ? 'text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400'
                : ''
            }
            ${
              !isMobile
                ? 'after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-0.5 after:bg-linear-to-r after:from-blue-500 after:to-purple-500 after:rounded-full after:transition-all after:duration-300 hover:after:w-3/4'
                : ''
            }
            ${!isMobile && activeSection === section.id ? 'after:w-3/4' : ''}
          `}
        >
          {t(section.key)}
        </a>
      ))}

      <div className={`cursor-pointer ${isMobile ? 'mt-4 sm:mt-5 md:mt-6' : 'ml-4'}`}>
        <LanguageSelector />
      </div>

      <Button
        text={t('header.resume')}
        onClickEvent={() => handleDownload(cvFile, cvName)}
        size={isMobile ? 'md' : 'md'}
        className={`${isMobile ? 'mt-3 sm:mt-4 md:mt-5' : 'ml-6'}`}
      >
        <MdDownload
          className={`${isMobile ? 'text-sm sm:text-base md:text-lg' : 'text-lg'} align-middle -mb-0.5 text-white`}
        />
      </Button>
    </>
  );
});

export default NavLinks;