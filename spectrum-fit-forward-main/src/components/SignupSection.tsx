import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Gift, Mail, User } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SignupSection = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      toast({
        title: "Please fill in all fields",
        description: "Both name and email are required to join the waitlist.",
        variant: "destructive",
      });
      return;
    }

    try {
      const response = await fetch("https://sheetdb.io/api/v1/ih0oogeyz6tnv", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: { name, email } }),
      });

      if (response.ok) {
        toast({
          title: "Form Submitted! 🎉",
          description: "You've been added to our waitlist.",
        });
        setName("");
        setEmail("");
      } else {
        toast({
          title: "Submission failed",
          description: "There was an issue submitting the form. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Network error",
        description: "Check your internet connection and try again.",
        variant: "destructive",
      });
    }
  };

  return (
    <section id="waitlist" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Incentive Banner */}
        <div className="bg-gradient-to-r from-brand-blue to-brand-teal text-white rounded-2xl p-6 mb-12 text-center shadow-2xl">
          <div className="flex items-center justify-center gap-3 mb-2">
            <Gift className="h-6 w-6" />
            <span className="text-lg font-semibold">Limited Time Offer</span>
          </div>
          <p className="text-xl md:text-2xl font-bold">
            First 100 signups get early access + exclusive merch
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Transform Your <span className="text-brand-blue">Fitness Journey</span>?
            </h2>
            <p className="text-xl text-gray-600">
              Join thousands of others who are already experiencing the future of inclusive fitness technology.
            </p>
          </div>

          <Card className="shadow-2xl border-0 bg-gradient-to-br from-white to-gray-50">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      type="text"
                      placeholder="Your full name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="pl-12 py-4 text-lg rounded-xl border-2 border-gray-200 focus:border-brand-blue transition-colors"
                    />
                  </div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <Input
                      type="email"
                      placeholder="your.email@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-12 py-4 text-lg rounded-xl border-2 border-gray-200 focus:border-brand-teal transition-colors"
                    />
                  </div>
                </div>
                
                <Button 
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-brand-blue to-brand-teal hover:from-brand-blue/90 hover:to-brand-teal/90 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Join the Waitlist
                </Button>
                
                <p className="text-sm text-gray-500 text-center">
                  By signing up, you agree to receive updates about MyFitSpectrum. Unsubscribe anytime.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SignupSection;
