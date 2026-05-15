'use client';

const painPoints = [
  {
    number: '01.',
    title: '15-20+ hours lost every week',
    body: 'Account managers rebuild the same reports across Meta, Google, and GA4 by hand. Multiply that by your client count and it is a second full-time job nobody was hired for.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
        <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '02.',
    title: 'A full-time analyst does not pencil out',
    body: 'An $80-100K salary, plus months to ramp — and at the end you still have a person doing spreadsheet work, not a system. When they leave, the knowledge leaves with them.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: '03.',
    title: 'Freelancers do not build anything that lasts',
    body: 'Upwork hires are inconsistent week to week and hand back one-off reports. There is no infrastructure underneath — just another deliverable you have to QA before it reaches a client.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M3 12a9 9 0 0115-6.7L21 8M21 3v5h-5M21 12a9 9 0 01-15 6.7L3 16M3 21v-5h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: '04.',
    title: 'Dashboard tools still need someone to wire them',
    body: 'Looker Studio and the rest are blank canvases. Someone on your team still owns every connector, every formula, and every silent break at 6am before a client call.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
];

const stats = [
  { value: '15-20 hrs', label: 'per AM, per week, on reporting' },
  { value: '$80-100K', label: 'to hire a full-time analyst' },
  { value: '10-20+', label: 'client accounts to report on' },
];

export default function Problem() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-ds-bg">
      <div className="relative z-10 max-w-[1356px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="content-wrap">

          <div className="text-center mb-12 lg:mb-16 reveal">
            <div className="sub-title mx-auto mb-6">
              <span className="sub-title-dot" />
              The Problem
            </div>
            <h2
              className="font-jakarta font-extrabold text-4xl sm:text-5xl lg:text-[3.5rem] text-ds-heading mb-6 max-w-3xl mx-auto"
              style={{ lineHeight: '1.1', letterSpacing: '-0.04em' }}
            >
              Your agency has a{' '}
              <span className="gradient-text">hidden data tax</span>
            </h2>
            <div className="max-w-2xl mx-auto space-y-4">
              <p className="font-jakarta text-lg text-ds-muted leading-relaxed" style={{ letterSpacing: '-0.02em' }}>
                At 5 clients, manual reporting is an annoyance. At 15, it is a line item. Every
                account manager on your team is rebuilding the same Meta, Google, and GA4 numbers
                by hand, every week, for every client.
              </p>
              <p className="font-jakarta text-lg text-ds-muted leading-relaxed" style={{ letterSpacing: '-0.02em' }}>
                That is 15-20+ hours a week per AM that never touches strategy, creative, or
                retention — the work that actually keeps clients. It does not show up on an
                invoice, but you are paying for it.
              </p>
            </div>
          </div>

          {/* Supporting stat block */}
          <div className="reveal mb-14 lg:mb-20">
            <div className="flex flex-wrap items-stretch justify-center gap-3">
              {stats.map((s, i) => (
                <div
                  key={i}
                  className="card px-7 py-5 flex flex-col items-center text-center"
                  style={{ minWidth: '220px' }}
                >
                  <span className="font-jakarta font-extrabold text-3xl gradient-text" style={{ letterSpacing: '-0.03em' }}>
                    {s.value}
                  </span>
                  <span className="font-jakarta text-sm text-ds-muted mt-1" style={{ letterSpacing: '-0.02em' }}>
                    {s.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="stagger grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-4xl mx-auto">
            {painPoints.map((p, i) => (
              <div key={i} className="card p-8 lg:p-10 group overflow-hidden">
                {/* Background number */}
                <span className="bg-number">{p.number}</span>

                <div className="relative z-10">
                  <div className="icon-box mb-6">{p.icon}</div>
                  <h3
                    className="font-jakarta font-bold text-lg text-ds-heading mb-3 title-gradient"
                    style={{ letterSpacing: '-0.03em' }}
                  >
                    {p.title}
                  </h3>
                  <p className="font-jakarta text-sm text-ds-muted leading-relaxed" style={{ letterSpacing: '-0.02em' }}>
                    {p.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section divider */}
      <div className="absolute bottom-0 inset-x-0 section-divider" />
    </section>
  );
}
