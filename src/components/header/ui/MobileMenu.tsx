import NavLinks from './NavLinks';
import { useMemo } from 'react';

interface MobileMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

export default function MobileMenu({ isOpen, closeMenu }: MobileMenuProps) {
  const containerClasses = useMemo(
    () =>
      `fixed top-28 sm:top-28 md:top-32 left-0 right-0 flex justify-center items-start z-50 transform transition-transform duration-200 ease-out will-change-transform`,
    []
  );

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-200 ${
          isOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeMenu}
        aria-hidden
      />

      {/* Container */}
      <div
        className={`${containerClasses} ${
          isOpen
            ? 'translate-y-0 opacity-100'
            : '-translate-y-3 opacity-0 pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
      >
        {/* Glass container */}
        <div
          className="relative w-[92%] sm:w-[85%] md:w-[75%] h-[76vh] rounded-2xl overflow-hidden flex flex-col items-center justify-center px-6 py-8"
          style={{
            boxShadow: '0 18px 40px -8px rgba(0,0,0,0.32)',
          }}
        >
          <div className="absolute inset-0 bg-linear-to-br from-blue-500/8 via-indigo-500/8 to-purple-500/8 backdrop-blur-md" />

          <div
            className="absolute inset-0 rounded-2xl opacity-60 pointer-events-none"
            style={{
              background:
                'linear-gradient(135deg, rgba(59,130,246,0.28), rgba(99,102,241,0.28), rgba(168,85,247,0.28))',
              padding: '1.2px',
              WebkitMask:
                'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            }}
          />

          <div
            className="absolute top-8 left-6 w-28 h-28 rounded-full pointer-events-none"
            style={{
              background:
                'radial-gradient(circle, rgba(59,130,246,0.12), transparent 40%)',
              filter: 'blur(24px)',
              transform: 'translateZ(0)',
              willChange: 'transform, opacity',
              animation: 'float-slow 4s ease-in-out infinite',
            }}
            aria-hidden
          />
          <div
            className="absolute bottom-8 right-6 w-32 h-32 rounded-full pointer-events-none"
            style={{
              background:
                'radial-gradient(circle, rgba(168,85,247,0.12), transparent 40%)',
              filter: 'blur(28px)',
              transform: 'translateZ(0)',
              willChange: 'transform, opacity',
              animation: 'float-slow 5s ease-in-out infinite',
            }}
            aria-hidden
          />

          {/* Main content */}
          <div className="relative flex flex-col items-center gap-5 sm:gap-6 md:gap-8 text-center z-10">
            <NavLinks isMobile onClickLink={closeMenu} />

            <div className="w-20 h-0.5 bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full shadow-sm mt-3" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes float-slow {
          0% { transform: translateY(0) translateZ(0); opacity: 0.95; }
          50% { transform: translateY(-6px) translateZ(0); opacity: 1; }
          100% { transform: translateY(0) translateZ(0); opacity: 0.95; }
        }
      `}</style>
    </>
  );
}
