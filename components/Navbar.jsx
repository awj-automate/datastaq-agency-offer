'use client';
import { useState, useEffect } from 'react';

const BOOK_URL = '/schedule';

const navLinks = [
  { label: 'What We Do', href: '/#solution' },
  { label: 'How It Works', href: '/#how-it-works' },
  { label: 'Who It\'s For', href: '/#who-its-for' },
  { label: 'Comparison', href: '/#comparison' },
  { label: 'Case Studies', href: '/case-studies' },
  { label: 'Blog', href: '/blog' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-2xl shadow-sm'
          : 'bg-transparent'
      }`}
      style={{ borderBottom: scrolled ? '1px solid rgba(0,0,0,0.08)' : '1px solid transparent' }}
    >
      <div className="max-w-[1356px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between py-4">
          <a href="/" className="flex items-center gap-3 group">
            <div className="relative w-9 h-9 flex-shrink-0">
              <img
                src="/logo.png"
                alt="DataStaqAI"
                className="w-full h-full object-contain"
                style={{ filter: 'brightness(0)' }}
              />
            </div>
            <span className="font-jakarta font-extrabold text-xl tracking-heading text-ds-heading">
              DataStaq<span className="gradient-text">AI</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map(l => (
              <a
                key={l.label}
                href={l.href}
                className="font-jakarta text-sm font-medium text-ds-muted hover:text-ds-heading transition-colors duration-200"
                style={{ letterSpacing: '-0.02em' }}
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <a href={BOOK_URL} className="btn-dark text-sm h-11">
              Book a Strategy Call
            </a>
          </div>

          <button
            onClick={() => setOpen(v => !v)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-ds-muted hover:text-ds-heading hover:bg-black/5 transition-all"
            aria-label="Toggle menu"
          >
            {open ? (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M17 5L5 17M5 5l12 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                <path d="M4 7h14M4 11h14M4 15h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            )}
          </button>
        </div>
      </div>

      <div
        className={`md:hidden transition-all duration-400 ease-out overflow-hidden ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-white border-t border-black/5 px-6 py-6 space-y-5">
          {navLinks.map(l => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block font-jakarta text-base text-ds-muted hover:text-ds-heading transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a href={BOOK_URL} className="btn-dark w-full justify-center mt-2 text-sm">
            Book a Strategy Call
          </a>
        </div>
      </div>
    </header>
  );
}
