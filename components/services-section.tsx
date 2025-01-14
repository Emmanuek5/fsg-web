import { ServiceCard } from "./service-card";

export function ServicesSection() {
  const services = [
    {
      title: "HR Solutions",
      description: "Comprehensive HR services including recruitment, training, performance management, and HR policy development. We help organizations build and maintain a high-performing workforce.",
      icon: "users",
      features: [
        "Talent Acquisition & Management",
        "HR Policy Development",
        "Performance Management Systems",
        "Employee Training & Development",
        "Organizational Development"
      ]
    },
    {
      title: "Investment Services",
      description: "Strategic investment solutions and financial advisory services to help businesses grow and maximize returns. We identify opportunities and manage risks effectively.",
      icon: "trending-up",
      features: [
        "Investment Strategy",
        "Portfolio Management",
        "Risk Assessment",
        "Market Analysis",
        "Financial Planning"
      ]
    },
    {
      title: "Human Development",
      description: "Empowering individuals and organizations through comprehensive training and development programs. We focus on building skills and capabilities for sustainable growth.",
      icon: "graduation-cap",
      features: [
        "Leadership Development",
        "Professional Skills Training",
        "Career Development",
        "Team Building",
        "Executive Coaching"
      ]
    },
    {
      title: "Agriculture Solutions",
      description: "Innovative agricultural solutions combining traditional wisdom with modern technology. We support sustainable farming practices and agribusiness development.",
      icon: "sprout",
      features: [
        "Agribusiness Consulting",
        "Sustainable Farming",
        "Agricultural Technology",
        "Supply Chain Optimization",
        "Farm Management"
      ]
    },
    {
      title: "Business Advisory",
      description: "Expert business consulting services to help organizations optimize operations, improve efficiency, and achieve strategic objectives.",
      icon: "briefcase",
      features: [
        "Strategic Planning",
        "Business Process Optimization",
        "Change Management",
        "Market Entry Strategy",
        "Business Growth Planning"
      ]
    },
    {
      title: "Project Management",
      description: "End-to-end project management services ensuring successful delivery of initiatives across various sectors and scales.",
      icon: "git-merge",
      features: [
        "Project Planning",
        "Resource Management",
        "Risk Management",
        "Quality Assurance",
        "Project Monitoring & Control"
      ]
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive business solutions tailored to your needs. We combine expertise, 
            innovation, and industry best practices to deliver exceptional results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              features={service.features}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
