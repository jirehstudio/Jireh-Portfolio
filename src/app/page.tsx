import { SiteHeader } from "@/components/jireh/site-header";
import { Hero } from "@/components/jireh/hero";
import { Services } from "@/components/jireh/services";
import { Work } from "@/components/jireh/work";
import { Comparison } from "@/components/jireh/comparison";
import { Process } from "@/components/jireh/process";
import { Testimonials } from "@/components/jireh/testimonials";
import { Contact } from "@/components/jireh/contact";
import { SiteFooter } from "@/components/jireh/site-footer";

export default function Page() {
  return (
    <div className="relative min-h-screen flex flex-col bg-ink">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <Services />
        <Work />
        <Comparison />
        <Process />
        <Testimonials />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
