import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

import Logo from '../components/header/ui/Logo';
import DesktopNav from '../components/header/ui/DesktopNav';
import MobileMenu from '../components/header/ui/MobileMenu';
import Button from '../components/ui/Button';

/**
 * Main Header Component
 * Handles both desktop and mobile navigation along with the logo
 */
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-linear-to-r from-blue-950/40 via-indigo-950/30 to-purple-950/40 backdrop-blur-xl border-b border-white/10 transition-all duration-500">
        <div className="flex items-center justify-between py-4 px-6 md:px-16 lg:px-24">
          {/* Logo */}
          <Logo />

          {/* Desktop navigation */}
          <DesktopNav />

          {/* Mobile menu toggle */}
          <Button
            onClickEvent={() => setIsOpen(!isOpen)}
            className="bg-transparent text-3xl md:text-4xl hover:bg-transparent text-gray-200 lg:hidden"
          >
            {isOpen ? (
              <HiX className="transform rotate-90 transition-transform duration-300" />
            ) : (
              <HiMenu className="transform rotate-0 transition-transform duration-300" />
            )}
          </Button>
        </div>
      </header>

      {/* Mobile navigation overlay */}
      <MobileMenu isOpen={isOpen} closeMenu={() => setIsOpen(false)} />
    </>
  );
}
