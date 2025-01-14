import { Card, CardContent } from "./card";

interface StatItemProps {
  value: string;
  label: string;
}

function StatItem({ value, label }: StatItemProps) {
  return (
    <Card className="bg-transparent border-none shadow-none transform hover:scale-105 transition-transform">
      <CardContent className="text-center p-6">
        <h3 className="text-6xl font-bold text-white mb-2">{value}</h3>
        <p className="text-white/90 text-xl font-light">{label}</p>
      </CardContent>
    </Card>
  );
}

export function StatsSection() {
  return (
    <section className="bg-gradient-to-r from-fsg-purple to-fsg-red py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10"></div>
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 relative z-10">
        <StatItem value="$100M+" label="Investments Processed" />
        <StatItem value="6+ Years" label="Industry Experience" />
        <StatItem value="1000+" label="Clients Served" />
      </div>
    </section>
  );
}
