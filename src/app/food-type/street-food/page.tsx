import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Japanese Street Food: Guide to Takoyaki and Yatai | JapanChains",
  description: "Explore Japanese street food. Discover takoyaki from Osaka with Gindako and the culture of street stalls (yatai).",
  keywords: "Japanese street food, takoyaki, Gindako, yatai, osaka street food, taiyaki",
  openGraph: {
    title: "Japanese Street Food: Guide to Takoyaki and Yatai | JapanChains",
    description: "Explore Japanese street food. Discover takoyaki from Osaka with Gindako and the culture of street stalls (yatai).",
    type: "article",
    url: "https://japanchains.com/food-type/street-food",
    siteName: "JapanChains",
    locale: "en_US",
    images: [{
      url: "/images/street-food-cover.jpg",
      width: 1200,
      height: 630,
      alt: "Japanese street food - Takoyaki and yatai"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Japanese Street Food: Guide to Takoyaki and Yatai | JapanChains",
    description: "Explore Japanese street food. Discover takoyaki from Osaka with Gindako and the culture of street stalls (yatai).",
    images: ["/images/street-food-cover.jpg"]
  },
  alternates: {
    canonical: "https://japanchains.com/food-type/street-food"
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

export default function StreetFoodPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-purple-600">Home</Link>
            <span className="text-gray-400 mx-2">/</span>
            <Link href="/food-type" className="text-gray-500 hover:text-purple-600">Food Type</Link>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-purple-600 font-medium">Street Food</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <span className="text-6xl mr-4">🥟</span>
            <span className="text-6xl mr-4">🍡</span>
            <span className="text-6xl">🍢</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Street Food
          </h1>
          <p className="text-2xl mb-4 text-yellow-100 japanese-text">屋台・街角グルメ</p>
          <p className="text-xl mb-8 text-yellow-100">
            Modern Yatai and Takoyaki - The Soul of Japanese Streets
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Japanese Street Food Culture</h2>
            <p className="text-lg text-yellow-200">
              From summer festivals to bustling street corners, Japanese street food 
              transforms every bite into a moment of authentic conviviality, 
              perpetuating a millennial tradition of nomadic culinary excellence.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold">
              Yatai Tradition
            </span>
            <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-semibold">
              Takoyaki Master
            </span>
            <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-semibold">
              Festival Vibes
            </span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Introduction */}
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              🏮 The World of Japanese Street Food
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-6">
                Japanese street food transcends simple fast food: 
                it's a culinary art where each specialty tells the story of a region, 
                a tradition and know-how passed down through generations.
              </p>
              <p className="text-lg text-gray-700">
                From Osaka takoyaki to Tokyo taiyaki, discover these modern chains 
                that perpetuate the excellence of traditional Japanese street food.
              </p>
            </div>
          </div>

          {/* Street Food Chains */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              🥟 Street Food Chains in Japan
            </h2>
            
            <div className="grid md:grid-cols-1 gap-8">
              {/* Gindako */}
              <Link href="/chains/gindako">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8 border border-red-200 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <div className="flex items-center mb-6">
                    <div className="flex items-center mr-6">
                      <span className="text-4xl mr-3">🐙</span>
                      <span className="text-4xl mr-3">🥟</span>
                      <span className="text-4xl">🔥</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-red-700 transition-colors">
                        Gindako (銀だこ)
                      </h3>
                      <p className="text-lg text-gray-600">Takoyaki Master from Osaka</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">🐙 Authentic Takoyaki</h4>
                      <p className="text-gray-700 mb-4">
                        Real Osaka takoyaki: creamy batter, tender octopus, 
                        perfect cooking in traditional cast iron plates.
                      </p>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">6 takoyaki:</span>
                          <span className="font-semibold">¥480</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">8 takoyaki:</span>
                          <span className="font-semibold">¥580</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Specialty:</span>
                          <span className="font-semibold">Secret sauce</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">🔥 Live Experience</h4>
                      <p className="text-gray-700 mb-4">
                        Live culinary show: watch takoyaki masters 
                        manipulate chopsticks with impressive dexterity.
                      </p>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Cooking:</span>
                          <span className="font-semibold">3-4 min</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Temperature:</span>
                          <span className="font-semibold">Very hot</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Service:</span>
                          <span className="font-semibold">Freshly prepared</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-red-200">
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Specialty:</strong> Traditional Osaka takoyaki, signature sauce, mayonnaise
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Atmosphere:</strong> Authentic street food, live cooking, festival ambiance
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Yatai Culture */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              🏮 Yatai Culture (屋台)
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🏛️ Millennial History</h3>
                <p className="text-gray-700 mb-4">
                  Yatai (street stalls) date back to the Edo period. Symbols of 
                  conviviality, they transform streets into places of social gathering.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>Origin:</strong> Edo period (1603-1868)</li>
                  <li>• <strong>Concept:</strong> Mobile street cuisine</li>
                  <li>• <strong>Social:</strong> Popular meeting place</li>
                  <li>• <strong>Evolution:</strong> Tradition to modernity</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🎭 Festivals & Matsuri</h3>
                <p className="text-gray-700 mb-4">
                  During festivals (matsuri), street food becomes central: 
                  each specialty evokes collective joy and community spirit.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>Events:</strong> Seasonal festivals</li>
                  <li>• <strong>Atmosphere:</strong> Convivial, festive</li>
                  <li>• <strong>Sharing:</strong> Collective experience</li>
                  <li>• <strong>Tradition:</strong> Passed to children</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-red-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🏢 Modernization</h3>
                <p className="text-gray-700 mb-4">
                  Modern chains preserve the soul of yatai: artisanal quality, 
                  live cooking, direct interaction, while ensuring hygiene and accessibility.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>Hygiene:</strong> Modern standards</li>
                  <li>• <strong>Accessibility:</strong> Shopping centers</li>
                  <li>• <strong>Quality:</strong> Constant and reliable</li>
                  <li>• <strong>Authenticity:</strong> Preserved flavors</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Street Food Specialties */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              🍡 Japanese Street Food Specialties
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🐙 Takoyaki (たこ焼き)</h3>
                <p className="text-gray-700 mb-4">
                  Osaka specialty: batter balls with octopus pieces, 
                  cooked in special plates, topped with sauce and mayonnaise.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Ingredients:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Octopus (tako)</li>
                      <li>• Flour batter</li>
                      <li>• Green onions</li>
                      <li>• Pickled ginger</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Toppings:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Takoyaki sauce</li>
                      <li>• Mayonnaise</li>
                      <li>• Katsuobushi (bonito)</li>
                      <li>• Aonori (seaweed)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🍢 Other Specialties</h3>
                <p className="text-gray-700 mb-4">
                  Japanese street food offers impressive variety: 
                  from sweet to savory, each region has its emblematic specialties.
                </p>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800">🍡 <strong>Dango</strong> - Sweet rice dumplings</span>
                    <span className="text-gray-600">¥100-200</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800">🐟 <strong>Taiyaki</strong> - Fish-shaped red bean pastry</span>
                    <span className="text-gray-600">¥150-250</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800">🍢 <strong>Yakitori</strong> - Chicken skewers</span>
                    <span className="text-gray-600">¥100-300</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-800">🥞 <strong>Imagawayaki</strong> - Filled pancake</span>
                    <span className="text-gray-600">¥150-200</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Takoyaki Guide */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              🐙 Expert Takoyaki Guide
            </h2>
            
            <div className="bg-red-50 rounded-xl p-8 border border-red-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-red-800 mb-2">
                  The Art of Perfect Takoyaki
                </h3>
                <p className="text-gray-700">
                  Enjoying takoyaki is more than a meal: it's a sensory 
                  experience that requires technique and patience for optimal flavor.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-3">🔥 Critical Temperature</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    <strong>Warning:</strong> Takoyaki come out burning hot (80°C+). 
                    Respect cooling time to avoid burns.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Wait 2-3 minutes</li>
                    <li>• Blow gently</li>
                    <li>• Test carefully</li>
                    <li>• Center may remain very hot</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-3">🥢 Tasting Technique</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    Use provided chopsticks, pierce delicately, 
                    and savor each bite with the toppings.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Pierce with chopsticks</li>
                    <li>• Mix toppings</li>
                    <li>• Moderate-sized bites</li>
                    <li>• Savor the textures</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-3">🎯 Complete Experience</h4>
                  <p className="text-sm text-gray-700 mb-3">
                    True pleasure comes from the preparation show: 
                    watch the master turn takoyaki with expertise.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Observe live cooking</li>
                    <li>• Appreciate dexterity</li>
                    <li>• Smell the aromas</li>
                    <li>• Authentic atmosphere</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Dietary Requirements */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              🥗 Dietary Requirements & Street Food
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-lg font-bold text-green-800 mb-4">🌱 Vegetarian</h3>
                <p className="text-gray-700 mb-4">
                  <strong>Difficult</strong> in traditional street food. 
                  Takoyaki contains octopus, most specialties include meat/fish.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• ❌ Takoyaki (octopus)</li>
                  <li>• ❌ Yakitori (chicken)</li>
                  <li>• ✅ Some sweet desserts</li>
                  <li>• ⚠️ Check broths (fish)</li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-bold text-blue-800 mb-4">🐷 No Pork/Halal</h3>
                <p className="text-gray-700 mb-4">
                  <strong>Possible</strong> but watch out for sauces and broths. 
                  Takoyaki generally OK, check other specialties.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• ✅ Takoyaki (octopus + batter)</li>
                  <li>• ❌ Some yakitori (pork)</li>
                  <li>• ⚠️ Sauces (check ingredients)</li>
                  <li>• ⚠️ No halal certification</li>
                </ul>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                <h3 className="text-lg font-bold text-orange-800 mb-4">⚠️ Allergies</h3>
                <p className="text-gray-700 mb-4">
                  Special attention required: many common allergens 
                  in traditional ingredients.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• ⚠️ Gluten (flour batter)</li>
                  <li>• ⚠️ Seafood (octopus)</li>
                  <li>• ⚠️ Eggs (in some batters)</li>
                  <li>• ⚠️ Soy (sauces)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Link 
                href="/food-type"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                ← All Types
              </Link>
              <Link 
                href="/chains"
                className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                All Chains
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
