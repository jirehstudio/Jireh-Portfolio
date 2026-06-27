"use client";

import {
  ShoppingBag,
  LineChart,
  Truck,
  ArrowUpRight,
} from "lucide-react";

const WORK = [
  {
    tag: "E-commerce Transformation",
    project: "Project Solstice",
    accent: "coral" as const,
    icon: ShoppingBag,
    summary:
      "Rebuilt a legacy storefront with a custom design system and Core Web Vitals tuning. LCP dropped from 4.2s to 0.9s.",
    metric: "+38%",
    metricLabel: "conversion rate",
    mockup: "storefront",
  },
  {
    tag: "Marketing Engine",
    project: "Fintech Growth",
    accent: "cyan" as const,
    icon: LineChart,
    summary:
      "SEO infrastructure, content engine, and paid acquisition loops aligned to a single revenue model across 14 markets.",
    metric: "3.1x",
    metricLabel: "qualified pipeline",
    mockup: "analytics",
  },
  {
    tag: "Automation at Scale",
    project: "Logistics Ops",
    accent: "coral" as const,
    icon: Truck,
    summary:
      "Workflow rules and a monitoring dashboard cut manual coordination time across a 9-node supply chain by two-thirds.",
    metric: "−68%",
    metricLabel: "manual ops hours",
    mockup: "logistics",
  },
];

export function Work() {
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl mb-14">
          <span className="eyebrow-accent">Selected Work</span>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl font-semibold tracking-tight">
            <span className="gradient-text">Real systems, </span>
            <span className="gradient-accent">measurable outcomes.</span>
          </h2>
          <p className="mt-4 text-fog leading-relaxed">
            A snapshot of recent engagements across our three pillars — each shipped in
            weeks, not quarters, and instrumented from day one.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {WORK.map((w) => (
            <article
              key={w.project}
              className={`glass-card overflow-hidden flex flex-col ${w.accent === "coral" ? "glass-card-coral" : ""}`}
            >
              {/* Mockup */}
              <div className="relative h-44 border-b border-line bg-ink-2 overflow-hidden">
                <Mockup variant={w.mockup} accent={w.accent} />
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-coral/70" />
                  <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
                  <span className="h-2 w-2 rounded-full bg-cyan/70" />
                </div>
                <div className="absolute top-3 right-3 inline-flex items-center gap-2 rounded-full border border-line bg-ink/70 px-2.5 py-1 backdrop-blur">
                  <w.icon
                    className={`h-3.5 w-3.5 ${w.accent === "coral" ? "text-coral" : "text-cyan"}`}
                  />
                  <span
                    className={`text-[10px] uppercase tracking-wider ${
                      w.accent === "coral" ? "text-coral" : "text-cyan"
                    }`}
                  >
                    {w.tag}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-display text-xl font-semibold text-white">
                    {w.project}
                  </h3>
                  <div className="text-right">
                    <div
                      className={`font-display text-2xl font-semibold ${
                        w.accent === "coral" ? "text-coral" : "text-cyan"
                      }`}
                    >
                      {w.metric}
                    </div>
                    <div className="text-[10px] uppercase tracking-wider text-fog">
                      {w.metricLabel}
                    </div>
                  </div>
                </div>
                <p className="mt-3 text-sm text-fog leading-relaxed flex-1">
                  {w.summary}
                </p>
                <a
                  href="#contact"
                  className="mt-5 inline-flex items-center gap-1 text-sm text-white group/link"
                >
                  Read case study
                  <ArrowUpRight className="h-3.5 w-3.5 text-cyan group-hover/link:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Mockup({
  variant,
  accent,
}: {
  variant: "storefront" | "analytics" | "logistics";
  accent: "cyan" | "coral";
}) {
  const a = accent === "cyan" ? "#00e0d8" : "#ff6b6b";
  return (
    <svg
      viewBox="0 0 320 180"
      className="absolute inset-0 h-full w-full"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id={`g-${variant}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={a} stopOpacity="0.18" />
          <stop offset="100%" stopColor={a} stopOpacity="0" />
        </linearGradient>
        <pattern id={`grid-${variant}`} width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="320" height="180" fill={`url(#grid-${variant})`} />
      <rect width="320" height="180" fill={`url(#g-${variant})`} />

      {variant === "storefront" && (
        <>
          <rect x="20" y="20" width="120" height="14" rx="3" fill="rgba(255,255,255,0.08)" />
          <rect x="20" y="42" width="60" height="8" rx="2" fill="rgba(255,255,255,0.05)" />
          {[0, 1, 2].map((i) => (
            <g key={i} transform={`translate(${20 + i * 70}, 70)`}>
              <rect width="60" height="60" rx="6" fill="rgba(255,255,255,0.04)" />
              <rect y="66" width="40" height="6" rx="2" fill="rgba(255,255,255,0.08)" />
              <rect y="76" width="24" height="8" rx="2" fill={a} opacity="0.6" />
            </g>
          ))}
          <rect x="240" y="20" width="60" height="80" rx="6" fill="rgba(255,255,255,0.04)" />
          <rect x="250" y="30" width="40" height="40" rx="4" fill={a} opacity="0.18" />
        </>
      )}

      {variant === "analytics" && (
        <>
          <rect x="20" y="20" width="80" height="8" rx="2" fill="rgba(255,255,255,0.08)" />
          <rect x="20" y="36" width="40" height="14" rx="3" fill={a} opacity="0.5" />
          <rect x="20" y="60" width="280" height="80" rx="6" fill="rgba(255,255,255,0.04)" />
          <polyline
            points="30,120 70,100 110,110 150,80 190,90 230,60 270,70 290,50"
            fill="none"
            stroke={a}
            strokeWidth="2"
          />
          <circle cx="290" cy="50" r="3" fill={a} />
          <circle cx="290" cy="50" r="6" fill={a} opacity="0.25" />
          {[60, 100, 80, 90, 60, 70, 50].map((h, i) => (
            <rect
              key={i}
              x={32 + i * 38}
              y={140 - h * 0.4}
              width="14"
              height={h * 0.4}
              rx="2"
              fill={a}
              opacity={0.25 + i * 0.07}
            />
          ))}
        </>
      )}

      {variant === "logistics" && (
        <>
          <rect x="20" y="20" width="120" height="8" rx="2" fill="rgba(255,255,255,0.08)" />
          {[
            [40, 60],
            [120, 80],
            [200, 60],
            [260, 100],
            [80, 120],
            [180, 130],
          ].map(([x, y], i) => (
            <g key={i}>
              <circle cx={x} cy={y} r="6" fill={a} opacity="0.8" />
              <circle cx={x} cy={y} r="12" fill={a} opacity="0.18" />
            </g>
          ))}
          <path
            d="M 40 60 L 120 80 L 200 60 L 260 100 L 180 130 L 80 120 Z"
            fill="none"
            stroke={a}
            strokeWidth="1"
            strokeDasharray="4 4"
            opacity="0.5"
          />
          <rect x="20" y="150" width="280" height="14" rx="3" fill="rgba(255,255,255,0.04)" />
          <rect x="20" y="150" width="180" height="14" rx="3" fill={a} opacity="0.45" />
        </>
      )}
    </svg>
  );
}
