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
    content: ["SQL is the language of data, and like any language, fluency comes from mastering patterns, not memorizing syntax.","CTEs are your best friend for readability. Break complex queries into named steps so the logic remains easy to debug and maintain.","Window functions changed everything. ROW_NUMBER, LAG, LEAD, and running totals let you answer questions in a single query that would otherwise require multiple subqueries.","CASE WHEN is more powerful than most analysts realize. Use it for custom categorizations, conditional aggregations, and flexible business logic.","Always write queries as if someone else will maintain them. Code is read far more often than it is written."]
  },
  {
    id: 3,
    title: "From Spreadsheet to Story: A Data Visualization Journey",
    category: "Data Storytelling",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    date: "January 2026",
    readTime: "5 min read",
    excerpt: "How I transform raw files into visual narratives that help stakeholders understand what matters.",
    content: ["Every great visualization starts with a messy spreadsheet and a question worth answering.","Before opening Tableau, spend time with the data. Look for patterns, anomalies, and the moments that would surprise your audience.","Do not start with the chart type. Start with the insight, then choose the visual form that delivers it most clearly.","Annotations are the secret weapon of great visualizations.","Finally, edit ruthlessly. The white space you create is as important as the data you show."]
  },
  {
    id: 4,
    title: "Building a Data Culture: Lessons from the Trenches",
    category: "Leadership",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop",
    date: "December 2025",
    readTime: "7 min read",
    excerpt: "Data culture is not about tools or dashboards — it is about making evidence the default language of decision-making.",
    content: ["You cannot install a data culture. It is built one conversation, one decision, and one ‘show me the data’ moment at a time.","Start by finding the people in each function who already think analytically.","Make data accessible, not merely available.","Celebrate data-driven wins publicly.","Culture shifts slowly, but every small win compounds."]
  },
  {
    id: 5,
    title: "Predictive Analytics Without the PhD",
    category: "Machine Learning",
    thumbnail: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=1200&h=800&fit=crop",
    date: "November 2025",
    readTime: "9 min read",
    excerpt: "Useful predictive models start with a clear business question, thoughtful features, clean data, and a path to action.",
    content: ["Predictive analytics sounds intimidating, but many impactful models are surprisingly simple.","Start with a clear business question and define the decision the model is supposed to improve.","Feature engineering is where domain knowledge matters most.","Simple models can take you a long way when evaluation is rigorous.","The real work is embedding the output into a decision workflow."]
  },
  {
    id: 6,
    title: "Color Theory for Data Visualization",
    category: "Design",
    thumbnail: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1200&h=800&fit=crop",
    date: "October 2025",
    readTime: "6 min read",
    excerpt: "Color should encode meaning, establish hierarchy, and guide attention — not simply decorate a chart.",
    content: ["Color in data visualization is about encoding information.","Start with a limited palette.","Use sequential scales for continuous values and diverging scales when a midpoint matters.","Always consider accessibility.","When in doubt, start with grey and add one highlight color only where attention is needed."]
  }
];

