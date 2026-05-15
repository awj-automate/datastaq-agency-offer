'use client';
import { useState } from 'react';

const steps = [
  {
    number: '01.',
    title: 'Discovery',
    body: 'We audit your current data stack, reporting workflows, and where AM hours actually go. Not a long questionnaire — a working session that maps the real bottleneck.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
        <path d="M21 21l-4.3-4.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '02.',
    title: 'Architecture',
    body: 'We design the data layer around your specific client mix, ad platforms, and the metrics your agency reports on. You see and approve the plan before anything gets built.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '03.',
    title: 'Build',
    body: 'We connect every client\'s ad platforms, CRM, and revenue tools and launch your live dashboards. First accounts are on the board within weeks, not quarters.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M10 13a5 5 0 007.54.54l3-3a5 5 0 00-7.07-7.07L11.76 5.2M14 11a5 5 0 00-7.54-.54l-3 3a5 5 0 007.07 7.07l1.7-1.7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: '04.',
    title: 'Partnership',
    body: 'Ongoing optimization, new-client onboarding, and proactive alerts. As your book of business grows, the data system grows with it — without another scope call.',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <path d="M3 12a9 9 0 0115-6.7L21 8M21 3v5h-5M21 12a9 9 0 01-15 6.7L3 16M3 21v-5h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="relative py-20 lg:py-28 overflow-hidden bg-white">
      <div className="relative z-10 max-w-[1356px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="content-wrap">

          <div className="text-center mb-14 lg:mb-20 reveal">
            <div className="sub-title mx-auto mb-6">
              <span className="sub-title-dot" />
              How It Works
            </div>
            <h2
              className="font-jakarta font-extrabold text-4xl sm:text-5xl lg:text-[3.5rem] text-ds-heading mb-6 max-w-3xl mx-auto"
              style={{ lineHeight: '1.1', letterSpacing: '-0.04em' }}
            >
              From audit to running infrastructure in{' '}
              <span className="gradient-text">four clear steps</span>
            </h2>
          </div>

          {/* Process accordion layout */}
          <div className="reveal">
            <div
              className="card p-6 lg:p-8"
              style={{ border: '6px solid rgba(236,236,236,0.3)' }}
            >
              <div className="grid lg:grid-cols-2 gap-8">
                {/* Steps list */}
                <div className="space-y-2">
                  {steps.map((s, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveStep(i)}
                      className={`w-full text-left rounded-xl p-5 transition-all duration-300 ${
                        activeStep === i
                          ? 'bg-white shadow-sm'
                          : 'bg-transparent hover:bg-white/50'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                            activeStep === i
                              ? 'text-white'
                              : 'text-ds-muted'
                          }`}
                          style={{
                            background: activeStep === i
                              ? 'radial-gradient(49.69% 57.86% at 50% 95.45%, #E5C463 0%, #C9A227 100%)'
                              : '#EBEBEB',
                            boxShadow: '0 0 8px 0 rgba(255,255,255,0.5) inset',
                          }}
                        >
                          {s.icon}
                        </div>
                        <div>
                          <div className="font-jakarta font-bold text-base text-ds-heading" style={{ letterSpacing: '-0.03em' }}>
                            {s.title}
                          </div>
                          <div className="font-jakarta text-xs text-ds-subtle mt-0.5">{s.number}</div>
                        </div>
                      </div>
                      {activeStep === i && (
                        <div className="mt-4 pl-[60px]">
                          <div className="process-active-bar">
                            <p className="font-jakarta text-sm text-ds-muted leading-relaxed" style={{ letterSpacing: '-0.02em' }}>
                              {s.body}
                            </p>
                          </div>
                        </div>
                      )}
                    </button>
                  ))}
                </div>

                {/* Visual side: step illustration */}
                <div className="hidden lg:flex items-center justify-center">
                  <div className="w-full max-w-sm">
                    {/* Step illustration mockup */}
                    <div
                      key={activeStep}
                      className="rounded-2xl overflow-hidden"
                      style={{
                        background: '#FFFFFF',
                        border: '6px solid rgba(236,236,236,0.4)',
                        boxShadow: '0 16px 40px rgba(0,0,0,0.06)',
                        animation: 'blurAnimate 0.4s cubic-bezier(0.01,0.56,1,1) both',
                      }}
                    >
                      <div className="px-4 py-2.5 border-b border-black/[0.04] flex items-center gap-2" style={{ background: '#FAFAFA' }}>
                        <div
                          className="w-6 h-6 rounded flex items-center justify-center text-white"
                          style={{ background: 'radial-gradient(49.69% 57.86% at 50% 95.45%, #E5C463 0%, #C9A227 100%)' }}
                        >
                          <span className="text-[8px] font-jakarta font-bold">{steps[activeStep].number.replace('.','')}</span>
                        </div>
                        <span className="text-[10px] font-jakarta font-semibold text-ds-heading">{steps[activeStep].title}</span>
                      </div>
                      <div className="p-4">
                        {activeStep === 0 && (
                          <div className="space-y-2">
                            <div className="text-[9px] font-jakarta text-ds-subtle mb-2">Discovery Session</div>
                            {['Where AM hours actually go', 'Your current reporting stack', 'Client + ad platform mix', 'What breaks every week'].map((t, i) => (
                              <div key={i} className="flex items-center gap-2">
                                <div className="w-4 h-4 rounded-full flex items-center justify-center bg-[#C9A227]/10">
                                  <div className="w-1 h-1 rounded-full bg-[#C9A227]" />
                                </div>
                                <span className="text-[9px] font-jakarta text-ds-muted">{t}</span>
                              </div>
                            ))}
                            <div className="text-[8px] font-jakarta text-[#C9A227] mt-2 pt-2 border-t border-black/[0.04]">A working session. No 40-field intake form.</div>
                          </div>
                        )}
                        {activeStep === 1 && (
                          <div className="space-y-2">
                            <div className="text-[9px] font-jakarta text-ds-subtle mb-2">Data Layer Blueprint</div>
                            <div className="rounded-lg p-2.5" style={{ background: '#F9FAFB', border: '1px solid rgba(0,0,0,0.04)' }}>
                              <div className="text-[9px] font-jakarta font-bold text-ds-heading mb-1.5">Designed for your agency</div>
                              <div className="space-y-1">
                                {['Source connectors mapped', 'Unified metric schema', 'Dashboard layouts drafted', 'Alert rules defined'].map((t, i) => (
                                  <div key={i} className="flex items-center gap-1.5">
                                    <svg width="8" height="8" viewBox="0 0 10 10" fill="none"><path d="M2 5l2.5 2.5L8 3" stroke="#28C840" strokeWidth="1.5" strokeLinecap="round"/></svg>
                                    <span className="text-[8px] font-jakarta text-ds-muted">{t}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                            <div className="flex gap-2 text-[8px] font-jakarta">
                              <span className="text-ds-subtle">Status:</span>
                              <span className="text-[#C9A227] font-medium">Approved before build starts</span>
                            </div>
                          </div>
                        )}
                        {activeStep === 2 && (
                          <div className="space-y-2">
                            <div className="text-[9px] font-jakarta text-ds-subtle mb-2">Connecting Accounts</div>
                            {[
                              { t: 'Meta Ads API', pct: 100 },
                              { t: 'Google Ads API', pct: 100 },
                              { t: 'HubSpot CRM', pct: 75 },
                              { t: 'Revenue / Stripe', pct: 40 },
                            ].map((row, i) => (
                              <div key={i}>
                                <div className="flex justify-between mb-0.5">
                                  <span className="text-[8px] font-jakarta text-ds-muted">{row.t}</span>
                                  <span className="text-[8px] font-jakarta text-ds-subtle">{row.pct}%</span>
                                </div>
                                <div className="h-1.5 rounded-full bg-black/[0.04] overflow-hidden">
                                  <div className="h-full rounded-full" style={{ width: `${row.pct}%`, background: row.pct === 100 ? '#28C840' : '#C9A227' }} />
                                </div>
                              </div>
                            ))}
                            <div className="text-[8px] font-jakarta text-[#C9A227] pt-1">First accounts live in weeks.</div>
                          </div>
                        )}
                        {activeStep === 3 && (
                          <div className="space-y-2">
                            <div className="text-[9px] font-jakarta text-ds-subtle mb-2">Your System, Running</div>
                            <div className="grid grid-cols-2 gap-2">
                              {[
                                { label: 'Accounts Live', val: '17', color: '#28C840' },
                                { label: 'Alerts This Week', val: '24', color: '#C9A227' },
                                { label: 'New Clients Added', val: '3', color: '#8B5CF6' },
                                { label: 'Data Uptime', val: '99.9%', color: '#F59E0B' },
                              ].map((m, i) => (
                                <div key={i} className="rounded-lg p-2 text-center" style={{ background: `${m.color}06`, border: `1px solid ${m.color}12` }}>
                                  <div className="text-[10px] font-jakarta font-bold" style={{ color: m.color }}>{m.val}</div>
                                  <div className="text-[7px] font-jakarta text-ds-subtle">{m.label}</div>
                                </div>
                              ))}
                            </div>
                            <div className="flex items-center gap-1.5 mt-1">
                              <div className="w-2 h-2 rounded-full bg-[#28C840]" style={{ animation: 'floatSlow 2s ease-in-out infinite' }} />
                              <span className="text-[8px] font-jakarta text-[#28C840]">Monitored daily by your data partner</span>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Timeline callout */}
          <div className="reveal text-center mt-10">
            <div className="card-glass inline-flex items-center gap-3 px-6 py-4">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <circle cx="9" cy="9" r="7" stroke="#C9A227" strokeWidth="1.5" />
                <path d="M9 6v3l2 2" stroke="#C9A227" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span className="font-jakarta font-semibold text-base text-ds-heading" style={{ letterSpacing: '-0.02em' }}>
                First client accounts live on your dashboard within weeks of kickoff.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 section-divider" />
    </section>
  );
}
