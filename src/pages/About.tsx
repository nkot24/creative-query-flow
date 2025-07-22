
import { Navigation } from "@/components/hotel/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { hotelData } from "@/models/hotelModel";
import { Wifi, Car, Coffee, Users, Shield, Clock, MapPin, Award, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const amenityIcons = {
  "Free Wi-Fi": Wifi,
  "Parking": Car,
  "Restaurant": Coffee,
  "Terrace": Users,
  "Open every day 10:00–20:00, Fridays & Saturdays until 21:00": Clock,
  "Private bathroom": Shield,
};

const translateAmenity = (amenity, language) => {
  const translations = {
    "Free Wi-Fi": { en: "Free Wi-Fi", lv: "Bezmaksas bezvadu internets" },
    "Private bathroom": { en: "Private bathroom", lv: "Privāta vannas istaba" },
    "Restaurant": { en: "Restaurant", lv: "Restorāns" },
    "Terrace": { en: "Terrace", lv: "Terase" },
    "Parking": { en: "Parking", lv: "Autostāvvieta" },
    "Open every day 10:00–20:00, Fridays & Saturdays until 21:00": { en: "Open every day 10:00–20:00, Fridays & Saturdays until 21:00", lv: "Atvērts katru dienu 10:00–20:00, piektdienās un sestdienās līdz 21:00." },
  };
  
  return translations[amenity]?.[language] || amenity;
};

const About = () => {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            {language === "lv" ? "Par viesnīcu" : "About the hotel"}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {language === "lv"
              ? "Viesnīca Kandava atrodas Kandavas vēsturiskajā centrā un piedāvā mājīgu, autentisku latviešu viesmīlību skaisti atjaunotā ēkā."
              : "Viesnīca Kandava is located in the historic center of Kandava and offers comfortable, authentic Latvian hospitality in a beautifully restored building."}
          </p>
        </div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              {language === "lv" ? "Viesnīcas stāsts" : "About our hotel"}
            </h2>
            <p className="text-muted-foreground mb-4">
              {hotelData.description}
            </p>
            <p className="text-muted-foreground mb-4">
              {language === "lv"
                ? "Viesnīca atrodas pašā pilsētas centrā, tuvu veikaliem, kafejnīcām un apskates objektiem."
                : "The hotel is located in the very center of the city, close to stores, cafés, and places of interest."}
            </p>
            <p className="text-muted-foreground">
              {language === "lv"
                ? "Tā ir ideāla vieta, kur atpūsties, strādājot vai ceļojot pa Latviju."
                : "It's a perfect place to rest, work, or travel through Latvia."}
            </p>
          </div>

          {/* Image Section */}
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg h-96 flex justify-center overflow-hidden">
            <img
              src="/lovable-uploads/images/285253205_131734876172812_9018238262355775392_n (2).jpg"
              alt="Hotel Kandava"
              className="object-cover w-full h-full rounded-lg"
              style={{ maxHeight: "24rem", width: "100%", height: "100%" }}
            />
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader className="text-center">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle>
                {language === "lv" ? "Atrašanās vieta" : "Location"}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                {language === "lv"
                    ? "Viesnīca atrodas pašā Kandavas centrā."
                    : "The hotel is located in the center of Kandava."}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Award className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle>
                {language === "lv" ? "Kvalitāte" : "Quality"}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                {language === "lv"
                    ? "Mēs rūpējamies par katru viesi, lai pavadītais laiks būtu patīkams."
                    : "We care about each guest to make their stay a comfortable experience."}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle>
                {language === "lv" ? "Autentiskums" : "Authenticity"}
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                {language === "lv"
                    ? "Vietējā pieredze un vēsture katrā numurā."
                    : "Local experience and history in every room."}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Amenities Section */}
        <Card>
          <CardHeader>
            <CardTitle>
              {language === "lv" ? "Ērtības" : "Amenities"}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {hotelData.amenities.map((amenity) => {
                const IconComponent = amenityIcons[amenity] || Shield;
                return (
                    <div key={amenity} className="flex items-center gap-3">
                        <IconComponent className="h-5 w-5 text-primary" />
                        <span>{translateAmenity(amenity, language)}</span>
                    </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
};

export default About;
