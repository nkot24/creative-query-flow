
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { eventsData } from "@/models/eventsModel";
import { Calendar, Clock, MapPin, Euro, ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export const EventsPreview = () => {
  const { t, language } = useLanguage();
  const [currentEventIndex, setCurrentEventIndex] = useState(0);
  const currentEvent = eventsData[currentEventIndex];

  const nextEvent = () => {
    setCurrentEventIndex((prev) => (prev + 1) % eventsData.length);
  };

  const previousEvent = () => {
    setCurrentEventIndex((prev) => (prev - 1 + eventsData.length) % eventsData.length);
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(language === 'lv' ? 'lv-LV' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const translateCategory = (category: string) => {
    const categoryTranslations = {
      "Music": { en: "Music", lv: "Mūzika" },
      "Food & Drink": { en: "Food & Drink", lv: "Ēdiens un dzērieni" },
      "Experience": { en: "Experience", lv: "Pieredze" },
      "Culture": { en: "Culture", lv: "Kultūra" }
    };
    return categoryTranslations[category]?.[language] || category;
  };

  return (
    <section id="events" className="py-16 bg-gradient-to-b from-blue-50/30 to-indigo-50/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">
            {language === 'lv' ? 'Pasākumi' : 'Events'}
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {language === 'lv' 
              ? 'Atklājiet mūsu īpašos pasākumus un piedzīvojumus'
              : 'Discover our special events and experiences'
            }
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mb-8">
            <Button
              variant="outline"
              size="lg"
              onClick={previousEvent}
              className="flex items-center gap-2 bg-white/80 hover:bg-white border-blue-200"
            >
              <ChevronLeft className="h-5 w-5" />
              {language === 'lv' ? 'Iepriekšējais' : 'Previous'}
            </Button>
            
            <div className="text-center">
              <span className="text-sm text-muted-foreground">
                {currentEventIndex + 1} / {eventsData.length}
              </span>
            </div>

            <Button
              variant="outline"
              size="lg"
              onClick={nextEvent}
              className="flex items-center gap-2 bg-white/80 hover:bg-white border-blue-200"
            >
              {language === 'lv' ? 'Nākamais' : 'Next'}
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Event Card */}
          <Card className="overflow-hidden border-blue-200 hover:shadow-lg transition-shadow">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="relative">
                <img 
                  src={currentEvent.image} 
                  alt={currentEvent.title} 
                  className="object-cover w-full h-[400px] md:h-full" 
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm rounded-full">
                    {translateCategory(currentEvent.category)}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <div className="flex flex-col">
                <CardHeader>
                  <CardTitle className="text-2xl text-blue-900">
                    {currentEvent.title}
                  </CardTitle>
                  <CardDescription className="text-base">
                    {currentEvent.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex-grow flex flex-col justify-between">
                  <div className="space-y-4">
                    {/* Event Details */}
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Calendar className="h-4 w-4 text-blue-600" />
                        <span>{formatDate(currentEvent.date)}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className="h-4 w-4 text-blue-600" />
                        <span>{currentEvent.time}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="h-4 w-4 text-blue-600" />
                        <span>{currentEvent.location}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Euro className="h-4 w-4 text-blue-600" />
                        <span className="text-2xl font-bold text-blue-700">
                          €{currentEvent.price}
                        </span>
                        <span className="text-sm text-muted-foreground">
                          {language === 'lv' ? 'par personu' : 'per person'}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Book Button */}
                  <div className="mt-6">
                    <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                      {language === 'lv' ? 'Rezervēt vietu' : 'Book Now'}
                    </Button>
                  </div>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};
