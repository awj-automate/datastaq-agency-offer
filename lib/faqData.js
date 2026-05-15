/*
  Shared FAQ content — single source of truth.
  Imported by:
    • components/FAQ.jsx  (renders the accordion UI)
    • app/page.js         (builds the FAQPage JSON-LD for SEO)
  Plain module (no 'use client') so the server component can import it safely.
*/

export const faqs = [
  {
    q: 'What ad platforms do you support?',
    a: 'Meta and Google are the core — that is where most of your spend lives. We also connect TikTok, LinkedIn, Microsoft Ads, and the other major platforms your clients run, plus GA4 for site-side data. If a client runs it, we can usually pull it.',
  },
  {
    q: 'Which CRMs and revenue tools do you integrate?',
    a: 'HubSpot, Salesforce, Pipedrive, and most major CRMs, alongside revenue sources like Stripe, Shopify, and call-tracking tools. The goal is to tie ad spend to actual pipeline and revenue — not just platform-reported metrics.',
  },
  {
    q: 'How is this different from hiring a full-time analyst?',
    a: 'An analyst costs $80-100K a year, takes months to ramp, and still works inside spreadsheets — and when they leave, the knowledge leaves with them. We build the actual infrastructure. The system keeps running and stays documented regardless of who is at their desk on a given day.',
  },
  {
    q: 'What does the build process actually look like?',
    a: 'Four steps: discovery, architecture, build, partnership. We audit your stack, design the data layer for your specific client mix, connect every platform, and launch your dashboards — with the first accounts live within weeks. Then we stay on as your ongoing data partner.',
  },
  {
    q: 'Can our clients access their own dashboards?',
    a: 'Yes. We build branded, client-facing dashboards with permissioned access, so each client sees their accounts — and only their accounts. It turns reporting from a weekly export into a standing deliverable that runs on its own.',
  },
  {
    q: 'How do you handle data security and access permissions?',
    a: 'Read-only API connections wherever the platform allows, role-based access scoped by client and by team member, and no shared logins. Your data lives in infrastructure your agency owns and controls — we build it, you keep it.',
  },
  {
    q: 'What is the typical engagement length and pricing model?',
    a: 'A fractional monthly retainer — a fraction of what one full-time analyst would cost. Engagements are ongoing because the system needs a partner maintaining it, not a one-time build that drifts out of date. We will scope the specifics with you on the strategy call. [TODO: confirm exact pricing range and terms before launch]',
  },
  {
    q: 'What happens if we add new clients after the initial build?',
    a: 'Onboarding new clients is part of the partnership, not a change order. As each client signs, we connect their ad platforms, CRM, and revenue tools and add them to your dashboards — usually within days.',
  },
];
