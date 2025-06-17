
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { hotelData } from "@/models/hotelModel";
import { Wifi, Car, Coffee, Users, Shield, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const amenityIcons: { [key: string]: any } = {
  "Free Wi-Fi": Wifi,
  "Parking": Car,
  "Restaurant": Coffee,
  "Garden": Users,
  "24/7 Reception": Clock,
  "Private bathroom": Shield,
};

const translateAmenity = (amenity: string, language: string) => {
  const translations: { [key: string]: { [key: string]: string } } = {
    "Free Wi-Fi": { en: "Free Wi-Fi", lv: "Bezmaksas bezvadu internets" },
    "Private bathroom": { en: "Private bathroom", lv: "Privāta vannas istaba" },
    "Restaurant": { en: "Restaurant", lv: "Restorāns" },
    "Garden": { en: "Garden", lv: "Dārzs" },
    "Parking": { en: "Parking", lv: "Autostāvvieta" },
    "24/7 Reception": { en: "24/7 Reception", lv: "24/7 Reģistratūra" },
  };
  
  return translations[amenity]?.[language] || amenity;
};

export const AboutPreview = () => {
  const { t, language } = useLanguage();

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              {t('home.about.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              {t('home.about.description1')}
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              {t('home.about.description2')}
            </p>
            <Button asChild>
              <Link to="/about">{t('home.about.learnMore')}</Link>
            </Button>
          </div>
          
          <div className="bg-card p-6 rounded-lg border">
            <h3 className="text-xl font-semibold mb-4">{t('home.about.amenities')}</h3>
            <div className="grid grid-cols-2 gap-4">
              {hotelData.amenities.map((amenity) => {
                const IconComponent = amenityIcons[amenity] || Shield;
                return (
                  <div key={amenity} className="flex items-center gap-2">
                    <IconComponent className="h-4 w-4 text-primary" />
                    <span className="text-sm">{translateAmenity(amenity, language)}</span>
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
