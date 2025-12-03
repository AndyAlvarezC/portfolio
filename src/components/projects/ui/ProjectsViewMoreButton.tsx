import { useTranslation } from 'react-i18next';
import Button from '../../ui/Button';

export default function ProjectsViewMoreButton() {
  const { t } = useTranslation();
  return (
    <>
      {/* Button that links to more projects on GitHub */}
      <div className="m-auto pt-20 flex items-center justify-center">
        <Button
          onClickEvent={() =>
            window.open('https://github.com/AndyAlvarezC?tab=repositories')
          }
          text={t('projects.button')}
          className="py-4 px-10 md:py-6 md:px-16 text-xl bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg transition duration-200 hover:shadow-[0_0_40px_rgba(99,102,241,0.5)] hover:scale-105 cursor-pointer"
        />
      </div>
    </>
  );
}
