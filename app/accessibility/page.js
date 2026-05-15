import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export const metadata = {
  title: 'Accessibility Statement | DataStaq AI',
  description: 'DataStaq AI’s commitment to building accessible, inclusive software.',
};

const LAST_UPDATED = 'May 4, 2026';
const CONTACT_EMAIL = 'hello@datastaqai.com';

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen bg-ds-bg">
      <Navbar />

      <div className="pt-32 pb-12 lg:pt-40 lg:pb-16">
        <div className="max-w-3xl mx-auto px-5 sm:px-8 lg:px-12 text-center">
          <h1 className="font-jakarta font-extrabold text-4xl sm:text-5xl lg:text-6xl text-ds-heading mb-4 leading-tight">
            Accessibility <span className="gradient-text">Statement</span>
          </h1>
          <p className="font-jakarta text-sm text-ds-subtle">Last updated: {LAST_UPDATED}</p>
        </div>
      </div>

      <article className="pb-24 lg:pb-32 max-w-3xl mx-auto px-5 sm:px-8 lg:px-12 font-jakarta text-ds-muted leading-relaxed space-y-6">
        <p>
          DataStaq AI is committed to making our website and the software we build accessible to as
          many people as possible, including those with disabilities.
        </p>

        <section>
          <h2 className="font-bold text-xl text-ds-heading mt-8 mb-3">Standards We Aim For</h2>
          <p>
            We aim to conform to the{' '}
            <a
              href="https://www.w3.org/WAI/standards-guidelines/wcag/"
              className="text-ds-primary underline hover:no-underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Web Content Accessibility Guidelines (WCAG) 2.1 Level AA
            </a>
            . These guidelines explain how to make web content more accessible to people with a wide
            array of disabilities, including visual, auditory, motor, and cognitive impairments.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-xl text-ds-heading mt-8 mb-3">What We Do</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use semantic HTML and ARIA attributes where appropriate.</li>
            <li>Maintain sufficient color contrast and readable typography.</li>
            <li>Support keyboard navigation across primary interactions.</li>
            <li>Provide text alternatives for non-text content where feasible.</li>
            <li>Test with screen readers and accessibility tooling during development.</li>
          </ul>
        </section>

        <section>
          <h2 className="font-bold text-xl text-ds-heading mt-8 mb-3">Known Limitations</h2>
          <p>
            Despite our efforts, parts of the site may not yet be fully accessible. We continue to
            audit and improve. If you encounter a barrier, we want to know.
          </p>
        </section>

        <section>
          <h2 className="font-bold text-xl text-ds-heading mt-8 mb-3">Contact &amp; Feedback</h2>
          <p>
            If you experience an accessibility issue on this site, or would like content in an
            alternative format, email{' '}
            <a href={`mailto:${CONTACT_EMAIL}`} className="text-ds-primary underline hover:no-underline">
              {CONTACT_EMAIL}
            </a>
            . We aim to respond within five business days.
          </p>
        </section>
      </article>

      <Footer />
    </main>
  );
}
