export const validators = (name: string, value: string) => {
  let errorMessage = '';
  if (name === 'name' && value.trim() === '') {
    errorMessage = 'Name is required';
  }
  if (name === 'email') {
    if (value.trim() === '') {
      errorMessage = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      errorMessage = 'Please enter a valid email';
    }
  }
  if (name === 'message' && value.trim() === '') {
    errorMessage = 'Message is required';
  }
  return errorMessage;
};

export const validateInputs = (
  formData: { name: string; email: string; message: string },
  setErrors: Function
) => {
  const newErrors = {
    name: validators('name', formData.name),
    email: validators('email', formData.email),
    message: validators('message', formData.message),
  };

  setErrors(newErrors);

  const hasErrors = Object.values(newErrors).some((error) => error !== '');
  return !hasErrors;
};
