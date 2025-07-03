
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import AboutSection from "@/components/AboutSection";
import SignupSection from "@/components/SignupSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-['Inter',sans-serif]">
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <SignupSection />
      <Footer />
    </div>
  );
};

export default Index;
