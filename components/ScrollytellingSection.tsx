"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";

export default function ScrollytellingSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  const features = [
    {
      title: (
        <>
          It all starts with what<br />
          you have.
        </>
      ),
      description: "Snap a photo. Scan a barcode or receipt. Our AI instantly recognizes your ingredients and gets to work planning delicious possibilities.",
      feature: "Pantry AI",
      image: "sous_robot"
    },
    {
      title: (
        <>
          AI magically plans your<br />
          week.
        </>
      ),
      description: "Get personalized meal plans that work with your schedule, dietary preferences, and ingredients on hand. No more last-minute takeout decisions.",
      feature: "Meal Planner",
      image: "meal_planning"
    },
    {
      title: (
        <>
          Cook with confidence,<br />
          not stress.
        </>
      ),
      description: "Follow along with our interactive chef mode. Get real-time tips, timing guidance, and encouragement every step of the way.",
      feature: "Chef Mode",
      image: "cookbook"
    },
    {
      title: (
        <>
          Share your culinary<br />
          masterpieces.
        </>
      ),
      description: "Show off your creations and climb the leaderboards. Connect with friends and discover new recipe ideas from the community.",
      feature: "Social Leaderboards",
      image: "trophy"
    }
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Only calculate when section is properly in view
      if (sectionTop <= windowHeight * 0.5 && sectionTop > -sectionHeight + windowHeight * 0.5) {
        // Calculate progress through the section, starting when section is halfway visible
        const adjustedTop = Math.max(0, windowHeight * 0.5 - sectionTop);
        const progress = adjustedTop / (sectionHeight - windowHeight);
        
        // Adjust progress to give first phase more time
        // Use a curve that makes the first phase last longer
        let adjustedProgress;
        if (progress < 0.4) {
          // First 40% of scroll only advances through first phase
          adjustedProgress = progress * 0.5; // Maps 0-0.4 to 0-0.2
        } else {
          // Remaining 60% of scroll handles phases 1-3
          adjustedProgress = 0.2 + ((progress - 0.4) / 0.6) * 0.8; // Maps 0.4-1.0 to 0.2-1.0
        }
        
        // Map adjusted progress to feature index
        const newActiveIndex = Math.min(Math.floor(adjustedProgress * features.length), features.length - 1);
        setActiveIndex(Math.max(0, newActiveIndex));
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [features.length]);

  return (
    <section ref={sectionRef} className="relative " style={{ height: '400vh' }}>
      {/* Sticky container */}
      <div className="sticky top-0 w-full h-screen flex items-center justify-center ">
        <div className="w-full max-w-7xl mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text content */}
          <div className="flex flex-col justify-center">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`scroll-text ${index === activeIndex ? 'active' : ''} transition-all duration-700 ease-out absolute`}
                style={{ 
                  opacity: index === activeIndex ? 1 : 0,
                  transform: index === activeIndex ? 'translateY(0)' : 'translateY(20px)',
                  fontFamily: "'Winky Sans', sans-serif"
                }}
              >
                <div className="mb-2">
                  <span className="text-[#C1513E] text-sm font-semibold uppercase tracking-wider">
                    {feature.feature}
                  </span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-[#E9967A] mb-6 leading-tight">
                  {feature.title}
                </h2>
                <p className="text-[#FFFFFF] text-xl leading-relaxed max-w-lg">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
          
          {/* Graphics without phone frame */}
          <div className="flex items-center justify-center">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`transition-all duration-700 ease-out absolute`}
                style={{ 
                  opacity: index === activeIndex ? 1 : 0,
                  transform: index === activeIndex ? 'scale(1)' : 'scale(0.9)',
                }}
              >
                <Image
                  src={`/${feature.image}.png`}
                  alt={`${feature.feature} illustration`}
                  width={400}
                  height={400}
                  className="w-full h-auto max-w-md animate-bob"
                  style={{ animationDelay: `${index * 0.3}s` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}