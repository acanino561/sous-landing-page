import HeroSection from '@/components/HeroSection';
import ValueProposition from '@/components/ValueProposition';
import ScrollytellingSection from '@/components/ScrollytellingSection';
import PricingSection from '@/components/PricingSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';
import FloatingIngredients from '@/components/FloatingIngredients';

export default function Home() {
  return (
    <main className="min-h-screen relative bg-[#022B3A]">
      <FloatingIngredients />
      <HeroSection />
      <ValueProposition />
      <ScrollytellingSection />
      <PricingSection />
      <FinalCTA />
      <Footer />
    </main>
  );
}