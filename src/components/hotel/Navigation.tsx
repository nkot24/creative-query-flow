
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Languages } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();
  const bookingLink = "https://www.booking.com/hotel/lv/viesnica-kandava.lv.html?aid=347181&sid=f1ceadeecc09feb1b4383ff863772be3&dest_id=-3209286&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&hpos=1&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&srepoch=1749292056&srpvid=f10c49f942a907d2&type=total&ucfs=1&activeTab=main#RD1058138101";

  const navItems = [
    { name: t('nav.home'), path: "/" },
    { name: t('nav.rooms'), path: "/rooms" },
    { name: t('nav.menu'), path: "/menu" },
    { name: t('nav.about'), path: "/about" },
    { name: t('nav.contact'), path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-card/95 backdrop-blur-sm border-b border-amber-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <img 
              src="/lovable-uploads/19124d70-e714-490d-9025-e31276cbf111.png" 
              alt="Kandava Viesnīca Logo" 
              className="h-10 w-auto"
            />
            <span className="text-xl font-bold text-amber-800 hover:text-amber-900 transition-colors">
              Viesnīca Kandava
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex space-x-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-sm font-medium transition-colors hover:text-amber-700 ${
                    isActive(item.path) ? "text-amber-700" : "text-amber-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            {/* Language Toggle */}
            <div className="flex items-center gap-1 bg-white rounded-lg shadow-sm p-1 border border-amber-200">
              <Languages className="h-4 w-4 text-amber-700 ml-2" />
              <Button
                variant={language === 'en' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setLanguage('en')}
                className={`h-7 px-2 text-xs ${language === 'en' ? 'bg-amber-600 hover:bg-amber-700' : 'hover:bg-amber-50'}`}
              >
                EN
              </Button>
              <Button
                variant={language === 'lv' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setLanguage('lv')}
                className={`h-7 px-2 text-xs ${language === 'lv' ? 'bg-amber-600 hover:bg-amber-700' : 'hover:bg-amber-50'}`}
              >
                LV
              </Button>
            </div>
            
            <Button asChild className="bg-amber-600 hover:bg-amber-700">
              <a href={bookingLink} target="_blank" rel="noopener noreferrer">
                {t('nav.bookNow')}
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden hover:bg-amber-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-5 w-5 text-amber-700" /> : <Menu className="h-5 w-5 text-amber-700" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-amber-200">
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-2 py-2 text-sm font-medium transition-colors hover:text-amber-700 ${
                    isActive(item.path) ? "text-amber-700" : "text-amber-600"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile Language Toggle */}
              <div className="flex items-center gap-2 px-2 py-2">
                <Languages className="h-4 w-4 text-amber-700" />
                <Button
                  variant={language === 'en' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setLanguage('en')}
                  className={`h-7 px-3 text-xs ${language === 'en' ? 'bg-amber-600 hover:bg-amber-700' : 'hover:bg-amber-50'}`}
                >
                  EN
                </Button>
                <Button
                  variant={language === 'lv' ? 'default' : 'ghost'}
                  size="sm"
                  onClick={() => setLanguage('lv')}
                  className={`h-7 px-3 text-xs ${language === 'lv' ? 'bg-amber-600 hover:bg-amber-700' : 'hover:bg-amber-50'}`}
                >
                  LV
                </Button>
              </div>
              
              <Button asChild className="w-full mt-4 bg-amber-600 hover:bg-amber-700">
                <a href={bookingLink} target="_blank" rel="noopener noreferrer" onClick={() => setIsOpen(false)}>
                  {t('nav.bookNow')}
                </a>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
