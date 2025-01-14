import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import Link from "next/link";

const services = [
  {
    title: "HR Solutions",
    description: "Comprehensive human resource management services",
    icon: "users",
    link: "/services/hr",
    features: [
      "Talent Acquisition & Management",
      "HR Policy Development",
      "Performance Management",
      "Employee Relations",
      "Training & Development",
      "Compensation & Benefits"
    ]
  },
  {
    title: "Investment Services",
    description: "Strategic investment and financial advisory",
    icon: "trending-up",
    link: "/services/investment",
    features: [
      "Portfolio Management",
      "Investment Strategy",
      "Risk Assessment",
      "Asset Allocation",
      "Market Analysis",
      "Wealth Management"
    ]
  },
  {
    title: "Human Development",
    description: "Professional growth and capacity building",
    icon: "graduation-cap",
    link: "/services/development",
    features: [
      "Leadership Training",
      "Skill Development",
      "Career Planning",
      "Team Building",
      "Performance Coaching",
      "Succession Planning"
    ]
  },
  {
    title: "Agriculture Solutions",
    description: "Modern agricultural practices and technology",
    icon: "sprout",
    link: "/services/agriculture",
    features: [
      "Farm Management",
      "Agricultural Technology",
      "Sustainable Practices",
      "Supply Chain Optimization",
      "Market Access",
      "Technical Training"
    ]
  }
];

export function ServicesList() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our range of specialized services designed to help your business thrive 
            in today's competitive environment.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service) => {
            const Icon = Icons[service.icon as keyof typeof Icons];
            return (
              <Link key={service.title} href={service.link}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-fsg-red/10 flex items-center justify-center mb-4 group-hover:bg-fsg-red/20">
                      {Icon && <Icon className="w-6 h-6 text-fsg-red" />}
                    </div>
                    <CardTitle className="text-2xl group-hover:text-fsg-red transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-gray-600">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-700">
                          <svg
                            className="w-4 h-4 mr-2 text-fsg-red"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
