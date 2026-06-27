import { SiteHeader } from "@/components/ireh/site-header";
import { Hero } from "@/components/ireh/hero";
import { Services } from "@/components/ireh/services";
import { Work } from "@/components/ireh/work";
import { Comparison } from "@/components/ireh/comparison";
import { Process } from "@/components/ireh/process";
import { Testimonials } from "@/components/ireh/testimonials";
import { Contact } from "@/components/ireh/contact";
import { SiteFooter } from "@/components/ireh/site-footer";

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
