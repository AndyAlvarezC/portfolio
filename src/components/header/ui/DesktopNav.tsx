import { useTranslation } from 'react-i18next';
import { useActiveSection } from '../../../hooks/useActiveSection';
import handleScroll from '../../../utils/handleScroll';
import { memo } from 'react';

const sections = [
  { key: 'header.home', id: 'home' },
  { key: 'header.skills', id: 'skills' },
  { key: 'header.projects', id: 'projects' },
  { key: 'header.about', id: 'about' },
  { key: 'header.contact', id: 'contact' },
];

function DesktopNavComponent() {
  const activeSection = useActiveSection();
  const { t } = useTranslation();

  return (
    <nav className="hidden lg:block">
      <ul className="flex gap-8 items-center">
        {sections.map((section) => {
          const isActive = activeSection === section.id;

          return (
            <li key={section.id}>
              <a
                onClick={() => handleScroll(section.id)}
                className={`
                  relative font-semibold tracking-wide cursor-pointer select-none
                  transition-colors duration-200 text-lg
                  ${
                    isActive
                      ? 'text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-indigo-400 to-purple-400 hover:text-white'
                      : 'text-transparent bg-clip-text bg-white hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-blue-400 hover:via-indigo-400 hover:to-purple-400'
                  }
                  after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 
                  after:h-0.5 after:rounded-full after:transition-all after:duration-200
                  ${
                    isActive
                      ? 'after:w-3/4 after:bg-linear-to-r after:from-blue-500 after:to-purple-500'
                      : 'after:w-0 hover:after:w-3/4 after:bg-linear-to-r after:from-blue-500 after:to-purple-500'
                  }
                `}
              >
                {t(section.key)}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default memo(DesktopNavComponent);
