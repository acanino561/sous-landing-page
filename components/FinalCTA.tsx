import { Button } from "@/components/ui/button";
import AppStoreBadges from "./AppStoreBadges";

export default function FinalCTA() {
  return (
    <section className="bg-[#022B3A] py-24 px-4 relative z-10">
      <div className="max-w-4xl mx-auto text-center">
        <h2 
          className="text-5xl md:text-6xl font-bold text-[#E9967A] mb-8"
          style={{ fontFamily: 'var(--font-winky)' }}
        >
          Ready to reclaim your kitchen?
        </h2>
        
        <p 
          className="text-xl text-[#FFFFFF] mb-12 max-w-2xl mx-auto leading-relaxed"
          style={{ fontFamily: 'var(--font-winky)' }}
        >
          Join thousands of home cooks who've transformed their cooking experience with Sous.
        </p>
        
        <AppStoreBadges 
          locale="en-US"
          appleUrl="https://apps.apple.com/us/app/sous-ai-recipe-assistant/id6747099098"
          googleUrl="https://play.google.com/store/apps/details?id=com.sous&pcampaignid=web_share"
        />
      </div>
    </section>
  );
}