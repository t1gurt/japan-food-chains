import Link from "next/link";
import ChainViewTracker from "@/components/ChainViewTracker";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hoshino Coffee: The Charm of Retro Kissaten | JapanChains',
  description: 'Discover Hoshino Coffee and its nostalgic Showa-era atmosphere. Siphon coffee, fluffy pancakes, and attentive service.',
  keywords: 'hoshino coffee, kissaten, traditional japanese cafe, showa atmosphere, japanese pancakes, siphon coffee, japanese nostalgia',
  openGraph: {
    title: 'Hoshino Coffee: The Charm of Retro Kissaten | JapanChains',
    description: 'Discover Hoshino Coffee and its nostalgic Showa-era atmosphere. Siphon coffee, fluffy pancakes, and attentive service.',
    type: 'article',
    locale: 'en_US',
    siteName: 'JapanChains - Guide to Japanese Restaurant Chains'
  },
  alternates: {
    canonical: '/chains/hoshino'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function HoshinoPage() {
  return (
    <>
      <ChainViewTracker chainName="hoshino" chainCategory="cafe" />
      
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="text-sm">
              <Link href="/" className="text-gray-500 hover:text-purple-600">Home</Link>
              <span className="text-gray-400 mx-2">/</span>
              <Link href="/type-plat/cafe" className="text-gray-500 hover:text-purple-600">Cafe</Link>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-purple-600 font-medium">Hoshino Coffee</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-amber-900 via-orange-800 to-yellow-700 text-white py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-8">
              <span className="text-6xl mr-4">⭐</span>
              <span className="text-6xl mr-4">☕</span>
              <span className="text-6xl">🌸</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hoshino Coffee
            </h1>
            <p className="text-2xl mb-4 text-yellow-100 japanese-text">星乃コーヒー店 (Hoshino Kōhiten)</p>
            <p className="text-xl mb-8 text-yellow-100">
              The Soul of Modern Showa - Revival of Coffee Nostalgia
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Authentic Showa Nostalgia</h2>
              <p className="text-lg text-yellow-200">
                Since 2011, Hoshino Coffee has been reviving the magic of Showa-era kissaten, 
                creating a temporal bridge between nostalgia for old Japan 
                and contemporary aspirations for authentic comfort.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold">
                Showa Nostalgia
              </span>
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full font-semibold">
                Artisan Siphon Coffee
              </span>
              <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-semibold">
                Signature Pancakes
              </span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* History & Philosophy */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🌸 Revival of the Showa Era
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">⭐ Birth of Nostalgia (2011)</h3>
                  <p className="text-gray-700 mb-4">
                    Hoshino Coffee was born from a romantic vision: to recreate the warm atmosphere 
                    of Showa-era kissaten (1926-1989), 
                    the golden age when time flowed differently.
                  </p>
                  <p className="text-gray-700">
                    The concept blends authentic nostalgia with modern comfort: 
                    vintage furniture, traditional siphon service, but with 
                    today's hospitality and quality standards.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">🕰️ Temporal Philosophy</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Mission:</strong> "Rediscovering lost time." Hoshino embodies 
                    Japan's positive nostalgia: the era when every coffee was 
                    a sensory and emotional journey.
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• <strong>Nostalgia:</strong> Authentic Showa aesthetics</li>
                    <li>• <strong>Craftsmanship:</strong> Traditional siphon coffee</li>
                    <li>• <strong>Comfort:</strong> Warm atmosphere</li>
                    <li>• <strong>Quality:</strong> Premium selected ingredients</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Signature Menu */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                ⭐ The Art of Nostalgic Hoshino Coffee
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* Siphon Coffee */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">☕ Artisan Siphon Coffee</h3>
                  <p className="text-gray-600 japanese-text mb-2">サイフォンコーヒー (Saifon Kōhī)</p>
                  <p className="text-2xl font-bold text-amber-600 mb-3">¥480-¥680</p>
                  <p className="text-gray-700 mb-4">
                    Coffee prepared using the traditional siphon method: 
                    fascinating visual spectacle and incomparable taste of authenticity.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Original Blend:</span>
                      <span className="text-sm font-semibold">¥480</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Premium Siphon:</span>
                      <span className="text-sm font-semibold">¥580</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Special Blend:</span>
                      <span className="text-sm font-semibold">¥680</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Preparation time:</span>
                      <span className="text-sm font-semibold">5-7 min</span>
                    </div>
                  </div>
                </div>

                {/* Signature Pancakes */}
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">� Nostalgic Pancakes</h3>
                  <p className="text-gray-600 japanese-text mb-2">懐かしいパンケーキ (Natsukashi no Pankēki)</p>
                  <p className="text-2xl font-bold text-orange-600 mb-3">¥880-¥1280</p>
                  <p className="text-gray-700 mb-4">
                    Fluffy Showa-style pancakes: thick, tender, served hot 
                    with artisan butter and authentic maple syrup.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Classic Pancakes:</span>
                      <span className="text-sm font-semibold">¥880</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Seasonal Fruits:</span>
                      <span className="text-sm font-semibold">¥1180</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Premium Special:</span>
                      <span className="text-sm font-semibold">¥1280</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Thickness:</span>
                      <span className="text-sm font-semibold">3-4 cm</span>
                    </div>
                  </div>
                </div>

                {/* Retro Specialties */}
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6 border border-yellow-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🍰 Retro Desserts</h3>
                  <p className="text-gray-600 japanese-text mb-2">昭和デザート (Shōwa Dezāto)</p>
                  <p className="text-2xl font-bold text-yellow-600 mb-3">¥580-¥980</p>
                  <p className="text-gray-700 mb-4">
                    Desserts inspired by the Showa era: caramel pudding, 
                    Japanese cheesecake, nostalgic fruit parfaits.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Caramel Pudding:</span>
                      <span className="text-sm font-semibold">¥580</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Cheesecake:</span>
                      <span className="text-sm font-semibold">¥680</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Retro Parfait:</span>
                      <span className="text-sm font-semibold">¥880</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Coffee+Dessert Set:</span>
                      <span className="text-sm font-semibold">¥980</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Complete Menu */}
              <div className="mt-8 bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">🍽️ Complete Hoshino Menu</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Hot Beverages:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Artisan Café au Lait</strong> - ¥520 - Perfectly frothed milk</li>
                      <li>• <strong>Royal Milk Tea (ロイヤルミルクティー)</strong> - ¥480 - Creamy Showa-style tea</li>
                      <li>• <strong>Premium Hot Chocolate</strong> - ¥580 - Authentic Belgian cocoa</li>
                      <li>• <strong>Ceylon Black Tea</strong> - ¥450 - Premium selection</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Light Meals:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Club Sandwich (クラブサンド)</strong> - ¥980 - Generous triple layer</li>
                      <li>• <strong>Thick Buttered Toast</strong> - ¥680 - Artisan bread + farm butter</li>
                      <li>• <strong>Nostalgic Curry</strong> - ¥1080 - Showa-style recipe</li>
                      <li>• <strong>Omelette Rice</strong> - ¥1180 - Japanese comfort food</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Showa Experience */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🌸 The Authentic Showa Experience
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">🕰️ Nostalgic Ambiance</h3>
                  <p className="text-gray-700 mb-4">
                    Carefully designed decor: vintage furniture, dim lighting, 
                    soft jazz music. Every detail evokes the golden age of kissaten.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <strong>Design:</strong> Authentic Showa vintage</li>
                    <li>• <strong>Furniture:</strong> Noble wood, aged leather</li>
                    <li>• <strong>Lighting:</strong> Warm retro lamps</li>
                    <li>• <strong>Music:</strong> Soft jazz and classics</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">☕ Siphon Coffee Ritual</h3>
                  <p className="text-gray-700 mb-4">
                    Fascinating spectacle of siphon preparation: bubbles, steam, 
                    alchemical transformation of coffee. A visual and gustatory art.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Preparation:</span>
                      <span className="font-semibold">5-7 minutes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Temperature:</span>
                      <span className="font-semibold">85-90°C</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Spectacle:</span>
                      <span className="font-semibold">Visible from counter</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Result:</span>
                      <span className="font-semibold">Exceptional coffee</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">🎌 Old-Style Service</h3>
                  <p className="text-gray-700 mb-4">
                    Attentive Showa-style service: exquisite politeness, 
                    perfect timing, attention to the smallest details.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-amber-600 mr-2">✅</span>
                      <span>Personalized warm welcome</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-amber-600 mr-2">✅</span>
                      <span>Careful dish presentation</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-amber-600 mr-2">✅</span>
                      <span>Respected timing, no rush</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-amber-600 mr-2">✅</span>
                      <span>Relaxed and intimate atmosphere</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Pancakes Guide */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                � Signature Pancakes Guide
              </h2>
              
              <div className="bg-amber-50 rounded-xl p-8 border border-amber-200">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-amber-800 mb-4">🎯 The Art of Perfect Pancakes</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</span>
                        <div>
                          <p className="font-semibold text-gray-800">Order with patience</p>
                          <p className="text-sm text-gray-600">Made to order: 15-20 minutes</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</span>
                        <div>
                          <p className="font-semibold text-gray-800">Admire the presentation</p>
                          <p className="text-sm text-gray-600">Served hot, melting butter, syrup on the side</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">3</span>
                        <div>
                          <p className="font-semibold text-gray-800">Enjoy immediately</p>
                          <p className="text-sm text-gray-600">Optimal texture when hot, perfect fluffiness</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="w-8 h-8 bg-amber-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">4</span>
                        <div>
                          <p className="font-semibold text-gray-800">Pair with siphon coffee</p>
                          <p className="text-sm text-gray-600">Perfect match with artisan coffee</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-amber-800 mb-4">💡 Hoshino Pancakes Secrets</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-amber-600 mr-2">📏</span>
                        <span><strong>Thickness:</strong> 3-4 cm, unique fluffy texture</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-600 mr-2">🧈</span>
                        <span><strong>Butter:</strong> Premium farm butter, melting inside</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-600 mr-2">🍯</span>
                        <span><strong>Syrup:</strong> Authentic Canadian maple</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-600 mr-2">⏰</span>
                        <span><strong>Timing:</strong> Ideal for relaxed brunch</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Dietary Requirements */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                ⚠️ Dietary Requirements & Options
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-lg font-bold text-green-800 mb-4">✅ Vegetarian</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Options available</strong>: Pancakes, desserts, beverages. 
                    Limited menu but some delicious choices for vegetarians.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Pancakes (eggs/milk)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>All coffees and teas</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Meat-free desserts</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-2">⚠️</span>
                      <span>Check sandwiches (ham)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-lg font-bold text-blue-800 mb-4">🐷 Pork-Free/Halal</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Generally OK</strong>: Most options 
                    don't contain pork. No official halal certification.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Pancakes, desserts, beverages</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Omelette rice</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-2">⚠️</span>
                      <span>Club sandwich (check)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-2">⚠️</span>
                      <span>Ask staff for details</span>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                  <h3 className="text-lg font-bold text-orange-800 mb-4">⚠️ Allergies</h3>
                  <p className="text-gray-700 mb-4">
                    Premium ingredients with allergen information. 
                    Experienced staff can provide detailed composition details.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">⚠️</span>
                      <span>Gluten (pancakes, bread)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">⚠️</span>
                      <span>Dairy (pancakes, desserts)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">⚠️</span>
                      <span>Eggs (pancakes, desserts)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Trained staff, detailed info</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Showa Culture */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🌸 Hoshino and Showa Nostalgia
              </h2>
              
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">🕰️ The Golden Age Reinvented</h3>
                    <p className="text-gray-700 mb-4">
                      The Showa era (1926-1989) represents for Japanese people an era 
                      of simplicity and authenticity. Hoshino revives this nostalgia 
                      with respect and modern creativity.
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>• <strong>Aesthetics:</strong> Authentic vintage design</li>
                      <li>• <strong>Values:</strong> Craftsmanship and quality time</li>
                      <li>• <strong>Experience:</strong> Assumed and valued slowness</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">⭐ Nostalgic Innovation</h3>
                    <p className="text-gray-700 mb-4">
                      Hoshino doesn't copy the past, it reinterprets it: 
                      modern quality + vintage aesthetics + contemporary service. 
                      A formula that appeals to all generations.
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>• <strong>Multigenerational:</strong> Shared nostalgia</li>
                      <li>• <strong>Quality:</strong> Demanding modern standards</li>
                      <li>• <strong>Emotion:</strong> Connection to the past</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    ⭐ "Hoshino: When Nostalgia Becomes a Way of Life"
                  </h3>
                  <p className="text-gray-600">
                    By reviving the spirit of Showa kissaten, Hoshino Coffee offers much more 
                    than just coffee: a temporal journey to an era when every moment 
                    was savored with intention and beauty.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="text-center">
              <div className="inline-flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/type-plat/cafe"
                  className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  ← Back to Cafe
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
    </>
  );
}



