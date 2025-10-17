// Imports
import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

import NavLinks from '../components/navigation/NavLinks';
import Button from '../components/ui/Button';

import handleScroll from '../utils/handleScroll';

/**
 * Main header component
 * Includes desktop navigation, mobile menu, and logo
 */
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop header */}
      <header className="fixed top-0 left-0 w-full z-30 bg-black/50 text-lg backdrop-blur-sm px-2 lg:px-24">
        <div className="flex items-center justify-between p-4">
          {/* Logo - scrolls to home */}
          <a onClick={() => handleScroll('home')} className="cursor-pointer">
            <h2 className="font-bold text-2xl transform hover:scale-110 transition-transform duration-300 ease">
              Andy Álvarez
            </h2>
          </a>

          {/* Desktop navigation links */}
          <nav className="hidden lg:block">
            <ul className="flex gap-4 font-bold items-center">
              <NavLinks />
            </ul>
          </nav>

          {/* Mobile menu toggle */}
          <Button
            onClickEvent={() => setIsOpen(!isOpen)}
            className="bg-transparent text-3xl md:text-4xl hover:bg-transparent lg:hidden"
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
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-black/95 text-white flex flex-col items-center justify-center gap-8 text-xl md:text-3xl md:gap-y-12 font-bold transform transition-transform duration-300 ease z-20 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <NavLinks isMobile onClickLink={() => setIsOpen(false)} />
      </div>
    </>
  );
}
