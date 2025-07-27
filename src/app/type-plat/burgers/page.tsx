import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Japanese Burgers: Guide to Unique Chains (MOS, Freshness) | Japanese Chains",
  description: "Explore the world of Japanese burgers. From MOS's Rice Burger to Freshness's gourmet creations, a local reinvention of a classic.",
  keywords: "Japanese burgers, MOS Burger, rice burger, Freshness Burger, Dom Dom Burger",
  openGraph: {
    title: "Japanese Burgers: Guide to Unique Chains (MOS, Freshness) | Japanese Chains",
    description: "Explore the world of Japanese burgers. From MOS's Rice Burger to Freshness's gourmet creations, a local reinvention of a classic.",
    type: "article",
    url: "https://japonchaines.com/type-plat/burgers",
    siteName: "Japanese Chains",
    locale: "en_US",
    images: [{
      url: "/images/burgers-japonais-cover.jpg",
      width: 1200,
      height: 630,
      alt: "Japanese burgers - MOS Burger and Freshness Burger"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Japanese Burgers: Guide to Unique Chains (MOS, Freshness) | Japanese Chains",
    description: "Explore the world of Japanese burgers. From MOS's Rice Burger to Freshness's gourmet creations, a local reinvention of a classic.",
    images: ["/images/burgers-japonais-cover.jpg"]
  },
  alternates: {
    canonical: "https://japonchaines.com/type-plat/burgers"
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

export default function JapaneseBurgersPage() {
  const burgerChains = [
    {
      name: "Dom Dom Burger",
      japanese: "ドムドムバーガー",
      englishName: "Dom Dom Burger",
      description: "The very first Japanese burger chain (1970), a legendary phoenix resurrected with unique viral creations and authentic Japanese spirit.",
      specialties: ["Whole Crab Burger", "Amakara Chicken", "Thick Omelet", "Okonomiyaki Burger"],
      priceRange: "¥400-900",
      style: "Authentic & creative",
      orderingMethod: "Traditional counter",
      vegetarianOptions: "Creative options available",
      uniqueFeatures: ["First Japanese burger", "Viral creations", "Wabi-sabi culture"],
      origin: "Japanese (1970)",
      href: "/chaines/domdom"
    },
    {
      name: "MOS Burger",
      japanese: "モスバーガー",
      englishName: "MOS Burger",
      description: "Premium Japanese burger chain, famous for fresh ingredients and unique creations like the Rice Burger.",
      specialties: ["Rice Burger", "MOS Burger", "Ebi (Shrimp) Burger"],
      priceRange: "¥300-800",
      style: "Japanese premium",
      orderingMethod: "Counter + seated waiting",
      vegetarianOptions: "Vegetarian options available",
      uniqueFeatures: ["Rice bun", "Fresh ingredients", "Made to order"],
      origin: "Japanese (1972)",
      href: "/chaines/mos-burger"
    },
    {
      name: "Freshness Burger",
      japanese: "フレッシュネスバーガー",
      englishName: "Freshness Burger",
      description: "High-end chain focused on freshness, offering gourmet burgers in a modern and stylish setting.",
      specialties: ["Avocado Burger", "Gourmet Chicken", "Onion Rings"],
      priceRange: "¥400-1200",
      style: "Modern gourmet",
      orderingMethod: "Counter + table service",
      vegetarianOptions: "Excellent vegetarian options",
      uniqueFeatures: ["Gourmet quality", "Trendy decor", "Avocado focus"],
      origin: "Japanese (1992)",
      href: "/chaines/freshness-burger"
    },
    {
      name: "Lotteria",
      japanese: "ロッテリア",
      englishName: "Lotteria",
      description: "Korean-Japanese style fast-food chain, known for creative burgers and competitive prices.",
      specialties: ["Shrimp Burger", "Tower Cheeseburger", "Chicken Burger"],
      priceRange: "¥200-600",
      style: "Accessible fast-food",
      orderingMethod: "Fast-food counter",
      vegetarianOptions: "Limited options",
      uniqueFeatures: ["Low prices", "Generous portions", "Korean style"],
      origin: "Korean (1972)",
      href: "/chaines/lotteria"
    }
  ];

  const burgerTypes = [
    {
      name: "Rice Burger (ライスバーガー)",
      japanese: "ライスバーガー",
      description: "Bun replaced with pressed rice, a unique Japanese invention",
      characteristics: "Innovative, gluten-free, authentically Japanese",
      price: "¥300-500",
      availability: "MOS Burger only",
      popularity: "⭐⭐⭐⭐",
      beginner: false,
      unique: true
    },
    {
      name: "Ebi Burger (エビバーガー)",
      japanese: "エビバーガー",
      description: "Tempura shrimp burger, Japanese specialty",
      characteristics: "Crispy, marine, typically Japanese",
      price: "¥400-600",
      availability: "Multiple chains",
      popularity: "⭐⭐⭐⭐",
      beginner: true,
      unique: true
    },
    {
      name: "Avocado Burger (アボカドバーガー)",
      japanese: "アボカドバーガー",
      description: "Burger with fresh avocado, very popular in Japan",
      characteristics: "Fresh, healthy, creamy",
      price: "¥500-800",
      availability: "Freshness Burger",
      popularity: "⭐⭐⭐⭐⭐",
      beginner: true,
      unique: false
    },
    {
      name: "Teriyaki Burger (照り焼きバーガー)",
      japanese: "照り焼きバーガー",
      description: "Burger with Japanese teriyaki sauce",
      characteristics: "Sweet-savory, familiar, Japanese",
      price: "¥350-550",
      availability: "All chains",
      popularity: "⭐⭐⭐⭐⭐",
      beginner: true,
      unique: false
    },
    {
      name: "Katsu Burger (カツバーガー)",
      japanese: "カツバーガー",
      description: "Burger with Japanese breaded cutlet",
      characteristics: "Crispy, hearty, fusion",
      price: "¥400-700",
      availability: "Multiple chains",
      popularity: "⭐⭐⭐⭐",
      beginner: true,
      unique: true
    },
    {
      name: "Fish Burger (フィッシュバーガー)",
      japanese: "フィッシュバーガー",
      description: "Fish burger, very popular in Japan",
      characteristics: "Light, flavorful, healthy",
      price: "¥300-500",
      availability: "All chains",
      popularity: "⭐⭐⭐⭐",
      beginner: true,
      unique: false
    }
  ];

  const japaneseFeatures = [
    {
      title: "Unique Ingredients",
      icon: "🍚",
      description: "Rice buns, teriyaki sauce, tempura shrimp",
      examples: ["Rice Burger", "Ebi Fry", "Teriyaki Sauce"]
    },
    {
      title: "Premium Quality",
      icon: "⭐",
      description: "Fresher ingredients, made-to-order preparation",
      examples: ["Local vegetables", "Made to order", "Careful presentation"]
    },
    {
      title: "Adapted Sizes",
      icon: "📏",
      description: "Portions adapted to the Japanese market, less imposing",
      examples: ["Single size", "Balanced portions", "No Super Size"]
    },
    {
      title: "Japanese Service",
      icon: "🙏",
      description: "Hospitality, cleanliness and attention to detail",
      examples: ["Omotenashi", "Attentive service", "Porcelain trays"]
    },
    {
      title: "Local Innovations",
      icon: "💡",
      description: "Creative adaptations for Japanese taste",
      examples: ["Wasabi Mayo", "Nori Burger", "Matcha Shake"]
    },
    {
      title: "Different Atmosphere",
      icon: "🏪",
      description: "More refined decor than American chains",
      examples: ["Modern design", "Soft music", "Ambient lighting"]
    }
  ];

  const vsAmericanChains = [
    {
      aspect: "Portion Size",
      japanese: "Smaller, balanced",
      american: "Large, XXL options",
      advantage: "Less waste"
    },
    {
      aspect: "Ingredients",
      japanese: "Local, adapted to Japanese taste",
      american: "Globally standardized",
      advantage: "Local authenticity"
    },
    {
      aspect: "Service",
      japanese: "Table service, Japanese hospitality",
      american: "Fast, efficient",
      advantage: "Premium experience"
    },
    {
      aspect: "Price",
      japanese: "¥300-800 (premium)",
      american: "¥200-600 (volume)",
      advantage: "Quality-price ratio"
    },
    {
      aspect: "Innovation",
      japanese: "Creative local adaptations",
      american: "Global standardization",
      advantage: "Culinary discovery"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-red-600">Home</Link>
            <span className="text-gray-400 mx-2">/</span>
            <Link href="/type-plat" className="text-gray-500 hover:text-red-600">Dish Type</Link>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-gray-900 font-medium">Japanese Burgers</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-100 to-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-5xl mr-4">🍔</span>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    Japanese Burgers
                  </h1>
                  <p className="text-2xl text-gray-600 japanese-text">日本のハンバーガー</p>
                </div>
              </div>
              <p className="text-xl text-gray-700 mb-6">
                Discover the Japanese art of burgers: premium ingredients, creative 
                innovations like the Rice Burger, and refined service that transforms 
                fast food into a culinary experience. From the pioneer Sasebo Burger of the 1950s 
                to contemporary Wagyu creations, explore a unique gastronomic revolution.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                  Price: ¥200-1200
                </span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                  Japanese innovation
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                  Premium quality
                </span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Japanese Burger Revolution</h3>
              <p className="text-gray-600 mb-4">
                Japanese chains have reinvented the burger by bringing their 
                culinary philosophy: fresh ingredients, careful preparation and 
                surprising innovations like the famous Rice Burger from MOS.
              </p>
              <p className="text-gray-600">
                More than just fast food, these restaurants offer an accessible 
                gastronomic experience, combining Japanese tradition and American influence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Japanese Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Makes Japanese Burgers Unique
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {japaneseFeatures.map((feature, index) => (
              <div key={index} className="bg-red-50 rounded-xl p-6 border border-red-200">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{feature.description}</p>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Examples:</h4>
                  <div className="space-y-1">
                    {feature.examples.map((example, exampleIndex) => (
                      <span key={exampleIndex} className="block text-xs text-gray-600">• {example}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Burger Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Types of Burgers to Discover
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {burgerTypes.map((burger, index) => (
              <div key={index} className={`bg-white rounded-xl p-6 border ${
                burger.beginner ? 'border-green-200 bg-green-50' : 'border-gray-200'
              }`}>
                <div className="flex justify-between items-start mb-3">
                  {burger.beginner && (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                      Beginner recommended
                    </span>
                  )}
                  {burger.unique && (
                    <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                      Japan only
                    </span>
                  )}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{burger.name}</h3>
                <p className="text-gray-600 japanese-text text-sm mb-3">{burger.japanese}</p>
                <p className="text-gray-600 text-sm mb-4">{burger.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Character:</span>
                    <span className="text-gray-600">{burger.characteristics}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Price:</span>
                    <span className="text-red-600 font-medium">{burger.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Availability:</span>
                    <span className="text-gray-600">{burger.availability}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Popularity:</span>
                    <span>{burger.popularity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Japanese vs American Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Japanese vs American Chains
          </h2>
          <div className="bg-gray-50 rounded-xl p-8">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 font-semibold text-gray-900">Aspect</th>
                    <th className="text-left py-3 px-4 font-semibold text-red-600">Japanese Chains</th>
                    <th className="text-left py-3 px-4 font-semibold text-blue-600">American Chains</th>
                    <th className="text-left py-3 px-4 font-semibold text-green-600">Japanese Advantage</th>
                  </tr>
                </thead>
                <tbody>
                  {vsAmericanChains.map((comparison, index) => (
                    <tr key={index} className="border-b border-gray-100">
                      <td className="py-3 px-4 font-semibold text-gray-900">{comparison.aspect}</td>
                      <td className="py-3 px-4 text-red-700">{comparison.japanese}</td>
                      <td className="py-3 px-4 text-blue-700">{comparison.american}</td>
                      <td className="py-3 px-4 text-green-700">{comparison.advantage}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Chains Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Major Japanese Burger Chains
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {burgerChains.map((chain, index) => (
              <Link 
                key={index}
                href={chain.href}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-red-200 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-red-600 text-xl">🍔</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                        {chain.name}
                      </h3>
                      <p className="text-gray-600 japanese-text">{chain.japanese}</p>
                      <p className="text-gray-500 text-xs">{chain.origin}</p>
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
                        <span className="font-semibold text-gray-900">Vegetarian: </span>
                        <span className="text-gray-600">{chain.vegetarianOptions}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-red-600 font-medium text-sm group-hover:text-red-700">
                      View details →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ordering Guide */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How to Order at a Japanese Burger Chain
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-red-50 p-6 rounded-xl border border-red-200">
              <div className="text-3xl mb-4">🍔</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">1. Choose the Burger</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Start with classics</li>
                <li>• Try Japanese specialties</li>
                <li>• Rice Burger = unique experience</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
              <div className="text-3xl mb-4">🍟</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">2. Set or Single</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Set = burger + fries + drink</li>
                <li>• Single = burger only</li>
                <li>• Sets more economical</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
              <div className="text-3xl mb-4">🥤</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">3. Drinks</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Standard soft drinks</li>
                <li>• Superior quality coffee</li>
                <li>• Sometimes Japanese tea</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <div className="text-3xl mb-4">🍰</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">4. Desserts</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Excellent soft cream</li>
                <li>• Sometimes matcha flavors</li>
                <li>• Japanese apple pie</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-xl border border-gray-200">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Useful Phrases</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p><span className="font-semibold">Raisu bāgā kudasai</span> <span className="japanese-text">ライスバーガーください</span></p>
                <p className="text-gray-600 mb-2">A Rice Burger, please</p>
                
                <p><span className="font-semibold">Setto ni dekimasu ka?</span> <span className="japanese-text">セットにできますか？</span></p>
                <p className="text-gray-600 mb-2">Can you make it a set?</p>
              </div>
              <div>
                <p><span className="font-semibold">Osusume wa nan desu ka?</span> <span className="japanese-text">おすすめは何ですか？</span></p>
                <p className="text-gray-600 mb-2">What do you recommend?</p>
                
                <p><span className="font-semibold">Kore wa nani desu ka?</span> <span className="japanese-text">これは何ですか？</span></p>
                <p className="text-gray-600">What is this?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-red-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Tips for Japanese Burgers
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🍚</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Try the Rice Burger</h3>
              <p className="text-gray-600 text-sm">
                A unique experience in the world, MOS's Rice Burger replaces the bun 
                with pressed rice. Perfect for gluten intolerant people!
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">⏰</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Made to Order</h3>
              <p className="text-gray-600 text-sm">
                Unlike classic fast food, burgers are often 
                made to order. Allow 5-10 minutes waiting time.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Quality-Price Ratio</h3>
              <p className="text-gray-600 text-sm">
                Although more expensive than McDonald's, the quality justifies the price. 
                Sets offer better value than individual items.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🌱</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Vegetarian Options</h3>
              <p className="text-gray-600 text-sm">
                MOS and Freshness offer excellent vegetarian options, 
                notably the Avocado Burger and vegetable burgers.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🍟</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Different Fries</h3>
              <p className="text-gray-600 text-sm">
                Japanese fries are often less salty and sometimes 
                seasoned differently. Onion rings very popular.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Seasonal Specialties</h3>
              <p className="text-gray-600 text-sm">
                Japanese chains regularly offer limited seasonal burgers 
                with unique ingredients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* In-depth Articles Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Deepen Your Knowledge of Japanese Burgers
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Link 
              href="/guides/articles/revolution-burger-japonais"
              className="group bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-center mb-4">
                <span className="text-4xl block mb-3">🍔⚡</span>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                  The Japanese Burger Revolution
                </h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                From American fast food to Japanese gastronomy: complete history of the hamburger transformation 
                in Japan, from Rice Burger to Wagyu creations.
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-red-600 font-medium">Read article →</span>
                <span className="text-gray-500">15 min</span>
              </div>
            </Link>

            <Link 
              href="/guides/articles/gotochiburger-voyage"
              className="group bg-gradient-to-br from-green-50 to-blue-50 rounded-xl p-6 border border-green-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-center mb-4">
                <span className="text-4xl block mb-3">🗾🎌</span>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                  Japan Tour in Gotōchi Burgers
                </h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Discover regional specialties: from the historic Sasebo Burger to the marine creations 
                of Suruga Bay, each region has its unique burger.
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-green-600 font-medium">Explore regions →</span>
                <span className="text-gray-500">12 min</span>
              </div>
            </Link>

            <Link 
              href="/guides/articles/culture-consommation-burger"
              className="group bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl p-6 border border-pink-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-center mb-4">
                <span className="text-4xl block mb-3">📸✨</span>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-pink-600 transition-colors">
                  Kikan Gentei & Moe-dan
                </h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">
                Analyze Japanese cultural phenomena: limited period and aesthetic of the cut 
                that revolutionize modern consumption.
              </p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-pink-600 font-medium">Discover culture →</span>
                <span className="text-gray-500">14 min</span>
              </div>
            </Link>
          </div>

          <div className="text-center mt-8">
            <Link
              href="/guides/articles"
              className="inline-flex items-center bg-gray-900 text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-800 transition-colors"
            >
              See all in-depth articles
              <span className="ml-2">📚</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
