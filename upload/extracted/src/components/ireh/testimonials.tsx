"use client";

import { Quote, Star } from "lucide-react";

const TESTIMONIALS = [
  {
    quote:
      "ireh Studio rebuilt our storefront from the ground up. Our LCP dropped to under a second and conversions jumped 38% in the first month. They treated our brand like their own.",
    name: "Sarah Chen",
    role: "CEO, Northwind FinTech",
    initials: "SC",
    accent: "cyan" as const,
    metric: { value: "150+", label: "Projects launched" },
  },
  {
    quote:
      "The marketing engine they built isn't a campaign — it's infrastructure. We went from unpredictable pipeline to a steady 3x lift in qualified leads across every market.",
    name: "Brian Zakin",
    role: "CTO, Solstice Commerce",
    initials: "BZ",
    accent: "cyan" as const,
    metric: { value: "300%", label: "Average ROI" },
  },
  {
    quote:
      "Their automation work removed two full-time roles of manual coordination from our logistics stack. The dashboard alone paid for the engagement in six weeks.",
    name: "Nareh Hovsepian",
    role: "COO, Orbital Logistics",
    initials: "NH",
    accent: "coral" as const,
    metric: { value: "50m+", label: "Data points processed" },
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="relative py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <span className="eyebrow-accent">Testimonials &amp; Metrics</span>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl font-semibold tracking-tight">
              <span className="gradient-text">Outcomes our clients </span>
              <span className="gradient-accent">sign their names to.</span>
            </h2>
          </div>
          <div className="flex items-center gap-1 text-cyan">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-cyan" />
            ))}
            <span className="ml-2 text-sm text-fog">4.9/5 across 40+ engagements</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((t) => (
            <article
              key={t.name}
              className={`glass-card p-7 flex flex-col ${t.accent === "coral" ? "glass-card-coral" : ""}`}
            >
              <div className="flex items-start justify-between">
                <Quote
                  className={`h-8 w-8 ${t.accent === "coral" ? "text-coral/60" : "text-cyan/60"}`}
                />
                <div
                  className={`font-display text-4xl font-semibold ${
                    t.accent === "coral" ? "text-coral" : "text-cyan"
                  }`}
                >
                  {t.metric.value}
                </div>
              </div>
              <div className="text-[10px] uppercase tracking-wider text-fog text-right mt-1">
                {t.metric.label}
              </div>

              <p className="mt-6 text-[15px] text-mist leading-relaxed flex-1">
                &ldquo;{t.quote}&rdquo;
              </p>

              <div className="mt-6 pt-6 border-t border-line flex items-center gap-3">
                <div
                  className={`inline-flex h-10 w-10 items-center justify-center rounded-full border ${
                    t.accent === "coral"
                      ? "border-coral/40 bg-coral/10 text-coral"
                      : "border-cyan/40 bg-cyan/10 text-cyan"
                  } font-display text-xs font-semibold`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-medium text-white">{t.name}</div>
                  <div className="text-xs text-fog">{t.role}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
