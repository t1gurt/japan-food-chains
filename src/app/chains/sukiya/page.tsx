import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, Award, History } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sukiya (すき家) - Japan's Largest Gyudon Chain | Complete Guide",
  description: "Discover Sukiya, Japan's biggest gyudon chain. Diverse menu (curry, seafood), 24h family-friendly service, and drive-through convenience.",
  keywords: [
    'sukiya', 'すき家', 'gyudon', 'largest chain',
    'gyudon leader', 'diverse menu', '24h service',
    'beef rice bowl', 'fast food', 'japan gyudon'
  ],
  openGraph: {
    title: "Sukiya (すき家) - Japan's Largest Gyudon Chain | Complete Guide",
    description: "Discover Sukiya, Japan's biggest gyudon chain. Diverse menu (curry, seafood), 24h family-friendly service.",
    type: 'article',
    url: '/chains/sukiya',
  },
  alternates: {
    canonical: '/chains/sukiya',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SukiyaPage() {
  return (
    <>
      <ChainViewTracker chainName="Sukiya" chainCategory="Gyudon" />
      <div className="min-h-screen bg-gray-50">
      {/* Header with back navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/dish-types/gyudon" 
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Gyūdon
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">ぁE/span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Sukiya</h1>
              <p className="text-lg text-gray-600">すき家 | すきめE/p>
              <p className="text-sm text-gray-500">The gyūdon leader by number of restaurants</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* General Introduction */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Giant of Diversity</h2>
              <div className="prose prose-orange max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Sukiya is today <strong>Japan's largest gyūdon network</strong> with 
                  <strong> 1,942 restaurants</strong> across the archipelago. Founded in 1982 by Zensho Holdings, 
                  this chain has revolutionized the gyūdon market by prioritizing <strong>diversity, 
                  convenience and family accessibility</strong>.
                </p>
                <p className="text-gray-700">
                  Unlike Yoshinoya's pure tradition, Sukiya has bet on innovation 
                  and adaptation to modern tastes. Its extended menu, drive-through services 
                  and family positioning make it the preferred choice of a broader 
                  and more diverse clientele.
                </p>
              </div>
            </div>

            {/* History and Strategy */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <History className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">The Challenger's Rise</h2>
              </div>
              
              <div className="space-y-6">
                {/* Foundation */}
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">1982: Birth of Innovation</h3>
                  <p className="text-gray-700">
                    Sukiya was created by <strong>Zensho Holdings</strong> with a clear vision: 
                    democratize gyūdon by adapting it to the needs of modern families. 
                    From the start, the chain focused on <strong>menu diversity</strong> 
                    and accessibility.
                  </p>
                </div>

                {/* Expansion */}
                <div className="border-l-4 border-green-400 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">1990-2000: Strategic Expansion</h3>
                  <p className="text-gray-700">
                    Sukiya developed a dense network of restaurants by prioritizing 
                    <strong> suburban locations and shopping centers</strong>. 
                    This strategy allowed it to reach families and offer 
                    services like drive-through.
                  </p>
                </div>

                {/* BSE Crisis */}
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">2004: The BSE Crisis Opportunity</h3>
                  <p className="text-gray-700">
                    While Yoshinoya suspended its sales, Sukiya seized the opportunity by 
                    <strong> switching to Australian beef</strong>. This pragmatic decision 
                    allowed it to maintain service and <strong>gain considerable market share</strong>.
                  </p>
                </div>

                {/* Leadership */}
                <div className="border-l-4 border-yellow-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">2010+: Leadership by Volume</h3>
                  <p className="text-gray-700">
                    Sukiya became the <strong>market leader</strong> through aggressive 
                    expansion and adaptability. Today, it's the reference 
                    in terms of volume and convenience.
                  </p>
                </div>
              </div>
            </div>

            {/* Strategy and Differentiation */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">The Diversity Strategy</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Extended Menu</h3>
                    <p className="text-gray-700 text-sm">
                      <strong>Over 50 different dishes</strong>: classic gyūdon, curry, 
                      seafood bowls, desserts, breakfast. A "family restaurant" approach 
                      rather than specialist.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Maximum Convenience</h3>
                    <p className="text-gray-700 text-sm">
                      <strong>Drive-through, delivery, strategic locations</strong> near 
                      shopping centers and residential areas. Focus on accessibility.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Family Positioning</h3>
                    <p className="text-gray-700 text-sm">
                      Family tables, <strong>kids menu</strong>, relaxed atmosphere. 
                      Targets families rather than rushed office workers.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-green-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Continuous Innovation</h3>
                    <p className="text-gray-700 text-sm">
                      <strong>Regular new products</strong>, seasonal collaborations, 
                      rapid adaptation to trends. A dynamic marketing approach.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed Menu */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Sukiya Menu</h2>
              
              {/* Classic Gyūdon */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm mr-3">Classic</span>
                  Traditional Gyūdon
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Dish</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Size</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Price</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Calories</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Gyūdon</div>
                          <div className="text-sm text-gray-500">牛丼 | ぎゅぁE��めE/div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Regular (並盁E</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">¥400</td>
                        <td className="px-4 py-4 text-sm text-gray-700">733 kcal</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Gyūdon</div>
                          <div className="text-sm text-gray-500">牛丼 | ぎゅぁE��めE/div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Large (大盁E</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">¥530</td>
                        <td className="px-4 py-4 text-sm text-gray-700">953 kcal</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Gyūdon</div>
                          <div className="text-sm text-gray-500">牛丼 | ぎゅぁE��めE/div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Mega (メガ)</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">¥680</td>
                        <td className="px-4 py-4 text-sm text-gray-700">1273 kcal</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Mini Gyūdon</div>
                          <div className="text-sm text-gray-500">ミニ牛丼</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Mini</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">¥350</td>
                        <td className="px-4 py-4 text-sm text-gray-700">513 kcal</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Special Variations */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm mr-3">Specialties</span>
                  Popular Variations
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Dish</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Description</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Price</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Cheese Gyūdon</div>
                          <div className="text-sm text-gray-500">チ�Eズ牛丼</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Gyūdon with melted cheese on top</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">¥500</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Kimchi Gyūdon</div>
                          <div className="text-sm text-gray-500">キムチ牛丼</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">With spicy kimchi for extra flavor</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">¥480</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Ontama Gyūdon</div>
                          <div className="text-sm text-gray-500">おんたま牛丼</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">With soft-boiled egg (onsen tamago)</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">¥450</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Seafood Bowl</div>
                          <div className="text-sm text-gray-500">海鮮丼</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Rice bowl with assorted seafood</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">¥650</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Extended Menu */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm mr-3">Diversity</span>
                  Beyond Gyūdon
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Curry</h4>
                    <p className="text-sm text-gray-700 mb-2">Japanese curry with different toppings</p>
                    <div className="text-sm text-gray-600">From ¥390</div>
                  </div>
                  <div className="border border-gray-200 rounded p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Breakfast</h4>
                    <p className="text-sm text-gray-700 mb-2">Special morning menu available until 10AM</p>
                    <div className="text-sm text-gray-600">From ¥280</div>
                  </div>
                  <div className="border border-gray-200 rounded p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Desserts</h4>
                    <p className="text-sm text-gray-700 mb-2">Soft cream, seasonal desserts</p>
                    <div className="text-sm text-gray-600">From ¥200</div>
                  </div>
                  <div className="border border-gray-200 rounded p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Kids Menu</h4>
                    <p className="text-sm text-gray-700 mb-2">Child-sized portions with toy included</p>
                    <div className="text-sm text-gray-600">From ¥300</div>
                  </div>
                </div>
              </div>

              {/* Special Orders */}
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Popular Options</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div>
                    <strong>つめE��ぁE(Tsuyudaku)</strong> - Extra sauce
                  </div>
                  <div>
                    <strong>ねぎだぁE(Negidaku)</strong> - Extra onions
                  </div>
                  <div>
                    <strong>お持ち帰めE(Omochi-kaeri)</strong> - Takeout
                  </div>
                  <div>
                    <strong>ドライブスルー (Drive-through)</strong> - Car service
                  </div>
                </div>
              </div>
            </div>

            {/* Ordering Guide */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Order at Sukiya</h2>
              
              <div className="space-y-6">
                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-green-600 font-bold">1</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Choose</h3>
                    <p className="text-sm text-gray-600">Dine-in, drive-through or takeout</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-green-600 font-bold">2</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Order</h3>
                    <p className="text-sm text-gray-600">At counter or via vending machine</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-green-600 font-bold">3</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Wait</h3>
                    <p className="text-sm text-gray-600">Fast service, usually 3-5 minutes</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-green-600 font-bold">4</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Enjoy</h3>
                    <p className="text-sm text-gray-600">At table or in your car</p>
                  </div>
                </div>

                {/* Useful Phrases */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Useful Japanese Phrases</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium text-gray-900">Order a gyūdon:</div>
                      <div className="text-gray-700">"Gyūdon hitotsu onegaishimasu"</div>
                      <div className="text-gray-500 text-xs">牛丼一つお願いしまぁE/div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">With cheese:</div>
                      <div className="text-gray-700">"Chīzu tsukete kudasai"</div>
                      <div className="text-gray-500 text-xs">チ�Eズつけてください</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Takeout:</div>
                      <div className="text-gray-700">"Omochi-kaeri de"</div>
                      <div className="text-gray-500 text-xs">お持ち帰りで</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Kids menu:</div>
                      <div className="text-gray-700">"Okosama setto"</div>
                      <div className="text-gray-500 text-xs">お子様セチE��</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Competitive Advantages */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Why Sukiya Dominates</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 text-xs">✁E/span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Volume and Accessibility</h4>
                      <p className="text-sm text-gray-700">
                        1,942 restaurants, presence in residential areas
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 text-xs">✁E/span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Drive-Through Service</h4>
                      <p className="text-sm text-gray-700">
                        Pioneer of drive-through in Japanese fast food
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 text-xs">✁E/span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Menu Diversity</h4>
                      <p className="text-sm text-gray-700">
                        Over 50 different dishes, adaptation to family tastes
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 text-xs">✁E/span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Competitive Prices</h4>
                      <p className="text-sm text-gray-700">
                        Attractive pricing strategy, regular promotions
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Practical Information */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Info className="w-5 h-5 text-orange-600 mr-2" />
                Practical Information
              </h3>
              
              <div className="space-y-4 text-sm">
                <div className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Hours</div>
                    <div className="text-gray-600">24/7 (some restaurants)</div>
                    <div className="text-gray-500 text-xs">Varies by location</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Location</div>
                    <div className="text-gray-600">Shopping centers, residential areas</div>
                    <div className="text-gray-500 text-xs">1,942 restaurants in Japan</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CreditCard className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Payment</div>
                    <div className="text-gray-600">Cash, cards, IC cards</div>
                    <div className="text-gray-500 text-xs">Mobile apps accepted</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Users className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Atmosphere</div>
                    <div className="text-gray-600">Family-friendly and casual</div>
                    <div className="text-gray-500 text-xs">Tables for groups</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <a 
                  href="https://www.sukiya.jp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-700 text-sm font-medium"
                >
                  Official Sukiya Website ↁE
                </a>
              </div>
            </div>

            {/* Average Prices */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Average Prices</h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Regular Gyūdon</span>
                  <span className="font-medium">¥400</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">With cheese</span>
                  <span className="font-medium">¥500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Kids menu</span>
                  <span className="font-medium">¥300</span>
                </div>
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <div className="flex justify-between font-medium">
                    <span className="text-gray-900">Average meal</span>
                    <span className="text-gray-900">¥400-550</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Review */}
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Review</h3>
              <div className="flex items-center mb-2">
                <div className="flex text-green-400">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4" />
                </div>
                <span className="text-sm text-gray-600 ml-2">Excellent value for money</span>
              </div>
              <p className="text-sm text-gray-700">
                <strong>The practical choice par excellence.</strong> Sukiya excels through convenience 
                and diversity. Perfect for families and those seeking varied options 
                at affordable prices. The experience may be less "authentic" than Yoshinoya, 
                but compensates with accessibility.
              </p>
            </div>

            {/* Navigation to other chains */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Other Gyūdon Chains</h3>
              
              <div className="space-y-3">
                <Link 
                  href="/chains/yoshinoya" 
                  className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="font-medium text-gray-900">Yoshinoya</div>
                  <div className="text-sm text-gray-600">The original and authentic</div>
                </Link>
                
                <Link 
                  href="/chains/matsuya" 
                  className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="font-medium text-gray-900">Matsuya</div>
                  <div className="text-sm text-gray-600">The gyūdon innovator</div>
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



