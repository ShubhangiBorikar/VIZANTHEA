import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "VIZANTHEA – where data blooms into stories",
  description: "Data visualisation portfolio sharing step-by-step guides, tips and tricks",
  openGraph: {
    title: "VIZANTHEA - where data blooms into stories",
    description: "Data visualisation portfolio sharing step-by-step guides, tips and tricks",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "VIZANTHEA - where data blooms into stories",
    description: "Data visualisation portfolio sharing step-by-step guides, tips and tricks",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
