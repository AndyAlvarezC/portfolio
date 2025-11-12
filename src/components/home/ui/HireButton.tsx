import { useTranslation } from 'react-i18next';

import Button from "../../ui/Button"

import handleScroll from "../../../utils/handleScroll"

export default function HireButton() {
  const { t } = useTranslation();
  return (
    <>
      <div className="mt-28 xl:mt-40">
        <Button
          text={t('home.button')}
          onClickEvent={() => handleScroll('contact')}
          className="py-4 px-10 md:py-5 md:px-16 text-lg md:text-xl font-semibold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-xl shadow-lg transition duration-300 hover:shadow-[0_0_40px_rgba(99,102,241,0.6)] hover:scale-105 cursor-pointer"
        />
      </div>
    </>
  )
}

