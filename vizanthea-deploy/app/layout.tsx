import type { Metadata } from "next";
import React from "react";
import "./recovered.css";
import "./exact-dataloom-tail.css";
import "./final-fidelity.css";

export const metadata: Metadata = {
  title: "VIZANTHEA — Shubhangi Borikar",
  description: "Portfolio of Shubhangi Borikar, a product analytics professional turning complex data into confident business decisions.",
};

const localizeRecoveredSite = `
(() => {
  const localize = () => {
    document.querySelectorAll('a[href="https://data-loom-clean.shubhangiborikar.chatgpt.site/insights"]').forEach((a) => {
      a.setAttribute('href', '/insights');
    });

    document.querySelectorAll('img[src="https://data-loom-clean.shubhangiborikar.chatgpt.site/vizanthea-logo-clean.png"]').forEach((img) => {
      img.setAttribute('src', '/images/dataloom-icon-clean.png');
    });

    document.querySelectorAll('img[src="https://data-loom-clean.shubhangiborikar.chatgpt.site/shubhangi-borikar-headshot.jpeg"]').forEach((img) => {
      img.setAttribute('src', '/images/approved-headshot.jpeg');
    });

    document.querySelectorAll('a[href="https://data-loom-clean.shubhangiborikar.chatgpt.site/Shubhangi_Borikar_Resume.pdf"]').forEach((a) => {
      a.setAttribute('href', '/Shubhangi_Borikar_Resume.pdf');
    });

    const proof = document.querySelector('#proof');
    const proofGrid = proof?.querySelector('.proof-grid');
    if (proof && proofGrid) {
      const cards = proofGrid.querySelectorAll('article');
      if (cards[3]) {
        const h3 = cards[3].querySelector('h3');
        const p = cards[3].querySelector('p');
        const small = cards[3].querySelector('small');
        if (h3) h3.textContent = 'Customer Analytics';
        if (p) p.textContent = 'Cohorts, lifecycle movement, retention patterns, churn drivers, and opportunity sizing.';
        if (small) small.textContent = 'Lifecycle analysis canvas';
      }

      if (!proof.querySelector('.operating-system')) {
        proofGrid.insertAdjacentHTML('afterend', `
          <div class="operating-system">
            <p class="micro-label">HOW I APPROACH ANALYTICS</p>
            <div>
              <span>Business Question</span><i>→</i>
              <span>Trusted Metric</span><i>→</i>
              <span>Investigation</span><i>→</i>
              <span>Experiment or Model</span><i>→</i>
              <span>Decision</span>
            </div>
          </div>
          <div class="ask-panel">
            <div>
              <p class="micro-label">EXPLORE MY EXPERIENCE</p>
              <h3>Connect my experience to different business needs.</h3>
              <p>Select a question to explore my background and analytical approach.</p>
            </div>
            <div>
              <div class="ask-buttons">
                <button class="active" type="button">What are your strengths?</button>
                <button type="button">How do you use AI?</button>
                <button type="button">Which roles fit you?</button>
              </div>
              <p class="portfolio-answer">I connect customer, product, revenue, and operational signals—then translate them into governed metrics, forecasts, experiments, and decisions.</p>
            </div>
          </div>
        `);
      }
    }
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', localize, { once: true });
  } else {
    localize();
  }
})();
`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/images/dataloom-icon-clean.png" />
      </head>
      <body>
        {children}
        <script dangerouslySetInnerHTML={{ __html: localizeRecoveredSite }} />
      </body>
    </html>
  );
}
