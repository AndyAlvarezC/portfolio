import { useState, useEffect, lazy, Suspense } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { MdDownload } from 'react-icons/md';
import { useTranslation } from 'react-i18next';
import Logo from '../components/header/ui/Logo';
import DesktopNav from '../components/header/ui/DesktopNav';
import Button from '../components/ui/Button';
import { LanguageSelector } from '../components/header/ui/LanguageSelector';
import handleDownload from '../utils/handleDownload';

const MobileMenu = lazy(() => import('../components/header/ui/MobileMenu'));

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuMounted, setMenuMounted] = useState(false);
  const { t, i18n } = useTranslation();

  const cvFile =
    i18n.language === 'es'
      ? '/resume/CV_Andy_Álvarez.pdf'
      : '/resume/Resume_Andy_Álvarez.pdf';
  const cvName =
    i18n.language === 'es' ? 'CV_Andy_Álvarez.pdf' : 'Resume_Andy_Álvarez.pdf';

  useEffect(() => {
    if (isOpen) setMenuMounted(true);
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(() => setMenuMounted(false), 350);
  };

  return (
    <>
      <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
        <div
          className="relative rounded-2xl overflow-visible transition-shadow duration-200"
          style={{
            boxShadow: '0 6px 20px rgba(2,6,23,0.12)',
          }}
        >
          {/* Background */}
          <div className="absolute inset-0 bg-linear-to-r from-blue-500/8 via-indigo-500/8 to-purple-500/8 backdrop-blur-sm rounded-2xl" />

          <div
            className="absolute inset-0 rounded-2xl opacity-60 pointer-events-none"
            style={{
              background:
                'linear-gradient(135deg, rgba(59,130,246,0.22), rgba(99,102,241,0.22), rgba(168,85,247,0.22))',
              padding: '1.2px',
              WebkitMask:
                'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
            }}
          />

          {/* Main content */}
          <div className="relative flex items-center py-3 px-4 md:py-4 md:px-6 lg:px-8 z-10">
            {/* Logo */}
            <div className="relative z-10 shrink-0">
              <Logo />
            </div>

            {/* Desktop navigation */}
            <div className="relative z-10 flex-1 flex justify-center">
              <DesktopNav />
            </div>

            {/* Right-side actions */}
            <div className="relative z-10 flex items-center gap-4 md:gap-6 shrink-0">
              <div className="hidden lg:block">
                <LanguageSelector />
              </div>

              <div className="hidden lg:block">
                <Button
                  text={t('header.resume')}
                  onClickEvent={() => handleDownload(cvFile, cvName)}
                  size="md"
                >
                  <MdDownload className="text-lg align-middle -mb-0.5 text-white" />
                </Button>
              </div>

              {/* Mobile menu toggle button */}
              <Button
                onClickEvent={() => setIsOpen((s) => !s)}
                className="bg-white/12 hover:bg-white/20 border border-white/20 text-white lg:hidden p-3 rounded-2xl transition-transform duration-200 transform-gpu"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                {isOpen ? (
                  <HiX className="w-6 h-6 transition-transform duration-200" />
                ) : (
                  <HiMenu className="w-6 h-6 transition-transform duration-200" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Lazy-mounted mobile menu */}
      {menuMounted && (
        <Suspense fallback={null}>
          <MobileMenu isOpen={isOpen} closeMenu={handleClose} />
        </Suspense>
      )}
    </>
  );
}
