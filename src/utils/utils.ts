import { Dispatch, FormEvent, SetStateAction, ChangeEvent } from "react"

    export const handleScroll = (id: string) => {
        const section = document.getElementById(id)
        if (section) {
            section.scrollIntoView({ behavior: "smooth" })
        }
    }

    export const validateField = (name: string, value: string) => {
        let errorMessage = '';
        if (name === 'name' && value.trim() === '') {
            errorMessage = 'Name is required'
        }
        if (name === 'email') {
            if (value.trim() === '') {
                errorMessage = 'Email is required'
            } else if (!/\S+@\S+\.\S+/.test(value)) {
                errorMessage = 'Please enter a valid email';
            }
        }
        if (name === 'message' && value.trim() === '') {
            errorMessage = 'Message is required';
        }
        return errorMessage;
    };

    export const validateForm = (formData: { name: string; email: string; message: string }, setErrors: Function) => {
        const newErrors = {
            name: validateField('name', formData.name),
            email: validateField('email', formData.email),
            message: validateField('message', formData.message),
        };

        setErrors(newErrors);

        const hasErrors = Object.values(newErrors).some(error => error !== '');
        return !hasErrors;
    };

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

    export const handleSubmit = (
        e: FormEvent,
        formData: { name: string; email: string; message: string },
        setFormData: Dispatch<SetStateAction<{ name: string; email: string; message: string }>>,
        setButtonText: Dispatch<SetStateAction<string>>,
        setIsFormValid: Dispatch<SetStateAction<boolean>>,
        setFormSubmitted: Dispatch<SetStateAction<boolean>>,
        setErrors: Function
    ) => {
        e.preventDefault();
        setFormSubmitted(true);

        const isValid = validateForm(formData, setErrors);

        if (isValid) {
            setButtonText('Sending...');

            setTimeout(() => {
                setButtonText('Message Sent!');

                // Resetea el formulario después de enviar
                setFormData({ name: '', email: '', message: '' });
                setIsFormValid(false);
                setFormSubmitted(false);

                setTimeout(() => {
                    setButtonText('Send');
                }, 2000);
            }, 3000);
        }
    };