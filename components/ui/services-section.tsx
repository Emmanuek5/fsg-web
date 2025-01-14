import { ServiceCard } from "./service-card";

const services = [
  {
    title: "HR Solutions",
    description: "Expert HR management and talent acquisition services that align with your business objectives.",
    imageSrc: "/hr.jpg",
    imageAlt: "HR Services"
  },
  {
    title: "Investment",
    description: "Strategic investment solutions with proven success, managing over $100M in diverse portfolios.",
    imageSrc: "/investment.jpg",
    imageAlt: "Investment"
  },
  {
    title: "Human Development",
    description: "Comprehensive training programs designed to unlock potential and drive organizational excellence.",
    imageSrc: "/development.jpg",
    imageAlt: "Human Development"
  },
  {
    title: "Agriculture",
    description: "Sustainable agricultural solutions combining innovation with environmental responsibility.",
    imageSrc: "/agriculture.jpg",
    imageAlt: "Agriculture"
  }
];

export function ServicesSection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-fsg-gray mb-4">Our Services</h2>
          <p className="text-xl text-fsg-gray/80 max-w-2xl mx-auto">
            Comprehensive solutions tailored to drive your organization's success
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
