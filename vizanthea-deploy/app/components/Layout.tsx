"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="dl-page">
      <header className="dl-header">
        <div className="dl-header-inner">
          <Link href="/" className="dl-brand" data-testid="brand-link">
            <img src="/images/dataloom-icon.png" alt="VIZANTHEA" />
            <span>VIZANTHEA</span>
          </Link>
          <nav className="dl-nav" data-testid="main-nav">
            <Link href="/portfolio" className={pathname === "/portfolio" ? "nav-active" : ""}>Portfolio</Link>
            <Link href="/blogs" className={pathname === "/blogs" ? "nav-active" : ""}>Blogs</Link>
            <Link href="/tips" className={pathname === "/tips" ? "nav-active" : ""}>Tips &amp; tricks</Link>
          </nav>
          <div className="dl-header-social">
            <a href="mailto:shubhangiborikar@gmail.com" title="Email" data-testid="social-email">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 4L12 13 2 4"/></svg>
            </a>
            <a href="https://www.linkedin.com/in/shubhangiborikar/" target="_blank" rel="noopener noreferrer" title="LinkedIn" data-testid="social-linkedin">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
          </div>
        </div>
      </header>

      {children}

      <footer className="dl-footer">
        <div className="dl-footer-inner">
          <Link href="/" className="dl-footer-brand" data-testid="footer-brand">VIZANTHEA</Link>
          <span className="dl-footer-tagline">Powered by curiosity &amp; caffeine.</span>
        </div>
      </footer>
    </div>
  );
}
