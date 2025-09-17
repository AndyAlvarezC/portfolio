
export const validateField = (name: string, value: string) => {
  let errorMessage = "";
  if (name === "name" && value.trim() === "") {
    errorMessage = "Name is required";
  }
  if (name === "email") {
    if (value.trim() === "") {
      errorMessage = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(value)) {
      errorMessage = "Please enter a valid email";
    }
  }
  if (name === "message" && value.trim() === "") {
    errorMessage = "Message is required";
  }
  return errorMessage;
};

export const validateForm = (
  formData: { name: string; email: string; message: string },
  setErrors: Function
) => {
  const newErrors = {
    name: validateField("name", formData.name),
    email: validateField("email", formData.email),
    message: validateField("message", formData.message),
  };

  setErrors(newErrors);

  const hasErrors = Object.values(newErrors).some((error) => error !== "");
  return !hasErrors;
};
