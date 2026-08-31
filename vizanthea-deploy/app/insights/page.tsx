"use client";

import { useState } from "react";

type BlogPost = {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
};

type Tip = {
  id: number;
  title: string;
  body: string;
};

const posts: BlogPost[] = [
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
      "CTEs (Common Table Expressions) are your best friend for readability. Break complex queries into named steps. Future you will be grateful when debugging at midnight.",
      "Window functions changed everything. ROW_NUMBER, LAG, LEAD, and running totals let you answer questions in a single query that would otherwise require multiple subqueries or temp tables.",
      "CASE WHEN is more powerful than most analysts realize. Use it for custom categorizations, conditional aggregations, and pivoting data on the fly.",
      "Always write queries as if someone else will maintain them. Use meaningful aliases, consistent formatting, and comments for complex business logic. Code is read far more often than it’s written."
    ]
  },
  {
    id: 3,
    title: "From Spreadsheet to Story: A Data Visualization Journey",
    category: "Data Storytelling",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    date: "January 2026",
    readTime: "5 min read",
    excerpt: "How I transform raw CSV files into visual narratives that make stakeholders lean forward in their chairs.",
    content: [
      "Every great visualization starts with a messy spreadsheet and a question worth answering. The magic happens in the space between data and design.",
      "Step one is always exploration. Before opening Tableau, I spend time just looking at the data. What patterns emerge? What surprises me? What would surprise my audience?",
      "The biggest mistake in data storytelling is starting with the chart type. Instead, start with the insight. What do you want someone to feel or understand? Then choose the visual form that best delivers that moment.",
      "Annotations are the secret weapon of great visualizations. A well-placed callout transforms a chart from ‘interesting’ to ‘unforgettable.’ Tell people what they’re looking at and why it matters.",
      "Finally, edit ruthlessly. Remove every element that doesn’t serve the story. The white space you create is just as important as the data you show."
    ]
  },
  {
    id: 4,
    title: "Building a Data Culture: Lessons from the Trenches",
    category: "Leadership",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&h=800&fit=crop",
    date: "December 2025",
    readTime: "7 min read",
    excerpt: "Data culture isn’t about tools or dashboards — it’s about making data the default language of decision-making across an organization.",
    content: [
      "You can’t install a data culture. You can’t buy it with a Tableau license. It’s built one conversation, one decision, one ‘show me the data’ moment at a time.",
      "Start by finding your champions — the people in each department who already think in data, even if they don’t call themselves analysts. Empower them with tools and training.",
      "Make data accessible, not just available. There’s a huge difference between ‘the data exists somewhere in our warehouse’ and ‘here’s a dashboard that answers your top three questions.’",
      "Celebrate data-driven wins publicly. When a team uses data to make a better decision, make sure the organization knows about it. Stories drive culture more than mandates.",
      "Accept that this is a multi-year journey. Culture shifts slowly, but every small win compounds. The organizations that get this right don’t just make better decisions — they make them faster."
    ]
  },
  {
    id: 5,
    title: "Predictive Analytics Without the PhD",
    category: "Machine Learning",
    thumbnail: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=1200&h=800&fit=crop",
    date: "November 2025",
    readTime: "9 min read",
    excerpt: "You don’t need a PhD to build useful predictive models. Here’s a practical guide to getting started with customer churn prediction.",
    content: [
      "Predictive analytics sounds intimidating, but the most impactful models are often surprisingly simple. You don’t need deep learning — you need good features and clean data.",
      "Start with a clear business question: Which customers are likely to churn in the next 90 days? What factors drive repeat purchases? Which leads will convert?",
      "Feature engineering is where analysts add the most value. Your domain knowledge — understanding what makes customers tick — matters more than algorithmic sophistication.",
      "Logistic regression and decision trees will get you 80% of the way there. Don’t reach for neural networks when a well-tuned Random Forest does the job beautifully.",
      "The real work isn’t building the model — it’s deploying it into decision-making workflows. A model sitting in a Jupyter notebook helps no one. Make it actionable."
    ]
  },
  {
    id: 6,
    title: "Color Theory for Data Visualization",
    category: "Design",
    thumbnail: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1200&h=800&fit=crop",
    date: "October 2025",
    readTime: "6 min read",
    excerpt: "Color choices can make or break your visualization. Learn the principles that separate amateur charts from professional-grade data design.",
    content: [
      "Color in data visualization isn’t about making things pretty — it’s about encoding information. Every color choice should have a reason.",
      "Start with a limited palette. Three to five colors is usually enough. More than that and your visualization becomes a rainbow of confusion.",
      "Use sequential color scales for continuous data (light to dark), diverging scales for data with a meaningful midpoint, and categorical colors for distinct groups.",
      "Always consider accessibility. About 8% of men have some form of color vision deficiency. Test your visualizations with colorblind simulation tools.",
      "When in doubt, start with grey. Make everything grey, then add color only to the elements that need attention. This ‘grey + one highlight color’ approach is remarkably effective."
    ]
  }
];

