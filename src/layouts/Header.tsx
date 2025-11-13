import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { MdDownload } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import Logo from '../components/header/ui/Logo';
import DesktopNav from '../components/header/ui/DesktopNav';
import MobileMenu from '../components/header/ui/MobileMenu';
import Button from '../components/ui/Button';
import { LanguageSelector } from '../components/header/ui/LanguageSelector';
import handleDownload from '../utils/handleDownload';

/**
 * Main Header Component
 * Handles both desktop and mobile navigation along with the logo
 */
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const cvFile =
    i18n.language === 'es' ? '/resume/CV_Andy_Álvarez.pdf' : '/resume/Resume_Andy_Álvarez.pdf';
  const cvName = i18n.language === 'es' ? 'CV_Andy_Álvarez.pdf' : 'Resume_Andy_Álvarez.pdf';

  return (
    <>
      {/* Desktop header - Floating Glass */}
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
        <div
          className="relative rounded-3xl overflow-visible transition-all duration-500 hover:shadow-2xl"
          style={{
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.15)',
          }}
        >
          {/* Glass background with gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-purple-500/10 backdrop-blur-xl rounded-3xl" />

          {/* Animated border gradient */}
          <div
            className="absolute inset-0 rounded-3xl opacity-60"
            style={{
              background:
                'linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(99, 102, 241, 0.3), rgba(168, 85, 247, 0.3))',
              padding: '1.5px',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            }}
          />

          {/* Content */}
          <div className="relative flex items-center py-4 px-6 md:px-8 lg:px-10">
            {/* Logo - Left */}
            <div className="relative z-10 flex-shrink-0">
              <Logo />
            </div>

            {/* Desktop navigation - Center */}
            <div className="relative z-10 flex-1 flex justify-center">
              <DesktopNav />
            </div>

            {/* Right side - Language selector + CV Button + Mobile menu */}
            <div className="relative z-10 flex items-center gap-6 flex-shrink-0">
              {/* Language Selector - Desktop only */}
              <div className="hidden lg:block">
                <LanguageSelector />
              </div>

              {/* CV Button - Desktop only */}
              <div className="hidden lg:block">
                <Button
                  text={t('header.resume')}
                  onClickEvent={() => handleDownload(cvFile, cvName)}
                  size="md"
                >
                  <MdDownload className="text-lg align-middle -mb-0.5 text-white" />
                </Button>
              </div>

              {/* Mobile menu toggle */}
              <Button
                onClickEvent={() => setIsOpen(!isOpen)}
                className="bg-white/20 hover:bg-white/30 backdrop-blur-md border border-white/30 text-white lg:hidden cursor-pointer p-3 rounded-2xl transition-all duration-300 hover:scale-110 shadow-lg"
              >
                {isOpen ? (
                  <HiX className="transform w-6 h-6 rotate-90 transition-transform duration-300" />
                ) : (
                  <HiMenu className="transform w-6 h-6 rotate-0 transition-transform duration-300" />
                )}
              </Button>
            </div>
          </div>

          {/* Shine effect */}
          <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-3xl">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shine" />
          </div>
        </div>
      </header>

      {/* Mobile navigation overlay */}
      <MobileMenu isOpen={isOpen} closeMenu={() => setIsOpen(false)} />

      <style>{`
        @keyframes shine {
          to {
            transform: translateX(200%);
          }
        }

        .animate-shine {
          animation: shine 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}
