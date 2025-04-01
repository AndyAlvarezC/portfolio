// FormField.tsx
import { FC, ChangeEvent } from 'react'; 

type FormFieldProps = {
    name: string;
    type: string;
    placeholder: string;
    value: string;
    error: string;
    onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

const FormField: FC<FormFieldProps> = ({ name, type, placeholder, value, error, onChange }) => {
    return (
        <div className="flex flex-col">
            {type === 'textarea' ? (
                <textarea
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    className={`w-full bg-[var(--main-bg-color)] text-white p-4 rounded-lg shadow-[0px_0px_20px_rgba(37,99,235,0.5)] 
                            focus:outline-none focus:shadow-[0px_0px_20px_rgba(37,99,235,1)] transition-all ease-in-out duration-300 resize-none h-32`}
                />
            ) : (
                <input
                    type={type}
                    name={name}
                    value={value}
                    placeholder={placeholder}
                    onChange={onChange}
                    className={`w-full bg-[var(--main-bg-color)] text-white p-4 rounded-lg shadow-[0px_0px_20px_rgba(37,99,235,0.5)] 
                            focus:outline-none focus:shadow-[0px_0px_20px_rgba(37,99,235,1)] transition-all ease-in-out duration-300`}
                />
            )}
            <div className="h-0.5">
                {error && <span className="text-red-500 text-sm">{error}</span>}
            </div>
        </div>
    );
}

export default FormField;
