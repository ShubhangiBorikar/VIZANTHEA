"use client";

import { useState } from "react";
import Layout from "../components/Layout";

interface Project {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  description: string;
  tools: string[];
  link: string;
  steps: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: "Tableau 1",
    category: "Environmental",
    thumbnail: "https://placehold.co/800x500/096181/096181",
    description: "An exploration of cherry blossom bloom dates in Kyoto, Japan, spanning over a thousand years. This visualization reveals how climate change has shifted seasonal patterns and what that means for one of nature\u2019s most celebrated events.",
    tools: ["Tableau", "Python", "Excel"],
    link: "#",
    steps: [
      "Collected historical bloom date records from Japanese meteorological archives",
      "Cleaned and standardized date formats across centuries of data",
      "Built a time series analysis to identify long-term trends",
      "Designed the visualization with a seasonal color palette in Tableau",
      "Added contextual annotations for major climate events"
    ]
  },
  {
    id: 2,
    title: "Tableau 2",
    category: "Business Intelligence",
    thumbnail: "https://placehold.co/800x500/1a2235/1a2235",
    description: "A comprehensive executive dashboard providing a bird\u2019s-eye view of key business metrics. Designed to give leadership instant clarity on revenue, customer acquisition, and operational efficiency.",
    tools: ["Tableau", "SQL", "Snowflake"],
    link: "#",
    steps: [
      "Gathered requirements from C-suite stakeholders",
      "Built data pipeline connecting Snowflake warehouse to Tableau",
      "Designed KPI cards with conditional formatting for quick scanning",
      "Created drill-down capabilities for each metric",
      "Iterated on design based on user feedback sessions"
    ]
  },
  {
    id: 3,
    title: "Tableau 3",
    category: "Entertainment",
    thumbnail: "https://placehold.co/800x500/b8a5d8/b8a5d8",
    description: "A deep dive into Walt Disney\u2019s filmography, analyzing box office performance, genre trends, and the evolution of storytelling over decades. This piece combines data storytelling with visual design inspired by Disney\u2019s own aesthetic.",
    tools: ["Tableau", "Python", "Web Scraping"],
    link: "#",
    steps: [
      "Scraped box office data from multiple movie databases",
      "Cleaned and categorized films by era, genre, and studio",
      "Calculated inflation-adjusted revenue for fair comparisons",
      "Designed custom Disney-inspired color themes and typography",
      "Built interactive filters for exploring by decade and genre"
    ]
  },
  {
    id: 4,
    title: "Tableau 4",
    category: "Marketing Analytics",
    thumbnail: "https://placehold.co/800x500/d4456a/d4456a",
    description: "A recreation and enhancement of Google Analytics reporting, transforming raw web traffic data into actionable insights about user behavior, acquisition channels, and conversion patterns.",
    tools: ["Tableau", "Google Analytics", "SQL"],
    link: "#",
    steps: [
      "Exported raw session data from Google Analytics API",
      "Built a dimensional model for flexible analysis",
      "Created cohort analysis for user retention tracking",
      "Designed funnel visualizations for conversion optimization",
      "Added automated alerts for traffic anomalies"
    ]
  },
  {
    id: 5,
    title: "Tableau 5",
    category: "Data Art",
    thumbnail: "https://placehold.co/800x500/0a8a9e/0a8a9e",
    description: "Where data meets art. This piece pushes the boundaries of traditional data visualization, transforming numbers into visual poetry. Every element is data-driven, yet the result feels more like a gallery piece than a dashboard.",
    tools: ["Tableau", "Figma", "Illustrator"],
    link: "#",
    steps: [
      "Selected a compelling dataset with natural visual potential",
      "Sketched initial concepts blending data accuracy with artistic expression",
      "Experimented with unconventional chart types and layouts",
      "Refined the color palette for emotional impact",
      "Polished final details in Figma for pixel-perfect output"
    ]
  },
  {
    id: 6,
    title: "Tableau 6",
    category: "Community",
    thumbnail: "https://placehold.co/800x500/7b5ea7/7b5ea7",
    description: "A submission for the Makeover Monday community challenge, reimagining a published visualization with improved clarity, design, and storytelling. These weekly exercises sharpen both analytical and design skills.",
    tools: ["Tableau", "Excel"],
    link: "#",
    steps: [
      "Analyzed the original visualization for improvement opportunities",
      "Re-examined the underlying data for hidden insights",
      "Redesigned with a focus on clarity and visual hierarchy",
      "Applied best practices for color, typography, and layout",
      "Published and shared with the data community for feedback"
    ]
  },
];

export default function Portfolio() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <Layout>
      <div className="pg-hero" style={{ background: "url('/images/floral-bg-final.png') center/400px repeat" }}>
        <div className="pg-hero-inner">
          <p className="pg-label">Portfolio</p>
          <h1 className="pg-title">Work that speaks in charts</h1>
          <p className="pg-subtitle">Each project is a story — told through data, designed with intention, and built to make people pause and think.</p>
        </div>
      </div>

      <section className="pg-gallery">
        <div className="pg-grid">
          {projects.map((p) => (
            <div
              key={p.id}
              className="pg-card"
              data-testid={`portfolio-card-${p.id}`}
              onClick={() => setSelected(p)}
            >
              <div className="pg-card-img">
                <img src={p.thumbnail} alt={p.title} loading="lazy" />
                <div className="pg-card-overlay">
                  <span className="pg-card-cat">{p.category}</span>
                  <span className="pg-card-cta">View Project</span>
                </div>
              </div>
              <div className="pg-card-info">
                <h3 className="pg-card-title">{p.title}</h3>
                <div className="pg-card-tools">
                  {p.tools.slice(0, 3).map((t) => (
                    <span key={t} className="pg-card-tool">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selected && (
        <div className="pg-modal-backdrop" onClick={() => setSelected(null)} data-testid="modal-backdrop">
          <div className="pg-modal" onClick={(e) => e.stopPropagation()}>
            <button className="pg-modal-close" onClick={() => setSelected(null)} data-testid="modal-close">&times;</button>
            <div className="pg-modal-hero">
              <img src={selected.thumbnail} alt={selected.title} />
            </div>
            <div className="pg-modal-body">
              <span className="pg-modal-cat">{selected.category}</span>
              <h2 className="pg-modal-title">{selected.title}</h2>
              <p className="pg-modal-desc">{selected.description}</p>
              <div className="pg-modal-tools">
                {selected.tools.map((t) => (
                  <span key={t} className="pg-modal-tool">{t}</span>
                ))}
              </div>
              <div className="pg-modal-steps">
                <h3 className="pg-modal-steps-title">How it was built</h3>
                <ol className="pg-modal-steps-list">
                  {selected.steps.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ol>
              </div>
              <a href={selected.link} className="pg-modal-link" target="_blank" rel="noopener noreferrer" data-testid="modal-link">
                View on Tableau Public
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
              </a>
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
