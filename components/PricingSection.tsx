import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

export default function PricingSection() {
  const freeFeatures = [
    "Basic recipe suggestions",
    "Ingredient recognition",
    "3 meal plans per week",
    "Participate in Community Cookbook",
    "Dietary preference customization",
    "Basic shopping list generation"
  ];

  const premiumFeatures = [
    "Unlimited recipe suggestions",
    "Advanced ingredient recognition",
    "Unlimited meal plans",
    "Chef mode with step-by-step guidance",
    "Nutritional information",
    "Social leaderboards",
    "Advanced Shopping Lists & Provider Integration"
  ];

  return (
    <section className="py-24 px-4 relative z-10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-bold text-[#E9967A] mb-6"
            style={{ fontFamily: 'var(--font-winky)' }}
          >
            Choose Your Culinary Journey
          </h2>
          <p 
            className="text-xl text-[#FFFFFF] max-w-2xl mx-auto"
            style={{ fontFamily: 'var(--font-winky)' }}
          >
            Start free and upgrade anytime to unlock the full Sous experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Free Card */}
          <Card className="bg-[#ECDEC4] p-8 rounded-3xl border-2 border-transparent h-[700px] flex flex-col">
            <div className="text-center mb-8 mt-4">
              <h3 
                className="text-3xl font-bold text-[#022B3A] mb-4"
                style={{ fontFamily: 'var(--font-winky)' }}
              >
                Free
              </h3>
              <p 
                className="text-[#022B3A]/70 mb-6"
                style={{ fontFamily: 'var(--font-winky)' }}
              >
                Perfect for getting started
              </p>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {freeFeatures.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-[#C1513E] mr-3 flex-shrink-0" />
                  <span 
                    className="text-[#022B3A]"
                    style={{ fontFamily: 'var(--font-winky)' }}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Button 
              variant="outline" 
              size="lg" 
              className="w-full border-2 border-[#022B3A] text-[#022B3A] hover:bg-[#022B3A] hover:text-[#ECDEC4] py-4 rounded-2xl font-semibold text-lg h-auto mb-4"
              style={{ fontFamily: 'var(--font-winky)' }}
            >
              Start for Free
            </Button>

            <div className="text-center">
              <p className="text-[#022B3A] font-semibold mb-2 opacity-0">$0.00/month</p>
              <p className="text-[#022B3A] font-bold opacity-0">Forever free</p>
            </div>
          </Card>

          {/* Premium Card */}
          <Card className="bg-[#ECDEC4] p-8 rounded-3xl border-2 border-[#E9967A] relative h-[700px] flex flex-col">
            {/* Most Popular Badge */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-[#C1513E] text-white px-6 py-2 rounded-full flex items-center">
                <Star className="h-4 w-4 mr-2" />
                <span 
                  className="text-sm font-semibold"
                  style={{ fontFamily: 'var(--font-winky)' }}
                >
                  Most Popular
                </span>
              </div>
            </div>

            <div className="text-center mb-8 mt-4">
              <h3 
                className="text-3xl font-bold text-[#022B3A] mb-4"
                style={{ fontFamily: 'var(--font-winky)' }}
              >
                Premium
              </h3>
              <p 
                className="text-[#022B3A]/70 mb-6"
                style={{ fontFamily: 'var(--font-winky)' }}
              >
                The complete Sous experience
              </p>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {premiumFeatures.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-[#C1513E] mr-3 flex-shrink-0" />
                  <span 
                    className="text-[#022B3A]"
                    style={{ fontFamily: 'var(--font-winky)' }}
                  >
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <Button 
              size="lg" 
              className="w-full bg-[#C1513E] hover:bg-[#E9967A] text-white hover:text-white py-4 rounded-2xl font-semibold text-lg h-auto mb-4"
              style={{ fontFamily: 'var(--font-winky)' }}
            >
              Start Your 7-Day Free Trial
            </Button>

            <div className="text-center">
              <p 
                className="text-[#022B3A] font-semibold mb-2"
                style={{ fontFamily: 'var(--font-winky)' }}
              >
                $4.99/month
              </p>
              <p 
                className="text-[#C1513E] font-bold"
                style={{ fontFamily: 'var(--font-winky)' }}
              >
                $49.99/year <span className="text-sm">(Save 20%)</span>
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}