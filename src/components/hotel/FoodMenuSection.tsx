
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useLanguage } from "@/contexts/LanguageContext";

export const FoodMenuSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-16 bg-gradient-to-b from-orange-50/20 to-amber-50/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-amber-900">{t('home.food.title')}</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('home.food.subtitle')}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-amber-200 mb-8">
            <img 
              src="/lovable-uploads/9b6752cc-f06c-4795-9e6c-3b15a38b8b6a.png" 
              alt="Hotel Restaurant Interior" 
              className="w-full h-auto"
            />
          </div>
          
          <div className="text-center">
            <Button asChild size="lg" className="bg-amber-600 hover:bg-amber-700">
              <Link to="/menu">{t('home.food.viewMenu')}</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
