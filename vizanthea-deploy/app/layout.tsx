import type { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "VIZANTHEA — Shubhangi Borikar",
  description: "Portfolio of Shubhangi Borikar, a product analytics professional turning complex data into confident business decisions.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://data-loom-clean.shubhangiborikar.chatgpt.site/assets/index-CMBmEwWN.css" />
        <link rel="icon" href="https://data-loom-clean.shubhangiborikar.chatgpt.site/favicon.svg" />
      </head>
      <body>{children}</body>
    </html>
  );
}
