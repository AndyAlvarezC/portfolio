import { Dispatch, SetStateAction, FormEvent } from 'react';

import { validateInputs } from '../components/ui/form/validators';

const BACKEND_URL =
  import.meta.env.VITE_BACKEND_URL ||
  'https://portfolio-andy-alvarez-backend.vercel.app';

export const handleSubmit = async (
  e: FormEvent,
  formData: { name: string; email: string; message: string },
  setFormData: Dispatch<
    SetStateAction<{ name: string; email: string; message: string }>
  >,
  setButtonText: Dispatch<SetStateAction<string>>,
  setIsFormValid: Dispatch<SetStateAction<boolean>>,
  setFormSubmitted: Dispatch<SetStateAction<boolean>>,
  setErrors: Function
) => {
  e.preventDefault();
  setFormSubmitted(true);

  const isValid = validateInputs(formData, setErrors);
  if (!isValid) return;

  setButtonText('Sending...');

  try {
    const response = await fetch(`${BACKEND_URL}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const result = await response.json();

    if (response.ok) {
      setButtonText('Message Sent!');
      setFormData({ name: '', email: '', message: '' });
      setIsFormValid(false);
      setFormSubmitted(false);
      setTimeout(() => setButtonText('Send'), 2000);
    } else {
      setButtonText('Send');
      alert(result.message || 'Error al enviar el formulario');
    }
  } catch (error) {
    console.error(error);
    setButtonText('Send');
    alert('Error al enviar el formulario');
  }
};
