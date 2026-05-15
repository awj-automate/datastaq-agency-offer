'use client';

const BOOK_URL = '/schedule';

/*
  ─────────────────────────────────────────────────────────────
  TODO — ASSET: Hero visualization (HERO-TIER — custom, commission)
  The coded <DashboardMockup /> below ships as the default hero
  visual and matches the site's existing aesthetic. If you want a
  custom-rendered asset instead, swap the mockup for an <img>.
    • Depict:   an abstract "agency command center" — multiple
                client ad accounts (Meta + Google glyphs) flowing
                along glowing data lines into one unified live
                dashboard. Show spend/ROAS tiles + an alert ping.
    • Style:    premium, light cream background (#F5F0E1 / white), the
                gold gradient family (#C9A227 → #E5C463), soft
                glow/blur, gentle float — matches blobs + card-glass
    • Format:   PNG @2x with transparency, or self-contained SVG
    • Size:     ~1200 x 900 (4:3-ish), retina @2x
    • Drop into: /public  (e.g. /public/hero-agency-hub.png)
  ─────────────────────────────────────────────────────────────
*/

/* ── Dashboard Mockup: an agency-wide ad performance hub ── */
function DashboardMockup() {
  return (
    <div
      className="rounded-2xl overflow-hidden"
      style={{
        background: '#FFFFFF',
        border: '6px solid rgba(236,236,236,0.5)',
        boxShadow: '0 24px 60px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.04)',
        animation: 'blurAnimate 0.8s cubic-bezier(0.01,0.56,1,1) 0.5s both',
      }}
    >
      {/* Window chrome */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-black/[0.06]" style={{ background: '#FAFAFA' }}>
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#FF5F57' }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#FEBC2E' }} />
            <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#28C840' }} />
          </div>
          <span className="font-jakarta font-semibold text-[10px] text-ds-subtle ml-2 tracking-wide">Agency Performance Hub</span>
        </div>
        <div className="flex gap-1.5 items-center">
          <div className="w-16 h-1.5 rounded-full bg-black/[0.04]" />
        </div>
      </div>

      <div className="p-4 space-y-3">
        {/* KPI Row */}
        <div className="grid grid-cols-4 gap-2">
          {[
            { label: 'Clients', value: '17', delta: 'accounts live', up: true },
            { label: 'Ad Spend', value: '$214K', delta: 'this month', up: null },
            { label: 'Blended ROAS', value: '3.8x', delta: 'across book', up: true },
            { label: 'Alerts', value: '3', delta: 'need a look', up: false },
          ].map((k, i) => (
            <div
              key={i}
              className="rounded-xl p-3"
              style={{
                background: '#F9FAFB',
                border: '1px solid rgba(0,0,0,0.04)',
                animation: `blurAnimate 0.4s ease-out ${0.8 + i * 0.1}s both`,
              }}
            >
              <div className="text-[9px] text-ds-subtle font-jakarta mb-1 truncate">{k.label}</div>
              <div className="font-jakarta font-bold text-sm text-ds-heading">{k.value}</div>
              <div className="text-[9px] font-jakarta" style={{ color: k.up === false ? '#F59E0B' : k.up ? '#28C840' : '#C9A227' }}>{k.delta}</div>
            </div>
          ))}
        </div>

        {/* Chart area — spend vs revenue */}
        <div className="rounded-xl p-3" style={{ background: '#F9FAFB', border: '1px solid rgba(0,0,0,0.04)' }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-jakarta font-semibold text-ds-muted">Spend vs. Revenue · last 30 days</span>
            <span className="text-[9px] font-jakarta text-[#28C840]">revenue outpacing spend</span>
          </div>
          <svg viewBox="0 0 300 60" className="w-full" fill="none">
            <defs>
              <linearGradient id="heroFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#C9A227" stopOpacity="0.15" />
                <stop offset="100%" stopColor="#C9A227" stopOpacity="0" />
              </linearGradient>
            </defs>
            {[15, 30, 45].map(y => (
              <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="rgba(0,0,0,0.03)" strokeWidth="1" />
            ))}
            {/* Revenue area + line */}
            <polygon
              points="0,50 40,42 80,44 120,30 160,32 200,20 240,14 280,10 300,8 300,60 0,60"
              fill="url(#heroFill)"
            />
            <polyline
              points="0,50 40,42 80,44 120,30 160,32 200,20 240,14 280,10 300,8"
              stroke="#C9A227"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ strokeDasharray: 600, strokeDashoffset: 600, animation: 'drawPath 2s ease-out 1.2s forwards' }}
            />
            {/* Spend line — flatter, muted */}
            <polyline
              points="0,52 40,50 80,49 120,47 160,46 200,44 240,43 280,42 300,42"
              stroke="#A1A1AA"
              strokeWidth="1.2"
              strokeDasharray="3 3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {[[0,50],[80,44],[160,32],[240,14],[300,8]].map(([x,y], i) => (
              <circle key={i} cx={x} cy={y} r="2" fill="#C9A227"
                style={{ opacity: 0, animation: `scaleIn 0.3s ease-out ${1.8 + i * 0.15}s both` }}
              />
            ))}
          </svg>
        </div>

        {/* Two columns: Live Alerts + Account Health */}
        <div className="grid grid-cols-2 gap-2">
          {/* Live alerts */}
          <div className="rounded-xl p-3 space-y-2" style={{ background: '#F9FAFB', border: '1px solid rgba(0,0,0,0.04)' }}>
            <span className="text-[9px] font-jakarta font-semibold text-ds-muted block mb-1">Live Alerts</span>
            {[
              { text: 'ROAS dropped on Acme Co.', color: '#F59E0B', time: 'now' },
              { text: 'Northwind pacing 18% over', color: '#EF4444', time: '12m' },
              { text: 'Meta + Google synced', color: '#28C840', time: '1h' },
              { text: 'Client report auto-sent', color: '#C9A227', time: '3h' },
            ].map((f, i) => (
              <div
                key={i}
                className="flex items-center gap-1.5"
                style={{ animation: `slideInRight 0.3s ease-out ${1 + i * 0.15}s both` }}
              >
                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: f.color }} />
                <span className="text-[9px] font-jakarta text-ds-muted truncate flex-1">{f.text}</span>
                <span className="text-[8px] text-ds-subtle flex-shrink-0">{f.time}</span>
              </div>
            ))}
          </div>

          {/* Account health */}
          <div className="rounded-xl p-3 space-y-2" style={{ background: '#F9FAFB', border: '1px solid rgba(0,0,0,0.04)' }}>
            <span className="text-[9px] font-jakarta font-semibold text-ds-muted block mb-1">Account Health</span>
            {[
              { label: 'Acme Co.', pct: 92, color: '#28C840' },
              { label: 'Northwind', pct: 61, color: '#F59E0B' },
              { label: 'Brightside', pct: 84, color: '#28C840' },
              { label: 'Halcyon Group', pct: 73, color: '#C9A227' },
            ].map((p, i) => (
              <div key={i} className="space-y-0.5">
                <div className="flex justify-between items-center">
                  <span className="text-[8px] font-jakarta text-ds-muted">{p.label}</span>
                  <span className="text-[8px] font-jakarta text-ds-subtle">{p.pct}</span>
                </div>
                <div className="h-1 rounded-full overflow-hidden" style={{ background: 'rgba(0,0,0,0.04)' }}>
                  <div
                    className="h-full rounded-full transition-all duration-1000"
                    style={{
                      width: '0%',
                      background: p.color,
                      animation: `barGrow 1.2s ease-out ${1.2 + i * 0.15}s forwards`,
                      '--bar-target': `${p.pct}%`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Floating notification cards ── */
function FloatingNotification({ text, icon, color, style }) {
  return (
    <div
      className="absolute card-glass px-3 py-2 flex items-center gap-2 shadow-lg"
      style={{ borderRadius: '14px', ...style }}
    >
      <div
        className="w-6 h-6 rounded-md flex items-center justify-center flex-shrink-0"
        style={{ background: `${color}15` }}
      >
        {icon}
      </div>
      <span className="font-jakarta text-[10px] text-ds-heading font-medium whitespace-nowrap">{text}</span>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-10 overflow-hidden bg-ds-bg">
      {/* Animated blurred gradient blobs */}
      <div
        className="absolute -top-40 right-[10%] w-[500px] h-[500px] pointer-events-none blob"
        style={{ background: 'linear-gradient(96deg, #C9A227 28%, #E5C463 100%)', filter: 'blur(120px)', opacity: 0.08 }}
      />
      <div
        className="absolute bottom-[10%] left-[5%] w-[350px] h-[350px] pointer-events-none blob"
        style={{ background: 'linear-gradient(96deg, #8C6F1E 28%, #D4AF37 100%)', filter: 'blur(100px)', opacity: 0.05, animationDelay: '3s' }}
      />

      <div className="relative z-10 max-w-[1356px] mx-auto px-5 sm:px-8 lg:px-12 py-16 lg:py-28 w-full">
        <div className="content-wrap">
          <div className="grid lg:grid-cols-2 gap-12 xl:gap-16 items-center">
            {/* Copy */}
            <div>
              <div
                className="sub-title mb-6"
                style={{ animation: 'blurAnimate 0.8s cubic-bezier(0.01,0.56,1,1) 0.2s both' }}
              >
                <span className="sub-title-dot" />
                Fractional Ad Data Partner
              </div>

              <h1
                className="font-jakarta font-extrabold text-5xl sm:text-6xl xl:text-7xl text-ds-heading mb-6"
                style={{ lineHeight: '1.05', letterSpacing: '-0.04em', animation: 'blurAnimate 0.8s cubic-bezier(0.01,0.56,1,1) 0.3s both' }}
              >
                Fractional ad data infrastructure for agencies that have{' '}
                <span className="gradient-text">outgrown spreadsheets</span>
              </h1>

              <p
                className="font-jakarta text-lg sm:text-xl text-ds-muted leading-relaxed max-w-xl mb-10"
                style={{ letterSpacing: '-0.02em', animation: 'blurAnimate 0.7s cubic-bezier(0.01,0.56,1,1) 0.5s both' }}
              >
                For agencies running $100K+/month across Meta and Google. We build the data layer
                that pulls every client's ad platforms, CRM, and revenue tools into one live
                dashboard — so your account managers stop rebuilding reports by hand.
              </p>

              <div
                className="flex flex-wrap gap-4 mb-10"
                style={{ animation: 'blurAnimate 0.6s cubic-bezier(0.01,0.56,1,1) 0.7s both' }}
              >
                <a href={BOOK_URL} className="btn-dark">
                  Book a Strategy Call
                </a>
                <a href="#how-it-works" className="btn-light">
                  See How It Works
                </a>
              </div>

              <p
                className="font-jakarta text-sm text-ds-subtle leading-relaxed"
                style={{ letterSpacing: '-0.02em', animation: 'blurAnimate 0.6s cubic-bezier(0.01,0.56,1,1) 0.9s both' }}
              >
                Built for agencies with 10-20+ active accounts. No new headcount required.
              </p>
            </div>

            {/* Dashboard mockup visual */}
            <div className="relative hidden lg:block">
              <div style={{ animation: 'float 7s ease-in-out infinite' }}>
                <DashboardMockup />
              </div>

              {/* Floating notification cards */}
              <FloatingNotification
                text="ROAS alert sent"
                color="#F59E0B"
                icon={<svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M8 1.5l6.5 11.5h-13L8 1.5z" stroke="#F59E0B" strokeWidth="1.5" strokeLinejoin="round"/><path d="M8 6.5v3M8 11.5h.01" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round"/></svg>}
                style={{
                  top: '-12px', left: '-20px', zIndex: 20,
                  animation: 'floatSlow 6s ease-in-out infinite, scaleIn 0.5s ease-out 1.5s both',
                }}
              />
              <FloatingNotification
                text="Meta + Google synced"
                color="#28C840"
                icon={<svg width="12" height="12" viewBox="0 0 16 16" fill="none"><path d="M3 8l3.5 3.5L13 4" stroke="#28C840" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>}
                style={{
                  bottom: '60px', left: '-30px', zIndex: 20,
                  animation: 'floatReverse 7s ease-in-out 0.5s infinite, scaleIn 0.5s ease-out 1.8s both',
                }}
              />
              <FloatingNotification
                text="Client report delivered"
                color="#C9A227"
                icon={<svg width="12" height="12" viewBox="0 0 16 16" fill="none"><rect x="3" y="2" width="10" height="12" rx="1.5" stroke="#C9A227" strokeWidth="1.4"/><path d="M5.5 6h5M5.5 8.5h5M5.5 11h3" stroke="#C9A227" strokeWidth="1.2" strokeLinecap="round"/></svg>}
                style={{
                  top: '30%', right: '-25px', zIndex: 20,
                  animation: 'floatDiagonal 6.5s ease-in-out 1s infinite, scaleIn 0.5s ease-out 2.1s both',
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bar grow animation */}
      <style jsx>{`
        @keyframes barGrow {
          from { width: 0%; }
          to { width: var(--bar-target); }
        }
      `}</style>

      {/* Section divider */}
      <div className="absolute bottom-0 inset-x-0 section-divider" />
    </section>
  );
}
