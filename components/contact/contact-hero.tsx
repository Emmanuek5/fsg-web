export function ContactHero() {
  return (
    <section className="relative py-24 bg-[#1c1c1c]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-transparent z-10" />
        <div className="absolute inset-0 bg-[url('/contact-hero.jpg')] bg-cover bg-center opacity-50" />
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Let's Start Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff3366] to-[#9933ff]">
              Journey
            </span>
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Get in touch with our team of experts and discover how FSG Work Solutions 
            can help transform your business.
          </p>
        </div>
      </div>
    </section>
  );
}
