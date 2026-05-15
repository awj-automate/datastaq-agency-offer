'use client';

const features = [
  {
    number: '01.',
    title: 'Unified data layer',
    body: 'Every client\'s ad platforms, CRM, and revenue tools pulled into one place. One schema, one source of truth — no more switching between 40 browser tabs to answer a single question.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M12 2l9 5-9 5-9-5 9-5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M3 12l9 5 9-5M3 17l9 5 9-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: '02.',
    title: 'Live agency-wide dashboard',
    body: 'Spend, ROAS, CPL, and pacing across every account, updating in real time. You see the whole book of business at a glance — and so does every account manager on your team.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 21h18M8 17v4M16 17v4M7 12l3-3 3 2 4-5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: '03.',
    title: 'Proactive campaign health alerts',
    body: 'Spend spikes, ROAS drops, and pacing problems surface automatically — before your client emails you about them. The system watches every account so your AMs don\'t have to.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M18 8a6 6 0 00-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 01-3.4 0" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: '04.',
    title: 'Client-facing automated visibility',
    body: 'Branded dashboards and scheduled reports your clients can actually log into. Reporting stops being a weekly fire drill and becomes a standing deliverable that runs itself.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 3h6v6M10 14L21 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: '05.',
    title: 'Custom reporting workflows',
    body: 'Built around your agency\'s metrics, your client mix, and how your team actually works — not a rigid template you have to bend your process around to use.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M4 21v-7M4 10V3M12 21v-9M12 8V3M20 21v-5M20 12V3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        <path d="M1 14h6M9 8h6M17 16h6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '06.',
    title: 'An ongoing partnership',
    body: 'We don\'t build it and disappear. We onboard new clients, adapt as the ad platforms change their APIs, and keep the whole system running and accurate as you grow.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M8 12l3 3 8-8M2 12l3 3M14 8l1-1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function Solution() {
  return (
    <section id="solution" className="relative py-20 lg:py-28 overflow-hidden bg-ds-bg">
      <div className="relative z-10 max-w-[1356px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="content-wrap">

          <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-20 reveal">
            <div className="sub-title mx-auto mb-6">
              <span className="sub-title-dot" />
              The Solution
            </div>
            <h2
              className="font-jakarta font-extrabold text-4xl sm:text-5xl lg:text-[3.5rem] text-ds-heading mb-6"
              style={{ lineHeight: '1.1', letterSpacing: '-0.04em' }}
            >
              What DataStaq AI{' '}
              <span className="gradient-text">actually does</span>
            </h2>
            <p className="font-jakarta text-lg text-ds-muted leading-relaxed mb-4" style={{ letterSpacing: '-0.02em' }}>
              We are not a tool you have to learn. We are not a freelancer you have to manage. We
              are not a hire you have to ramp. We are a fractional ad data partner that builds
              real infrastructure for your agency from day one.
            </p>
            <p className="font-jakarta text-lg text-ds-muted leading-relaxed" style={{ letterSpacing: '-0.02em' }}>
              We pull every client's ad platforms, CRM, and revenue tools into one live system —
              then keep that system running and growing alongside your agency.
            </p>
          </div>

          {/* Data flow visual */}
          <div className="reveal mb-12">
            <div className="flex items-center justify-center gap-3 flex-wrap">
              {['Meta Ads', 'Google Ads', 'GA4', 'Your CRM', 'Revenue tools'].map((label, i) => (
                <div
                  key={i}
                  className="px-4 py-2 rounded-full text-xs font-jakarta font-medium text-ds-text bg-white"
                  style={{
                    border: '1px solid rgba(0,0,0,0.1)',
                    animation: `blurAnimate 0.5s cubic-bezier(0.01,0.56,1,1) ${i * 0.1}s both`,
                  }}
                >
                  {label}
                </div>
              ))}
              <svg width="40" height="20" viewBox="0 0 40 20" fill="none" className="mx-1 hidden sm:block">
                <path d="M0 10h30M26 5l6 5-6 5" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
              </svg>
              <div
                className="px-5 py-2.5 rounded-full text-xs font-jakarta font-bold text-white"
                style={{
                  background: 'radial-gradient(62.64% 82.75% at 28.14% -10.42%, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%), #C9A227',
                  boxShadow: '0 2px 8px rgba(201,162,39,0.3)',
                }}
              >
                One Live Agency Dashboard
              </div>
            </div>
          </div>

          <div className="stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {features.map((f, i) => (
              <div key={i} className="card p-8 lg:p-10 group overflow-hidden">
                <span className="bg-number">{f.number}</span>
                <div className="relative z-10">
                  <div className="icon-box mb-6">{f.icon}</div>
                  <h3
                    className="font-jakarta font-bold text-xl text-ds-heading mb-3 title-gradient"
                    style={{ letterSpacing: '-0.03em' }}
                  >
                    {f.title}
                  </h3>
                  <p className="font-jakarta text-sm text-ds-muted leading-relaxed" style={{ letterSpacing: '-0.02em' }}>
                    {f.body}
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
