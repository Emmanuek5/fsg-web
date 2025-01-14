import Image from "next/image";

interface TeamMember {
  name: string;
  title: string;
  description: string;
  image: string;
  stats: Array<{
    label: string;
    value: string;
  }>;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

export function TeamSection() {
  const team: TeamMember[] = [
    {
      name: "Onyilokwu Andrew Ochofie",
      title: "Chairman",
      description:
        "A Chartered Accountant, Chartered Banker, and Chartered Stockbroker with about 30 years of experience in financial services and consulting. Andrew has served as CFO and Chief Internal Auditor in Nigerian banks and as an Executive Director in a leading pension fund administrator.",
      image: "/onyilokwu.jpeg",
      stats: [
        { label: "Years of Experience", value: "30+" },
        { label: "Executive Courses", value: "Multiple Prestigious Institutions" },
        { label: "Leadership Roles", value: "5+" },
      ],
      socialLinks: {
        linkedin: "https://linkedin.com/in/andrew-ochofie",
        email: "andrew@fsgworksolutions.com",
      },
    },
    {
      name: "Gbemisola Andrew",
      title: "Managing Director",
      description:
        "An Accountant and seasoned entrepreneur with extensive real-life experience in running SMEs across various industries, including real estate, agriculture, and consumer goods. Gbemisola is a Consultant and Trainer dedicated to operational excellence.",
      image: "/gbemisola.jpeg",
      stats: [
        { label: "Business Ventures", value: "10+" },
        { label: "Years in Entrepreneurship", value: "15+" },
        { label: "Trained Professionals", value: "Numerous" },
      ],
      socialLinks: {
        linkedin: "https://linkedin.com/in/gbemisola-andrew",
        email: "gbemisola@fsgworksolutions.com",
      },
    },
    {
      name: "Benedicta Arachie",
      title: "Senior HR Specialist",
      description:
        "A Senior HR Officer and professional CV writer with over 4 years of experience working with job seekers and professionals. Benedicta has successfully re-packaged over 4,000 CVs, enabling 85% of her clients to secure their dream jobs.",
      image: "/team/benedicta.jpg",
      stats: [
        { label: "CVs Re-Packaged", value: "4,000+" },
        { label: "Success Rate", value: "85%" },
        { label: "Years of Experience", value: "4+" },
      ],
      socialLinks: {
        linkedin: "https://linkedin.com/in/benedicta-arachie",
        email: "benedicta@fsgworksolutions.com",
      },
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Our Key Resource Persons</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the professionals driving our success at FSG Work Solutions International Limited
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {team.map((person, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative w-48 h-48 mx-auto mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-[#ff3366] to-[#9933ff] rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
                <Image
                  src={person.image}
                  alt={person.name}
                  width={192}
                  height={192}
                  className="rounded-full w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-2">{person.name}</h3>
                <h4 className="text-lg text-[#ff3366] mb-4">{person.title}</h4>
                <p className="text-gray-600 mb-6 line-clamp-4 hover:line-clamp-none transition-all duration-300">
                  {person.description}
                </p>

                {/* Stats */}
                <div className="space-y-4 mb-6">
                  {person.stats.map((stat, statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#ff3366] to-[#9933ff]">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>

                {/* Social Links */}
                {person.socialLinks && (
                  <div className="flex justify-center space-x-4">
                    {person.socialLinks.linkedin && (
                      <a
                        href={person.socialLinks.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-[#0077b5] transition-colors"
                      >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                        </svg>
                      </a>
                    )}
                    {person.socialLinks.email && (
                      <a
                        href={`mailto:${person.socialLinks.email}`}
                        className="text-gray-400 hover:text-[#ff3366] transition-colors"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
