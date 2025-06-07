
import { useState } from "react";
import { Navigation } from "@/components/hotel/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { roomsData, type Room } from "@/models/hotelModel";
import { useLocation, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Users } from "lucide-react";

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const selectedRoom = location.state?.selectedRoom as Room | undefined;
  
  const [formData, setFormData] = useState({
    roomId: selectedRoom?.id || "",
    guestName: "",
    guestEmail: "",
    guestPhone: "",
    checkIn: "",
    checkOut: "",
    guests: selectedRoom ? selectedRoom.max_guests.toString() : "1"
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking submitted:", formData);
    toast({
      title: "Booking Submitted!",
      description: "We will contact you shortly to confirm your reservation.",
    });
    navigate("/");
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const selectedRoomData = roomsData.find(room => room.id === formData.roomId);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Book Your Stay</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete the form below to reserve your room at Viesnīca Kandava
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Booking Information</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="roomSelect">Select Room</Label>
                    <Select value={formData.roomId} onValueChange={(value) => handleInputChange("roomId", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a room" />
                      </SelectTrigger>
                      <SelectContent>
                        {roomsData.map((room) => (
                          <SelectItem key={room.id} value={room.id}>
                            {room.type} - €{room.price_per_night}/night
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="checkIn" className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Check-in Date
                      </Label>
                      <Input
                        id="checkIn"
                        type="date"
                        value={formData.checkIn}
                        onChange={(e) => handleInputChange("checkIn", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="checkOut" className="flex items-center gap-2">
                        <Calendar className="h-4 w-4" />
                        Check-out Date
                      </Label>
                      <Input
                        id="checkOut"
                        type="date"
                        value={formData.checkOut}
                        onChange={(e) => handleInputChange("checkOut", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="guests" className="flex items-center gap-2">
                      <Users className="h-4 w-4" />
                      Number of Guests
                    </Label>
                    <Select value={formData.guests} onValueChange={(value) => handleInputChange("guests", value)}>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        {[1, 2, 3, 4].map((num) => (
                          <SelectItem key={num} value={num.toString()}>
                            {num} Guest{num > 1 ? 's' : ''}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="guestName">Full Name</Label>
                      <Input
                        id="guestName"
                        type="text"
                        value={formData.guestName}
                        onChange={(e) => handleInputChange("guestName", e.target.value)}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="guestEmail">Email Address</Label>
                      <Input
                        id="guestEmail"
                        type="email"
                        value={formData.guestEmail}
                        onChange={(e) => handleInputChange("guestEmail", e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="guestPhone">Phone Number</Label>
                    <Input
                      id="guestPhone"
                      type="tel"
                      value={formData.guestPhone}
                      onChange={(e) => handleInputChange("guestPhone", e.target.value)}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Submit Booking Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          <div>
            {selectedRoomData && (
              <Card>
                <CardHeader>
                  <CardTitle>Booking Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold">{selectedRoomData.type}</h3>
                      <p className="text-sm text-muted-foreground">{selectedRoomData.description}</p>
                    </div>
                    
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center">
                        <span>Price per night:</span>
                        <span className="font-semibold">€{selectedRoomData.price_per_night}</span>
                      </div>
                      <div className="flex justify-between items-center mt-2">
                        <span>Max guests:</span>
                        <span>{selectedRoomData.max_guests}</span>
                      </div>
                    </div>

                    <div className="border-t pt-4">
                      <h4 className="font-medium mb-2">Room Features:</h4>
                      <div className="space-y-1">
                        {selectedRoomData.features.map((feature) => (
                          <div key={feature} className="text-sm text-muted-foreground">
                            • {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
