import NavLinks from "./NavLinks";

interface MobileMenuProps {
  isOpen: boolean;
  closeMenu: () => void;
}

export default function MobileMenu({ isOpen, closeMenu }: MobileMenuProps) {
  return (
    <div
      className={`fixed top-0 left-0 w-full h-screen bg-linear-to-b from-blue-950 via-indigo-950 to-purple-950 text-white flex flex-col items-center justify-center gap-10 text-2xl md:text-4xl font-bold transform transition-all duration-500 ease-out z-40 ${
        isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'
      }`}
    >
      {/* Animated blurred circles for visual decoration */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Navigation links inside mobile menu */}
      <NavLinks isMobile onClickLink={closeMenu} />

      {/* Decorative gradient line at the bottom */}
      <div className="absolute bottom-12 w-24 h-1 bg-linear-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-full" />
    </div>
  );
}
