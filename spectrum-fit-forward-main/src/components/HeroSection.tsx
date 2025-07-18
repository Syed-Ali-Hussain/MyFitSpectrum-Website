import { ArrowRight } from "lucide-react";

const HeroSection = () => {
return (
<section className="relative bg-gradient-to-br from-blue-50 to-teal-50 py-20 md:py-32 overflow-hidden">
  <div className="container mx-auto px-4 md:px-6">
    <div className="grid lg:grid-cols-2 gap-12 items-center">
      <div className="text-center lg:text-left animate-fade-in">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Empowering{" "}
          <span className="text-brand-blue">Neurodiverse</span>{" "}
          Fitness Through{" "}
          <span className="text-brand-teal">Body Recognition</span>{" "}
          Technology
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
          MyFitSpectrum uses AI to correct your form and recommend personalized workouts — built with neurodiverse
          individuals in mind.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <a href="#waitlist"
            className="bg-brand-blue hover:bg-brand-blue/90 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 inline-flex items-center justify-center">
            🔥 Get 2 Months Free Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
      <div className="relative lg:pl-12">
        <div
          className="relative bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
          <div className="aspect-square w-full">
            <img src="/assets/your-hero-image.webp" alt="Updated MyFitSpectrum app demo"
              className="object-cover w-full h-full rounded-2xl" />
          </div>
          <div
            className="absolute -top-4 -right-4 bg-brand-teal text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
            AI Powered
          </div>
        </div>
        <div
          className="absolute -bottom-6 -left-6 bg-brand-blue text-white px-6 py-3 rounded-full text-sm font-semibold shadow-lg">
          Early Access Available
        </div>
      </div>
    </div>
  </div>
</section>
);
};

export default HeroSection;
