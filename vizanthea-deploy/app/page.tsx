"use client";

import { useEffect, useRef, useCallback, useState } from "react";
import Layout from "./components/Layout";

const slides = [
  "https://placehold.co/800x500/096181/096181",
  "https://placehold.co/800x500/1a2235/1a2235",
  "https://placehold.co/800x500/b8a5d8/b8a5d8",
  "https://placehold.co/800x500/d4456a/d4456a",
  "https://placehold.co/800x500/0a8a9e/0a8a9e",
  "https://placehold.co/800x500/7b5ea7/7b5ea7",
];

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function AnimatedCounter({ end, suffix = "", prefix = "" }: { end: number; suffix?: string; prefix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const startTime = performance.now();
          const animate = (now: number) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * end));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [end]);

  return <span ref={ref}>{prefix}{count}{suffix}</span>;
}

function Slideshow() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((idx: number) => {
    setCurrent((idx + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  return (
    <div className="slideshow" data-testid="slideshow">
      {slides.map((url, i) => (
        <div
          key={i}
          className={`slide ${i === current ? "active" : ""}`}
          style={{ backgroundImage: `url('${url}')` }}
        />
      ))}
      <button className="slide-arrow arrow-prev" data-testid="slide-prev" onClick={() => goTo(current - 1)}>
        <svg width="32" height="32" viewBox="0 0 32 32"><path d="M11.433 15.992L22.69 5.712c.393-.39.393-1.03 0-1.42-.393-.39-1.03-.39-1.423 0l-11.98 10.94c-.21.21-.3.49-.285.76-.015.28.075.56.284.77l11.98 10.94c.393.39 1.03.39 1.424 0 .393-.4.393-1.03 0-1.42l-11.257-10.29" fillRule="evenodd"/></svg>
      </button>
      <button className="slide-arrow arrow-next" data-testid="slide-next" onClick={() => goTo(current + 1)}>
        <svg width="32" height="32" viewBox="0 0 32 32"><path d="M10.722 4.293c-.394-.39-1.032-.39-1.427 0-.393.39-.393 1.03 0 1.42l11.283 10.28-11.283 10.29c-.393.39-.393 1.02 0 1.42.395.39 1.033.39 1.427 0l12.007-10.94c.21-.21.3-.49.284-.77.014-.27-.076-.55-.286-.76L10.72 4.293z" fillRule="evenodd"/></svg>
      </button>
      <div className="slide-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`slide-dot ${i === current ? "active" : ""}`}
            data-testid={`slide-dot-${i}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const about = useScrollReveal();
  const metrics = useScrollReveal();
  const toolkit = useScrollReveal();

  return (
    <Layout>
      <section className="dl-hero">
        <div className="dl-hero-content">
          <div className="animated-logo-container">
            <div className="logo-aura"></div>
            <div className="logo-aura logo-aura-2"></div>
            <div className="logo-ring"></div>
            <img src="/images/dataloom-icon-clean.png" alt="VIZANTHEA Logo" className="logo-img" />
            <div className="logo-sparkles">
              {[...Array(12)].map((_, i) => (
                <span key={i} className={`sparkle sparkle-${i}`} />
              ))}
            </div>
            <div className="logo-shimmer"></div>
          </div>
          <h1 className="dl-hero-title hero-title-anim">VIZANTHEA</h1>
          <p className="dl-hero-tagline hero-tagline-anim">where data blooms into stories</p>
          <p className="dl-hero-desc hero-desc-anim">
            <strong>Guides. Portfolio. Ideas worth exploring.</strong><br/>For the curious mind — because every dataset has something worth showing.
          </p>
        </div>
        <div className="dl-hero-visual">
          <Slideshow />
        </div>
      </section>

      <section className={`dl-about ${about.visible ? "revealed" : ""}`} ref={about.ref}>
        <div className="dl-about-photo">
          <img
            src="/images/shubhangi-profile.jpg"
            alt="Shubhangi Borikar"
            data-testid="profile-photo"
          />
        </div>
        <div className="dl-about-content">
          <p className="dl-section-label">About Me</p>
          <h2 className="dl-about-name">SHUBHANGI BORIKAR</h2>
          <span className="dl-about-role" data-testid="about-role">Analyst. Builder. Storyteller.</span>
          <blockquote className="dl-about-quote">
            Some people see spreadsheets. <strong>I&apos;ve always seen the story hiding inside them</strong> — and spent my career learning how to make that story matter.
          </blockquote>
          <p className="dl-about-text">I&apos;ve spent 5+ years at the place where raw data becomes real decisions. I&apos;ve built the infrastructure that keeps information honest, designed the models that see customer behavior before it happens, and created the dashboards that turn skeptics into believers.</p>
          <div className={`dl-metrics ${metrics.visible ? "revealed" : ""}`} ref={metrics.ref}>
            <div className="dl-metric" data-testid="metric-revenue">
              <span className="dl-metric-val"><AnimatedCounter end={700} prefix="$" suffix="K" /></span>
              <span className="dl-metric-lbl">Revenue Protected</span>
            </div>
            <div className="dl-metric" data-testid="metric-efficiency">
              <span className="dl-metric-val"><AnimatedCounter end={38} suffix="%" /></span>
              <span className="dl-metric-lbl">Efficiency Gained</span>
            </div>
            <div className="dl-metric" data-testid="metric-years">
              <span className="dl-metric-val"><AnimatedCounter end={5} suffix="+" /></span>
              <span className="dl-metric-lbl">Years of Impact</span>
            </div>
          </div>
          <p className="dl-about-text">What makes me different isn&apos;t just the SQL, the Snowflake pipelines, or the Tableau builds — it&apos;s that I never forget there&apos;s a <strong>human on the other side of every dataset</strong>. A customer who might churn. A team drowning in reports they don&apos;t trust. An executive who needs one clear answer, not seventeen caveats.</p>
          <p className="dl-about-text">From cleaning messy CSVs at midnight to presenting insights to C-suite stakeholders, I&apos;ve done it all — and I genuinely enjoy every part of the process. I believe the best analysis doesn&apos;t just answer questions; <strong>it changes which questions get asked next</strong>.</p>
          <div className="dl-about-cta">
            I&apos;m drawn to environments where curiosity is valued as much as output, and where data isn&apos;t just a reporting function — it&apos;s how the business thinks. <strong>If that sounds like where you&apos;re building, I&apos;d love to be part of the conversation.</strong>
          </div>
        </div>
      </section>

      <section className={`dl-toolkit ${toolkit.visible ? "revealed" : ""}`} ref={toolkit.ref}>
        <div className="dl-toolkit-inner">
          <h2 className="dl-toolkit-heading">What I Work With</h2>
          <p className="dl-toolkit-sub">The tools, techniques, and territories I bring to every project.</p>
          <div className="dl-toolkit-grid">
            <div className="dl-toolkit-group dl-toolkit-tools">
              <div className="dl-toolkit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
              </div>
              <h3 className="dl-toolkit-cat">Languages &amp; Tools</h3>
              <div className="dl-toolkit-tags">
                {["SQL", "Python", "Power BI", "Tableau", "Advanced Excel", "Snowflake", "Redshift", "GitHub"].map((t) => (
                  <span key={t} className="dl-tag" data-testid={`tag-${t.toLowerCase().replace(/\s/g,'-')}`}>{t}</span>
                ))}
              </div>
            </div>
            <div className="dl-toolkit-group dl-toolkit-analytics">
              <div className="dl-toolkit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 21H4.6c-.56 0-.84 0-1.054-.109a1 1 0 01-.437-.437C3 20.24 3 19.96 3 19.4V3m4 7.5v7m4-11v11m4-8v8m4-4.5v4.5"/></svg>
              </div>
              <h3 className="dl-toolkit-cat">Analytics &amp; ML</h3>
              <div className="dl-toolkit-tags">
                {["Predictive Analytics", "A/B Testing", "Customer Segmentation", "Churn Prediction", "CLV Modeling", "Time Series Forecasting", "Regression", "Clustering"].map((t) => (
                  <span key={t} className="dl-tag" data-testid={`tag-${t.toLowerCase().replace(/\s/g,'-')}`}>{t}</span>
                ))}
              </div>
            </div>
            <div className="dl-toolkit-group dl-toolkit-domains">
              <div className="dl-toolkit-icon">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
              </div>
              <h3 className="dl-toolkit-cat">Domains</h3>
              <div className="dl-toolkit-tags">
                {["E-commerce", "Healthcare", "Finance", "Supply Chain", "Marketing"].map((t) => (
                  <span key={t} className="dl-tag dl-tag-domain" data-testid={`tag-${t.toLowerCase().replace(/\s/g,'-')}`}>{t}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
