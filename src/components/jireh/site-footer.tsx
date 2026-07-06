"use client";

import Image from "next/image";
import { Linkedin, Twitter, Github, ArrowUp } from "lucide-react";

const FOOTER_LINKS = [
  {
    title: "Studio",
    links: [
      { label: "About", href: "#top" },
      { label: "Process", href: "#process" },
      { label: "Selected work", href: "#work" },
      { label: "Testimonials", href: "#testimonials" },
    ],
  },
  {
    title: "Services",
    links: [
      { label: "Web Development & UI/UX", href: "#services" },
      { label: "Marketing & Branding", href: "#services" },
      { label: "AI and Automation Services", href: "#services" },
      { label: "Start a project", href: "#contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Brief template", href: "#contact" },
      { label: "Discovery playbook", href: "#process" },
      { label: "Case studies", href: "#work" },
      { label: "Newsletter", href: "#contact" },
    ],
  },
];

export function SiteFooter() {
  return (
    <footer className="relative mt-auto border-t border-line bg-ink-2/40">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-14">
        <div className="grid lg:grid-cols-12 gap-10">
          {/* Brand block */}
          <div className="lg:col-span-5">
            <a href="#top" aria-label="Jireh Studio Home" className="flex items-center gap-2 group">
              <Image
                src="/jireh-logo.png"
                alt=""
                width={200}
                height={200}
                className="h-20 w-auto"
              />
            </a>
            <p className="mt-4 max-w-sm text-sm text-fog leading-relaxed">
              A digital agency that designs, builds, and optimizes high-performance
              online systems. Web development, marketing, and AI and automation, all under one roof.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <SocialIcon icon={Linkedin} href="#" label="LinkedIn" />
              <SocialIcon icon={Twitter} href="#" label="Twitter" />
              <SocialIcon icon={Github} href="#" label="GitHub" />
            </div>
          </div>

          {/* Link columns */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8">
            {FOOTER_LINKS.map((col) => (
              <div key={col.title}>
                <h4 className="eyebrow">{col.title}</h4>
                <ul className="mt-4 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <a
                        href={l.href}
                        className="text-sm text-fog hover:text-cyan transition-colors"
                      >
                        {l.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-line flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-xs text-fog">
            © {new Date().getFullYear()} Jireh Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-5">
            <a href="#" className="text-xs text-fog hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-fog hover:text-white transition-colors">
              Terms
            </a>
            <a
              href="#top"
              className="inline-flex items-center gap-1.5 text-xs text-fog hover:text-cyan transition-colors"
            >
              Back to top <ArrowUp className="h-3 w-3" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({
  icon: Icon,
  href,
  label,
}: {
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-line text-fog hover:text-cyan hover:border-cyan/40 transition-colors"
    >
      <Icon className="h-4 w-4" aria-hidden="true" />
    </a>
  );
}
