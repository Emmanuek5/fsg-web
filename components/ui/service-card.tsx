import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "./card";

interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
}

export function ServiceCard({ title, description, imageSrc, imageAlt }: ServiceCardProps) {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="relative w-full h-48 mb-6 rounded-lg overflow-hidden">
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={500}
            height={500}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
        <CardHeader className="p-0">
          <CardTitle className="text-2xl font-bold text-fsg-purple mb-3 group-hover:text-fsg-red transition-colors">
            {title}
          </CardTitle>
        </CardHeader>
        <p className="text-fsg-gray/80 leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
}
