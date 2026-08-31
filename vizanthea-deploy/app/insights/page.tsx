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
  category: string;
  thumbnail: string;
  difficulty: string;
  tool: string;
  summary: string;
  steps: string[];
  proTip: string;
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
    excerpt: "A practical introduction to building useful predictive models, beginning with a customer-churn example.",
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
    excerpt: "How thoughtful color choices improve hierarchy, accessibility, and understanding in analytical work.",
    content: [
      "Color in data visualization isn’t about making things pretty — it’s about encoding information. Every color choice should have a reason.",
      "Start with a limited palette. Three to five colors is usually enough. More than that and your visualization becomes a rainbow of confusion.",
      "Use sequential color scales for continuous data, diverging scales for data with a meaningful midpoint, and categorical colors for distinct groups.",
      "Always consider accessibility. Test your visualizations with colorblind simulation tools.",
      "When in doubt, start with grey. Make everything grey, then add color only to the elements that need attention."
    ]
  }
];

const tips: Tip[] = [
  {
    id: 1,
    title: "Dynamic Parameter Actions in Tableau",
    category: "Tableau",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=800&fit=crop",
    difficulty: "Intermediate",
    tool: "Tableau",
    summary: "Use parameter actions to let people click a chart element and dynamically change the view.",
    steps: [
      "Create a parameter with the data type matching your target field.",
      "Build a calculated field that references the parameter for filtering or highlighting.",
      "Add the visualization to the dashboard and create a Parameter Action.",
      "Set the source sheet, target parameter, and source field.",
      "Configure the action to run on Select and clear on deselection.",
      "Test the interaction across every dependent sheet."
    ],
    proTip: "Combine parameter actions with set actions for richer click-through exploration."
  },
  {
    id: 2,
    title: "Window Functions: The Complete Cheat Sheet",
    category: "SQL",
    thumbnail: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1200&h=800&fit=crop",
    difficulty: "Advanced",
    tool: "SQL",
    summary: "Master ROW_NUMBER, RANK, LAG, LEAD, and running SUM patterns.",
    steps: [
      "Use ROW_NUMBER() for deduplication and top-N-per-group problems.",
      "Use RANK() or DENSE_RANK() when ties matter.",
      "Use LAG() and LEAD() for period-over-period comparisons.",
      "Use SUM() OVER (...) for running totals and cumulative metrics.",
      "Combine PARTITION BY and ORDER BY deliberately.",
      "Use explicit window frames for moving averages and sliding calculations."
    ],
    proTip: "Name repeated windows when your SQL dialect supports it; readability improves immediately."
  },
  {
    id: 3,
    title: "Building Small Multiples in Tableau",
    category: "Tableau",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&h=800&fit=crop",
    difficulty: "Intermediate",
    tool: "Tableau",
    summary: "Build repeated charts across categories so comparisons become faster and more reliable.",
    steps: [
      "Start with one clean chart for the metric you want to compare.",
      "Add the categorical dimension to Rows or Columns to create repeated panels.",
      "Keep each panel the same size.",
      "Synchronize axes so comparisons remain valid.",
      "Use reference lines sparingly when they add context.",
      "Reduce decorative formatting and let the repeated pattern carry the comparison."
    ],
    proTip: "Small multiples are strongest when each panel uses the same scale and visual encoding."
  },
  {
    id: 4,
    title: "Snowflake Performance Tuning Essentials",
    category: "Snowflake",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=800&fit=crop",
    difficulty: "Advanced",
    tool: "Snowflake",
    summary: "Practical considerations for warehouse sizing, pruning, query structure, and clustering.",
    steps: [
      "Right-size the warehouse before simply scaling compute upward.",
      "Use result caching and avoid unnecessary sorts.",
      "Filter in ways that improve micro-partition pruning.",
      "Replace expensive row-by-row logic with set-based joins and CTEs.",
      "Use bulk loading patterns for larger ingestion jobs.",
      "Review query history and warehouse metering to find the real cost drivers."
    ],
    proTip: "Auto-suspend development warehouses aggressively so idle compute does not become silent spend."
  },
  {
    id: 5,
    title: "The Art of Effective Color Palettes",
    category: "Design",
    thumbnail: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=1200&h=800&fit=crop",
    difficulty: "Beginner",
    tool: "Design",
    summary: "Choose accessible palettes that guide attention without overwhelming the information.",
    steps: [
      "Start with one anchor or brand color.",
      "Use sequential palettes for ordered values and diverging palettes for meaningful midpoints.",
      "Keep categorical palettes intentionally limited.",
      "Test for color-vision accessibility.",
      "Use neutral greys for context and stronger color for focus.",
      "Create a reusable palette library for consistency."
    ],
    proTip: "A restrained palette usually communicates hierarchy better than a rainbow palette."
  },
  {
    id: 6,
    title: "Python + Pandas: Data Cleaning Recipes",
    category: "Python",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&h=800&fit=crop",
    difficulty: "Beginner",
    tool: "Python",
    summary: "Reusable patterns for missing values, reshaping, validation, and common cleanup tasks.",
    steps: [
      "Inspect types, nulls, and distributions before changing the data.",
      "Choose dropna() versus fillna() based on why values are missing.",
      "Check duplicate rows and business-key duplicates separately.",
      "Convert date fields to consistent datetime types early.",
      "Standardize text values before joins and grouping.",
      "Use melt() and pivot_table() to reshape datasets for analysis and visualization."
    ],
    proTip: "Package repeated cleaning logic into small reusable functions so the same source is treated consistently every time."
  }
];

