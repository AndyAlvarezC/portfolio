import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { validateField } from "./validation";

export const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
        formData: { name: string; email: string; message: string },
        setFormData: Dispatch<SetStateAction<{ name: string; email: string; message: string }>>,
        errors: { name: string; email: string; message: string },
        setErrors: Function,
        formSubmitted: boolean,
        setIsFormValid: Function
    ) => {
        const { name, value } = e.target;
        const updatedFormData = { ...formData, [name]: value };
        setFormData(updatedFormData);

        if (formSubmitted) {
            const errorMessage = validateField(name, value);
            setErrors({ ...errors, [name]: errorMessage });
        }

        const allFieldsHaveValue =
            updatedFormData.name.trim() !== '' &&
            updatedFormData.email.trim() !== '' &&
            updatedFormData.message.trim() !== '';

        setIsFormValid(allFieldsHaveValue);
    };