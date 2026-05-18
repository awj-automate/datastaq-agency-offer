'use client';
import { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

/* ─── Case study data ─────────────────────────────────────── */
const caseStudies = [
  {
    id: 'founders-row',
    industry: 'Private Equity / Multi-Brand E-Commerce',
    company: 'Founders Row',
    logo: null,
    headline: 'Portfolio-wide ad account visibility for a PE firm managing a roster of e-commerce brands',
    result: 'Live visibility across the full portfolio',
    resultColor: 'text-ds-primary',
    challenge:
      'Founders Row manages a growing roster of e-commerce brands, each with its own ad accounts, agency partners, and reporting cadence. Every portfolio review meant chasing decks and one-off spreadsheets from a dozen teams, and the deal team had no live view of how spend, ROAS, or CAC was trending across the whole portfolio.',
    solution:
      'We built a unified ad data layer that pulls every portfolio brand\'s Meta, Google, and Shopify data into one live portfolio dashboard. Proactive alerts flag underperforming campaigns, budget anomalies, and ROAS drops across every brand in real time, so the deal team spots issues before the next board meeting — not three weeks after.',
    techStack: ['Meta Ads API', 'Google Ads API', 'Shopify', 'BigQuery', 'Custom Dashboards', 'Proactive Alerts'],
    results: [
      { metric: 'Every brand', label: 'Unified into one live view' },
      { metric: 'Real-time', label: 'ROAS, CAC, and spend monitoring' },
      { metric: 'Hours → Minutes', label: 'For portfolio reporting' },
    ],
  },
  {
    id: 'bobs-watches',
    industry: 'E-Commerce / Luxury Retail',
    company: "Bob's Watches",
    logo: null,
    headline: 'Unified ad and revenue visibility for a luxury e-commerce brand',
    result: 'Single source of truth across every paid channel',
    resultColor: 'text-emerald-600',
    challenge:
      "Bob's Watches was scaling paid spend across Meta, Google, and other channels, but performance lived in three disconnected dashboards. There was no single number for blended ROAS, no live tie between ad spend and Shopify revenue, and no early warning when a campaign's CAC started creeping.",
    solution:
      'We connected every ad platform to their Shopify revenue data inside one live dashboard, then layered proactive alerts on top for CAC creep, ROAS dips, and budget overspends. Leadership and the ad team now share one set of numbers and catch anomalies the day they happen, not at end-of-month review.',
    techStack: ['Meta Ads API', 'Google Ads API', 'Shopify', 'BigQuery', 'Custom Dashboards', 'Proactive Alerts'],
    results: [
      { metric: 'Unified', label: 'Ad spend + Shopify revenue in one view' },
      { metric: 'Real-time', label: 'CAC and ROAS anomaly alerts' },
      { metric: 'Day-of', label: 'Detection vs. end-of-month' },
    ],
  },
  {
    id: 'xit',
    industry: 'E-Commerce / Wholesale',
    company: 'X-iT Outdoors',
    logo: '/xitoutdoors_logo.png',
    headline: 'Unified ad and revenue dashboard for a wholesale e-commerce brand',
    result: '+13% new cart orders',
    resultColor: 'text-emerald-600',
    challenge:
      "X-iT's team ran on stale ad and revenue data scattered across Shopify, Google Analytics, and their paid channels. Manual data entry compounded the problem, leaving no single view of what was being spent, what was selling, and which campaigns were actually moving margin.",
    solution:
      'We shipped a unified ad and revenue dashboard with a real-time pipeline pulling spend, sales, and inventory into one place. Validation, deduplication, and proactive alerts surface anomalies and underperforming campaigns before they cost the business.',
    techStack: ['Meta Ads', 'Google Ads', 'Shopify API', 'Google Analytics', 'ETL Pipelines', 'Proactive Alerts'],
    results: [
      { metric: '13%', label: 'Increase in new cart orders' },
      { metric: 'Daily', label: 'Automated ad + revenue refresh' },
      { metric: 'Real-time', label: 'Spend + revenue visibility' },
    ],
  },
  {
    id: 'azorra',
    industry: 'Aviation / Leasing',
    company: 'Azorra',
    logo: '/azorra_logo.png',
    headline: 'Live multi-source intelligence dashboard — the same engine that powers our agency portfolios',
    result: 'Real-time operational intelligence',
    resultColor: 'text-ds-primary',
    challenge:
      "Azorra's team needed one place to track a global aircraft fleet, industry news, CRM activity, and internal updates. Information was scattered across five tools, slowing every fleet, market, and client decision — the same pattern we see in agencies juggling 10-20+ client ad accounts.",
    solution:
      'We built a live intelligence dashboard pulling flight tracking, news APIs, CRM, and internal tools into one interface with real-time alerts on the signals that mattered. The same data-unification engine now powers our ad infrastructure work for agencies and PE portfolios.',
    techStack: ['Python', 'SQL', 'Live Data APIs', 'CRM Integration', 'Data Warehouse', 'Proactive Alerts'],
    results: [
      { metric: '4+', label: 'Data sources unified into one live view' },
      { metric: 'Real-time', label: 'Operational intelligence and alerts' },
      { metric: 'Single', label: 'Source of truth for decision-making' },
    ],
  },
];

const testimonials = [
  {
    quote: 'John was an amazing resource and partner. His strong expertise, understanding of our business need, and communication skills resulted in a successful execution and completion of our project.',
    stars: 5,
  },
  {
    quote: 'Lots of skill and easy to work with.',
    stars: 5,
  },
  {
    quote: 'John got to grips with what we needed quickly and we\'re happy with the final result. He was helpful with troubleshooting and a great communicator throughout.',
    stars: 5,
  },
];

/* ─── Page ────────────────────────────────────────────────── */
export default function CaseStudiesPage() {
  useEffect(() => {
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('in-view');
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    );
    document.querySelectorAll('.reveal,.reveal-left,.reveal-right,.stagger').forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main>
      <Navbar />

      {/* ── Hero ────────────────────────────────────── */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-ds-bg">
        {/* Decorative blobs */}
        <div
          className="absolute rounded-full blur-[120px] opacity-[0.08] pointer-events-none"
          style={{ width: 500, height: 500, top: '-10%', right: '-5%', background: 'radial-gradient(circle, #C9A227 0%, transparent 70%)' }}
        />
        <div
          className="absolute rounded-full blur-[100px] opacity-[0.06] pointer-events-none"
          style={{ width: 400, height: 400, bottom: '0%', left: '-5%', background: 'radial-gradient(circle, #C9A227 0%, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-[1356px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="content-wrap text-center">
            <div className="reveal">
              <div className="sub-title inline-flex items-center gap-2 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-ds-primary" />
                <span>Case Studies</span>
              </div>

              <h1
                className="font-jakarta font-extrabold text-4xl sm:text-5xl lg:text-6xl text-ds-heading mb-6"
                style={{ lineHeight: '1.08', letterSpacing: '-0.04em' }}
              >
                Real software,<br />
                <span className="gradient-text">shipped with real teams</span>
              </h1>

              <p
                className="font-jakarta text-lg text-ds-muted max-w-2xl mx-auto"
                style={{ letterSpacing: '-0.02em', lineHeight: '1.7' }}
              >
                Live ad dashboards, portfolio-wide visibility, and unified data infrastructure
                we built with agencies, PE firms, and direct-to-consumer brands. Here is what
                we shipped and what it did for the business.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Case Studies ────────────────────────────── */}
      <section className="relative py-20 bg-ds-bg">
        <div className="relative z-10 max-w-[1356px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="content-wrap space-y-16">
            {caseStudies.map((cs, idx) => (
              <CaseStudyCard key={cs.id} cs={cs} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* ── More Examples Banner ────────────────────── */}
      <section className="relative py-16 bg-ds-bg">
        <div className="relative z-10 max-w-[1356px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="content-wrap">
            <div className="reveal text-center px-5 py-10 sm:py-12 rounded-2xl border border-ds-border bg-white/60">
              <p
                className="font-jakarta font-bold text-xl sm:text-2xl text-ds-heading mb-3"
                style={{ letterSpacing: '-0.03em' }}
              >
                And many more across the portfolio
              </p>
              <p className="font-jakarta text-ds-muted max-w-xl mx-auto mb-6" style={{ letterSpacing: '-0.02em' }}>
                From single-brand DTC to multi-brand PE portfolios to agencies running 10-20+
                active clients. If you need a partner who ships ad data infrastructure week by
                week, we have done it before.
              </p>
              <a href="/schedule" className="btn-dark text-sm h-11 inline-flex">
                Book a Strategy Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ────────────────────────────── */}
      <section className="relative py-20 bg-ds-bg">
        <div className="relative z-10 max-w-[1356px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="content-wrap">
            <div className="text-center mb-12 reveal">
              <div className="sub-title inline-flex items-center gap-2 mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-ds-primary" />
                <span>Testimonials</span>
              </div>
              <h2
                className="font-jakarta font-extrabold text-3xl sm:text-4xl text-ds-heading"
                style={{ lineHeight: '1.1', letterSpacing: '-0.04em' }}
              >
                What past clients think
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger">
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className="card p-5 sm:p-7 flex flex-col justify-between"
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.stars }).map((_, j) => (
                      <svg key={j} width="18" height="18" viewBox="0 0 20 20" fill="#F59E0B">
                        <path d="M10 1l2.39 4.84 5.34.78-3.87 3.77.91 5.33L10 13.27l-4.77 2.51.91-5.33L2.27 6.68l5.34-.78L10 1z" />
                      </svg>
                    ))}
                  </div>

                  <p
                    className="font-jakarta text-ds-text leading-relaxed flex-1"
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </p>

                  <div className="mt-5 pt-4 border-t border-ds-border">
                    <p className="font-jakarta text-sm text-ds-muted">Verified Client</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

/* ─── Case Study Card Component ───────────────────────────── */
function CaseStudyCard({ cs, idx }) {
  const isEven = idx % 2 === 0;

  return (
    <div className={`reveal${isEven ? '' : '-right'}`}>
      <div className="card overflow-hidden">
        {/* Top bar */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 px-5 sm:px-7 py-4 border-b border-ds-border bg-ds-surface/50">
          <div className="flex items-center gap-3 min-w-0">
            {cs.logo && (
              <img
                src={cs.logo}
                alt={cs.company}
                className="rounded-lg object-contain bg-white border border-ds-border p-1 shrink-0 w-14 h-14 sm:w-[76px] sm:h-[76px]"
              />
            )}
            <div className="min-w-0">
              <span className="font-jakarta font-bold text-sm text-ds-heading block break-words">{cs.company}</span>
              <span className="font-jakarta text-xs text-ds-muted">{cs.industry}</span>
            </div>
          </div>
          <span className={`font-jakarta font-bold text-sm sm:text-right break-words ${cs.resultColor}`}>{cs.result}</span>
        </div>

        <div className="p-5 sm:p-7 lg:p-9">
          {/* Headline */}
          <h3
            className="font-jakarta font-extrabold text-xl sm:text-2xl text-ds-heading mb-6"
            style={{ lineHeight: '1.15', letterSpacing: '-0.03em' }}
          >
            {cs.headline}
          </h3>

          {/* Challenge + Solution grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-md bg-red-50 flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path d="M10 6v4m0 4h.01M19 10a9 9 0 11-18 0 9 9 0 0118 0z" stroke="#EF4444" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                </div>
                <span className="font-jakarta font-bold text-ds-heading uppercase tracking-wider" style={{ fontSize: '13px' }}>Challenge</span>
              </div>
              <p className="font-jakarta text-base sm:text-lg text-ds-text leading-relaxed" style={{ letterSpacing: '-0.02em' }}>
                {cs.challenge}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-md bg-emerald-50 flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                    <path d="M5 10l3 3 7-7" stroke="#10B981" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <span className="font-jakarta font-bold text-ds-heading uppercase tracking-wider" style={{ fontSize: '13px' }}>Solution</span>
              </div>
              <p className="font-jakarta text-base sm:text-lg text-ds-text leading-relaxed" style={{ letterSpacing: '-0.02em' }}>
                {cs.solution}
              </p>
            </div>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-8">
            {cs.techStack.map((tech) => (
              <span
                key={tech}
                className="font-jakarta text-xs font-medium px-3 py-1.5 rounded-full bg-ds-surface border border-ds-border text-ds-muted"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Results row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
            {cs.results.map((r, i) => (
              <div
                key={i}
                className="text-center p-4 rounded-xl bg-ds-surface border border-ds-border min-w-0"
              >
                <div className="font-jakarta font-extrabold text-xl sm:text-2xl text-ds-heading break-words" style={{ letterSpacing: '-0.03em' }}>
                  {r.metric}
                </div>
                <div className="font-jakarta text-xs text-ds-muted mt-1 break-words" style={{ letterSpacing: '-0.02em' }}>
                  {r.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
