'use client';

const BOOK_URL = '/schedule';

const attributes = [
  'Cost',
  'Time to ramp',
  'Quality consistency',
  'Builds real infrastructure',
  'Scales with new clients',
  'Client-facing deliverables',
];

const columns = [
  {
    name: 'Hiring an Analyst',
    highlight: false,
    values: [
      '$80-100K/yr, plus benefits and overhead',
      '2-3 months before they are fully useful',
      'Rises and falls with one individual',
      'Rarely — the work still lives in spreadsheets',
      'You start another hiring cycle',
      'Not what the role is built for',
    ],
  },
  {
    name: 'Hiring a Freelancer',
    highlight: false,
    values: [
      '$3-6K/mo, with scope creep on every engagement',
      'Re-briefed from scratch on each new project',
      'Inconsistent from one week to the next',
      'No — you get one-off reports, not a system',
      'Everything bottlenecks on one person',
      'Generic exported reports',
    ],
  },
  {
    name: 'DataStaq AI',
    highlight: true,
    values: [
      'Fractional retainer — a slice of one salary',
      'Live across your accounts in weeks',
      'Owned, monitored, and documented',
      'Yes — real data infrastructure from day one',
      'New clients onboarded as part of the partnership',
      'Branded dashboards your clients log into',
    ],
  },
];

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
    <path d="M3 8l3.5 3.5L13 4" stroke="#C9A227" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const DashIcon = () => (
  <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
    <path d="M4 8h8" stroke="#A1A1AA" strokeWidth="1.6" strokeLinecap="round" />
  </svg>
);

export default function Differentiation() {
  return (
    <section id="comparison" className="relative py-20 lg:py-28 overflow-hidden bg-white">
      <div className="relative z-10 max-w-[1356px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="content-wrap">

          <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-20 reveal">
            <div className="sub-title mx-auto mb-6">
              <span className="sub-title-dot" />
              Comparison
            </div>
            <h2
              className="font-jakarta font-extrabold text-4xl sm:text-5xl lg:text-[3.5rem] text-ds-heading mb-6"
              style={{ lineHeight: '1.1', letterSpacing: '-0.04em' }}
            >
              Not a hire. Not a freelancer.{' '}
              <span className="gradient-text">A built-for-you data system.</span>
            </h2>
            <p className="font-jakarta text-lg text-ds-muted leading-relaxed" style={{ letterSpacing: '-0.02em' }}>
              The two obvious options both leave you managing the work. Here is how a fractional
              data partner compares on the things that actually matter.
            </p>
          </div>

          {/* ── Desktop: aligned comparison table ── */}
          <div className="reveal hidden lg:block">
            <div className="grid grid-cols-[1.3fr_1fr_1fr_1.15fr] gap-3">
              {/* Header row */}
              <div className="flex items-end pb-4">
                <span className="font-jakarta text-xs font-semibold uppercase tracking-widest text-ds-subtle">
                  Compare
                </span>
              </div>
              {columns.map((col, ci) => (
                <div
                  key={ci}
                  className={`rounded-t-2xl px-6 py-5 text-center ${col.highlight ? '' : ''}`}
                  style={
                    col.highlight
                      ? {
                          background: 'radial-gradient(62.64% 82.75% at 28.14% -10.42%, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%), #C9A227',
                          boxShadow: '0 2px 12px rgba(201,162,39,0.25)',
                        }
                      : { background: '#FAF6EA', border: '1px solid rgba(0,0,0,0.06)' }
                  }
                >
                  {col.highlight && (
                    <span className="font-jakarta text-[10px] font-bold uppercase tracking-widest text-white/80 block mb-1">
                      Recommended
                    </span>
                  )}
                  <span
                    className={`font-jakarta font-bold text-base ${col.highlight ? 'text-white' : 'text-ds-heading'}`}
                    style={{ letterSpacing: '-0.02em' }}
                  >
                    {col.name}
                  </span>
                </div>
              ))}

              {/* Attribute rows */}
              {attributes.map((attr, ri) => (
                <div key={ri} className="contents">
                  <div className="flex items-center px-2 py-4 border-t border-black/[0.07]">
                    <span className="font-jakarta font-semibold text-sm text-ds-heading" style={{ letterSpacing: '-0.02em' }}>
                      {attr}
                    </span>
                  </div>
                  {columns.map((col, ci) => (
                    <div
                      key={ci}
                      className={`flex items-start gap-2 px-6 py-4 border-t ${
                        ri === attributes.length - 1 && col.highlight ? 'rounded-b-2xl' : ''
                      }`}
                      style={
                        col.highlight
                          ? {
                              background: 'rgba(201,162,39,0.05)',
                              borderTop: '1px solid rgba(201,162,39,0.15)',
                              borderLeft: '1px solid rgba(201,162,39,0.15)',
                              borderRight: '1px solid rgba(201,162,39,0.15)',
                              borderBottom: ri === attributes.length - 1 ? '1px solid rgba(201,162,39,0.15)' : 'none',
                            }
                          : { borderTopColor: 'rgba(0,0,0,0.07)' }
                      }
                    >
                      {col.highlight ? <CheckIcon /> : <DashIcon />}
                      <span
                        className={`font-jakarta text-sm leading-relaxed ${
                          col.highlight ? 'text-ds-heading font-medium' : 'text-ds-muted'
                        }`}
                        style={{ letterSpacing: '-0.02em' }}
                      >
                        {col.values[ri]}
                      </span>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* ── Mobile: stacked option cards ── */}
          <div className="stagger lg:hidden grid grid-cols-1 gap-5">
            {columns.map((col, ci) => (
              <div
                key={ci}
                className="card p-7"
                style={
                  col.highlight
                    ? { border: '2px solid #C9A227', background: 'rgba(201,162,39,0.03)' }
                    : {}
                }
              >
                <div className="flex items-center gap-2 mb-5">
                  {col.highlight && (
                    <span className="font-jakarta text-[10px] font-bold uppercase tracking-widest text-white px-2 py-0.5 rounded-full" style={{ background: '#C9A227' }}>
                      Recommended
                    </span>
                  )}
                  <h3 className="font-jakarta font-bold text-xl text-ds-heading" style={{ letterSpacing: '-0.03em' }}>
                    {col.name}
                  </h3>
                </div>
                <ul className="space-y-4">
                  {attributes.map((attr, ri) => (
                    <li key={ri} className="flex items-start gap-3">
                      {col.highlight ? <CheckIcon /> : <DashIcon />}
                      <div>
                        <div className="font-jakarta text-xs font-semibold uppercase tracking-wider text-ds-subtle mb-0.5">
                          {attr}
                        </div>
                        <div
                          className={`font-jakarta text-sm leading-relaxed ${
                            col.highlight ? 'text-ds-heading font-medium' : 'text-ds-muted'
                          }`}
                          style={{ letterSpacing: '-0.02em' }}
                        >
                          {col.values[ri]}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="reveal text-center mt-14">
            <p className="font-jakarta text-lg text-ds-heading font-medium" style={{ letterSpacing: '-0.02em' }}>
              It is not a tool, a temp, or another seat to fill.
            </p>
            <p className="font-jakarta text-xl font-bold gradient-text mt-2 mb-8" style={{ letterSpacing: '-0.03em' }}>
              It is infrastructure with a partner attached.
            </p>
            <a href={BOOK_URL} className="btn-dark">
              Book a Strategy Call
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 section-divider" />
    </section>
  );
}
