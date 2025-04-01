import { useState, ChangeEvent, FormEvent } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

export default function Form() {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [buttonText, setButtonText] = useState('Send');
    const [isFormValid, setIsFormValid] = useState(false);
    const [errors, setErrors] = useState({
        name: '',
        email: '',
        message: '',
    });
    const [formSubmitted, setFormSubmitted] = useState(false);

    const validateField = (name: string, value: string) => {
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

    const validateForm = () => {
        const newErrors = {
            name: validateField('name', formData.name),
            email: validateField('email', formData.email),
            message: validateField('message', formData.message),
        };
        
        setErrors(newErrors);
        
        const hasErrors = Object.values(newErrors).some(error => error !== '');
        return !hasErrors;
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setFormSubmitted(true);
        
        const isValid = validateForm();
        
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

    const buttonBgClass = buttonText === 'Message Sent!' 
        ? 'bg-green-600 shadow-green-600 scale-105'
        : buttonText === 'Sending...'
        ? 'bg-blue-600 shadow-[0px_0px_20px_rgba(37,99,235,1)] scale-105'
        : isFormValid
        ? 'bg-blue-600 cursor-pointer'
        : 'bg-[var(--main-bg-color)] cursor-not-allowed';

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-5xl p-16">
            <form onSubmit={handleSubmit} className="flex flex-col gap-14 w-full max-w-4xl">
                <div className='relative'>
                    <input
                        type="text"
                        id="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleChange}
                        name="name"
                        className="w-full bg-[var(--main-bg-color)] text-white p-4 rounded-lg shadow-[0px_0px_20px_rgba(37,99,235,0.5)] 
                            focus:outline-none focus:shadow-[0px_0px_20px_rgba(37,99,235,1)] transition-all ease-in-out duration-300"
                    />
                    {errors.name && (
                        <div className="absolute text-red-500 text-sm mt-1">{errors.name}</div>
                    )}
                </div>

                <div className='relative'>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-[var(--main-bg-color)] text-white p-4 rounded-lg shadow-[0px_0px_20px_rgba(37,99,235,0.5)] 
                            focus:outline-none focus:shadow-[0px_0px_20px_rgba(37,99,235,1)] transition-all ease-in-out duration-300"
                    />
                    {errors.email && (
                        <div className="absolute text-red-500 text-sm mt-1">{errors.email}</div>
                    )}
                </div>

                <div className='relative'>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Write your message here..."
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-[var(--main-bg-color)] text-white p-4 rounded-lg shadow-[0px_0px_20px_rgba(37,99,235,0.5)] 
                            focus:outline-none focus:shadow-[0px_0px_20px_rgba(37,99,235,1)] transition-all ease-in-out duration-300 resize-none h-32"
                    ></textarea>
                    {errors.message && (
                        <div className="absolute text-red-500 text-sm mt-1">{errors.message}</div>
                    )}
                </div>

                <button
                    type="submit"
                    className={`flex items-center justify-center w-full mx-auto font-bold text-white p-4 rounded-lg shadow-[0px_0px_20px_rgba(37,99,235,0.5)] max-w-sm 
                        hover:shadow-[0px_0px_20px_rgba(37,99,235,1)] transition-all ease-in-out duration-300 hover:scale-105 ${buttonBgClass}`}
                >
                    {buttonText} <FaPaperPlane className="ml-2 rotate-45" />
                </button>
            </form>
        </div>
    );
}