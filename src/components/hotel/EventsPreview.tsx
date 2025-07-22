import { Calendar, MapPin, DollarSign } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { useLanguage } from "@/contexts/LanguageContext";

export interface Event {
  id: string;
  title: {
    lv: string;
    en: string;
  };
  date: string;
  time: string;
  location: {
    lv: string;
    en: string;
  };
  description: {
    lv: string;
    en: string;
  };
  price: number;
  image: string;
}

const eventsData: Event[] = [
  {
    id: "1",
    title: {
      lv: "Latviešu karaoke vakars",
      en: "Latvian Karaoke Night"
    },
    date: "2025-08-08",
    time: "22:00",
    location: {
      lv: "Kafejnīcas Kandava terasē",
      en: "Cafe Kandava Terrace"
    },
    description: {
      lv: "Latviešu mūzikas karaoke vakars. Nāc un izrādi savas dziedātprasmes!",
      en: "Latvian music karaoke night. Come and show your singing skills!"
    },
    price: 5,
    image: "/lovable-uploads/latviesu-karaokes-vakars(1).webp"
  }
  
];

// Function to generate iCal content for events
export const generateEventsICal = (): string => {
  let ical = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Hotel Kandava//Events Calendar//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
X-WR-CALNAME:Hotel Kandava Events
X-WR-CALDESC:Events at Hotel Kandava
`;

  eventsData.forEach(event => {
    const eventDate = new Date(`${event.date} ${event.time}`);
    
    // Format dates for iCal (YYYYMMDDTHHMMSS)
    const formatDateTime = (date: Date) => {
      return date.toISOString().replace(/[-:]/g, '').slice(0, 15) + 'Z';
    };
    
    // End time is 2 hours after start
    const endDate = new Date(eventDate.getTime() + 2 * 60 * 60 * 1000);
    
    ical += `BEGIN:VEVENT
UID:${event.id}@hotelkandava.com
DTSTART:${formatDateTime(eventDate)}
DTEND:${formatDateTime(endDate)}
SUMMARY:${event.title}
DESCRIPTION:${event.description}\\nLocation: ${event.location}\\nPrice: €${event.price}
LOCATION:${event.location}, Hotel Kandava
Price: €${event.price}
STATUS:CONFIRMED
TRANSP:OPAQUE
END:VEVENT
`;
  });

  ical += `END:VCALENDAR`;
  return ical;
};

// Function to download events iCal file
export const downloadEventsICal = () => {
  const icalContent = generateEventsICal();
  const blob = new Blob([icalContent], { type: 'text/calendar;charset=utf-8' });
  const url = window.URL.createObjectURL(blob);
  
  const link = document.createElement('a');
  link.href = url;
  link.download = 'hotel_kandava_events.ics';
  link.click();
  
  window.URL.revokeObjectURL(url);
};

export const EventsPreview = () => {
  const { language } = useLanguage();

  const translations = {
    title: language === "lv" ? "Gaidāmie pasākumi" : "Upcoming Events",
    price: language === "lv" ? "Biļetes cena" : "Ticket price",
  };

  return (
    <section className="py-16 bg-gradient-to-b from-orange-50/20 to-amber-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-900">{translations.title}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === "lv" 
              ? "Atklājiet īpašus notikumus un pieredzes, kas gaida jūs viesnīcā Kandava"
              : "Discover special events and experiences awaiting you at Hotel Kandava"
            }
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {eventsData.map((event) => (
                <CarouselItem key={event.id}>
                  <Card className="overflow-hidden border-amber-200 hover:shadow-lg transition-shadow">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="aspect-video md:aspect-square bg-muted">
                        <img 
                          src={event.image} 
                          alt={event.title[language]}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 flex flex-col justify-center">
                        <CardTitle className="text-2xl text-amber-900 mb-2">{event.title[language]}</CardTitle>
                        <CardDescription className="flex items-center gap-2 mb-4">
                          <Calendar className="h-4 w-4 text-amber-600" />
                          {new Date(event.date).toLocaleDateString(language === "lv" ? "lv-LV" : "en-US")} {event.time}
                        </CardDescription>
                        <p className="text-muted-foreground mb-4">{event.description[language]}</p>
                        <div className="flex items-center gap-2 text-sm">
                          <MapPin className="h-4 w-4 text-amber-600" />
                          {event.location[language]}
                        </div>
                        <div className="font-semibold flex items-center gap-1">
                          <DollarSign className="h-4 w-4 text-amber-600" /> {/* Money icon */}
                          {translations.price}: 
                          <span className="text-lg">€</span>
                          {event.price}
                        </div>
                      </div>
                    </div>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-2" />
            <CarouselNext className="right-2" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};