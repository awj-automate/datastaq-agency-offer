'use client';

const BOOK_URL = '/schedule';

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10 overflow-hidden bg-ds-bg">
      <div className="relative z-10 max-w-[1356px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="content-wrap">

          {/* Big CTA heading with decorative elements */}
          <div className="text-center mb-16 reveal relative">
            {/* Decorative animated circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
              <svg width="400" height="400" viewBox="0 0 400 400" fill="none" className="opacity-[0.04]">
                <circle cx="200" cy="200" r="160" stroke="#C9A227" strokeWidth="1" strokeDasharray="8 6"
                  style={{ animation: 'dashScroll 5s linear infinite' }}
                />
                <circle cx="200" cy="200" r="120" stroke="#C9A227" strokeWidth="0.5" strokeDasharray="4 4"
                  style={{ animation: 'dashScroll 7s linear infinite reverse' }}
                />
              </svg>
            </div>

            <h2
              className="font-jakarta font-extrabold text-5xl sm:text-6xl lg:text-7xl text-ds-heading mb-8 relative z-10"
              style={{ lineHeight: '1.05', letterSpacing: '-0.05em' }}
            >
              Let's ship your<br />
              <span className="gradient-text">
                software product
              </span>
            </h2>
            <a href={BOOK_URL} className="btn-dark text-base h-14 px-10 relative z-10">
              Share Your Idea
            </a>
          </div>

          {/* Divider */}
          <div className="section-divider mb-12" />

          {/* Footer columns */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="relative w-9 h-9 flex-shrink-0">
                  <img
                    src="/logo.png"
                    alt="DataStaqAI"
                    className="w-full h-full object-contain"
                    style={{ filter: 'brightness(0)' }}
                  />
                </div>
                <span className="font-jakarta font-extrabold text-lg tracking-tight text-ds-heading">
                  DataStaq<span className="gradient-text">AI</span>
                </span>
              </div>
              <p className="font-jakarta text-sm text-ds-muted leading-relaxed" style={{ letterSpacing: '-0.02em' }}>
                Your US-based development partner. We build MVPs, apps, and software products
                with you, week by week, no fixed-scope lock-in.
              </p>
            </div>

            {/* What We Build */}
            <div>
              <h4
                className="font-jakarta font-semibold text-[11px] text-ds-heading mb-5 uppercase tracking-widest"
              >
                What We Build
              </h4>
              <ul className="space-y-3">
                {['MVPs for Founders', 'Web & Mobile Apps', 'SaaS Products', 'AI Features'].map(l => (
                  <li key={l}>
                    <a
                      href="/#use-cases"
                      className="font-jakarta text-sm text-ds-muted hover:text-ds-heading transition-colors"
                      style={{ letterSpacing: '-0.02em' }}
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-jakarta font-semibold text-[11px] text-ds-heading mb-5 uppercase tracking-widest">
                Company
              </h4>
              <ul className="space-y-3">
                {[
                  { label: 'How It Works', href: '/#how-it-works' },
                  { label: 'Who It\'s For', href: '/#who-its-for' },
                  { label: 'Blog', href: '/blog' },
                  { label: 'Book a Call', href: BOOK_URL },
                ].map(l => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="font-jakarta text-sm text-ds-muted hover:text-ds-heading transition-colors"
                      style={{ letterSpacing: '-0.02em' }}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="font-jakarta font-semibold text-[11px] text-ds-heading mb-5 uppercase tracking-widest">
                Legal
              </h4>
              <ul className="space-y-3">
                {[
                  { label: 'Privacy Policy', href: '/privacy-policy' },
                  { label: 'Terms of Service', href: '/terms' },
                  { label: 'Cookie Policy', href: '/cookies' },
                  { label: 'Accessibility', href: '/accessibility' },
                ].map(l => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="font-jakarta text-sm text-ds-muted hover:text-ds-heading transition-colors"
                      style={{ letterSpacing: '-0.02em' }}
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-jakarta font-semibold text-[11px] text-ds-heading mb-5 uppercase tracking-widest">
                Get Started
              </h4>
              <p className="font-jakarta text-sm text-ds-muted mb-5 leading-relaxed" style={{ letterSpacing: '-0.02em' }}>
                Ready to ship your software product without the fixed-scope headache?
              </p>
              <a href={BOOK_URL} className="btn-dark text-sm h-11">
                Share Your Idea
              </a>
            </div>
          </div>

          {/* Bottom divider */}
          <div className="section-divider mb-8" />

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="font-jakarta text-sm text-ds-subtle" style={{ letterSpacing: '-0.02em' }}>
              &copy; {new Date().getFullYear()} DataStaqAI. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {[
                { label: 'Privacy Policy', href: '/privacy-policy' },
                { label: 'Terms of Service', href: '/terms' },
              ].map(l => (
                <a
                  key={l.label}
                  href={l.href}
                  className="font-jakarta text-xs text-ds-subtle hover:text-ds-heading transition-colors"
                >
                  {l.label}
                </a>
              ))}

              {/* Back to top */}
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-200 hover:-translate-y-1"
                style={{ background: '#EBEBEB', boxShadow: '0 0 8px 0 #FFF inset' }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M8 12V4M4.5 7.5L8 4l3.5 3.5" stroke="#3F3F46" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
