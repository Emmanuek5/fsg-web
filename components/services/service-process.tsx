export function ServiceProcess() {
  const steps = [
    {
      title: "Initial Consultation",
      description: "We begin with a thorough discussion of your business needs and objectives.",
      icon: "🤝",
    },
    {
      title: "Assessment & Analysis",
      description: "Our experts analyze your current situation and identify opportunities for improvement.",
      icon: "📊",
    },
    {
      title: "Solution Design",
      description: "We create a customized solution tailored to your specific requirements.",
      icon: "✏️",
    },
    {
      title: "Implementation",
      description: "Our team works closely with you to implement the solutions effectively.",
      icon: "🚀",
    },
    {
      title: "Monitoring & Support",
      description: "We provide ongoing support and monitor progress to ensure optimal results.",
      icon: "📈",
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We follow a systematic approach to ensure the successful delivery of our services
            and maximize value for our clients.
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connection Line */}
            <div className="absolute left-[2.25rem] top-0 bottom-0 w-px bg-gradient-to-b from-fsg-red to-fsg-purple md:left-1/2 md:-translate-x-px" />

            {/* Steps */}
            <div className="space-y-12">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="relative flex items-center md:justify-center"
                >
                  <div className={`flex md:w-1/2 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                    <div className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      {/* Step Number */}
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-fsg-red to-fsg-purple text-white text-2xl shadow-lg z-10">
                        {step.icon}
                      </div>

                      {/* Content */}
                      <div
                        className={`bg-white rounded-lg shadow-lg p-6 ml-6 md:mx-6 relative ${
                          index % 2 === 0 ? "md:text-right" : ""
                        }`}
                      >
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600">{step.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
