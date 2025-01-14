"use client";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-br from-fsg-purple to-fsg-red relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/grid.png')] opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            Join hundreds of businesses that have achieved remarkable growth with FSG Work Solutions. 
            Let's create a customized solution for your organization's success.
          </p>
          
          <div className="grid sm:grid-cols-2 gap-4 max-w-xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-2">Schedule a Consultation</h3>
              <p className="text-white/80 mb-4">
                Get expert insights tailored to your business needs
              </p>
              <Button
              
                className="w-full bg-white text-fsg-purple hover:bg-white/90"
              >
                Book Now
              </Button>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20">
              <h3 className="text-xl font-semibold text-white mb-2">Request Information</h3>
              <p className="text-white/80 mb-4">
                Download our service catalog and case studies
              </p>
              <Button
                variant="outline"
                className="w-full border-white hover:bg-white/20"
                onClick={() => window.location.href = "/FSG CORPORATE PROFILE.docx"}
              >
                Download Now
              </Button>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">500+</div>
              <p className="text-white/80">Clients Served</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">95%</div>
              <p className="text-white/80">Client Satisfaction</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">10+</div>
              <p className="text-white/80">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-white mb-2">24/7</div>
              <p className="text-white/80">Support Available</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
