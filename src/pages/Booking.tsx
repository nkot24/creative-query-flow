import { useState } from "react";
import { Navigation } from "@/components/hotel/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { roomsData, type Room } from "@/models/hotelModel";
import { useLocation, useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Users, Info } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import emailjs from "emailjs-com";

const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { t, language } = useLanguage();
  const selectedRoom = location.state?.selectedRoom as Room | undefined;

  const [formData, setFormData] = useState({ 
    roomType: selectedRoom?.type || "", 
    guestName: "", 
    guestEmail: "", 
    guestPhone: "", 
    checkIn: "", 
    checkOut: "", 
    guests: selectedRoom ? selectedRoom.max_guests.toString() : "1" 
  });

  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Booking submitted!", formData);

    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 10000);

    toast({ title: t("booking.success"), description: t("booking.successMessage") });

    // Send booking details via EmailJS
    emailjs.send(
      "service_r2n3ibq", // Your EmailJS service ID
      "template_6isaoog", // Your EmailJS template ID
      formData, // The form data to send
      "xMMoQJAwgad7xzlJ7" // Your EmailJS Public API key
    )
    .then((response) => {
      console.log("Booking email successfully sent!", response.text);
    })
    .catch((error) => {
      console.error("Failed to send booking email.", error);
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const selectedRoomData = roomsData.find((room) => room.type === formData.roomType);

  // Translation for room features
  const translateRoomFeature = (feature) => {
    const featureTranslations = {
      "Privāta vannas istaba": { en: "Private bathroom", lv: "Privāta vannas istaba" },
      "Bezmaksas bezvadu internets": { en: "Free Wi-Fi", lv: "Bezmaksas bezvadu internets" },
      "Skats uz iekšpagalmu": { en: "Courtyard view", lv: "Skats uz iekšpagalmu" },
      "Balkons": { en: "Balcony", lv: "Balkons" },
      "Skats uz pilsētu": { en: "City view", lv: "Skats uz pilsētu" },
      "Plakanā ekrāna televizors": { en: "Flat screen tv", lv: "Plakanā ekrāna televizors" },
    };
    return featureTranslations[feature]?.[language] || feature;
  };

  // Funcition to translate room type
  const translateRoomType = (type) => {
    const typeTranslations = {
      "Divvietīgs numurs (1 gulta un 1 dīvāns) ar privātu vannas istabu": { en: "Double Room (1 bed and 1 sofa) with private bathroom", lv: "Divvietīgs numurs (1 gulta un 1 dīvāns) ar privātu vannas istabu" },
      "Četrvietīgs numurs ar privātu vannas istabu": { en: "Quadruple Room with Private Bathroom", lv: "Četrvietīgs numurs ar privātu vannas istabu" },
      "Divvietīgs numurs (1 gulta) ar privātu vannas istabu": { en: "Double Room with Private Bathroom", lv: "Divvietīgs numurs (1 gulta) ar privātu vannas istabu" },
      "Divvietīgs numurs (2 gultas) ar privātu vannas istabu": { en: "Twin Room with Private Bathroom", lv: "Divvietīgs numurs (2 gultas) ar privātu vannas istabu" },
      "Divvietīgs numurs (1 gulta) ar balkonu": { en: "Double Room with Balcony", lv: "Divvietīgs numurs (1 gulta) ar balkonu" },
      "Vienvietīgs numurs ar privātu vannas istabu": { en: "Single Room with Private Bathroom", lv: "Vienvietīgs numurs ar privātu vannas istabu" },
    };
    return typeTranslations[type]?.[language] || type;
  };

  // Funcition to translate room description
  const translateRoomDescription = (description) => {
    const descriptionTranslations = {
      "Šajā divvietīgajā numurā (ar 1 gultu) ir privāta vannas istaba ar vannu, dušu un fēnu. Šī divvietīgā numura ērtību klāstā ir elektriskā tējkanna, apkure un plakanā ekrāna televizors ar satelīta kanāliem. No numura paveras skats uz pilsētu. Šajā uzturēšanās vietā ir 2 gultas.": { 
        en: "This double room has a private bathroom with a bath, shower and hairdryer. This double room features an electric kettle, heating and a flat-screen TV with satellite channels. The room offers city views. This accommodation has 2 beds.", 
        lv: "Šajā divvietīgajā numurā (ar 1 gultu) ir privāta vannas istaba ar vannu, dušu un fēnu. Šī divvietīgā numura ērtību klāstā ir elektriskā tējkanna, apkure un plakanā ekrāna televizors ar satelīta kanāliem. No numura paveras skats uz pilsētu. Šajā uzturēšanās vietā ir 2 gultas." 
      },
      "Šajā četrvietīgajā numurā ir plakanā ekrāna televizors ar satelīta kanāliem un privāta vannas istaba. Šajā uzturēšanās vietā ir 3 gultas.": { 
        en: "This quadruple room features a flat-screen TV with satellite channels and a private bathroom. This accommodation has 3 beds.", 
        lv: "Šajā četrvietīgajā numurā ir plakanā ekrāna televizors ar satelīta kanāliem un privāta vannas istaba. Šajā uzturēšanās vietā ir 3 gultas." 
      },
      "Šajā divvietīgajā numurā (ar 1 gultu) ir plakanā ekrāna televizors ar satelīta kanāliem un privāta vannas istaba.": { 
        en: "This double room has a flat-screen TV with satellite channels and a private bathroom.", 
        lv: "Šajā divvietīgajā numurā (ar 1 gultu) ir plakanā ekrāna televizors ar satelīta kanāliem un privāta vannas istaba." 
      },
      "Šajā divvietīgajā numurā (ar 2 gultām) ir plakanā ekrāna televizors ar satelīta kanāliem un privāta vannas istaba.": { 
        en: "This twin room has a flat-screen TV with satellite channels and a private bathroom.", 
        lv: "Šajā divvietīgajā numurā (ar 2 gultām) ir plakanā ekrāna televizors ar satelīta kanāliem un privāta vannas istaba." 
      },
      "Šajā divvietīgajā numurā ir plakanā ekrāna televizors ar satelīttelevīzijas kanāliem, privāta vannas istaba un balkons ar skatu uz pilsētu. Numurā ir 1 gulta.": { 
        en: "This double room features a flat-screen TV with satellite channels, a private bathroom and a balcony with city views. The room has 1 bed.", 
        lv: "Šajā divvietīgajā numurā ir plakanā ekrāna televizors ar satelīttelevīzijas kanāliem, privāta vannas istaba un balkons ar skatu uz pilsētu. Numurā ir 1 gulta." 
      },
      "Šajā vienvietīgajā numurā ir apkure, kā arī privāta vannas istaba ar dušu. Šajā uzturēšanās vietā ir 1 gulta.": { 
        en: "This single room has heating and a private bathroom with a shower. This accommodation has 1 bed.", 
        lv: "Šajā vienvietīgajā numurā ir apkure, kā arī privāta vannas istaba ar dušu. Šajā uzturēšanās vietā ir 1 gulta." 
      },
    };
    return descriptionTranslations[description]?.[language] || description;
  };


  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{t("booking.title")}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("booking.subtitle")} 
          </p>
        </div>

        {showAlert && (
          <div className="mb-6 flex justify-center">
            <Alert className="p-6 max-w-md w-full text-center">
              <Info className="h-6 w-6 mr-2 inline-block align-middle" />
              <AlertDescription className="text-lg font-semibold">
                {language === "lv"
                    ? "Mēs ar jums sazināsimies pēc iespējas ātrāk, lai informētu par numuru pieejamību."
                    : "We will contact you as soon as possible and inform you about room availability."}
              </AlertDescription>
            </Alert>
          </div>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>{t("booking.info")}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="roomSelect">{t("booking.selectRoom")}</Label>
                      <Select
                        value={formData.roomType}
                        onValueChange={(value) =>
                          handleInputChange("roomType", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue
                            placeholder={t("booking.chooseRoom")} 
                           />
                        </SelectTrigger>
                        <SelectContent>
                          {roomsData.map((room) => (
                            <SelectItem key={room.id} value={room.type}>
                             {translateRoomType(room.type)} - €{room.price_per_night}/{t("common.night")} 
                            </SelectItem>
                           ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="checkIn" className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {t("booking.checkIn")} 
                        </Label>
                        <Input
                          id="checkIn"
                          type="date"
                          value={formData.checkIn}
                          onChange={(e) =>
                            handleInputChange("checkIn", e.target.value)
                          }
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="checkOut" className="flex items-center gap-2">
                          <Calendar className="h-4 w-4" />
                          {t("booking.checkOut")} 
                        </Label>
                        <Input
                          id="checkOut"
                          type="date"
                          value={formData.checkOut}
                          onChange={(e) =>
                            handleInputChange("checkOut", e.target.value)
                          }
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="guests" className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        {t("booking.guests")} 
                      </Label>
                      <Select
                        value={formData.guests}
                        onValueChange={(value) =>
                          handleInputChange("guests", value)
                        }
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                             {num} {num === 1 ? t("booking.guest") : t("booking.guests_plural")} 
                            </SelectItem>
                           ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="guestName">
                         {t("booking.fullName")} 
                        </Label>
                        <Input
                          id="guestName"
                          type="text"
                          value={formData.guestName}
                          onChange={(e) =>
                            handleInputChange("guestName", e.target.value)
                          }
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="guestEmail">
                         {t("booking.email")} 
                        </Label>
                        <Input
                          id="guestEmail"
                          type="email"
                          value={formData.guestEmail}
                          onChange={(e) =>
                            handleInputChange("guestEmail", e.target.value)
                          }
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="guestPhone">
                        {t("booking.phone")} 
                      </Label>
                      <Input
                        id="guestPhone"
                        type="tel"
                        value={formData.guestPhone}
                        onChange={(e) =>
                          handleInputChange("guestPhone", e.target.value)
                        }
                        required
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg">
                     {t("booking.submit")} 
                    </Button>
                 </form>
              </CardContent>
            </Card>
          </div>

          <div>
            {selectedRoomData && (
              <Card>
                <CardHeader>
                    <CardTitle>{t("booking.summary")}</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        <div>
                           <h3 className="font-semibold">
                             {translateRoomType(selectedRoomData.type)} 
                           </h3>
                           <p className="text-sm text-muted-foreground">
                             {translateRoomDescription(selectedRoomData.description)} 
                           </p>
                        </div>

                        <div className="border-t pt-4">
                          <div className="flex justify-between items-center">
                            <span>{t("booking.pricePerNight")}</span>
                            <span className="font-semibold">
                             €{selectedRoomData.price_per_night}
                            </span>
                           </div>
                           <div className="flex justify-between items-center mt-2">
                             <span>{t("booking.maxGuests")}</span>
                             <span>{selectedRoomData.max_guests}</span>
                           </div>
                        </div>

                        <div className="border-t pt-4">
                         <h4 className="font-semibold mb-2">
                           {t("booking.roomFeatures")} 
                         </h4>
                         <div className="space-y-1">
                           {selectedRoomData.features.map((feature) => (
                             <div key={feature} className="text-sm text-muted-foreground">
                                • {translateRoomFeature(feature)} 
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

