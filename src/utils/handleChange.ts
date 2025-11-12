import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { TFunction } from 'i18next';
import { validators } from '../components/contact/validators';

interface FormData {
  name: string;
  email: string;
  message: string;
}

interface Errors {
  name: string;
  email: string;
  message: string;
}

export const handleChange = (
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | null,
  formData: FormData,
  setFormData: Dispatch<SetStateAction<FormData>>,
  errors: Errors,
  setErrors: Dispatch<SetStateAction<Errors>>,
  formSubmitted: boolean,
  setIsFormValid: Dispatch<SetStateAction<boolean>>,
  t: TFunction
) => {
  let updatedFormData = formData;

  // Si hay evento, actualizamos el campo correspondiente
  if (e) {
    const { name, value } = e.target;
    updatedFormData = { ...formData, [name]: value };
    setFormData(updatedFormData);

    // Validación inmediata si el formulario ya se envió
    if (formSubmitted) {
      const errorMessage = validators(name, value, t);
      setErrors({ ...errors, [name]: errorMessage });
    }
  }

  // Validación general: todos los campos llenos
  const allFieldsHaveValue =
    updatedFormData.name.trim() !== '' &&
    updatedFormData.email.trim() !== '' &&
    updatedFormData.message.trim() !== '';

  setIsFormValid(allFieldsHaveValue);
};
