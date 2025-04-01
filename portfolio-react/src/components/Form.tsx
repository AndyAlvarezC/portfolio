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

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        const updatedFormData = { ...formData, [name]: value };
        setFormData(updatedFormData);

        setIsFormValid(updatedFormData.name !== '' && updatedFormData.email !== '' && updatedFormData.message !== '');
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        setFormData({ name: '', email: '', message: '' });
        setIsFormValid(false);

        setButtonText('Sending...');

        setTimeout(() => {
            setButtonText('Message Sent!');
            
            setTimeout(() => {
                setButtonText('Send');
            }, 2000);
        }, 3000);
    };

    const buttonBgClass = buttonText === 'Message Sent!' 
        ? 'bg-green-600 shadow-green-600 scale-105'
        : buttonText === 'Sending...'
        ? 'bg-blue-600 shadow-[0px_0px_20px_rgba(37,99,235,1)] scale-105'
        : isFormValid
        ? 'bg-blue-600'
        : 'cursor-not-allowed';

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-5xl p-16">
            <form onSubmit={handleSubmit} className="flex flex-col gap-14 w-full max-w-4xl">
                <input
                    type="text"
                    id="name"
                    placeholder="Name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    name="name"
                    className="bg-[var(--main-bg-color)] text-white p-4 rounded-lg shadow-[0px_0px_20px_rgba(37,99,235,0.5)] 
                        focus:outline-none focus:shadow-[0px_0px_20px_rgba(37,99,235,1)] transition-all ease-in-out duration-300"
                />

                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-[var(--main-bg-color)] text-white p-4 rounded-lg shadow-[0px_0px_20px_rgba(37,99,235,0.5)] 
                        focus:outline-none focus:shadow-[0px_0px_20px_rgba(37,99,235,1)] transition-all ease-in-out duration-300"
                />

                <textarea
                    id="message"
                    name="message"
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-[var(--main-bg-color)] text-white p-4 rounded-lg shadow-[0px_0px_20px_rgba(37,99,235,0.5)] 
                        focus:outline-none focus:shadow-[0px_0px_20px_rgba(37,99,235,1)] transition-all ease-in-out duration-300 resize-none h-32"
                ></textarea>

                <button
                    type="submit"
                    className={`flex items-center justify-center w-full mx-auto font-bold text-white p-4 rounded-lg shadow-[0px_0px_20px_rgba(37,99,235,0.5)] max-w-sm cursor-pointer
                        hover:shadow-[0px_0px_20px_rgba(37,99,235,1)] transition-all ease-in-out duration-300 hover:scale-105 ${buttonBgClass}`}
                    disabled={!isFormValid}
                >
                    {buttonText} <FaPaperPlane className="ml-2 rotate-45" />
                </button>
            </form>
        </div>
    );
}
