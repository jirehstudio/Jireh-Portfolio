"use client";


import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-24 sm:pt-40 sm:pb-32">
      {/* Background grid */}
      <div className="absolute inset-0 grid-bg opacity-60 [mask-image:radial-gradient(ellipse_at_top,black,transparent_70%)]" />
      <div className="absolute inset-0 noise" />

      {/* Cyan orb top-right */}
      <div className="orb animate-pulse-soft -top-20 -right-20 h-[420px] w-[420px] bg-cyan/30" />
      <div className="orb top-40 -left-32 h-[360px] w-[360px] bg-[#00b4d8]/20" />

      {/* Background Video */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40 flex items-center justify-center overflow-hidden">
        <HeroVisual />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-center text-center relative">
          {/* Black shade for readability */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] max-w-5xl h-[120%] bg-black/70 blur-[100px] rounded-[100%] pointer-events-none -z-10" />

          {/* Top: Copy */}
          <div className="w-full max-w-4xl animate-fade-up flex flex-col items-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-line bg-ink-2/60 px-3 py-1.5 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan" />
              </span>
              <span className="text-xs text-mist tracking-wide">
                Accepting 3 new projects for Q3 2026
              </span>
            </div>

            <h1 className="mt-6 font-display text-[2.6rem] leading-[1.05] sm:text-6xl lg:text-7xl font-semibold tracking-tight mx-auto">
              <span className="gradient-text">Crafting digital</span>
              <br className="hidden sm:block" />
              <span className="gradient-text"> excellence for </span>
              <br className="hidden sm:block" />
              <span className="gradient-accent">ambitious teams.</span>
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-base sm:text-lg text-fog leading-relaxed">
              Jireh Studio is a digital agency that designs, builds, and optimizes
              high-performance online systems. We blend web development, integrated
              marketing, and intelligent AI and automation into one delivery engine.
            </p>

            <div className="mt-8 flex flex-wrap justify-center items-center gap-3">
              <a href="#contact" className="btn-primary">
                Start a project <ArrowUpRight className="h-4 w-4" />
              </a>
              <a href="#work" className="btn-ghost">
                View selected work
              </a>
            </div>

            {/* Stat row */}
            <dl className="mt-12 flex flex-wrap justify-center gap-8 sm:gap-16 max-w-2xl mx-auto">
              {[
                { k: "150+", v: "Projects launched" },
                { k: "300%", v: "Average ROI" },
                { k: "4–6w", v: "First milestone" },
              ].map((s) => (
                <div key={s.k} className="flex flex-col items-center">
                  <dt className="font-display text-2xl sm:text-3xl font-semibold text-white">
                    {s.k}
                  </dt>
                  <dd className="mt-1 text-xs text-fog leading-tight">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

        </div>

        {/* Trusted-by strip */}
        <div className="mt-20 sm:mt-28">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-fog mb-5">
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
    <div className="absolute inset-0 flex items-center justify-center">
      <video
        src="/can_you_make_this_with_transpa.mp4"
        className="h-full w-full object-cover scale-110 animate-floaty drop-shadow-[0_0_60px_rgba(0,224,216,0.35)] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_90%)]"
        autoPlay
        loop
        muted
        playsInline
      />
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
