"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/80 backdrop-blur-xl border-b border-line"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Brand */}
          <a href="#top" className="flex items-center gap-2 group">
            <span className="relative inline-flex h-7 w-7 items-center justify-center">
              <span className="absolute inset-0 rounded-md bg-cyan/20 blur-md" />
              <span className="relative inline-flex h-7 w-7 items-center justify-center rounded-md border border-cyan/60 bg-ink-2">
                <span className="font-display text-cyan text-sm font-bold">i</span>
              </span>
            </span>
            <span className="font-display text-base font-semibold tracking-tight">
              ireh<span className="text-cyan">.</span>studio
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative px-3 py-2 text-sm text-fog hover:text-white transition-colors"
              >
                <span className="relative z-10">{l.label}</span>
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#contact" className="btn-primary">
              Start a project
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            aria-label="Toggle navigation"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-line text-white"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-line bg-ink/95 backdrop-blur-xl">
          <nav className="mx-auto max-w-7xl px-5 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-3 py-3 text-sm text-mist hover:text-white border-b border-line/60"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-3 self-start"
            >
              Start a project
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
