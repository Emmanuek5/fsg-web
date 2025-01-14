import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#1c1c1c]">
      {/* Background Image and Overlay */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-transparent z-10" />
        <div className="absolute inset-0 bg-[url('/hero.jpg')] bg-cover bg-center opacity-50" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Empowering Growth Through{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff3366] to-[#9933ff]">
              Innovation
            </span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            FSG Work Solutions is a leading business solutions provider, delivering 
            comprehensive services in HR, Investment, Agriculture, and Human Development. We 
            partner with organizations to drive sustainable growth and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="bg-[#ff3366] hover:bg-[#ff3366]/90 text-white px-8 py-6 text-lg"
            >
              Explore Our Services
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/20 hover:bg-white/10 hover:text-white px-8 py-6 text-lg"
            >
              Schedule a Consultation
            </Button>
          </div>
        </div>

        
      </div>
    </section>
  );
}
