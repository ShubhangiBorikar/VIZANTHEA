"use client";

import { useState } from "react";

const posts = [
  { id: 1, title: "Why Your Dashboard Isn’t Working (And How to Fix It)", category: "Dashboard Design", thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop", date: "March 2026", readTime: "6 min read", excerpt: "Most dashboards fail not because the data is wrong, but because they try to answer every question at once. Here’s how to build dashboards people actually use.", content: ["I’ve reviewed hundreds of dashboards in my career, and the pattern is always the same — too many charts, too little story.", "Start with one question. What is the single most important thing this dashboard needs to answer?", "Use visual hierarchy ruthlessly. The most critical number should be the most prominent element.", "Color is not decoration — it’s information.", "Finally, test with real users and watch how they actually use the dashboard."] },
  { id: 2, title: "The SQL Patterns Every Analyst Should Know", category: "SQL", thumbnail: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=800&fit=crop", date: "February 2026", readTime: "8 min read", excerpt: "Window functions, CTEs, and the art of writing queries that are both powerful and readable. These are the patterns I reach for daily.", content: ["SQL fluency comes from mastering patterns, not memorizing syntax.", "CTEs make complex analytical logic readable.", "Window functions unlock comparisons, rankings, running totals, and lifecycle logic.", "CASE WHEN is one of the most useful tools for business logic.", "Write queries for the next analyst who has to maintain them."] },
  { id: 3, title: "From Spreadsheet to Story: A Data Visualization Journey", category: "Data Storytelling", thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop", date: "January 2026", readTime: "5 min read", excerpt: "How I transform raw files into visual narratives that help stakeholders understand what matters.", content: ["Every great visualization starts with a messy spreadsheet and a question worth answering.", "Spend time with the data before opening the visualization tool.", "Start with the insight, then choose the visual form.", "Annotations are a powerful storytelling device.", "Edit ruthlessly and protect white space."] },
  { id: 4, title: "Building a Data Culture: Lessons from the Trenches", category: "Leadership", thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop", date: "December 2025", readTime: "7 min read", excerpt: "Data culture is not about tools or dashboards — it is about making evidence the default language of decision-making.", content: ["You cannot install a data culture.", "Find the people who already think analytically.", "Make data accessible, not merely available.", "Celebrate data-driven wins publicly.", "Small wins compound into culture change."] },
  { id: 5, title: "Predictive Analytics Without the PhD", category: "Machine Learning", thumbnail: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=1200&h=800&fit=crop", date: "November 2025", readTime: "9 min read", excerpt: "Useful predictive models start with a clear business question, thoughtful features, clean data, and a path to action.", content: ["Useful predictive analytics starts with the decision, not the algorithm.", "Define what the model is meant to improve.", "Feature engineering is where domain knowledge matters most.", "Simple models can be very effective when evaluation is rigorous.", "The real work is embedding model output into a workflow."] },
  { id: 6, title: "Color Theory for Data Visualization", category: "Design", thumbnail: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1200&h=800&fit=crop", date: "October 2025", readTime: "6 min read", excerpt: "Color should encode meaning, establish hierarchy, and guide attention — not simply decorate a chart.", content: ["Color in data visualization encodes information.", "Start with a limited palette.", "Use sequential and diverging scales deliberately.", "Always consider accessibility.", "Start with grey and add emphasis only where attention is needed."] }
];

const tips = [
  { id: 1, title: "Start with the business question.", body: "Before writing SQL or opening a dashboard, define the decision the analysis needs to support." },
  { id: 2, title: "Validate before you visualize.", body: "Reconcile key metrics and investigate anomalies before turning them into charts or recommendations." },
  { id: 3, title: "Design for the next action.", body: "A useful insight should make it easier to decide what to test, fix, scale, or investigate next." },
  { id: 4, title: "Separate signal from noise.", body: "Check whether a movement is structural, seasonal, segment-specific, or simply a data-quality issue." },
  { id: 5, title: "Make assumptions visible.", body: "Forecasts and recommendations become more trustworthy when assumptions, risks, and guardrails are explicit." },
  { id: 6, title: "End with what happens next.", body: "A strong analysis closes with a decision, experiment, owner, or next question—not another chart." }
];

export default function InsightsPage() {
  const [tab, setTab] = useState<"blogs" | "tips">("blogs");
  const [selected, setSelected] = useState<(typeof posts)[number] | null>(null);

  return (
    <div className="insights-page">
      <header className="insights-header">
        <a className="insights-brand" href="/"><img src="/images/dataloom-icon-clean.png" alt=""/><span>VIZANTHEA</span></a>
        <nav>
          <a href="/#about">About</a><a href="/#skills">Skills</a><a href="/#proof">Applied Practice</a><a href="/#experience">Experience</a><a href="/insights">Insights</a><a href="/#contact">Contact</a>
        </nav>
      </header>

      <section className="insights-hero">
        <h1>Thoughts on data, design<br/>&amp; everything between.</h1>
        <p>Writing about what I learn, what I build, and the questions that keep analytical work interesting.</p>
        <div className="insights-tabs">
          <button className={tab === "blogs" ? "active" : ""} onClick={() => setTab("blogs")}>Blogs</button>
          <button className={tab === "tips" ? "active" : ""} onClick={() => setTab("tips")}>Tips &amp; Tricks</button>
        </div>
      </section>

      <main className="insights-content">
        <section className="insights-grid">
          {tab === "blogs" ? posts.map((post, index) => (
            <button className="insights-card" key={post.id} onClick={() => setSelected(post)}>
              <img src={post.thumbnail} alt=""/>
              <div className="insights-card-copy">
                <div className="insights-card-top"><span>{String(index + 1).padStart(2, "0")}</span><b>{post.category}</b></div>
                <div className="insights-meta"><span>{post.date}</span><span>{post.readTime}</span></div>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <small>Read Article →</small>
              </div>
            </button>
          )) : tips.map((tip, index) => (
            <article key={tip.id}>
              <div className="insights-card-top"><span>{String(index + 1).padStart(2, "0")}</span></div>
              <h2>{tip.title}</h2>
              <p>{tip.body}</p>
              <small>Open Guide →</small>
            </article>
          ))}
        </section>
      </main>

      <footer className="insights-footer">
        <a href="/">← Return to Portfolio</a>
        <em>Powered by curiosity &amp; caffeine.</em>
      </footer>

      {selected && (
        <div className="insights-modal-backdrop" onClick={() => setSelected(null)}>
          <article className="insights-modal" onClick={(e) => e.stopPropagation()}>
            <button className="insights-modal-close" onClick={() => setSelected(null)}>×</button>
            <img src={selected.thumbnail} alt=""/>
            <div className="insights-modal-body">
              <div className="insights-modal-meta"><b>{selected.category}</b><span>{selected.date}</span><span>{selected.readTime}</span></div>
              <h2>{selected.title}</h2>
              <div className="article-copy">{selected.content.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>
            </div>
          </article>
        </div>
      )}
      <style jsx global>{`.insights-page{background-image:url('/images/floral-bg-final.png')!important;background-size:520px!important}`}</style>
    </div>
  );
}
