import Link from "next/link";
import ChainViewTracker from "@/components/ChainViewTracker";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Ikinari Steak いきなりステーキ | Standing Steak Revolution | JapanChains",
  description: "Revolutionary standing steak concept. Premium steaks, service innovation, standing dining excellence.",
  keywords: [
    'ikinari steak', 'いきなりステーキ', 'premium steak', 'standing dining',
    'revolutionary concept', 'service innovation', 'beef excellence',
    'japanese steaks', 'premium wagyu', 'culinary innovation'
  ],
  openGraph: {
    title: "Ikinari Steak いきなりステーキ | Standing Steak Revolution | JapanChains",
    description: "Revolutionary standing steak concept. Premium steaks, service innovation, standing dining excellence.",
    type: 'article',
    locale: "en_US",
    siteName: "JapanChains - Guide to Japanese Restaurant Chains"
  },
  alternates: {
    canonical: '/chains/ikinari-steak',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  },
};

export default function IkinariSteakPage() {
  return (
    <>
      <ChainViewTracker chainName="ikinari-steak" chainCategory="steak" />
      
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="text-sm">
              <Link href="/" className="text-gray-500 hover:text-purple-600">Home</Link>
              <span className="text-gray-400 mx-2">/</span>
              <Link href="/type-plat/steak" className="text-gray-500 hover:text-purple-600">Steak</Link>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-purple-600 font-medium">Ikinari Steak</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-900 via-red-800 to-orange-700 text-white py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-8">
              <span className="text-6xl mr-4">🥩</span>
              <span className="text-6xl mr-4">⚡</span>
              <span className="text-6xl">🚀</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Ikinari Steak
            </h1>
            <p className="text-2xl mb-4 text-orange-100 japanese-text">いきなりステーキ</p>
            <p className="text-xl mb-8 text-orange-100">
              Standing Steak Revolution - Japanese Gastronomic Innovation
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Pioneer of Standing Steak</h2>
              <p className="text-lg text-orange-200">
                Since 2013, Ikinari Steak has revolutionized the global industry 
                by democratizing premium steaks through its innovative 
                world-unique "standing style" concept.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-semibold">
                Standing Style
              </span>
              <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-semibold">
                Premium Meat
              </span>
              <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold">
                Accessible Prices
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
                🚀 The Standing Steak Revolution
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">⚡ Birth of Innovation (2013)</h3>
                  <p className="text-gray-700 mb-4">
                    Ikinari Steak was born from a revolutionary idea: "What if we could 
                    eat premium steak standing up, quickly, without sacrificing quality?" 
                    A total disruption of the steakhouse industry.
                  </p>
                  <p className="text-gray-700">
                    Founder Kunio Ichinose wanted to democratize luxury: 
                    exceptional meat at accessible prices through 
                    operational efficiency of standing service.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 Standing Philosophy</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Mission:</strong> "Premium steak for everyone, now". 
                    Eliminate the superfluous (table service, luxury decor) 
                    to focus on the essential: the meat.
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• <strong>Efficiency:</strong> Ultra-fast standing service</li>
                    <li>• <strong>Quality:</strong> Premium meat unchanged</li>
                    <li>• <strong>Accessibility:</strong> Democratized prices</li>
                    <li>• <strong>Innovation:</strong> Completely new experience</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Steak Menu */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🥩 Premium Standing Steak Menu
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* Classic Steaks */}
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🥩 Signature Steaks</h3>
                  <p className="text-gray-600 japanese-text mb-2">レギュラーステーキ</p>
                  <p className="text-2xl font-bold text-red-600 mb-3">200g: ¥1,500~</p>
                  <p className="text-gray-700 mb-4">
                    Premium steaks by weight: choose your portion, 
                    perfect cooking, tender and flavorful meat.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Ribeye 200g :</span>
                      <span className="text-sm font-semibold">¥1,800</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Sirloin 300g :</span>
                      <span className="text-sm font-semibold">¥2,400</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Chuck Eye 250g :</span>
                      <span className="text-sm font-semibold">¥1,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Service time :</span>
                      <span className="text-sm font-semibold">3-5 minutes</span>
                    </div>
                  </div>
                </div>

                {/* Premium Wagyu */}
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">� Premium Wagyu</h3>
                  <p className="text-gray-600 japanese-text mb-2">和牛プレミアム</p>
                  <p className="text-2xl font-bold text-orange-600 mb-3">150g: ¥3,500~</p>
                  <p className="text-gray-700 mb-4">
                    Authentic Japanese Wagyu: exceptional melt-in-mouth texture, 
                    perfect marbling, ultimate gastronomic experience.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Wagyu A4 150g :</span>
                      <span className="text-sm font-semibold">¥3,500</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Wagyu A5 200g :</span>
                      <span className="text-sm font-semibold">¥6,800</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Cooking :</span>
                      <span className="text-sm font-semibold">Medium rare</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Origin :</span>
                      <span className="text-sm font-semibold">Certified Japan</span>
                    </div>
                  </div>
                </div>

                {/* Sets & Sides */}
                <div className="bg-gradient-to-br from-yellow-50 to-red-50 rounded-xl p-6 border border-yellow-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🍽️ Sets & Sides</h3>
                  <p className="text-gray-600 japanese-text mb-2">セット＆サイド</p>
                  <p className="text-2xl font-bold text-yellow-600 mb-3">+¥300~</p>
                  <p className="text-gray-700 mb-4">
                    Side dishes and complete sets to enhance 
                    your standing steak experience.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Rice + Salad Set :</span>
                      <span className="text-sm font-semibold">+¥300</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Butter Corn :</span>
                      <span className="text-sm font-semibold">+¥200</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Drink :</span>
                      <span className="text-sm font-semibold">+¥150</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Complete Set :</span>
                      <span className="text-sm font-semibold">+¥500</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Weight-Based Ordering Guide */}
              <div className="mt-8 bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">⚖️ Weight-Based Ordering System</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Standard Weights:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>200g</strong> - Standard portion, perfect for first try</li>
                      <li>• <strong>300g</strong> - Generous, for experienced enthusiasts</li>
                      <li>• <strong>450g</strong> - XXL, big appetite or sharing</li>
                      <li>• <strong>Custom</strong> - Choose your exact portion</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Price per Gram:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Chuck Eye:</strong> ~¥6/gram (economical)</li>
                      <li>• <strong>Ribeye:</strong> ~¥9/gram (balanced)</li>
                      <li>• <strong>Sirloin:</strong> ~¥8/gram (premium)</li>
                      <li>• <strong>Wagyu:</strong> ¥25-35/gram (ultra-premium)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Standing Experience */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                ⚡ The Revolutionary Standing Experience
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">🏃‍♂️ Ultra-Fast Service</h3>
                  <p className="text-gray-700 mb-4">
                    Order, pay, eat in less than 10 minutes. 
                    Japanese efficiency applied to premium steakhouse.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <strong>Order:</strong> 1 minute at counter</li>
                    <li>• <strong>Cooking:</strong> 3-5 minutes depending on thickness</li>
                    <li>• <strong>Service:</strong> Immediate after cooking</li>
                    <li>• <strong>Dining:</strong> Standing at counter</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">🎯 Technical Precision</h3>
                  <p className="text-gray-700 mb-4">
                    Cooking mastered to the degree, selected meat, 
                    minimal seasoning to reveal natural flavors.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">200g cooking time:</span>
                      <span className="font-semibold">3-4 minutes</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Temperature:</span>
                      <span className="font-semibold">High precision</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Seasoning:</span>
                      <span className="font-semibold">Salt, pepper, garlic</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Meat rest:</span>
                      <span className="font-semibold">30 seconds</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">💰 Revolutionary Prices</h3>
                  <p className="text-gray-700 mb-4">
                    Elimination of traditional service costs enables 
                    prices 30-50% lower than classic steakhouses.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-red-600 mr-2">✅</span>
                      <span>No table service</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-600 mr-2">✅</span>
                      <span>Fast turnover = high volume</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-600 mr-2">✅</span>
                      <span>Reduced overhead</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-600 mr-2">✅</span>
                      <span>Premium meat maintained</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Standing Steak Guide */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🎯 Standing Steak Masterclass Guide
              </h2>
              
              <div className="bg-red-50 rounded-xl p-8 border border-red-200">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-red-800 mb-4">📋 Experience Steps</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</span>
                        <div>
                          <p className="font-semibold text-gray-800">Entry & Order</p>
                          <p className="text-sm text-gray-600">Welcome, concept presentation, choose weight/cooking</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</span>
                        <div>
                          <p className="font-semibold text-gray-800">Weighing & Payment</p>
                          <p className="text-sm text-gray-600">Meat weighed in front of you, price calculated, immediate payment</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">3</span>
                        <div>
                          <p className="font-semibold text-gray-800">Express Cooking</p>
                          <p className="text-sm text-gray-600">Visible cooking, timer, absolute precision</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">4</span>
                        <div>
                          <p className="font-semibold text-gray-800">Standing Dining</p>
                          <p className="text-sm text-gray-600">Service at counter, immediate optimal tasting</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-red-800 mb-4">💡 Expert Tips</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">🥩</span>
                        <span><strong>First time:</strong> 200g Ribeye Medium Rare</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">⚖️</span>
                        <span><strong>Weight:</strong> 200g = normal restaurant portion</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">🔥</span>
                        <span><strong>Cooking:</strong> Medium Rare universally recommended</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">⏰</span>
                        <span><strong>Timing:</strong> Avoid 12pm-2pm and 7pm-9pm</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Dietary Requirements */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                � Dietary Requirements & Ikinari Steak
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                  <h3 className="text-lg font-bold text-red-800 mb-4">❌ Vegetarian/Vegan</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Not suitable</strong>: concept entirely centered on meat. 
                    Very limited vegetable side dishes only.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Simple salad, corn</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>White rice</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">❌</span>
                      <span>No vegetarian main dishes</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">❌</span>
                      <span>Incompatible concept</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-lg font-bold text-blue-800 mb-4">🐷 No Pork/Halal</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Excellent choice</strong>: 100% focus on beef. 
                    No halal certification but pure beef meat.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>100% beef, no pork</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Simple seasoning</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Vegetable sides</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-2">⚠️</span>
                      <span>No official halal certification</span>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                  <h3 className="text-lg font-bold text-orange-800 mb-4">⚠️ Allergies</h3>
                  <p className="text-gray-700 mb-4">
                    Ultra-simple menu makes allergy management easy. 
                    Transparent ingredients, visible preparation.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Simple and transparent ingredients</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Live visible cooking</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>No hidden additives</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Easy communication with staff</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Global Innovation */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🌍 Ikinari Steak's Global Impact
              </h2>
              
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">🚀 Industrial Revolution</h3>
                    <p className="text-gray-700 mb-4">
                      Ikinari Steak proved you can disrupt a century-old industry 
                      by reinventing the rules: standing vs seated, 
                      speed vs leisure, accessible vs elitist.
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>• <strong>Disruption:</strong> New steakhouse paradigm</li>
                      <li>• <strong>Export:</strong> Concept copied worldwide</li>
                      <li>• <strong>Democratization:</strong> Luxury accessible to all</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">💎 Japanese Genius</h3>
                    <p className="text-gray-700 mb-4">
                      Perfect application of Japanese philosophy: eliminate 
                      waste (muda), maximize added value, perfect 
                      the essential until excellence.
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>• <strong>Efficiency:</strong> Zero operational waste</li>
                      <li>• <strong>Focus:</strong> Excellence on essentials</li>
                      <li>• <strong>Innovation:</strong> Completely rethink experience</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    ⚡ "Ikinari Steak: When Japanese Innovation Revolutionizes the World"
                  </h3>
                  <p className="text-gray-600">
                    By completely reinventing the steakhouse experience, Ikinari Steak 
                    demonstrated the power of Japanese innovation applied to 
                    a Western tradition, creating something entirely new.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="text-center">
              <div className="inline-flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/type-plat/steak"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  ← Back to Steak
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



