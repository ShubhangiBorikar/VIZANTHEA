"use client";

import { useState } from "react";

const posts = [
  {
    id: 1,
    title: "Why Your Dashboard Isn’t Working (And How to Fix It)",
    category: "Dashboard Design",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    date: "March 2026",
    readTime: "6 min read",
    excerpt: "Most dashboards fail not because the data is wrong, but because they try to answer every question at once. Here’s how to build dashboards people actually use.",
    content: [
      "I’ve reviewed hundreds of dashboards in my career, and the pattern is always the same — too many charts, too little story. The best dashboards don’t show everything; they show the right thing at the right time.",
      "Start with one question. What is the single most important thing this dashboard needs to answer? Build outward from there, adding context only when it serves that core question.",
      "Use visual hierarchy ruthlessly. The most critical number should be the largest, most prominent element. Supporting metrics should fade into the background until someone actively seeks them.",
      "Color is not decoration — it’s information. Reserve bold colors for things that need attention. When everything is colorful, nothing stands out.",
      "Finally, test with real users. Watch them use it. Where do their eyes go? What questions do they ask? The answers will tell you exactly what needs to change."
    ]
  },
  {
    id: 2,
    title: "The SQL Patterns Every Analyst Should Know",
    category: "SQL",
    thumbnail: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=800&fit=crop",
    date: "February 2026",
    readTime: "8 min read",
    excerpt: "Window functions, CTEs, and the art of writing queries that are both powerful and readable. These are the patterns I reach for daily.",
    content: [
      "SQL is the language of data, and like any language, fluency comes from mastering patterns, not memorizing syntax.",
      "CTEs are your best friend for readability. Break complex queries into named steps so the logic remains easy to debug and maintain.",
      "Window functions changed everything. ROW_NUMBER, LAG, LEAD, and running totals let you answer questions in a single query that would otherwise require multiple subqueries.",
      "CASE WHEN is more powerful than most analysts realize. Use it for custom categorizations, conditional aggregations, and flexible business logic.",
      "Always write queries as if someone else will maintain them. Code is read far more often than it is written."
    ]
  },
  {
    id: 3,
    title: "From Spreadsheet to Story: A Data Visualization Journey",
    category: "Data Storytelling",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    date: "January 2026",
    readTime: "5 min read",
    excerpt: "How I transform raw files into visual narratives that help stakeholders see what matters and what to do next.",
    content: [
      "Every great visualization starts with a messy spreadsheet and a question worth answering. The magic happens in the space between data and design.",
      "Before opening Tableau, spend time with the data. Look for patterns, anomalies, and the moments that would surprise your audience.",
      "Do not start with the chart type. Start with the insight, then choose the visual form that delivers it most clearly.",
      "Annotations are the secret weapon of great visualizations. A well-placed callout turns a chart from interesting into actionable.",
      "Finally, edit ruthlessly. The white space you create is as important as the data you show."
    ]
  },
  {
    id: 4,
    title: "Building a Data Culture: Lessons from the Trenches",
    category: "Leadership",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop",
    date: "December 2025",
    readTime: "7 min read",
    excerpt: "Data culture is not about tools or dashboards — it is about making evidence the default language of decision-making.",
    content: [
      "You cannot install a data culture. It is built one conversation, one decision, and one ‘show me the data’ moment at a time.",
      "Start by finding the people in each function who already think analytically and give them the context and tools to move faster.",
      "Make data accessible, not merely available. A warehouse full of tables is not the same thing as trusted decision support.",
      "Celebrate data-driven wins publicly. Stories change behavior faster than mandates.",
      "Culture shifts slowly, but every small win compounds."
    ]
  },
  {
    id: 5,
    title: "Predictive Analytics Without the PhD",
    category: "Machine Learning",
    thumbnail: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=1200&h=800&fit=crop",
    date: "November 2025",
    readTime: "9 min read",
    excerpt: "Useful predictive models start with a clear business question, thoughtful features, clean data, and a path to action.",
    content: [
      "Predictive analytics sounds intimidating, but many impactful models are surprisingly simple. You do not need deep learning; you need good features and clean data.",
      "Start with a clear business question and define the decision the model is supposed to improve.",
      "Feature engineering is where domain knowledge matters most. Understanding customer behavior often matters more than algorithmic sophistication.",
      "Simple models can take you a long way when evaluation is rigorous and class imbalance is handled thoughtfully.",
      "The real work is not building the model — it is embedding the output into a decision workflow."
    ]
  },
  {
    id: 6,
    title: "Color Theory for Data Visualization",
    category: "Design",
    thumbnail: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1200&h=800&fit=crop",
    date: "October 2025",
    readTime: "6 min read",
    excerpt: "Color should encode meaning, establish hierarchy, and guide attention — not simply decorate a chart.",
    content: [
      "Color in data visualization is not about making things pretty — it is about encoding information. Every color choice should have a reason.",
      "Start with a limited palette. Too many colors create competition instead of hierarchy.",
      "Use sequential scales for continuous values, diverging scales when a meaningful midpoint matters, and categorical colors for distinct groups.",
      "Always consider accessibility and make sure important distinctions do not depend on color alone.",
      "When in doubt, start with grey and add one highlight color only where attention is needed."
    ]
  }
];

