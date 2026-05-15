'use client';
import { useEffect, useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const tools = [
  {
    name: 'AI Lead Finder',
    description:
      'Find and qualify leads using AI-powered search and scoring. Enter your ICP criteria and get a targeted list of prospects, ranked by fit and ready to contact.',
    cta: 'Try Free',
    href: 'https://vibe-list-tau.vercel.app/',
  },
  {
    name: 'Local SEO Audit Tool',
    description:
      'Run a full SEO audit on any website in seconds. Get actionable scores on performance, meta tags, mobile readiness, and local search signals, with clear recommendations to fix what matters.',
    cta: 'Try Free',
    href: 'https://website-audit-app-production.up.railway.app/',
  },
  {
    name: 'FollowFlow',
    description:
      'Automate your email follow-ups end-to-end. Set a sequence once and let it send timed, personalized replies until a prospect responds — no manual babysitting, no leads slipping through the cracks.',
    cta: 'Try Free',
    href: 'https://followflow.datastaqai.com/',
  },
];

const icons = [
  // Lead Finder - magnifying glass + user
  <svg key="lead" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.35-4.35" />
    <circle cx="11" cy="8" r="2" />
    <path d="M7 14c0-2 1.8-3.5 4-3.5s4 1.5 4 3.5" />
  </svg>,
  // SEO Audit - bar chart
  <svg key="seo" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 20V10" />
    <path d="M12 20V4" />
    <path d="M6 20v-6" />
  </svg>,
  // FollowFlow - envelope + scheduling clock
  <svg key="followflow" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 12V6a2 2 0 00-2-2H4a2 2 0 00-2 2v12a2 2 0 002 2h10" />
    <path d="M2 6l10 7 10-7" />
    <circle cx="18" cy="18" r="4" />
    <path d="M18 16v2l1.5 1" />
  </svg>,
];

function ToolCard({ tool, icon, index }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="card group flex flex-col overflow-hidden"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Interactive preview */}
      {tool.href && (
        <div className="relative w-full h-[280px] bg-ds-surface overflow-hidden border-b border-ds-border">
          <iframe
            src={tool.href}
            title={`${tool.name} preview`}
            className="w-full h-full pointer-events-none"
            style={{
              transform: 'scale(0.67)',
              transformOrigin: 'top left',
              width: '150%',
              height: '150%',
            }}
            loading="lazy"
            sandbox="allow-scripts allow-same-origin"
          />
          {/* Overlay to prevent interaction, with hover CTA */}
          <div
            className={`absolute inset-0 transition-all duration-300 flex items-center justify-center ${
              hovered
                ? 'bg-black/30 backdrop-blur-[2px]'
                : 'bg-transparent'
            }`}
          >
            {hovered && (
              <a
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-accent text-sm h-10 px-6 animate-[scaleIn_0.2s_ease-out]"
              >
                Open App
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 3h8v8M13 3L3 13" />
                </svg>
              </a>
            )}
          </div>
        </div>
      )}

      {/* No-preview placeholder for tools without href */}
      {!tool.href && (
        <div className="relative w-full h-[280px] bg-gradient-to-br from-ds-surface to-ds-bg flex items-center justify-center border-b border-ds-border">
          <div className="text-center">
            <div className="w-16 h-16 rounded-2xl bg-ds-primary/10 flex items-center justify-center mx-auto mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
            </div>
            <p className="font-jakarta font-semibold text-ds-muted text-sm">Coming Soon</p>
          </div>
        </div>
      )}

      {/* Card body */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start gap-4 mb-4">
          <div className="icon-box flex-shrink-0">
            {icon}
          </div>
          <div>
            <h3 className="font-jakarta font-bold text-lg text-ds-heading">{tool.name}</h3>
          </div>
        </div>
        <p className="font-jakarta text-ds-muted text-sm leading-relaxed mb-6 flex-1">
          {tool.description}
        </p>
        {tool.href ? (
          <a
            href={tool.href}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-accent text-sm h-11 w-full justify-center"
          >
            {tool.cta}
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 8h10M9 4l4 4-4 4" />
            </svg>
          </a>
        ) : (
          <span className="btn-light text-sm h-11 w-full justify-center opacity-60 cursor-default pointer-events-none">
            {tool.cta}
          </span>
        )}
      </div>
    </div>
  );
}

export default function FreeSaas() {
  useEffect(() => {
    const classes = ['reveal', 'reveal-left', 'reveal-right', 'stagger'];
    const els = document.querySelectorAll(classes.map(c => `.${c}`).join(','));

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main>
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-20">
        <div className="max-w-[1356px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto reveal">
            <div className="sub-title mb-6 mx-auto w-fit">
              <span className="sub-title-dot" />
              Tool Drops
            </div>
            <h1 className="font-jakarta font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-ds-heading mb-6">
              Free Tools We <span className="gradient-text">Build & Ship</span>
            </h1>
            <p className="font-jakarta text-lg text-ds-muted leading-relaxed max-w-2xl mx-auto">
              We regularly share free tools, public build breakdowns, and proof-led examples
              of how we approach real business software. These are designed to help people see
              what&apos;s possible and show the kind of work we build.
            </p>
          </div>
        </div>
      </section>

      {/* Tools grid */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-[1356px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger reveal">
            {tools.map((tool, i) => (
              <ToolCard key={tool.name} tool={tool} icon={icons[i]} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-24 lg:pb-32">
        <div className="max-w-[1356px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="card p-10 sm:p-14 text-center reveal">
            <h2 className="font-jakarta font-extrabold text-2xl sm:text-3xl text-ds-heading mb-4">
              Need a Custom Tool <span className="gradient-text">Built for You?</span>
            </h2>
            <p className="font-jakarta text-ds-muted text-base max-w-xl mx-auto mb-8">
              These free tools are just a taste. We build full internal platforms, AI-powered
              automations, and client-facing software for service agencies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/schedule" className="btn-dark text-sm h-11">
                Book a Strategy Call
              </a>
              <a href="/" className="btn-light text-sm h-11">
                See What We Build
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
