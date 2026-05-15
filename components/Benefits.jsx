'use client';

/*
  ─────────────────────────────────────────────────────────────
  TODO — STATS: The 4 figures below are directional placeholders.
  Replace each `value` with a real, defensible number before launch
  (or soften the copy if a hard number can't be backed up):
    • {{STAT_HOURS_RECOVERED}}   — currently "60-100"
    • {{STAT_VISIBILITY}}        — currently "100%"
    • {{STAT_HEADCOUNT}}         — currently "0"
    • {{STAT_TIME_TO_LIVE}}      — currently "Weeks"
  ─────────────────────────────────────────────────────────────
*/

const stats = [
  {
    value: '60-100', // {{STAT_HOURS_RECOVERED}}
    title: 'AM hours recovered every week',
    body: 'Time your account managers get back across the team once reporting stops being a manual, every-client job.',
  },
  {
    value: '100%', // {{STAT_VISIBILITY}}
    title: 'Live visibility, every account',
    body: 'Every client\'s spend, ROAS, and pacing on one dashboard. No account is a black box between reporting cycles.',
  },
  {
    value: '0', // {{STAT_HEADCOUNT}}
    title: 'Additional headcount required',
    body: 'No analyst salary, no new seat, no recruiting cycle. The infrastructure does the heavy lifting your team was doing by hand.',
  },
  {
    value: 'Weeks', // {{STAT_TIME_TO_LIVE}}
    title: 'To implementation, not quarters',
    body: 'First client accounts are live on your dashboard within weeks of kickoff — not after a half-year build.',
  },
];

export default function Benefits() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-ds-bg">
      <div className="relative z-10 max-w-[1356px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="content-wrap">

          <div className="text-center mb-14 lg:mb-20 reveal">
            <div className="sub-title mx-auto mb-6">
              <span className="sub-title-dot" />
              Outcomes
            </div>
            <h2
              className="font-jakarta font-extrabold text-4xl sm:text-5xl lg:text-[3.5rem] text-ds-heading mb-6 max-w-3xl mx-auto"
              style={{ lineHeight: '1.1', letterSpacing: '-0.04em' }}
            >
              What changes when the{' '}
              <span className="gradient-text">reporting bottleneck is gone</span>
            </h2>
          </div>

          <div className="stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {stats.map((s, i) => (
              <div key={i} className="card p-8 lg:p-10 group overflow-hidden flex flex-col">
                <span
                  className="font-jakarta font-extrabold text-5xl lg:text-6xl gradient-text mb-4"
                  style={{ letterSpacing: '-0.04em', lineHeight: '1' }}
                >
                  {s.value}
                </span>
                <h3
                  className="font-jakarta font-bold text-lg text-ds-heading mb-3 title-gradient"
                  style={{ letterSpacing: '-0.03em' }}
                >
                  {s.title}
                </h3>
                <p className="font-jakarta text-sm text-ds-muted leading-relaxed" style={{ letterSpacing: '-0.02em' }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 section-divider" />
    </section>
  );
}
