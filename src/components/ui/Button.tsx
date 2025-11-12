interface Props {
  text?: string;
  onClickEvent: () => void;
  className?: string;
  children?: React.ReactNode;
}

export default function Button({ text, onClickEvent, className, children }: Props) {
  // Base Tailwind CSS styles for the button
  const baseStyles = `
    flex items-center justify-center gap-2 px-3 md:px-6 py-2 md:py-3
    rounded-xl font-semibold text-white
    bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600
    shadow-lg shadow-blue-900/30
    transition-all duration-300 ease-out
    hover:shadow-[0_0_25px_rgba(99,102,241,0.6)]
    hover:scale-[1.05]
    active:scale-[0.98]
    focus:outline-none focus:ring-2 focus:ring-indigo-500/50
  `;

  return (
    <button
      onClick={onClickEvent}
      className={`${baseStyles} ${className ?? ''}`}
    >
      {/* Optional text with gradient styling */}
      {text && (
        <span className="bg-linear-to-r from-blue-200 via-indigo-200 to-purple-200 bg-clip-text text-transparent font-bold">
          {text}
        </span>
      )}
      {/* Optional children elements, e.g., icons */}
      {children}
    </button>
  );
}
