import { Button } from "@/components/ui/button";
import Image from "next/image";
import AppStoreBadges from "./AppStoreBadges";

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-12 relative z-10">
      <div className="max-w-6xl mx-auto text-center">
        <h1 
          className="text-5xl md:text-6xl font-bold text-[#E9967A] mb-6 animate-fade-in-up"
          style={{ fontFamily: 'var(--font-winky)' }}
        >
          Turn Your Pantry Into Possibilities
        </h1>
        
        <p 
          className="text-xl md:text-2xl text-[#FFFFFF] mb-8 max-w-3xl mx-auto leading-relaxed"
          style={{ fontFamily: 'var(--font-winky)' }}
        >
          Sous is your personal AI sous-chef, turning the ingredients you have into meals you'll love.
        </p>
        
        <AppStoreBadges 
          locale="en-US"
          className="mb-10"
          appleUrl="https://apps.apple.com/us/app/sous-ai-recipe-assistant/id6747099098"
          googleUrl="https://play.google.com/store/apps/details?id=com.sous&pcampaignid=web_share"
        />
        
        {/* Hero 3D Visual */}
        <div className="w-full max-w-5xl mx-auto mt-6">
          <Image
            src="/Untitled design (14).png"
            alt="Sous AI Chef - 3D Illustration"
            width={800}
            height={600}
            className="w-full h-auto rounded-3xl"
            priority
          />
        </div>
      </div>
    </section>
  );
}