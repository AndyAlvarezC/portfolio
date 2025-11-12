import { TFunction } from 'i18next';

export const validators = (name: string, value: string, t: TFunction) => {
  let errorMessage = '';
  if (name === 'name' && value.trim() === '') {
    errorMessage = t('contact.validators.name');
  }
  if (name === 'email') {
    if (value.trim() === '') {
      errorMessage = t('contact.validators.email');
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      errorMessage = t('contact.validators.email');
    }
  }
  if (name === 'message' && value.trim() === '') {
    errorMessage = t('contact.validators.message');
  }
  return errorMessage;
};

export const validateInputs = (
  formData: { name: string; email: string; message: string },
  setErrors: Function,
  t: TFunction
) => {
  const newErrors = {
    name: validators('name', formData.name, t),
    email: validators('email', formData.email, t),
    message: validators('message', formData.message, t),
  };

  setErrors(newErrors);

  return !Object.values(newErrors).some((error) => error !== '');
};
