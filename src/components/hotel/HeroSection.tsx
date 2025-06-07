
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { hotelData } from "@/models/hotelModel";

export const HeroSection = () => {
  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/lovable-uploads/c595f550-7634-4f25-bcfd-f70b07702255.png')"
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow-lg">
            Welcome to {hotelData.name}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            {hotelData.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild className="bg-amber-600 hover:bg-amber-700 text-white border-none">
              <Link to="/booking">Book Your Stay</Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white hover:text-amber-900">
              <Link to="/rooms">View Rooms</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
