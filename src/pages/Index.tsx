
import { HeroSection } from "@/components/hotel/HeroSection";
import { RoomsPreview } from "@/components/hotel/RoomsPreview";
import { FoodMenuSection } from "@/components/hotel/FoodMenuSection";
import { AboutPreview } from "@/components/hotel/AboutPreview";
import { ContactPreview } from "@/components/hotel/ContactPreview";
import { Navigation } from "@/components/hotel/Navigation";
import { EventsPreview } from "@/components/hotel/EventsPreview";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      {/* <EventsPreview /> */}
      <RoomsPreview />
      <FoodMenuSection />
      <AboutPreview />
      <ContactPreview />
    </div>
  );
};

export default Index;
