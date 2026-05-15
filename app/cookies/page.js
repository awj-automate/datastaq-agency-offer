import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Cookie Policy | DataStaq AI',
  description: 'How DataStaq AI uses cookies and similar technologies on our website.',
};

const LAST_UPDATED = 'May 4, 2026';
const CONTACT_EMAIL = 'hello@datastaqai.com';

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-ds-bg">
      <Navbar />

      <div className="pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <h1 className="font-jakarta font-extrabold text-4xl sm:text-5xl lg:text-6xl text-ds-heading mb-4 leading-tight">
            Cookie <span className="gradient-text">Policy</span>
          </h1>
          <p className="font-jakarta text-sm text-ds-subtle">Last updated: {LAST_UPDATED}</p>
        </div>
      </div>

      <article className="pb-24 lg:pb-32 max-w-3xl mx-auto px-5 sm:px-8 lg:px-12 font-jakarta text-ds-muted leading-relaxed space-y-6">
        <p>
          This Cookie Policy explains how DataStaq AI uses cookies and similar technologies when you
          visit datastaqai.com.
        </p>

        <section>
          <h2 className="font-bold text-xl text-ds-heading mt-8 mb-3">What Are Cookies?</h2>
          <p>
            Cookies are small text files placed on your device when you visit a website. They help the
            site work, remember your preferences, and provide information to the site owner about how
            the site is used.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-xl text-ds-heading mt-8 mb-3">Types of Cookies We Use</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Strictly necessary.</strong> Required for the site to function (for example, page
              navigation and form submission).
            </li>
            <li>
              <strong>Analytics.</strong> We use Google Analytics (gtag.js) to understand aggregate
              usage patterns. These cookies help us improve the site and content.
            </li>
            <li>
              <strong>Functional.</strong> Used by embedded tools like our scheduling provider
              (Calendly) to remember your selections.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold text-xl text-ds-heading mt-8 mb-3">Managing Cookies</h2>
          <p>
            Most browsers let you block or delete cookies through their settings. Blocking strictly
            necessary cookies may break parts of the site. To opt out of Google Analytics across all
            sites, you can install the{' '}
            <a
              href="https://tools.google.com/dlpage/gaoptout"
              className="text-ds-primary underline hover:no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Analytics opt-out browser add-on
            </a>
            .
          </p>
        </section>

        <section>
          <h2 className="font-bold text-xl text-ds-heading mt-8 mb-3">Changes to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time. The &ldquo;Last updated&rdquo; date above
            reflects the most recent revision.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-xl text-ds-heading mt-8 mb-3">Contact</h2>
          <p>
            Questions about cookies on our site? Email{' '}
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
