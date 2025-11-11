import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { MdOutlineLanguage } from 'react-icons/md';

export const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setOpen(false);
  };

  const languages = [
    { code: 'en', flag: '🇺🇸' },
    { code: 'es', flag: '🇪🇸' },
  ];

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
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center justify-center text-xl cursor-pointer"
      >
        <MdOutlineLanguage className='text-2xl'/>
      </button>

      {open && (
        <div className="absolute left-1/2 top-full -translate-x-1/2 mt-2 bg-[var(--second-bg-color)] rounded-lg p-2 flex flex-col shadow-lg gap-2">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => changeLanguage(lang.code)}
              className={`flex items-center px-3 py-1 cursor-pointer gap-2 rounded-md transition-colors duration-200 hover:bg-gray-700 ${
                i18n.language === lang.code ? 'bg-blue-600 font-semibold' : ''
              }`}
            >
              <span className="text-xl">{lang.flag}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
