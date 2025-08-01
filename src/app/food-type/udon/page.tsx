import Link from "next/link";
import CategoryViewTracker from "../../../components/CategoryViewTracker";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Udon: Guide to Thick Japanese Noodles | Japanese Chain Restaurant Guide",
  description: "Discover udon, thick and comforting wheat noodles. Guide to chains like Marugame Seimen and tasting styles.",
  keywords: "udon, Marugame Seimen, Hanamaru Udon, japanese noodles, wheat noodles",
  openGraph: {
    title: "Udon: Guide to Thick Japanese Noodles | Japanese Chain Restaurant Guide",
    description: "Discover udon, thick and comforting wheat noodles. Guide to chains like Marugame Seimen and tasting styles.",
    type: "article",
    url: "https://japonchaines.com/food-type/udon",
    siteName: "Japanese Chain Restaurant Guide",
    locale: "en_US",
    images: [{
      url: "/images/udon-cover.jpg",
      width: 1200,
      height: 630,
      alt: "Udon - Thick Japanese noodles"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Udon: Guide to Thick Japanese Noodles | Japanese Chain Restaurant Guide",
    description: "Discover udon, thick and comforting wheat noodles. Guide to chains like Marugame Seimen and tasting styles.",
    images: ["/images/udon-cover.jpg"]
  },
  alternates: {
    canonical: "https://japonchaines.com/food-type/udon"
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

export default function UdonPage() {
  const udonChains = [
    {
      name: "Marugame Seimen",
      japanese: "丸亀製麺",
      englishName: "Marugame Seimen",
      description: "The leader in udon in Japan, famous for fresh noodles made by hand in front of customers.",
      specialties: ["Kake Udon", "Tempura Udon", "Karaage Udon"],
      priceRange: "¥290-800",
      style: "Self-service, fast-casual",
      orderingMethod: "Queue + self-service",
      vegetarianOptions: "Limited options (fish-based broth)",
      uniqueFeatures: ["Noodles made on site", "Fresh tempura", "Very affordable prices"],
      href: "/chains/marugame-seimen"
    },
    {
      name: "Hanamaru Udon",
      japanese: "はなまるうどん",
      englishName: "Hanamaru Udon",
      description: "Popular udon chain with excellent value for money and many topping options.",
      specialties: ["Zaru Udon", "Curry Udon", "Niku Udon"],
      priceRange: "¥200-600",
      style: "Fast self-service",
      orderingMethod: "Queue + self-service counter",
      vegetarianOptions: "Some options (watch for dashi)",
      uniqueFeatures: ["Mini prices", "Varied toppings", "Fast service"],
      href: "/chains/hanamaru-udon"
    }
  ];

  const udonTypes = [
    {
      name: "Kake Udon",
      japanese: "かけうどん",
      description: "Simple udon in hot dashi broth",
      characteristics: "Simple, pure, economical",
      price: "¥200-400",
      difficulty: "Very easy",
      beginner: true
    },
    {
      name: "Tempura Udon",
      japanese: "天ぷらうどん",
      description: "Udon with crispy shrimp tempura",
      characteristics: "Crispy, hearty, popular",
      price: "¥450-700",
      difficulty: "Easy",
      beginner: true
    },
    {
      name: "Curry Udon",
      japanese: "カレーうどん",
      description: "Udon in thick and fragrant curry broth",
      characteristics: "Fusion, hearty, original",
      price: "¥500-800",
      difficulty: "Easy",
      beginner: false
    },
    {
      name: "Niku Udon",
      japanese: "肉うどん",
      description: "Udon with thin slices of braised beef",
      characteristics: "Protein-rich, flavorful, substantial",
      price: "¥500-900",
      difficulty: "Easy",
      beginner: false
    },
    {
      name: "Zaru Udon",
      japanese: "ざるうどん",
      description: "Cold udon served with dipping sauce",
      characteristics: "Refreshing, summer, pure texture",
      price: "¥400-800",
      difficulty: "Easy",
      beginner: true
    },
    {
      name: "Bukkake Udon",
      japanese: "ぶっかけうどん",
      description: "Udon with concentrated sauce poured directly",
      characteristics: "Intense, modern, textured",
      price: "¥350-600",
      difficulty: "Intermediate",
      beginner: false
    }
  ];

  const servingStyles = [
    {
      name: "Hot (Atsu)",
      japanese: "温かい (あつ)",
      description: "Served in comforting hot broth",
      season: "Autumn/Winter",
      temperature: "Hot",
      popularity: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Cold (Hiya)",
      japanese: "冷たい (ひや)",
      description: "Cold noodles with dipping sauce",
      season: "Spring/Summer",
      temperature: "Cold",
      popularity: "⭐⭐⭐⭐"
    }
  ];

  return (
    <>
      <CategoryViewTracker categoryName="udon" />
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="text-sm">
              <Link href="/" className="text-gray-500 hover:text-blue-600">Home</Link>
              <span className="text-gray-400 mx-2">/</span>
              <Link href="/food-type" className="text-gray-500 hover:text-blue-600">Food Type</Link>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-blue-600 font-medium">Udon</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-cyan-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <span className="text-6xl mr-4">🍲</span>
                  <div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-2">Udon</h1>
                    <p className="text-2xl text-blue-200 japanese-text">うどん</p>
                  </div>
                </div>
                <p className="text-xl mb-6 text-blue-100">
                  The thick and chewy noodles of Kansai. Comforting, 
                  versatile and delicious, udon embodies the conviviality 
                  and simplicity of Japanese cuisine.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                    Price: ¥200-800
                  </span>
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                    Kansai Tradition
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                    Chewy Texture
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
                    Quick Meal
                  </span>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4">The World of Udon</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Thick and elastic wheat noodles
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Origins in the Kansai region
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Characteristic chewy texture
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Infinite variety of preparations
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Perfect for all ages
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Cultural introduction */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  The Chewy Soul of Kansai
                  <span className="block text-lg text-gray-600 mt-2">関西の心</span>
                </h2>
                <div className="prose prose-blue max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Udon represents the spirit of <strong>Kansai</strong> (Osaka-Kyoto-Kobe region): 
                    warm, generous and unpretentious. These <strong>thick wheat noodles</strong> 
                    embody a culinary philosophy where texture takes precedence over complexity.
                  </p>
                  <p className="text-gray-700">
                    Unlike the thin and refined soba of Edo, udon prioritizes 
                    <strong>immediate satisfaction</strong> and comfort. Their chewy 
                    and elastic texture, called <strong>"koshi"</strong>, is the very essence of their identity.
                  </p>
                  <p className="text-gray-700">
                    Today, modern udon chains have democratized this ancient tradition, 
                    making this authentic and affordable <strong>Japanese comfort food</strong> 
                    accessible to everyone.
                  </p>
                </div>
              </div>
              <div className="bg-blue-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Udon Characteristics</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🌾</span>
                    <div>
                      <p className="font-semibold text-gray-900">Ingredients</p>
                      <p className="text-sm text-gray-600">Wheat flour, water, salt</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">📏</span>
                    <div>
                      <p className="font-semibold text-gray-900">Dimensions</p>
                      <p className="text-sm text-gray-600">Thickness: 2-4mm, width: 2-4mm</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🥢</span>
                    <div>
                      <p className="font-semibold text-gray-900">Texture</p>
                      <p className="text-sm text-gray-600">Chewy, elastic, comforting</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🗾</span>
                    <div>
                      <p className="font-semibold text-gray-900">Origin</p>
                      <p className="text-sm text-gray-600">Kansai region (Osaka/Kyoto)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular udon types */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Popular Udon Varieties
              <span className="block text-lg text-gray-600 mt-2">人気のうどん</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {udonTypes.map((type, index) => (
                <div key={index} className={`bg-white rounded-xl p-6 border ${
                  type.beginner ? 'border-green-200 bg-green-50' : 'border-gray-200'
                }`}>
                  {type.beginner && (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-3 inline-block">
                      Beginner recommended
                    </span>
                  )}
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{type.name}</h3>
                  <p className="text-gray-600 japanese-text text-sm mb-3">{type.japanese}</p>
                  <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-900">Character:</span>
                      <span className="text-gray-600">{type.characteristics}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-900">Price:</span>
                      <span className="text-red-600 font-medium">{type.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-900">Difficulty:</span>
                      <span className="text-gray-600">{type.difficulty}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Serving styles */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Two Ways to Enjoy
              <span className="block text-lg text-gray-600 mt-2">二つの食べ方</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {servingStyles.map((style, index) => (
                <div key={index} className={`rounded-xl p-8 border ${
                  style.name.includes('Hot') ? 'bg-red-50 border-red-200' : 'bg-blue-50 border-blue-200'
                }`}>
                  <div className="text-center mb-6">
                    <span className="text-4xl mb-4 block">
                      {style.name.includes('Hot') ? '🔥' : '❄️'}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-900">{style.name}</h3>
                    <p className="text-gray-600 japanese-text">{style.japanese}</p>
                  </div>
                  <p className="text-gray-700 mb-4 text-center">{style.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-900">Season:</span>
                      <span className="text-gray-600">{style.season}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-900">Temperature:</span>
                      <span className="text-gray-600">{style.temperature}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-gray-900">Popularity:</span>
                      <span>{style.popularity}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialized chains */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Major Udon Chains
              <span className="block text-lg text-gray-600 mt-2">主要うどんチェーン</span>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {udonChains.map((chain, index) => (
                <Link 
                  key={index}
                  href={chain.href}
                  className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-200 overflow-hidden"
                >
                  <div className="p-8">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {chain.name}
                        </h3>
                        <p className="text-gray-600 japanese-text">{chain.japanese}</p>
                      </div>
                      <span className="text-blue-600 font-bold text-lg">{chain.priceRange}</span>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{chain.description}</p>
                    
                    <div className="space-y-3 mb-6">
                      <div>
                        <span className="font-semibold text-gray-900">Specialties: </span>
                        <span className="text-gray-600">{chain.specialties.join(", ")}</span>
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
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {chain.uniqueFeatures.map((feature, featureIndex) => (
                        <span key={featureIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-blue-600 font-medium text-sm group-hover:text-blue-700">
                        See details →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Practical guide */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Udon Practical Guide
              <span className="block text-lg text-gray-600 mt-2">うどん実用ガイド</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-4">🍜</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">First Tasting</h3>
                <p className="text-gray-600 text-sm">
                  Start with Kake Udon to appreciate the pure texture of the noodles. 
                  Simplicity reveals the quality of udon.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-4">🥢</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Tasting Technique</h3>
                <p className="text-gray-600 text-sm">
                  Slurp udon noisily to enhance flavors. 
                  The chewy texture is fully revealed this way.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-4">💰</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Value for Money</h3>
                <p className="text-gray-600 text-sm">
                  Udon chains offer an authentic experience at mini prices. 
                  A complete meal for the price of a Parisian coffee!
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-4">🌡️</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">By Season</h3>
                <p className="text-gray-600 text-sm">
                  Summer: refreshing cold udon. Winter: comforting hot udon. 
                  Adapt your choice to the weather!
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-4">⏰</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Optimal Timing</h3>
                <p className="text-gray-600 text-sm">
                  Ultra-fast service: 3-5 minutes. Perfect for an express lunch 
                  between two tourist visits.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-4">🍤</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Popular Toppings</h3>
                <p className="text-gray-600 text-sm">
                  Tempura, soft-boiled egg and negi (green onions) are most appreciated. 
                  Customize according to your taste!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Discover the Conviviality of Udon
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Udon invites you to savor the simplicity and generosity 
              of Kansai cuisine in all its chewy splendor.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/chains/marugame-seimen"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Discover Marugame Seimen
              </Link>
              <Link 
                href="/guides/how-to-order"
                className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Ordering Guide
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
