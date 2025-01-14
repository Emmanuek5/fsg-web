export function TeamSection() {
  const team = [
    {
      name: "Leadership Team",
      description:
        "Our experienced leadership team brings decades of combined expertise across multiple industries.",
      stats: [
        { label: "Years of Experience", value: "20+" },
        { label: "Successful Projects", value: "500+" },
        { label: "Client Satisfaction", value: "98%" },
      ],
    },
    {
      name: "Industry Experts",
      description:
        "Specialists in HR, Investment, Agriculture, and Human Development working together to deliver comprehensive solutions.",
      stats: [
        { label: "Expert Consultants", value: "50+" },
        { label: "Industries Served", value: "12+" },
        { label: "Global Partners", value: "30+" },
      ],
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Team</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the experts behind FSG Work Solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {team.map((group, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-2xl font-semibold mb-4">{group.name}</h3>
              <p className="text-gray-600 mb-8">{group.description}</p>

              <div className="grid grid-cols-3 gap-4">
                {group.stats.map((stat, statIndex) => (
                  <div key={statIndex} className="text-center">
                    <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff3366] to-[#9933ff]">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
