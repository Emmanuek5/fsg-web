import { Metadata } from "next";
import { ContactHero } from "@/components/contact/contact-hero";
import { ContactInfo } from "@/components/contact/contact-info";
import { ContactForm } from "@/components/ui/contact-form";
import { MapSection } from "@/components/contact/map-section";

export const metadata: Metadata = {
  title: "Contact Us | FSG Work Solutions",
  description: "Get in touch with FSG Work Solutions. We're here to help you achieve your business goals.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <ContactHero />
      <div className="container mx-auto px-4 py-16">
        <div className="grid ">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
      <MapSection />
    </main>
  );
}
