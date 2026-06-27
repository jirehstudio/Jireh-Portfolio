"use client";

import {
  Code2,
  PenTool,
  Workflow,
  Search,
  Gauge,
  Boxes,
  ArrowUpRight,
} from "lucide-react";

const SERVICES = [
  {
    pillar: "Pillar 01",
    title: "Web Development & UI/UX",
    desc:
      "Custom-designed websites, storefronts, and web applications engineered for low LCP, fast load times, and conversion-rate optimization that reduces bounce.",
    accent: "cyan" as const,
    icon: Code2,
    bullets: ["Custom design systems", "Core Web Vitals tuning", "CRO & A/B testing"],
  },
  {
    pillar: "Pillar 02",
    title: "Marketing & Branding",
    desc:
      "Brand rebuilds, identity systems, SEO infrastructure, content engines, and performance ad campaigns engineered to grow online revenue, not just traffic.",
    accent: "cyan" as const,
    icon: PenTool,
    bullets: ["Brand identity rebuilds", "SEO systems & content", "Paid acquisition"],
  },
  {
    pillar: "Pillar 03",
    title: "Automation Services",
    desc:
      "Workflow design, notification systems, and pipeline rules that remove manual work. Dashboards and monitoring nodes that reduce operational errors.",
    accent: "cyan" as const,
    icon: Workflow,
    bullets: ["Workflow automation", "Monitoring dashboards", "Pipeline rules"],
  },
];

const CAPABILITIES = [
  { icon: Search, label: "Discovery", note: "Problem mapping" },
  { icon: Gauge, label: "Performance", note: "Core Web Vitals" },
  { icon: Boxes, label: "Architecture", note: "Modular systems" },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="absolute inset-0 dot-bg opacity-30 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        {/* Section header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="eyebrow-accent">Our Expertise</span>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl font-semibold tracking-tight">
              <span className="gradient-text">Three pillars, one </span>
              <span className="gradient-accent">delivery engine.</span>
            </h2>
            <p className="mt-4 text-fog leading-relaxed">
              We don't sell isolated deliverables. Each pillar is structured to compound:
              faster sites convert better, sharper brands earn trust, and automation keeps
              the system running while you scale.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {CAPABILITIES.map((c) => (
              <div
                key={c.label}
                className="inline-flex items-center gap-2 rounded-full border border-line bg-ink-2/60 px-3 py-1.5"
              >
                <c.icon className="h-3.5 w-3.5 text-cyan" />
                <span className="text-xs text-mist">
                  {c.label} <span className="text-fog">· {c.note}</span>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Pillar cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {SERVICES.map((s) => (
            <article
              key={s.title}
              className={`glass-card p-7 flex flex-col group ${s.accent === "coral" ? "glass-card-coral" : ""}`}
            >
              <div className="flex items-start justify-between">
                <span className="eyebrow">{s.pillar}</span>
                <span
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-xl border ${
                    s.accent === "cyan"
                      ? "border-cyan/30 bg-cyan/5 text-cyan"
                      : "border-coral/30 bg-coral/5 text-coral"
                  }`}
                >
                  <s.icon className="h-5 w-5" />
                </span>
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-fog leading-relaxed flex-1">{s.desc}</p>
              <ul className="mt-6 space-y-2">
                {s.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-center gap-2 text-sm text-mist"
                  >
                    <span
                      className={`inline-block h-1.5 w-1.5 rounded-full ${
                        s.accent === "cyan" ? "bg-cyan" : "bg-coral"
                      }`}
                    />
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href="#work"
                className="mt-6 inline-flex items-center gap-1 text-sm text-cyan hover:gap-2 transition-all"
              >
                See it in action <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
