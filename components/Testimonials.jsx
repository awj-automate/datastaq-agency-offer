'use client';

/*
  ─────────────────────────────────────────────────────────────
  TODO — CONTENT: Replace all 3 placeholder testimonials below.
  Target persona = ad agency owner / operator (the buyer).
  Each quote should be specific: reference reporting hours saved,
  AM time recovered, client retention, or visibility across accounts.

  TODO — ASSET: Headshot per testimonial (section-tier, generic OK)
    • Depict:   real headshot of the agency owner/operator quoted
    • Style:    square crop, neutral background, renders in a 56px circle
    • Format:   PNG/JPG @2x
    • Size:     supply ~160 x 160, displayed at 56 x 56
    • Drop into: /public  (e.g. /public/testimonials/name.jpg)
      then set `avatar` on the object and render it in place of the
      initials circle.
  ─────────────────────────────────────────────────────────────
*/

const testimonials = [
  {
    quote:
      '{{TESTIMONIAL_1_QUOTE}} — e.g. "Our AMs were spending two full days a week in spreadsheets. Now they open one dashboard and spend that time on strategy instead."',
    name: '{{TESTIMONIAL_1_NAME}}',
    role: '{{TESTIMONIAL_1_ROLE}}', // e.g. Founder & CEO
    agency: '{{TESTIMONIAL_1_AGENCY}}',
    avatar: null, // TODO: '/testimonials/name-1.jpg'
  },
  {
    quote:
      '{{TESTIMONIAL_2_QUOTE}} — e.g. "We looked at hiring an analyst. This gave us the infrastructure without the salary, and it was live across every client in weeks."',
    name: '{{TESTIMONIAL_2_NAME}}',
    role: '{{TESTIMONIAL_2_ROLE}}', // e.g. Managing Partner
    agency: '{{TESTIMONIAL_2_AGENCY}}',
    avatar: null, // TODO: '/testimonials/name-2.jpg'
  },
  {
    quote:
      '{{TESTIMONIAL_3_QUOTE}} — e.g. "The proactive alerts caught a ROAS drop before the client did. That alone changed how our team operates."',
    name: '{{TESTIMONIAL_3_NAME}}',
    role: '{{TESTIMONIAL_3_ROLE}}', // e.g. Director of Client Services
    agency: '{{TESTIMONIAL_3_AGENCY}}',
    avatar: null, // TODO: '/testimonials/name-3.jpg'
  },
];

function initials(name) {
  const clean = name.replace(/[{}]/g, '').trim();
  if (!clean) return '–';
  return clean
    .split(/\s+/)
    .slice(0, 2)
    .map(w => w[0])
    .join('')
    .toUpperCase();
}

export default function Testimonials() {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-ds-bg">
      <div className="relative z-10 max-w-[1356px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="content-wrap">

          <div className="max-w-3xl mx-auto text-center mb-14 lg:mb-20 reveal">
            <div className="sub-title mx-auto mb-6">
              <span className="sub-title-dot" />
              From Agency Operators
            </div>
            <h2
              className="font-jakarta font-extrabold text-4xl sm:text-5xl lg:text-[3.5rem] text-ds-heading mb-6"
              style={{ lineHeight: '1.1', letterSpacing: '-0.04em' }}
            >
              What agency owners say once the{' '}
              <span className="gradient-text">reporting drag is gone</span>
            </h2>
            <p className="font-jakarta text-lg text-ds-muted leading-relaxed" style={{ letterSpacing: '-0.02em' }}>
              The people who feel this most are the ones running the agency. Here is what
              changes for them once the data layer is in place.
            </p>
          </div>

          <div className="stagger grid grid-cols-1 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <div key={i} className="card p-8 lg:p-10 flex flex-col">
                {/* Quote glyph */}
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" className="mb-6">
                  <path
                    d="M13 8c-3.5 1.5-6 4.8-6 9.2V24h7v-7h-3.5c0-2.6 1.2-4.6 3.5-5.8L13 8zm12 0c-3.5 1.5-6 4.8-6 9.2V24h7v-7h-3.5c0-2.6 1.2-4.6 3.5-5.8L25 8z"
                    fill="#C9A227"
                    fillOpacity="0.25"
                  />
                </svg>

                <p
                  className="font-jakarta text-base text-ds-text leading-relaxed mb-8 flex-1"
                  style={{ letterSpacing: '-0.02em' }}
                >
                  {t.quote}
                </p>

                <div className="flex items-center gap-3 pt-6 border-t border-black/[0.06]">
                  {/* TODO: replace initials circle with <img src={t.avatar} /> once headshots are supplied */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: 'radial-gradient(49.69% 57.86% at 50% 95.45%, #E5C463 0%, #C9A227 100%)',
                      boxShadow: '0 0 8px 0 rgba(255,255,255,0.5) inset',
                    }}
                  >
                    <span className="font-jakarta font-bold text-sm text-white">{initials(t.name)}</span>
                  </div>
                  <div>
                    <div className="font-jakarta font-bold text-sm text-ds-heading" style={{ letterSpacing: '-0.02em' }}>
                      {t.name}
                    </div>
                    <div className="font-jakarta text-xs text-ds-muted">
                      {t.role}, {t.agency}
                    </div>
                  </div>
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
