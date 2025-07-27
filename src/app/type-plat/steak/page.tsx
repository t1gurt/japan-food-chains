import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Steakhouses in Japan: Guide to Wagyu and Ikinari Steak | JapanChains",
  description: "Discover Japanese steakhouses. From the revolutionary concept of Ikinari Steak to premium Wagyu beef tasting.",
  keywords: "Japanese steak, Ikinari Steak, wagyu, Japanese beef, steakhouse tokyo",
  openGraph: {
    title: "Steakhouses in Japan: Guide to Wagyu and Ikinari Steak | JapanChains",
    description: "Discover Japanese steakhouses. From the revolutionary concept of Ikinari Steak to premium Wagyu beef tasting.",
    type: "article",
    url: "https://japanchains.com/type-plat/steak",
    siteName: "JapanChains",
    locale: "en_US",
    images: [{
      url: "/images/steak-japonais-cover.jpg",
      width: 1200,
      height: 630,
      alt: "Japanese steakhouses - Wagyu and Ikinari Steak"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Steakhouses in Japan: Guide to Wagyu and Ikinari Steak | JapanChains",
    description: "Discover Japanese steakhouses. From the revolutionary concept of Ikinari Steak to premium Wagyu beef tasting.",
    images: ["/images/steak-japonais-cover.jpg"]
  },
  alternates: {
    canonical: "https://japanchains.com/type-plat/steak"
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

export default function SteakPage() {
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
            <span className="text-purple-600 font-medium">Steak</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-900 via-red-800 to-orange-700 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <span className="text-6xl mr-4">🥩</span>
            <span className="text-6xl mr-4">🔥</span>
            <span className="text-6xl">🇺🇸</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Steak
          </h1>
          <p className="text-2xl mb-4 text-orange-100 japanese-text">ステーキ</p>
          <p className="text-xl mb-8 text-orange-100">
            Japanese Steakhouses - The Art of Premium Meat
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Steak Culture in Japan</h2>
            <p className="text-lg text-orange-200">
              Steak in Japan represents a Western luxury adopted with Japanese precision 
              and quality. From "standing" innovation to premium wagyu beef, 
              discover this modern culinary revolution.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-semibold">
              Premium Meat
            </span>
            <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-semibold">
              Japanese Innovation
            </span>
            <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold">
              Unique Experience
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
              🥩 The World of Japanese Steak
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-6">
                Japanese steakhouses have revolutionized the approach to premium meat, 
                combining exceptional quality, service innovation and accessibility. 
                From the "standing style" revolution to exceptional wagyu.
              </p>
              <p className="text-lg text-gray-700">
                Discover how Japan has reinvented the steak experience, creating 
                unique concepts that combine Western tradition and Japanese innovation.
              </p>
            </div>
          </div>

          {/* Steak Chains */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              🥩 Steak Chains in Japan
            </h2>
            
            <div className="grid md:grid-cols-1 gap-8">
              {/* Ikinari Steak */}
              <Link href="/chaines/ikinari-steak">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8 border border-red-200 hover:shadow-lg transition-all duration-300 cursor-pointer group">
                  <div className="flex items-center mb-6">
                    <div className="flex items-center mr-6">
                      <span className="text-4xl mr-3">🥩</span>
                      <span className="text-4xl mr-3">⚡</span>
                      <span className="text-4xl">🚀</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 group-hover:text-red-700 transition-colors">
                        Ikinari Steak
                      </h3>
                      <p className="text-lg text-gray-600 japanese-text">いきなりステーキ</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">⚡ Standing Style Revolution</h4>
                      <p className="text-gray-700 mb-4">
                        Revolutionary concept: premium steak standing up, order by weight, 
                        quick cooking. Innovation that transformed the Japanese industry.
                      </p>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Concept:</span>
                          <span className="font-semibold">Standing Steak</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Order:</span>
                          <span className="font-semibold">By weight (grams)</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Service:</span>
                          <span className="font-semibold">Fast & efficient</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-900 mb-3">🥩 Accessible Premium Meat</h4>
                      <p className="text-gray-700 mb-4">
                        Superior quality steaks at democratic prices, 
                        thanks to standing concept and operational efficiency.
                      </p>
                      <div className="space-y-1 text-sm">
                        <div className="flex justify-between">
                          <span className="text-gray-600">Ribeye 200g:</span>
                          <span className="font-semibold">¥1500-2500</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Sirloin 300g:</span>
                          <span className="font-semibold">¥2000-3000</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-gray-600">Wagyu available:</span>
                          <span className="font-semibold">Premium +</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-red-200">
                    <p className="text-sm text-gray-600 mb-2">
                      <strong>Specialty:</strong> Standing steak, order by weight, accessible premium meat
                    </p>
                    <p className="text-sm text-gray-600">
                      <strong>Innovation:</strong> Steakhouse revolution, speed and quality
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Japanese Steak Culture */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              🇯🇵 Japanese Steak Culture
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🥩 Absolute Quality</h3>
                <p className="text-gray-700 mb-4">
                  Japan applies its philosophy of perfection to meat: 
                  rigorous selection, traceability, respect for the product.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>Wagyu:</strong> World-class exceptional breeding</li>
                  <li>• <strong>Import:</strong> Selected premium meats</li>
                  <li>• <strong>Freshness:</strong> Daily supply</li>
                  <li>• <strong>Standards:</strong> Strict quality controls</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">⚡ Service Innovation</h3>
                <p className="text-gray-700 mb-4">
                  Revolution of traditional service: standing concepts, 
                  digital ordering, maximum operational efficiency.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>Standing:</strong> Fast rotation, low prices</li>
                  <li>• <strong>Customization:</strong> Weight, cooking by choice</li>
                  <li>• <strong>Speed:</strong> Quality express service</li>
                  <li>• <strong>Accessibility:</strong> Democratized luxury</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-red-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 Japanese Precision</h3>
                <p className="text-gray-700 mb-4">
                  Application of Japanese precision to cooking: 
                  exact temperatures, perfect timing, impeccable presentation.
                </p>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• <strong>Cooking:</strong> Perfect technical mastery</li>
                  <li>• <strong>Timing:</strong> Chronometered service</li>
                  <li>• <strong>Presentation:</strong> Careful aesthetics</li>
                  <li>• <strong>Consistency:</strong> Guaranteed quality</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Steak Guide */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              🎯 Steak Guide in Japan
            </h2>
            
            <div className="bg-red-50 rounded-xl p-8 border border-red-200">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-red-800 mb-4">🥩 Choosing Your Meat</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Types of Meat:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• <strong>Wagyu A5:</strong> Ultimate excellence, premium price</li>
                        <li>• <strong>Wagyu A4:</strong> Very high quality, more accessible</li>
                        <li>• <strong>Imported Angus:</strong> Reliable Western quality</li>
                        <li>• <strong>Local Premium:</strong> Japanese non-wagyu beef</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Popular Cuts:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• <strong>Ribeye (リブアイ):</strong> Marbled, flavorful</li>
                        <li>• <strong>Sirloin (サーロイン):</strong> Balanced, tender</li>
                        <li>• <strong>Filet (ヒレ):</strong> Ultra-tender, delicate</li>
                        <li>• <strong>Strip (ストリップ):</strong> Firm, tasty</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-red-800 mb-4">🔥 Mastering the Cooking</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Cooking Levels:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• <strong>Rare (レア):</strong> Red, warm center</li>
                        <li>• <strong>Medium Rare:</strong> Pink, hot (recommended)</li>
                        <li>• <strong>Medium:</strong> Pink-gray, hot throughout</li>
                        <li>• <strong>Well Done:</strong> Well cooked, firm</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-2">Tips:</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• <strong>Wagyu:</strong> Medium rare optimal</li>
                        <li>• <strong>First time:</strong> Ask for advice</li>
                        <li>• <strong>Communication:</strong> Staff speaks basic English</li>
                        <li>• <strong>Accompaniment:</strong> Various sauces available</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Dietary Requirements */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              🥗 Dietary Requirements & Steakhouses
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                <h3 className="text-lg font-bold text-red-800 mb-4">❌ Vegetarian/Vegan</h3>
                <p className="text-gray-700 mb-4">
                  <strong>Very limited options</strong>: steakhouses focus 
                  on meat. Some vegetable side dishes available.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>Salad, grilled vegetables</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>Rice, potatoes</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-red-500 mr-2">❌</span>
                    <span>Vegetarian main dishes</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-2">⚠️</span>
                    <span>Not ideal place for vegetarians</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-bold text-blue-800 mb-4">🐷 No Pork/Halal</h3>
                <p className="text-gray-700 mb-4">
                  <strong>Generally OK</strong>: focus on beef, no official 
                  halal certification but little pork used.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>Beef steaks (main focus)</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>Pork-free side dishes</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-2">⚠️</span>
                    <span>Check sauces and seasonings</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-2">⚠️</span>
                    <span>No halal certification</span>
                  </div>
                </div>
              </div>

              <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                <h3 className="text-lg font-bold text-orange-800 mb-4">⚠️ Allergies</h3>
                <p className="text-gray-700 mb-4">
                  Simple menu centered on meat makes allergy management easier. 
                  Staff can inform about preparations and accompaniments.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>Simple menu, few hidden allergens</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>Plain steaks without additives</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-yellow-500 mr-2">⚠️</span>
                    <span>Check marinades and sauces</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-green-500 mr-2">✅</span>
                    <span>Staff can adapt preparations</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Steakhouse Innovation */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              🚀 Japanese Steakhouse Innovation
            </h2>
            
            <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">⚡ Standing Revolution</h3>
                  <p className="text-gray-700 mb-4">
                    The Japanese "standing steak" concept has revolutionized the global industry 
                    by proving that haute cuisine can be democratized without compromising 
                    quality.
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Efficiency:</strong> Fast rotation = low prices</li>
                    <li>• <strong>Quality:</strong> Premium meat maintained</li>
                    <li>• <strong>Accessibility:</strong> Luxury for everyone</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 Technical Precision</h3>
                  <p className="text-gray-700 mb-4">
                    Application of Japanese precision to Western steak art: 
                    perfect timing, exact temperatures, service orchestrated like a dance.
                  </p>
                  <ul className="text-gray-700 space-y-2">
                    <li>• <strong>Techniques:</strong> Scientifically calibrated methods</li>
                    <li>• <strong>Training:</strong> Ultra-qualified staff</li>
                    <li>• <strong>Consistency:</strong> Identical quality everywhere</li>
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-3">
                  🥩 "Japanese Steak: When Excellence Meets Innovation"
                </h3>
                <p className="text-gray-600">
                  By reinventing the steakhouse experience, Japan has proven that tradition 
                  and innovation can coexist to create something entirely new 
                  and remarkably efficient.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="text-center">
            <div className="inline-flex flex-col sm:flex-row gap-4">
              <Link 
                href="/type-plat"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                ← Back to Dish Types
              </Link>
              <Link 
                href="/chaines"
                className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                View All Chains
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
