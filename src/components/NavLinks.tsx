import { MdDownload } from 'react-icons/md';

import Button from './Button';

import { useActiveSection } from '../hooks/useActiveSection';
import handleScroll from '../utils/handleScroll';
import handleDownload from '../utils/handleDownload';

const sections = ['home', 'skills', 'projects', 'about', 'contact'];

const capitalize = (word: string) =>
  word.charAt(0).toUpperCase() + word.slice(1);

interface NavLinksProps {
  isMobile?: boolean;
  onClickLink?: () => void;
}
export default function NavLinks({
  isMobile = false,
  onClickLink,
}: NavLinksProps) {
  const activeSection = useActiveSection();

  return (
    <>
      {sections.map((section) => (
        <a
          key={section}
          onClick={() => {
            handleScroll(section);
            onClickLink?.();
          }}
          className={`
            relative
            cursor-pointer 
            px-2
            ${activeSection === section ? 'text-[var(--main-color)]' : ''}
            ${
              !isMobile
                ? 'text-white after:absolute after:-bottom-1 after:left-1/2 after:translate-x-[-50%] after:w-0 after:h-0.5 after:bg-[var(--main-color)] after:transition-all after:duration-300 after:ease-out hover:after:w-3/4'
                : ''
            }
            ${!isMobile && activeSection === section ? 'after:w-3/4' : ''}
          `}
        >
          {capitalize(section)}
        </a>
      ))}

      <Button
        text="Download CV"
        onClickEvent={() =>
          handleDownload(
            '/CV_Andy_Álvarez_Criado.pdf',
            'CV_Andy_Álvarez_Criado.pdf'
          )
        }
        className="py-2 px-4 gap-1 text-lg"
      >
        <MdDownload
          className={`${isMobile ? 'text-2xl' : 'text-xl'} align-middle -mb-1`}
        />
      </Button>
    </>
  );
}
