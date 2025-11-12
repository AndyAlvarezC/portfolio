import { ChangeEvent } from 'react';

interface FormFieldProps {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  error: string;
  onChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export default function ContactFormField({
  name,
  type,
  placeholder,
  value,
  error,
  onChange,
}: FormFieldProps) {
  const baseClasses = `w-full px-6 py-4 rounded-xl bg-white/20 backdrop-blur-md border-2 transition-all duration-300 outline-none font-medium ${
    error
      ? 'border-red-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/20'
      : 'border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/20'
  } placeholder:text-gray-400`;

  return (
    <div className="relative group">
      {type === 'textarea' ? (
        <textarea
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          rows={6}
          className={`${baseClasses} resize-none`}
        />
      ) : (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={baseClasses}
        />
      )}

      {/* Error message */}
      {error && (
        <div className="absolute -bottom-6 left-0 flex items-center gap-2 text-red-500 text-sm font-semibold animate-in slide-in-from-top-2 duration-300">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
          {error}
        </div>
      )}
    </div>
  );
}
