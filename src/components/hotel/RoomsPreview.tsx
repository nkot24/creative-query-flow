
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { roomsData } from "@/models/hotelModel";
import { Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const RoomsPreview = () => {
  const { t } = useLanguage();
  const featuredRooms = roomsData.slice(0, 2);
  const bookingLink = "https://www.booking.com/hotel/lv/viesnica-kandava.lv.html?aid=347181&sid=f1ceadeecc09feb1b4383ff863772be3&dest_id=-3209286&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1749292056&srpvid=f10c49f942a907d2&type=total&ucfs=1&activeTab=main#RD1058138101";

  return (
    <section id="rooms" className="py-16 bg-gradient-to-b from-amber-50/30 to-orange-50/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-900">{t('home.rooms.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('home.rooms.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {featuredRooms.map((room) => (
            <Card key={room.id} className="overflow-hidden border-amber-200 hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-br from-amber-100 to-orange-100"></div>
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-amber-900">{room.type}</CardTitle>
                    <CardDescription className="flex items-center gap-1 mt-1">
                      <Users className="h-4 w-4 text-amber-600" />
                      {t('common.upTo')} {room.max_guests} {t('common.guests')}
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-amber-700">€{room.price_per_night}</div>
                    <div className="text-sm text-muted-foreground">{t('common.perNight')}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{room.description}</p>
                <div className="flex flex-wrap gap-2">
                  {room.features.slice(0, 3).map((feature) => (
                    <span
                      key={feature}
                      className="px-2 py-1 bg-amber-100 text-amber-800 text-xs rounded-md"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button asChild className="bg-amber-600 hover:bg-amber-700">
            <a href={bookingLink} target="_blank" rel="noopener noreferrer">
              {t('nav.bookNow')}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
