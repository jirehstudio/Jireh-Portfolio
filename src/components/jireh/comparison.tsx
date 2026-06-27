"use client";

import { Check, X } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const ROWS = [
  {
    label: "Custom-designed website or storefront",
    jireh: true,
    typical: "~",
  },
  {
    label: "Core Web Vitals tuning (LCP < 1s target)",
    jireh: true,
    typical: false,
  },
  {
    label: "Conversion-rate optimization & A/B framework",
    jireh: true,
    typical: false,
  },
  {
    label: "Brand identity & design system rebuild",
    jireh: true,
    typical: "~",
  },
  {
    label: "SEO infrastructure + content engine",
    jireh: true,
    typical: false,
  },
  {
    label: "Workflow AI and automation & pipeline rules",
    jireh: true,
    typical: false,
  },
  {
    label: "Monitoring dashboards & alerting",
    jireh: true,
    typical: "~",
  },
  {
    label: "Fixed-scope kickoff, weekly demos",
    jireh: true,
    typical: false,
  },
  {
    label: "First milestone in 4–6 weeks",
    jireh: true,
    typical: false,
  },
  {
    label: "Long-term retainer lock-in",
    jireh: false,
    typical: true,
  },
];

export function Comparison() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl mb-14">
            <span className="eyebrow-accent">Why Jireh</span>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl font-semibold tracking-tight">
              <span className="gradient-text">One team, </span>
              <span className="gradient-accent">three pillars, no retainer lock-in.</span>
            </h2>
            <p className="mt-4 text-fog leading-relaxed">
              Most agencies sell you one thing, like a website, a campaign, or a dashboard, then
              charge you forever to maintain it. We deliver all three pillars as a single
              engagement and hand you the keys.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass-card overflow-hidden">
            <div className="grid grid-cols-[1fr_120px_120px] sm:grid-cols-[1fr_180px_180px]">
              {/* Header row */}
              <div className="p-5 sm:p-6 border-b border-line">
                <span className="eyebrow">Capability</span>
              </div>
              <div className="p-5 sm:p-6 border-b border-l border-line bg-cyan/[0.04]">
                <div className="font-display text-sm font-semibold text-cyan">Jireh Studio</div>
                <div className="text-[10px] text-fog uppercase tracking-wider mt-0.5">Full system</div>
              </div>
              <div className="p-5 sm:p-6 border-b border-l border-line">
                <div className="font-display text-sm font-semibold text-fog">Typical agency</div>
                <div className="text-[10px] text-fog/70 uppercase tracking-wider mt-0.5">A la carte</div>
              </div>

              {/* Body rows */}
              {ROWS.map((r, i) => (
                <div key={r.label} className="contents">
                  <div
                    className={`p-4 sm:p-5 text-sm text-mist ${
                      i === ROWS.length - 1 ? "" : "border-b border-line/60"
                    }`}
                  >
                    {r.label}
                  </div>
                  <div
                    className={`p-4 sm:p-5 border-l border-line/60 bg-cyan/[0.02] ${
                      i === ROWS.length - 1 ? "" : "border-b border-line/60"
                    }`}
                  >
                    <Mark value={r.jireh} />
                  </div>
                  <div
                    className={`p-4 sm:p-5 border-l border-line/60 ${
                      i === ROWS.length - 1 ? "" : "border-b border-line/60"
                    }`}
                  >
                    <Mark value={r.typical} muted />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Mark({ value, muted }: { value: boolean | string; muted?: boolean }) {
  if (value === true) {
    return (
      <div className="flex h-full items-center justify-center">
        <div className={`rounded-full p-1 ${muted ? "bg-ink border border-line" : "bg-cyan/20 text-cyan"}`}>
          <Check className={`h-4 w-4 ${muted ? "text-fog" : ""}`} />
        </div>
      </div>
    );
  }
  if (value === false) {
    return (
      <div className="flex h-full items-center justify-center">
        <X className="h-4 w-4 text-line" />
      </div>
    );
  }
  return (
    <div className="flex h-full items-center justify-center">
      <span className="text-xl font-semibold text-mist">{value}</span>
    </div>
  );
}
