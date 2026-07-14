'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import TopBar from './TopBar';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-xl border-b border-outline-variant/20 ${
        scrolled ? 'bg-surface-dim/50' : 'bg-surface-dim/30 dark:bg-surface-dim/40'
      }`}
    >
      <TopBar />
      <nav className="flex justify-between items-center px-margin-mobile md:px-gutter py-4 max-w-container-max mx-auto">
        <Link href="/" className="font-headline-md text-headline-md text-primary tracking-tight">
          Aurelian Noir
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                className={`font-label-caps text-label-caps transition-colors duration-300 ${
                  pathname === link.path
                    ? 'text-primary font-semibold border-b-2 border-primary pb-1'
                    : 'text-on-surface-variant hover:text-secondary-fixed'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <button className="bg-primary px-6 py-2 rounded-lg font-label-caps text-label-caps text-on-primary active:scale-95 transition-all duration-300 hover:brightness-110">
            Book a Table
          </button>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-primary focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface-dim/95 backdrop-blur-lg border-b border-outline-variant/20 py-4 px-margin-mobile flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.path}
              onClick={() => setMobileMenuOpen(false)}
              className={`font-label-caps text-label-caps py-2 transition-colors duration-300 ${
                pathname === link.path
                  ? 'text-primary font-semibold'
                  : 'text-on-surface-variant hover:text-secondary-fixed'
              }`}
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-primary px-6 py-3 rounded-lg font-label-caps text-label-caps text-on-primary active:scale-95 transition-all duration-300 hover:brightness-110 mt-4 w-full">
            Book a Table
          </button>
        </div>
      )}
    </header>
  );
}
