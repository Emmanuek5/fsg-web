import Image from "next/image";
import { Button } from "./button";

export function HeroSection() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-fsg-purple/80 to-fsg-red/50 mix-blend-multiply z-10" />
        <Image src="/hero.jpg" alt="Hero" layout="fill" objectFit="cover" className="object-center" priority />
      </div>
      
      <div className="relative z-20 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-7xl font-bold text-white mb-6 tracking-tight">
          <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">Transforming</span>
          <br />
          <span className="text-white">Business Growth</span>
        </h1>
        <p className="text-2xl text-white/90 mb-8 leading-relaxed font-light max-w-2xl mx-auto">
          Empowering organizations through innovative HR solutions, strategic investments, human development, and sustainable agriculture since 2017.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" className="bg-fsg-red hover:bg-fsg-red/90">
            Get Started
          </Button>
          <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
