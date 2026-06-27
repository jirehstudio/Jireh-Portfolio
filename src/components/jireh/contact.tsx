"use client";

import { useState } from "react";
import { ArrowUpRight, Mail, MapPin, Clock, Check } from "lucide-react";
import countries from "world-map-country-shapes";

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
              <ContactRow icon={Mail} label="Email" value="hello@jireh.studio" />
              <ContactRow icon={MapPin} label="Studio" value="Remote · APAC · EMEA · AMER" />
              <ContactRow icon={Clock} label="Response" value="Within 1 business day" />
            </div>

            {/* World map */}
            <div className="mt-10 relative h-56 rounded-2xl border border-line bg-ink-2/40 overflow-hidden">
              <WorldMap />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[10px] uppercase tracking-wider text-fog">
                <span>Active engagements</span>
                <span className="text-cyan">12 cities · 6 continents</span>
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
                    your inbox for a confirmation from hello@jireh.studio.
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
  // Accurate city coordinates mapped on the Robinson projection (2000 x 1001 grid)
  const nodes = [
    { x: 220, y: 305, label: "Vancouver" },
    { x: 720, y: 730, label: "São Paulo" },
    { x: 1040, y: 240, label: "Berlin" },
    { x: 1295, y: 415, label: "Muscat" },
    { x: 1370, y: 450, label: "Mumbai" },
    { x: 1294, y: 701, label: "Mauritius" },
    { x: 1560, y: 564, label: "Singapore" },
    { x: 1780, y: 810, label: "Sydney" },
  ];

  return (
    <div className="absolute inset-0">
      <svg
        viewBox="0 0 2000 1001"
        className="absolute inset-0 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Blue/Cyan outline world map */}
        {countries.map((c) => (
          <path
            key={c.id}
            d={c.shape}
            fill="rgba(0, 224, 216, 0.05)"
            stroke="rgba(0, 224, 216, 0.35)"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        ))}

        {/* Connection arcs */}
        {[
          [220, 305, 1040, 240],   // Vancouver -> Berlin
          [1040, 240, 1295, 415],  // Berlin -> Muscat
          [1295, 415, 1370, 450],  // Muscat -> Mumbai
          [1370, 450, 1560, 564],  // Mumbai -> Singapore
          [1560, 564, 1780, 810],  // Singapore -> Sydney
          [220, 305, 720, 730],   // Vancouver -> São Paulo
          [720, 730, 1040, 240],   // São Paulo -> Berlin
          [1370, 450, 1294, 701],  // Mumbai -> Mauritius
          [1294, 701, 1780, 810],  // Mauritius -> Sydney
        ].map(([x1, y1, x2, y2], i) => {
          const dx = x2 - x1;
          const dy = y2 - y1;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const cy = Math.min(y1, y2) - (dist * 0.18 + 20);
          return (
            <path
              key={i}
              d={`M ${x1} ${y1} Q ${(x1 + x2) / 2} ${cy} ${x2} ${y2}`}
              fill="none"
              stroke="rgba(0, 224, 216, 0.45)"
              strokeWidth="2.5"
              strokeDasharray="8 8"
            />
          );
        })}

        {/* Glow nodes inside SVG for perfect scaling */}
        {nodes.map((n) => (
          <g key={n.label} transform={`translate(${n.x}, ${n.y})`}>
            {/* Pulsing ring */}
            <circle r="6" fill="none" stroke="#00e0d8" strokeWidth="2.5" opacity="0.8">
              <animate
                attributeName="r"
                values="6;26"
                dur="2s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.8;0"
                dur="2s"
                repeatCount="indefinite"
              />
            </circle>
            {/* Solid center dot */}
            <circle r="8" fill="#00e0d8" />
            <circle r="12" fill="none" stroke="#00e0d8" strokeWidth="1.5" opacity="0.3" />
          </g>
        ))}
      </svg>
    </div>
  );
}
