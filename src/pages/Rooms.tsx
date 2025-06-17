
import { Navigation } from "@/components/hotel/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Link } from "react-router-dom";
import { roomsData } from "@/models/hotelModel";
import { Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Rooms = () => {
  const { t, language } = useLanguage();

  // Funcition to translate room features
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
          <h1 className="text-4xl font-bold mb-4">{t("rooms.title")}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("rooms.subtitle")} 
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomsData.map((room) => (
            <Card key={room.id} className="flex flex-col overflow-hidden">
              {/* Image Carousel */}
              <div className="relative">
                <Carousel className="w-full">
                  <CarouselContent>
                    {room.images.map((image, index) => (
                      <CarouselItem key={index}>
                        <img 
                          src={image} 
                          alt={`${translateRoomType(room.type)} - ${index + 1}`} 
                          className="rounded-md object-cover w-full h-[396px]" 
                        />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {room.images.length > 1 && (
                    <>
                      <CarouselPrevious className="left-2" />
                      <CarouselNext className="right-2" />
                    </>
                  )}
                </Carousel>
              </div>

              {/* Card Header */}
              <CardHeader>
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle>{translateRoomType(room.type)}</CardTitle>
                        <CardDescription className="flex items-center gap-1 mt-1">
                          <Users className="h-4 w-4" />
                          {t("common.upTo")} {room.max_guests} {t("common.guests")} 
                        </CardDescription>
                    </div>
                    <div className="text-right">
                        <div className="text-2xl font-bold">€{room.price_per_night}</div>
                        <div className="text-sm text-muted-foreground">
                         {t("common.perNight")} 
                        </div>
                    </div>
                </div>
              </CardHeader>

              {/* Card Content */}
              <CardContent className="flex flex-col h-full">
                {/* Description */}
                <p className="text-muted-foreground mb-4">
                    {translateRoomDescription(room.description)}
                </p>

                {/* Push button to bottom, with features directly above*/}
                <div className="flex-grow" />

                {/* Features anchored above button */}
                <div className="flex flex-wrap gap-2 mb-4">
                    {room.features.map((feature) => (
                        <span
                           key={feature}
                           className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md">
                           {translateRoomFeature(feature)}
                        </span>
                    ))}
                </div>

                {/* Button anchored at bottom */}
                <Button asChild className="w-full">
                    <Link to="/booking" state={{ selectedRoom: room }}>
                         {t("rooms.bookRoom")} 
                    </Link>
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
