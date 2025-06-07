
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { roomsData } from "@/models/hotelModel";
import { Users, Wifi, Car } from "lucide-react";

export const RoomsPreview = () => {
  const featuredRooms = roomsData.slice(0, 2);

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Rooms</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comfortable accommodations designed with your comfort in mind
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {featuredRooms.map((room) => (
            <Card key={room.id} className="overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{room.type}</CardTitle>
                    <CardDescription className="flex items-center gap-1 mt-1">
                      <Users className="h-4 w-4" />
                      Up to {room.max_guests} guests
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">€{room.price_per_night}</div>
                    <div className="text-sm text-muted-foreground">per night</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{room.description}</p>
                <div className="flex flex-wrap gap-2">
                  {room.features.slice(0, 3).map((feature) => (
                    <span
                      key={feature}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild>
            <Link to="/rooms">View All Rooms</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
