import { Button } from "./button";

export function CTASection() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-fsg-gray mb-6">Ready to Transform Your Business?</h2>
        <p className="text-xl text-fsg-gray/80 mb-10 leading-relaxed max-w-2xl mx-auto">
          Join the hundreds of organizations that have achieved exceptional growth with FSG Work Solutions. Let's build your success story together.
        </p>
        <div className="flex gap-4 justify-center">
          <Button size="lg" className="bg-fsg-red hover:bg-fsg-red/90">
            Contact Us Today
          </Button>
          <Button size="lg" variant="outline" className="bg-fsg-purple/10 text-fsg-purple hover:bg-fsg-purple/20">
            Schedule a Call
          </Button>
        </div>
      </div>
    </section>
  );
}
