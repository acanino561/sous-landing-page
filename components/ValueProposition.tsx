"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ValueProposition() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const features = [
    {
      title: "End 'What's for Dinner?'",
      description: "Never stare at your fridge wondering what to cook again. Sous instantly suggests delicious meals based on what you already have.",
    },
    {
      title: "Waste Less, Save More.",
      description: "Transform forgotten ingredients into amazing meals. Reduce food waste and stretch your grocery budget further.",
    },
    {
      title: "Enjoy the Process.",
      description: "Cooking becomes fun again with step-by-step guidance and confidence-building tips from your AI sous-chef.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-[#022B3A] py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`text-center group transition-all duration-700 ease-out ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${index * 200}ms` 
              }}
            >
              {/* Placeholder for cozy 3D illustration */}
              <div className="w-full h-80 mb-8 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <Image
                  src={`/${index === 0 ? 'light_bulb' : index === 1 ? 'piggy_bank' : 'utensil_friends'}.png`}
                  alt={`${index === 0 ? 'Light bulb' : index === 1 ? 'Piggy bank' : 'Utensil friends'} illustration`}
                  width={300}
                  height={300}
                  className="w-full h-full object-contain animate-bob"
                  style={{ animationDelay: `${index * 0.5}s` }}
                />
              </div>
              
              <h3 
                className="text-2xl md:text-3xl font-bold text-[#E9967A] mb-6"
                style={{ fontFamily: "'Winky Sans', sans-serif" }}
              >
                {feature.title}
              </h3>
              
              <p 
                className="text-[#FFFFFF] text-lg leading-relaxed"
                style={{ fontFamily: "'Winky Sans', sans-serif" }}
              >
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}