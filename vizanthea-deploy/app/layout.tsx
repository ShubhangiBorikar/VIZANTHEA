import type { Metadata } from "next";
import React from "react";
import "./recovered.css";

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
      img.setAttribute('src', '/images/headshot.png');
    });
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