const tips: Tip[] = [
  {
    id: 1,
    title: "Start with the business question.",
    body: "Before writing SQL or opening a dashboard, define the decision the analysis needs to support."
  },
  {
    id: 2,
    title: "Validate before you visualize.",
    body: "Reconcile key metrics and investigate anomalies before turning them into charts or recommendations."
  },
  {
    id: 3,
    title: "Design for the next action.",
    body: "A useful insight should make it easier to decide what to test, fix, scale, or investigate next."
  },
  {
    id: 4,
    title: "Separate signal from noise.",
    body: "Check whether a movement is structural, seasonal, segment-specific, or simply a data-quality issue."
  },
  {
    id: 5,
    title: "Make assumptions visible.",
    body: "Forecasts and recommendations become more trustworthy when assumptions, risks, and guardrails are explicit."
  },
  {
    id: 6,
    title: "End with what happens next.",
    body: "A strong analysis closes with a decision, experiment, owner, or next question—not another chart."
  }
];

export default function InsightsPage() {
  const [tab, setTab] = useState<"blogs" | "tips">("blogs");
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);

  return (
    <div className="insights-page">
      <header className="insights-header">
        <a className="site-brand" href="/">
          <img src="/images/dataloom-icon-clean.png" alt="" />
          <span>VIZANTHEA</span>
        </a>
        <nav>
          <a href="/#about">About</a>
          <a href="/#skills">Skills</a>
          <a href="/#proof">Applied Practice</a>
          <a href="/#experience">Experience</a>
          <a href="/insights">Insights</a>
          <a href="/#contact">Contact</a>
        </nav>
      </header>

      <section className="insights-hero">
        <h1>Thoughts on data, design<br />&amp; everything between.</h1>
        <p>Writing about what I learn, what I build, and the questions that keep analytical work interesting.</p>
        <div className="insights-tabs">
          <button className={tab === "blogs" ? "active" : ""} onClick={() => setTab("blogs")}>Blogs</button>
          <button className={tab === "tips" ? "active" : ""} onClick={() => setTab("tips")}>Tips &amp; Tricks</button>
        </div>
      </section>

      <main className="insights-content">
        <section className="insights-grid">
          {tab === "blogs" ? posts.map((post, index) => (
            <button className="insights-card" key={post.id} onClick={() => setSelectedBlog(post)}>
              <img src={post.thumbnail} alt={post.title} />
              <div className="insights-card-copy">
                <div className="insights-card-top">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <b>{post.category}</b>
                </div>
                <div className="insights-meta"><span>{post.date}</span><span>{post.readTime}</span></div>
                <h2>{post.title}</h2>
                <p>{post.excerpt}</p>
                <small>Read Article →</small>
              </div>
            </button>
          )) : tips.map((tip, index) => (
            <article key={tip.id} className="insights-tip-card">
              <div className="insights-card-top">
                <span>{String(index + 1).padStart(2, "0")}</span>
              </div>
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

      {selectedBlog && (
        <div className="insights-modal-backdrop" onClick={() => setSelectedBlog(null)}>
          <article className="insights-modal" onClick={(e) => e.stopPropagation()}>
            <button className="insights-modal-close" onClick={() => setSelectedBlog(null)}>×</button>
            <img src={selectedBlog.thumbnail} alt={selectedBlog.title} />
            <div className="insights-modal-body">
              <div className="insights-modal-meta"><b>{selectedBlog.category}</b><span>{selectedBlog.date}</span><span>{selectedBlog.readTime}</span></div>
              <h2>{selectedBlog.title}</h2>
              <div className="article-copy">{selectedBlog.content.map((paragraph, index) => <p key={index}>{paragraph}</p>)}</div>
            </div>
          </article>
        </div>
      )}

      <style jsx global>{`
        .insights-page {
          min-height: 100vh;
          background-image: url('/images/floral-bg-final.png') !important;
          background-repeat: repeat !important;
          background-size: 520px 520px !important;
          background-position: center top !important;
        }
        .insights-header { background: rgba(255,255,255,.98) !important; }
        .insights-content { background: transparent !important; }
        .insights-tip-card { cursor: default; }
      `}</style>
    </div>
  );
}
