'use client';
import { useState } from 'react';
import { faqs } from '../lib/faqData';

const BOOK_URL = '/schedule';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-white">
      <div className="relative z-10 max-w-[1356px] mx-auto px-5 sm:px-8 lg:px-12">
        <div className="content-wrap">
          <div className="max-w-3xl mx-auto">

            <div className="text-center mb-14 reveal">
              <div className="sub-title mx-auto mb-6">
                <span className="sub-title-dot" />
                FAQ
              </div>
              <h2
                className="font-jakarta font-extrabold text-4xl sm:text-5xl text-ds-heading mb-6"
                style={{ lineHeight: '1.1', letterSpacing: '-0.04em' }}
              >
                Questions agency operators ask
              </h2>
            </div>

            <div className="space-y-3 reveal">
              {faqs.map((f, i) => {
                const isOpen = openIndex === i;
                return (
                  <div
                    key={i}
                    className="card overflow-hidden"
                    style={{ border: '6px solid rgba(236,236,236,0.5)' }}
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : i)}
                      className="w-full flex items-center justify-between p-6 text-left"
                    >
                      <span
                        className="font-jakarta font-semibold text-base text-ds-heading pr-4"
                        style={{ letterSpacing: '-0.02em' }}
                      >
                        {f.q}
                      </span>
                      <svg
                        width="20" height="20" viewBox="0 0 20 20" fill="none"
                        className={`flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                      >
                        <path d="M10 4v12M4 10h12" stroke="#C9A227" strokeWidth="1.8" strokeLinecap="round" />
                      </svg>
                    </button>
                    <div
                      className={`transition-all duration-300 ease-out overflow-hidden ${
                        isOpen ? 'max-h-[28rem] opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="px-6 pb-6 pt-0">
                        <p className="font-jakarta text-sm text-ds-muted leading-relaxed" style={{ letterSpacing: '-0.02em' }}>
                          {f.a}
                        </p>
                        {i === faqs.length - 1 && (
                          <a href={BOOK_URL} className="btn-dark text-sm mt-5 h-11">
                            Book a Strategy Call
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 inset-x-0 section-divider" />
    </section>
  );
}
