import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Heart, Zap, Crown } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Hanamaru Udon はなまるうどめE| Self-Service | Japan Chains",
  description: "Quality self-service udon. Fresh Sanuki-style udon, wide variety of tempura.",
  keywords: [
    'hanamaru udon', 'はなまるうどめE, 'udon', 'soba',
    'fast service', 'affordable prices', 'fresh udon',
    'kagawa style', 'authentic udon', 'self-service'
  ],
  openGraph: {
    title: "Hanamaru Udon はなまるうどめE| Self-Service | Japan Chains",
    description: "Quality self-service udon. Fresh Sanuki-style udon, wide variety of tempura.",
    type: 'article',
    locale: "en_US",
    siteName: "Japan Chains - Guide to Japanese Restaurants"
  },
  alternates: {
    canonical: '/chains/hanamaru-udon',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  },
};

export default function HanamaruUdonPage() {
  return (
    <>
      <ChainViewTracker chainName="hanamaru-udon" chainCategory="udon" />
      <div className="min-h-screen bg-gray-50">
        {/* Header with back button */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link 
              href="/dish-types/udon" 
              className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Udon/Soba
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl font-bold">は</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Hanamaru Udon</h1>
                <p className="text-lg text-gray-600">はなまるうどめE| ハナマルウドン</p>
                <p className="text-sm text-gray-500">Self-service udon accessible to everyone</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              {/* At a glance */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">At a Glance</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="bg-red-100 rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                      <Utensils className="w-6 h-6 text-red-600" />
                    </div>
                    <div className="text-sm font-medium text-gray-900">Self-Service</div>
                    <div className="text-xs text-gray-500">Cafeteria style</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-green-100 rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-green-600" />
                    </div>
                    <div className="text-sm font-medium text-gray-900">National</div>
                    <div className="text-xs text-gray-500">450+ stores</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-blue-100 rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                      <Clock className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-sm font-medium text-gray-900">Fast</div>
                    <div className="text-xs text-gray-500">5-10 minutes</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-orange-100 rounded-full p-3 w-12 h-12 mx-auto mb-2 flex items-center justify-center">
                      <Star className="w-6 h-6 text-orange-600" />
                    </div>
                    <div className="text-sm font-medium text-gray-900">Economical</div>
                    <div className="text-xs text-gray-500">¥280-500</div>
                  </div>
                </div>
              </div>

              {/* Philosophy */}
              <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-lg p-6 border">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Hanamaru Spirit</h2>
                <div className="prose text-gray-700">
                  <p className="mb-4">
                    <strong>Hanamaru Udon</strong> revolutionized udon consumption in Japan 
                    by popularizing the concept of "セルフサービス" (self-service) in this traditional field. 
                    Since 2000, this chain has democratized access to quality udon at affordable prices.
                  </p>
                  <p className="mb-4">
                    More than just a restaurant, Hanamaru represents the respectful modernization 
                    of Japanese culinary tradition. Here, udon becomes accessible, customizable, 
                    and adapts to contemporary lifestyle without losing its authenticity.
                  </p>
                </div>
              </div>

              {/* History and Culture */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <History className="w-6 h-6 text-red-600 mr-2" />
                  History and Innovation
                </h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="font-bold text-gray-900">2000: The Revolution</h3>
                    <p className="text-gray-700">
                      First self-service udon chain, revolutionizing the codes 
                      of traditional Japanese dining.
                    </p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="font-bold text-gray-900">2003-2010: Rapid Expansion</h3>
                    <p className="text-gray-700">
                      Explosive growth thanks to the innovative concept, going from 10 to over 300 stores. 
                      Introduction of the self-service tempura system.
                    </p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="font-bold text-gray-900">2010s: Quality and Variety</h3>
                    <p className="text-gray-700">
                      Continuous improvement of noodle quality and menu diversification 
                      with regional and seasonal options.
                    </p>
                  </div>
                </div>
              </div>

              {/* Signature Dishes */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Menu</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-lg">Kake Udon</h3>
                      <span className="text-red-600 font-bold">¥280</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">かけぁE��めE/p>
                    <p className="text-gray-700">
                      Basic udon in traditional dashi broth. 
                      The ideal starting point to discover Hanamaru.
                    </p>
                    <div className="mt-3 text-xs text-green-600">☁EMost economical</div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-lg">Tempura Udon</h3>
                      <span className="text-red-600 font-bold">¥380</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">天ぷらうどめE/p>
                    <p className="text-gray-700">
                      Udon with crispy shrimp tempura. 
                      Perfect balance between tradition and indulgence.
                    </p>
                    <div className="mt-3 text-xs text-orange-600">☁EMost popular</div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-lg">Niku Udon</h3>
                      <span className="text-red-600 font-bold">¥490</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">肉うどめE/p>
                    <p className="text-gray-700">
                      Udon with thin slices of simmered beef. 
                      More substantial version rich in umami.
                    </p>
                    <div className="mt-3 text-xs text-purple-600">☁EMore filling</div>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-lg">Zaru Udon</h3>
                      <span className="text-red-600 font-bold">¥380</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">ざるぁE��めE/p>
                    <p className="text-gray-700">
                      Cold udon served with dipping sauce (tsuyu). 
                      Perfect in summer to appreciate the noodle texture.
                    </p>
                    <div className="mt-3 text-xs text-blue-600">☁ESummer recommended</div>
                  </div>
                </div>

                {/* Self-Service Section */}
                <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h3 className="font-bold text-gray-900 mb-3">🍤 Tempura Station (Self-Service)</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                    <div className="text-center">
                      <div className="font-medium">Ebi Tempura</div>
                      <div className="text-gray-600">¥120</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium">Kakiage</div>
                      <div className="text-gray-600">¥100</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium">Chikuwa Tempura</div>
                      <div className="text-gray-600">¥100</div>
                    </div>
                    <div className="text-center">
                      <div className="font-medium">Inari-zushi</div>
                      <div className="text-gray-600">¥100</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Practical guide */}
              <div className="bg-yellow-50 rounded-lg border border-yellow-200 p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                  <Info className="w-6 h-6 text-yellow-600 mr-2" />
                  Hanamaru Self-Service Guide
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Service steps:</h3>
                    <ol className="list-decimal list-inside space-y-1 text-gray-700">
                      <li>Take a tray and ticket at the entrance</li>
                      <li>Order your udon at the main counter</li>
                      <li>Add tempura/side dishes at self-service stations</li>
                      <li>Pay at the cashier (present your tray)</li>
                      <li>Find a seat and enjoy</li>
                      <li>Return tray and dishes to the return station</li>
                    </ol>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Practical tips:</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li>Fresh tempura available all day</li>
                      <li>Option for "ōmori" (large portion) +¥100</li>
                      <li>Free condiments: ginger, sesame, seaweed</li>
                      <li>Fast service even during rush hours</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Options and customization:</h3>
                    <ul className="list-disc list-inside space-y-1 text-gray-700">
                      <li><strong>Atsu/Hiya</strong>: Hot or cold (specify at counter)</li>
                      <li><strong>Toppings</strong>: Wide choice of tempura and inari</li>
                      <li><strong>Gohan</strong>: White rice available (+¥100)</li>
                      <li><strong>Set menus</strong>: Udon + rice + tempura combinations</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Practical information */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Practical Information</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 text-gray-400 mr-3" />
                    <span>Hours: 6AM-11PM (varies)</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-gray-400 mr-3" />
                    <span>Areas: All Japan</span>
                  </div>
                  <div className="flex items-center">
                    <CreditCard className="w-4 h-4 text-gray-400 mr-3" />
                    <span>Payment: Cash, cards, IC cards</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 text-gray-400 mr-3" />
                    <span>Service: Self-service</span>
                  </div>
                </div>
              </div>

              {/* Price range */}
              <div className="bg-green-50 rounded-lg border border-green-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Price Range</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span>Simple udon:</span>
                    <span className="font-bold">¥280-380</span>
                  </div>
                  <div className="flex justify-between">
                    <span>With tempura:</span>
                    <span className="font-bold">¥400-550</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Complete meal:</span>
                    <span className="font-bold">¥600-800</span>
                  </div>
                  <div className="border-t pt-2 mt-2">
                    <div className="flex justify-between font-bold">
                      <span>Average budget:</span>
                      <span className="text-green-600">¥450</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Difficulty level */}
              <div className="bg-blue-50 rounded-lg border border-blue-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Difficulty Level</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Ordering</span>
                      <span className="font-bold">Easy</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '25%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Self-service</span>
                      <span className="font-bold">Very easy</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '15%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Navigation</span>
                      <span className="font-bold">Very easy</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-green-500 h-2 rounded-full" style={{width: '20%'}}></div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-xs text-gray-600">
                  💡 Perfect for starting with Japanese chains!
                </div>
              </div>

              {/* Hanamaru advantages */}
              <div className="bg-red-50 rounded-lg border border-red-200 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Why Hanamaru?</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                    <span>Familiar self-service concept</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                    <span>Transparent and affordable prices</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                    <span>Fresh visible tempura</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                    <span>Relaxed atmosphere</span>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3"></div>
                    <span>Present throughout Japan</span>
                  </div>
                </div>
              </div>

              {/* Other chains */}
              <div className="bg-white rounded-lg shadow-sm border p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Similar Chains</h3>
                <div className="space-y-3">
                  <Link href="/chains/marugame-seimen" className="block p-3 rounded border hover:bg-gray-50">
                    <div className="font-medium">Marugame Seimen</div>
                    <div className="text-sm text-gray-600">Artisanal udon</div>
                  </Link>
                  <Link href="/chains/fuji-soba" className="block p-3 rounded border hover:bg-gray-50">
                    <div className="font-medium">Fuji Soba</div>
                    <div className="text-sm text-gray-600">Traditional soba</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



