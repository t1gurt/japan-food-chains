import Link from "next/link";
import ChainViewTracker from "@/components/ChainViewTracker";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Gindako 銀だこ | King of Takoyaki | Japan Food Chains",
  description: "Crispy outside, creamy inside takoyaki. Osaka octopus balls.",
  keywords: [
    'gindako', '銀だこ', 'takoyaki', 'osaka takoyaki',
    'street food', 'octopus balls', 'osaka cuisine',
    'crispy takoyaki', 'king of takoyaki', 'specialty osaka'
  ],
  openGraph: {
    title: "Gindako 銀だこ | King of Takoyaki | Japan Food Chains",
    description: "Crispy outside, creamy inside takoyaki. Osaka octopus balls.",
    type: 'article',
    locale: "en_US",
    siteName: "Japan Food Chains - Japanese Restaurant Guide"
  },
  alternates: {
    canonical: '/chains/gindako',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  },
};

export default function GindakoPage() {
  return (
    <>
      <ChainViewTracker chainName="gindako" chainCategory="street-food" />
      
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="text-sm">
              <Link href="/" className="text-gray-500 hover:text-purple-600">Home</Link>
              <span className="text-gray-400 mx-2">/</span>
              <Link href="/dish-types/street-food" className="text-gray-500 hover:text-purple-600">Street Food</Link>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-purple-600 font-medium">Gindako</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-800 via-orange-700 to-yellow-600 text-white py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-8">
              <span className="text-6xl mr-4">🐙</span>
              <span className="text-6xl mr-4">🔥</span>
              <span className="text-6xl">🥢</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Gindako
            </h1>
            <p className="text-2xl mb-4 text-orange-100 japanese-text">銀だこ</p>
            <p className="text-xl mb-8 text-orange-100">
              The King of Takoyaki - Osaka Octopus Balls to the World
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">The Art of Authentic Takoyaki</h2>
              <p className="text-lg text-orange-200">
                Since 1997, Gindako has revolutionized traditional Osaka takoyaki by creating 
                octopus balls that are perfectly crispy on the outside and 
                creamy on the inside, in the authentic spirit of Japanese street food.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-semibold">
                Osaka Specialty
              </span>
              <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-semibold">
                Premium Street Food
              </span>
              <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold">
                Tradition 1997
              </span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* History & Innovation */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🏮 Modern Takoyaki Innovation
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">🐙 Takoyaki Revolution (1997)</h3>
                  <p className="text-gray-700 mb-4">
                    Gindako was born in 1997 with a revolutionary mission: to transform traditional Osaka takoyaki 
                    into a high-quality standardized product, accessible throughout Japan and the world.
                  </p>
                  <p className="text-gray-700">
                    The main innovation: a unique cooking technique that guarantees 
                    the perfect "kari-fuma" (crispy-creamy) texture with every bite.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">🌍 Global Expansion</h3>
                  <p className="text-gray-700 mb-4">
                    From its beginnings in Tokyo, Gindako has established itself as THE global reference 
                    for takoyaki, exporting this Osaka specialty to over 10 countries.
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• <strong>1997:</strong> First stand in Tokyo</li>
                    <li>• <strong>2000s:</strong> National expansion in Japan</li>
                    <li>• <strong>2010s:</strong> Asia openings (Taiwan, Hong Kong)</li>
                    <li>• <strong>2020s:</strong> Global presence (USA, Europe)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Takoyaki Menu */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🐙 The Art of Gindako Takoyaki
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* Classic Takoyaki */}
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🔥 Classic Takoyaki</h3>
                  <p className="text-gray-600 japanese-text mb-2">たこ焼き</p>
                  <p className="text-2xl font-bold text-red-600 mb-3">580¥ (8 pieces)</p>
                  <p className="text-gray-700 mb-4">
                    The original Gindako takoyaki: perfectly round balls with 
                    generous octopus pieces, secret takoyaki sauce, mayonnaise 
                    and dancing bonito flakes.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Octopus:</span>
                      <span className="text-sm font-semibold">Fresh, generous</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Texture:</span>
                      <span className="text-sm font-semibold">Kari-fuma</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Sauce:</span>
                      <span className="text-sm font-semibold">Secret recipe</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Topping:</span>
                      <span className="text-sm font-semibold">Katsuobushi + Mayo</span>
                    </div>
                  </div>
                </div>

                {/* Premium Takoyaki */}
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">⭐ Premium Takoyaki</h3>
                  <p className="text-gray-600 japanese-text mb-2">プレミアムたこ焼き</p>
                  <p className="text-2xl font-bold text-orange-600 mb-3">780¥-980¥ (8 pieces)</p>
                  <p className="text-gray-700 mb-4">
                    High-end versions with premium ingredients: selected octopus, 
                    special sauces, refined toppings and creative presentations.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Jumbo Tako:</span>
                      <span className="text-sm font-semibold">780¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Cheese Tako:</span>
                      <span className="text-sm font-semibold">680¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Mentai Mayo:</span>
                      <span className="text-sm font-semibold">750¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Special Limited:</span>
                      <span className="text-sm font-semibold">980¥</span>
                    </div>
                  </div>
                </div>

                {/* Sets & Sides */}
                <div className="bg-gradient-to-br from-yellow-50 to-red-50 rounded-xl p-6 border border-yellow-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🥤 Sets & Drinks</h3>
                  <p className="text-gray-600 japanese-text mb-2">セット・ドリンク</p>
                  <p className="text-2xl font-bold text-yellow-600 mb-3">800¥-1200¥</p>
                  <p className="text-gray-700 mb-4">
                    Takoyaki sets with fresh drinks, Osaka side dishes 
                    and dessert options for a complete street food experience.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Set Drink:</span>
                      <span className="text-sm font-semibold">800¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Set Dessert:</span>
                      <span className="text-sm font-semibold">950¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Set Mega:</span>
                      <span className="text-sm font-semibold">1200¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Drink only:</span>
                      <span className="text-sm font-semibold">200¥-350¥</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Cooking Technique */}
              <div className="mt-8 bg-orange-50 rounded-xl p-6 border border-orange-200">
                <h3 className="text-lg font-bold text-orange-800 mb-4">🔥 The Gindako Technique</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">🎯 "Kari-Fuma" Perfection</h4>
                    <p className="text-sm text-gray-700">
                      <strong>Gindako Secret:</strong> Two-step cooking technique that guarantees 
                      a perfectly crispy ("kari") exterior and a creamy ("fuma") interior. 
                      This unique texture is the brand's signature.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">🐙 Premium Ingredients:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Fresh octopus selected daily</li>
                      <li>• Authentic dashi-based batter</li>
                      <li>• Secret takoyaki sauce recipe since 1997</li>
                      <li>• Premium katsuobushi (bonito flakes)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Street Food Experience */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🎪 The Gindako Street Food Experience
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">🏪 Stand Concept</h3>
                  <p className="text-gray-700 mb-4">
                    Compact stand format typical of Japanese street food. 
                    Live cooking visible, fast service, relaxed 
                    and friendly atmosphere.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <strong>Format:</strong> Compact stand</li>
                    <li>• <strong>Service:</strong> Takeaway priority</li>
                    <li>• <strong>Cooking:</strong> Live, visible</li>
                    <li>• <strong>Wait time:</strong> 3-7 minutes</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">🎯 How to Order</h3>
                  <p className="text-gray-700 mb-4">
                    Simple system: visual menu, counter order, 
                    immediate payment, short wait and pickup.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-2 text-xs font-bold">1</span>
                      <span>Visual menu selection</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-2 text-xs font-bold">2</span>
                      <span>Order at counter</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-2 text-xs font-bold">3</span>
                      <span>Immediate payment</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-2 text-xs font-bold">4</span>
                      <span>Quick pickup</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">📍 Location</h3>
                  <p className="text-gray-700 mb-4">
                    Strategically located stands in high-traffic areas: 
                    stations, shopping malls, lively districts.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">JR Stations:</span>
                      <span className="font-semibold">Frequent</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Shopping malls:</span>
                      <span className="font-semibold">Food courts</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Youth districts:</span>
                      <span className="font-semibold">Shibuya, Harajuku</span>
                    </div>
                    <div className="flex justify-between border-t pt-2 mt-2">
                      <span className="text-gray-800 font-semibold">Hours:</span>
                      <span className="font-bold text-red-600">10h-21h</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Practical Guide */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                💡 Practical Guide for Visitors
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-xl font-bold text-green-800 mb-4">✅ Recommendations</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">🐙</span>
                      <span><strong>Start with the classic:</strong> 8-piece Takoyaki to discover the authentic taste</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">🔥</span>
                      <span><strong>Eat hot:</strong> Best immediately after cooking, optimal texture</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">🥢</span>
                      <span><strong>Technique:</strong> Use the provided toothpicks, be careful it's very hot!</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">📱</span>
                      <span><strong>Gindako App:</strong> Stand locations and exclusive promotions</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">ℹ️ Practical Information</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">🏪</span>
                      <span><strong>Distribution:</strong> Over 800 stands throughout Japan</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">🚇</span>
                      <span><strong>Access:</strong> Mainly in/near major train stations</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">💳</span>
                      <span><strong>Payment:</strong> Cash + IC cards (Suica/Pasmo) + credit cards</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">🌐</span>
                      <span><strong>International:</strong> Present in Asia, USA, some European cities</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Dietary Regimes */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                � Dietary Regimes & Restrictions
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                  <h3 className="text-lg font-bold text-red-800 mb-4">🚫 Vegetarian/Vegan</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Not suitable</strong>: Takoyaki contains octopus and the batter 
                    uses dashi (fish broth). No vegetarian options.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">❌</span>
                      <span>Octopus (main ingredient)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">❌</span>
                      <span>Dashi (fish broth)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">❌</span>
                      <span>Katsuobushi (bonito flakes)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                  <h3 className="text-lg font-bold text-orange-800 mb-4">🐷 Halal/Pork-Free</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Compatible</strong>: No pork in takoyaki, 
                    but be careful with sauces that may contain traces.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>No pork</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Octopus (seafood)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-2">⚠️</span>
                      <span>Check sauces (possible traces)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-lg font-bold text-blue-800 mb-4">⚠️ Allergies</h3>
                  <p className="text-gray-700 mb-4">
                    Warning: gluten (flour), seafood (octopus, dashi), 
                    eggs in the batter. Detailed information available.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">⚠️</span>
                      <span>Gluten (flour)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">⚠️</span>
                      <span>Seafood (octopus)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">⚠️</span>
                      <span>Eggs (batter)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Takoyaki Culture */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🎌 The Culture of Takoyaki in Japan
              </h2>
              
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">🏛️ Osaka Heritage</h3>
                    <p className="text-gray-700 mb-4">
                      Takoyaki originated in Osaka in the 1930s as a popular street food. 
                      Gindako modernizes this tradition while preserving authenticity 
                      and ensuring consistent quality and hygiene.
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>• <strong>Origin:</strong> Osaka street food (1930s)</li>
                      <li>• <strong>Tradition:</strong> Cooked on special plates</li>
                      <li>• <strong>Social:</strong> Conviviality and sharing</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">🌟 Gindako Innovation</h3>
                    <p className="text-gray-700 mb-4">
                      Gindako revolutionized takoyaki by creating the first standardized chain concept, 
                      exporting this Osaka specialty worldwide 
                      without losing its authentic soul.
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>• <strong>Standardization:</strong> Consistent quality</li>
                      <li>• <strong>Innovation:</strong> "Kari-fuma" technique</li>
                      <li>• <strong>Global:</strong> Ambassador of global takoyaki</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    🐙 "Gindako: The Soul of Osaka in Every Ball"
                  </h3>
                  <p className="text-gray-600">
                    More than just a snack, Gindako takoyaki embodies the spirit of Osaka: 
                    warm, generous, authentic, and always with a smile.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="text-center">
              <div className="inline-flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/dish-types/street-food"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  ← Back to Street Food
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



