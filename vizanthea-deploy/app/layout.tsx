import type { Metadata } from "next";
import React from "react";
import { gunzipSync } from "node:zlib";
import { productionCssGzipBase64 } from "./production-css";

export const metadata: Metadata = {
  title: "VIZANTHEA — Shubhangi Borikar",
  description: "Portfolio of Shubhangi Borikar, a product analytics professional turning complex data into confident business decisions.",
};

const productionCss = gunzipSync(Buffer.from(productionCssGzipBase64, "base64")).toString("utf8");

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
        const extraProofMarkup = [
          '<div class="operating-system">',
          '<p class="micro-label">HOW I APPROACH ANALYTICS</p>',
          '<div>',
          '<span>Business Question</span><i>→</i>',
          '<span>Trusted Metric</span><i>→</i>',
          '<span>Investigation</span><i>→</i>',
          '<span>Experiment or Model</span><i>→</i>',
          '<span>Decision</span>',
          '</div>',
          '</div>',
          '<div class="ask-panel">',
          '<div>',
          '<p class="micro-label">EXPLORE MY EXPERIENCE</p>',
          '<h3>Connect my experience to different business needs.</h3>',
          '<p>Select a question to explore my background and analytical approach.</p>',
          '</div>',
          '<div>',
          '<div class="ask-buttons">',
          '<button class="active" type="button">What are your strengths?</button>',
          '<button type="button">How do you use AI?</button>',
          '<button type="button">Which roles fit you?</button>',
          '</div>',
          '<p class="portfolio-answer">I connect customer, product, revenue, and operational signals—then translate them into governed metrics, forecasts, experiments, and decisions.</p>',
          '</div>',
          '</div>'
        ].join('');
        proofGrid.insertAdjacentHTML('afterend', extraProofMarkup);
      }

      const roleStates = [
        ['Feature adoption', 'Journey friction', 'Experiment design'],
        ['Campaign response', 'Audience quality', 'Incremental lift'],
        ['Retention', 'Churn drivers', 'Lifetime value'],
        ['Governed KPIs', 'Forecasting', 'Decision systems']
      ];
      const roleButtons = Array.from(proof.querySelectorAll('.lens-buttons button'));
      const roleOutputs = Array.from(proof.querySelectorAll('.lens-output span'));
      roleButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
          roleButtons.forEach((b) => b.classList.remove('active'));
          button.classList.add('active');
          const values = roleStates[index] || roleStates[0];
          roleOutputs.forEach((span, outputIndex) => {
            if (values[outputIndex]) span.textContent = values[outputIndex];
          });
        });
      });

      const investigationStates = [
        {
          finding: 'Newer customers declined first',
          detail: 'The movement is concentrated in early-tenure cohorts.',
          action: 'Test a simplified renewal path for the affected group.'
        },
        {
          finding: 'Checks support a genuine business signal',
          detail: 'Source totals, eligibility rules, and metric definitions reconcile.',
          action: 'Continue with behavioral analysis after documenting the validation results.'
        },
        {
          finding: 'Drop-off moved downstream',
          detail: 'Customers enter renewal but fewer complete the final confirmation.',
          action: 'Compare the current journey against a shorter controlled experience.'
        },
        {
          finding: 'Exposure remained stable',
          detail: 'Response weakened despite consistent offer reach.',
          action: 'Test clearer value framing before changing price.'
        }
      ];
      const investigationButtons = Array.from(proof.querySelectorAll('.investigation-buttons button'));
      const finding = proof.querySelector('.finding');
      const findingStrong = finding?.querySelector('strong');
      const findingParagraphs = finding ? Array.from(finding.querySelectorAll('p')) : [];
      investigationButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
          investigationButtons.forEach((b) => b.classList.remove('active'));
          button.classList.add('active');
          const state = investigationStates[index] || investigationStates[0];
          if (findingStrong) findingStrong.textContent = state.finding;
          if (findingParagraphs[0]) findingParagraphs[0].textContent = state.detail;
          if (findingParagraphs[1]) findingParagraphs[1].innerHTML = '<b>Next action:</b> ' + state.action;
        });
      });

      const askStates = [
        'I connect customer, product, revenue, and operational signals—then translate them into governed metrics, forecasts, experiments, and decisions.',
        'I use AI to accelerate SQL and Python development, validation, documentation, investigation paths, and stakeholder-ready storytelling while keeping human judgment in control.',
        'My experience is especially relevant to Product, Marketing, Growth, Lifecycle, Customer, or Data Strategy analytics where ambiguous questions require technical depth and business judgment.'
      ];
      const askButtons = Array.from(proof.querySelectorAll('.ask-buttons button'));
      const answer = proof.querySelector('.portfolio-answer');
      askButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
          askButtons.forEach((b) => b.classList.remove('active'));
          button.classList.add('active');
          if (answer) answer.textContent = askStates[index] || askStates[0];
        });
      });
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
        <style dangerouslySetInnerHTML={{ __html: productionCss }} />
      </head>
      <body>
        {children}
        <script dangerouslySetInnerHTML={{ __html: localizeRecoveredSite }} />
      </body>
    </html>
  );
}
