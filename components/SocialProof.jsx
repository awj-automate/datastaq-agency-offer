'use client';

/*
  ─────────────────────────────────────────────────────────────
  TODO — ASSET: Agency client logos (section-tier, generic OK)
  Replace the 6 placeholder tiles below with real agency client
  logos once cleared for use.
    • Depict:   wordmark / logo of each ad agency client
    • Style:    single-colour, will render grayscale at ~55% opacity
                and lift to full colour on hover (matches the muted,
                premium feel of the rest of the site)
    • Format:   SVG preferred, or transparent PNG @2x
    • Size:     render box is 132 x 40 — supply ~264 x 80 PNG
    • Drop into: /public  (e.g. /public/logos/agency-1.svg)
  ─────────────────────────────────────────────────────────────
*/

const LOGO_SLOTS = [
  '{{LOGO_AGENCY_1}}',
  '{{LOGO_AGENCY_2}}',
  '{{LOGO_AGENCY_3}}',
  '{{LOGO_AGENCY_4}}',
  '{{LOGO_AGENCY_5}}',
  '{{LOGO_AGENCY_6}}',
];

export default function SocialProof() {
  return (
    <section className="relative py-16 lg:py-20 overflow-hidden bg-white">
      <div className="relative z-10 max-w-[1356px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="content-wrap">

          <p
            className="font-jakarta text-center text-sm font-semibold text-ds-muted mb-10 reveal"
            style={{ letterSpacing: '-0.02em' }}
          >
            Trusted by ad agencies scaling past the reporting bottleneck
          </p>

          <div className="stagger flex flex-wrap items-center justify-center gap-x-10 gap-y-6 sm:gap-x-14">
            {LOGO_SLOTS.map((slot, i) => (
              <div
                key={i}
                className="group flex items-center justify-center"
                /* TODO: swap this placeholder tile for an <img src="/logos/..." /> */
                title={slot}
              >
                <div
                  className="flex items-center justify-center rounded-lg transition-all duration-300"
                  style={{
                    width: 132,
                    height: 40,
                    background: '#FAF6EA',
                    border: '1px solid rgba(0,0,0,0.06)',
                  }}
                >
                  <span className="font-jakarta text-[11px] font-semibold text-ds-subtle tracking-widest uppercase">
                    Logo {i + 1}
                  </span>
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
