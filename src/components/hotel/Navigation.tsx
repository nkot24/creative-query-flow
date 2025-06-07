
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Rooms", path: "/rooms" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-card/95 backdrop-blur-sm border-b border-amber-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-xl font-bold text-amber-800 hover:text-amber-900 transition-colors">
            Viesnīca Kandava
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
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
            <Button asChild className="bg-amber-600 hover:bg-amber-700">
              <Link to="/booking">Book Now</Link>
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
              <Button asChild className="w-full mt-4 bg-amber-600 hover:bg-amber-700">
                <Link to="/booking" onClick={() => setIsOpen(false)}>Book Now</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
