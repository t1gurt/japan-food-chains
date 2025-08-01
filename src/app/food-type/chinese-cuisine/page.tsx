import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Japanese-Style Chinese Cuisine (Chuka): Chain Restaurant Guide | Japan Food Chains",
  description: "Discover \"Chuka\", Chinese cuisine adapted to Japanese taste. Gyoza, ramen and stir-fried dishes at chains like Bamiyan and Hidakaya.",
  keywords: "Japanese Chinese cuisine, chuka, Bamiyan, Hidakaya, gyoza, Chinese ramen",
  openGraph: {
    title: "Japanese-Style Chinese Cuisine (Chuka): Chain Restaurant Guide | Japan Food Chains",
    description: "Discover \"Chuka\", Chinese cuisine adapted to Japanese taste. Gyoza, ramen and stir-fried dishes at chains like Bamiyan and Hidakaya.",
    type: "article",
    url: "https://japanfoodchains.com/food-type/chinese-cuisine",
    siteName: "Japan Food Chains",
    locale: "en_US",
    images: [{
      url: "/images/cuisine-chinoise-cover.jpg",
      width: 1200,
      height: 630,
      alt: "Japanese Chinese cuisine - Chuka restaurants"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Japanese-Style Chinese Cuisine (Chuka): Chain Restaurant Guide | Japan Food Chains",
    description: "Discover \"Chuka\", Chinese cuisine adapted to Japanese taste. Gyoza, ramen and stir-fried dishes at chains like Bamiyan and Hidakaya.",
    images: ["/images/cuisine-chinoise-cover.jpg"]
  },
  alternates: {
    canonical: "https://japanfoodchains.com/food-type/chinese-cuisine"
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

export default function ChineseCuisinePage() {
  const chineseChains = [
    {
      name: "Bamiyan",
      japanese: "バーミヤン",
      englishName: "Bamiyan",
      description: "Popular Chinese cuisine chain offering affordable family dishes in a casual atmosphere.",
      specialties: ["Gyoza", "Fried Rice", "Sweet & Sour Pork", "Chinese Ramen"],
      priceRange: "¥600-1500",
      style: "Casual family dining",
      orderingMethod: "Paper menu + table service",
      vegetarianOptions: "Vegetarian options available",
      uniqueFeatures: ["Generous portions", "Family prices", "Drink bar"],
      atmosphere: "Family restaurant",
      href: "/chains/bamiyan"
    },
    {
      name: "Hidakaya",
      japanese: "日高屋",
      englishName: "Hidakaya",
      description: "Popular gyoza & ramen - Accessible Chinese cuisine since 1979. Specialist in crispy gyoza and ultra-competitive prices.",
      specialties: ["Gyoza", "Ramen", "Fried Rice", "Tantanmen"],
      priceRange: "¥300-700",
      style: "Popular casual dining",
      orderingMethod: "Ticket machine + counter",
      vegetarianOptions: "Very limited options",
      uniqueFeatures: ["Ultra-competitive prices", "Signature gyoza", "Fast service"],
      atmosphere: "Casual popular",
      href: "/chains/hidakaya"
    },
    {
      name: "Ohsho (Gyoza no Ohsho)",
      japanese: "餃子の王将",
      englishName: "Gyoza no Ohsho",
      description: "Gyoza specialist and authentic Chinese cuisine, very popular for its homemade gyoza.",
      specialties: ["Gyoza", "Fried Rice", "Ramen", "Char Siu"],
      priceRange: "¥400-1200",
      style: "Authentic Chinese",
      orderingMethod: "Paper menu + counter",
      vegetarianOptions: "Some options",
      uniqueFeatures: ["Homemade gyoza", "Wok cooking", "Authentic"],
      atmosphere: "Traditional restaurant",
      href: "/chains/gyoza-no-ohsho"
    },
    {
      name: "Osaka Ohsho",
      japanese: "大阪王将",
      englishName: "Osaka Ohsho",
      description: "Popular Chinese cuisine chain from Osaka, renowned for its crispy gyoza and generous dishes.",
      specialties: ["Gyoza", "Yakimeshi", "Ramen", "Ebi Chili"],
      priceRange: "¥500-1300",
      style: "Osaka casual style",
      orderingMethod: "Paper menu + table service",
      vegetarianOptions: "Limited options",
      uniqueFeatures: ["Osaka-style gyoza", "Signature yakimeshi", "Generous portions"],
      atmosphere: "Casual family",
      href: "/chains/osaka-ohsho"
    },
    {
      name: "Ringer Hut",
      japanese: "リンガーハット",
      englishName: "Ringer Hut",
      description: "Chain specializing in chanpon and sara-udon noodles, originally from Nagasaki.",
      specialties: ["Chanpon", "Sara-udon", "Gyoza", "Fried Rice"],
      priceRange: "¥500-1000",
      style: "Japanese Chinese noodles",
      orderingMethod: "Counter + tickets",
      vegetarianOptions: "Limited vegetarian options",
      uniqueFeatures: ["Authentic chanpon", "Fresh vegetables", "Fast"],
      atmosphere: "Fast-casual",
      href: "/chains/ringer-hut"
    }
  ];

  const dishTypes = [
    {
      name: "Gyoza",
      japanese: "餃子",
      description: "Chinese dumplings fried or steamed, pork and vegetable filling",
      characteristics: "Crispy, juicy, aromatic",
      price: "¥300-600",
      difficulty: "Easy",
      popularity: "⭐⭐⭐⭐⭐",
      beginner: true,
      sauce: "Soy sauce + vinegar + sesame oil"
    },
    {
      name: "Fried Rice",
      japanese: "チャーハン",
      description: "Chinese-style fried rice with egg, vegetables and meat",
      characteristics: "Flavorful, filling, comforting",
      price: "¥600-900",
      difficulty: "Easy",
      popularity: "⭐⭐⭐⭐⭐",
      beginner: true,
      sauce: "Integrated soy sauce"
    },
    {
      name: "Yakimeshi",
      japanese: "焼きめし",
      description: "Japanese-style fried rice, slightly different from Chinese fried rice",
      characteristics: "Aromatic, light, Japanese style",
      price: "¥650-950",
      difficulty: "Easy",
      popularity: "⭐⭐⭐⭐",
      beginner: true,
      sauce: "Japanese soy sauce"
    },
    {
      name: "Sweet & Sour Pork",
      japanese: "酢豚",
      description: "Fried pork in sweet and sour sauce with colorful vegetables",
      characteristics: "Sweet-sour, colorful, festive",
      price: "¥800-1200",
      difficulty: "Medium",
      popularity: "⭐⭐⭐⭐",
      beginner: true,
      sauce: "Homemade sweet and sour sauce"
    },
    {
      name: "Chanpon",
      japanese: "ちゃんぽん",
      description: "Noodles in milky broth with seafood and vegetables",
      characteristics: "Creamy, nourishing, unique",
      price: "¥700-1000",
      difficulty: "Medium",
      popularity: "⭐⭐⭐⭐",
      beginner: false,
      sauce: "Special milky broth"
    },
    {
      name: "Mapo Tofu",
      japanese: "麻婆豆腐",
      description: "Tofu in spicy sauce with minced pork and miso",
      characteristics: "Spicy, flavorful, authentic",
      price: "¥600-900",
      difficulty: "Medium",
      popularity: "⭐⭐⭐⭐",
      beginner: false,
      sauce: "Spicy miso sauce"
    },
    {
      name: "Char Siu",
      japanese: "チャーシュー",
      description: "Glazed grilled pork, Cantonese specialty",
      characteristics: "Sweet, tender, caramelized",
      price: "¥800-1500",
      difficulty: "Difficult",
      popularity: "⭐⭐⭐⭐",
      beginner: false,
      sauce: "Sweet glazed sauce"
    }
  ];

  const culturalAdaptations = [
    {
      title: "Japanese Taste",
      icon: "🇯🇵",
      description: "Adapted to Japanese palate: less spicy, milder flavors",
      examples: ["Less oil", "Softened flavors", "Careful presentation"]
    },
    {
      title: "Japanese Service",
      icon: "🙏",
      description: "Japanese-style service: hospitality and cleanliness",
      examples: ["Omotenashi", "Clean tables", "Attentive service"]
    },
    {
      title: "Affordable Prices",
      icon: "💰",
      description: "Family-friendly prices making cuisine accessible to all",
      examples: ["Economical sets", "Generous portions", "Drink bar"]
    },
    {
      title: "Local Ingredients",
      icon: "🥬",
      description: "Use of fresh, local Japanese ingredients",
      examples: ["Japanese vegetables", "Japanese rice", "Adapted sauces"]
    },
    {
      title: "Family Atmosphere",
      icon: "👨‍👩‍👧‍👦",
      description: "Restaurants designed for Japanese families",
      examples: ["High chairs", "Kids menus", "Calm atmosphere"]
    },
    {
      title: "Speed",
      icon: "⚡",
      description: "Fast service adapted to Japanese lifestyle pace",
      examples: ["Quick dishes", "Ticket machines", "Efficiency"]
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
            <Link href="/food-type" className="text-gray-500 hover:text-red-600">Food Types</Link>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-gray-900 font-medium">Chinese Cuisine</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-100 to-yellow-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-5xl mr-4">🥟</span>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    Chinese Cuisine
                  </h1>
                  <p className="text-2xl text-gray-600 japanese-text">中華料理</p>
                </div>
              </div>
              <p className="text-xl text-gray-700 mb-6">
                Discover Chinese cuisine adapted to Japanese taste: softened 
                flavors, impeccable service and family-friendly prices. From crispy gyoza 
                to chanpon noodles, a unique culinary fusion.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                  Price: ¥300-1500
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                  Adapted to Japanese taste
                </span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                  Family-friendly
                </span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Chinese Cuisine in Japan</h3>
              <p className="text-gray-600 mb-4">
                Chinese cuisine chains in Japan offer a unique experience: 
                authentic Chinese flavors are adapted to the Japanese palate, 
                creating a culinary fusion accessible to everyone.
              </p>
              <p className="text-gray-600">
                Less spicy than the original Chinese version, but retaining all its aromatic 
                richness, this cuisine represents the Japanese art of cultural adaptation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Adaptations */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Japanese Adaptation of Chinese Cuisine
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {culturalAdaptations.map((adaptation, index) => (
              <div key={index} className="bg-red-50 rounded-xl p-6 border border-red-200">
                <div className="text-3xl mb-4">{adaptation.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{adaptation.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{adaptation.description}</p>
                
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Characteristics:</h4>
                  <div className="space-y-1">
                    {adaptation.examples.map((example, exampleIndex) => (
                      <span key={exampleIndex} className="block text-xs text-gray-600">• {example}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dish Types */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Must-Try Chinese Cuisine Dishes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dishTypes.map((dish, index) => (
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
                    dish.difficulty === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
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
                    <span className="font-semibold text-gray-900">Sauce:</span>
                    <span className="text-gray-600">{dish.sauce}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chains Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Major Chinese Cuisine Chains
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {chineseChains.map((chain, index) => (
              <Link 
                key={index}
                href={chain.href}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-red-200 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-red-600 text-xl">🥟</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                        {chain.name}
                      </h3>
                      <p className="text-gray-600 japanese-text">{chain.japanese}</p>
                      <p className="text-gray-500 text-xs">{chain.atmosphere}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm">{chain.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">Specialties:</h4>
                      <p className="text-sm text-gray-600">{chain.specialties.join(", ")}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">Unique Features:</h4>
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
                        <span className="font-semibold text-gray-900">Ordering: </span>
                        <span className="text-gray-600">{chain.orderingMethod}</span>
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How to Order at a Chinese Restaurant
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-red-50 p-6 rounded-xl border border-red-200">
              <div className="text-3xl mb-4">🥟</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">1. Choose Appetizer</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Gyoza = safe choice</li>
                <li>• 6-8 pieces per person</li>
                <li>• Steamed or grilled</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
              <div className="text-3xl mb-4">🍜</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">2. Main Dish</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Fried rice = familiar</li>
                <li>• Sweet & sour = popular</li>
                <li>• Chanpon = unique</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
              <div className="text-3xl mb-4">🥤</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">3. Drinks</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Drink bar popular</li>
                <li>• Traditional oolong tea</li>
                <li>• Chinese beer available</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <div className="text-3xl mb-4">🍨</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">4. Desserts</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Sesame balls popular</li>
                <li>• Almond tofu refreshing</li>
                <li>• Ice cream sometimes</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-xl border border-gray-200">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Useful Phrases</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p><span className="font-semibold">Gyōza kudasai</span> <span className="japanese-text">ギョーザください</span></p>
                <p className="text-gray-600 mb-2">Gyoza, please</p>
                
                <p><span className="font-semibold">Chāhan wa arimasu ka?</span> <span className="japanese-text">チャーハンはありますか？</span></p>
                <p className="text-gray-600 mb-2">Do you have fried rice?</p>
              </div>
              <div>
                <p><span className="font-semibold">Amaku nai desu ka?</span> <span className="japanese-text">甘くないですか？</span></p>
                <p className="text-gray-600 mb-2">Is it not sweet?</p>
                
                <p><span className="font-semibold">Karai desu ka?</span> <span className="japanese-text">辛いですか？</span></p>
                <p className="text-gray-600">Is it spicy?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-red-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Tips for Chinese Cuisine in Japan
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🌶️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Less Spicy</h3>
              <p className="text-gray-600 text-sm">
                Chinese cuisine in Japan is adapted to the Japanese palate: 
                less spicy and milder than the original Chinese version.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">👨‍👩‍👧‍👦</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Family-Friendly</h3>
              <p className="text-gray-600 text-sm">
                These restaurants are designed for families: generous 
                portions, affordable prices and casual atmosphere.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🥟</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Start with Gyoza</h3>
              <p className="text-gray-600 text-sm">
                Gyoza are an excellent entry point: delicious, 
                inexpensive and loved by all. Perfect for beginners!
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🍚</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Economical Sets</h3>
              <p className="text-gray-600 text-sm">
                Most chains offer sets combining 
                main dish + gyoza + rice, more economical.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🥤</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Drink Bar</h3>
              <p className="text-gray-600 text-sm">
                Many Chinese restaurants offer an all-you-can-drink 
                bar. Excellent value for families.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">⏰</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Fast Service</h3>
              <p className="text-gray-600 text-sm">
                Service is generally fast, ideal for a meal 
                with friends or family without long waits.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
