'use client';
import { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const BOOK_URL = 'https://go.datastaqai.com/book-a-call';

/* ── GTM Strategy Cards ── */
const strategies = [
  {
    number: '01',
    title: 'Analytics Add-On',
    subtitle: 'Sell to existing customers',
    body: 'Package your data platform as a premium analytics subscription your clients can buy on top of your existing service. Instant new revenue stream with zero new customer acquisition.',
    tags: ['Upsell existing clients', 'Recurring revenue', 'Fast to launch'],
    metric: '+$30K/mo',
    metricLabel: 'avg. new revenue',
    color: '#EDB325',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="3" y="16" width="5" height="9" rx="1.5" fill="#EDB325" opacity="0.4" />
        <rect x="11" y="10" width="5" height="15" rx="1.5" fill="#EDB325" opacity="0.7" />
        <rect x="19" y="4" width="5" height="21" rx="1.5" fill="#EDB325" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Embedded Intelligence',
    subtitle: 'Integrate into your core product',
    body: 'Bake data insights directly into your existing offering. Clients get smarter dashboards and analytics as part of their plan, making your product stickier and harder to leave.',
    tags: ['Reduce churn 10%+', 'Competitive moat', 'Higher LTV'],
    metric: '-10%',
    metricLabel: 'avg. churn reduction',
    color: '#22C55E',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="10" stroke="#22C55E" strokeWidth="1.8" />
        <path d="M10 14h8M14 10v8" stroke="#22C55E" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Benchmark Platform',
    subtitle: 'License to partners & third parties',
    body: 'Anonymize and aggregate your data into industry benchmarks or intelligence reports. License to non-clients, partners, and analysts for the highest revenue and market expansion upside.',
    tags: ['Market expansion', 'Industry authority', 'Highest upside'],
    metric: '10x',
    metricLabel: 'TAM expansion',
    color: '#4F8EF7',
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4L24 10v8l-10 6L4 18v-8l10-6z" stroke="#4F8EF7" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M14 10v8M10 12l4 2 4-2" stroke="#4F8EF7" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

/* ── Additional Benefits ── */
const benefits = [
  {
    title: 'Expert Positioning',
    body: 'Become the company in your industry that "has all the insights." A powerful lead gen and sales tool.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2l2.5 5.5L19 8.5l-4 4 1 5.5L11 15l-5 3 1-5.5-4-4 5.5-1L11 2z" stroke="#EDB325" strokeWidth="1.4" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Internal Intelligence',
    body: 'Use the same platform for internal deal intelligence and delivering better service to your own clients.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke="#EDB325" strokeWidth="1.4" />
        <path d="M11 7v4l3 2" stroke="#EDB325" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: 'Client Stickiness',
    body: 'Clients who rely on your data and insights are significantly less likely to churn to a competitor.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M4 11a7 7 0 0114 0" stroke="#EDB325" strokeWidth="1.4" strokeLinecap="round" />
        <path d="M11 11l-3-5" stroke="#EDB325" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="11" cy="11" r="2" fill="#EDB325" />
      </svg>
    ),
  },
  {
    title: 'Defensible Moat',
    body: 'A proprietary data layer that competitors can\'t replicate. Your best defense against AI disruption and price compression.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
        <path d="M11 2l8 4v6c0 4.5-3.5 8.5-8 10-4.5-1.5-8-5.5-8-10V6l8-4z" stroke="#EDB325" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M8 11l2 2 4-4" stroke="#EDB325" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

/* ── Data flow nodes for visual ── */
const dataNodes = [
  { label: 'CRM Data', x: 5, y: 20, color: '#4F8EF7' },
  { label: 'Finance', x: 5, y: 40, color: '#22C55E' },
  { label: 'Marketing', x: 5, y: 60, color: '#A855F7' },
  { label: 'Operations', x: 5, y: 80, color: '#FF4D33' },
];

const outputNodes = [
  { label: 'Client Dashboards', x: 75, y: 15, color: '#EDB325' },
  { label: 'Benchmark Reports', x: 75, y: 40, color: '#4F8EF7' },
  { label: 'Analytics API', x: 75, y: 65, color: '#22C55E' },
  { label: 'Revenue Stream', x: 75, y: 90, color: '#EDB325' },
];

export default function DataMonetization() {
  useEffect(() => {
    const classes = ['reveal', 'reveal-left', 'reveal-right', 'stagger'];
    const els = document.querySelectorAll(classes.map(c => `.${c}`).join(','));
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('in-view');
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const animEls = document.querySelectorAll('.chart-line, .chart-line-2, .bar-fill, .flow-path');
    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('animate');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    animEls.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main>
      <Navbar />

      {/* ═══════════════════════════════════════════
          SECTION 1 — Hero
      ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center pt-10 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-ds-bg">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: 'radial-gradient(rgba(237,179,37,0.18) 1px, transparent 1px)',
              backgroundSize: '28px 28px',
            }}
          />
          <div
            className="orb w-[560px] h-[560px] -top-32 -left-28 opacity-20 animate-orb-1"
            style={{ background: 'radial-gradient(circle, #EDB325, transparent 70%)' }}
          />
          <div
            className="orb w-[420px] h-[420px] top-1/2 -right-24 opacity-15 animate-orb-2"
            style={{ background: 'radial-gradient(circle, #4F8EF7, transparent 70%)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-ds-bg" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-12 lg:py-20">
          <div className="grid lg:grid-cols-2 gap-14 xl:gap-20 items-center">

            {/* Copy */}
            <div className="space-y-8">
              <div className="section-tag">
                <span className="live-dot" />
                Data Monetization
              </div>

              <h1 className="font-jakarta font-extrabold text-5xl sm:text-6xl xl:text-[4.25rem] leading-[1.12] text-white">
                Turn your data into a{' '}
                <span className="gradient-text block">revenue-generating product line.</span>
              </h1>

              <p className="font-jakarta text-lg sm:text-xl text-ds-muted leading-relaxed max-w-xl">
                We build a fully monetizable, white-label data platform, and help you sell it
                to existing customers, partners, or third parties.
                <br /><br />
                Add <span className="text-white font-semibold">$30K+/mo in new revenue</span>,
                build a defensible moat against AI disruption, and reduce churn by 10% or more.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href={BOOK_URL} className="btn-primary">
                  Explore Data Monetization
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3.5 9h11M10.5 5l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
                <a href="#strategies" className="btn-ghost">
                  See the Playbook
                </a>
              </div>

              {/* Trust signals */}
              <div className="flex flex-wrap gap-6 pt-1">
                {['White-Label Platform', 'Full GTM Strategy', 'Revenue in 60 Days'].map(t => (
                  <span key={t} className="flex items-center gap-2 text-sm text-ds-muted font-jakarta">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <path d="M3 8l3.5 3.5L13 4" stroke="#22C55E" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Visual — Animated Data-to-Revenue Flow */}
            <div className="relative hidden sm:block">
              <div className="animate-float" style={{ transform: 'perspective(1200px) rotateY(-4deg) rotateX(3deg)', transformStyle: 'preserve-3d' }}>
                <div
                  className="rounded-2xl overflow-hidden glow-cyan"
                  style={{ background: 'rgba(8,12,28,0.97)', border: '1px solid rgba(237,179,37,0.22)' }}
                >
                  {/* Window bar */}
                  <div
                    className="flex items-center justify-between px-4 py-3 border-b"
                    style={{ borderColor: 'rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.02)' }}
                  >
                    <div className="flex items-center gap-2">
                      <span className="live-dot" />
                      <span className="font-jakarta font-semibold text-xs text-white/80 tracking-wide">
                        Data Product · Revenue Engine
                      </span>
                    </div>
                    <div className="flex gap-1.5">
                      {['#FF4D33', '#EDB325', '#22C55E'].map(c => (
                        <div key={c} className="w-2.5 h-2.5 rounded-full opacity-70" style={{ background: c }} />
                      ))}
                    </div>
                  </div>

                  <div className="p-5">
                    {/* Revenue KPIs */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      {[
                        { label: 'Product MRR', value: '$34.2K', delta: '+$8.4K', color: '#22C55E' },
                        { label: 'Active Subscribers', value: '127', delta: '+23 this mo', color: '#4F8EF7' },
                        { label: 'Churn Rate', value: '2.1%', delta: '-4.8pp', color: '#EDB325' },
                      ].map((k, i) => (
                        <div
                          key={i}
                          className="rounded-xl p-3"
                          style={{
                            background: 'rgba(255,255,255,0.04)',
                            border: '1px solid rgba(255,255,255,0.07)',
                            animation: `countUp 0.5s ease-out ${0.2 + i * 0.15}s both`,
                          }}
                        >
                          <div className="text-[10px] text-ds-muted font-jakarta mb-1">{k.label}</div>
                          <div className="font-jakarta font-bold text-base text-white">{k.value}</div>
                          <div className="text-[11px] font-jakarta" style={{ color: k.color }}>{k.delta}</div>
                        </div>
                      ))}
                    </div>

                    {/* Data Flow Visualization */}
                    <div
                      className="rounded-xl p-4 mb-3"
                      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-jakarta text-ds-muted">Data → Product Pipeline</span>
                        <span className="flex items-center gap-1.5">
                          <span className="live-dot w-1.5 h-1.5" />
                          <span className="text-[10px] font-jakarta text-emerald-400">Live</span>
                        </span>
                      </div>
                      <svg viewBox="0 0 320 100" className="w-full" fill="none">
                        {/* Input nodes */}
                        {dataNodes.map((n, i) => (
                          <g key={`in-${i}`} style={{ animation: `countUp 0.4s ease-out ${0.3 + i * 0.12}s both` }}>
                            <rect x={n.x} y={n.y - 8} width="70" height="16" rx="4" fill={`${n.color}20`} stroke={`${n.color}50`} strokeWidth="0.5" />
                            <text x={n.x + 35} y={n.y + 1} textAnchor="middle" fill={n.color} fontSize="7" fontFamily="var(--font-jakarta)">{n.label}</text>
                          </g>
                        ))}

                        {/* Center hub */}
                        <rect x="120" y="25" width="80" height="50" rx="8" fill="rgba(237,179,37,0.08)" stroke="#EDB32550" strokeWidth="1" />
                        <text x="160" y="46" textAnchor="middle" fill="#EDB325" fontSize="7" fontWeight="bold" fontFamily="var(--font-jakarta)">DataStaq</text>
                        <text x="160" y="58" textAnchor="middle" fill="#EDB325" fontSize="6" opacity="0.7" fontFamily="var(--font-jakarta)">Platform Engine</text>

                        {/* Flow lines — input to center */}
                        {dataNodes.map((n, i) => (
                          <line
                            key={`flow-in-${i}`}
                            x1="78" y1={n.y} x2="120" y2={50}
                            className="flow-path"
                            stroke={n.color}
                            strokeWidth="1"
                            strokeOpacity="0.4"
                            strokeDasharray="4 3"
                            style={{ animation: `dashDrift 2s linear ${i * 0.3}s infinite` }}
                          />
                        ))}

                        {/* Flow lines — center to output */}
                        {outputNodes.map((n, i) => (
                          <line
                            key={`flow-out-${i}`}
                            x1="200" y1={50} x2="240" y2={n.y}
                            stroke={n.color}
                            strokeWidth="1"
                            strokeOpacity="0.4"
                            strokeDasharray="4 3"
                            style={{ animation: `dashDrift 2s linear ${i * 0.2}s infinite reverse` }}
                          />
                        ))}

                        {/* Output nodes */}
                        {outputNodes.map((n, i) => (
                          <g key={`out-${i}`} style={{ animation: `countUp 0.4s ease-out ${0.8 + i * 0.12}s both` }}>
                            <rect x={n.x * 3.2} y={n.y - 8} width="78" height="16" rx="4" fill={`${n.color}20`} stroke={`${n.color}50`} strokeWidth="0.5" />
                            <text x={n.x * 3.2 + 39} y={n.y + 1} textAnchor="middle" fill={n.color} fontSize="6.5" fontFamily="var(--font-jakarta)">{n.label}</text>
                          </g>
                        ))}

                        {/* Animated pulse dots along paths */}
                        {[0, 1, 2, 3].map(i => (
                          <circle key={`pulse-${i}`} r="2" fill="#EDB325" opacity="0.8">
                            <animateMotion
                              dur={`${2 + i * 0.3}s`}
                              repeatCount="indefinite"
                              path={`M78,${dataNodes[i].y} L160,50`}
                            />
                          </circle>
                        ))}
                        {[0, 1, 2, 3].map(i => (
                          <circle key={`pulse-out-${i}`} r="2" fill={outputNodes[i].color} opacity="0.8">
                            <animateMotion
                              dur={`${2.2 + i * 0.25}s`}
                              repeatCount="indefinite"
                              path={`M200,50 L${outputNodes[i].x * 3.2 + 5},${outputNodes[i].y}`}
                            />
                          </circle>
                        ))}
                      </svg>
                    </div>

                    {/* Revenue chart */}
                    <div
                      className="rounded-xl p-3"
                      style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.06)' }}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-[11px] font-jakarta text-ds-muted">Product Revenue Growth</span>
                        <span className="text-[10px] font-jakarta" style={{ color: '#22C55E' }}>+142% QoQ</span>
                      </div>
                      <svg viewBox="0 0 300 50" className="w-full" fill="none">
                        <defs>
                          <linearGradient id="revGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#EDB325" stopOpacity="0.3" />
                            <stop offset="100%" stopColor="#EDB325" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                        {[15, 30].map(y => (
                          <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="rgba(255,255,255,0.04)" strokeWidth="1" />
                        ))}
                        <polygon
                          points="0,45 40,42 80,38 120,35 160,28 200,22 240,14 280,8 300,5 300,50 0,50"
                          fill="url(#revGrad)"
                        />
                        <polyline
                          className="chart-line"
                          points="0,45 40,42 80,38 120,35 160,28 200,22 240,14 280,8 300,5"
                          stroke="#EDB325"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        {[
                          [0,45],[40,42],[80,38],[120,35],[160,28],[200,22],[240,14],[280,8],[300,5]
                        ].map(([x,y], i) => (
                          <circle key={i} cx={x} cy={y} r="2" fill="#EDB325"
                            style={{ opacity: 0, animation: `countUp 0.3s ease-out ${1.6 + i * 0.1}s both` }}
                          />
                        ))}
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-ds-bg to-transparent pointer-events-none" />
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 2 — GTM Strategies + Benefits
      ═══════════════════════════════════════════ */}
      <section id="strategies" className="relative py-16 lg:py-24 overflow-hidden bg-ds-bg">
        <div
          className="orb w-[500px] h-[500px] -top-40 left-1/2 -translate-x-1/2 opacity-10"
          style={{ background: 'radial-gradient(circle, #EDB325, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">

          {/* Header */}
          <div className="max-w-3xl mx-auto text-center mb-10 lg:mb-16 reveal">
            <div className="section-tag mx-auto mb-5">The Playbook</div>
            <h2 className="font-jakarta font-extrabold text-4xl sm:text-5xl lg:text-6xl text-white mb-6 leading-tight">
              Three ways to{' '}
              <span className="gradient-text">monetize your data</span>
            </h2>
            <p className="font-jakarta text-lg text-ds-muted leading-relaxed">
              We build the platform. You choose how to sell it. Each path creates a new
              revenue stream and strengthens your competitive position.
            </p>
          </div>

          {/* Strategy Cards */}
          <div className="stagger grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-16">
            {strategies.map((s, i) => (
              <div
                key={i}
                className="group relative rounded-2xl p-7 lg:p-8 overflow-hidden transition-all duration-400 hover:-translate-y-2"
                style={{
                  background: 'rgba(12,18,32,0.8)',
                  border: `1px solid ${s.color}18`,
                }}
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ background: `radial-gradient(ellipse at 50% 100%, ${s.color}0A, transparent 70%)` }}
                />

                {/* Number */}
                <div
                  className="font-jakarta font-extrabold text-5xl mb-4 leading-none relative z-10"
                  style={{
                    background: `linear-gradient(130deg, ${s.color}50, transparent)`,
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {s.number}
                </div>

                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 relative z-10"
                  style={{
                    background: `${s.color}12`,
                    border: `1px solid ${s.color}25`,
                    animation: 'iconFloat 4s ease-in-out infinite',
                    animationDelay: `${i * 0.5}s`,
                  }}
                >
                  {s.icon}
                </div>

                {/* Metric callout */}
                <div className="mb-4 relative z-10">
                  <span
                    className="font-jakarta font-extrabold text-2xl"
                    style={{ color: s.color }}
                  >
                    {s.metric}
                  </span>
                  <span className="text-[11px] font-jakarta text-ds-muted ml-2">{s.metricLabel}</span>
                </div>

                <h3 className="font-jakarta font-bold text-xl text-white mb-1 relative z-10">{s.title}</h3>
                <p className="font-jakarta text-xs text-ds-muted mb-3 relative z-10" style={{ color: `${s.color}90` }}>{s.subtitle}</p>
                <p className="font-jakarta text-ds-muted text-sm leading-relaxed mb-6 relative z-10">{s.body}</p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 relative z-10">
                  {s.tags.map((t, ti) => (
                    <span
                      key={t}
                      className="text-[11px] font-jakarta px-2.5 py-1 rounded-full transition-all duration-300"
                      style={{
                        background: `${s.color}0D`,
                        border: `1px solid ${s.color}20`,
                        color: s.color,
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 inset-x-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: `linear-gradient(90deg, transparent, ${s.color}, transparent)` }}
                />
              </div>
            ))}
          </div>

          {/* Additional Benefits */}
          <div className="reveal">
            <div className="text-center mb-8">
              <h3 className="font-jakarta font-bold text-2xl sm:text-3xl text-white">
                Every path unlocks the same advantages
              </h3>
            </div>
            <div className="stagger grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: 'rgba(12,18,32,0.8)',
                    border: '1px solid rgba(237,179,37,0.12)',
                  }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                    style={{ background: 'rgba(237,179,37,0.1)', border: '1px solid rgba(237,179,37,0.2)' }}
                  >
                    {b.icon}
                  </div>
                  <h4 className="font-jakarta font-bold text-base text-white mb-2">{b.title}</h4>
                  <p className="font-jakarta text-sm text-ds-muted leading-relaxed">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SECTION 3 — CTA
      ═══════════════════════════════════════════ */}
      <section className="relative py-16 lg:py-24 overflow-hidden" style={{ background: '#060A14' }}>
        <div
          className="orb w-[500px] h-[500px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-15"
          style={{ background: 'radial-gradient(circle, #EDB325, transparent 70%)' }}
        />

        <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="reveal text-center">
            <div className="section-tag mx-auto mb-6">
              <span className="live-dot" />
              Start Building
            </div>

            <h2 className="font-jakarta font-extrabold text-4xl sm:text-5xl lg:text-[3.5rem] text-white mb-6 leading-tight">
              Your data is already valuable.{' '}
              <span className="gradient-text block">Let's turn it into a product.</span>
            </h2>

            <p className="font-jakarta text-lg text-ds-muted mb-10 leading-relaxed max-w-2xl mx-auto">
              We handle the entire build: from data infrastructure and platform design
              to white-label interfaces and go-to-market strategy. You focus on selling.
            </p>

            {/* What you get */}
            <div className="stagger grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              {[
                { val: 'Full Platform', sub: 'White-label data product built end-to-end', color: '#EDB325' },
                { val: 'GTM Strategy', sub: 'Pricing, positioning, and launch playbook', color: '#4F8EF7' },
                { val: '60 Days', sub: 'From kickoff to revenue-ready product', color: '#22C55E' },
              ].map((r, i) => (
                <div
                  key={i}
                  className="rounded-2xl p-6 text-center relative overflow-hidden transition-all duration-300 hover:-translate-y-1 group"
                  style={{ background: 'rgba(12,18,32,0.9)', border: `1px solid ${r.color}20` }}
                >
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl"
                    style={{ background: `radial-gradient(ellipse at 50% 100%, ${r.color}08, transparent 70%)` }}
                  />
                  <div
                    className="font-jakarta font-extrabold text-2xl sm:text-3xl mb-2 relative z-10"
                    style={{
                      background: `linear-gradient(130deg, ${r.color}, ${r.color}90)`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    }}
                  >
                    {r.val}
                  </div>
                  <div className="font-jakarta text-sm text-ds-muted relative z-10">{r.sub}</div>
                </div>
              ))}
            </div>

            <a href={BOOK_URL} className="btn-primary text-base px-8 py-4">
              Book a Data Monetization Call
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3.5 9h11M10.5 5l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
