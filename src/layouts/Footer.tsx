import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <footer className="relative w-full flex items-center justify-center py-10 mt-24 bg-gradient-to-r from-blue-950/60 via-indigo-950/50 to-purple-950/60 backdrop-blur-xl border-t border-white/10 shadow-[0_-4px_30px_rgba(0,0,0,0.2)] text-center">
      {/* Glow gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-indigo-500/10 to-purple-600/10 blur-3xl opacity-60 pointer-events-none" />

      {/* Content */}
      <p className="relative z-10 flex items-center justify-center gap-2 text-sm md:text-lg font-semibold text-gray-200">
        <FontAwesomeIcon
          icon={faCode}
          className="text-blue-400 text-base md:text-lg transition-transform duration-300 hover:rotate-12"
        />
        <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent font-bold tracking-wide">
          Andy Álvarez
        </span>
        <span className="text-blue-500 font-bold px-1">|</span>
        <span className="text-gray-300">Designed & Developed by me</span>
        <span className="text-purple-500 font-bold px-1">#</span>
        <span className="text-gray-400">2025</span>
        <FontAwesomeIcon
          icon={faCode}
          className="text-purple-400 text-base md:text-lg pl-1 transition-transform duration-300 hover:-rotate-12"
        />
      </p>
    </footer>
  );
}
