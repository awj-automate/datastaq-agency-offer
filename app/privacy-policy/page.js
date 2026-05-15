import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Privacy Policy | DataStaq AI',
  description: 'How DataStaq AI collects, uses, and protects your information.',
};

const LAST_UPDATED = 'May 4, 2026';
const CONTACT_EMAIL = 'hello@datastaqai.com';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-ds-bg">
      <Navbar />

      <div className="pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <h1 className="font-jakarta font-extrabold text-4xl sm:text-5xl lg:text-6xl text-ds-heading mb-4 leading-tight">
            Privacy <span className="gradient-text">Policy</span>
          </h1>
          <p className="font-jakarta text-sm text-ds-subtle">Last updated: {LAST_UPDATED}</p>
        </div>
      </div>

      <article className="pb-24 lg:pb-32 max-w-3xl mx-auto px-5 sm:px-8 lg:px-12 font-jakarta text-ds-muted leading-relaxed space-y-6">
        <p>
          This Privacy Policy describes how DataStaq AI (&ldquo;DataStaq&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) collects,
          uses, and shares information when you visit datastaqai.com or engage us for software
          development, MVP, or AI services (the &ldquo;Services&rdquo;).
        </p>

        <section>
          <h2 className="font-bold text-xl text-ds-heading mt-8 mb-3">Information We Collect</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Information you provide.</strong> Name, email, company, project details, and any
              messages you send via our scheduling form, contact forms, or email.
            </li>
            <li>
              <strong>Usage data.</strong> Pages viewed, referrer, device type, approximate location, and
              similar analytics data collected through cookies and similar technologies.
            </li>
            <li>
              <strong>Calendar &amp; meeting data.</strong> When you book a call, we receive scheduling
              information from our scheduling provider (Calendly) including the meeting time and any
              questions you answered.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold text-xl text-ds-heading mt-8 mb-3">How We Use Information</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>To respond to inquiries and deliver the Services you request.</li>
            <li>To operate, maintain, and improve our website and offerings.</li>
            <li>To send you operational messages and, with your consent, occasional updates.</li>
            <li>To comply with legal obligations and enforce our terms.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold text-xl text-ds-heading mt-8 mb-3">How We Share Information</h2>
          <p>
            We do not sell personal information. We share information with vendors who help us run the
            Services (for example, hosting, analytics, scheduling, and email) under contracts that
            require them to protect your data. We may also disclose information when required by law or
            to protect our rights.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-xl text-ds-heading mt-8 mb-3">Cookies &amp; Analytics</h2>
          <p>
            We use cookies and similar technologies, including Google Analytics, to understand how
            visitors use the site. See our{' '}
            <a href="/cookies" className="text-ds-primary underline hover:no-underline">Cookie Policy</a>{' '}
            for details. You can disable cookies in your browser settings.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-xl text-ds-heading mt-8 mb-3">Data Retention</h2>
          <p>
            We retain personal information only as long as needed to provide the Services, comply with
            legal obligations, resolve disputes, and enforce agreements. Inquiry records are typically
            retained for up to 24 months unless an engagement begins.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-xl text-ds-heading mt-8 mb-3">Your Rights</h2>
          <p>
            Depending on where you live, you may have rights to access, correct, delete, or port your
            personal information, or to object to certain processing. To exercise these rights, email{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-ds-primary underline hover:no-underline">
              {CONTACT_EMAIL}
            </a>
            . We will respond within the timeframes required by applicable law.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-xl text-ds-heading mt-8 mb-3">Security</h2>
          <p>
            We use reasonable administrative, technical, and physical safeguards to protect your
            information. No method of transmission or storage is 100% secure, so we cannot guarantee
            absolute security.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-xl text-ds-heading mt-8 mb-3">Children</h2>
          <p>
            The Services are not directed to children under 13, and we do not knowingly collect
            personal information from children.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-xl text-ds-heading mt-8 mb-3">Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. When we do, we will revise the &ldquo;Last
            updated&rdquo; date above. Material changes will be communicated through the site.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-xl text-ds-heading mt-8 mb-3">Contact</h2>
          <p>
            Questions about this policy? Email{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-ds-primary underline hover:no-underline">
              {CONTACT_EMAIL}
            </a>
            .
          </p>
        </section>
      </article>

      <Footer />
    </main>
  );
}
