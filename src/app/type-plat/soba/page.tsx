import Link from "next/link";
import CategoryViewTracker from "../../../components/CategoryViewTracker";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Soba: Guide to Japanese Buckwheat Noodles | JapanChains",
  description: "Discover the art of soba, Japanese buckwheat noodles. Hot or cold serving styles, and guide to chains like Fuji Soba.",
  keywords: "soba, buckwheat noodles, Fuji Soba, Yudetaro, Japanese noodles, zaru soba",
  openGraph: {
    title: "Soba: Guide to Japanese Buckwheat Noodles | JapanChains",
    description: "Discover the art of soba, Japanese buckwheat noodles. Hot or cold serving styles, and guide to chains like Fuji Soba.",
    type: "article",
    url: "https://japanchains.com/type-plat/soba",
    siteName: "JapanChains",
    locale: "en_US",
    images: [{
      url: "/images/soba-cover.jpg",
      width: 1200,
      height: 630,
      alt: "Soba - Japanese buckwheat noodles"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Soba: Guide to Japanese Buckwheat Noodles | JapanChains",
    description: "Discover the art of soba, Japanese buckwheat noodles. Hot or cold serving styles, and guide to chains like Fuji Soba.",
    images: ["/images/soba-cover.jpg"]
  },
  alternates: {
    canonical: "https://japanchains.com/type-plat/soba"
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

export default function SobaPage() {
  const sobaChains = [
    {
      name: "Fuji Soba",
      japanese: "富士そば",
      englishName: "Fuji Soba",
      description: "Traditional Tokyo soba chain, open 24/7, popular with salarymen and office workers.",
      specialties: ["Kake Soba", "Tempura Soba", "Tsukimi Soba"],
      priceRange: "¥350-900",
      style: "Traditional fast food",
      orderingMethod: "Ticket machine",
      vegetarianOptions: "Limited (traditional dashi)",
      uniqueFeatures: ["24/7 operation", "Tokyo style", "Tradition since 1966"],
      href: "/chaines/fuji-soba"
    },
    {
      name: "Yudetaro",
      japanese: "ゆで太郎",
      englishName: "Yudetaro",
      description: "Modern soba chain offering artisanal noodles at affordable prices with quick service.",
      specialties: ["Kake Soba", "Zaru Soba", "Tempura Soba"],
      priceRange: "¥300-600",
      style: "Modern fast-casual",
      orderingMethod: "Ticket machine + self-service",
      vegetarianOptions: "Some options available",
      uniqueFeatures: ["Fresh soba", "Competitive prices", "Artisanal quality"],
      href: "/chaines/yudetaro"
    },
    {
      name: "Komoro Soba",
      japanese: "小諸そば",
      englishName: "Komoro Soba",
      description: "Authentic tachi-gui (standing eating) experience with traditional Shinshu-style soba.",
      specialties: ["Mori Soba", "Tempura Soba", "Curry Nanban"],
      priceRange: "¥290-550",
      style: "Traditional tachi-gui",
      orderingMethod: "Ticket machine + standing counter",
      vegetarianOptions: "Limited (traditional broth)",
      uniqueFeatures: ["Shinshu tradition", "Authentic tachi-gui", "Retro atmosphere"],
      href: "/chaines/komoro-soba"
    }
  ];

  const sobaTypes = [
    {
      name: "Kake Soba",
      japanese: "かけそば",
      description: "Simple soba in hot dashi broth",
      characteristics: "Simple, pure, essence of buckwheat",
      price: "¥290-400",
      difficulty: "Very easy",
      beginner: true
    },
    {
      name: "Zaru Soba",
      japanese: "ざるそば",
      description: "Cold soba served on bamboo mat with dipping sauce",
      characteristics: "Refreshing, summer, pure texture",
      price: "¥400-800",
      difficulty: "Easy",
      beginner: true
    },
    {
      name: "Tempura Soba",
      japanese: "天ぷらそば",
      description: "Soba with delicate shrimp tempura",
      characteristics: "Crispy, hearty, classic",
      price: "¥450-700",
      difficulty: "Easy",
      beginner: true
    },
    {
      name: "Tsukimi Soba",
      japanese: "月見そば",
      description: "Soba with raw egg resembling full moon",
      characteristics: "Poetic, rich, autumnal",
      price: "¥350-550",
      difficulty: "Easy",
      beginner: false
    },
    {
      name: "Tanuki Soba",
      japanese: "たぬきそば",
      description: "Soba with tenkasu (tempura flakes)",
      characteristics: "Crunchy, textural, popular",
      price: "¥320-480",
      difficulty: "Easy",
      beginner: false
    },
    {
      name: "Curry Nanban",
      japanese: "カレー南蛮",
      description: "Soba in spicy curry broth with negi",
      characteristics: "Fusion, spicy, modern",
      price: "¥500-750",
      difficulty: "Intermediate",
      beginner: false
    }
  ];

  const servingStyles = [
    {
      name: "Hot (Atsu)",
      japanese: "温かい (あつ)",
      description: "Served in hot and fragrant dashi broth",
      season: "Autumn/Winter",
      temperature: "Hot",
      popularity: "⭐⭐⭐⭐⭐"
    },
    {
      name: "Cold (Zaru/Mori)",
      japanese: "冷たい (ざる・もり)",
      description: "Cold noodles with concentrated tsuyu sauce",
      season: "Spring/Summer",
      temperature: "Cold",
      popularity: "⭐⭐⭐⭐⭐"
    }
  ];

  const sobaQuality = [
    {
      aspect: "Buckwheat",
      japanese: "そば粉",
      description: "Finely ground buckwheat grains",
      importance: "Determines taste and aroma"
    },
    {
      aspect: "Technique",
      japanese: "技術",
      description: "Precise kneading, cutting and cooking",
      importance: "Influences texture and quality"
    },
    {
      aspect: "Freshness",
      japanese: "新鮮さ",
      description: "Quick consumption after preparation",
      importance: "Preserves optimal taste and texture"
    },
    {
      aspect: "Water",
      japanese: "水",
      description: "Quality of preparation and cooking water",
      importance: "Affects final taste and texture"
    }
  ];

  return (
    <>
      <CategoryViewTracker categoryName="soba" />
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="text-sm">
              <Link href="/" className="text-gray-500 hover:text-purple-600">Home</Link>
              <span className="text-gray-400 mx-2">/</span>
              <Link href="/type-plat" className="text-gray-500 hover:text-purple-600">Dish Types</Link>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-purple-600 font-medium">Soba</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-900 via-indigo-800 to-gray-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <span className="text-6xl mr-4">🌾</span>
                  <div>
                    <h1 className="text-5xl md:text-6xl font-bold mb-2">Soba</h1>
                    <p className="text-2xl text-purple-200 japanese-text">そば</p>
                  </div>
                </div>
                <p className="text-xl mb-6 text-purple-100">
                  Thin buckwheat noodles, jewel of Edo culinary tradition. 
                  Elegant, aromatic and authentic, soba embodies Japanese 
                  philosophy of simplicity and perfection.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                    Price: ¥290-800
                  </span>
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                    Edo Tradition
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                    Authentic Buckwheat
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
                    Refined Taste
                  </span>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4">The Art of Soba</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Thin noodles from pure buckwheat
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Millennial tradition from Edo (Tokyo)
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Subtle and unique aromatic taste
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Preserved artisanal techniques
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Authentic cultural experience
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
                  The Refined Heritage of Edo
                  <span className="block text-lg text-gray-600 mt-2">江戸の洗練された遺産</span>
                </h2>
                <div className="prose prose-purple max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Soba embodies the <strong>soul of Edo</strong> (old Tokyo): refinement, 
                    simplicity and pursuit of perfection through purification. These 
                    <strong>thin buckwheat noodles</strong> represent a culinary philosophy 
                    where less is more.
                  </p>
                  <p className="text-gray-700">
                    Unlike the generous udon from Kansai, soba prioritizes 
                    <strong>aromatic subtlety</strong> and firm texture. The unique taste 
                    of buckwheat, slightly bitter and fragrant, is fully revealed in its simplicity.
                  </p>
                  <p className="text-gray-700">
                    The soba tradition goes beyond simple nourishment: it's a <strong>way of life</strong> 
                    that teaches appreciation of pure flavors and the beauty of the present moment. 
                    Each slurp resonates with centuries of tradition.
                  </p>
                  <p className="text-gray-700">
                    Modern soba chains perpetuate this heritage with respect, 
                    making this <strong>popular haute cuisine</strong> accessible 
                    in the frenetic pace of contemporary Tokyo.
                  </p>
                </div>
              </div>
              <div className="bg-purple-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Philosophy of Soba</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🧘</span>
                    <div>
                      <p className="font-semibold text-gray-900">Simplicity (簡素)</p>
                      <p className="text-sm text-gray-600">Beauty in purity</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">⚡</span>
                    <div>
                      <p className="font-semibold text-gray-900">Instant (瞬間)</p>
                      <p className="text-sm text-gray-600">Savoring the present moment</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🎯</span>
                    <div>
                      <p className="font-semibold text-gray-900">Perfection (完璧)</p>
                      <p className="text-sm text-gray-600">Excellence in details</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🌸</span>
                    <div>
                      <p className="font-semibold text-gray-900">Elegance (優雅)</p>
                      <p className="text-sm text-gray-600">Refinement in sobriety</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Buckwheat quality */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Secrets of Buckwheat
              <span className="block text-lg text-gray-600 mt-2">そば粉の秘密</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {sobaQuality.map((quality, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {quality.aspect}
                  </h3>
                  <p className="text-gray-600 japanese-text text-sm mb-3">
                    {quality.japanese}
                  </p>
                  <p className="text-gray-700 text-sm mb-3">
                    {quality.description}
                  </p>
                  <p className="text-purple-600 text-xs font-medium">
                    {quality.importance}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                The Artisanal Process of Soba
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-3xl mb-3">🌾</div>
                  <h4 className="font-bold text-gray-900 mb-2">1. Selection</h4>
                  <p className="text-sm text-gray-600">
                    Meticulous choice of buckwheat according to region and season. 
                    Every grain counts for final quality.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-3">🥄</div>
                  <h4 className="font-bold text-gray-900 mb-2">2. Kneading</h4>
                  <p className="text-sm text-gray-600">
                    Ancestral technique of mixing water and flour. 
                    The soba master develops perfect gluten.
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-3">🔪</div>
                  <h4 className="font-bold text-gray-900 mb-2">3. Cutting</h4>
                  <p className="text-sm text-gray-600">
                    Precise cutting into uniform noodles. 
                    Thickness determines final texture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular soba types */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Authentic Soba Varieties
              <span className="block text-lg text-gray-600 mt-2">本格そばの種類</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sobaTypes.map((type, index) => (
                <div key={index} className={`bg-white rounded-xl p-6 border ${
                  type.beginner ? 'border-green-200 bg-green-50' : 'border-gray-200'
                }`}>
                  {type.beginner && (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-3 inline-block">
                      Recommended for beginners
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
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Two Tasting Traditions
              <span className="block text-lg text-gray-600 mt-2">二つの食べ方の伝統</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {servingStyles.map((style, index) => (
                <div key={index} className={`rounded-xl p-8 border ${
                  style.name.includes('Hot') ? 'bg-orange-50 border-orange-200' : 'bg-blue-50 border-blue-200'
                }`}>
                  <div className="text-center mb-6">
                    <span className="text-4xl mb-4 block">
                      {style.name.includes('Hot') ? '🍜' : '🥢'}
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

            <div className="mt-12 bg-white rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Art of Soba Tasting
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">🥄 Cold Soba (Zaru/Mori)</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Dip only 1/3 of the noodle in the sauce</li>
                    <li>• Slurp vigorously to release aromas</li>
                    <li>• Finish by drinking cooking water (sobayu)</li>
                    <li>• Appreciate the firm texture of buckwheat</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">🍜 Hot Soba (Kake)</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Slurp quickly before they soften</li>
                    <li>• Broth reveals complementary flavors</li>
                    <li>• Eat noodles first, then broth</li>
                    <li>• Savor the harmony of buckwheat-dashi</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Specialized chains */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Major Soba Chains
              <span className="block text-lg text-gray-600 mt-2">主要そばチェーン</span>
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {sobaChains.map((chain, index) => (
                <Link 
                  key={index}
                  href={chain.href}
                  className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-purple-200 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                          {chain.name}
                        </h3>
                        <p className="text-gray-600 japanese-text">{chain.japanese}</p>
                      </div>
                      <span className="text-purple-600 font-bold text-lg">{chain.priceRange}</span>
                    </div>
                    
                    <p className="text-gray-700 mb-4">{chain.description}</p>
                    
                    <div className="space-y-2 mb-4">
                      <div>
                        <span className="font-semibold text-gray-900">Specialties: </span>
                        <span className="text-gray-600 text-sm">{chain.specialties.join(", ")}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Style: </span>
                        <span className="text-gray-600 text-sm">{chain.style}</span>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {chain.uniqueFeatures.map((feature, featureIndex) => (
                        <span key={featureIndex} className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-xs">
                          {feature}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-purple-600 font-medium text-sm group-hover:text-purple-700">
                        View details →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Cultural guide */}
        <section className="py-16 bg-purple-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Soba Etiquette and Tradition
              <span className="block text-lg text-gray-600 mt-2">そばの作法と伝統</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-4">🥄</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Sobayu (そば湯)</h3>
                <p className="text-gray-600 text-sm">
                  Cooking water from soba, rich in nutrients, is traditionally drunk 
                  after the meal, mixed with remaining tsuyu sauce.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Speed of Consumption</h3>
                <p className="text-gray-600 text-sm">
                  Soba is consumed quickly to preserve texture. 
                  This urgency is an integral part of the culinary experience.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-4">🎋</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Soba Festivals</h3>
                <p className="text-gray-600 text-sm">
                  On December 31st, eating toshikoshi soba (year-end soba) 
                  brings good luck and cuts ties with past misfortunes.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-4">🏔️</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Terroir & Season</h3>
                <p className="text-gray-600 text-sm">
                  Buckwheat varies by region and season. Connoisseurs 
                  appreciate these subtle differences in taste and texture.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-4">🧘</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Culinary Meditation</h3>
                <p className="text-gray-600 text-sm">
                  Tasting soba is considered a form of meditation, 
                  focusing the mind on the present moment and pure flavors.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-4">🎨</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Wabi-Sabi Aesthetics</h3>
                <p className="text-gray-600 text-sm">
                  The beauty of soba lies in their apparent imperfection: 
                  each unique noodle reflects the artisan's hand.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Embark on an Authentic Sensory Journey
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Soba invites you to discover the essence of Japanese cuisine: 
              simplicity, perfection and respect for millennial tradition.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/chaines/fuji-soba"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Discover Fuji Soba
              </Link>
              <Link 
                href="/guides/culture-etiquette"
                className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Cultural Guide
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
