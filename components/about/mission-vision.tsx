export function MissionVision() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">
          {/* Mission */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <div className="w-12 h-12 rounded-lg bg-[#ff3366]/10 flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-[#ff3366]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 21l-7-5-7 5V5a2 2 0 012-2h10a2 2 0 012 2v16z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 leading-relaxed">
              To empower organizations with innovative solutions that drive sustainable growth 
              and excellence. We are committed to delivering value through our expertise in 
              HR, Investment, Agriculture, and Human Development services.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gray-50 p-8 rounded-2xl">
            <div className="w-12 h-12 rounded-lg bg-[#9933ff]/10 flex items-center justify-center mb-6">
              <svg
                className="w-6 h-6 text-[#9933ff]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                />
              </svg>
            </div>
            <h2 className="text-3xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600 leading-relaxed">
              To be the leading provider of integrated business solutions in Africa, 
              recognized for our innovative approach, excellence in service delivery, 
              and commitment to creating lasting positive impact for our clients and communities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
