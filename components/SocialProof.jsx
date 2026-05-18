'use client';

const LOGOS = [
  { name: 'Founders Row', src: '/founders_row.jpg' },
  { name: "Bob's Watches", src: '/bobs_watches.png' },
  { name: 'X-iT Outdoors', src: '/xitoutdoors_logo.png' },
  { name: 'Azorra', src: '/azorra_logo.png' },
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
            Trusted by agencies, PE portfolios, and brands scaling past the reporting bottleneck
          </p>

          <div className="stagger flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-12">
            {LOGOS.map((logo, i) => (
              <div
                key={i}
                className="group flex items-center justify-center"
                title={logo.name}
              >
                <div
                  className="flex items-center justify-center rounded-lg transition-all duration-300 px-4"
                  style={{
                    width: 200,
                    height: 80,
                    background: '#FAF6EA',
                    border: '1px solid rgba(0,0,0,0.06)',
                  }}
                >
                  {logo.src ? (
                    <img
                      src={logo.src}
                      alt={logo.name}
                      className="max-h-14 max-w-full object-contain opacity-80 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  ) : (
                    <span className="font-jakarta text-[13px] font-semibold text-ds-subtle tracking-widest uppercase">
                      {logo.name}
                    </span>
                  )}
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