export default function InsightsPage() {
  const [tab, setTab] = useState<"blogs" | "tips">("blogs");
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [selectedTip, setSelectedTip] = useState<Tip | null>(null);

  const isBlogs = tab === "blogs";

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
        {isBlogs ? (
          <>
            <h1>Thoughts on data, design &amp;<br />everything between.</h1>
            <p>Writing about what I learn, what I build, and the questions that keep analytical work interesting.</p>
          </>
        ) : (
          <>
            <h1>Quick wins &amp; practical deep<br />dives.</h1>
            <p>Practical techniques collected along the way—from Tableau and SQL to Snowflake, Python, and design.</p>
          </>
        )}
        <div className="insights-tabs">
          <button className={isBlogs ? "active" : ""} onClick={() => setTab("blogs")}>Blogs</button>
          <button className={!isBlogs ? "active" : ""} onClick={() => setTab("tips")}>Tips &amp; Tricks</button>
        </div>
      </section>

      <main className="insights-content">
        <section className="insights-grid">
          {isBlogs ? posts.map((post, index) => (
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
            <button className="insights-card" key={tip.id} onClick={() => setSelectedTip(tip)}>
              <img src={tip.thumbnail} alt={tip.title} />
              <div className="insights-card-copy">
                <div className="insights-card-top">
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <b>{tip.category}</b>
                </div>
                <div className="insights-meta"><span>{tip.difficulty}</span><span>{tip.tool}</span></div>
                <h2>{tip.title}</h2>
                <p>{tip.summary}</p>
                <small>Open Guide →</small>
              </div>
            </button>
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

      {selectedTip && (
        <div className="insights-modal-backdrop" onClick={() => setSelectedTip(null)}>
          <article className="insights-modal" onClick={(e) => e.stopPropagation()}>
            <button className="insights-modal-close" onClick={() => setSelectedTip(null)}>×</button>
            <img src={selectedTip.thumbnail} alt={selectedTip.title} />
            <div className="insights-modal-body">
              <div className="insights-modal-meta"><b>{selectedTip.category}</b><span>{selectedTip.difficulty}</span><span>{selectedTip.tool}</span></div>
              <h2>{selectedTip.title}</h2>
              <p>{selectedTip.summary}</p>
              <ol>{selectedTip.steps.map((step, index) => <li key={index}>{step}</li>)}</ol>
              <aside><strong>Pro tip</strong><p>{selectedTip.proTip}</p></aside>
            </div>
          </article>
        </div>
      )}
    </div>
  );
}
