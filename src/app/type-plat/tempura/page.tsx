import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Tempura and Tendon: Japanese Frying Art Guide | Japanese Chain Restaurant Guide",
  description: "Master the art of tempura. Guide to light Japanese fritters and rice bowls (tendon) from chains like Tenya.",
  keywords: "tempura, tendon, Tenya, Tsunahachi, japanese frying, japanese fritters",
  openGraph: {
    title: "Tempura and Tendon: Japanese Frying Art Guide | Japanese Chain Restaurant Guide",
    description: "Master the art of tempura. Guide to light Japanese fritters and rice bowls (tendon) from chains like Tenya.",
    type: "article",
    url: "https://japonchaines.com/type-plat/tempura",
    siteName: "Japanese Chain Restaurant Guide",
    locale: "en_US",
    images: [{
      url: "/images/tempura-cover.jpg",
      width: 1200,
      height: 630,
      alt: "Japanese Tempura - Guide to fritters and tendon"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Tempura and Tendon: Japanese Frying Art Guide | Japanese Chain Restaurant Guide",
    description: "Master the art of tempura. Guide to light Japanese fritters and rice bowls (tendon) from chains like Tenya.",
    images: ["/images/tempura-cover.jpg"]
  },
  alternates: {
    canonical: "https://japonchaines.com/type-plat/tempura"
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

export default function TempuraTendonPage() {
  const tempuraChains = [
    {
      name: "Tenya",
      japanese: "てんや",
      englishName: "Tenya",
      description: "The leader in accessible tempura in Japan. Known for quality tendon at reasonable prices since 1989.",
      specialties: ["All Star Tendon", "Ebi (shrimp) Tendon", "Yasai (vegetable) Tendon"],
      priceRange: "¥500-1200",
      style: "Fast-casual, counter service",
      orderingMethod: "Ticket machine + counter",
      vegetarianOptions: "Excellent (yasai tendon)",
      uniqueFeatures: ["Sesame oil", "House-made tempura batter", "Tendon since 1989"],
      href: "/chains/tenya"
    },
    {
      name: "Tsunahachi",
      japanese: "つな八",
      englishName: "Tsunahachi",
      description: "Premium tempura chain founded in 1923, now present throughout Japan with high standards.",
      specialties: ["Premium Ebi Fry", "Anago Tempura", "Complete Sets"],
      priceRange: "¥1200-2500",
      style: "Traditional restaurant",
      orderingMethod: "Table service",
      vegetarianOptions: "Good vegetable options",
      uniqueFeatures: ["Since 1923", "Premium quality", "Traditional service"],
      href: "/chains/tsunahachi"
    },
    {
      name: "Hanafusa",
      japanese: "花房",
      englishName: "Hanafusa",
      description: "Mid-range tempura chain, popular for family sets and fresh tempura.",
      specialties: ["Mix Tempura Set", "Tempura Soba", "Kakiage Don"],
      priceRange: "¥800-1800",
      style: "Family restaurant",
      orderingMethod: "Table ordering",
      vegetarianOptions: "Vegetable options available",
      uniqueFeatures: ["Family sets", "Soba + tempura", "Guaranteed freshness"],
      href: "/chains/hanafusa"
    }
  ];

  const tempuraTypes = [
    {
      name: "Ebi Tempura",
      japanese: "海老天ぷら",
      description: "Shrimp tempura, the king of tempura",
      characteristics: "Crispy, sweet, juicy",
      difficulty: "Easy",
      price: "¥200-400/piece",
      popularity: "⭐⭐⭐⭐⭐",
      beginner: true
    },
    {
      name: "Yasai Tempura",
      japanese: "野菜天ぷら",
      description: "Various vegetables in tempura (eggplant, pumpkin, etc.)",
      characteristics: "Light, colorful, healthy",
      difficulty: "Easy",
      price: "¥100-250/piece",
      popularity: "⭐⭐⭐⭐",
      beginner: true
    },
    {
      name: "Anago Tempura",
      japanese: "穴子天ぷら",
      description: "Sea eel tempura, refined delicacy",
      characteristics: "Tender, delicate, umami",
      difficulty: "Intermediate",
      price: "¥300-600/piece",
      popularity: "⭐⭐⭐",
      beginner: false
    },
    {
      name: "Kakiage",
      japanese: "かき揚げ",
      description: "Mix of vegetables and/or seafood fried together",
      characteristics: "Varied, hearty, textural",
      difficulty: "Easy",
      price: "¥250-450/portion",
      popularity: "⭐⭐⭐⭐",
      beginner: true
    },
    {
      name: "Ten-zaru Soba",
      japanese: "天ざるそば",
      description: "Cold soba with tempura on the side",
      characteristics: "Refreshing, balanced",
      difficulty: "Easy",
      price: "¥800-1400",
      popularity: "⭐⭐⭐⭐",
      beginner: true
    },
    {
      name: "Ika Tempura",
      japanese: "イカ天ぷら",
      description: "Squid tempura, unique texture",
      characteristics: "Chewy, salty, marine",
      difficulty: "Intermediate",
      price: "¥200-350/piece",
      popularity: "⭐⭐⭐",
      beginner: false
    }
  ];

  const tendonTypes = [
    {
      name: "Ebi Tendon",
      japanese: "海老天丼",
      description: "Rice bowl with shrimp tempura, the absolute classic",
      ingredients: "2-4 shrimp tempura on rice",
      price: "¥700-1200",
      popularity: "⭐⭐⭐⭐⭐"
    },
    {
      name: "All Star Tendon",
      japanese: "オールスター天丼",
      description: "Mix of several tempuras (shrimp, vegetables, fish)",
      ingredients: "Shrimp + vegetables + fish tempura",
      price: "¥900-1500",
      popularity: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Yasai Tendon",
      japanese: "野菜天丼",
      description: "Vegetarian version with seasonal vegetables",
      ingredients: "Eggplant, pumpkin, bell pepper, etc.",
      price: "¥600-1000",
      popularity: "⭐⭐⭐⭐"
    },
    {
      name: "Anago Tendon",
      japanese: "穴子天丼",
      description: "Premium version with sea eel",
      ingredients: "Sea eel + vegetable tempura",
      price: "¥1200-2000",
      popularity: "⭐⭐⭐"
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
            <span className="text-gray-900 font-medium">Tempura & Tendon</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-100 to-yellow-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-5xl mr-4">🍤</span>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    Tempura & Tendon
                  </h1>
                  <p className="text-2xl text-gray-600 japanese-text">天ぷら・天丼</p>
                </div>
              </div>
              <p className="text-xl text-gray-700 mb-6">
                The Japanese art of light frying. Crispy tempura served alone 
                or on rice (tendon) with delicious sweet-savory sauce.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                  Price: ¥500-2500
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                  Light frying
                </span>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                  Culinary art
                </span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Art of Tempura</h3>
              <p className="text-gray-600 mb-4">
                Introduced by Portuguese missionaries in the 16th century, tempura 
                became a pillar of Japanese cuisine thanks to its light, airy 
                batter that enhances ingredients.
              </p>
              <p className="text-gray-600">
                Tendon (tempura + don = bowl) transforms this technique into a 
                complete and affordable dish, perfect for a quick but refined meal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tempura vs Tendon */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Tempura vs Tendon: What's the Difference?
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-orange-50 rounded-xl p-8 border border-orange-200">
              <div className="text-center mb-6">
                <span className="text-4xl mb-4 block">🍤</span>
                <h3 className="text-2xl font-bold text-gray-900">Tempura</h3>
                <p className="text-gray-600 japanese-text">天ぷら</p>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Light frying with airy batter made from flour, egg and ice water</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Served separately with tentsuyu sauce (dashi + soy + mirin)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>More expensive but optimal preservation of crispiness</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>Often accompanied by white rice and miso soup</span>
                </li>
                <li className="flex items-start">
                  <span className="text-orange-500 mr-2">•</span>
                  <span>More refined experience, ideal for sharing</span>
                </li>
              </ul>
            </div>

            <div className="bg-yellow-50 rounded-xl p-8 border border-yellow-200">
              <div className="text-center mb-6">
                <span className="text-4xl mb-4 block">🍚</span>
                <h3 className="text-2xl font-bold text-gray-900">Tendon</h3>
                <p className="text-gray-600 japanese-text">天丼</p>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Tempura served on rice bowl with sweet-savory tendon sauce</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Complete dish in one portion, faster</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>More affordable, perfect for individual meal</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Caramelized sauce that infuses the rice</span>
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-500 mr-2">•</span>
                  <span>Fast-food option but superior quality</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Types of Tempura */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Popular Tempura Types
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tempuraTypes.map((tempura, index) => (
              <div key={index} className={`bg-white rounded-xl p-6 border ${
                tempura.beginner ? 'border-green-200 bg-green-50' : 'border-gray-200'
              }`}>
                {tempura.beginner && (
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-3 inline-block">
                    Beginner recommended
                  </span>
                )}
                <h3 className="text-lg font-bold text-gray-900 mb-1">{tempura.name}</h3>
                <p className="text-gray-600 japanese-text text-sm mb-3">{tempura.japanese}</p>
                <p className="text-gray-600 text-sm mb-4">{tempura.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Character:</span>
                    <span className="text-gray-600">{tempura.characteristics}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Price:</span>
                    <span className="text-red-600 font-medium">{tempura.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Difficulty:</span>
                    <span className="text-gray-600">{tempura.difficulty}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Popularity:</span>
                    <span>{tempura.popularity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tendon Types */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Tendon Types to Try
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tendonTypes.map((tendon, index) => (
              <div key={index} className="bg-yellow-50 rounded-xl p-6 border border-yellow-200">
                <div className="text-center mb-4">
                  <span className="text-3xl mb-2 block">🍚</span>
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{tendon.name}</h3>
                  <p className="text-gray-600 japanese-text text-sm mb-3">{tendon.japanese}</p>
                </div>
                
                <p className="text-gray-600 text-sm mb-4">{tendon.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-semibold text-gray-900">Contents:</span>
                    <p className="text-gray-600 text-xs mt-1">{tendon.ingredients}</p>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Price:</span>
                    <span className="text-red-600 font-medium">{tendon.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Popularity:</span>
                    <span>{tendon.popularity}</span>
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
            Major Tempura Chains
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {tempuraChains.map((chain, index) => (
              <Link 
                key={index}
                href={chain.href}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-orange-200 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-orange-600 text-xl">🍤</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                        {chain.name}
                      </h3>
                      <p className="text-gray-600 japanese-text">{chain.japanese}</p>
                      <p className="text-gray-500 text-xs">{chain.englishName}</p>
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
                        <span className="font-semibold text-gray-900">Vegetarian: </span>
                        <span className="text-gray-600">{chain.vegetarianOptions}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-orange-600 font-medium text-sm group-hover:text-orange-700">
                      See details →
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
            How to Order Tempura and Tendon
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
              <div className="text-3xl mb-4">🎫</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">1. Ticket or Counter</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Tenya = ticket machine</li>
                <li>• Premium chains = table service</li>
                <li>• Payment before or after service</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
              <div className="text-3xl mb-4">🍤</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">2. Dish Type</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Tendon = on rice (more filling)</li>
                <li>• Tempura = separate (lighter)</li>
                <li>• Sets = tempura + rice + miso</li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <div className="text-3xl mb-4">🥢</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">3. Ingredients</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Ebi (shrimp) = most popular</li>
                <li>• Yasai (vegetables) = vegetarian option</li>
                <li>• Mix = multiple ingredients</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <div className="text-3xl mb-4">🍜</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">4. Sides</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Miso shiru (miso soup)</li>
                <li>• Soba/udon with tempura</li>
                <li>• Cabbage salad (complimentary)</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-xl border border-gray-200">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Useful Phrases</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p><span className="font-semibold">Ebi tendon kudasai</span> <span className="japanese-text">海老天丼ください</span></p>
                <p className="text-gray-600 mb-2">A shrimp tendon, please</p>
                
                <p><span className="font-semibold">Yasai tempura arimasu ka?</span> <span className="japanese-text">野菜天ぷらありますか？</span></p>
                <p className="text-gray-600 mb-2">Do you have vegetable tempura?</p>
              </div>
              <div>
                <p><span className="font-semibold">Ten-zaru soba onegaishimasu</span> <span className="japanese-text">天ざるそばお願いします</span></p>
                <p className="text-gray-600 mb-2">Cold soba with tempura, please</p>
                
                <p><span className="font-semibold">Tentsuyu motto kudasai</span> <span className="japanese-text">天つゆもっとください</span></p>
                <p className="text-gray-600">More tempura sauce, please</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-orange-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Tips for Enjoying Tempura
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">⏰</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Eat Quickly</h3>
              <p className="text-gray-600 text-sm">
                Tempura is best when hot and crispy. Don't let it cool too long, 
                especially in tendon where it can get soggy from the sauce.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🥢</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Dipping Technique</h3>
              <p className="text-gray-600 text-sm">
                Gently dip tempura in tentsuyu sauce. Add grated daikon 
                and ginger for fresher flavor and better digestion.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🌱</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Vegetarian Options</h3>
              <p className="text-gray-600 text-sm">
                Vegetable tempura (yasai) is excellent and often cheaper. 
                Perfect for discovering Japanese vegetables like kabocha (pumpkin).
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">💡</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Save Money</h3>
              <p className="text-gray-600 text-sm">
                Tendon are more affordable than tempura alone. Lunch sets 
                often offer excellent value for money.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🍜</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Combine with Soba</h3>
              <p className="text-gray-600 text-sm">
                Ten-zaru soba (cold soba + tempura) is a refreshing summer classic. 
                Perfect balance between hot and cold.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🥗</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Balance the Meal</h3>
              <p className="text-gray-600 text-sm">
                Since tempura is fried, accompany it with fresh vegetables or 
                cabbage salad often offered free at chains.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
