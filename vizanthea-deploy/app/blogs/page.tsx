"use client";

import { useState } from "react";
import Layout from "../components/Layout";

interface BlogPost {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  date: string;
  readTime: string;
  excerpt: string;
  content: string[];
  link: string;
}

const posts: BlogPost[] = [
  {
    id: 1,
    title: "Why Your Dashboard Isn\u2019t Working (And How to Fix It)",
    category: "Dashboard Design",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    date: "March 2026",
    readTime: "6 min read",
    excerpt: "Most dashboards fail not because the data is wrong, but because they try to answer every question at once. Here\u2019s how to build dashboards people actually use.",
    content: [
      "I\u2019ve reviewed hundreds of dashboards in my career, and the pattern is always the same \u2014 too many charts, too little story. The best dashboards don\u2019t show everything; they show the right thing at the right time.",
      "Start with one question. What is the single most important thing this dashboard needs to answer? Build outward from there, adding context only when it serves that core question.",
      "Use visual hierarchy ruthlessly. The most critical number should be the largest, most prominent element. Supporting metrics should fade into the background until someone actively seeks them.",
      "Color is not decoration \u2014 it\u2019s information. Reserve bold colors for things that need attention. When everything is colorful, nothing stands out.",
      "Finally, test with real users. Watch them use it. Where do their eyes go? What questions do they ask? The answers will tell you exactly what needs to change."
    ],
    link: "#"
  },
  {
    id: 2,
    title: "The SQL Patterns Every Analyst Should Know",
    category: "SQL",
    thumbnail: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop",
    date: "February 2026",
    readTime: "8 min read",
    excerpt: "Window functions, CTEs, and the art of writing queries that are both powerful and readable. These are the patterns I reach for daily.",
    content: [
      "SQL is the language of data, and like any language, fluency comes from mastering patterns, not memorizing syntax.",
      "CTEs (Common Table Expressions) are your best friend for readability. Break complex queries into named steps. Future you will be grateful when debugging at midnight.",
      "Window functions changed everything. ROW_NUMBER, LAG, LEAD, and running totals let you answer questions in a single query that would otherwise require multiple subqueries or temp tables.",
      "CASE WHEN is more powerful than most analysts realize. Use it for custom categorizations, conditional aggregations, and pivoting data on the fly.",
      "Always write queries as if someone else will maintain them. Use meaningful aliases, consistent formatting, and comments for complex business logic. Code is read far more often than it\u2019s written."
    ],
    link: "#"
  },
  {
    id: 3,
    title: "From Spreadsheet to Story: A Data Visualization Journey",
    category: "Data Storytelling",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    date: "January 2026",
    readTime: "5 min read",
    excerpt: "How I transform raw CSV files into visual narratives that make stakeholders lean forward in their chairs.",
    content: [
      "Every great visualization starts with a messy spreadsheet and a question worth answering. The magic happens in the space between data and design.",
      "Step one is always exploration. Before opening Tableau, I spend time just looking at the data. What patterns emerge? What surprises me? What would surprise my audience?",
      "The biggest mistake in data storytelling is starting with the chart type. Instead, start with the insight. What do you want someone to feel or understand? Then choose the visual form that best delivers that moment.",
      "Annotations are the secret weapon of great visualizations. A well-placed callout transforms a chart from \u2018interesting\u2019 to \u2018unforgettable.\u2019 Tell people what they\u2019re looking at and why it matters.",
      "Finally, edit ruthlessly. Remove every element that doesn\u2019t serve the story. The white space you create is just as important as the data you show."
    ],
    link: "#"
  },
  {
    id: 4,
    title: "Building a Data Culture: Lessons from the Trenches",
    category: "Leadership",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    date: "December 2025",
    readTime: "7 min read",
    excerpt: "Data culture isn\u2019t about tools or dashboards \u2014 it\u2019s about making data the default language of decision-making across an organization.",
    content: [
      "You can\u2019t install a data culture. You can\u2019t buy it with a Tableau license. It\u2019s built one conversation, one decision, one \u2018show me the data\u2019 moment at a time.",
      "Start by finding your champions \u2014 the people in each department who already think in data, even if they don\u2019t call themselves analysts. Empower them with tools and training.",
      "Make data accessible, not just available. There\u2019s a huge difference between \u2018the data exists somewhere in our warehouse\u2019 and \u2018here\u2019s a dashboard that answers your top three questions.\u2019",
      "Celebrate data-driven wins publicly. When a team uses data to make a better decision, make sure the organization knows about it. Stories drive culture more than mandates.",
      "Accept that this is a multi-year journey. Culture shifts slowly, but every small win compounds. The organizations that get this right don\u2019t just make better decisions \u2014 they make them faster."
    ],
    link: "#"
  },
  {
    id: 5,
    title: "Predictive Analytics Without the PhD",
    category: "Machine Learning",
    thumbnail: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=600&h=400&fit=crop",
    date: "November 2025",
    readTime: "9 min read",
    excerpt: "You don\u2019t need a PhD to build useful predictive models. Here\u2019s a practical guide to getting started with customer churn prediction.",
    content: [
      "Predictive analytics sounds intimidating, but the most impactful models are often surprisingly simple. You don\u2019t need deep learning \u2014 you need good features and clean data.",
      "Start with a clear business question: Which customers are likely to churn in the next 90 days? What factors drive repeat purchases? Which leads will convert?",
      "Feature engineering is where analysts add the most value. Your domain knowledge \u2014 understanding what makes customers tick \u2014 matters more than algorithmic sophistication.",
      "Logistic regression and decision trees will get you 80% of the way there. Don\u2019t reach for neural networks when a well-tuned Random Forest does the job beautifully.",
      "The real work isn\u2019t building the model \u2014 it\u2019s deploying it into decision-making workflows. A model sitting in a Jupyter notebook helps no one. Make it actionable."
    ],
    link: "#"
  },
  {
    id: 6,
    title: "Color Theory for Data Visualization",
    category: "Design",
    thumbnail: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&h=400&fit=crop",
    date: "October 2025",
    readTime: "6 min read",
    excerpt: "Color choices can make or break your visualization. Learn the principles that separate amateur charts from professional-grade data design.",
    content: [
      "Color in data visualization isn\u2019t about making things pretty \u2014 it\u2019s about encoding information. Every color choice should have a reason.",
      "Start with a limited palette. Three to five colors is usually enough. More than that and your visualization becomes a rainbow of confusion.",
      "Use sequential color scales for continuous data (light to dark), diverging scales for data with a meaningful midpoint, and categorical colors for distinct groups.",
      "Always consider accessibility. About 8% of men have some form of color vision deficiency. Test your visualizations with colorblind simulation tools.",
      "When in doubt, start with grey. Make everything grey, then add color only to the elements that need attention. This \u2018grey + one highlight color\u2019 approach is remarkably effective."
    ],
    link: "#"
  },
];

