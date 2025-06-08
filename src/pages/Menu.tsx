
import { Navigation } from "@/components/hotel/Navigation";
import { useLanguage } from "@/contexts/LanguageContext";

const Menu = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-amber-900">{t('menu.title')}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {t('menu.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Main Courses - Pork Dishes */}
          <section className="bg-white rounded-lg shadow-lg p-8 border border-amber-200">
            <h2 className="text-2xl font-bold text-amber-900 mb-6">OTRIE ĒDIENI / MAIN COURSE</h2>
            <h3 className="text-xl font-semibold text-amber-800 mb-4">Cūkgaļas ēdieni / Pork Dishes</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Cūkgaļas karbonāde / Pork Chop</h4>
                  <p className="text-sm text-muted-foreground">(pork, egg, flour)</p>
                </div>
                <span className="text-amber-700 font-semibold">€9.20</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Cūkgaļa Franču gaumē / French Pork Chop</h4>
                  <p className="text-sm text-muted-foreground">(pork, anchovy dressing, egg, flour, tomatoes, onions, herbs)</p>
                </div>
                <span className="text-amber-700 font-semibold">€12.00</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Ribinu medus glazūrā / Ribs in honey glaze</h4>
                  <p className="text-sm text-muted-foreground">(ribs, spices, honey, grain mustard)</p>
                </div>
                <span className="text-amber-700 font-semibold">€14.00</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Cūkgaļas sīpolnīcā / Pork in Onion Sauce</h4>
                  <p className="text-sm text-muted-foreground">(pork chops, sweet cream, onions, greens, spices, flour)</p>
                </div>
                <span className="text-amber-700 font-semibold">€10.00</span>
              </div>
            </div>
          </section>

          {/* Fish Dishes */}
          <section className="bg-white rounded-lg shadow-lg p-8 border border-amber-200">
            <h3 className="text-xl font-semibold text-amber-800 mb-4">Zivs ēdieni / Fish dishes</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Zivs fileja garnelēm un krējuma mērcē / Fish fillet in shrimp cream sauce</h4>
                  <p className="text-sm text-muted-foreground">(fish fillet, spices, small shrimp, garlic, sweet cream, flour)</p>
                </div>
                <span className="text-amber-700 font-semibold">€12.00</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Sviestā cepta varavīksnes forele / Rainbow trout fried in butter</h4>
                  <p className="text-sm text-muted-foreground">(whole trout, flour, butter, lemon juice, spices)</p>
                </div>
                <span className="text-amber-700 font-semibold">€14.00</span>
              </div>
            </div>
          </section>

          {/* Chicken Dishes */}
          <section className="bg-white rounded-lg shadow-lg p-8 border border-amber-200">
            <h3 className="text-xl font-semibold text-amber-800 mb-4">Vistas gaļas ēdieni / Chicken dishes</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Vistas filejas karbonāde ar sieru / Chicken Fillet Chop with cheese</h4>
                  <p className="text-sm text-muted-foreground">(chicken fillet, egg, flour, cheese, spices)</p>
                </div>
                <span className="text-amber-700 font-semibold">€11.00</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Vistas filejas gabaliņi ar čili un sezama sēklām / Chicken fillet pieces with chili and sesame seeds</h4>
                  <p className="text-sm text-muted-foreground">(chicken fillet pieces, sweet chili sauce, onions, sesame seeds, soy sauce, spices)</p>
                </div>
                <span className="text-amber-700 font-semibold">€9.80</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Vistas filejas kabatiņa ar fetas-zaļumu pildījumu / Chicken fillet pocket with feta-greens filling</h4>
                  <p className="text-sm text-muted-foreground">(chicken fillet, garlic, feta, greens, orange juice, spices)</p>
                </div>
                <span className="text-amber-700 font-semibold">€10.00</span>
              </div>
            </div>
          </section>

          {/* Burgers */}
          <section className="bg-white rounded-lg shadow-lg p-8 border border-amber-200">
            <h3 className="text-xl font-semibold text-amber-800 mb-4">Burgeri / Hamburgers</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Liellopu gaļas burgers / Beef burger</h4>
                  <p className="text-sm text-muted-foreground">(beef, tomato, pickles, red onion, lettuce, ranch dressing, cheese, bread)</p>
                </div>
                <span className="text-amber-700 font-semibold">€10.50</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Vistas gaļas burgers / Chicken burger</h4>
                  <p className="text-sm text-muted-foreground">(chicken fillet in breadcrumbs, egg, tomato, pickles, onion, lettuce, ranch dressing, cheese, bread)</p>
                </div>
                <span className="text-amber-700 font-semibold">€10.00</span>
              </div>
            </div>
          </section>

          {/* Pasta */}
          <section className="bg-white rounded-lg shadow-lg p-8 border border-amber-200">
            <h3 className="text-xl font-semibold text-amber-800 mb-4">Pasta / Pasta</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Pasta ar mazajām garnelēm un cieto sieru / Pasta with cocktail shrimp and hard cheese</h4>
                  <p className="text-sm text-muted-foreground">(pasta, sweet cream, hard cheese, garlic, small shrimp)</p>
                </div>
                <span className="text-amber-700 font-semibold">€9.50</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Pasta ar vistas gabaliem, saulē kaltētiem tomātiem un cieto sieru / Pasta with chicken pieces, sun-dried tomatoes and hard cheese</h4>
                  <p className="text-sm text-muted-foreground">(pasta, sweet cream, hard cheese, garlic, pieces of chicken fillet, sun-dried tomatoes)</p>
                </div>
                <span className="text-amber-700 font-semibold">€8.80</span>
              </div>
            </div>
          </section>

          {/* Desserts */}
          <section className="bg-white rounded-lg shadow-lg p-8 border border-amber-200">
            <h3 className="text-xl font-semibold text-amber-800 mb-4">DESERTI / DESSERTS</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Tiramisu / Tiramisu</h4>
                  <p className="text-sm text-muted-foreground">(ladyfingers, cream, mascarpone, other ingredients variable - ask the waiter)</p>
                </div>
                <span className="text-amber-700 font-semibold">€5.00</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Šokolādes suflē ar saldējumu / Chocolate souffle with ice-cream</h4>
                  <p className="text-sm text-muted-foreground">(chocolate, butter, eggs, cocoa, spices, ice-cream, flour)</p>
                </div>
                <span className="text-amber-700 font-semibold">€6.00</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Amerikāņu pankūkas ar zemenu mērci / American pancakes with strawberry sauce</h4>
                  <p className="text-sm text-muted-foreground">(flour, eggs, sugar, strawberry sauce, milk)</p>
                </div>
                <span className="text-amber-700 font-semibold">€5.50</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Klasiskā siera kūka ar zemenu mērci / Classic cheese cake with strawberry sauce</h4>
                  <p className="text-sm text-muted-foreground">(shortbread, eggs, fresh cheese, spices, strawberry)</p>
                </div>
                <span className="text-amber-700 font-semibold">€7.50</span>
              </div>
            </div>
          </section>

          {/* Beverages */}
          <section className="bg-white rounded-lg shadow-lg p-8 border border-amber-200">
            <h3 className="text-xl font-semibold text-amber-800 mb-4">DZĒRIENI / BEVERAGES</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-foreground mb-3">Cold Drinks</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Coca-cola / Fanta / Sprite</span>
                    <span className="text-amber-700">€2.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Mineral water (still/sparkling)</span>
                    <span className="text-amber-700">€1.50</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Juice (orange, peach, apple, etc.)</span>
                    <span className="text-amber-700">€2.50</span>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-medium text-foreground mb-3">Hot Drinks</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Coffee / Espresso</span>
                    <span className="text-amber-700">€2.00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Cappuccino / Latte</span>
                    <span className="text-amber-700">€2.50</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Tea / Hot chocolate</span>
                    <span className="text-amber-700">€2.00</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Kids Menu */}
          <section className="bg-white rounded-lg shadow-lg p-8 border border-amber-200">
            <h3 className="text-xl font-semibold text-amber-800 mb-4">PIEDĀVĀJUMS BĒRNIEM / OFFER FOR KIDS</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Frī un vistas gaļas naģeti ar svaigu tomātu un gurķi / Fries and chicken nuggets with tomato and cucumber</h4>
                </div>
                <span className="text-amber-700 font-semibold">€5.50</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Burgers ar frī kartupeļiem / Burger with french fries</h4>
                </div>
                <span className="text-amber-700 font-semibold">€7.50</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Makaroni ar sieru / Mac and cheese</h4>
                </div>
                <span className="text-amber-700 font-semibold">€4.20</span>
              </div>
            </div>
          </section>
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-muted-foreground mb-4">
            {t('menu.contact')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+37163207040" 
              className="inline-flex items-center justify-center px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
            >
              {t('menu.callRestaurant')}
            </a>
            <a 
              href="/contact" 
              className="inline-flex items-center justify-center px-6 py-3 border border-amber-600 text-amber-600 rounded-lg hover:bg-amber-50 transition-colors"
            >
              {t('menu.contactUs')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
