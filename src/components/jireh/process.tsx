"use client";

import { Search, Lightbulb, Code2, Rocket } from "lucide-react";

const STEPS = [
  {
    no: "01",
    title: "Discovery",
    icon: Search,
    desc: "We map the core problem, audit existing systems, and align on target milestones. No assumptions ship without evidence.",
    duration: "Week 1",
  },
  {
    no: "02",
    title: "Strategy",
    icon: Lightbulb,
    desc: "We design the user experience, architecture, and deployment plan. Every decision is documented and reviewable.",
    duration: "Week 1–2",
  },
  {
    no: "03",
    title: "Build",
    icon: Code2,
    desc: "We develop, integrate systems, and prepare content. Modular delivery means you see working software early and often.",
    duration: "Week 2–5",
  },
  {
    no: "04",
    title: "Launch",
    icon: Rocket,
    desc: "We deploy, monitor, and execute the first optimization cycle. Then we hand over the keys and stay on call.",
    duration: "Week 4–6",
  },
];

export function Process() {
  return (
    <section id="process" className="relative py-24 sm:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="orb top-1/2 -left-40 h-[400px] w-[400px] bg-cyan/15" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-2xl mb-16">
          <span className="eyebrow-accent">How We Work</span>
          <h2 className="mt-3 font-display text-3xl sm:text-5xl font-semibold tracking-tight">
            <span className="gradient-text">A modular, four-stage </span>
            <span className="gradient-accent">delivery system.</span>
          </h2>
          <p className="mt-4 text-fog leading-relaxed">
            We typically ship our first major milestone in 4 to 6 weeks. Each stage
            produces a concrete artifact you can review, and nothing advances until
            you sign off.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-5 relative">
          {/* Horizontal connector (desktop) */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-line to-transparent" />

          {STEPS.map((s, i) => (
            <div key={s.no} className="relative">
              {/* Step number bubble */}
              <div className="relative z-10 flex items-center gap-4 lg:block">
                <div className="relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-cyan/40 bg-ink-2">
                  <span className="absolute inset-0 rounded-full bg-cyan/10 animate-pulse-soft" />
                  <s.icon className="relative h-5 w-5 text-cyan" />
                </div>
                <span className="lg:mt-4 font-display text-xs uppercase tracking-[0.2em] text-fog">
                  {s.duration}
                </span>
              </div>

              <div className="mt-5">
                <div className="flex items-baseline gap-2">
                  <span className="font-display text-5xl font-semibold text-ink-4">/</span>
                  <span className="font-display text-5xl font-semibold gradient-accent">
                    {s.no}
                  </span>
                </div>
                <h3 className="mt-2 font-display text-xl font-semibold text-white">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm text-fog leading-relaxed">{s.desc}</p>
              </div>

              {/* Vertical connector (mobile) */}
              {i < STEPS.length - 1 && (
                <div className="lg:hidden mt-6 ml-6 h-8 w-px step-connector" />
              )}
            </div>
          ))}
        </div>

        {/* Timeline callout */}
        <div className="mt-16 glass-card p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 justify-between">
          <div>
            <div className="eyebrow-accent">Timeline</div>
            <div className="mt-2 font-display text-2xl sm:text-3xl font-semibold text-white">
              First major milestone in <span className="gradient-accent">4–6 weeks.</span>
            </div>
            <p className="mt-2 text-sm text-fog max-w-xl">
              Fixed-scope kickoff, weekly demos, and a written handover. We don't
              disappear after launch: you keep the dashboard, the docs, and the team.
            </p>
          </div>
          <a href="#contact" className="btn-primary whitespace-nowrap">
            Book a discovery call
          </a>
        </div>
      </div>
    </section>
  );
}
