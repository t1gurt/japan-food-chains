import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Zap } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Matsuya 松屋 | Gyudon Tech Revolution | JapanChains",
  description: "Pioneer of 100% automated gyudon. Unbeatable price ¥380, smart vending machines, signature curry. Technological innovation.",
  keywords: [
    'matsuya', '松屋', 'automated gyudon', 'smart vending machines',
    'unbeatable price', 'tech innovation', 'signature curry',
    'pioneer automation', 'gyudon ¥380', 'contactless'
  ],
  openGraph: {
    title: "Matsuya 松屋 | Gyudon Tech Revolution | JapanChains",
    description: "Pioneer of 100% automated gyudon. Unbeatable price ¥380, smart vending machines, signature curry. Technological innovation.",
    type: 'article',
    locale: "en_US",
    siteName: "JapanChains - Japanese Restaurant Guide"
  },
  alternates: {
    canonical: 'https://japanchains.com/chains/matsuya',
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function MatsuyaPage() {
  return (
    <>
      <ChainViewTracker chainName="matsuya" chainCategory="gyudon" />
      <div className="min-h-screen bg-gray-50">
      {/* Header with back button */}
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
            <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">松</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Matsuya</h1>
              <p className="text-lg text-gray-600">松屋 | まつや</p>
              <p className="text-sm text-gray-500">The technological innovator of gyūdon</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* General presentation */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Pioneer of Innovation</h2>
              <div className="prose prose-orange max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Matsuya, founded in 1966, is <strong>the third player in the gyūdon market</strong> 
                  with <strong>1,057 restaurants</strong> in Japan. But don't be fooled: 
                  this chain compensates for its smaller size with <strong>remarkable technological 
                  innovation</strong> and a unique market positioning.
                </p>
                <p className="text-gray-700">
                  Matsuya distinguished itself by becoming <strong>the first fully 
                  automated gyūdon chain</strong>, with automatic ticket vending machines 
                  in all its restaurants. This technological approach, combined with very 
                  competitive prices and bold culinary innovations, makes it an essential 
                  player in the Japanese gastronomic landscape.
                </p>
              </div>
            </div>

            {/* History and innovation */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <History className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">The Story of an Innovator</h2>
              </div>
              
              <div className="space-y-6">
                {/* Creation */}
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">1966: Modest Beginnings</h3>
                  <p className="text-gray-700">
                    Matsuya was founded as <strong>a small local chain</strong> in the Tokyo 
                    region. Unlike Yoshinoya which focuses on tradition, Matsuya adopts 
                    from the start a <strong>pragmatic and modern approach</strong>.
                  </p>
                </div>

                {/* Technological innovation */}
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">1980-1990: Vending Machine Revolution</h3>
                  <p className="text-gray-700">
                    Matsuya becomes <strong>pioneer in automation</strong> by installing 
                    automatic ticket vending machines in all its restaurants. This revolutionary 
                    innovation <strong>reduces staff costs</strong> and improves efficiency.
                  </p>
                </div>

                {/* Strategic expansion */}
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">2000+: Expansion and Differentiation</h3>
                  <p className="text-gray-700">
                    Taking advantage of its optimized cost structure, Matsuya develops a 
                    dense network in urban areas and <strong>constantly innovates on products</strong>: 
                    beef curry, hamburg steaks, and creative collaborations.
                  </p>
                </div>

                {/* Unique positioning */}
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">2010+: The Technological Alternative</h3>
                  <p className="text-gray-700">
                    Matsuya positions itself as <strong>"the tech chain of gyūdon"</strong>, 
                    attracting an urban, young and tech-savvy clientele. Its no-service-staff 
                    approach particularly appeals to Japanese introverts.
                  </p>
                </div>
              </div>
            </div>

            {/* Detailed technological innovation */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Zap className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">The Vending Machine Revolution</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Automated Ticket System</h3>
                    <p className="text-gray-700 text-sm">
                      <strong>100% of restaurants equipped</strong> with automatic vending machines 
                      with touchscreens in Japanese and English. Payment by cash, cards 
                      and mobile applications.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Cost Optimization</h3>
                    <p className="text-gray-700 text-sm">
                      <strong>Drastic reduction in staff costs</strong>, allowing 
                      very competitive prices. Savings are passed on to customers.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Contactless Experience</h3>
                    <p className="text-gray-700 text-sm">
                      <strong>Ideal for introverted customers</strong>. Order, payment 
                      and service with minimal human contact. A much appreciated approach in Japan.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Continuous Innovation</h3>
                    <p className="text-gray-700 text-sm">
                      <strong>Mobile application</strong>, advance orders, digital 
                      loyalty programs. Matsuya stays at the forefront of technology.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed menu */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Matsuya Menu</h2>
              
              {/* Classic gyūdon */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm mr-3">Classic</span>
                  Traditional Gyūdon
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Dish</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Size</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Price</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Specialty</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Gyūdon</div>
                          <div className="text-sm text-gray-500">牛めし | ぎゅうめし</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Regular (並盛)</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">¥380</td>
                        <td className="px-4 py-4 text-sm text-gray-600">Lowest price on the market</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Gyūdon</div>
                          <div className="text-sm text-gray-500">牛めし | ぎゅうめし</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Large (大盛)</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">¥530</td>
                        <td className="px-4 py-4 text-sm text-gray-600">Extra portion of rice</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Premium Gyūdon</div>
                          <div className="text-sm text-gray-500">プレミアム牛めし</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Regular</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">¥590</td>
                        <td className="px-4 py-4 text-sm text-gray-600">Superior quality beef</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Kalbi Gyūdon</div>
                          <div className="text-sm text-gray-500">カルビ牛めし</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Regular</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">¥650</td>
                        <td className="px-4 py-4 text-sm text-gray-600">Marinated beef ribs</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Matsuya specialties */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm mr-3">Signature</span>
                  Exclusive Specialties
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
                          <div className="font-medium text-gray-900">Beef Curry</div>
                          <div className="text-sm text-gray-500">ビーフカレー</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Signature beef curry, thick and flavorful</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">¥490</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Hamburg Steak</div>
                          <div className="text-sm text-gray-500">ハンバーグ定食</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Japanese-style hamburger steak with sauce</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">¥690</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Chicken Nanban</div>
                          <div className="text-sm text-gray-500">チキン南蛮定食</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Fried chicken with tartar sauce, southern specialty</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">¥790</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Seafood Curry</div>
                          <div className="text-sm text-gray-500">シーフードカレー</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Curry with seafood and vegetables</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">¥590</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Options and sets */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm mr-3">Sets</span>
                  Complete Meals
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Complete Set</h4>
                    <p className="text-sm text-gray-700 mb-2">Gyūdon + miso + salad + raw egg</p>
                    <div className="text-sm text-gray-600">+¥150 to any main dish</div>
                  </div>
                  <div className="border border-gray-200 rounded p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Morning Set</h4>
                    <p className="text-sm text-gray-700 mb-2">Breakfast menu until 10am</p>
                    <div className="text-sm text-gray-600">From ¥280</div>
                  </div>
                  <div className="border border-gray-200 rounded p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">W Set</h4>
                    <p className="text-sm text-gray-700 mb-2">Double portion of beef</p>
                    <div className="text-sm text-gray-600">+¥200 to any gyūdon</div>
                  </div>
                  <div className="border border-gray-200 rounded p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Topping Options</h4>
                    <p className="text-sm text-gray-700 mb-2">Egg, cheese, kimchi, onions</p>
                    <div className="text-sm text-gray-600">¥50 to ¥100 each</div>
                  </div>
                </div>
              </div>

              {/* Promotions */}
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Recurring Promotions</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div>
                    <strong>Happy Hour</strong> - 2pm-5pm, -¥50 on gyūdon
                  </div>
                  <div>
                    <strong>Night Discount</strong> - 10pm-6am, reduced prices
                  </div>
                  <div>
                    <strong>First Tuesday</strong> - Curry at special price
                  </div>
                  <div>
                    <strong>Matsuya App</strong> - Coupons and loyalty points
                  </div>
                </div>
              </div>
            </div>

            {/* Vending machine guide */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Using the Vending Machine</h2>
              
              <div className="space-y-6">
                {/* Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-red-600 font-bold">1</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Choose</h3>
                    <p className="text-sm text-gray-600">Select your dish on the touchscreen</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-red-600 font-bold">2</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Pay</h3>
                    <p className="text-sm text-gray-600">Cash, card or mobile app</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-red-600 font-bold">3</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Collect</h3>
                    <p className="text-sm text-gray-600">Take your ticket and go to the counter</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-red-600 font-bold">4</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Wait</h3>
                    <p className="text-sm text-gray-600">Sit down, your order arrives in 3-5 min</p>
                  </div>
                </div>

                {/* Practical tips */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Tips for Beginners</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium text-gray-900">Interface:</div>
                      <div className="text-gray-700">Available in Japanese and English</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Payment:</div>
                      <div className="text-gray-700">IC cards (Suica, Pasmo) accepted</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Options:</div>
                      <div className="text-gray-700">Customizations directly on screen</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Service:</div>
                      <div className="text-gray-700">Staff available if problems</div>
                    </div>
                  </div>
                </div>

                {/* Useful Japanese words */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Useful Words for the Machine</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium text-gray-900">注文 (Chūmon):</div>
                      <div className="text-gray-700">"Order" - main button</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">セット (Setto):</div>
                      <div className="text-gray-700">"Set" - complete meal</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">大盛 (Ōmori):</div>
                      <div className="text-gray-700">"Large portion"</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">English:</div>
                      <div className="text-gray-700">Button to switch to English</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Competitive positioning */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Unique Market Position</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 text-green-600">Matsuya Advantages</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-green-600 text-xs">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Unbeatable Prices</h4>
                        <p className="text-sm text-gray-700">
                          Gyūdon at ¥380, cheapest on the market
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-green-600 text-xs">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Advanced Technology</h4>
                        <p className="text-sm text-gray-700">
                          100% automated, contactless experience
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-green-600 text-xs">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Culinary Innovation</h4>
                        <p className="text-sm text-gray-700">
                          Beef curry, hamburg steaks, creative menus
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 text-orange-600">Challenges</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-orange-600 text-xs">!</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Limited Size</h4>
                        <p className="text-sm text-gray-700">
                          3rd position, fewer locations than Sukiya/Yoshinoya
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-orange-600 text-xs">!</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Impersonal Experience</h4>
                        <p className="text-sm text-gray-700">
                          May seem cold for some customers
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-orange-600 text-xs">!</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Technology Barrier</h4>
                        <p className="text-sm text-gray-700">
                          May intimidate less tech-savvy customers
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Practical information */}
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
                    <div className="text-gray-600">24/7 (urban areas)</div>
                    <div className="text-gray-500 text-xs">6am-12am (other locations)</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Location</div>
                    <div className="text-gray-600">Dense urban areas</div>
                    <div className="text-gray-500 text-xs">1,057 restaurants in Japan</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CreditCard className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Payment</div>
                    <div className="text-gray-600">100% automated</div>
                    <div className="text-gray-500 text-xs">Cash, cards, mobile</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Users className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Clientele</div>
                    <div className="text-gray-600">Urban and tech-savvy</div>
                    <div className="text-gray-500 text-xs">Salarymen, students</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <a 
                  href="https://www.matsuyafoods.co.jp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-700 text-sm font-medium"
                >
                  Official Matsuya Website →
                </a>
              </div>
            </div>

            {/* Average prices */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Average Prices</h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Regular gyūdon</span>
                  <span className="font-medium">¥380</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Premium</span>
                  <span className="font-medium">¥590</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Beef curry</span>
                  <span className="font-medium">¥490</span>
                </div>
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <div className="flex justify-between font-medium">
                    <span className="text-gray-900">Average meal</span>
                    <span className="text-gray-900">¥380-550</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Our opinion */}
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Opinion</h3>
              <div className="flex items-center mb-2">
                <div className="flex text-red-400">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4" />
                </div>
                <span className="text-sm text-gray-600 ml-2">Innovation and unbeatable prices</span>
              </div>
              <p className="text-sm text-gray-700">
                <strong>The technological experience of gyūdon.</strong> Matsuya offers 
                the best value for money on the market. Perfect for those who appreciate 
                efficiency, low prices and innovation. Complete automation 
                may surprise but quickly becomes addictive.
              </p>
            </div>

            {/* Mobile app */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Matsuya App</h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Order and pay in advance</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Loyalty points</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Exclusive coupons</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Restaurant locator</span>
                </div>
              </div>
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
                  href="/chains/sukiya" 
                  className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="font-medium text-gray-900">Sukiya</div>
                  <div className="text-sm text-gray-600">The leader by volume</div>
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