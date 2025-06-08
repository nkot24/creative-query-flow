
import { Navigation } from "@/components/hotel/Navigation";

const Menu = () => {
  // For now, we'll use placeholder images - you can replace these with your actual menu images
  const menuImages = [
    "/lovable-uploads/597f0a1b-1d52-415a-b88b-582f52262c89.png",
    "/lovable-uploads/food-menu.png",
    // Add more menu image paths as you upload them
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-amber-900">Restaurant Menu</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our delicious selection of local and international cuisine
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {menuImages.map((image, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border border-amber-200">
              <img 
                src={image}
                alt={`Menu page ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-4">
            For reservations and special dietary requirements, please contact us
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+37163207040" 
              className="inline-flex items-center justify-center px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
            >
              Call Restaurant
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 border border-amber-600 text-amber-600 rounded-lg hover:bg-amber-50 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
