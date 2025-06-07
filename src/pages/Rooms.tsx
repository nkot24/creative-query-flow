
import { Navigation } from "@/components/hotel/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { roomsData } from "@/models/hotelModel";
import { Users } from "lucide-react";

const Rooms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Rooms</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our selection of comfortable and well-appointed rooms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomsData.map((room) => (
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
                <div className="flex flex-wrap gap-2 mb-4">
                  {room.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <Button asChild className="w-full">
                  <Link to="/booking" state={{ selectedRoom: room }}>Book This Room</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rooms;
