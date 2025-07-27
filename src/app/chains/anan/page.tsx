import { Metadata } from 'next';
import Link from 'next/link';
import ChainViewTracker from '@/components/ChainViewTracker';

export const metadata: Metadata = {
  title: "Anan 螳牙ｮ・| Yakiniku Shichirin | JapanChains",
  description: "Affordable charcoal Yakiniku. Menu, prices, tips to enjoy this popular chain.",
  keywords: "Anan, 螳牙ｮ・ 荳・ｼｪ辟ｼ閧・ affordable yakiniku, Japanese barbecue, charcoal, shichirin, Japanese restaurant",
  openGraph: {
    title: "Anan 螳牙ｮ・| Yakiniku Shichirin | JapanChains",
    description: "Affordable charcoal Yakiniku. Menu, prices, tips to enjoy this popular chain.",
    type: "article",
    locale: "en_US",
    siteName: "JapanChains - Your Guide to Japanese Restaurants"
  },
  alternates: {
    canonical: "/chains/anan"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function AnanPage() {
  const menuItems = [
    {
      category: "Expert Selection",
      items: [
        { name: "Classic Kalbi", price: "ﾂ･480", description: "Beef ribs - 'bui-wake' cut respecting each muscle, 3-generation tare sauce" },
        { name: "Premium Harami", price: "ﾂ･580", description: "Skirt steak - Popularity champion, perfect balance of red meat/internal fat" },
        { name: "Salted Tongue", price: "ﾂ･680", description: "Beef tongue - Yakiniku opening ritual, 'ichido-gaeshi' cooking recommended" },
        { name: "Sankaku-bara", price: "ﾂ･880", description: "Triangle short plate - 'King of kalbi', triangular cut 1st-6th rib, rare knowledge" }
      ]
    },
    {
      category: "Hormone Exploration",
      items: [
        { name: "Marucho Mix", price: "ﾂ･580", description: "Assortment of offal - From 'hﾅ荒umon' (謾ｾ繧九ｂ繧・= discarded) to delicacy, Mottainai philosophy" },
        { name: "Shimacho", price: "ﾂ･480", description: "Large intestine - Unique texture, controlled cooking to reveal natural juices" },
        { name: "Mino", price: "ﾂ･380", description: "First stomach - Firm texture, perfect introduction to the world of offal" },
        { name: "Hatsu", price: "ﾂ･420", description: "Beef heart - Pure muscle, authentic taste without artifice" }
      ]
    },
    {
      category: "Discovery Sets",
      items: [
        { name: "Tabehﾅ硬ai Initiation", price: "ﾂ･1,980", description: "12 beef parts + vegetables + hormone discovery - 90 minutes of exploration" },
        { name: "Tabehﾅ硬ai Connoisseur", price: "ﾂ･2,980", description: "25 parts including rare cuts + drinks + integrated tasting guide" },
        { name: "Traditional Lunch", price: "ﾂ･1,480", description: "Midday discovery menu - 6 essential cuts + introduction to tare sauces" },
        { name: "Family Course", price: "ﾂ･980", description: "Children 12 years - Fun introduction to yakiniku + Japanese dessert" }
      ]
    },
    {
      category: "Expert Accompaniments",
      items: [
        { name: "Seasonal Yasai", price: "ﾂ･480", description: "Seasonal vegetables - Taste balance, palate cleansing between pieces" },
        { name: "Artisanal Kimchi", price: "ﾂ･380", description: "Homemade fermented cabbage - Probiotics, aids fat digestion, millennial tradition" },
        { name: "Namul Trio", price: "ﾂ･450", description: "Korean marinated vegetables - Spinach, bean sprouts, radish, traditional preparation" },
        { name: "Kombu Dashi", price: "ﾂ･280", description: "Seaweed broth - Palate cleansing, natural umami, traditional end to the meal" }
      ]
    }
  ];

  const orderingSteps = [
    {
      step: "1. Setup Ritual",
      description: "Table with authentic shichirin (荳・ｼｪ) - traditional binchotan charcoal",
      tip: "Respect the 5-8 minutes heating time - perfect charcoal reveals its orange embers"
    },
    {
      step: "2. Ordering Strategy",
      description: "Educational menu with beef anatomy - start with progression 'tongue 竊・skirt steak 竊・kalbi'",
      tip: "Expert order: delicate parts first, rich fats at the end to protect taste buds"
    },
    {
      step: "3. Cooking Mastery",
      description: "'Ichido-gaeshi' technique - flip only once, observe the juices rising",
      tip: "Red meats: 80% surface, Offal: sear skin first, inside just warm"
    },
    {
      step: "4. Yakiniku Etiquette",
      description: "Community service - grill for others, separate tongs for raw/cooked",
      tip: "Anan cultivates a popular spirit: assumed relaxation, learning by experience"
    }
  ];

  const specialties = [
    {
      name: "櫨 Hﾃｩritage Shichirin Populaire",
      description: "Cuisson charbon binchotan - Dﾃｩmocratisation de l'art traditionnel 荳・ｼｪ, flamme infrarouge sublimant les fibres",
      cultural: "Anan prﾃｩserve l'ﾃ｢me yakiniku : le shichirin dﾃｩmocratisﾃｩ sans compromise sur l'authenticitﾃｩ technique"
    },
    {
      name: "･ｩ ﾃ営ole de Dﾃｩcoupe Accessible",
      description: "Application 'bui-wake' (驛ｨ菴榊・縺・ 50+ parties d'une carcasse - Anatomie bovine enseignﾃｩe par l'assiette",
      cultural: "Rﾃｩvolution Anan : rendre l'expertise des maﾃｮtres bouchers accessible au grand public japonais"
    },
    {
      name: "・ｽ Trilogie Tare Hﾃｩritﾃｩe",
      description: "Sauces signature 3 ﾃｩcoles : Soja (viandes riches), Miso (abats complexes), Sel (parties dﾃｩlicates)",
      cultural: "30 ans d'adaptation corﾃｩenne au palais japonais - alchimie des saveurs transmise par gﾃｩnﾃｩrations"
    },
    {
      name: "笙ｻ・・Philosophie Mottainai Appliquﾃｩe",
      description: "De 'hﾅ荒umon' (謾ｾ繧九ｂ繧・= jetﾃｩ) ﾃ dﾃｩlicatesse - Transformation complﾃｨte de chaque partie bovine",
      cultural: "Esprit anti-gaspillage japonais : chaque muscle, chaque abat devient expﾃｩrience gustative recherchﾃｩe"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ChainViewTracker chainName="anan" chainCategory="yakiniku" />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-red-600">Home</Link>
            <span className="text-gray-400 mx-2">/</span>
            <Link href="/dish-types/yakiniku" className="text-gray-500 hover:text-red-600">Yakiniku</Link>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-red-600 font-medium">Anan</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-orange-800 via-red-700 to-yellow-600 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <span className="text-6xl mr-4">櫨</span>
            <span className="text-6xl mr-4">獄</span>
            <span className="text-6xl">尚</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Anan
          </h1>
          <p className="text-2xl mb-4 text-orange-100 japanese-text">荳・ｼｪ辟ｼ閧・螳牙ｮ・/p>
          <p className="text-xl mb-8 text-orange-100">
            Affordable Yakiniku - Authentic Charcoal Grill
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">螳峨￥縺ｦ譌ｨ縺・- Cheap and Delicious</h2>
            <p className="text-lg text-orange-200">
              Since its inception, Anan has revolutionized yakiniku by offering the true 
              charcoal grill experience at accessible prices, making this culinary tradition 
              available for all budgets.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-semibold">
              Affordable Prices
            </span>
            <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-semibold">
              Authentic Charcoal
            </span>
            <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold">
              Popular Atmosphere
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
              All-You-Can-Eat Options
            </span>
          </div>
        </div>
      </section>

      {/* Navigation rapide */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto py-4">
            <a href="#menu" className="text-gray-600 hover:text-red-600 whitespace-nowrap font-medium">Menu & Prices</a>
            <a href="#ordering" className="text-gray-600 hover:text-red-600 whitespace-nowrap font-medium">How to Order</a>
            <a href="#specialties" className="text-gray-600 hover:text-red-600 whitespace-nowrap font-medium">Specialties</a>
            <a href="#culture" className="text-gray-600 hover:text-red-600 whitespace-nowrap font-medium">Culture & History</a>
            <a href="#tips" className="text-gray-600 hover:text-red-600 whitespace-nowrap font-medium">Practical Tips</a>
          </div>
        </div>
      </section>

      {/* Section Menu */}
      <section id="menu" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            獄 Anan Menu & Prices
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {menuItems.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  {category.category}
                </h3>
                <div className="space-y-4">
                  {category.items.map((item, i) => (
                    <div key={i} className="flex justify-between items-start pb-2 border-b border-orange-100 last:border-b-0">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{item.name}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                      <span className="text-red-600 font-bold text-lg ml-4">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Comment Commander */}
      <section id="commander" className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            搭 How to Order at Anan
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {orderingSteps.map((step, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-red-600 mb-3">{step.step}</h3>
                  <p className="text-gray-700 mb-3">{step.description}</p>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <p className="text-sm text-orange-800">
                      <strong>庁 Conseil :</strong> {step.tip}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm h-fit">
              <h3 className="text-xl font-bold text-gray-900 mb-4">識 Tips for Beginners</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2">窶｢</span>
                  <span><strong>Opt for the buffet</strong> if it's your first time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2">窶｢</span>
                  <span><strong>Charcoal takes time</strong> - order vegetables first</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2">窶｢</span>
                  <span><strong>Grill in small quantities</strong> to avoid overcooking</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2">窶｢</span>
                  <span><strong>The atmosphere is casual</strong> - relax!</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section Spﾃｩcialitﾃｩs */}
      <section id="specialites" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            箝・Anan Specialties
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {specialties.map((specialty, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{specialty.name}</h3>
                <p className="text-gray-700 mb-4">{specialty.description}</p>
                <div className="bg-white/50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">
                    <strong>尚 Contexte culturel :</strong> {specialty.cultural}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Culture & Histoire */}
      <section id="culture" className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            尚 Anan History & Culture
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">套 History</h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <strong className="text-red-600">Foundation:</strong> Crﾃｩation par la sociﾃｩtﾃｩ Fuji Tatsu avec la vision yakiniku accessible
                </div>
                <div>
                  <strong className="text-red-600">Concept:</strong> "螳峨￥縺ｦ譌ｨ縺・ (Yasukute Umai) - bon marchﾃｩ et dﾃｩlicieux
                </div>
                <div>
                  <strong className="text-red-600">Expansion:</strong> Dﾃｩveloppement national avec focus sur l'accessibilitﾃｩ
                </div>
                <div>
                  <strong className="text-red-600">Innovation:</strong> Dﾃｩmocratisation du yakiniku traditionnel au charbon
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">識 Anan Philosophy</h3>
              <ul className="space-y-3 text-gray-700">
                <li>
                  <strong className="text-red-600">窶｢ Accessibility:</strong> Yakiniku de qualitﾃｩ pour tous les budgets
                </li>
                <li>
                  <strong className="text-red-600">窶｢ Authentic:</strong> Cuisson traditionnelle au charbon de bois
                </li>
                <li>
                  <strong className="text-red-600">窶｢ Conviviality:</strong> Ambiance dﾃｩcontractﾃｩe et familiale
                </li>
                <li>
                  <strong className="text-red-600">窶｢ Quality:</strong> Sourcing international pour le meilleur rapport qualitﾃｩ-prix
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section Conseils Pratiques */}
      <section id="conseils" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            庁 Practical Tips
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">武 Optimal Timing</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>窶｢ <strong>Lunch:</strong> 11:30 AM - 2:00 PM, economical sets</li>
                <li>窶｢ <strong>Dinner:</strong> 5:30 PM - 10:00 PM, lively atmosphere</li>
                <li>窶｢ <strong>Weekend:</strong> Moderate crowds, more relaxed</li>
                <li>窶｢ <strong>Duration:</strong> Allow 60-90 minutes minimum</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">諜 Budget & Payment</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>窶｢ <strong>A la carte:</strong> ﾂ･1,500-2,500/person</li>
                <li>窶｢ <strong>Buffet:</strong> ﾂ･1,980-2,980/person</li>
                <li>窶｢ <strong>Payment:</strong> Cash primarily</li>
                <li>窶｢ <strong>Drinks:</strong> Additional budget ﾂ･500-1,500</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">鎖・・Yakiniku Etiquette</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>窶｢ <strong>Charcoal:</strong> Wait until it's glowing red</li>
                <li>窶｢ <strong>Sharing:</strong> Grilling for others is polite</li>
                <li>窶｢ <strong>Tongs:</strong> Separate raw and cooked</li>
                <li>窶｢ <strong>Atmosphere:</strong> More casual than high-end yakiniku</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation vers autres chaﾃｮnes */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Discover other experiences
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/dish-types/yakiniku" className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
              竊・Back to Yakiniku
            </Link>
            <Link href="/chains/gyukaku" className="bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-colors">
              Discover Gyukaku
            </Link>
            <Link href="/chains" className="bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-colors">
              All Chains
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}



