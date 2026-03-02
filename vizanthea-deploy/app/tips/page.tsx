"use client";

import { useState } from "react";
import Layout from "../components/Layout";

interface Tip {
  id: number;
  title: string;
  category: string;
  thumbnail: string;
  difficulty: string;
  tool: string;
  summary: string;
  steps: string[];
  proTip: string;
  link: string;
}

const tips: Tip[] = [
  {
    id: 1,
    title: "Dynamic Parameter Actions in Tableau",
    category: "Tableau",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    difficulty: "Intermediate",
    tool: "Tableau",
    summary: "Learn how to create parameter actions that let users click on a chart element to dynamically change the view. This technique transforms static dashboards into interactive exploration tools.",
    steps: [
      "Create a parameter with the data type matching your target field (e.g., String for categories)",
      "Build a calculated field that references the parameter for filtering or highlighting",
      "Add your visualization to the dashboard and create a Parameter Action (Dashboard > Actions)",
      "Set the source sheet, target parameter, and the field that should populate the parameter",
      "Configure the action to run on Select and clear on deselection for intuitive interaction",
      "Test the interaction \u2014 clicking any mark should now update the parameter and all dependent sheets"
    ],
    proTip: "Combine parameter actions with set actions for even more powerful interactivity. Users love dashboards they can \u2018click through\u2019 like a story.",
    link: "#"
  },
  {
    id: 2,
    title: "Window Functions: The Complete Cheat Sheet",
    category: "SQL",
    thumbnail: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop",
    difficulty: "Advanced",
    tool: "SQL",
    summary: "Master the five window functions you\u2019ll use 90% of the time: ROW_NUMBER, RANK, LAG, LEAD, and running SUM. These patterns solve problems that would otherwise require complex subqueries.",
    steps: [
      "ROW_NUMBER() \u2014 Assign unique sequential numbers within each partition. Perfect for deduplication and \u2018top N per group\u2019 queries",
      "RANK() / DENSE_RANK() \u2014 Rank rows within partitions with or without gaps for ties. Great for leaderboards and percentile calculations",
      "LAG() / LEAD() \u2014 Access previous or next row values. Essential for period-over-period comparisons and calculating changes",
      "SUM() OVER (ORDER BY ...) \u2014 Running totals and cumulative metrics. The foundation of many financial and time-series analyses",
      "Practice combining PARTITION BY with ORDER BY to control exactly how the window slides across your data",
      "Use ROWS BETWEEN to create moving averages and custom sliding windows for trend analysis"
    ],
    proTip: "Always name your window with WINDOW clause when using the same partition/order in multiple functions. It makes your SQL dramatically more readable.",
    link: "#"
  },
  {
    id: 3,
    title: "Building Small Multiples in Tableau",
    category: "Tableau",
    thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    difficulty: "Intermediate",
    tool: "Tableau",
    summary: "Small multiples are one of the most powerful visualization techniques \u2014 showing the same chart repeated for different categories. Here\u2019s how to build them properly in Tableau.",
    steps: [
      "Start with a single chart that shows your metric over time (e.g., line chart of sales by month)",
      "Drag your categorical dimension to the Columns or Rows shelf to create a grid",
      "Use the \u2018Entire View\u2019 fit option to ensure all panels are equally sized",
      "Synchronize axes across all panels so comparisons are accurate (right-click axis > Synchronize)",
      "Add reference lines or bands to help viewers compare across panels",
      "Keep formatting minimal \u2014 reduce gridlines, lighten axis labels, and let the data patterns speak"
    ],
    proTip: "Small multiples work best with 4-20 panels. Fewer than 4, just use color. More than 20, consider a different approach or add filtering.",
    link: "#"
  },
  {
    id: 4,
    title: "Snowflake Performance Tuning Essentials",
    category: "Snowflake",
    thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    difficulty: "Advanced",
    tool: "Snowflake",
    summary: "Speed up your Snowflake queries by 10x with these optimization techniques. From warehouse sizing to clustering keys, these are the knobs that matter most.",
    steps: [
      "Right-size your warehouse \u2014 start with X-Small and scale up only when query times exceed your threshold. Bigger isn\u2019t always better",
      "Use RESULT_CACHE and avoid unnecessary ORDER BY clauses \u2014 Snowflake caches results for 24 hours when the underlying data hasn\u2019t changed",
      "Leverage micro-partition pruning by filtering on clustered columns. Check pruning efficiency with SYSTEM$CLUSTERING_INFORMATION",
      "Replace correlated subqueries with JOINs or CTEs \u2014 Snowflake\u2019s optimizer handles joins much better than row-by-row subqueries",
      "Use COPY INTO with file format options for bulk loading instead of INSERT statements",
      "Monitor with QUERY_HISTORY and WAREHOUSE_METERING_HISTORY to find expensive queries and idle warehouses"
    ],
    proTip: "Set auto-suspend to 1 minute for development warehouses and 5 minutes for production. Every second of idle compute costs money.",
    link: "#"
  },
  {
    id: 5,
    title: "The Art of Effective Color Palettes",
    category: "Design",
    thumbnail: "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=600&h=400&fit=crop",
    difficulty: "Beginner",
    tool: "Any",
    summary: "Stop using rainbow colors. Learn how to choose palettes that are beautiful, accessible, and actually help people understand your data faster.",
    steps: [
      "Start with your brand colors or a single accent color. Build your palette outward from that anchor",
      "Use ColorBrewer (colorbrewer2.org) for pre-tested, perceptually uniform palettes designed for data",
      "Sequential palettes (light to dark) for ordered data. Diverging palettes (two hues) for data with a meaningful center point",
      "Test with Coblis or Viz Palette to ensure your colors work for colorblind viewers",
      "Limit your palette to 5-7 colors maximum. Use grey for \u2018background\u2019 data and reserve bright colors for focus",
      "Create a personal color palette library that you can reuse across projects for consistency"
    ],
    proTip: "When presenting to executives, use their company\u2019s brand colors as your primary palette. It makes your work feel integrated and intentional.",
    link: "#"
  },
  {
    id: 6,
    title: "Python + Pandas: Data Cleaning Recipes",
    category: "Python",
    thumbnail: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=400&fit=crop",
    difficulty: "Beginner",
    tool: "Python",
    summary: "The 10 Pandas operations that handle 90% of data cleaning tasks. From handling missing values to reshaping messy datasets, these are the recipes I use daily.",
    steps: [
      "df.info() and df.describe() \u2014 Always start here. Understand your data types, null counts, and distributions before touching anything",
      "df.dropna() vs df.fillna() \u2014 Drop rows only when missing data is random and < 5% of your dataset. Otherwise, fill strategically (median for skewed, mean for normal)",
      "df.duplicated() and df.drop_duplicates() \u2014 Check for and remove exact duplicates. Use subset= to check specific columns",
      "pd.to_datetime() \u2014 Convert string dates immediately. Consistent date types prevent 80% of downstream errors",
      "df.str methods \u2014 .strip(), .lower(), .replace() for standardizing text columns. Inconsistent strings are the #1 source of broken joins",
      "df.melt() and df.pivot_table() \u2014 Reshape between wide and long formats. Most viz tools prefer long format data"
    ],
    proTip: "Create a reusable cleaning function for each data source you work with regularly. Save hours on repeat projects and ensure consistency.",
    link: "#"
  },
];

