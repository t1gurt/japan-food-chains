import Link from "next/link";
import ChainViewTracker from "@/components/ChainViewTracker";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Doutor Coffee: Japanese Self-Service Café | Japan Food Chains',
  description: 'Discover Doutor, the pioneer of self-service coffee in Japan. Menu, prices, and the art of fast and affordable coffee for a Japanese-style break.',
  keywords: 'doutor coffee, japanese café, self-service coffee, modern kissaten, fast coffee japan, japanese breakfast',
  openGraph: {
    title: 'Doutor Coffee: Japanese Self-Service Café | Japan Food Chains',
    description: 'Discover Doutor, the pioneer of self-service coffee in Japan. Menu, prices, and the art of fast and affordable coffee for a Japanese-style break.',
    type: 'article',
    locale: 'en_US',
    siteName: 'Japan Food Chains - Guide to Japanese Restaurants'
  },
  alternates: {
    canonical: '/chains/doutor'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function DoutorPage() {
  return (
    <>
      <ChainViewTracker chainName="doutor" chainCategory="cafe" />
      
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="text-sm">
              <Link href="/" className="text-gray-500 hover:text-purple-600">Home</Link>
              <span className="text-gray-400 mx-2">/</span>
              <Link href="/dish-types/cafe" className="text-gray-500 hover:text-purple-600">Café</Link>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-purple-600 font-medium">Doutor Coffee</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-800 via-green-700 to-emerald-600 text-white py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-8">
              <span className="text-6xl mr-4">☕</span>
              <span className="text-6xl mr-4">🏃‍♂️</span>
              <span className="text-6xl">⚡</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Doutor Coffee
            </h1>
            <p className="text-2xl mb-4 text-green-100 japanese-text">ドトールコーヒー</p>
            <p className="text-xl mb-8 text-green-100">
              Pioneer of Japanese Express Coffee - Self-Service Revolution
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Japanese Coffee Innovation</h2>
              <p className="text-lg text-green-200">
                Since 1980, Doutor has revolutionized Japanese coffee culture by introducing 
                the concept of fast and affordable coffee, transforming the coffee break 
                into an accessible experience at the frantic pace of urban life.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
                Pioneer 1980
              </span>
              <span className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full font-semibold">
                Fast Self-Service
              </span>
              <span className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full font-semibold">
                Affordable Prices
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
                🏆 Express Coffee Revolution
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">🚀 Birth of Innovation (1980)</h3>
                  <p className="text-gray-700 mb-4">
                    Doutor Coffee was born in 1980 with a revolutionary vision: 
                    democratize quality coffee by creating the first 
                    self-service coffee system in Japan, breaking the codes of traditional service.
                  </p>
                  <p className="text-gray-700">
                    Founder Hiromichi Toriba draws inspiration from American coffee shops 
                    to create a unique hybrid concept: Japanese quality + 
                    modern efficiency + affordable prices.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">🚀 Cultural Impact</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Revolution:</strong> Doutor transforms the perception of coffee in Japan, 
                    making it accessible to the masses and introducing the culture of 
                    "nomadic coffee" to the archipelago.
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• <strong>Democratization:</strong> Quality coffee for everyone</li>
                    <li>• <strong>Speed:</strong> Express service adapted to urban rhythm</li>
                    <li>• <strong>Accessibility:</strong> Affordable prices without compromise</li>
                    <li>• <strong>Modernity:</strong> Relaxed contemporary atmosphere</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Menu & Specialties */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                ☕ The Art of Doutor Express Coffee
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* Premium Coffee */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">☕ Premium Coffee</h3>
                  <p className="text-gray-600 japanese-text mb-2">プレミアムブレンド</p>
                  <p className="text-2xl font-bold text-green-600 mb-3">250¥-380¥</p>
                  <p className="text-gray-700 mb-4">
                    Exclusive Doutor blend, careful roasting, fast but perfect extraction. 
                    Consistent quality at democratic prices.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Original Blend:</span>
                      <span className="text-sm font-semibold">250¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Iced Coffee:</span>
                      <span className="text-sm font-semibold">280¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Espresso:</span>
                      <span className="text-sm font-semibold">220¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Café au Lait:</span>
                      <span className="text-sm font-semibold">320¥</span>
                    </div>
                  </div>
                </div>

                {/* Sandwiches & Fast Food */}
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🥪 Express Meals</h3>
                  <p className="text-gray-600 japanese-text mb-2">サンドイッチ・軽食</p>
                  <p className="text-2xl font-bold text-emerald-600 mb-3">380¥-580¥</p>
                  <p className="text-gray-700 mb-4">
                    Freshly prepared sandwiches, hot dogs, pastries. 
                    Perfect for a quick and tasty meal on the go.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Ham Sandwich:</span>
                      <span className="text-sm font-semibold">380¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Hot Dog:</span>
                      <span className="text-sm font-semibold">420¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Croissant:</span>
                      <span className="text-sm font-semibold">280¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Coffee+Sandwich Set:</span>
                      <span className="text-sm font-semibold">580¥</span>
                    </div>
                  </div>
                </div>

                {/* Various Drinks */}
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🥤 Modern Beverages</h3>
                  <p className="text-gray-600 japanese-text mb-2">モダンドリンク</p>
                  <p className="text-2xl font-bold text-teal-600 mb-3">280¥-450¥</p>
                  <p className="text-gray-700 mb-4">
                    Wide selection of teas, smoothies, iced drinks. 
                    Constant innovation to follow contemporary trends.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Royal Milk Tea:</span>
                      <span className="text-sm font-semibold">320¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Fruit Smoothie:</span>
                      <span className="text-sm font-semibold">420¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Iced Tea:</span>
                      <span className="text-sm font-semibold">280¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Seasonal Latte:</span>
                      <span className="text-sm font-semibold">450¥</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Menu Sets */}
              <div className="mt-8 bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">🍽️ Doutor Express Sets</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Morning Sets:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Morning Set A (モーニングセットA)</strong> - 480¥ - Coffee + toast + egg</li>
                      <li>• <strong>Morning Set B (モーニングセットB)</strong> - 520¥ - Coffee + croissant + salad</li>
                      <li>• <strong>Business Morning</strong> - 580¥ - Coffee + sandwich + newspaper</li>
                      <li>• <strong>Express Morning</strong> - 380¥ - Coffee + pain au chocolat</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Lunch Sets:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Lunch Set (ランチセット)</strong> - 680¥ - Sandwich + coffee + dessert</li>
                      <li>• <strong>Quick Lunch</strong> - 580¥ - Hot dog + drink + chips</li>
                      <li>• <strong>Salad Set</strong> - 620¥ - Salad + coffee + bread roll</li>
                      <li>• <strong>Business Lunch</strong> - 750¥ - Complete express meal</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Self-Service Experience */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🏃‍♂️ Revolutionary Self-Service Experience
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">⚡ Optimized Speed</h3>
                  <p className="text-gray-700 mb-4">
                    Perfected system: counter ordering, immediate service, 
                    fast rotation. Ideal for busy salarymen.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <strong>Ordering:</strong> 30 seconds maximum</li>
                    <li>• <strong>Preparation:</strong> 2-3 minutes</li>
                    <li>• <strong>Service:</strong> Self-service tray</li>
                    <li>• <strong>Efficiency:</strong> Smooth queue guaranteed</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">💰 Price Accessibility</h3>
                  <p className="text-gray-700 mb-4">
                    Democratic philosophy: quality without premium price. 
                    Affordable daily coffee for all urban budgets.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Simple coffee:</span>
                      <span className="font-semibold">250¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Complete set:</span>
                      <span className="font-semibold">580¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Average budget:</span>
                      <span className="font-semibold">400¥</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Competitive vs:</span>
                      <span className="font-semibold">Starbucks</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">🎯 Urban Clientele</h3>
                  <p className="text-gray-700 mb-4">
                    Space adapted to Japanese rhythm: quick reading, efficient break, 
                    informal meetings. Relaxed but dynamic atmosphere.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Fast free WiFi</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Individual tables</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Modern atmosphere</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Free newspapers</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Self-Service Guide */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🎯 Doutor Self-Service Guide
              </h2>
              
              <div className="bg-green-50 rounded-xl p-8 border border-green-200">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-green-800 mb-4">📋 Step-by-Step Procedure</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</span>
                        <div>
                          <p className="font-semibold text-gray-800">Check the displayed menu</p>
                          <p className="text-sm text-gray-600">Clear panels with photos and prices</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</span>
                        <div>
                          <p className="font-semibold text-gray-800">Order at the counter</p>
                          <p className="text-sm text-gray-600">Multilingual staff in tourist centers</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">3</span>
                        <div>
                          <p className="font-semibold text-gray-800">Pay (cash/card)</p>
                          <p className="text-sm text-gray-600">International cards accepted</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">4</span>
                        <div>
                          <p className="font-semibold text-gray-800">Pick up your order</p>
                          <p className="text-sm text-gray-600">Tray + number or name called</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-green-800 mb-4">💡 Tips for Optimal Experience</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">⏰</span>
                        <span><strong>Optimal hours:</strong> 7 AM-9 AM to avoid morning rush</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">💰</span>
                        <span><strong>Best value:</strong> Morning sets, complete breakfast</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">🏃‍♂️</span>
                        <span><strong>Express mode:</strong> Simple order, coffee + croissant</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">📱</span>
                        <span><strong>Modern:</strong> Loyalty points, mobile app available</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Dietary Regimes */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                � Dietary Regimes & Options
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-lg font-bold text-green-800 mb-4">✅ Vegetarian</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Possible options</strong>: Several vegetarian choices 
                    available, including drinks, pastries, and some sandwiches.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>All coffees and teas</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Meat-free pastries</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Vegetable sandwiches</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-2">⚠️</span>
                      <span>Check bread (butter/milk)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-lg font-bold text-blue-800 mb-4">🐷 Pork-Free/Halal</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Generally OK</strong>: Most options 
                    do not contain pork. Unofficial halal certification.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Coffees, teas, desserts</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Most sandwiches</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-2">⚠️</span>
                      <span>Ham sandwich (check)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-2">⚠️</span>
                      <span>Ask staff for ingredients</span>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                  <h3 className="text-lg font-bold text-orange-800 mb-4">⚠️ Allergies</h3>
                  <p className="text-gray-700 mb-4">
                    Allergen information available upon request. 
                    Staff trained to provide information on main ingredients.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">⚠️</span>
                      <span>Gluten (bread, pastries)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">⚠️</span>
                      <span>Milk (latte, desserts)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">⚠️</span>
                      <span>Eggs (some pastries)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✓</span>
                      <span>Staff can inform</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Express Business Culture */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                💼 Doutor and the Express Business Culture
              </h2>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">🏢 Salaryman Revolution</h3>
                    <p className="text-gray-700 mb-4">
                      Doutor transforms the coffee break for Japanese salarymen: 
                      out with long rituals, in with efficiency without compromising 
                      quality. An innovation that meets the fast pace of urban life.
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>• <strong>Speed:</strong> Adapted to tight schedules</li>
                      <li>• <strong>Economy:</strong> Reasonable daily budget</li>
                      <li>• <strong>Flexibility:</strong> Takeaway or eat-in</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">🌟 Social Impact</h3>
                    <p className="text-gray-700 mb-4">
                      Beyond coffee, Doutor democratizes access to quality time: 
                      morning break, informal meetings, transition between subway and office. 
                      A new way to experience the city.
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>• <strong>Democratization:</strong> Quality coffee for everyone</li>
                      <li>• <strong>Socialization:</strong> Casual meetings</li>
                      <li>• <strong>Innovation:</strong> Model copied throughout Asia</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    ☕ "Doutor: The Coffee that Revolutionized Japan"
                  </h3>
                  <p className="text-gray-600">
                    By creating the first express coffee concept in Japan, Doutor not only 
                    changed the way coffee is consumed, but also redefined the urban break, 
                    influencing a whole generation of chains across Asia.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="text-center">
              <div className="inline-flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/dish-types/cafe"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
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



