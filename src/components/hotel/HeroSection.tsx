
import { Button } from "@/components/ui/button";
import { hotelData } from "@/models/hotelModel";

export const HeroSection = () => {
  const bookingLink = "https://www.booking.com/hotel/lv/viesnica-kandava.lv.html?aid=347181&sid=f1ceadeecc09feb1b4383ff863772be3&dest_id=-3209286&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1749292056&srpvid=f10c49f942a907d2&type=total&ucfs=1&activeTab=main#RD1058138101";

  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/lovable-uploads/c595f550-7634-4f25-bcfd-f70b07702255.png')"
        }}
      >
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Hotel Logo */}
      <div className="absolute top-8 left-8 z-20">
        <img 
          src="/lovable-uploads/hotel-logo.png" 
          alt="Viesnīca Kandava Logo" 
          className="h-16 md:h-20 w-auto"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow-lg">
            Welcome to {hotelData.name}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            {hotelData.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              asChild 
              className="bg-amber-600 hover:bg-amber-700 text-white border-none"
            >
              <a href={bookingLink} target="_blank" rel="noopener noreferrer">
                Book Your Stay
              </a>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-white text-white hover:bg-white hover:text-amber-900">
              <a href="#rooms">View Rooms</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
