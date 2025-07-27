import Link from "next/link";
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Coffee, Utensils, Heart, Gift } from 'lucide-react';
import ChainViewTracker from "@/components/ChainViewTracker";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Komeda Coffee コメダ珈琲 | Modern Kissaten | Japan Food Chains",
  description: "Free Morning Service until 11am! Kissaten tradition since 1968, authentic siphon coffee, legendary Shironoir. Japanese hospitality.",
  keywords: [
    'komeda coffee', 'コメダ珈琲', 'modern kissaten', 'free morning service',
    'siphon coffee', 'japanese tradition', 'shironoir dessert',
    'omotenashi hospitality', 'coffee culture', 'authentic japanese'
  ],
  openGraph: {
    title: "Komeda Coffee コメダ珈琲 | Modern Kissaten | Japan Food Chains",
    description: "Free Morning Service until 11am! Kissaten tradition since 1968, authentic siphon coffee, legendary Shironoir. Japanese hospitality.",
    type: 'article',
    locale: "en_US",
    siteName: "Japan Food Chains - Japanese Restaurant Guide"
  },
  alternates: {
    canonical: '/chains/komeda',
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function KomedaPage() {
  return (
    <>
      <ChainViewTracker chainName="komeda" chainCategory="cafe" />
      
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="text-sm">
              <Link href="/" className="text-gray-500 hover:text-purple-600">Home</Link>
              <span className="text-gray-400 mx-2">/</span>
              <Link href="/type-plat/cafe" className="text-gray-500 hover:text-purple-600">Café</Link>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-purple-600 font-medium">Komeda Coffee</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-amber-800 via-yellow-700 to-orange-600 text-white py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-8">
              <span className="text-6xl mr-4">☕</span>
              <span className="text-6xl mr-4">🍞</span>
              <span className="text-6xl">🥛</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Komeda Coffee
            </h1>
            <p className="text-2xl mb-4 text-yellow-100 japanese-text">コメダ珈琲店</p>
            <p className="text-xl mb-8 text-yellow-100">
              The Art of Modern Kissaten - Authentic Japanese Coffee Culture
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">The Heritage of Japanese Kissaten</h2>
              <p className="text-lg text-yellow-200">
                Since 1968, Komeda Coffee has perpetuated the tradition of Japanese kissaten: 
                an authentic relaxation space where quality coffee, warm hospitality 
                and that unique atmosphere that embodies the soul of Japan come together.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold">
                Tradition 1968
              </span>
              <span className="bg-amber-100 text-amber-800 px-4 py-2 rounded-full font-semibold">
                Authentic Kissaten
              </span>
              <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-semibold">
                Japanese Hospitality
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
                🏮 The Soul of Japanese Kissaten
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">☕ Born in Nagoya (1968)</h3>
                  <p className="text-gray-700 mb-4">
                    Komeda Coffee was born in 1968 in Nagoya with a revolutionary vision: 
                    to create a "third place" between home and work, where every customer 
                    feels at home in a warm and authentic atmosphere.
                  </p>
                  <p className="text-gray-700">
                    Founder Kato-san was inspired by traditional kissaten culture 
                    while adding a unique family and convivial dimension.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">🌸 "Omotenashi" Philosophy</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Mission:</strong> "A coffee that warms the heart". Komeda embodies 
                    omotenashi (Japanese hospitality) in every detail: attentive service, 
                    soothing atmosphere, consistent quality.
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• <strong>Comfort:</strong> Spacious seating, relaxed atmosphere</li>
                    <li>• <strong>Tradition:</strong> Siphon coffee, old-fashioned service</li>
                    <li>• <strong>Generosity:</strong> Generous portions, fair prices</li>
                    <li>• <strong>Consistency:</strong> Same experience in all cafés</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Signature Menu */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                ☕ The Art of Komeda Coffee
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* Morning Service */}
                <div className="bg-gradient-to-br from-yellow-50 to-amber-50 rounded-xl p-6 border border-yellow-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🌅 Morning Service</h3>
                  <p className="text-gray-600 japanese-text mb-2">モーニングサービス</p>
                  <p className="text-2xl font-bold text-yellow-600 mb-3">FREE</p>
                  <p className="text-gray-700 mb-4">
                    The famous "Morning Service": with any coffee ordered before 11am, 
                    receive FREE thick buttered toast + hard-boiled egg. 
                    A Komeda tradition since 1968!
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Hours:</span>
                      <span className="text-sm font-semibold">7am-11am</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Toast:</span>
                      <span className="text-sm font-semibold">Thick bread + butter</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Egg:</span>
                      <span className="text-sm font-semibold">Hard-boiled, perfect shell</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">With:</span>
                      <span className="text-sm font-semibold">Any coffee ordered</span>
                    </div>
                  </div>
                </div>

                {/* Premium Coffee */}
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">☕ Premium Coffee</h3>
                  <p className="text-gray-600 japanese-text mb-2">プレミアムコーヒー</p>
                  <p className="text-2xl font-bold text-amber-600 mb-3">¥450-¥650</p>
                  <p className="text-gray-700 mb-4">
                    Traditional siphon coffee, exclusive Komeda blend, artisanal roasting. 
                    Served in real porcelain cups with complimentary small cake.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Original Blend:</span>
                      <span className="text-sm font-semibold">¥450</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Siphon Coffee:</span>
                      <span className="text-sm font-semibold">¥550</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Premium Blend:</span>
                      <span className="text-sm font-semibold">¥650</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Complimentary:</span>
                      <span className="text-sm font-semibold">Small cake</span>
                    </div>
                  </div>
                </div>

                {/* Dessert Specialties */}
                <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 border border-orange-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🍰 Shironoir & Desserts</h3>
                  <p className="text-gray-600 japanese-text mb-2">シロノワール</p>
                  <p className="text-2xl font-bold text-orange-600 mb-3">¥580-¥780</p>
                  <p className="text-gray-700 mb-4">
                    The famous Shironoir: warm brioche, vanilla ice cream, black syrup. 
                    More than a dessert, a Komeda institution beloved throughout Japan.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Shironoir Classic:</span>
                      <span className="text-sm font-semibold">¥580</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Mini Shironoir:</span>
                      <span className="text-sm font-semibold">¥430</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Shironoir Seasonal:</span>
                      <span className="text-sm font-semibold">¥680-¥780</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Other desserts:</span>
                      <span className="text-sm font-semibold">¥400-¥600</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Complete Menu */}
              <div className="mt-8 bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">🍽️ Complete Komeda Menu</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Light Meals:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Katsu Sandwich (カツサンド)</strong> - ¥750 - Thick sandwich with breaded pork</li>
                      <li>• <strong>Pizza Toast (ピザトースト)</strong> - ¥580 - Japanese-style pizza toast</li>
                      <li>• <strong>Hot Dog (ホットドッグ)</strong> - ¥520 - Sausage, salad, sauce</li>
                      <li>• <strong>Spaghetti Napolitan</strong> - ¥680 - Japanese-style tomato sauce pasta</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Beverages:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Iced Coffee (アイスコーヒー)</strong> - ¥420 - Signature cold coffee</li>
                      <li>• <strong>Royal Milk Tea (ロイヤルミルクティー)</strong> - ¥450 - Creamy milk tea</li>
                      <li>• <strong>Melon Soda Float</strong> - ¥520 - Melon soda + vanilla ice cream</li>
                      <li>• <strong>Komeda Blend Tea</strong> - ¥420 - Original blend tea</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Kissaten Experience */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🏮 The Komeda Kissaten Experience
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">🪑 Unique Atmosphere</h3>
                  <p className="text-gray-700 mb-4">
                    Retro-modern décor, comfortable velvet seating, subdued lighting. 
                    Muted atmosphere that invites relaxation and quiet conversation.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <strong>Style:</strong> Modern Japanese retro</li>
                    <li>• <strong>Seating:</strong> Comfortable, spacious</li>
                    <li>• <strong>Ambiance:</strong> Calm, relaxing</li>
                    <li>• <strong>Music:</strong> Soft jazz, classical</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">⏰ Japanese Rhythm</h3>
                  <p className="text-gray-700 mb-4">
                    Service without rush, respected time. Perfect for reading, 
                    working on laptop, or simply savoring a moment of pause.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Average duration:</span>
                      <span className="font-semibold">1-3 hours</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Hours:</span>
                      <span className="font-semibold">7am-11pm</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">WiFi:</span>
                      <span className="font-semibold">Free</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Power outlets:</span>
                      <span className="font-semibold">Available</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">🎌 Japanese-Style Service</h3>
                  <p className="text-gray-700 mb-4">
                    Attentive but discreet service, staff trained in omotenashi. 
                    Complimentary ice water, warm towels, attention to details.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Free ice water</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Complimentary warm towels</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Personalized service</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-600 mr-2">✓</span>
                      <span>Respectful atmosphere</span>
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
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-yellow-800 mb-4">🎯 How to Enjoy Morning Service</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</span>
                        <div>
                          <p className="font-semibold text-gray-800">Arrive before 11am</p>
                          <p className="text-sm text-gray-600">Service stops exactly at 11:00am</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</span>
                        <div>
                          <p className="font-semibold text-gray-800">Order a coffee</p>
                          <p className="text-sm text-gray-600">Any hot or iced coffee</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">3</span>
                        <div>
                          <p className="font-semibold text-gray-800">Receive free toast</p>
                          <p className="text-sm text-gray-600">Thick toast + butter + hard-boiled egg</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="w-8 h-8 bg-yellow-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">4</span>
                        <div>
                          <p className="font-semibold text-gray-800">Savor peacefully</p>
                          <p className="text-sm text-gray-600">Take your time, relaxing atmosphere</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-yellow-800 mb-4">💡 Morning Service Tips</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">☕</span>
                        <span><strong>Best deal:</strong> ¥450 coffee = complete free breakfast!</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">🕐</span>
                        <span><strong>Timing:</strong> 7am-8am less crowded, 9am-10am peak hours</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">🍞</span>
                        <span><strong>Variation:</strong> Ask for "regular toast" for thinner version</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-yellow-600 mr-2">🥛</span>
                        <span><strong>Accompaniment:</strong> Butter and jam provided separately</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Dietary Options */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🥗 Dietary Requirements & Options
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-lg font-bold text-green-800 mb-4">✅ Vegetarian</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Available options</strong>: Desserts, coffee, beverages, 
                    some dishes without meat or fish. Limited menu but possible.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Shironoir (dessert)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Pizza Toast (without ham)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>All coffees and teas</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-2">⚠️</span>
                      <span>Check egg/milk ingredients</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-lg font-bold text-blue-800 mb-4">🐷 Halal/Pork-Free</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Caution required</strong>: Some dishes contain pork. 
                    No halal certification, but possible options to verify.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Coffee, tea, desserts</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">❌</span>
                      <span>Katsu Sandwich (breaded pork)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-2">⚠️</span>
                      <span>Hot Dog (check sausage)</span>
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
                    Menu with allergen information available. 
                    Staff trained to provide detailed ingredient information.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">⚠️</span>
                      <span>Gluten (bread, pasta)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">⚠️</span>
                      <span>Dairy (desserts, café au lait)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">⚠️</span>
                      <span>Eggs (Morning Service)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Allergen menu available</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Kissaten Culture */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🎌 Komeda and Kissaten Culture
              </h2>
              
              <div className="bg-gradient-to-br from-amber-50 to-yellow-50 rounded-xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">🏛️ Kissaten Heritage</h3>
                    <p className="text-gray-700 mb-4">
                      The kissaten (喫茶店) is a Japanese institution: more than a café, 
                      it's a social refuge where Japanese people come to decompress, 
                      reflect and savor a moment of tranquility in their hectic daily lives.
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>• <strong>Tradition:</strong> Relaxation space since post-war</li>
                      <li>• <strong>Social:</strong> Intergenerational meeting place</li>
                      <li>• <strong>Temporal:</strong> Escape from urban rhythm</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">🌟 Komeda Innovation</h3>
                    <p className="text-gray-700 mb-4">
                      Komeda modernizes the traditional kissaten by creating a standardized chain 
                      that preserves the authenticity of the experience while guaranteeing quality 
                      and accessibility throughout Japan.
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>• <strong>Standardization:</strong> Same experience everywhere</li>
                      <li>• <strong>Innovation:</strong> Revolutionary Morning Service</li>
                      <li>• <strong>Expansion:</strong> 900+ cafés throughout Japan</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    ☕ "Komeda: Guardian of the Kissaten Soul"
                  </h3>
                  <p className="text-gray-600">
                    In a Japan in perpetual transformation, Komeda Coffee preserves this precious 
                    tradition of "time standing still", where each cup of coffee becomes 
                    a moment of authentically Japanese rejuvenation.
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
                  ← Back to Café
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
