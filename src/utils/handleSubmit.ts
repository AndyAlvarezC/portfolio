import { FormEvent, Dispatch, SetStateAction } from 'react';
import { TFunction } from 'i18next';
import { validateInputs } from '../components/ui/form/validators';

const BACKEND_URL =
  import.meta.env.VITE_BACKEND_URL ||
  'https://portfolio-andy-alvarez-backend.vercel.app';

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const handleSubmit = async (
  e: FormEvent,
  formData: FormData,
  setFormData: Dispatch<SetStateAction<FormData>>,
  setButtonText: Dispatch<SetStateAction<string>>,
  setIsFormValid: Dispatch<SetStateAction<boolean>>,
  setFormSubmitted: Dispatch<SetStateAction<boolean>>,
  setErrors: Dispatch<
    SetStateAction<{ name: string; email: string; message: string }>
  >,
  t: TFunction
) => {
  e.preventDefault();
  setFormSubmitted(true);

  const isValid = validateInputs(formData, setErrors, t);
  if (!isValid) {
    setFormSubmitted(false);
    return;
  }

  setButtonText(t('contact.buttonText2'));

  try {
    const response = await fetch(`${BACKEND_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      setButtonText(t('contact.buttonText1'));
      setFormData({ name: '', email: '', message: '' });
      setIsFormValid(false);
      setFormSubmitted(false);
      setTimeout(() => setButtonText(t('contact.button')), 2000);
    } else {
      setButtonText(t('contact.button'));
      alert(
        result.message || t('contact.error') || 'Error al enviar el formulario'
      );
    }
  } catch (error) {
    console.error(error);
    setButtonText(t('contact.button'));
    alert(t('contact.error') || 'Error al enviar el formulario');
  }
};
