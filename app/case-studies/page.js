'use client';
import { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

/* ─── Case study data ─────────────────────────────────────── */
const caseStudies = [
  {
    id: 'profisee',
    industry: 'Enterprise SaaS',
    company: 'Profisee',
    logo: '/profisee_logo.png',
    headline: 'Custom sales intelligence app for an enterprise SaaS team',
    result: '+$5.6M ARR in new pipeline',
    resultColor: 'text-emerald-600',
    challenge:
      'Profisee\'s marketing team had no unified software for tracking lead activity, intent signals, or pipeline attribution. Everything lived in spreadsheets, CRM records were stale, and no one knew what was actually driving pipeline.',
    solution:
      'We shipped a custom sales intelligence app on top of Salesforce, pulling in lead scoring, intent signals, and attribution data. Automations flagged high-intent accounts in real time and routed them to the right reps instantly.',
    techStack: ['Salesforce', 'Python', 'SQL', 'ETL Pipelines', 'Custom Dashboards'],
    results: [
      { metric: '$5.6M', label: 'New ARR pipeline generated' },
      { metric: 'Real-time', label: 'Lead and intent signal monitoring' },
      { metric: '3x', label: 'Faster lead-to-rep routing' },
    ],
  },
  {
    id: 'tova',
    industry: 'Legal Services',
    company: 'TOVA QDRO & Retirement Valuators',
    logo: '/tova_logo.png',
    headline: 'Internal operations app for a legal services firm',
    result: '+22% revenue from new cases',
    resultColor: 'text-emerald-600',
    challenge:
      'TOVA\'s data was split between three systems: Lawmatics, Zoho, and QuickBooks. Intake was manual and error-prone, retirement valuations required multi-step math by hand, and leadership had no real visibility into pipeline or margins.',
    solution:
      'We built a custom internal app and data layer that unified all three systems, automated the financial calculations behind QDRO valuations, and shipped reporting dashboards that gave leadership live visibility into pipeline health and case margins.',
    techStack: ['Google BigQuery', 'Python', 'SQL', 'Lawmatics', 'Zoho CRM', 'QuickBooks'],
    results: [
      { metric: '22%', label: 'Revenue increase from new cases' },
      { metric: '60%', label: 'Faster client onboarding' },
      { metric: 'Unified', label: 'Financial reporting across 3 systems' },
    ],
  },
  {
    id: 'xit',
    industry: 'E-Commerce / Wholesale',
    company: 'X-iT Outdoors',
    logo: '/xitoutdoors_logo.png',
    headline: 'Real-time inventory and sales app for a golf cart wholesaler',
    result: '+13% new cart orders',
    resultColor: 'text-emerald-600',
    challenge:
      'X-iT\'s sales team ran on stale inventory data scattered across Shopify, Google Analytics, and internal finance tools. Manual data entry from the team compounded the problem, making daily sales decisions unreliable.',
    solution:
      'We shipped a custom inventory and sales app with a real-time data pipeline, baked-in validation and deduplication logic, and a daily-use dashboard so the sales team could see exactly what was in stock, what was selling, and where margins were strongest.',
    techStack: ['Python', 'SQL', 'Shopify API', 'Google Analytics', 'ETL Pipelines'],
    results: [
      { metric: '13%', label: 'Increase in new cart orders' },
      { metric: 'Daily', label: 'Automated data refresh (GBs)' },
      { metric: 'Real-time', label: 'Inventory visibility for sales team' },
    ],
  },
  {
    id: 'azorra',
    industry: 'Aviation / Leasing',
    company: 'Azorra',
    logo: '/azorra_logo.png',
    headline: 'Custom intelligence platform for an aircraft leasing company',
    result: 'Real-time operational intelligence',
    resultColor: 'text-ds-primary',
    challenge:
      'Azorra\'s team needed one app to track a global aircraft fleet, industry news, CRM activity, and internal updates. Information was scattered across five tools, slowing every fleet, market, and client decision.',
    solution:
      'We built a custom intelligence platform that pulls live flight tracking, aviation news APIs, CRM data, and internal tools into one interface, so leadership can spot fleet risks, market shifts, and client opportunities in real time.',
    techStack: ['Python', 'SQL', 'Flight Tracking APIs', 'CRM Integration', 'Data Warehouse'],
    results: [
      { metric: '4+', label: 'Data sources unified' },
      { metric: 'Real-time', label: 'Fleet and market intelligence' },
      { metric: 'Single', label: 'Source of truth for decision-making' },
    ],
  },
  {
    id: 'eagle-search',
    industry: 'Staffing / Recruiting',
    company: 'Eagle Search US',
    logo: null,
    headline: 'AI-powered outbound app for a staffing firm',
    result: 'Automated outbound at scale',
    resultColor: 'text-ds-primary',
    challenge:
      'Eagle Search\'s team was buried in manual prospecting across Apollo, LinkedIn, and other B2B sources. There was no consistent way to score, segment, or personalize outreach at scale.',
    solution:
      'We shipped an AI-powered outbound app that unifies lead sources into one clean database, scores and segments leads automatically, and generates personalized outreach messaging wired straight into their campaign tools.',
    techStack: ['Python', 'Apollo API', 'LinkedIn', 'AI/ML', 'Campaign Automation'],
    results: [
      { metric: 'Real-time', label: 'Lead scoring and segmentation' },
      { metric: 'Auto', label: 'Personalized outreach generation' },
      { metric: '5+', label: 'Lead data sources unified' },
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
                MVPs, apps, dashboards, AI features, and custom software products we built
                with founders and teams. Here is what we shipped and what it did for the business.
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
                And many more across industries
              </p>
              <p className="font-jakarta text-ds-muted max-w-xl mx-auto mb-6" style={{ letterSpacing: '-0.02em' }}>
                Healthcare, fintech, real estate, logistics, manufacturing. If you have a product
                idea and need a partner who ships week by week, we have done it before.
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
