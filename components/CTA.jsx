'use client';

const BOOK_URL = '/schedule';

export default function CTA() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-ds-bg">
      {/* Decorative blurred gradient blob */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] pointer-events-none blob"
        style={{ background: 'linear-gradient(96deg, #C9A227 28%, #E5C463 100%)', filter: 'blur(150px)', opacity: 0.06 }}
      />

      {/* Animated decorative rings */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <svg width="600" height="600" viewBox="0 0 600 600" fill="none" className="opacity-[0.03]">
          <circle cx="300" cy="300" r="200" stroke="#C9A227" strokeWidth="1" strokeDasharray="8 6"
            style={{ animation: 'dashScroll 4s linear infinite' }}
          />
          <circle cx="300" cy="300" r="260" stroke="#C9A227" strokeWidth="0.5" strokeDasharray="4 4"
            style={{ animation: 'dashScroll 6s linear infinite reverse' }}
          />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1356px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="content-wrap">
          <div className="max-w-3xl mx-auto text-center reveal">

            <div className="sub-title mx-auto mb-8">
              <span className="sub-title-dot" />
              Get Started
            </div>

            <h2
              className="font-jakarta font-extrabold text-4xl sm:text-5xl lg:text-6xl text-ds-heading mb-6"
              style={{ lineHeight: '1.08', letterSpacing: '-0.04em' }}
            >
              Ready to give your account managers{' '}
              <span className="gradient-text">their week back?</span>
            </h2>

            <p
              className="font-jakarta text-lg sm:text-xl text-ds-muted mb-10 max-w-2xl mx-auto leading-relaxed"
              style={{ letterSpacing: '-0.02em' }}
            >
              We will look at your client mix, your reporting workflow, and where the hours are
              going — and show you what a real data layer would do for your agency.
            </p>

            <div className="flex flex-col items-center gap-5">
              <a href={BOOK_URL} className="btn-accent text-base px-10 h-14">
                Book a Strategy Call
              </a>
              <p className="font-jakarta text-sm text-ds-subtle" style={{ letterSpacing: '-0.02em' }}>
                15-minute call. No pitch — we will map the bottleneck and show you what is possible.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 section-divider" />
    </section>
  );
}
