
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { hotelData } from "@/models/hotelModel";
import { MapPin, Phone, Mail } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const ContactPreview = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-900">{t('home.contact.title')}</h2>
          <p className="text-xl text-muted-foreground">
            {t('home.contact.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
           <Card className="border-amber-200">
             <CardHeader className="text-center">
               <MapPin className="h-8 w-8 text-amber-600 mx-auto mb-2" />
               <CardTitle className="text-lg text-amber-900">{t('home.contact.location')}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">{hotelData.address}</p>
            </CardContent>
          </Card>

           <Card className="border-amber-200">
             <CardHeader className="text-center">
               <Phone className="h-8 w-8 text-amber-600 mx-auto mb-2" />
               <CardTitle className="text-lg text-amber-900">{t('home.contact.phone')}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">{hotelData.phone}</p>
            </CardContent>
          </Card>

           <Card className="border-amber-200">
             <CardHeader className="text-center">
               <Mail className="h-8 w-8 text-amber-600 mx-auto mb-2" />
               <CardTitle className="text-lg text-amber-900">{t('home.contact.email')}</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-muted-foreground">{hotelData.email}</p>
            </CardContent>
          </Card>
        </div>

         <div className="text-center">
           <Button asChild className="bg-amber-600 hover:bg-amber-700">
             <Link to="/contact">{t('home.contact.contactUs')}</Link>
           </Button>
        </div>
      </div>
    </section>
  );
};
