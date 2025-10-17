import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const LanguageSelector = () => {
  const { i18n } = useTranslation();
  const [open, setOpen] = useState(false);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="text-xl cursor-pointer"
      >
        🌐
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 mt-2 bg-white text-black shadow-lg rounded p-2 flex flex-col">
          <button
            onClick={() => changeLanguage('en')}
            className="hover:bg-gray-100 px-3 py-1 text-left cursor-pointer"
          >
            English
          </button>
          <button
            onClick={() => changeLanguage('es')}
            className="hover:bg-gray-100 px-3 py-1 text-left cursor-pointer"
          >
            Español
          </button>
        </div>
      )}
    </div>
  );
};
