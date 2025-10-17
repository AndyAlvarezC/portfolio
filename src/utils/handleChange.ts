import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import { TFunction } from 'i18next';
import { validators } from '../components/ui/form/validators';

export const handleChange = (
  e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  formData: { name: string; email: string; message: string },
  setFormData: Dispatch<
    SetStateAction<{ name: string; email: string; message: string }>
  >,
  errors: { name: string; email: string; message: string },
  setErrors: Function,
  formSubmitted: boolean,
  setIsFormValid: Function,
  t: TFunction
) => {
  const { name, value } = e.target;
  const updatedFormData = { ...formData, [name]: value };
  setFormData(updatedFormData);

  if (formSubmitted) {
    const errorMessage = validators(name, value, t);
    setErrors({ ...errors, [name]: errorMessage });
  }

  const allFieldsHaveValue =
    updatedFormData.name.trim() !== '' &&
    updatedFormData.email.trim() !== '' &&
    updatedFormData.message.trim() !== '';

  setIsFormValid(allFieldsHaveValue);
};
