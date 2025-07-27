import Link from "next/link";
import { Metadata } from 'next';
import CategoryViewTracker from '../../../components/CategoryViewTracker';

export const metadata: Metadata = {
  title: "Izakaya: Guide to Japanese Tapas Bars and Pub Culture | Japanese Chains",
  description: "Discover the culture of izakaya, Japan's traditional gastropubs. Yakitori, beer and convivial atmosphere. Guide to chains like Torikizoku.",
  keywords: "izakaya, Torikizoku, Isomaru Suisan, yakitori, Japanese bar, Japanese pub, after-work culture",
  openGraph: {
    title: "Izakaya: Guide to Japanese Tapas Bars and Pub Culture | Japanese Chains",
    description: "Discover the culture of izakaya, Japan's traditional gastropubs. Yakitori, beer and convivial atmosphere. Guide to chains like Torikizoku.",
    type: "article",
    url: "https://japonchaines.com/type-plat/izakaya",
    siteName: "Japanese Chains",
    locale: "en_US",
    images: [{
      url: "/images/izakaya-cover.jpg",
      width: 1200,
      height: 630,
      alt: "Izakaya - Japanese tapas bars and pub culture"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Izakaya: Guide to Japanese Tapas Bars and Pub Culture | Japanese Chains",
    description: "Discover the culture of izakaya, Japan's traditional gastropubs. Yakitori, beer and convivial atmosphere. Guide to chains like Torikizoku.",
    images: ["/images/izakaya-cover.jpg"]
  },
  alternates: {
    canonical: "https://japonchaines.com/type-plat/izakaya"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

export default function IzakayaPage() {
  const izakayaChains = [
    {
      name: "Isomaru Suisan",
      japanese: "磯丸水産",
      englishName: "Isomaru Suisan",
      description: "Revolutionary izakaya recreating a 'sea house' atmosphere in the city. Grill ultra-fresh seafood yourself at your table.",
      specialties: ["Hamayaki", "Kani Miso Kōra Yaki", "Hotate", "Kaisendon"],
      priceRange: "¥1000-4000",
      style: "Interactive seafood",
      orderingMethod: "Multilingual touch tablet",
      atmosphere: "Convivial, maritime",
      uniqueFeatures: ["Table grilling", "Live seafood", "24/7 opening"],
      ageGroup: "All ages, groups",
      href: "/chaines/isomaru-suisan"
    },
    {
      name: "Torikizoku",
      japanese: "鳥貴族",
      englishName: "Torikizoku",
      description: "Izakaya chain specializing in yakitori with a unique pricing system: all dishes at ¥328.",
      specialties: ["Yakitori", "Tebasaki", "Chicken Nanban", "Tori Kawa"],
      priceRange: "¥328 uniform",
      style: "Yakitori specialist",
      orderingMethod: "Paper menu + table service",
      atmosphere: "Casual, lively",
      uniqueFeatures: ["Single price ¥328", "Chicken specialist", "Festive atmosphere"],
      ageGroup: "Young adults",
      href: "/chaines/torikizoku"
    },
    {
      name: "Kushikatsu Tanaka",
      japanese: "串カツ田中",
      englishName: "Kushikatsu Tanaka",
      description: "Osaka kushikatsu specialist since 1929. Breaded and fried skewers with the famous secret sauce in popular Osaka atmosphere.",
      specialties: ["Kushikatsu", "Premium Kushikatsu", "Secret Sauce", "Beer"],
      priceRange: "¥1500-2500",
      style: "Osaka-style izakaya",
      orderingMethod: "Paper checklist menu",
      atmosphere: "Popular, convivial",
      uniqueFeatures: ["Osaka tradition", "NO double dipping", "Legendary sauce"],
      ageGroup: "All ages",
      href: "/chaines/kushikatsu-tanaka"
    },
    {
      name: "Shirokiya",
      japanese: "白木屋",
      englishName: "Shirokiya",
      description: "Traditional izakaya offering a wide range of dishes and drinks in a typical atmosphere.",
      specialties: ["Sashimi", "Karaage", "Edamame", "Grilled Fish"],
      priceRange: "¥200-800",
      style: "Traditional izakaya",
      orderingMethod: "Menu + table service",
      atmosphere: "Traditional Japanese",
      uniqueFeatures: ["Varied menu", "Authentic atmosphere", "Drink options"],
      ageGroup: "Adults, office workers",
      href: "/chaines/shirokiya"
    },
    {
      name: "Watami",
      japanese: "和民",
      englishName: "Watami",
      description: "Large family izakaya chain with varied menu and healthy options, popular with families.",
      specialties: ["Robatayaki", "Salads", "Grilled Vegetables", "Family Sets"],
      priceRange: "¥300-1000",
      style: "Family izakaya",
      orderingMethod: "Tablet + table service",
      atmosphere: "Family-friendly, modern",
      uniqueFeatures: ["Healthy options", "Families welcome", "Touch tablets"],
      ageGroup: "Families, all ages",
      href: "/chaines/watami"
    }
  ];

  const izakayaDishes = [
    {
      name: "Yakitori",
      japanese: "焼き鳥",
      description: "Grilled chicken skewers, the emblematic dish of izakaya",
      characteristics: "Smoky, savory, convivial",
      price: "¥150-400 per skewer",
      difficulty: "Easy",
      popularity: "⭐⭐⭐⭐⭐",
      beginner: true,
      drinkPairing: "Beer, sake"
    },
    {
      name: "Edamame",
      japanese: "枝豆",
      description: "Boiled and salted soybeans, classic accompaniment",
      characteristics: "Fresh, salty, light",
      price: "¥200-400",
      difficulty: "Easy",
      popularity: "⭐⭐⭐⭐⭐",
      beginner: true,
      drinkPairing: "Perfect with beer"
    },
    {
      name: "Karaage",
      japanese: "から揚げ",
      description: "Japanese fried chicken, crispy and juicy",
      characteristics: "Crispy, juicy, comforting",
      price: "¥400-700",
      difficulty: "Easy",
      popularity: "⭐⭐⭐⭐⭐",
      beginner: true,
      drinkPairing: "Beer, highball"
    },
    {
      name: "Sashimi",
      japanese: "刺身",
      description: "Thinly sliced raw fish, guaranteed freshness",
      characteristics: "Fresh, delicate, authentic",
      price: "¥500-1500",
      difficulty: "Medium",
      popularity: "⭐⭐⭐⭐",
      beginner: false,
      drinkPairing: "Sake, shochu"
    },
    {
      name: "Takoyaki",
      japanese: "たこ焼き",
      description: "Osaka octopus balls, street food specialty",
      characteristics: "Creamy, savory, typical",
      price: "¥300-600",
      difficulty: "Easy",
      popularity: "⭐⭐⭐⭐",
      beginner: true,
      drinkPairing: "Beer"
    },
    {
      name: "Gyoza",
      japanese: "餃子",
      description: "Grilled dumplings, perfect to accompany drinks",
      characteristics: "Crispy, juicy, addictive",
      price: "¥300-600",
      difficulty: "Easy",
      popularity: "⭐⭐⭐⭐⭐",
      beginner: true,
      drinkPairing: "Beer, highball"
    }
  ];

  const drinkOptions = [
    {
      name: "Beer",
      japanese: "ビール",
      description: "Most popular drink, served very cold",
      varieties: ["Asahi", "Kirin", "Sapporo", "Premium Malts"],
      price: "¥300-600",
      alcoholLevel: "5%",
      popularity: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Highball",
      japanese: "ハイボール",
      description: "Japanese whisky with soda, very refreshing",
      varieties: ["Suntory", "Nikka", "Jim Beam", "Kaku"],
      price: "¥200-500",
      alcoholLevel: "7-9%",
      popularity: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Sake",
      japanese: "日本酒",
      description: "Traditional rice wine, hot or cold",
      varieties: ["Junmai", "Ginjo", "Daiginjo", "Honjozo"],
      price: "¥400-1000",
      alcoholLevel: "15-16%",
      popularity: "⭐⭐⭐⭐"
    },
    {
      name: "Shochu",
      japanese: "焼酎",
      description: "Distilled alcohol, cheaper than sake",
      varieties: ["Imo", "Mugi", "Kome", "Kokuto"],
      price: "¥300-700",
      alcoholLevel: "20-25%",
      popularity: "⭐⭐⭐⭐"
    },
    {
      name: "Chu-Hi",
      japanese: "チューハイ",
      description: "Pre-mixed fruity and light cocktail",
      varieties: ["Lemon", "Grapefruit", "Peach", "Grape"],
      price: "¥200-400",
      alcoholLevel: "3-7%",
      popularity: "⭐⭐⭐⭐"
    }
  ];

  const izakayaCulture = [
    {
      title: "Nomihōdai",
      icon: "🍻",
      description: "All-you-can-drink system, very popular",
      details: "2 hours of unlimited drinks for ¥1500-3000",
      tips: "Great for groups, reservation recommended"
    },
    {
      title: "Otōshi",
      icon: "🥗",
      description: "Small appetizer served automatically",
      details: "¥200-500 per person, non-negotiable",
      tips: "Part of the culture, like a cover charge"
    },
    {
      title: "Kanpai",
      icon: "🥂",
      description: "Mandatory toast before drinking",
      details: "Wait until everyone is served",
      tips: "Say 'Kanpai!' while raising your glass"
    },
    {
      title: "Sharing",
      icon: "🍽️",
      description: "Sharing dishes at the center of the table",
      details: "Order several small dishes for everyone",
      tips: "Use the serving chopsticks"
    },
    {
      title: "Nijikai",
      icon: "🏮",
      description: "Second bar after the main izakaya",
      details: "Tradition of continuing the evening elsewhere",
      tips: "Karaoke or smaller bar typical"
    },
    {
      title: "Enkai",
      icon: "🎉",
      description: "Company banquet or group event",
      details: "Group reservations with fixed menu",
      tips: "Important social events in Japan"
    }
  ];

  return (
    <>
      <CategoryViewTracker categoryName="izakaya" />
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="text-sm">
              <Link href="/" className="text-gray-500 hover:text-red-600">Home</Link>
              <span className="text-gray-400 mx-2">/</span>
              <Link href="/type-plat" className="text-gray-500 hover:text-red-600">Dish Type</Link>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-gray-900 font-medium">Izakaya</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-orange-100 to-red-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <span className="text-5xl mr-4">🏮</span>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                      Izakaya
                    </h1>
                    <p className="text-2xl text-gray-600 japanese-text">居酒屋</p>
                  </div>
                </div>
                <p className="text-xl text-gray-700 mb-6">
                  Dive into the Japanese lifestyle: izakaya are much more 
                  than bars, they are places of conviviality where yakitori, beer 
                  and friendship blend in an authentic atmosphere.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    Price: ¥200-2500
                  </span>
                  <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                    Authentic culture
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                    Convivial atmosphere
                  </span>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">The Soul of Japan</h3>
                <p className="text-gray-600 mb-4">
                  Izakaya are the heart of Japanese socialization after work. 
                  These "bar-restaurants" offer a unique experience combining casual 
                  cuisine and drinks in a warm atmosphere.
                </p>
                <p className="text-gray-600">
                  More than just a meal, it's an authentic moment of relaxation where 
                  Japanese people meet to unwind and build connections.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Izakaya Culture */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Izakaya Culture: Codes and Traditions
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {izakayaCulture.map((culture, index) => (
                <div key={index} className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                  <div className="text-3xl mb-4">{culture.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{culture.title}</h3>
                  <p className="text-gray-600 text-sm mb-3">{culture.description}</p>
                  <p className="text-gray-700 text-sm font-medium mb-2">{culture.details}</p>
                  <p className="text-orange-700 text-xs bg-orange-100 p-2 rounded">
                    💡 <strong>Tip:</strong> {culture.tips}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Drink Options */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Izakaya Drinks Guide
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {drinkOptions.map((drink, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{drink.name}</h3>
                  <p className="text-gray-600 japanese-text text-sm mb-3">{drink.japanese}</p>
                  <p className="text-gray-600 text-sm mb-4">{drink.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-900">Price:</span>
                      <span className="text-red-600 font-medium">{drink.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-900">Alcohol:</span>
                      <span className="text-gray-600">{drink.alcoholLevel}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-900">Popularity:</span>
                      <span>{drink.popularity}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Varieties:</h4>
                    <div className="flex flex-wrap gap-1">
                      {drink.varieties.map((variety, varietyIndex) => (
                        <span key={varietyIndex} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {variety}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Izakaya Dishes */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Classic Izakaya Dishes
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {izakayaDishes.map((dish, index) => (
                <div key={index} className={`bg-white rounded-xl p-6 border ${
                  dish.beginner ? 'border-green-200 bg-green-50' : 'border-gray-200'
                }`}>
                  <div className="flex justify-between items-start mb-3">
                    {dish.beginner && (
                      <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                        Perfect for beginners
                      </span>
                    )}
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      dish.difficulty === 'Easy' ? 'bg-green-100 text-green-800' :
                      'bg-yellow-100 text-yellow-800'
                    }`}>
                      {dish.difficulty}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{dish.name}</h3>
                  <p className="text-gray-600 japanese-text text-sm mb-3">{dish.japanese}</p>
                  <p className="text-gray-600 text-sm mb-4">{dish.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-900">Character:</span>
                      <span className="text-gray-600">{dish.characteristics}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-900">Price:</span>
                      <span className="text-red-600 font-medium">{dish.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-900">Popularity:</span>
                      <span>{dish.popularity}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-900">With:</span>
                      <span className="text-gray-600">{dish.drinkPairing}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Chains Comparison */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Major Izakaya Chains
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {izakayaChains.map((chain, index) => (
                <Link 
                  key={index}
                  href={chain.href}
                  className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-orange-200 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-orange-600 text-xl">🏮</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                          {chain.name}
                        </h3>
                        <p className="text-gray-600 japanese-text">{chain.japanese}</p>
                        <p className="text-gray-500 text-xs">{chain.ageGroup}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 text-sm">{chain.description}</p>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">Specialties:</h4>
                        <p className="text-sm text-gray-600">{chain.specialties.join(", ")}</p>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">Unique features:</h4>
                        <p className="text-sm text-gray-600">{chain.uniqueFeatures.join(", ")}</p>
                      </div>
                      
                      <div className="grid grid-cols-1 gap-2 text-sm">
                        <div>
                          <span className="font-semibold text-gray-900">Price: </span>
                          <span className="text-gray-600">{chain.priceRange}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900">Style: </span>
                          <span className="text-gray-600">{chain.style}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900">Atmosphere: </span>
                          <span className="text-gray-600">{chain.atmosphere}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-orange-600 font-medium text-sm group-hover:text-orange-700">
                        View details →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Etiquette Guide */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Etiquette and Good Manners in Izakaya
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                <div className="text-3xl mb-4">🥂</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">1. Kanpai!</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Wait until everyone is served</li>
                  <li>• Raise your glass</li>
                  <li>• Say "Kanpai!" together</li>
                </ul>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                <div className="text-3xl mb-4">🍽️</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">2. Sharing</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Order for the group</li>
                  <li>• Use serving chopsticks</li>
                  <li>• Share everything</li>
                </ul>
              </div>
              
              <div className="bg-red-50 p-6 rounded-xl border border-red-200">
                <div className="text-3xl mb-4">🥗</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">3. Otōshi</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Accept the automatic dish</li>
                  <li>• It's included in the service</li>
                  <li>• ¥200-500 per person</li>
                </ul>
              </div>
              
              <div className="bg-green-50 p-6 rounded-xl border border-green-200">
                <div className="text-3xl mb-4">🍻</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">4. Service</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Pour for others</li>
                  <li>• Never serve yourself</li>
                  <li>• Reciprocity is important</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-white p-6 rounded-xl border border-gray-200">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Essential Phrases</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><span className="font-semibold">Kanpai!</span> <span className="japanese-text">乾杯！</span></p>
                  <p className="text-gray-600 mb-2">Cheers! (mandatory toast)</p>
                  
                  <p><span className="font-semibold">Yakitori kudasai</span> <span className="japanese-text">焼き鳥ください</span></p>
                  <p className="text-gray-600 mb-2">Yakitori, please</p>
                </div>
                <div>
                  <p><span className="font-semibold">Bīru onegaishimasu</span> <span className="japanese-text">ビールお願いします</span></p>
                  <p className="text-gray-600 mb-2">A beer, please</p>
                  
                  <p><span className="font-semibold">Otsukare-sama</span> <span className="japanese-text">お疲れ様</span></p>
                  <p className="text-gray-600">Good work (evening greeting)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tips Section */}
        <section className="py-16 bg-orange-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Tips for Enjoying Izakaya
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-4">🕰️</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Peak Hours</h3>
                <p className="text-gray-600 text-sm">
                  Izakaya are packed after 6 PM on weekdays (office workers) and 
                  on weekends. Arrive early or make reservations for groups.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-4">💰</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Budget Planning</h3>
                <p className="text-gray-600 text-sm">
                  Budget ¥2000-4000 per person for a complete evening 
                  with drinks. Nomihōdai can be economical for groups.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-4">👥</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Group Experience</h3>
                <p className="text-gray-600 text-sm">
                  Izakaya are made for groups. Come with 2-6 people 
                  for an authentic and convivial experience.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-4">🍻</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Nomihōdai Strategy</h3>
                <p className="text-gray-600 text-sm">
                  The all-you-can-drink system (nomihōdai) is profitable if you drink 
                  more than 3-4 glasses. Usually limited to 2-3 hours.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-4">🚭</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Smoking Areas</h3>
                <p className="text-gray-600 text-sm">
                  Many izakaya still allow smoking. Check 
                  non-smoking sections if you are sensitive.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-4">🎌</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Cultural Immersion</h3>
                <p className="text-gray-600 text-sm">
                  This is your chance to experience authentic Japanese 
                  socialization. Observe, participate and have fun!
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
