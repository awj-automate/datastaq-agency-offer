/*
  ═══════════════════════════════════════════════════════════════════════
  PAGE: Fractional Ad Visibility for Agencies  (site homepage — "/")
  ───────────────────────────────────────────────────────────────────────
  Organic / referral / direct-traffic offer page. Redesigned in place:
  this IS the homepage, not a sub-route. Server component so it can export
  real SEO metadata + JSON-LD; the scroll-reveal effect lives in the
  <ScrollReveal /> client component.

  ───────────────────────────────────────────────────────────────────────
  ⚠️  BEFORE LAUNCH — fill in every item below
  ───────────────────────────────────────────────────────────────────────
  IMAGE / ASSET TODOs
    • /public/og-image.png — Open Graph + Twitter card image, 1200x630.
      Depict: "Agency Performance Hub" dashboard on the brand gradient,
      with the headline. Hero-tier. (Referenced in `metadata` below.)
    • Hero visual — components/Hero.jsx has an optional custom hero-image
      TODO. The coded dashboard mockup ships as the default; swap only if
      you commission a custom render. (~1200x900 @2x, /public/hero-agency-hub.png)
    • Social proof logos — components/SocialProof.jsx — 6 agency client
      logos. Placeholders: {{LOGO_AGENCY_1}} … {{LOGO_AGENCY_6}}.
      SVG or transparent PNG @2x, render box 132x40.
    • Testimonial headshots — components/Testimonials.jsx — 3 headshots,
      ~160x160, /public/testimonials/*. Currently rendering initials.

  COPY PLACEHOLDERS  ({{...}})
    • components/Testimonials.jsx — per testimonial (x3):
        {{TESTIMONIAL_n_QUOTE}}  {{TESTIMONIAL_n_NAME}}
        {{TESTIMONIAL_n_ROLE}}   {{TESTIMONIAL_n_AGENCY}}

  STATS TO CONFIRM  (directional placeholders — verify or soften)
    • components/Benefits.jsx:
        {{STAT_HOURS_RECOVERED}} = "60-100"   AM hrs/week recovered
        {{STAT_VISIBILITY}}      = "100%"     live account visibility
        {{STAT_HEADCOUNT}}       = "0"        additional headcount
        {{STAT_TIME_TO_LIVE}}    = "Weeks"    time to implementation
    • lib/faqData.js — FAQ #7 has an inline [TODO: confirm exact pricing
      range and terms before launch].
    • Hero.jsx + HowItWorks.jsx dashboard mockups use illustrative figures
      ($214K spend, 17 accounts, 3.8x ROAS, 99.9% uptime, etc.) — these
      are decorative UI, not claims, but adjust if you prefer.

  NOT MODIFIED (intentional, per brief)
    • components/Footer.jsx — global footer, shared across all routes.
      Left untouched. NOTE: it still contains the previous offer's copy
      and a "/#use-cases" anchor that no longer exists on this page —
      update separately if/when you want the footer refreshed site-wide.
    • app/sitemap.js — the homepage ("/") is already entry #1 with
      priority 1, so no sitemap change was needed for this page.

  REMOVED
    • components/UseCases.jsx and components/WhyCustom.jsx were only used
      by this homepage and held the prior offer's copy — deleted as part
      of the in-place redesign.
  ═══════════════════════════════════════════════════════════════════════
*/

import ScrollReveal from '../components/ScrollReveal';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import SocialProof from '../components/SocialProof';
import Problem from '../components/Problem';
import WhoItsFor from '../components/WhoItsFor';
import Solution from '../components/Solution';
import HowItWorks from '../components/HowItWorks';
import Benefits from '../components/Benefits';
import Differentiation from '../components/Differentiation';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import { faqs } from '../lib/faqData';

const SITE_URL = 'https://datastaqai.com';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: 'Fractional Ad Data Infrastructure for Agencies | DataStaq AI',
  description:
    'DataStaq AI is a fractional ad data partner for agencies running $100K+/mo — we unify every client\'s Meta, Google, CRM, and revenue data into one live dashboard with proactive alerts.',
  keywords: [
    'ad agency data infrastructure',
    'fractional ad analyst',
    'agency reporting automation',
    'ad agency dashboard',
    'Meta and Google Ads reporting',
    'client-facing ad reporting',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    url: SITE_URL,
    siteName: 'DataStaq AI',
    title: 'Fractional Ad Data Infrastructure for Agencies | DataStaq AI',
    description:
      'Unify every client\'s Meta, Google, CRM, and revenue data into one live dashboard. A fractional ad data partner for agencies that have outgrown spreadsheets.',
    images: [
      {
        // TODO: add /public/og-image.png (1200x630) — see README block above
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'DataStaq AI — Fractional Ad Data Infrastructure for Agencies',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fractional Ad Data Infrastructure for Agencies | DataStaq AI',
    description:
      'Unify every client\'s Meta, Google, CRM, and revenue data into one live dashboard. A fractional ad data partner for agencies that have outgrown spreadsheets.',
    images: ['/og-image.png'], // TODO: add /public/og-image.png — see README block above
  },
};

/* ── Structured data (JSON-LD) ──────────────────────────────────────────
   Note: the rest of the repo does not currently use JSON-LD. It is added
   here because this page is built to rank organically. Safe to remove for
   consistency if preferred. */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': `${SITE_URL}/#organization`,
      name: 'DataStaq AI',
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/logo.png`,
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: 'DataStaq AI',
      publisher: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'Service',
      name: 'Fractional Ad Data Infrastructure for Agencies',
      serviceType: 'Fractional ad data partner and marketing data infrastructure',
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: 'US',
      description:
        'A built-for-you data system and ongoing partnership for ad agencies: every client\'s ad platforms, CRM, and revenue tools unified into one live dashboard with proactive alerts and client-facing reporting.',
      audience: {
        '@type': 'BusinessAudience',
        name: 'Ad agencies running $100K+/month in ad spend across Meta and Google with 10-20+ active clients',
      },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: {
          '@type': 'Answer',
          // strip inline [TODO ...] notes from structured data
          text: f.a.replace(/\s*\[TODO[^\]]*\]/g, ''),
        },
      })),
    },
  ],
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ScrollReveal />
      <Navbar />
      <Hero />
      <SocialProof />
      <Problem />
      <WhoItsFor />
      <Solution />
      <HowItWorks />
      <Benefits />
      <Differentiation />
      <Testimonials />
      <CTA />
      <FAQ />
      <Footer />
    </main>
  );
}
