import NavLinks from './NavLinks';

interface MobileMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

export default function MobileMenu({ isOpen, closeMenu }: MobileMenuProps) {
  return (
    <>
      {/* Backdrop with blur */}
      <div
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm z-40 transition-all duration-500 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
      />

      {/* Mobile Menu Dropdown - Below Header */}
      <div
        className={`fixed top-32 left-1/2 -translate-x-1/2 w-[90%] max-w-md z-50 transform transition-all duration-500 ease-out ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        {/* Glass container */}
        <div
          className="relative rounded-3xl overflow-hidden"
          style={{
            boxShadow: '0 20px 60px -10px rgba(0, 0, 0, 0.3)',
          }}
        >
          {/* Glass background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-purple-500/10 backdrop-blur-2xl" />

          {/* Animated border gradient */}
          <div
            className="absolute inset-0 rounded-3xl opacity-60"
            style={{
              background:
                'linear-gradient(135deg, rgba(59, 130, 246, 0.4), rgba(99, 102, 241, 0.4), rgba(168, 85, 247, 0.4))',
              padding: '1.5px',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            }}
          />

          {/* Animated blurred circles for visual decoration */}
          <div className="absolute top-10 left-5 w-40 h-40 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-10 right-5 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: '1s' }}
          />

          {/* Content */}
          <div className="relative flex flex-col items-center gap-6 px-8 py-10">
            {/* Navigation links inside mobile menu */}
            <NavLinks isMobile onClickLink={closeMenu} />

            {/* Decorative gradient line at the bottom */}
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full shadow-lg mt-4" />
          </div>

          {/* Shine effect */}
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-y-full animate-shine-slow" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shine-slow {
          0%, 100% {
            transform: translateY(-100%);
          }
          50% {
            transform: translateY(100%);
          }
        }

        .animate-shine-slow {
          animation: shine-slow 4s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
