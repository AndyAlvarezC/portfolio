import {
  useState,
  useEffect,
  FormEvent,
  ChangeEvent,
  useCallback,
  useMemo,
} from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import ContactFormField from './ContactFormField';
import { handleChange } from '../../../utils/handleChange';
import { handleSubmit } from '../../../utils/handleSubmit';
import { debounce } from 'lodash';

export default function ContactForm() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [buttonText, setButtonText] = useState(t('contact.buttonText'));
  const [isFormValid, setIsFormValid] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Debounced handler solo para validación, no para actualizar el estado
  const debouncedValidate = useMemo(
    () =>
      debounce(() => {
        handleChange(
          null,
          formData,
          setFormData,
          errors,
          setErrors,
          formSubmitted,
          setIsFormValid,
          t
        );
      }, 150),
    [formData, errors, formSubmitted, t]
  );

  const onChangeField = useCallback(
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;

      // Actualiza el estado inmediatamente
      setFormData((prev) => ({ ...prev, [name]: value }));

      // Validación debounced
      debouncedValidate();
    },
    [debouncedValidate]
  );

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

  useEffect(() => {
    setButtonText(t('contact.buttonText'));
  }, [t]);

  const buttonClass = useMemo(
    () =>
      isFormValid
        ? 'bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 cursor-pointer hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/50'
        : 'bg-gray-300 cursor-not-allowed opacity-60',
    [isFormValid]
  );

  return (
    <div className="flex flex-col items-center justify-center w-full pt-16">
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-14 w-full max-w-4xl"
      >
        <ContactFormField
          name="name"
          type="text"
          placeholder={t('contact.name')}
          value={formData.name}
          error={errors.name}
          onChange={onChangeField}
        />
        <ContactFormField
          name="email"
          type="email"
          placeholder={t('contact.email')}
          value={formData.email}
          error={errors.email}
          onChange={onChangeField}
        />
        <ContactFormField
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
          className={`group relative flex items-center justify-center w-full mx-auto font-bold text-white py-5 px-8 rounded-2xl max-w-md overflow-hidden transition-all duration-500 ${buttonClass}`}
        >
          <span className="relative z-10 flex items-center gap-3">
            {buttonText}
            <FaPaperPlane
              className={`transition-transform duration-200 ${
                isFormValid
                  ? 'group-hover:translate-x-1 group-hover:-translate-y-1'
                  : ''
              }`}
            />
          </span>
        </button>
      </form>
    </div>
  );
}
