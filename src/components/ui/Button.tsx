import React from 'react';

interface ButtonProps {
  text?: string;
  onClickEvent?: () => void;
  className?: string;
  children?: React.ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export default function Button({
  text,
  onClickEvent,
  className = '',
  children,
  size = 'md',
}: ButtonProps) {
  const baseStyles = `
    inline-flex items-center justify-center gap-2 rounded-xl font-semibold text-white
    bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600
    shadow-md shadow-indigo-900/30
    transition-all duration-200 ease-out
    hover:shadow-[0_0_25px_rgba(99,102,241,0.6)]
    hover:scale-[1.05]
    active:scale-[0.98]
    focus:outline-none focus:ring-2 focus:ring-indigo-500/50 cursor-pointer
  `;

  const sizeStyles = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
  }[size];

  return (
    <button
      onClick={onClickEvent}
      className={`${baseStyles} ${sizeStyles} ${className}`}
    >
      {text && (
        <span className="bg-linear-to-r from-blue-200 via-indigo-200 to-purple-200 bg-clip-text text-transparent font-bold">
          {text}
        </span>
      )}
      {children}
    </button>
  );
}
