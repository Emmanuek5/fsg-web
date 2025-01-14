interface ServiceHeroProps {
  title: string;
  description: string;
  image: string;
}

export function ServiceHero({ title, description, image }: ServiceHeroProps) {
  return (
    <section className="relative py-24 bg-gradient-to-r from-fsg-purple to-fsg-red overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-fsg-purple/90 to-fsg-red/90" />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            {title}
          </h1>
          <p className="text-xl text-white/90 mb-8 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