export default function Tips() {
  const [selected, setSelected] = useState<Tip | null>(null);

  return (
    <Layout>
      <div className="pg-hero" style={{ background: "url('/images/floral-bg-final.png') center/400px repeat" }}>
        <div className="pg-hero-inner">
          <p className="pg-label">Tips &amp; Tricks</p>
          <h1 className="pg-title">Quick wins &amp; deep dives</h1>
          <p className="pg-subtitle">Practical techniques I&apos;ve picked up along the way — from Tableau tricks to SQL sorcery to design principles.</p>
        </div>
      </div>

      <section className="pg-gallery">
        <div className="pg-grid">
          {tips.map((t) => (
            <div
              key={t.id}
              className="pg-card pg-card-tip"
              data-testid={`tip-card-${t.id}`}
              onClick={() => setSelected(t)}
            >
              <div className="pg-card-img">
                <img src={t.thumbnail} alt={t.title} loading="lazy" />
                <div className="pg-card-overlay">
                  <span className="pg-card-cat">{t.category}</span>
                  <span className="pg-card-cta">View Guide</span>
                </div>
              </div>
              <div className="pg-card-info">
                <div className="pg-card-meta">
                  <span className="pg-card-difficulty" data-level={t.difficulty.toLowerCase()}>{t.difficulty}</span>
                  <span>{t.tool}</span>
                </div>
                <h3 className="pg-card-title">{t.title}</h3>
                <p className="pg-card-excerpt">{t.summary}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selected && (
        <div className="pg-modal-backdrop" onClick={() => setSelected(null)} data-testid="modal-backdrop">
          <div className="pg-modal pg-modal-tip" onClick={(e) => e.stopPropagation()}>
            <button className="pg-modal-close" onClick={() => setSelected(null)} data-testid="modal-close">&times;</button>
            <div className="pg-modal-hero">
              <img src={selected.thumbnail} alt={selected.title} />
            </div>
            <div className="pg-modal-body">
              <div className="pg-modal-meta">
                <span className="pg-modal-cat">{selected.category}</span>
                <span className="pg-modal-difficulty" data-level={selected.difficulty.toLowerCase()}>{selected.difficulty}</span>
                <span className="pg-modal-tool">{selected.tool}</span>
              </div>
              <h2 className="pg-modal-title">{selected.title}</h2>
              <p className="pg-modal-desc">{selected.summary}</p>
              <div className="pg-modal-steps">
                <h3 className="pg-modal-steps-title">Step by step</h3>
                <ol className="pg-modal-steps-list">
                  {selected.steps.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ol>
              </div>
              <div className="pg-modal-protip">
                <strong>Pro tip:</strong> {selected.proTip}
              </div>
              {selected.link !== "#" && (
                <a href={selected.link} className="pg-modal-link" target="_blank" rel="noopener noreferrer" data-testid="modal-link">
                  View Full Guide
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
