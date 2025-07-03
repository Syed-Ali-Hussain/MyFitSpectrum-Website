const AboutSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-brand-blue/5 to-brand-teal/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="/assets/about-section-image.webp"
              alt="Innovation and technology"
              className="w-full h-96 object-cover rounded-3xl shadow-2xl"
            />
          </div>
          <div className="space-y-6">
            <div className="inline-block bg-brand-teal/10 text-brand-teal px-4 py-2 rounded-full text-sm font-semibold">
              Our Mission
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Making Fitness <span className="text-brand-blue">Inclusive</span>, <span className="text-brand-teal">Accessible</span>, and Empowering
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              We're on a mission to make fitness inclusive, accessible, and empowering for neurodiverse individuals through smart body-tracking AI. Our technology doesn't just track movement — it understands the unique ways different minds and bodies work.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Every feature is designed with neurodiversity in mind, from our calming interface colors to our adaptive feedback systems. We believe everyone deserves to feel confident, strong, and supported in their fitness journey.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-blue">10K+</div>
                <div className="text-gray-600">Beta Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-teal">95%</div>
                <div className="text-gray-600">Satisfaction Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
