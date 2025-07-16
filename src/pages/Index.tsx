
import { HeroSection } from "@/components/hotel/HeroSection";
import { RoomsPreview } from "@/components/hotel/RoomsPreview";
import { EventsPreview } from "@/components/hotel/EventsPreview";
import { FoodMenuSection } from "@/components/hotel/FoodMenuSection";
import { AboutPreview } from "@/components/hotel/AboutPreview";
import { ContactPreview } from "@/components/hotel/ContactPreview";
import { Navigation } from "@/components/hotel/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <RoomsPreview />
      <EventsPreview />
      <FoodMenuSection />
      <AboutPreview />
      <ContactPreview />
    </div>
  );
};

export default Index;
