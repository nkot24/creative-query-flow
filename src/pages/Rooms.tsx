
import { Navigation } from "@/components/hotel/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { roomsData } from "@/models/hotelModel";
import { Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Rooms = () => {
  const { t, language } = useLanguage();

  // Function to translate room features
  const translateRoomFeature = (feature: string): string => {
    const featureTranslations: { [key: string]: { en: string; lv: string } } = {
      "2 single beds": { en: "2 single beds", lv: "2 vienvietīgas gultas" },
      "1 double bed": { en: "1 double bed", lv: "1 divguļamā gulta" },
      "Private bathroom": { en: "Private bathroom", lv: "Privāta vannas istaba" },
      "Free Wi-Fi": { en: "Free Wi-Fi", lv: "Bezmaksas Wi-Fi" },
      "Garden view": { en: "Garden view", lv: "Skats uz dārzu" },
      "Balcony": { en: "Balcony", lv: "Balkons" },
      "Desk": { en: "Desk", lv: "Rakstāmgalds" },
      "1 single bed": { en: "1 single bed", lv: "1 vienvietīga gulta" }
    };

    return featureTranslations[feature]?.[language] || feature;
  };

  // Function to translate room type
  const translateRoomType = (type: string): string => {
    const typeTranslations: { [key: string]: { en: string; lv: string } } = {
      "Double Room": { en: "Double Room", lv: "Divistabu numurs" },
      "Family Room": { en: "Family Room", lv: "Ģimenes numurs" },
      "Single Room": { en: "Single Room", lv: "Vienvietīgs numurs" }
    };

    return typeTranslations[type]?.[language] || type;
  };

  // Function to translate room description
  const translateRoomDescription = (description: string): string => {
    const descriptionTranslations: { [key: string]: { en: string; lv: string } } = {
      "Comfortable double room with traditional Latvian décor and modern amenities.": { 
        en: "Comfortable double room with traditional Latvian décor and modern amenities.", 
        lv: "Ērta divistabu istaba ar tradicionālo latviešu dekoru un mūsdienīgām ērtībām." 
      },
      "Spacious family room perfect for up to 4 guests with a lovely balcony view.": { 
        en: "Spacious family room perfect for up to 4 guests with a lovely balcony view.", 
        lv: "Plaša ģimenes istaba, kas ideāli piemērota līdz 4 viesiem ar skaistu balkona skatu." 
      },
      "Cozy single room ideal for solo travelers or business guests.": { 
        en: "Cozy single room ideal for solo travelers or business guests.", 
        lv: "Mājīga vienvietīga istaba, kas ideāli piemērota vientuļajiem ceļotājiem vai komandiņu viesiem." 
      }
    };

    return descriptionTranslations[description]?.[language] || description;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{t('rooms.title')}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('rooms.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {roomsData.map((room) => (
            <Card key={room.id} className="overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-primary/10 to-secondary/10"></div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{translateRoomType(room.type)}</CardTitle>
                    <CardDescription className="flex items-center gap-1 mt-1">
                      <Users className="h-4 w-4" />
                      {t('common.upTo')} {room.max_guests} {t('common.guests')}
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold">€{room.price_per_night}</div>
                    <div className="text-sm text-muted-foreground">{t('common.perNight')}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{translateRoomDescription(room.description)}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {room.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded-md"
                    >
                      {translateRoomFeature(feature)}
                    </span>
                  ))}
                </div>
                <Button asChild className="w-full">
                  <Link to="/booking" state={{ selectedRoom: room }}>{t('rooms.bookRoom')}</Link>
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
