import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import FormField from "./FormField";
import { handleChange } from "../utils/handleChange";
import { handleSubmit } from "../utils/handleSubmit";

export default function Form() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [buttonText, setButtonText] = useState("Send");
    const [isFormValid, setIsFormValid] = useState(false);
    const [errors, setErrors] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [formSubmitted, setFormSubmitted] = useState(false);

    const onSubmit = (e: React.FormEvent) => {
        console.log("🔍 Form submit triggered");
        console.log("🔍 Form data:", formData);
        console.log("🔍 Is form valid:", isFormValid);

        handleSubmit(
        e,
        formData,
        setFormData,
        setButtonText,
        setIsFormValid,
        setFormSubmitted,
        setErrors
        );
    };

    return (
        <div className="flex flex-col items-center justify-center w-full max-w-5xl p-16">
        <form
            onSubmit={onSubmit}
            className="flex flex-col gap-14 w-full max-w-4xl"
        >
            <FormField
            name="name"
            type="text"
            placeholder="Name"
            value={formData.name}
            error={errors.name}
            onChange={(e) =>
                handleChange(
                e,
                formData,
                setFormData,
                errors,
                setErrors,
                formSubmitted,
                setIsFormValid
                )
            }
            />
            <FormField
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            error={errors.email}
            onChange={(e) =>
                handleChange(
                e,
                formData,
                setFormData,
                errors,
                setErrors,
                formSubmitted,
                setIsFormValid
                )
            }
            />
            <FormField
            name="message"
            type="textarea"
            placeholder="Write your message here..."
            value={formData.message}
            error={errors.message}
            onChange={(e) =>
                handleChange(
                e,
                formData,
                setFormData,
                errors,
                setErrors,
                formSubmitted,
                setIsFormValid
                )
            }
            />
            <button
            type="submit"
            disabled={!isFormValid}
            className={`flex items-center justify-center w-full mx-auto font-bold text-white p-4 rounded-lg shadow-[0px_0px_20px_rgba(37,99,235,0.5)] max-w-sm 
                            hover:shadow-[0px_0px_20px_rgba(37,99,235,1)] transition-all ease-in-out duration-300 hover:scale-105 ${
                            buttonText === "Message Sent!"
                                ? "bg-green-600 shadow-green-600 scale-105"
                                : buttonText === "Sending..."
                                ? "bg-blue-600 shadow-[0px_0px_20px_rgba(37,99,235,1)] scale-105"
                                : isFormValid
                                ? "bg-blue-600 cursor-pointer"
                                : "bg-[var(--main-bg-color)] cursor-not-allowed"
                            }`}
            >
            {buttonText} <FaPaperPlane className="ml-2 rotate-45" />
            </button>
        </form>
        </div>
    );
    }
