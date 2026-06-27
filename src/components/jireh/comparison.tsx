"use client";

import { Check, X } from "lucide-react";

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
    label: "Workflow automation & pipeline rules",
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
        <div className="max-w-2xl mb-14">
          <span className="eyebrow-accent">Why Jireh</span>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl font-semibold tracking-tight">
            <span className="gradient-text">One team, </span>
            <span className="gradient-accent">three pillars, no retainer lock-in.</span>
          </h2>
          <p className="mt-4 text-fog leading-relaxed">
            Most agencies sell you one thing — a website, a campaign, a dashboard — then
            charge you forever to maintain it. We deliver all three pillars as a single
            engagement and hand you the keys.
          </p>
        </div>

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
      </div>
    </section>
  );
}

function Mark({ value, muted = false }: { value: boolean | "~"; muted?: boolean }) {
  if (value === true) {
    return (
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-cyan/15 text-cyan">
        <Check className="h-3.5 w-3.5" />
      </span>
    );
  }
  if (value === false) {
    return (
      <span
        className={`inline-flex h-6 w-6 items-center justify-center rounded-md ${
          muted ? "bg-line/40 text-fog" : "bg-coral/10 text-coral"
        }`}
      >
        <X className="h-3.5 w-3.5" />
      </span>
    );
  }
  return <span className="text-fog/60 text-xs">Partial</span>;
}
