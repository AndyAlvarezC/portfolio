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
      {sections.map((section) => (
        <a
          key={section.id}
          onClick={() => {
            handleScroll(section.id);
            onClickLink?.();
          }}
          className={`
            relative
            cursor-pointer 
            px-2
            ${activeSection === section.id ? 'text-[var(--main-color)]' : ''}
            ${
              !isMobile
                ? 'text-white after:absolute after:-bottom-1 after:left-1/2 after:translate-x-[-50%] after:w-0 after:h-0.5 after:bg-[var(--main-color)] after:transition-all after:duration-300 after:ease-out hover:after:w-3/4'
                : ''
            }
            ${!isMobile && activeSection === section.id ? 'after:w-3/4' : ''}
          `}
        >
          {t(section.key)}
        </a>
      ))}
      <LanguageSelector />
      <Button
        text={t('header.resume')}
        onClickEvent={() =>
          handleDownload('/Resume_Andy_Álvarez.pdf', 'Resume_Andy_Álvarez.pdf')
        }
        className="py-2 px-4 gap-1 text-lg md:text-2xl lg:text-lg"
      >
        <MdDownload
          className={`${isMobile ? 'text-2xl' : 'text-xl'} align-middle -mb-1`}
        />
      </Button>
    </>
  );
}
