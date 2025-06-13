import { Navigation } from "@/components/hotel/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { hotelData } from "@/models/hotelModel";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Contact = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            {t("contact.title")} 
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t("contact.subtitle")} 
          </p>
        </div>

        {/* Cards in full width stack */}
        <div className="space-y-12">
          <h2 className="text-2xl font-bold mb-6">
            {t("contact.getInTouch")} 
          </h2>

          <Card className="w-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                {t("contact.address")} 
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {hotelData.address}
              </p>
            </CardContent>
          </Card>

          <Card className="w-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Phone className="h-5 w-5 text-primary" />
                {t("contact.phone")} 
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {hotelData.phone}
              </p>
            </CardContent>
          </Card>

          <Card className="w-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-primary" />
                {t("contact.email")} 
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {hotelData.email}
              </p>
            </CardContent>
          </Card>

          <Card className="w-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                {t("contact.hours")} 
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                {t("contact.hours24")} 
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12">
         <Card>
            <CardHeader>
              <CardTitle>{t("contact.map")}</CardTitle>
            </CardHeader>
            <CardContent>
              <div style={{ width: '100%', height: '400px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1054.556834219411!2d22.77589480606039!3d57.035872075160576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46ee4d5c17e120b1%3A0x952afbc88770e1ef!2sKafejn%C4%ABca%20Kandava!5e0!3m2!1slv!2slv!4v1749829071278!5m2!1slv!2slv"
                  style={{ border: 0 }}
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default Contact;
