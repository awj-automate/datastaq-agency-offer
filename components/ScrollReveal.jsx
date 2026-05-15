'use client';
import { useEffect } from 'react';

/**
 * Scroll-triggered reveal driver.
 * Extracted from app/page.js so the page can stay a server component
 * (and export real SEO metadata). Behaviour is unchanged: it watches
 * .reveal / .reveal-left / .reveal-right / .stagger elements and adds
 * .in-view when they enter the viewport.
 */
export default function ScrollReveal() {
  useEffect(() => {
    const classes = ['reveal', 'reveal-left', 'reveal-right', 'stagger'];
    const els = document.querySelectorAll(classes.map(c => `.${c}`).join(','));

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    els.forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
