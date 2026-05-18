'use client';

const LOGOS = [
  { name: 'Founders Row', src: '/founders_row.jpg', heightClass: 'h-14' },
  { name: "Bob's Watches", src: '/bobs_watches.png', heightClass: 'h-[168px]' },
  { name: 'X-iT Outdoors', src: '/xitoutdoors_logo.png', heightClass: 'h-14' },
  { name: 'Azorra', src: '/azorra_logo.png', heightClass: 'h-14' },
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

          <div className="stagger flex flex-wrap items-center justify-center gap-x-10 gap-y-8 sm:gap-x-16">
            {LOGOS.map((logo, i) => (
              <div
                key={i}
                className="group flex items-center justify-center"
                title={logo.name}
              >
                <img
                  src={logo.src}
                  alt={logo.name}
                  className={`${logo.heightClass} w-auto object-contain opacity-80 transition-opacity duration-300 group-hover:opacity-100`}
                />
              </div>
            ))}
          </div>

        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 section-divider" />
    </section>
  );
}
