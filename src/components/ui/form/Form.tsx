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
  className={`group relative flex items-center justify-center w-full mx-auto font-bold text-white py-5 px-8 rounded-2xl max-w-md overflow-hidden transition-all duration-500 ${
    buttonText === t('contact.buttonText1')
      ? 'bg-linear-to-r from-green-600 to-emerald-600 shadow-xl shadow-green-500/50 scale-105'
      : buttonText === t('contact.buttonText2')
      ? 'bg-linear-to-r from-blue-600 to-indigo-600 shadow-xl shadow-blue-500/50 scale-105'
      : isFormValid
      ? 'bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/50'
      : 'bg-gray-300 cursor-not-allowed opacity-60'
  }`}
>
  {/* Shine effect for enabled button */}
  {isFormValid && buttonText === t('contact.button') && (
    <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/20 to-transparent" />
  )}
  
  <span className="relative z-10 flex items-center gap-3">
    {buttonText}
    <FaPaperPlane className={`transition-transform duration-300 ${
      isFormValid && buttonText === t('contact.button') ? 'group-hover:translate-x-1 group-hover:-translate-y-1' : ''
    }`} />
  </span>
</button>
      </form>
    </div>
  );
}
