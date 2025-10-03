
import { Navigation } from "@/components/hotel/Navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { Link } from "react-router-dom";


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
          {/* Brokastis  */}
          <section className="bg-white rounded-lg shadow-lg p-8 border border-amber-200">
            <h2 className="text-2xl font-bold text-amber-900 mb-6">BROKASTIS / BREAKFAST</h2>
            <h3 className="text-xl font-semibold text-amber-800 mb-4">pieejamas līdz plkst. 11:30/available until 11:30</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Omlete ar sieru, svaigiem salātiem un grauzdētu maizi / <br></br> Omelette with cheese, fresh salad and toasted bread</h4>
                </div>
                <span className="text-amber-700 font-semibold">€8.00</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Brokastu plate - siers, gaļa, tomāts, gurķis, vārīta ola, grauzdēta maize, sviests, majonēze / <br /> Breakfast plate - cheese, meat, tomato, cucumber, boiled egg, toasted bread, butter, mayonnaise</h4>
                </div>
                <span className="text-amber-700 font-semibold">€10.00</span>
              </div>
            </div>
          </section>
           {/* Uzkodas */}
          <section className="bg-white rounded-lg shadow-lg p-8 border border-amber-200">
            <h2 className="text-2xl font-bold text-amber-900 mb-6">UZKODAS / APPETIZER</h2>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Grauzdiņi ar sieru un ķiploku-diļļu mērci / <br />Toasts with cheese and garlic-dill sauce</h4>
                  <p className="text-sm text-muted-foreground">(maize, ķiploks, siers, dilles, majonēze, krējums, garšvielas)</p>
                  <p className="text-sm text-muted-foreground">(bread, garlic, cheese, dill, mayonnaise, cream, spices)</p>
                </div>
                <span className="text-amber-700 font-semibold">€5.50</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Vistas žuljēns ar ceptiem ķirsu tomātiem / <br /> Chicken fillet with fried cherry tomatoes</h4>
                  <p className="text-sm text-muted-foreground">(vistas fileja, ķiploks, apelsīnu sula, garšvielas, saldais krējums, siers, balzamiko, tomāti)</p>
                  <p className="text-sm text-muted-foreground">(chicken fillet, garlic, orange juice, spices, sweet cream, cheese, balsamic, tomatoes)</p>
                </div>
                <span className="text-amber-700 font-semibold">€7.50</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Fritētā uzkodu plate / Deep-fried snack plate</h4>
                  <p className="text-sm text-muted-foreground">(sīpolu gredzeni, kalmāru gredzeni, pavasara rullīši ar dārzeņiem, mērce)</p>
                  <p className="text-sm text-muted-foreground">(onion rings, squid rings, spring rolls with vegetables, sauce)</p>
                </div>
                <span className="text-amber-700 font-semibold">4 uzkodas no katra veida / 4 from each type   €6.00 <br />  8 uzkodas no katra veida / 8 from each type   €10.00</span>
               
              </div>
            </div>
          </section>
          {/* Salāti */}
          <section className="bg-white rounded-lg shadow-lg p-8 border border-amber-200">
            <h3 className="text-xl font-semibold text-amber-800 mb-4">SALĀTI / SALADS</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Cēzara salāti ar vistu / Caesar Salad with Chicken</h4>
                  <p className="text-sm text-muted-foreground">(romiešu salāti, vistas gaļa, gurķis, ķiršu tomāti, cietais siers, grauzdiņi, salātu mērce, ķiploks, garšvielas)</p>
                  <p className="text-sm text-muted-foreground">(romaine lettuce, chicken, cucumber, cherry tomatoes, hard cheese, crisp croutons, salad dressing, garlic, spices)</p>
                </div>
                <span className="text-amber-700 font-semibold">€7.50</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Cēzara salāti ar mazajām garnelēm / Caesar salad with shrimps</h4>
                  <p className="text-sm text-muted-foreground">(romiešu salāti, mazās garneles, gurķis, ķiršu tomāti, cietais siers, grauzdiņi, salātu mērce, garšvielas)</p>
                  <p className="text-sm text-muted-foreground">(romaine lettuce, small shrimp, cucumber, cherry tomatoes, hard cheese, crisp croutons, salad dressing, spices)</p>
                </div>
                <span className="text-amber-700 font-semibold">€8.50</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Karstie vistas salāti ar medus-sinepju mērci / <br />Hot chicken salad with honey-mustard dressing</h4>
                  <p className="text-sm text-muted-foreground">(svaigie salāti, gurķis, tomāts, paprika, mērce, vistas fileja, sojas pupiņas)</p>
                  <p className="text-sm text-muted-foreground">(fresh salad, cucumber, tomato, paprika, sauce, chicken fillet, soybeans)</p>
                </div>
                <span className="text-amber-700 font-semibold">€7.00</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Salāti ar kūpinatu lasi, kraukšķīgu avokado un pikanto mērci / <br />Salad with smoked salmon, crispy avocado and spicy dressing</h4>
                  <p className="text-sm text-muted-foreground">(salātu mix, a/k lasis, vārīta ola, tomāti, gurķi, avokado kotlete, mērce)</p>
                  <p className="text-sm text-muted-foreground">(salad mix, smoked salmon, boiled egg, tomatoes, cucumbers, avocado cutlet, sauce)</p>
                </div>
                <span className="text-amber-700 font-semibold">€9.50</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Svaigie salāti ar plūmēm, pikantiem riekstiem un vītinātu cūkgaļas šķiņķi / <br />Fresh salad with plums, spicy nuts and cured pork ham</h4>
                  <p className="text-sm text-muted-foreground">(romiešu salāti, rukola, plūmes, tomāti, zaļumu pesto, riekstu maisījums, vītināta cūkgaļa)</p>
                  <p className="text-sm text-muted-foreground">(romaine lettuce, arugula, plums, tomatoes, green pesto, nut mix, cured pork)</p>
                </div>
                <span className="text-amber-700 font-semibold">€7.50</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Svaigie salāti ar plūmēm, pikantiem riekstiem un vegānisko sieru / <br />Fresh salad with plums, spicy nuts and vegan cheese</h4>
                  <p className="text-sm text-muted-foreground">(romiešu salāti, rukola, plūmes, tomāti, zaļumu pesto, riekstu maisījums, vegāniskais siers)</p>
                  <p className="text-sm text-muted-foreground">(romaine lettuce, arugula, plums, tomatoes, green pesto, nut mix, vegan cheese)</p>
                </div>
                <span className="text-amber-700 font-semibold">€6.50</span>
              </div>
            </div>
          </section>
          {/* Zupas */}
          <section className="bg-white rounded-lg shadow-lg p-8 border border-amber-200">
            <h3 className="text-xl font-semibold text-amber-800 mb-4">ZUPAS / SOUPS</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Garneļu-kokosriekstu piena zupa / Shrimp-coconut milk soup</h4>
                  <p className="text-sm text-muted-foreground">(garneles, kokosriekstu piens, dārzeņi, citronu sula, ķiploks, garšvielas)</p>
                  <p className="text-sm text-muted-foreground">(shrimps, coconut milk, vegetables, lemon juice, garlic, spices)</p>
                </div>
                <span className="text-amber-700 font-semibold">€6.80</span>
              </div>
            </div>
          </section>
          {/* Pasta */}
          <section className="bg-white rounded-lg shadow-lg p-8 border border-amber-200">
            <h3 className="text-xl font-semibold text-amber-800 mb-4">PANKŪKAS / PANCAKES</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Kartupeļu pankūkas ar svaigajiem salātiem, auksti kūpinātu lasi un kējumu / <br /> Potato pancakes with fresh salad, cold smoked salmon and sour cream</h4>
                  <p className="text-sm text-muted-foreground">(kartupeļi, ola, garšvielas, lapu salāti, dārzeņi, mērce, grauzdētas sēklas, auksti kūpināts lasis, krējums)</p>
                  <p className="text-sm text-muted-foreground">(potatoes, egg, spices, leafy salad, vegetables, sauce, roasted seeds, cold smoked salmon, sour cream)</p>
                </div>
                <span className="text-amber-700 font-semibold">€11.50</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Kartupeļu pankūkas ar svaigajiem salātiem un šampinjonu mērci / <br /> Potato pancakes with fresh salad and mushroom sauce</h4>
                  <p className="text-sm text-muted-foreground">(kartupeļi, ola, garšvielas, lapu salāti, dārzeņi, mērce, grauzdētas sēklas, šampinjoni, sīpoli, saldais krējums)</p>
                  <p className="text-sm text-muted-foreground">(potatoes, egg, spices, leafy salad, vegetables, sauce, roasted seeds, mushrooms, onions, sweet cream)</p>
                </div>
                <span className="text-amber-700 font-semibold">€9.50</span>
              </div>
            </div>
          </section>
          {/* Main Courses - Pork Dishes */}
          <section className="bg-white rounded-lg shadow-lg p-8 border border-amber-200">
            <h2 className="text-2xl font-bold text-amber-900 mb-6">OTRIE ĒDIENI / MAIN COURSE</h2>
            <h3 className="text-xl font-semibold text-amber-800 mb-4">Cūkgaļas ēdieni / Pork Dishes</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Cūkgaļas karbonāde / Pork Chop</h4>
                  <p className="text-sm text-muted-foreground">(cūkgaļa, ola, milti)</p>
                  <p className="text-sm text-muted-foreground">(pork, egg, flour)</p>
                </div>
                <span className="text-amber-700 font-semibold">€9.20</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Cūkgaļa Franču gaumē / French Pork Chop</h4>
                  <p className="text-sm text-muted-foreground">(cūkgaļa, rančo mērce, ola, milti, tomāti, sīpoli, siers)</p>
                  <p className="text-sm text-muted-foreground">(pork, ranch dressing, egg, flour, tomatoes, onions, cheese)</p>
                </div>
                <span className="text-amber-700 font-semibold">€12.00</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Ribiņas medus-sinepju glazūrā / Ribs in honey-mustard glaze</h4>
                  <p className="text-sm text-muted-foreground">(ribiņas, garšvielas, medus, graudu sinepes)</p>
                  <p className="text-sm text-muted-foreground">(ribs, spices, honey, grain mustard)</p>
                </div>
                <span className="text-amber-700 font-semibold">€14.00</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Cūkgaļas sitenis / Pork in Onion Sauce</h4>
                  <p className="text-sm text-muted-foreground">(cūkgaļas karbonāde, saldais krējums, sīpoli, zaļumi, garšvielas, milti)</p>
                  <p className="text-sm text-muted-foreground">(pork chop, sweet cream, onions, greens, spices, flour)</p>
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
                  <h4 className="font-medium text-foreground">Saidas fileja garneļu-krējuma mērcē / Saithe fillet in shrimp cream sauce</h4>
                  <p className="text-sm text-muted-foreground">(saidas fileja, garšvielas, mazas garneles, ķiploki, saldais krējums, citrons, milti)</p>
                  <p className="text-sm text-muted-foreground">(saithe fillet, spices, small shrimps, garlic, sweet cream, lemon, flour)</p>
                </div>
                <span className="text-amber-700 font-semibold">€14.50</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Butes fileja kraukšķīgā rīvmaizes panējumā / Flatfish fillet in crispy breadcrumbs</h4>
                  <p className="text-sm text-muted-foreground">(butes fileja, ola, rīvmaize, milti, citronu sula, garšvielas)</p>
                  <p className="text-sm text-muted-foreground">(flatfish fillet, egg, breadcrumbs, flour, lemon juice, spices)</p>
                </div>
                <span className="text-amber-700 font-semibold">€12.00</span>
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
                  <p className="text-sm text-muted-foreground">(vistas fileja, ola, milti, siers, garšvielas)</p>
                  <p className="text-sm text-muted-foreground">(chicken fillet, egg, flour, cheese, spices)</p>
                </div>
                <span className="text-amber-700 font-semibold">€11.00</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Vistas filejas gabaliņi ar čili un sezama sēklām / <br />Chicken fillet pieces with chili and sesame seeds</h4>
                  <p className="text-sm text-muted-foreground">(vistas gaļa, saldā čili mērce, sezama sēklas, sojas mērce, garšvielas)</p>
                  <p className="text-sm text-muted-foreground">(chicken, sweet chili sauce, sesame seeds, soy sauce, spices)</p>
                </div>
                <span className="text-amber-700 font-semibold">€9.80</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Vistas filejas kabatiņa ar fetas-zaļumu pildījumu / <br />Chicken fillet pocket with feta-greens filling</h4>
                  <p className="text-sm text-muted-foreground">(vistas fileja, ķiploki, feta, zaļumi, apelsīnu sula, garšvielas)</p>
                  <p className="text-sm text-muted-foreground">(chicken fillet, garlic, feta, greens, orange juice, spices)</p>
                  
                </div>
                <span className="text-amber-700 font-semibold">€10.00</span>
              </div>
            </div>
          </section>

          {/* Burgers */}
          <section className="bg-white rounded-lg shadow-lg p-8 border border-amber-200">
            <h3 className="text-xl font-semibold text-amber-800 mb-4">BURGERI / HAMBURGERS</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Liellopu gaļas burgers / Beef burger</h4>
                  <p className="text-sm text-muted-foreground">(liellopu gaļa, tomāts, marinēti gurķi, cepti sīpoli, salātlapa, rančo  mērce, siers, maize)</p>
                  <p className="text-sm text-muted-foreground">(beef, tomato, pickles, fried onions, lettuce, ranch dressing, cheese, bread)</p>
                </div>
                <span className="text-amber-700 font-semibold">€10.80</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Vistas gaļas burgers / Chicken burger</h4>
                  <p className="text-sm text-muted-foreground">(vistas fileja rīvmaizē, ola, tomāts, marinēti gurķi, sīpoli, salātlapa, rančo mērce, siers, maize)</p>
                  <p className="text-sm text-muted-foreground">(chicken fillet in breadcrumbs, egg, tomato, pickles, onion, lettuce, ranch dressing, cheese, bread)</p>
                </div>
                <span className="text-amber-700 font-semibold">€10.00</span>
              </div>
            </div>
          </section>

          {/* Pasta */}
          <section className="bg-white rounded-lg shadow-lg p-8 border border-amber-200">
            <h3 className="text-xl font-semibold text-amber-800 mb-4">PASTA / PASTA</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Pasta ar mazajām garnelēm un cieto sieru / Pasta with cocktail shrimp and hard cheese</h4>
                  <p className="text-sm text-muted-foreground">(pasta, saldais krējums, cietais siers, ķiploki, mazas garneles)</p>
                  <p className="text-sm text-muted-foreground">(pasta, sweet cream, hard cheese, garlic, small shrimp)</p>
                </div>
                <span className="text-amber-700 font-semibold">€9.80</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Pasta ar vistu, saulē kaltētiem tomātiem un cukini / Pasta with chicken, sun-dried tomatoes and zucchini</h4>
                  <p className="text-sm text-muted-foreground">(pasta, saldais krējums, cietais siers, ķiploki, vistas fileja, saulē kaltēti tomāti, cukini, apelsīnu sula)</p>
                  <p className="text-sm text-muted-foreground">(pasta, sweet cream, hard cheese, garlic, chicken fillet, sun-dried tomatoes, zucchini, orange juice)</p>
                </div>
                <span className="text-amber-700 font-semibold">€9.50</span>
              </div>
            </div>
          </section>
          {/* Kids Menu */}
          <section className="bg-white rounded-lg shadow-lg p-8 border border-amber-200">
            <h3 className="text-xl font-semibold text-amber-800 mb-4">PIEDĀVĀJUMS BĒRNIEM / OFFER FOR KIDS</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Frī un vistas gaļas naģeti ar svaigu tomātu un gurķi / <br />Fries and chicken nuggets with tomato and cucumber</h4>
                  <p className="text-sm text-muted-foreground">(frī kartupeļi, vistas gaļas naģeti, tomāts, gurķis, garšvielas)</p>
                  <p className="text-sm text-muted-foreground">(fries, chicken nuggets, tomato, cucumber, spices)</p>
                </div>
                <span className="text-amber-700 font-semibold">€5.50</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Burgers ar frī kartupeļiem / Burger with french fries</h4>
                  <p className="text-sm text-muted-foreground">(vistas fileja rīvmaizē, ola , salātlapa, siers, marinēti gurķi, frī kartupeļi)</p>
                  <p className="text-sm text-muted-foreground">(chicken fillet in breadcrumbs, egg, lettuce, cheese, pickles, fries)</p>
                </div>
                <span className="text-amber-700 font-semibold">€7.50</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Makaroni ar vistas karija mērci / Pasta with chicken curry sauce</h4>
                  <p className="text-sm text-muted-foreground">(pasta, vista, saldais krējums, karijs, garšvielas)</p>
                  <p className="text-sm text-muted-foreground">(pasta, chicken, sweet cream, curry, spices)</p>
                </div>
                <span className="text-amber-700 font-semibold">€5.00</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Amerikāņu pankūciņas ar šokolādes mērci un mazajiem zefīriņiem / <br /> American pancakes with chocolate sauce and mini marshmallows</h4>
                  <p className="text-sm text-muted-foreground">(milti, olas, cukurs, šokolādes mērce, piens, zefīriņi)</p>
                  <p className="text-sm text-muted-foreground">(flour, eggs, sugar, chocolate sauce, milk, marshmallows)</p>
                </div>
                <span className="text-amber-700 font-semibold">€4.20</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Frī kartupeļi / French fries</h4>
                  <p className="text-sm text-muted-foreground">(frī kartupeļi, garšvielas)</p>
                  <p className="text-sm text-muted-foreground">(french fries, spices)</p>
                </div>
                <span className="text-amber-700 font-semibold">€2.00</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Smurfu limonāde / Smurf lemonade</h4>
                </div>
                <span className="text-amber-700 font-semibold">€4.00</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Piparmētru mohito / Mint mojito</h4>
                </div>
                <span className="text-amber-700 font-semibold">€4.50</span>
              </div>
            </div>
          </section>

          {/* Desserts */}
          <section className="bg-white rounded-lg shadow-lg p-8 border border-amber-200">
            <h3 className="text-xl font-semibold text-amber-800 mb-4">DESERTI / DESSERTS</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Šokolādes suflē ar saldējumu / <br />Chocolate souffle with ice-cream</h4>
                  <p className="text-sm text-muted-foreground">(šokolāde, sviests, olas, kakao, garšvielas, saldējums, milti)</p>
                  <p className="text-sm text-muted-foreground">(chocolate, butter, eggs, cocoa, spices, ice-cream, flour)</p>
                </div>
                <span className="text-amber-700 font-semibold">€6.00</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Amerikāņu pankūkas ar zemenu mērci / <br />American pancakes with strawberry sauce</h4>
                  <p className="text-sm text-muted-foreground">(milti, olas, cukurs, zemeņu mērce, piens)</p>
                  <p className="text-sm text-muted-foreground">(flour, eggs, sugar, strawberry sauce, milk)</p>
                </div>
                <span className="text-amber-700 font-semibold">€6.50</span>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Saldējuma kokteilis / Milkshake</h4>
                  <p className="text-sm text-muted-foreground">(saldējums, persiku vai plūmju sula)</p>
                  <p className="text-sm text-muted-foreground">(ice-cream, peach or plum juice)</p>
                </div>
                <span className="text-amber-700 font-semibold">220ml   €4.00 <br />  440ml   €5.00</span>
              </div> 
            </div>
          </section>
          {/* Piedevas */}
          <section className="bg-white rounded-lg shadow-lg p-8 border border-amber-200">
            <h3 className="text-xl font-semibold text-amber-800 mb-4">PIEDEVAS / SIDE DISHES</h3>
            <h4 className="font-medium text-amber-800">(Piedevas iekļatas cenā / Side dishes are included in the price)</h4>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Vārīti kartupeļi / Boiled potatoes</h4>
                  <h4 className="font-medium text-foreground">Frī kartupeļi / French fries</h4>
                  <h4 className="font-medium text-foreground">Kartupeļu daiviņas / Potato wedges</h4>
                  <h4 className="font-medium text-foreground">Rīsi / Rice</h4>
                  <h4 className="font-medium text-foreground">Sautēti dārzeņi / Steamed vegetables</h4>
                  <h4 className="font-medium text-foreground">Dubultie salāti / Double salad</h4>

                </div>
                <span className="text-amber-700 font-semibold"><br /><br /><br /><br />€2.00 <br />€1.50</span>
              </div>
             
            </div>
          </section>
          {/* Mērces */}
          <section className="bg-white rounded-lg shadow-lg p-8 border border-amber-200">
            <h3 className="text-xl font-semibold text-amber-800 mb-4">MĒRCE / SAUCES</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Kečups / Ketchup</h4>
                  <h4 className="font-medium text-foreground">Majonēze / Mayonnaise</h4>
                  <h4 className="font-medium text-foreground">Krējums / Sour cream</h4>
                  <h4 className="font-medium text-foreground">Ķiploku mērce / Garlic sauce</h4>
                  <h4 className="font-medium text-foreground">BBQ mērce / BBQ sauce</h4>
                  <h4 className="font-medium text-foreground">Saldā čili mērce / Sweet chili sauce</h4>
                  <h4 className="font-medium text-foreground">Siltā mērce / Warm sauce</h4>
                  <h4 className="font-medium text-foreground">Šampinjonu mērce / Champignon sauce</h4>

                </div>
                <span className="text-amber-700 font-semibold">€0.70 <br />€0.70 <br />€0.70 <br />€1.00 <br />€1.00 <br />€1.00 <br />€1.20 <br />€1.80</span>
              </div>
             
            </div>
          </section>

          {/* Beverages */}
          <section className="bg-white rounded-lg shadow-lg p-8 border border-amber-200">
            <h3 className="text-xl font-semibold text-amber-800 mb-4">DZĒRIENI / BEVERAGES</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Coca-cola / Coca-cola Zero</h4>
                  <h4 className="font-medium text-foreground">Fanta</h4>
                  <h4 className="font-medium text-foreground">Sprite</h4>
                  <h4 className="font-medium text-foreground">Schweppes</h4>
                  <h4 className="font-medium text-foreground">Iļģuciema orģinālais kvass / Iļģuciema original kvass</h4>
                  <h4 className="font-medium text-foreground">Lejamais kvasa dzēriens / Draft kvass</h4>
                  <br />
                  <h4 className="font-medium text-foreground">Minerālūdens gāzēts/negāzēts / Sparkling/Still water</h4>
                  <h4 className="font-medium text-foreground">Ūdens karafē ar citronu / Water carafe with lemon</h4>
                  <h4 className="font-medium text-foreground">Sula / Juice</h4>
                  <p className="text-sm text-muted-foreground">(apelsīnu, persiku, multiaugļu, ābolu vīnogu, tomātu / orange, peach, multi-fruit, apple, grape, tomato)</p>
                  <h4 className="font-medium text-foreground">Piens / Milk</h4>
                  <h4 className="font-medium text-foreground">Kefīrs / Kefir</h4>
                  <h4 className="font-medium text-foreground">Pikantais kefīrs / Spicy kefir</h4>

                </div>
                <span className="text-amber-700 font-semibold">€2.50 <br />€2.50 <br />€2.50 <br />€2.50 <br />€2.50 <br />300ml €2.00 <br />500ml €2.50 <br />€1.80 <br />€2.50 <br />€1.50 <br /><br />€1.00 <br />€1.00 <br />€1.50</span>
              </div>
             
            </div>
          </section>
          {/* Karstie dzērieni */}
          <section className="bg-white rounded-lg shadow-lg p-8 border border-amber-200">
            <h3 className="text-xl font-semibold text-amber-800 mb-4">KARSTIE DZĒRIENI / HOT DRINKS</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Kafija / Coffee</h4>
                  <h4 className="font-medium text-foreground">Kafija ar pienu / Coffee with milk</h4>
                  <h4 className="font-medium text-foreground">Espresso</h4>
                  <h4 className="font-medium text-foreground">Double Espresso</h4>
                  <h4 className="font-medium text-foreground">Cappuccino</h4>
                  <h4 className="font-medium text-foreground">Caffe Latte</h4>
                  <h4 className="font-medium text-foreground">Karstā šokolāde / Hot chocolate</h4>
                  <h4 className="font-medium text-foreground">Tēja / Tea</h4>

                </div>
                <span className="text-amber-700 font-semibold">€2.50 <br />€3.00 <br />€2.00 <br />€4.00 <br />€3.00 <br />€3.50 <br />€3.00 <br />€1.50</span>
              </div>
             
            </div>
          </section>
          {/* Sīrupi */}
          <section className="bg-white rounded-lg shadow-lg p-8 border border-amber-200">
            <h3 className="text-xl font-semibold text-amber-800 mb-4">SĪRUPI / SYRUPS</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium text-foreground">Lazdu riekstu / Hazelnut</h4>
                  <h4 className="font-medium text-foreground">Karameļu / Caramel</h4>

                </div>
                <span className="text-amber-700 font-semibold">€0.30 <br />€0.30</span>
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
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 border border-amber-600 text-amber-600 rounded-lg hover:bg-amber-50 transition-colors"
            >
              {t('menu.contactUs')}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
