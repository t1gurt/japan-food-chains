import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Japanese Cafes (Kissaten): Chain Guide and Culture | Japan Food Chains",
  description: "Discover the unique culture of Japanese cafes (kissaten). From Komeda's \"Morning Service\" to Hoshino's retro atmosphere.",
  keywords: "Japanese cafes, kissaten, Komeda Coffee, Hoshino Coffee, morning service",
  openGraph: {
    title: "Japanese Cafes (Kissaten): Chain Guide and Culture | Japan Food Chains",
    description: "Discover the unique culture of Japanese cafes (kissaten). From Komeda's \"Morning Service\" to Hoshino's retro atmosphere.",
    type: "article",
    url: "https://japanfoodchains.com/type-plat/cafe",
    siteName: "Japan Food Chains",
    locale: "en_US",
    images: [{
      url: "/images/cafes-japonais-cover.jpg",
      width: 1200,
      height: 630,
      alt: "Japanese cafes - Kissaten and modern chains"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Japanese Cafes (Kissaten): Chain Guide and Culture | Japan Food Chains",
    description: "Discover the unique culture of Japanese cafes (kissaten). From Komeda's \"Morning Service\" to Hoshino's retro atmosphere.",
    images: ["/images/cafes-japonais-cover.jpg"]
  },
  alternates: {
    canonical: "https://japanfoodchains.com/type-plat/cafe"
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

export default function CafePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-purple-600">Home</Link>
            <span className="text-gray-400 mx-2">/</span>
            <Link href="/type-plat" className="text-gray-500 hover:text-purple-600">Dish Types</Link>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-purple-600 font-medium">Cafe</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-amber-800 via-yellow-700 to-orange-600 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <span className="text-6xl mr-4">☕</span>
            <span className="text-6xl mr-4">🥛</span>
            <span className="text-6xl">🍰</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Cafe
          </h1>
          <p className="text-2xl mb-4 text-yellow-100 japanese-text">カフェ・喫茶店</p>
          <p className="text-xl mb-8 text-yellow-100">
            Kissaten and Modern Cafes - The Art of Timeless Moments
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Japanese Cafe Culture</h2>
            <p className="text-lg text-yellow-200">
              More than just a simple cafe, the Japanese kissaten is a cultural refuge 
              where tradition, hospitality, and that unique atmosphere 
              that defines the soul of modern urban Japan blend together.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold">
              Traditional Kissaten
            </span>
            <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full font-semibold">
              Morning Service
            </span>
            <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-semibold">
              Omotenashi Hospitality
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
              🏮 The World of Japanese Cafes
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-6">
                Japanese cafes embody a unique philosophy where time takes 
                on a different dimension. From traditional kissaten to modern chains, 
                they offer much more than just a coffee break: a true art of living.
              </p>
              <p className="text-lg text-gray-700">
                Discover these spaces where Japanese hospitality (omotenashi) transforms 
                each visit into an authentic moment of rejuvenation.
              </p>
            </div>
          </div>

          {/* Cafe Chains */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              ☕ Cafe Chains in Japan
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Komeda Coffee */}
              <Link href="/chains/komeda">
                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-6 border border-amber-200 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">☕</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors">
                        Komeda Coffee
                      </h3>
                      <p className="text-sm text-gray-600 japanese-text">コメダ珈琲店</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">🌅 Morning Service</h4>
                      <p className="text-sm text-gray-700">
                        Thick toast + hard-boiled egg offered with any coffee before 11am. Tradition since 1968!
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">🍰 Shironoir</h4>
                      <p className="text-sm text-gray-700">
                        The famous dessert: warm brioche, vanilla ice cream, black syrup.
                      </p>
                    </div>
                    
                    <div className="text-xs text-gray-600 space-y-1">
                      <div className="flex justify-between">
                        <span>Coffee price:</span>
                        <span className="font-semibold">¥450-650</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Shironoir:</span>
                        <span className="font-semibold">¥580</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-amber-200">
                    <p className="text-xs text-gray-600">
                      <strong>Style:</strong> Modern kissaten, omotenashi hospitality
                    </p>
                  </div>
                </div>
              </Link>

              {/* Doutor Coffee */}
              <Link href="/chains/doutor">
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">🚀</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-700 transition-colors">
                        Doutor Coffee
                      </h3>
                      <p className="text-sm text-gray-600 japanese-text">ドトールコーヒー</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">🚀 Coffee Pioneer</h4>
                      <p className="text-sm text-gray-700">
                        Revolutionary since 1980: European quality, Japanese speed.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">🥪 Milano Sandwiches</h4>
                      <p className="text-sm text-gray-700">
                        Focaccia bread, premium ingredients, adapted European flavors.
                      </p>
                    </div>
                    
                    <div className="text-xs text-gray-600 space-y-1">
                      <div className="flex justify-between">
                        <span>Blend Coffee:</span>
                        <span className="font-semibold">¥220</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Milano Sandwich:</span>
                        <span className="font-semibold">¥420-450</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-orange-200">
                    <p className="text-xs text-gray-600">
                      <strong>Style:</strong> Modern, efficient, great value
                    </p>
                  </div>
                </div>
              </Link>

              {/* Hoshino Coffee */}
              <Link href="/chains/hoshino">
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6 border border-yellow-200 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <div className="flex items-center mb-4">
                    <span className="text-3xl mr-3">⭐</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-amber-700 transition-colors">
                        Hoshino Coffee
                      </h3>
                      <p className="text-sm text-gray-600 japanese-text">星乃珈琲店</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">🌸 Showa Nostalgia</h4>
                      <p className="text-sm text-gray-700">
                        Revival of the Showa era: siphon coffee, vintage furniture.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">🥞 Signature Pancakes</h4>
                      <p className="text-sm text-gray-700">
                        Thick Showa-style pancakes, exceptionally fluffy, artisanal butter.
                      </p>
                    </div>
                    
                    <div className="text-xs text-gray-600 space-y-1">
                      <div className="flex justify-between">
                        <span>Siphon Coffee:</span>
                        <span className="font-semibold">¥480-680</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Pancakes:</span>
                        <span className="font-semibold">¥880</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-3 border-t border-yellow-200">
                    <p className="text-xs text-gray-600">
                      <strong>Style:</strong> Authentic vintage, nostalgic atmosphere
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Kissaten Culture */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              🏛️ Kissaten Culture (喫茶店)
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🕰️ Suspended Time</h3>
                <p className="text-gray-700 mb-4">
                  Kissaten offers a temporal refuge where the urban pace slows down. 
                  Here, there's no pressure to leave quickly: you savor the moment.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>Duration:</strong> 1-3 hours accepted</li>
                  <li>• <strong>Atmosphere:</strong> Muted, relaxing</li>
                  <li>• <strong>Activities:</strong> Reading, work, meditation</li>
                  <li>• <strong>Music:</strong> Soft jazz, classical</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🌸 Omotenashi</h3>
                <p className="text-gray-700 mb-4">
                  Japanese hospitality is expressed in every detail: 
                  attentive service, complimentary ice water, respect for customers.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>Service:</strong> Discreet but attentive</li>
                  <li>• <strong>Complimentary:</strong> Water, hot towels</li>
                  <li>• <strong>Respect:</strong> Privacy preserved</li>
                  <li>• <strong>Quality:</strong> Consistent and reliable</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🏮 Modern Tradition</h3>
                <p className="text-gray-700 mb-4">
                  Modern chains preserve the essence of kissaten 
                  while innovating: Morning Service, quality standardization.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>Innovation:</strong> Unique services</li>
                  <li>• <strong>Accessibility:</strong> Democratic prices</li>
                  <li>• <strong>Expansion:</strong> Throughout Japan</li>
                  <li>• <strong>Consistency:</strong> Standardized experience</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Types of Cafes */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              ☕ Types of Cafes in Japan
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🏛️ Traditional Kissaten</h3>
                <p className="text-gray-700 mb-4">
                  Old-fashioned cafe, often family-run, retro atmosphere, 
                  siphon service, loyal clientele. The authentic Japanese experience.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Characteristics:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Vintage decor</li>
                      <li>• Personal service</li>
                      <li>• Siphon coffee</li>
                      <li>• Muted atmosphere</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Average prices:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Coffee: ¥400-600</li>
                      <li>• Toast: ¥300-500</li>
                      <li>• Dessert: ¥400-700</li>
                      <li>• Meal: ¥800-1200</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🏢 Modern Chain</h3>
                <p className="text-gray-700 mb-4">
                  Standardized chains preserving the kissaten spirit 
                  with modern innovations: Morning Service, wifi, accessibility.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Advantages:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• Consistent quality</li>
                      <li>• Innovative services</li>
                      <li>• Accessible prices</li>
                      <li>• Free wifi</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Chain Examples:</h4>
                    <ul className="text-gray-600 space-y-1">
                      <li>• <strong>Komeda:</strong> Morning Service pioneer</li>
                      <li>• <strong>Doutor:</strong> Modern cafe innovation</li>
                      <li>• <strong>Hoshino:</strong> Authentic Showa nostalgia</li>
                      <li>• Universal omotenashi service</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Morning Service Guide */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              🌅 Morning Service Guide
            </h2>
            
            <div className="bg-yellow-50 rounded-xl p-8 border border-yellow-200">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-yellow-800 mb-2">
                  The Morning Service Phenomenon
                </h3>
                <p className="text-gray-700">
                  Revolutionary Japanese invention: free breakfast 
                  with your morning coffee. A concept that has conquered all of Japan.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-3">⏰ How it works</h4>
                  <ol className="text-sm text-gray-700 space-y-2">
                    <li>1. Arrive before 11:00 AM</li>
                    <li>2. Order a coffee (hot/iced)</li>
                    <li>3. Receive toast + egg FREE</li>
                    <li>4. Enjoy leisurely</li>
                  </ol>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-3">💡 Tips</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• Best deal: ¥450 = complete breakfast</li>
                    <li>• 7-8 AM less crowded</li>
                    <li>• Butter/jam provided</li>
                    <li>• Can request variations</li>
                  </ul>
                </div>
                
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-bold text-gray-900 mb-3">🎯 Where to find</h4>
                  <ul className="text-sm text-gray-700 space-y-2">
                    <li>• <strong>Komeda:</strong> Morning Service pioneer</li>
                    <li>• <strong>Doutor:</strong> Quick morning set</li>
                    <li>• <strong>Hoshino:</strong> Nostalgic brunch</li>
                    <li>• <strong>Local kissaten:</strong> Various versions</li>
                    <li>• <strong>Nagoya region:</strong> Most widespread</li>
                    <li>• <strong>Tokyo/Osaka:</strong> Main chains</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Dietary Requirements */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              🥗 Dietary Requirements in Cafes
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                <h3 className="text-lg font-bold text-green-800 mb-4">✅ Vegetarian</h3>
                <p className="text-gray-700 mb-4">
                  Limited but possible options: desserts, drinks, 
                  some dishes without meat. Check egg/milk ingredients.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• ✅ All coffees and teas</li>
                  <li>• ✅ Desserts (Shironoir, cakes)</li>
                  <li>• ✅ Plain toast (without ham)</li>
                  <li>• ⚠️ Check eggs in Morning Service</li>
                </ul>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-bold text-blue-800 mb-4">🐷 No Pork/Halal</h3>
                <p className="text-gray-700 mb-4">
                  Watch out for dishes containing pork. No halal certification 
                  but possible options to check with staff.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• ✅ Coffees, teas, desserts</li>
                  <li>• ❌ Ham sandwiches</li>
                  <li>• ⚠️ Hot dogs (check sausage)</li>
                  <li>• ⚠️ Ask staff for details</li>
                </ul>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                <h3 className="text-lg font-bold text-orange-800 mb-4">⚠️ Allergies</h3>
                <p className="text-gray-700 mb-4">
                  Menus with allergen information available. 
                  Staff trained to provide detailed ingredient information.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• ⚠️ Gluten (bread, pastries)</li>
                  <li>• ⚠️ Milk (desserts, cafe au lait)</li>
                  <li>• ⚠️ Eggs (Morning Service, cakes)</li>
                  <li>• ✅ Allergen menus available</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Link 
                href="/type-plat"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                ← All Types
              </Link>
              <Link 
                href="/chaines"
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
