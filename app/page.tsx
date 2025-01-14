import { HeroSection } from "@/components/hero-section";
import { ServicesSection } from "@/components/services-section";
import { StatsSection } from "@/components/stats-section";
import { CTASection } from "@/components/cta-section";
import { ContactForm } from "@/components/contact-form";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <div className="bg-gradient-to-b from-gray-50 to-white">
        <ContactForm />
        <CTASection />
      </div>
    </main>
  );
}