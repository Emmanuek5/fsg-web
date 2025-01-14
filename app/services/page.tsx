import { Metadata } from "next";
import { ServicesHero } from "@/components/services/services-hero";
import { ServicesList } from "@/components/services/services-list";
import { ServiceProcess } from "@/components/services/service-process";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Our Services | FSG Work Solutions",
  description: "Comprehensive business solutions including HR, Investment, Agriculture, and Human Development services.",
};

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <ServicesHero />
      <ServicesList />
      <ServiceProcess />
      <CTASection />
    </main>
  );
}
