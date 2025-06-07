
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { hotelData } from "@/models/hotelModel";
import { Wifi, Car, Coffee, Users, Shield, Clock } from "lucide-react";

const amenityIcons: { [key: string]: any } = {
  "Free Wi-Fi": Wifi,
  "Parking": Car,
  "Restaurant": Coffee,
  "Garden": Users,
  "24/7 Reception": Clock,
  "Private bathroom": Shield,
};

export const AboutPreview = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About {hotelData.name}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Nestled in the heart of historic Kandava, our hotel combines traditional Latvian 
              charm with modern comfort. We pride ourselves on providing exceptional hospitality 
              in a beautifully restored building that tells the story of our rich cultural heritage.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Whether you're visiting for business or leisure, our dedicated staff ensures 
              your stay is memorable and comfortable.
            </p>
            <Button asChild>
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-semibold mb-4">Hotel Amenities</h3>
            <div className="grid grid-cols-2 gap-4">
              {hotelData.amenities.map((amenity) => {
                const IconComponent = amenityIcons[amenity] || Shield;
                return (
                  <div key={amenity} className="flex items-center gap-2">
                    <IconComponent className="h-4 w-4 text-primary" />
                    <span className="text-sm">{amenity}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