export default function InsightsPage() {
  const [selected, setSelected] = useState<(typeof posts)[number] | null>(null);
  const [tab, setTab] = useState<"blogs" | "tips">("blogs");

  return (
    <div className="dl-insights">
      <header className="dl-header">
        <a href="/" className="dl-brand"><img src="/images/dataloom-icon-clean.png" alt=""/><span>VIZANTHEA</span></a>
        <nav>
          <a href="/#about">About</a><a href="/#skills">Skills</a><a href="/#proof">Applied Practice</a><a href="/#experience">Experience</a><a className="active" href="/insights">Insights</a><a href="/#contact">Contact</a>
        </nav>
      </header>

      <main className="dl-bg">
        <section className="dl-hero">
          <h1>Thoughts on data, design<br/> &amp; everything between.</h1>
          <p>Writing about what I learn, what I build, and the questions that keep analytical work interesting.</p>
          <div className="dl-tabs">
            <button className={tab === "blogs" ? "active" : ""} onClick={() => setTab("blogs")}>Blogs</button>
            <button className={tab === "tips" ? "active" : ""} onClick={() => setTab("tips")}>Tips &amp; Tricks</button>
          </div>
        </section>

        {tab === "blogs" ? (
          <section className="dl-grid">
            {posts.map((post, index) => (
              <article className="dl-card" key={post.id} onClick={() => setSelected(post)}>
                <div className="dl-image"><img src={post.thumbnail} alt=""/></div>
                <div className="dl-card-body">
                  <div className="dl-card-row"><span className="dl-num">{String(index + 1).padStart(2,"0")}</span><span className="dl-cat">{post.category}</span></div>
                  <div className="dl-meta"><span>{post.date}</span><span>{post.readTime}</span></div>
                  <h2>{post.title}</h2>
                  <p>{post.excerpt}</p>
                  <button className="dl-read">Read Article →</button>
                </div>
              </article>
            ))}
          </section>
        ) : (
          <section className="dl-tips">
            <article><span>01</span><h2>Start with the business question.</h2><p>Before writing SQL or opening a dashboard, define the decision the analysis needs to support.</p></article>
            <article><span>02</span><h2>Validate before you visualize.</h2><p>Reconcile key metrics and investigate anomalies before turning them into charts or recommendations.</p></article>
            <article><span>03</span><h2>Design for the next action.</h2><p>A useful insight should make it easier to decide what to test, fix, scale, or investigate next.</p></article>
          </section>
        )}
      </main>

      {selected && (
        <div className="dl-modal-bg" onClick={() => setSelected(null)}>
          <article className="dl-modal" onClick={e => e.stopPropagation()}>
            <button className="dl-close" onClick={() => setSelected(null)}>×</button>
            <img src={selected.thumbnail} alt=""/>
            <div className="dl-modal-body"><div className="dl-meta">{selected.category} · {selected.date} · {selected.readTime}</div><h2>{selected.title}</h2>{selected.content.map((p,i)=><p key={i}>{p}</p>)}</div>
          </article>
        </div>
      )}

      <style jsx global>{`
        *{box-sizing:border-box}
        .dl-insights{min-height:100vh;color:#111827;background:#fff;font-family:Arial,Helvetica,sans-serif}
        .dl-header{height:72px;padding:0 52px;display:flex;align-items:center;justify-content:space-between;background:#fff;border-bottom:1px solid #e8e8e8;position:sticky;top:0;z-index:30}
        .dl-brand{display:flex;align-items:center;gap:12px;color:#111827;text-decoration:none;font-weight:800;letter-spacing:.12em;font-size:13px}
        .dl-brand img{width:25px;height:25px;object-fit:contain}
        .dl-header nav{display:flex;gap:30px;align-items:center}
        .dl-header nav a{font-size:12px;color:#666;text-decoration:none}
        .dl-header nav a.active{color:#111827}
        .dl-bg{min-height:calc(100vh - 72px);background-image:linear-gradient(rgba(238,248,255,.68),rgba(248,238,255,.62)),url('/images/floral-bg-final.png');background-size:auto,440px 440px;background-repeat:repeat;background-position:center top}
        .dl-hero{text-align:center;padding:84px 20px 54px}
        .dl-hero h1{margin:0 auto;max-width:980px;font-size:66px;line-height:.95;letter-spacing:-.05em;font-weight:800;color:#111827}
        .dl-hero p{max-width:690px;margin:22px auto 24px;font-size:16px;line-height:1.45;color:#4d5562}
        .dl-tabs{display:flex;justify-content:center;gap:8px}
        .dl-tabs button{border:1px solid #cbd5df;background:#fff;color:#1f2937;border-radius:999px;padding:10px 18px;font-weight:700;font-size:13px;cursor:pointer}
        .dl-tabs button.active{background:#0a6f93;color:#fff;border-color:#0a6f93}
        .dl-grid{width:min(1120px,calc(100% - 48px));margin:0 auto;padding:0 0 90px;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}
        .dl-card{background:#fff;border-radius:15px;overflow:hidden;box-shadow:0 0 0 1px rgba(15,23,42,.08);cursor:pointer;transition:transform .2s ease}
        .dl-card:hover{transform:translateY(-3px)}
        .dl-image{aspect-ratio:1.62;overflow:hidden;background:#e8edf2}
        .dl-image img{width:100%;height:100%;object-fit:cover;display:block}
        .dl-card-body{padding:18px 18px 22px}
        .dl-card-row{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px}
        .dl-num{font-size:10px;color:#7c5cc4;font-weight:800}
        .dl-cat{font-size:9px;letter-spacing:.08em;text-transform:uppercase;color:#34758e;background:#edf7fa;border-radius:999px;padding:6px 9px;font-weight:700}
        .dl-meta{display:flex;gap:14px;align-items:center;font-size:9px;text-transform:uppercase;letter-spacing:.08em;color:#6b7280;margin:0 0 11px}
        .dl-card h2{font-size:23px;line-height:1.02;letter-spacing:-.04em;margin:0 0 12px;font-weight:800;color:#111827}
        .dl-card p{font-size:13px;line-height:1.5;color:#687180;margin:0;min-height:78px}
        .dl-read{margin-top:14px;border:0;background:transparent;color:#8053af;padding:0;font-size:11px;font-weight:600;cursor:pointer}
        .dl-tips{width:min(1120px,calc(100% - 48px));margin:0 auto;padding:0 0 100px;display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
        .dl-tips article{background:#fff;border-radius:15px;padding:28px;box-shadow:0 0 0 1px rgba(15,23,42,.08);min-height:220px}
        .dl-tips span{color:#8062c7;font-size:11px;font-weight:700}
        .dl-tips h2{font-size:25px;line-height:1.03;letter-spacing:-.03em;margin:10px 0 18px}
        .dl-tips p{font-size:13px;color:#667085;line-height:1.55}
        .dl-modal-bg{position:fixed;inset:0;background:rgba(10,17,28,.7);z-index:100;display:grid;place-items:center;padding:30px;overflow:auto}
        .dl-modal{width:min(850px,100%);max-height:90vh;overflow:auto;background:#fff;position:relative}
        .dl-modal>img{width:100%;height:320px;object-fit:cover}
        .dl-close{position:absolute;right:16px;top:16px;width:40px;height:40px;border:0;border-radius:50%;background:#fff;font-size:28px;cursor:pointer}
        .dl-modal-body{padding:40px 50px 55px}
        .dl-modal-body h2{font-size:44px;line-height:1.02;letter-spacing:-.04em;margin:8px 0 24px}
        .dl-modal-body p{font-size:16px;line-height:1.7;color:#505866}
        @media(max-width:900px){.dl-header{height:auto;min-height:70px;padding:16px 20px}.dl-header nav{display:none}.dl-bg{background-size:auto,360px 360px}.dl-hero{padding:58px 18px 40px}.dl-hero h1{font-size:44px;line-height:.98}.dl-hero p{font-size:15px}.dl-grid,.dl-tips{grid-template-columns:1fr;width:min(620px,calc(100% - 30px))}.dl-card p{min-height:auto}.dl-modal-body{padding:32px 24px 42px}}
      `}</style>
    </div>
  );
}
