"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
        <div className="flex h-20 sm:h-24 items-center justify-between">
          {/* Brand */}
          <a href="#top" className="flex items-center gap-2 group py-2 overflow-hidden h-20 sm:h-24">
            <Image
              src="/jireh-logo.png"
              alt="Jireh"
              width={200}
              height={200}
              priority
              className="h-24 sm:h-32 w-auto object-cover object-left scale-110 origin-left"
            />
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1.5 backdrop-blur-md">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative px-4 py-2 text-[13px] font-medium tracking-wide text-fog hover:text-white transition-all rounded-full hover:bg-white/10"
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
