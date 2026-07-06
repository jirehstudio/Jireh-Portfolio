"use client";

import Image from "next/image";

import {
  Globe,
  Plane,
  ArrowUpRight,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const WORK = [
  {
    tag: "International Art Gallery",
    project: "Matti Sirvio Art Galleria",
    accent: "cyan" as "cyan" | "coral",
    icon: Globe,
    summary:
      "A scalable monorepo architecture featuring an Astro frontend, React admin panel, and Cloudflare workers. Engineered with rigorous SEO, accessibility, and Core Web Vitals optimization.",
    metric: "Global",
    metricLabel: "audience reach",
    mockup: "storefront" as const,
    image: "/msag.png",
    link: "https://mattisirvioartgalleria.com",
  },
  {
    tag: "Destination Agency",
    project: "Sunzee Travel",
    accent: "cyan" as "cyan" | "coral",
    icon: Plane,
    summary:
      "A bespoke travel platform showcasing signature destinations across East Africa and the Indian Ocean. Designed to seamlessly convert wanderlust into direct booking inquiries.",
    metric: "Bespoke",
    metricLabel: "travel journeys",
    mockup: "analytics" as const,
    image: "/sunzee.png",
    link: "https://sunzeeholidays.com",
  },
];

export function Work() {
  return (
    <section id="work" className="relative py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl mb-14">
            <span className="eyebrow-accent">Selected Work</span>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl font-semibold tracking-tight">
              <span className="gradient-text">Digital platforms built for </span>
              <span className="gradient-accent">global reach.</span>
            </h2>
            <p className="mt-4 text-fog leading-relaxed">
              From high-performance international art galleries to bespoke destination agencies, 
              we engineer experiences that captivate global audiences and drive real results.
            </p>

            {/* Hidden for future projects: 
            <span className="eyebrow-accent">Selected Work</span>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl font-semibold tracking-tight">
              <span className="gradient-text">Real systems, </span>
              <span className="gradient-accent">measurable outcomes.</span>
            </h2>
            <p className="mt-4 text-fog leading-relaxed">
              A snapshot of recent engagements across our three pillars, each shipped in
              weeks, not quarters, and instrumented from day one.
            </p>
            */}
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 max-w-5xl gap-6">
          {WORK.map((w, index) => (
            <Reveal key={w.project} delay={index * 0.1}>
              <article
                className={`glass-card group overflow-hidden flex flex-col h-full ${w.accent === "coral" ? "glass-card-coral" : ""}`}
              >
                {/* Mockup */}
                <div className="relative h-44 border-b border-line bg-ink-2 overflow-hidden">
                  {w.image ? (
                    <Image
                      src={w.image}
                      alt={w.project}
                      fill
                      sizes="(max-width: 768px) 100vw, 500px"
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <Mockup variant={w.mockup} accent={w.accent} />
                  )}
                  <div className="absolute top-3 left-3 flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-coral/70" />
                    <span className="h-2 w-2 rounded-full bg-yellow-400/70" />
                    <span className="h-2 w-2 rounded-full bg-cyan/70" />
                  </div>
                  <div className="absolute top-3 right-3 inline-flex items-center gap-2 rounded-full border border-line bg-ink/70 px-2.5 py-1 backdrop-blur">
                    <w.icon
                      className={`h-3.5 w-3.5 ${w.accent === "coral" ? "text-coral" : "text-cyan"}`}
                      aria-hidden="true"
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
                      <div className="text-[10px] uppercase tracking-wider text-mist">
                        {w.metricLabel}
                      </div>
                    </div>
                  </div>
                  <p className="mt-4 text-sm text-fog leading-relaxed flex-1">
                    {w.summary}
                  </p>
                  <a
                    href={w.link || "#"}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit website for ${w.project}`}
                    className={`mt-6 inline-flex items-center gap-1 text-sm transition-all hover:gap-2 ${
                      w.accent === "coral" ? "text-coral" : "text-cyan"
                    }`}
                  >
                    Visit Website <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </Reveal>
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
      aria-hidden="true"
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
