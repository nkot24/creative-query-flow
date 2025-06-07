
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { hotelData } from "@/models/hotelModel";

export const HeroSection = () => {
  return (
    <section className="relative h-[70vh] bg-gradient-to-r from-primary/20 to-secondary/20 flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Welcome to {hotelData.name}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            {hotelData.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link to="/booking">Book Your Stay</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link to="/rooms">View Rooms</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
