import Link from "next/link";
import Image from "next/image";
import CategoryViewTracker from '../../components/CategoryViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "16 Types of Japanese Cuisine | Guide | JapanChains",
  description: "Explore 16 cuisines: ramen, sushi, yakiniku. Specialties and best chains.",
  keywords: [
    'japanese cuisine', 'japan restaurant types',
    'gyudon', 'ramen', 'sushi', 'japanese curry',
    'tempura', 'udon', 'soba', 'yakiniku',
    'izakaya', 'teishoku', 'family restaurant',
    'japan travel guide', 'japanese restaurants'
  ],
  openGraph: {
    title: "16 Types of Japanese Cuisine | Guide | JapanChains",
    description: "Explore 16 cuisines: ramen, sushi, yakiniku. Specialties and best chains.",
    type: 'website',
    locale: "en_US",
    siteName: "JapanChains - Japanese Restaurant Guide"
  },
  alternates: {
    canonical: '/type-plat',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TypePlatPage() {
  // Function to get the correct link for each dish type
  const getImplementationPath = (id: string) => {
    const implementedPages: { [key: string]: string } = {
      'gyudon': '/type-plat/gyudon',
      'ramen': '/type-plat/ramen', 
      'aburasoba': '/type-plat/aburasoba',
      'kaiten-zushi': '/type-plat/kaiten-zushi',
      'curry': '/type-plat/curry',
      'tempura': '/type-plat/tempura',
      'udon': '/type-plat/udon',
      'soba': '/type-plat/soba',
      'family-restaurants': '/type-plat/family-restaurants',
      'burgers': '/type-plat/burgers',
      'cuisine-chinoise': '/type-plat/cuisine-chinoise',
      'izakaya': '/type-plat/izakaya',
      'teishoku': '/type-plat/teishoku',
      'cafe': '/type-plat/cafe',
      'okonomiyaki': '/type-plat/okonomiyaki',
      'street-food': '/type-plat/street-food',
      'steak': '/type-plat/steak',
      'yakiniku': '/type-plat/yakiniku',
      'karaoke': '/type-plat/karaoke'
    };
    
    return implementedPages[id] || `/type-plat/${id}`;
  };

  // Function to check if a page is implemented
  const isImplemented = (id: string) => {
    const implementedIds = ['gyudon', 'ramen', 'aburasoba', 'kaiten-zushi', 'curry', 'tempura', 'udon', 'soba', 'family-restaurants', 'burgers', 'cuisine-chinoise', 'izakaya', 'teishoku', 'cafe', 'okonomiyaki', 'street-food', 'steak', 'yakiniku', 'karaoke'];
    return implementedIds.includes(id);
  };

  const cuisineTypes = [
    {
      id: "gyudon",
      name: "Gyūdon",
      japanese: "牛丼",
      description: "Rice bowls topped with sliced beef simmered in sweet-savory sauce",
      detailedDescription: "Gyūdon are bowls of white rice topped with thin slices of beef cooked in a sweet broth made with soy sauce, mirin and sugar. It's a quick, economical and nourishing dish, very popular in Japan.",
      chains: ["Yoshinoya", "Sukiya", "Matsuya"],
      color: "bg-red-500",
      icon: "🥩"
    },
    {
      id: "ramen",
      name: "Ramen",
      japanese: "ラーメン",
      description: "Japanese noodles served in rich broth with various toppings",
      detailedDescription: "Ramen are wheat noodles served in hot broth, garnished with pork, vegetables, eggs and other ingredients. Each region and chain has its own variations of broth and toppings.",
      chains: ["Ichiran", "Ippudo", "Tenkaippin"],
      color: "bg-orange-500",
      icon: "🍜",
      bgImage: "/images/chaines/ippudo/shiromaru-motoaji.jpg"
    },
    {
      id: "aburasoba",
      name: "Abura Soba",
      japanese: "油そば",
      description: "Brothless noodles mixed with concentrated sauce and flavored oil",
      detailedDescription: "Abura soba is a Tokyo specialty born in the 1950s. Paradoxically healthier than regular ramen, this dish transforms the diner into a chef who mixes the ingredients themselves.",
      chains: ["Tokyo Abura-gumi", "Ganso Aburado"],
      color: "bg-amber-500",
      icon: "🍜"
    },
    {
      id: "kaiten-zushi",
      name: "Kaiten-zushi",
      japanese: "回転寿司",
      description: "Sushi served on a conveyor belt, accessible and affordable",
      detailedDescription: "Kaiten-zushi restaurants offer sushi on a conveyor belt. Customers take the plates that interest them. The price is generally determined by the color of the plate.",
      chains: ["Sushiro", "Kura Sushi", "Hama Sushi"],
      color: "bg-blue-500",
      icon: "🍣"
    },
    {
      id: "curry",
      name: "Japanese Curry",
      japanese: "カレー",
      description: "Japanese version of curry, milder and thicker than the original Indian version",
      detailedDescription: "Japanese curry is milder and thicker than Indian curry, often served with white rice and accompanied by vegetables, meat or seafood. It's a much-appreciated comfort food.",
      chains: ["CoCo Ichibanya", "Go!Go!Curry"],
      color: "bg-yellow-500",
      icon: "🍛"
    },
    {
      id: "tempura",
      name: "Tempura / Tendon",
      japanese: "天ぷら・天丼",
      description: "Light and crispy Japanese fritters, often served over rice",
      detailedDescription: "Tempura consists of vegetables or seafood coated in light batter then fried. Tendon are rice bowls topped with tempura and a sweet-savory sauce.",
      chains: ["Tenya", "Tsunahachi"],
      color: "bg-green-500",
      icon: "🍤"
    },
    {
      id: "udon",
      name: "Udon",
      japanese: "うどん",
      description: "Thick and chewy Japanese noodles in savory broth",
      detailedDescription: "Udon are thick and soft wheat noodles, served hot in fragrant dashi broth or cold with dipping sauce. Originating from southern Japan, they offer a comforting and authentic experience.",
      chains: ["Marugame Seimen", "Hanamaru Udon"],
      color: "bg-orange-500",
      icon: "🍲"
    },
    {
      id: "soba",
      name: "Soba",
      japanese: "そば",
      description: "Thin buckwheat noodles, symbol of Edo culinary tradition",
      detailedDescription: "Soba are thin buckwheat noodles with a subtle and fragrant taste. They embody the elegance of Edo (Tokyo) and are enjoyed hot in broth or cold with tsuyu sauce. A refined and authentic experience.",
      chains: ["Fuji Soba", "Yudetaro", "Komoro Soba"],
      color: "bg-purple-500",
      icon: "🍝"
    },
    {
      id: "family-restaurant",
      name: "Family Restaurants",
      japanese: "ファミリーレストラン",
      description: "Family restaurants offering varied cuisine in a relaxed atmosphere",
      detailedDescription: "Family restaurants offer a wide range of Western and Japanese dishes in a family setting. They are perfect for groups with varied tastes.",
      chains: ["Saizeriya", "Gusto", "Jonathan's"],
      color: "bg-pink-500",
      icon: "🍽️"
    },
    {
      id: "burgers",
      name: "Japanese Burgers",
      japanese: "日本のハンバーガー",
      description: "Japanese-style hamburgers with unique ingredients and flavors",
      detailedDescription: "Japanese hamburger chains offer unique creations mixing Western influences and Japanese tastes, with ingredients like rice, teriyaki sauce, or wasabi.",
      chains: ["MOS Burger", "Freshness Burger"],
      color: "bg-indigo-500",
      icon: "🍔"
    },
    {
      id: "cuisine-chinoise",
      name: "Chinese Cuisine",
      japanese: "中華料理",
      description: "Chinese dishes adapted to Japanese taste, affordable and flavorful",
      detailedDescription: "These chains offer Chinese dishes adapted to the Japanese palate, often milder than the original versions. Gyoza, Chinese ramen and fried rice are popular.",
      chains: ["Bamiyan", "Ohsho", "Gyoza no Ohsho"],
      color: "bg-red-600",
      icon: "🥟"
    },
    {
      id: "teishoku",
      name: "Teishoku",
      japanese: "定食",
      description: "Traditional complete meals with rice, soup and side dishes",
      detailedDescription: "Teishoku are balanced meals consisting of a main dish, rice, miso soup and small side dishes (tsukemono). It's the essence of Japanese home cooking, nutritious and authentic.",
      chains: ["Ootoya", "Yayoiken", "Miyamoto Munashi"],
      color: "bg-green-600",
      icon: "🍱"
    },
    {
      id: "izakaya",
      name: "Izakaya",
      japanese: "居酒屋",
      description: "Traditional Japanese bars serving small plates and alcohol",
      detailedDescription: "Izakaya are establishments where you drink alcohol while nibbling on various small dishes. The atmosphere is relaxed and friendly, perfect for socializing.",
      chains: ["Torikizoku", "Shirokiya", "Warawara"],
      color: "bg-amber-600",
      icon: "🍻"
    },
    {
      id: "cafe",
      name: "Café",
      japanese: "カフェ・喫茶店",
      description: "Kissaten and modern cafés - The art of time standing still",
      detailedDescription: "Japanese cafés embody a unique philosophy where time takes on another dimension. From traditional kissaten to modern chains, they offer much more than just a coffee break: a true art of living.",
      chains: ["Komeda Coffee"],
      color: "bg-amber-700",
      icon: "☕"
    },
    {
      id: "okonomiyaki",
      name: "Okonomiyaki",
      japanese: "お好み焼き",
      description: "Osaka's 'Japanese pizza' - Revolutionary culinary invention",
      detailedDescription: "Okonomiyaki, literally 'grilled as you like it', is the culinary soul of Osaka. This pancake made with cabbage and special batter, invented with mayonnaise and Modan-yaki by pioneers like Botejyu, embodies Osaka's creativity and conviviality.",
      chains: ["Botejyu"],
      color: "bg-red-600",
      icon: "🥞"
    },
    {
      id: "street-food",
      name: "Street Food",
      japanese: "屋台・街角グルメ",
      description: "Modern yatai and takoyaki - The soul of Japanese streets",
      detailedDescription: "From summer festivals to busy street corners, Japanese street food transforms every bite into a moment of authentic conviviality, perpetuating a millennia-old tradition of nomadic culinary excellence.",
      chains: ["Gindako"],
      color: "bg-red-600",
      icon: "🥟"
    },
    {
      id: "steak",
      name: "Steak",
      japanese: "ステーキ",
      description: "Premium steaks and culinary innovation - Japanese-style beef excellence",
      detailedDescription: "Steak in Japan represents the perfect union between the exceptional quality of wagyu beef and innovation in service. From revolutionary concepts like tachi-gui to traditional steakhouses.",
      chains: ["Ikinari Steak"],
      color: "bg-red-800",
      icon: "🥩"
    },
    {
      id: "yakiniku",
      name: "Yakiniku",
      japanese: "焼肉",
      description: "Gastronomic art of the grill - From Korean culture to Japanese excellence",
      detailedDescription: "Yakiniku transcends simple barbecue to become a refined culinary experience where each diner masters the cooking of premium beef pieces. This tradition from Korean culture has flourished in Japan to create a unique art mixing conviviality, technical precision and exceptional quality of wagyu meats.",
      chains: ["Gyukaku", "Anan"],
      color: "bg-red-700",
      icon: "🔥"
    },
    {
      id: "karaoke",
      name: "Karaoke",
      japanese: "カラオケ",
      description: "Japanese musical entertainment - Culture of singing with friends",
      detailedDescription: "Karaoke was born in Japan and is an integral part of Japanese social culture. In private rooms equipped with modern audio systems, it's the perfect experience to relax and have fun with friends or colleagues.",
      chains: ["Big Echo", "Karaoke Kan"],
      color: "bg-purple-600",
      icon: "🎤"
    }
  ];

  return (
    <>
      <CategoryViewTracker categoryName="type-plat-overview" />
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="text-sm">
              <Link href="/" className="text-gray-500 hover:text-red-600">Home</Link>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-gray-900 font-medium">Search by Dish Type</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-50 to-orange-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Search by Dish Type
              <span className="block text-lg font-normal text-gray-600 mt-2 japanese-text">
                料理の種類から探す
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover the best Japanese restaurants organized by cuisine type. 
              Each category includes detailed information about dishes, the best chains 
              and ordering methods to find the perfect Japanese restaurant according to your taste.
            </p>
          </div>
        </section>

        {/* Cuisine Types Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cuisineTypes.map((cuisine) => (
                <Link 
                  key={cuisine.id}
                  href={getImplementationPath(cuisine.id)}
                  className="group relative overflow-hidden bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-red-200"
                  style={cuisine.bgImage ? {
                    backgroundImage: `url('${cuisine.bgImage}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  } : {}}
                >
                  {cuisine.bgImage && (
                    <div 
                      className="absolute inset-0 group-hover:opacity-75 transition-all duration-300"
                      style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
                    ></div>
                  )}
                  <div className={`${cuisine.color} h-2 relative z-10`}></div>
                  <div className="p-6 relative z-10">
                    {isImplemented(cuisine.id) && (
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-3 inline-block">
                        ✅ Page available
                      </span>
                    )}
                    <div className="flex items-center mb-4">
                      <div className="text-3xl mr-3">{cuisine.icon}</div>
                      <div>
                        <h3 className={`text-xl font-bold transition-colors ${cuisine.bgImage ? 'text-white group-hover:text-red-200' : 'text-gray-900 group-hover:text-red-600'}`}>
                          {cuisine.name}
                        </h3>
                        <p className={`text-sm japanese-text ${cuisine.bgImage ? 'text-gray-200' : 'text-gray-600'}`}>
                          {cuisine.japanese}
                        </p>
                      </div>
                    </div>
                    
                    <p className={`mb-4 line-clamp-2 ${cuisine.bgImage ? 'text-gray-200' : 'text-gray-600'}`}>
                      {cuisine.description}
                    </p>
                    
                    <div className="mb-4">
                      <h4 className={`text-sm font-semibold mb-2 ${cuisine.bgImage ? 'text-white' : 'text-gray-900'}`}>Popular chains:</h4>
                      <div className="flex flex-wrap gap-2">
                        {cuisine.chains.slice(0, 3).map((chain) => (
                          <span 
                            key={chain}
                            className={`text-xs px-2 py-1 rounded-full ${cuisine.bgImage ? 'bg-black bg-opacity-40 text-white' : 'bg-gray-100 text-gray-700'}`}
                          >
                            {chain}
                          </span>
                        ))}
                        {cuisine.chains.length > 3 && (
                          <span className={`text-xs ${cuisine.bgImage ? 'text-gray-300' : 'text-gray-500'}`}>
                            +{cuisine.chains.length - 3} others
                          </span>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className={`font-medium text-sm transition-colors ${cuisine.bgImage ? 'text-red-200 group-hover:text-white' : 'text-red-600 group-hover:text-red-700'}`}>
                        Explore →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Need help choosing?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Check out our practical guides to learn how to order, understand menus 
              and discover Japanese culinary culture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/guides/comment-commander"
                className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors"
              >
                Ordering Guide
              </Link>
              <Link 
                href="/guides/culture-etiquette"
                className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors"
              >
                Culture & Etiquette
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
