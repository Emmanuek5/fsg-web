import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Icons } from "@/components/ui/icons";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export function ServiceCard({ title, description, icon, features }: ServiceCardProps) {
  const Icon = Icons[icon as keyof typeof Icons] || Icons.rocket;

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-fsg-red/20">
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-fsg-red/10 flex items-center justify-center mb-4 group-hover:bg-fsg-red/20 transition-colors">
          <Icon className="w-6 h-6 text-fsg-red" />
        </div>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
        <CardDescription className="text-gray-600">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {features.map((feature, index) => (
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
  );
}
