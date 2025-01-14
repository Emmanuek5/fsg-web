import { Metadata } from "next";
import { AboutHero } from "@/components/about/about-hero";
import { CompanyValues } from "@/components/about/company-values";
import { TeamSection } from "@/components/about/team-section";
import { MissionVision } from "@/components/about/mission-vision";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "About Us | FSG Work Solutions",
  description: "Learn about FSG Work Solutions' mission, values, and our dedicated team of professionals.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <AboutHero />
      <MissionVision />
      <CompanyValues />
      <TeamSection />
      <CTASection />
    </main>
  );
}
