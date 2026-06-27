"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, Clock, Check } from "lucide-react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="orb -bottom-40 -right-20 h-[460px] w-[460px] bg-cyan/15" />
      <div className="orb -top-20 -left-20 h-[360px] w-[360px] bg-[#00b4d8]/10" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Left: copy + world map */}
          <div className="lg:col-span-6">
            <span className="eyebrow-accent">Contact &amp; CTA</span>
            <h2 className="mt-3 font-display text-3xl sm:text-5xl font-semibold tracking-tight">
              <span className="gradient-text">Let's build the </span>
              <span className="gradient-accent">next milestone.</span>
            </h2>
            <p className="mt-4 text-fog leading-relaxed max-w-md">
              Tell us what you're trying to ship. We'll come back within one business day
              with a fixed-scope discovery proposal — no decks, no sales calls.
            </p>

            <div className="mt-8 space-y-3">
              <ContactRow icon={Mail} label="Email" value="hello@ireh.studio" />
              <ContactRow icon={MapPin} label="Studio" value="Remote · APAC · EMEA · AMER" />
              <ContactRow icon={Clock} label="Response" value="Within 1 business day" />
            </div>

            {/* World map */}
            <div className="mt-10 relative h-56 rounded-2xl border border-line bg-ink-2/40 overflow-hidden">
              <WorldMap />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] uppercase tracking-wider text-fog">
                <span>Active engagements</span>
                <span className="text-cyan">12 cities · 4 continents</span>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-6">
            <div className="glass-card p-6 sm:p-8">
              {submitted ? (
                <div className="flex flex-col items-center text-center py-12">
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-cyan/40 bg-cyan/10 text-cyan">
                    <Check className="h-6 w-6" />
                  </div>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-white">
                    Brief received.
                  </h3>
                  <p className="mt-2 text-sm text-fog max-w-sm">
                    We'll review your scope and reply within one business day. Check
                    your inbox for a confirmation from hello@ireh.studio.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", company: "", message: "" });
                    }}
                    className="btn-ghost mt-6"
                  >
                    Send another brief
                  </button>
                </div>
              ) : (
                <form onSubmit={onSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <Field
                      label="Your name"
                      placeholder="Sarah Chen"
                      value={form.name}
                      onChange={(v) => setForm({ ...form, name: v })}
                      required
                    />
                    <Field
                      label="Email"
                      type="email"
                      placeholder="sarah@company.com"
                      value={form.email}
                      onChange={(v) => setForm({ ...form, email: v })}
                      required
                    />
                  </div>
                  <Field
                    label="Company"
                    placeholder="Northwind FinTech"
                    value={form.company}
                    onChange={(v) => setForm({ ...form, company: v })}
                  />
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-fog mb-2">
                      What are you shipping?
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="We're rebuilding our storefront and need to cut LCP from 4s to under 1s…"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full rounded-lg border border-line bg-ink/60 px-4 py-3 text-sm text-white placeholder:text-fog/50 focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan transition-colors resize-none"
                    />
                  </div>

                  <div className="flex items-center justify-between gap-4">
                    <p className="text-[11px] text-fog leading-tight">
                      By submitting, you agree to be contacted about your project.
                      We never share your information.
                    </p>
                    <button type="submit" className="btn-primary whitespace-nowrap">
                      Submit brief <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
}) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-line bg-ink-2/40 px-4 py-3">
      <span className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-cyan/30 bg-cyan/5 text-cyan">
        <Icon className="h-4 w-4" />
      </span>
      <div>
        <div className="text-[10px] uppercase tracking-wider text-fog">{label}</div>
        <div className="text-sm text-white">{value}</div>
      </div>
    </div>
  );
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wider text-fog mb-2">
        {label}
      </label>
      <input
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-line bg-ink/60 px-4 py-3 text-sm text-white placeholder:text-fog/50 focus:border-cyan focus:outline-none focus:ring-1 focus:ring-cyan transition-colors"
      />
    </div>
  );
}

function WorldMap() {
  // Stylized dotted world map with cyan nodes
  const dots = [
    // North America
    [80, 70],
    [110, 85],
    [95, 100],
    [130, 95],
    // South America
    [150, 140],
    [160, 165],
    // Europe
    [230, 60],
    [245, 75],
    [255, 65],
    // Africa
    [250, 110],
    [265, 130],
    [260, 145],
    // Middle East
    [285, 90],
    // Asia
    [320, 70],
    [340, 85],
    [360, 95],
    [380, 75],
    [400, 90],
    // SE Asia
    [390, 120],
    [410, 130],
    // Oceania
    [430, 160],
    [450, 150],
  ];
  const nodes = [
    { x: 110, y: 85, label: "Vancouver" },
    { x: 245, y: 75, label: "Berlin" },
    { x: 340, y: 85, label: "Singapore" },
    { x: 430, y: 160, label: "Sydney" },
    { x: 150, y: 140, label: "São Paulo" },
  ];

  return (
    <div className="absolute inset-0">
      <svg
        viewBox="0 0 500 200"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Dotted continents approximation */}
        {dots.map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="1.2" fill="rgba(255,255,255,0.18)" />
        ))}

        {/* Connection arcs */}
        {[
          [110, 85, 245, 75],
          [245, 75, 340, 85],
          [340, 85, 430, 160],
          [110, 85, 150, 140],
          [245, 75, 150, 140],
        ].map(([x1, y1, x2, y2], i) => (
          <path
            key={i}
            d={`M ${x1} ${y1} Q ${(x1 + x2) / 2} ${Math.min(y1, y2) - 30} ${x2} ${y2}`}
            fill="none"
            stroke="rgba(0,224,216,0.4)"
            strokeWidth="0.6"
            strokeDasharray="2 2"
          />
        ))}
      </svg>

      {/* Glow nodes */}
      {nodes.map((n) => (
        <div
          key={n.label}
          className="map-dot"
          style={{
            left: `${(n.x / 500) * 100}%`,
            top: `${(n.y / 200) * 100}%`,
          }}
        >
          <span className="absolute -inset-1 rounded-full bg-cyan/30 animate-ping" />
        </div>
      ))}
    </div>
  );
}