export default function InsightsPage() {
  const [selected, setSelected] = useState<(typeof posts)[number] | null>(null);

  return (
    <div className="insights-page">
      <header className="insights-header">
        <a className="insights-brand" href="/">
          <img src="/images/dataloom-icon-clean.png" alt="" />
          <span>VIZANTHEA</span>
        </a>
        <nav>
          <a href="/#about">About</a>
          <a href="/#skills">Skills</a>
          <a href="/#proof">Applied Practice</a>
          <a href="/#experience">Experience</a>
          <a className="active" href="/insights">Insights</a>
          <a href="/#contact">Contact</a>
        </nav>
      </header>

      <main>
        <section className="insights-hero">
          <div className="insights-hero-inner">
            <p className="eyebrow">S.06 · INSIGHTS</p>
            <h1>Thoughts on data, design &amp; everything between.</h1>
            <p className="lede">Writing about what I learn, what I build, and the occasional opinion nobody asked for.</p>
          </div>
        </section>

        <section className="insights-grid-wrap">
          <div className="insights-grid">
            {posts.map((post) => (
              <article className="insights-card" key={post.id} onClick={() => setSelected(post)}>
                <button type="button" aria-label={`Read ${post.title}`}>
                  <div className="insights-image-wrap">
                    <img src={post.thumbnail} alt="" loading="lazy" />
                    <span className="insights-category">{post.category}</span>
                  </div>
                  <div className="insights-card-copy">
                    <div className="insights-meta"><span>{post.date}</span><span>{post.readTime}</span></div>
                    <h2>{post.title}</h2>
                    <p>{post.excerpt}</p>
                    <span className="read-link">Read article <b>↗</b></span>
                  </div>
                </button>
              </article>
            ))}
          </div>
        </section>
      </main>

      <footer className="insights-footer">
        <span>VIZANTHEA</span>
        <a href="/">Back to portfolio ↑</a>
      </footer>

      {selected && (
        <div className="article-backdrop" onClick={() => setSelected(null)}>
          <article className="article-modal" onClick={(e) => e.stopPropagation()}>
            <button className="close-modal" onClick={() => setSelected(null)} aria-label="Close article">×</button>
            <img className="article-hero" src={selected.thumbnail} alt="" />
            <div className="article-body">
              <p className="eyebrow">{selected.category} · {selected.date} · {selected.readTime}</p>
              <h2>{selected.title}</h2>
              {selected.content.map((p, i) => <p key={i}>{p}</p>)}
            </div>
          </article>
        </div>
      )}

      <style jsx global>{`
        .insights-page { min-height: 100vh; background: #f7f9fb; color: #151515; }
        .insights-header { height: 72px; padding: 0 4vw; display: flex; align-items: center; justify-content: space-between; background: rgba(255,255,255,.96); border-bottom: 1px solid rgba(15,23,42,.08); position: sticky; top: 0; z-index: 50; }
        .insights-brand { display: inline-flex; align-items: center; gap: 11px; font-family: Georgia, 'Times New Roman', serif; font-size: 14px; letter-spacing: .11em; text-decoration: none; color: #151515; }
        .insights-brand img { width: 25px; height: 25px; object-fit: contain; }
        .insights-header nav { display: flex; align-items: center; gap: 30px; }
        .insights-header nav a { font-size: 12px; color: #676767; text-decoration: none; transition: color .2s ease; }
        .insights-header nav a:hover, .insights-header nav a.active { color: #151515; }
        .insights-hero { min-height: 470px; display: flex; align-items: flex-end; padding: 88px 4vw 70px; background: linear-gradient(rgba(239,247,255,.82),rgba(245,241,255,.82)), url('/images/floral-bg-final.png') center/520px repeat; border-bottom: 1px solid rgba(15,23,42,.08); }
        .insights-hero-inner { width: min(1180px, 100%); margin: 0 auto; }
        .eyebrow { margin: 0 0 18px; color: #5c5cff; font-size: 11px; letter-spacing: .16em; font-weight: 700; text-transform: uppercase; }
        .insights-hero h1 { max-width: 1040px; margin: 0; font-family: Georgia, 'Times New Roman', serif; font-size: clamp(54px, 7vw, 112px); font-weight: 500; line-height: .94; letter-spacing: -.055em; }
        .insights-hero .lede { max-width: 720px; margin: 30px 0 0; font-size: 18px; line-height: 1.6; color: #4e5560; }
        .insights-grid-wrap { padding: 90px 4vw 120px; }
        .insights-grid { width: min(1180px, 100%); margin: 0 auto; display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 58px 34px; }
        .insights-card { min-width: 0; }
        .insights-card button { width: 100%; padding: 0; border: 0; background: transparent; text-align: left; color: inherit; cursor: pointer; }
        .insights-image-wrap { position: relative; overflow: hidden; aspect-ratio: 16/10; background: #e8eaed; }
        .insights-image-wrap img { width: 100%; height: 100%; object-fit: cover; transition: transform .45s ease; }
        .insights-card:hover .insights-image-wrap img { transform: scale(1.025); }
        .insights-category { position: absolute; left: 18px; bottom: 18px; background: rgba(255,255,255,.94); padding: 8px 11px; font-size: 10px; letter-spacing: .12em; text-transform: uppercase; }
        .insights-card-copy { padding-top: 21px; }
        .insights-meta { display: flex; gap: 16px; color: #828894; font-size: 11px; letter-spacing: .04em; }
        .insights-card h2 { margin: 13px 0 12px; font-family: Georgia, 'Times New Roman', serif; font-size: clamp(29px, 3vw, 43px); line-height: 1.05; letter-spacing: -.035em; font-weight: 500; }
        .insights-card p { max-width: 620px; margin: 0; color: #5e6470; font-size: 14px; line-height: 1.7; }
        .read-link { display: inline-flex; gap: 8px; align-items: center; margin-top: 17px; font-size: 12px; font-weight: 650; }
        .read-link b { font-size: 15px; }
        .insights-footer { padding: 34px 4vw; display: flex; justify-content: space-between; border-top: 1px solid rgba(15,23,42,.1); background: white; font-size: 12px; letter-spacing: .08em; }
        .insights-footer a { color: inherit; text-decoration: none; }
        .article-backdrop { position: fixed; inset: 0; z-index: 100; padding: 5vh 20px; background: rgba(8,12,20,.68); display: grid; place-items: center; overflow-y: auto; }
        .article-modal { position: relative; width: min(900px, 100%); max-height: 90vh; overflow-y: auto; background: #fff; box-shadow: 0 28px 80px rgba(0,0,0,.28); }
        .close-modal { position: absolute; z-index: 2; right: 17px; top: 17px; width: 42px; height: 42px; border: 0; border-radius: 50%; background: rgba(255,255,255,.95); font-size: 28px; cursor: pointer; }
        .article-hero { width: 100%; height: 350px; object-fit: cover; }
        .article-body { padding: 52px clamp(28px, 7vw, 78px) 65px; }
        .article-body h2 { margin: 0 0 28px; font-family: Georgia, 'Times New Roman', serif; font-size: clamp(38px, 5vw, 64px); line-height: 1; letter-spacing: -.04em; font-weight: 500; }
        .article-body > p:not(.eyebrow) { margin: 0 0 20px; color: #4d535d; font-size: 16px; line-height: 1.78; }
        @media (max-width: 820px) {
          .insights-header { height: auto; padding: 18px 22px; align-items: flex-start; gap: 18px; }
          .insights-header nav { gap: 14px 18px; justify-content: flex-end; flex-wrap: wrap; }
          .insights-header nav a { font-size: 10px; }
          .insights-hero { min-height: 390px; padding: 65px 24px 52px; }
          .insights-grid-wrap { padding: 64px 24px 86px; }
          .insights-grid { grid-template-columns: 1fr; gap: 50px; }
          .article-hero { height: 230px; }
        }
        @media (max-width: 560px) {
          .insights-header { position: static; display: block; }
          .insights-header nav { margin-top: 16px; justify-content: flex-start; }
          .insights-hero h1 { font-size: 48px; }
          .insights-hero .lede { font-size: 15px; }
        }
      `}</style>
    </div>
  );
}
