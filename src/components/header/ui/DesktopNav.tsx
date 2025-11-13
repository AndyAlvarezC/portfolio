import { useTranslation } from 'react-i18next';
import { useActiveSection } from '../../../hooks/useActiveSection';
import handleScroll from '../../../utils/handleScroll';

const sections = [
  { key: 'header.home', id: 'home' },
  { key: 'header.skills', id: 'skills' },
  { key: 'header.projects', id: 'projects' },
  { key: 'header.about', id: 'about' },
  { key: 'header.contact', id: 'contact' },
];

export default function DesktopNav() {
  const activeSection = useActiveSection();
  const { t } = useTranslation();

  return (
    <nav className="hidden lg:block">
      <ul className="flex gap-8 items-center">
        {sections.map((section) => (
          <li key={section.id}>
            <a
              onClick={() => handleScroll(section.id)}
              className={`
                relative font-semibold tracking-wide cursor-pointer select-none
                transition-all duration-300 text-lg text-white
                hover:text-white
                ${
                  activeSection === section.id
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400'
                    : ''
                }
                after:absolute after:-bottom-1 after:left-1/2 after:-translate-x-1/2 
                after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-blue-500 after:to-purple-500 
                after:rounded-full after:transition-all after:duration-300 
                hover:after:w-3/4
                ${activeSection === section.id ? 'after:w-3/4' : ''}
              `}
            >
              {t(section.key)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
