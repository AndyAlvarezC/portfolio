import { useState, FormEvent, ChangeEvent } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

import FormField from './FormField';
import { handleChange } from '../../../utils/handleChange';
import { handleSubmit } from '../../../utils/handleSubmit';

export default function Form() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [buttonText, setButtonText] = useState(t('contact.button'));
  const [isFormValid, setIsFormValid] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const onSubmit = (e: FormEvent) => {
    handleSubmit(
      e,
      formData,
      setFormData,
      setButtonText,
      setIsFormValid,
      setFormSubmitted,
      setErrors,
      t
    );
  };

  const onChangeField = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    handleChange(
      e,
      formData,
      setFormData,
      errors,
      setErrors,
      formSubmitted,
      setIsFormValid,
      t
    );
  };

  return (
    <div className="flex flex-col items-center justify-center w-full pt-16">
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-14 w-full max-w-4xl"
      >
        <FormField
          name="name"
          type="text"
          placeholder={t('contact.name')}
          value={formData.name}
          error={errors.name}
          onChange={onChangeField}
        />
        <FormField
          name="email"
          type="email"
          placeholder={t('contact.email')}
          value={formData.email}
          error={errors.email}
          onChange={onChangeField}
        />
        <FormField
          name="message"
          type="textarea"
          placeholder={t('contact.message')}
          value={formData.message}
          error={errors.message}
          onChange={onChangeField}
        />

        <button
          type="submit"
          disabled={!isFormValid}
          className={`flex items-center justify-center w-full mx-auto font-bold text-white p-4 rounded-lg shadow-[0px_0px_20px_rgba(37,99,235,0.5)] max-w-sm 
            hover:shadow-[0px_0px_20px_rgba(37,99,235,1)] transition-all ease-in-out duration-300 hover:scale-105 ${
              buttonText === t('contact.buttonText1')
                ? 'bg-green-600 shadow-green-600 scale-105'
                : buttonText === t('contact.buttonText2')
                ? 'bg-blue-600 shadow-[0px_0px_20px_rgba(37,99,235,1)] scale-105'
                : isFormValid
                ? 'bg-blue-600 cursor-pointer'
                : 'bg-[var(--main-bg-color)] cursor-not-allowed'
            }`}
        >
          {buttonText} <FaPaperPlane className="ml-2 rotate-45" />
        </button>
      </form>
    </div>
  );
}
