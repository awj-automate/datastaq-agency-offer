import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Terms of Service | DataStaq AI',
  description: 'The terms that govern your use of DataStaq AI services and website.',
};

const LAST_UPDATED = 'May 4, 2026';
const CONTACT_EMAIL = 'hello@datastaqai.com';

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-ds-bg">
      <Navbar />

      <div className="pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <h1 className="font-jakarta font-extrabold text-4xl sm:text-5xl lg:text-6xl text-ds-heading mb-4 leading-tight">
            Terms of <span className="gradient-text">Service</span>
          </h1>
          <p className="font-jakarta text-sm text-ds-subtle">Last updated: {LAST_UPDATED}</p>
        </div>
      </div>

      <article className="pb-24 lg:pb-32 max-w-3xl mx-auto px-5 sm:px-8 lg:px-12 font-jakarta text-ds-muted leading-relaxed space-y-6">
        <p>
          These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of the DataStaq AI
          website (datastaqai.com) and any services we provide (the &ldquo;Services&rdquo;). By using the
          site or engaging us, you agree to these Terms.
        </p>

        <section>
          <h2 className="font-bold text-xl text-ds-heading mt-8 mb-3">Use of the Website</h2>
          <p>
            You may use this website for lawful purposes only. You agree not to misuse the site,
            attempt to gain unauthorized access, scrape content at scale, or interfere with its normal
            operation.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-xl text-ds-heading mt-8 mb-3">Engagements &amp; Statements of Work</h2>
          <p>
            Specific consulting, development, or AI engagements are governed by a separate Statement of
            Work (SOW), proposal, or master services agreement signed by both parties. In the event of
            a conflict between these Terms and a signed SOW, the SOW controls.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-xl text-ds-heading mt-8 mb-3">Intellectual Property</h2>
          <p>
            The site, including its design, copy, code, and graphics, is owned by DataStaq AI and
            protected by intellectual property laws. Ownership of deliverables produced under an
            engagement is governed by the applicable SOW.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-xl text-ds-heading mt-8 mb-3">Third-Party Links &amp; Services</h2>
          <p>
            The site may contain links to third-party websites or rely on third-party tools (such as
            Calendly, Google Analytics, and hosting providers). We are not responsible for third-party
            content or practices and recommend you review their terms and privacy policies.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-xl text-ds-heading mt-8 mb-3">Disclaimers</h2>
          <p>
            The website and any free tools we publish are provided &ldquo;as is&rdquo; and &ldquo;as
            available,&rdquo; without warranties of any kind, express or implied. We do not warrant that
            the site will be uninterrupted, error-free, or free of harmful components.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-xl text-ds-heading mt-8 mb-3">Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, DataStaq AI will not be liable for indirect,
            incidental, special, consequential, or punitive damages, or for any loss of profits or
            revenues, whether incurred directly or indirectly, arising from your use of the website.
            Liability arising from a paid engagement is governed by the applicable SOW.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-xl text-ds-heading mt-8 mb-3">Indemnification</h2>
          <p>
            You agree to indemnify and hold harmless DataStaq AI from any claims, damages, or expenses
            arising from your misuse of the site or violation of these Terms.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-xl text-ds-heading mt-8 mb-3">Governing Law</h2>
          <p>
            These Terms are governed by the laws of the United States and the state in which DataStaq
            AI is principally based, without regard to conflict of laws principles. Any dispute will be
            resolved in the state or federal courts located in that jurisdiction.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-xl text-ds-heading mt-8 mb-3">Changes</h2>
          <p>
            We may update these Terms from time to time. Continued use of the site after changes
            constitutes acceptance of the updated Terms.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-xl text-ds-heading mt-8 mb-3">Contact</h2>
          <p>
            Questions about these Terms? Email{' '}
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
