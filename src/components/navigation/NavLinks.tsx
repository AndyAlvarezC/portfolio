import { MdDownload } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import Button from '../ui/Button';
import { useActiveSection } from '../../hooks/useActiveSection';
import handleScroll from '../../utils/handleScroll';
import handleDownload from '../../utils/handleDownload';
import { LanguageSelector } from '../ui/LanguageSelector';

interface NavLinksProps {
  isMobile?: boolean;
  onClickLink?: () => void;
}

interface SectionItem {
  key: string;
  id: string;
}

const sections: SectionItem[] = [
  { key: 'header.home', id: 'home' },
  { key: 'header.skills', id: 'skills' },
  { key: 'header.projects', id: 'projects' },
  { key: 'header.about', id: 'about' },
  { key: 'header.contact', id: 'contact' },
];

export default function NavLinks({
  isMobile = false,
  onClickLink,
}: NavLinksProps) {
  const activeSection = useActiveSection();
  const { t } = useTranslation();

  return (
    <>
      {/* Render navigation links */}
      {sections.map((section) => (
        <a
          key={section.id}
          onClick={() => {
            handleScroll(section.id);
            onClickLink?.();
          }}
          className={`
            relative font-semibold tracking-wide cursor-pointer select-none
            transition-all duration-300 ease-out
            ${isMobile ? 'text-white text-2xl' : 'text-gray-200 text-lg'}
            hover:text-white
            ${activeSection === section.id ? 'text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400' : ''}
            ${!isMobile ? 'after:absolute after:-bottom-1 after:left-1/2 after:translate-x-[-50%] after:w-0 after:h-0.5 after:bg-linear-to-r after:from-blue-500 after:to-purple-500 after:rounded-full after:transition-all after:duration-300 hover:after:w-3/4' : ''}
            ${!isMobile && activeSection === section.id ? 'after:w-3/4' : ''}
          `}
        >
          {t(section.key)}
        </a>
      ))}

      {/* Language selector */}
      <div className={`cursor-pointer ${isMobile ? 'mt-8' : 'ml-4'}`}>
        <LanguageSelector />
      </div>

      {/* Download CV button */}
      <Button
        text={t('header.resume')}
        onClickEvent={() =>
          handleDownload('/Resume_Andy_Álvarez.pdf', 'Resume_Andy_Álvarez.pdf')
        }
        className={`
          ${isMobile ? 'mt-6 px-8 py-4 text-xl' : 'ml-6 px-5 py-2.5 text-sm md:text-base'}
          bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600
          hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700
          shadow-md shadow-indigo-900/30
          hover:shadow-[0_0_25px_rgba(99,102,241,0.5)]
          hover:scale-[1.05]
          rounded-xl transition-all duration-300 ease-out cursor-pointer
        `}
      >
        <MdDownload
          className={`${isMobile ? 'text-2xl' : 'text-lg'} align-middle -mb-0.5 text-white`}
        />
      </Button>
    </>
  );
}
