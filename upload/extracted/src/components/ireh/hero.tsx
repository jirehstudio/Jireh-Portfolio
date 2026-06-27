"use client";

import { ArrowUpRight, Sparkles, Star } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="absolute inset-0 noise" />

      {/* Cyan orb top-right */}
      <div className="orb animate-pulse-soft -top-20 -right-20 h-[420px] w-[420px] bg-cyan/30" />
      <div className="orb top-40 -left-32 h-[360px] w-[360px] bg-[#00b4d8]/20" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          {/* Left: Copy */}
          <div className="lg:col-span-7 animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-ink-2/60 px-3 py-1.5 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
              </span>
              <span className="text-xs text-mist tracking-wide">
                Accepting 3 new projects for Q3 2026
              </span>
            </div>

            <h1 className="mt-6 font-display text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl font-semibold tracking-tight">
              <span className="gradient-text">Crafting digital</span>
              <br />
              <span className="gradient-text">excellence for</span>
              <br />
              <span className="gradient-accent">ambitious teams.</span>
            </h1>

            <p className="mt-6 max-w-xl text-base sm:text-lg text-fog leading-relaxed">
              ireh Studio is a digital agency that designs, builds, and optimizes
              high-performance online systems. We blend web development, integrated
              marketing, and intelligent automation into one delivery engine.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#contact" className="btn-primary">
                Start a project <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="#work" className="btn-ghost">
                View selected work
              </a>
            </div>

            {/* Stat row */}
            <dl className="mt-12 grid grid-cols-3 gap-4 sm:gap-8 max-w-xl">
              {[
                { k: "150+", v: "Projects launched" },
                { k: "300%", v: "Average ROI" },
                { k: "4–6w", v: "First milestone" },
              ].map((s) => (
                <div key={s.k} className="border-l border-line pl-4">
                  <dt className="font-display text-2xl sm:text-3xl font-semibold text-white">
                    {s.k}
                  </dt>
                  <dd className="mt-1 text-xs text-fog leading-tight">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Right: Visual orb stack */}
          <div className="lg:col-span-5 relative h-[420px] lg:h-[520px] animate-fade-up [animation-delay:120ms]">
            <HeroVisual />
          </div>
        </div>

        {/* Trusted-by strip */}
        <div className="mt-20 sm:mt-28">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-fog mb-5">
            <Sparkles className="h-3.5 w-3.5 text-cyan" />
            <span>Trusted by founders &amp; operators across</span>
            <div className="flex-1 h-px bg-line" />
          </div>
          <div className="overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
            <div className="flex w-max animate-marquee gap-12">
              {[...Array(2)].map((_, dup) => (
                <div key={dup} className="flex items-center gap-12 pr-12">
                  {LOGOS.map((logo, i) => (
                    <span
                      key={`${dup}-${i}`}
                      className="font-display text-lg sm:text-xl font-semibold text-fog/60 hover:text-white transition-colors whitespace-nowrap"
                    >
                      {logo}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const LOGOS = [
  "NORTHWIND",
  "FinTech.io",
  "Lumen Labs",
  "Vertex",
  "Cobalt",
  "Orbital",
  "Helix",
  "Solstice",
];

function HeroVisual() {
  return (
    <div className="absolute inset-0">
      {/* Concentric rings */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="absolute rounded-full border border-line"
            style={{
              width: `${(i + 1) * 25}%`,
              height: `${(i + 1) * 25}%`,
              opacity: 0.6 - i * 0.12,
            }}
          />
        ))}
      </div>

      {/* Center orb */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="relative h-44 w-44 sm:h-52 sm:w-52 rounded-full bg-gradient-to-br from-cyan via-[#00b4d8] to-[#118ab2] glow-ring animate-floaty">
          <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.55),transparent_55%)]" />
          <div className="absolute -inset-4 rounded-full border border-cyan/30 animate-pulse-soft" />
        </div>
      </div>

      {/* Floating chips */}
      <FloatingChip
        className="left-0 top-12"
        label="LCP"
        value="0.9s"
        accent="cyan"
        icon={<span className="text-cyan">⚡</span>}
      />
      <FloatingChip
        className="right-0 top-24"
        label="CRO uplift"
        value="+38%"
        accent="cyan"
        icon={<span className="text-cyan">▲</span>}
      />
      <FloatingChip
        className="left-4 bottom-12"
        label="Bounce rate"
        value="−22%"
        accent="coral"
        icon={<span className="text-coral">▼</span>}
      />
      <FloatingChip
        className="right-2 bottom-4"
        label="Pipeline rules"
        value="120+"
        accent="cyan"
        icon={<span className="text-cyan">⚙</span>}
      />

      {/* Star sparkles */}
      <Star className="absolute left-10 top-0 h-4 w-4 text-cyan/60 animate-pulse-soft" />
      <Star className="absolute right-12 top-1/2 h-3 w-3 text-cyan/40" />
      <Star className="absolute left-1/3 bottom-0 h-3 w-3 text-coral/40" />
    </div>
  );
}

function FloatingChip({
  className,
  label,
  value,
  accent,
  icon,
}: {
  className: string;
  label: string;
  value: string;
  accent: "cyan" | "coral";
  icon: React.ReactNode;
}) {
  return (
    <div
      className={`absolute ${className} animate-floaty`}
      style={{ animationDelay: `${Math.random() * 1.5}s` }}
    >
      <div className="glass-card px-3 py-2 flex items-center gap-2">
        <span
          className={`inline-flex h-7 w-7 items-center justify-center rounded-md ${
            accent === "cyan" ? "bg-cyan/10 text-cyan" : "bg-coral/10 text-coral"
          }`}
        >
          {icon}
        </span>
        <div className="pr-1">
          <div className="text-[10px] uppercase tracking-wider text-fog">{label}</div>
          <div
            className={`text-sm font-semibold ${
              accent === "cyan" ? "text-white" : "text-coral"
            }`}
          >
            {value}
          </div>
        </div>
      </div>
    </div>
  );
}
