import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { MdOutlineLanguage } from 'react-icons/md';

export const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Function to change the language and close dropdown
  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setOpen(false);
  };

  // List of available languages with flags
  const languages = [
    { code: 'en', flag: '🇺🇸' },
    { code: 'es', flag: '🇪🇸' },
  ];

  // Close dropdown if clicked outside of component
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative select-none" ref={ref}>
      {/* Language button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center justify-center text-2xl cursor-pointer 
                text-gray-300 hover:text-white transition-all duration-300
                  hover:scale-110 focus:outline-none"
      >
        <MdOutlineLanguage
          className="drop-shadow-[0_0_6px_rgba(99,102,241,0.6)] hover:drop-shadow-[0_0_10px_rgba(99,102,241,0.8)] 
                    transition-all duration-300 ease-out"
        />
      </button>

      {/* Dropdown menu */}
      {open && (
        <div
          className="absolute left-1/2 top-full -translate-x-1/2 mt-3 w-[90px]
                    bg-linear-to-b from-[#0f172a] via-[#1e1b4b] to-[#312e81]
                    rounded-xl shadow-lg shadow-indigo-900/40 p-2
                    flex flex-col gap-2 z-50 backdrop-blur-md border border-indigo-600/30
                    animate-fade-in"
        >
          {/* Render each language option */}
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`
                flex items-center justify-center gap-2 py-1.5 text-lg rounded-md
                transition-all duration-300 ease-out cursor-pointer
                ${i18n.language === lang.code
                  ? 'bg-linear-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-md shadow-indigo-800/30 scale-[1.05]'
                  : 'hover:bg-indigo-700/60 hover:scale-[1.05] text-gray-300'}
              `}
            >
              <span className="text-xl">{lang.flag}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
