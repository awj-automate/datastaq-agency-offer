'use client';

const cards = [
  {
    number: '01.',
    title: 'Performance agencies at $100K+/mo in spend',
    body: 'You are managing serious budgets across Meta and Google. The reporting load now scales faster than your team does, and every dollar of spend needs a number behind it.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M3 3v18h18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M7 14l4-4 3 3 5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M16 7h4v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: '02.',
    title: 'Agencies with 10+ active clients',
    body: 'Every new logo adds another set of dashboards, exports, and weekly decks. The work compounds with each account — the hours in the day do not.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M17 21v-2a4 4 0 00-4-4H7a4 4 0 00-4 4v2M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="10" cy="7" r="4" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    number: '03.',
    title: 'Teams where AMs are doing analyst work',
    body: 'Your account managers are sharp and client-facing — and spending half their week wrangling spreadsheets instead of strategy. The reporting is eating the role.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14 2v6h6M8 13h8M8 17h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function WhoItsFor() {
  return (
    <section id="who-its-for" className="relative py-20 lg:py-28 overflow-hidden bg-white">
      <div className="relative z-10 max-w-[1356px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="content-wrap">

          <div className="text-center mb-14 lg:mb-20 reveal">
            <div className="sub-title mx-auto mb-6">
              <span className="sub-title-dot" />
              Who It's For
            </div>
            <h2
              className="font-jakarta font-extrabold text-4xl sm:text-5xl lg:text-[3.5rem] text-ds-heading mb-6 max-w-3xl mx-auto"
              style={{ lineHeight: '1.1', letterSpacing: '-0.04em' }}
            >
              Built for agencies where{' '}
              <span className="gradient-text">reporting has become the bottleneck</span>
            </h2>
            <p className="font-jakarta text-lg text-ds-muted max-w-2xl mx-auto leading-relaxed" style={{ letterSpacing: '-0.02em' }}>
              This is not for early agencies still finding their footing. It is for operators
              who have scaled past the point where manual reporting quietly works.
            </p>
          </div>

          <div className="stagger grid grid-cols-1 md:grid-cols-3 gap-5">
            {cards.map((c, i) => (
              <div key={i} className="card p-8 lg:p-10 group overflow-hidden">
                <span className="bg-number">{c.number}</span>
                <div className="relative z-10">
                  <div className="icon-box mb-6">{c.icon}</div>
                  <h3
                    className="font-jakarta font-bold text-xl text-ds-heading mb-3 title-gradient"
                    style={{ letterSpacing: '-0.03em' }}
                  >
                    {c.title}
                  </h3>
                  <p className="font-jakarta text-sm text-ds-muted leading-relaxed" style={{ letterSpacing: '-0.02em' }}>
                    {c.body}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 section-divider" />
    </section>
  );
}
