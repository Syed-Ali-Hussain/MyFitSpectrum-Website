
import { Card, CardContent } from "@/components/ui/card";
import { Brain, User, Accessibility, Users, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Body Recognition",
    description: "Advanced computer vision technology analyzes your movements in real-time, providing instant feedback on form and technique."
  },
  {
    icon: User,
    title: "Personalized Self-Assessments",
    description: "Tailored evaluations that adapt to your unique needs, abilities, and fitness goals for optimal results."
  },
  {
    icon: Accessibility,
    title: "Neurodiverse-Friendly Interface",
    description: "Intuitive design with clear visual cues, customizable settings, and sensory-friendly options for all users."
  },
  {
    icon: Users,
    title: "Caregiver Access & Collaboration",
    description: "Secure sharing features allow caregivers and support networks to stay involved in your fitness journey."
  },
  {
    icon: TrendingUp,
    title: "Coordination & Confidence Improvement",
    description: "Progressive exercises designed to enhance motor skills, build confidence, and celebrate every achievement."
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Features Built for <span className="text-brand-blue">Everyone</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive platform combines cutting-edge AI technology with inclusive design principles to create a fitness experience that truly works for neurodiverse individuals.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2"
            >
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-brand-blue to-brand-teal rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
