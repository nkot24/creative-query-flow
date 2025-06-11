
import { Navigation } from "@/components/hotel/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { hotelData } from "@/models/hotelModel";
import { Wifi, Car, Coffee, Users, Shield, Clock, MapPin, Award, Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const amenityIcons: { [key: string]: any } = {
  "Free Wi-Fi": Wifi,
  "Parking": Car,
  "Restaurant": Coffee,
  "Garden": Users,
  "24/7 Reception": Clock,
  "Private bathroom": Shield,
};

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{t('about.title')}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">{t('about.story.title')}</h2>
            <p className="text-muted-foreground mb-4">
              {hotelData.description} {t('about.story.p1')}
            </p>
            <p className="text-muted-foreground mb-4">
              {t('about.story.p2')}
            </p>
            <p className="text-muted-foreground">
              {t('about.story.p3')}
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg h-64"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader className="text-center">
              <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle>{t('home.about.location.title')}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                {t('home.about.location.description')}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Award className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle>{t('home.about.quality.title')}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                {t('home.about.quality.description')}
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="text-center">
              <Heart className="h-8 w-8 text-primary mx-auto mb-2" />
              <CardTitle>{t('home.about.authentic.title')}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">
                {t('home.about.authentic.description')}
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>{t('home.about.amenities')}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-3 gap-4">
              {hotelData.amenities.map((amenity) => {
                const IconComponent = amenityIcons[amenity] || Shield;
                return (
                  <div key={amenity} className="flex items-center gap-3">
                    <IconComponent className="h-5 w-5 text-primary" />
                    <span>{amenity}</span>
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
