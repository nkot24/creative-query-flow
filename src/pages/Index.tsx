
import { HeroSection } from "@/components/hotel/HeroSection";
import { RoomsPreview } from "@/components/hotel/RoomsPreview";
import { AboutPreview } from "@/components/hotel/AboutPreview";
import { ContactPreview } from "@/components/hotel/ContactPreview";
import { Navigation } from "@/components/hotel/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <RoomsPreview />
      <AboutPreview />
      <ContactPreview />
    </div>
  );
};

export default Index;
