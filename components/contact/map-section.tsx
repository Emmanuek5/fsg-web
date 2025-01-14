export function MapSection() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Find Us</h2>
          <p className="text-xl text-gray-600">
            Visit our office to learn more about how we can help your business grow
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="aspect-[16/9] w-full">
            {/* Replace the src with your actual Google Maps embed URL */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.9581771870776!2d7.432094475798747!3d9.067574790995295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e75735dc84517%3A0x913c4a1bb5b73cb3!2sRock%20of%20Ages%20Mall!5e0!3m2!1sen!2sng!4v1736828867361!5m2!1sen!2sng"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <div className="mt-8 text-center text-gray-600">
          <p>
            For general inquiries, please email us at{" "}
            <a
              href="mailto:info@fsgworksolutions.com"
              className="text-[#ff3366] hover:text-[#9933ff] transition-colors"
            >
              info@fsgworksolutions.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
