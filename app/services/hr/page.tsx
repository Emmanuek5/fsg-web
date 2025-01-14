import { Metadata } from "next";
import { ServiceHero } from "@/components/services/service-hero";
import { ServiceFeatures } from "@/components/services/service-features";
import { ServiceTestimonials } from "@/components/services/service-testimonials";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "HR Solutions | FSG Work Solutions",
  description: "Comprehensive HR services including recruitment, training, and HR policy development.",
};

const features = {
  title: "HR Solutions",
  description: "Comprehensive human resource management services designed to optimize your workforce and drive organizational success.",
  image: "/hr-hero.jpg",
  mainFeatures: [
    {
      title: "Talent Acquisition & Management",
      description: "Strategic recruitment and talent management services to build high-performing teams.",
      icon: "users",
    },
    {
      title: "HR Policy Development",
      description: "Creation and implementation of effective HR policies and procedures.",
      icon: "scroll",
    },
    {
      title: "Performance Management",
      description: "Comprehensive systems to evaluate and enhance employee performance.",
      icon: "target",
    },
    {
      title: "Employee Relations",
      description: "Fostering positive workplace relationships and conflict resolution.",
      icon: "heart-handshake",
    },
    {
      title: "Training & Development",
      description: "Customized training programs to enhance employee skills and capabilities.",
      icon: "graduation-cap",
    },
    {
      title: "Compensation & Benefits",
      description: "Competitive compensation strategies and benefits program design.",
      icon: "badge-dollar-sign",
    },
  ],
  benefits: [
    "Improved employee productivity and engagement",
    "Reduced turnover and recruitment costs",
    "Enhanced workplace culture and satisfaction",
    "Compliance with labor laws and regulations",
    "Streamlined HR processes and operations",
    "Data-driven HR decision making",
  ],
};

const testimonials = [
  {
    quote: "FSG's HR solutions transformed our workforce management. Their expertise helped us build a stronger team and improve employee satisfaction.",
    author: "Sarah Johnson",
    role: "HR Director",
    company: "Tech Innovations Ltd",
  },
  {
    quote: "The HR policies and systems implemented by FSG have significantly improved our operational efficiency and employee retention.",
    author: "Michael Chen",
    role: "CEO",
    company: "Global Solutions Corp",
  },
];

export default function HRSolutionsPage() {
  return (
    <main className="min-h-screen bg-white">
      <ServiceHero
        title={features.title}
        description={features.description}
        image={features.image}
      />
      <ServiceFeatures
        mainFeatures={features.mainFeatures}
        benefits={features.benefits}
      />
      <ServiceTestimonials testimonials={testimonials} />
      <CTASection />
    </main>
  );
}