export default function Blogs() {
  const [selected, setSelected] = useState<BlogPost | null>(null);

  return (
    <Layout>
      <div className="pg-hero" style={{ background: "url('/images/floral-bg-final.png') center/400px repeat" }}>
        <div className="pg-hero-inner">
          <p className="pg-label">Blog</p>
          <h1 className="pg-title">Thoughts on data, design &amp; everything between</h1>
          <p className="pg-subtitle">Writing about what I learn, what I build, and the occasional opinion nobody asked for.</p>
        </div>
      </div>

      <section className="pg-gallery">
        <div className="pg-grid pg-grid-blog">
          {posts.map((p) => (
            <div
              key={p.id}
              className="pg-card pg-card-blog"
              data-testid={`blog-card-${p.id}`}
              onClick={() => setSelected(p)}
            >
              <div className="pg-card-img">
                <img src={p.thumbnail} alt={p.title} loading="lazy" />
                <div className="pg-card-overlay">
                  <span className="pg-card-cat">{p.category}</span>
                  <span className="pg-card-cta">Read Article</span>
                </div>
              </div>
              <div className="pg-card-info">
                <div className="pg-card-meta">
                  <span>{p.date}</span>
                  <span>{p.readTime}</span>
                </div>
                <h3 className="pg-card-title">{p.title}</h3>
                <p className="pg-card-excerpt">{p.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selected && (
        <div className="pg-modal-backdrop" onClick={() => setSelected(null)} data-testid="modal-backdrop">
          <div className="pg-modal pg-modal-blog" onClick={(e) => e.stopPropagation()}>
            <button className="pg-modal-close" onClick={() => setSelected(null)} data-testid="modal-close">&times;</button>
            <div className="pg-modal-hero">
              <img src={selected.thumbnail} alt={selected.title} />
            </div>
            <div className="pg-modal-body">
              <div className="pg-modal-meta">
                <span className="pg-modal-cat">{selected.category}</span>
                <span className="pg-modal-date">{selected.date}</span>
                <span className="pg-modal-read">{selected.readTime}</span>
              </div>
              <h2 className="pg-modal-title">{selected.title}</h2>
              <div className="pg-modal-content">
                {selected.content.map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              {selected.link !== "#" && (
                <a href={selected.link} className="pg-modal-link" target="_blank" rel="noopener noreferrer" data-testid="modal-link">
                  Read Full Article
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </Layout>
  );
}
