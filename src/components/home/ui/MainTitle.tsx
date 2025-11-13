import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { useTranslation } from 'react-i18next';

export default function MainTitle() {
  const { t } = useTranslation();

  return (
    <>
      {/* Main title with gradient */}
      <h1 className="flex items-center justify-center text-3xl md:text-6xl lg:text-7xl font-bold bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
        <FontAwesomeIcon
          icon={faCode}
          className="text-blue-600 mr-4 drop-shadow-[0_0_10px_rgba(59,130,246,0.5)]"
        />
        {t('home.title')}
        <FontAwesomeIcon
          icon={faCode}
          className="text-purple-600 ml-4 drop-shadow-[0_0_10px_rgba(139,92,246,0.5)]"
        />
      </h1>
    </>
  );
}
