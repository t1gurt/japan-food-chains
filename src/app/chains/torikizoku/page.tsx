import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Heart, Gamepad2, Gift, Coins } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Torikizoku 鳥貴旁E| Unique Price Izakaya | Japan Food Chains",
  description: "Yakitori revolution! Everything at ¥327: artisanal skewers, perfect karaage, authentic izakaya atmosphere. Brilliant democratization.",
  keywords: [
    'torikizoku', '鳥貴旁E, 'unique price yakitori', 'democratic izakaya',
    '327 yen fixed', 'artisanal chicken', 'friendly atmosphere',
    'yakitori revolution', 'vertical integration', 'izakaya culture'
  ],
  openGraph: {
    title: "Torikizoku 鳥貴旁E| Unique Price Izakaya | Japan Food Chains",
    description: "Yakitori revolution! Everything at ¥327: artisanal skewers, perfect karaage, authentic izakaya atmosphere. Brilliant democratization.",
    type: 'article',
    locale: "en_US",
    siteName: "Japan Food Chains - Japanese Restaurant Guide"
  },
  alternates: {
    canonical: '/chains/torikizoku',
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function TorikizokuPage() {
  return (
    <>
      <ChainViewTracker chainName="torikizoku" chainCategory="izakaya" />
      <div className="min-h-screen bg-gray-50">
      {/* Header with back button */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/dish-types/izakaya" 
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Izakaya
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-yellow-600 rounded-lg flex items-center justify-center">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Torikizoku</h1>
              <p className="text-lg text-gray-600">鳥貴旁E/p>
              <p className="text-sm text-gray-500">The unique-price yakitori izakaya since 1985</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Introduction */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Info className="w-5 h-5 text-yellow-600" />
                <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
              </div>
              
              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-gray-700 mb-4">
                  <strong>Torikizoku</strong> (鳥貴旁E literally "Bird Nobility") is an 
                  izakaya chain specializing in yakitori that revolutionizes the traditional 
                  concept with its <strong>unique pricing system at ¥327 per dish</strong> 
                  (tax included). Founded in 1985 in Osaka, this chain has over 600 restaurants 
                  in Japan and establishes itself as an accessible alternative to traditional izakaya.
                </p>
                
                <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-yellow-800 mb-2">🎯 Revolutionary concept</h3>
                  <ul className="text-yellow-700 space-y-1">
                    <li>• <strong>Unique price</strong> - All dishes and drinks at ¥327 (tax included)</li>
                    <li>• <strong>Total transparency</strong> - No surprises on the bill</li>
                    <li>• <strong>Consistent quality</strong> - High standards despite the prices</li>
                    <li>• <strong>Relaxed atmosphere</strong> - Accessible to all budgets</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold mb-3">🏭 Vertical integration strategy</h3>
                <p className="mb-4">
                  Torikizoku controls its entire supply chain, from chicken breeding 
                  to restaurant service. This integration allows maintaining quality 
                  while offering extremely competitive prices. The company raises its own 
                  chickens according to strict standards and manages its own cutting centers.
                </p>

                <h3 className="text-xl font-semibold mb-3">🍗 Yakitori specialty</h3>
                <p className="mb-4">
                  Unlike traditional izakaya that offer a varied menu, Torikizoku 
                  focuses exclusively on chicken in all its forms: traditional yakitori, 
                  karaage, chicken salads, and original dishes. This specialization 
                  allows unmatched expertise and efficiency.
                </p>

                <h3 className="text-xl font-semibold mb-3">🌟 Social phenomenon</h3>
                <p className="mb-4">
                  Torikizoku has become a social phenomenon in Japan, particularly appreciated 
                  by students, young workers and families. The chain democratizes access 
                  to izakaya, traditionally perceived as expensive, and creates a new 
                  culture of going out with friends or colleagues.
                </p>

                <h3 className="text-xl font-semibold mb-3">📈 Strategic expansion</h3>
                <p className="mb-4">
                  Present in all major Japanese cities, Torikizoku continues its 
                  expansion with regular openings. Each restaurant follows a standardized 
                  format guaranteeing the same experience throughout Japan. The chain 
                  is also testing international markets with openings in Asia.
                </p>
              </div>
            </div>

            {/* Detailed menu */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Utensils className="w-5 h-5 text-yellow-600" />
                <h2 className="text-2xl font-bold text-gray-900">Unique Price Menu</h2>
              </div>

              <div className="bg-green-50 p-4 rounded-lg mb-6">
                <div className="flex items-center space-x-2 mb-2">
                  <Coins className="w-5 h-5 text-green-600" />
                  <h3 className="font-semibold text-green-800">💴 Unique price: ¥327 (tax included)</h3>
                </div>
                <p className="text-green-700 text-sm">
                  All dishes and drinks are the same price. This revolutionary simplicity 
                  eliminates budget stress and allows you to fully enjoy the izakaya experience.
                </p>
              </div>

              {/* Yakitori (grilled items) */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🔥 Yakitori (Grilled Items)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 font-medium">English Name</th>
                        <th className="text-left p-3 font-medium">日本誁E/th>
                        <th className="text-left p-3 font-medium">Description</th>
                        <th className="text-left p-3 font-medium">Price</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-3 font-medium">Momo (Thigh)</td>
                        <td className="p-3">もも</td>
                        <td className="p-3">Juicy chicken thigh, the most popular</td>
                        <td className="p-3">¥327</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Mune (Breast)</td>
                        <td className="p-3">むね</td>
                        <td className="p-3">Lean chicken breast, light and healthy</td>
                        <td className="p-3">¥327</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Tsukune</td>
                        <td className="p-3">つく�E</td>
                        <td className="p-3">Chicken meatballs with sweet tare sauce</td>
                        <td className="p-3">¥327</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Kawa (Skin)</td>
                        <td className="p-3">かわ</td>
                        <td className="p-3">Crispy chicken skin, rich texture</td>
                        <td className="p-3">¥327</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Tebasaki (Wings)</td>
                        <td className="p-3">手羽允E/td>
                        <td className="p-3">Grilled chicken wings with spicy seasoning</td>
                        <td className="p-3">¥327</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Negima</td>
                        <td className="p-3">ねぎま</td>
                        <td className="p-3">Chicken and green onion alternating skewer</td>
                        <td className="p-3">¥327</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Fried and cooked dishes */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🍤 Fried & Cooked Dishes</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-yellow-600 mb-3">Signature dishes</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Karaage</strong> - Japanese fried chicken, crispy and juicy</li>
                      <li>• <strong>Teba Gyoza</strong> - Unique chicken wing gyoza creation</li>
                      <li>• <strong>Chicken Nanban</strong> - Southern Japanese specialty with tartar</li>
                      <li>• <strong>Oyakodon</strong> - Chicken and egg rice bowl</li>
                      <li>• <strong>Tori Katsu</strong> - Breaded chicken cutlet</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-yellow-600 mb-3">Sides & Salads</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Edamame</strong> - Boiled soybeans, classic appetizer</li>
                      <li>• <strong>Potato Salad</strong> - Japanese-style creamy salad</li>
                      <li>• <strong>Chicken Caesar Salad</strong> - Fresh with grilled chicken</li>
                      <li>• <strong>Kimchi</strong> - Spicy fermented cabbage</li>
                      <li>• <strong>Tofu Salad</strong> - Light and healthy option</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Drinks */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">🍻 Drinks (All ¥327)</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-medium text-yellow-600 mb-3">Alcohol</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Draft beer</li>
                      <li>• Japanese sake</li>
                      <li>• Shochu (potato/rice)</li>
                      <li>• Highball (whiskey soda)</li>
                      <li>• Chu-Hi (flavored alcohol)</li>
                      <li>• Wine (red/white)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-yellow-600 mb-3">Non-alcohol</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Soft drinks</li>
                      <li>• Japanese tea</li>
                      <li>• Coffee</li>
                      <li>• Fruit juices</li>
                      <li>• Mineral water</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-yellow-600 mb-3">Specialties</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• House cocktails</li>
                      <li>• Seasonal fruit sours</li>
                      <li>• Creative mocktails</li>
                      <li>• Traditional hot tea</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Atmosphere and experience */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Users className="w-5 h-5 text-yellow-600" />
                <h2 className="text-2xl font-bold text-gray-900">Atmosphere & Experience</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-800 mb-2">🎌 Authentic atmosphere</h3>
                  <p className="text-orange-700 text-sm mb-3">
                    Torikizoku recreates the traditional izakaya atmosphere with warm 
                    Japanese decor, lanterns, and the characteristic smell of 
                    charcoal grilling.
                  </p>
                  <ul className="text-orange-700 text-sm space-y-1">
                    <li>• <strong>Yakitori counter</strong> - View of cooks in action</li>
                    <li>• <strong>Friendly tables</strong> - Perfect for groups</li>
                    <li>• <strong>Sound atmosphere</strong> - Lively discussions, vibrant atmosphere</li>
                    <li>• <strong>Energetic service</strong> - "Irasshaimase!" traditional welcome</li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">👥 Typical clientele</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Groups of friends after work</li>
                      <li>• Students for economical outings</li>
                      <li>• Families on weekends</li>
                      <li>• Couples for a casual meal</li>
                      <li>• Colleagues for nomikai (company parties)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">⏰ Peak times</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Afternoon: families and friend groups</li>
                      <li>• 6-8 PM: worker peak</li>
                      <li>• Evening: festive and relaxed atmosphere</li>
                      <li>• Weekend: calmer, varied clientele</li>
                      <li>• Holiday periods: reservations recommended</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-medium text-red-800 mb-2">🍻 Modern izakaya</h4>
                  <p className="text-sm text-red-700">
                    Torikizoku modernizes the traditional izakaya concept while keeping the 
                    friendly spirit and removing financial barriers. It's the ideal place 
                    to discover Japanese izakaya culture without budget stress.
                  </p>
                </div>
              </div>
            </div>

            {/* Practical guide */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-5 h-5 text-yellow-600" />
                <h2 className="text-2xl font-bold text-gray-900">Practical Guide</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">📝 How to order</h3>
                  <ol className="text-blue-700 text-sm space-y-1">
                    <li><strong>1.</strong> Free seating (except reservations)</li>
                    <li><strong>2.</strong> Order verbally or by pointing at the menu</li>
                    <li><strong>3.</strong> Everything is ¥327, easy mental calculation</li>
                    <li><strong>4.</strong> Successive orders possible</li>
                    <li><strong>5.</strong> Payment at the end of the meal</li>
                  </ol>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🎯 Recommended order (beginner)</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Momo yakitori</strong> - Must-try (¥327)</li>
                      <li>• <strong>Karaage</strong> - Safe choice (¥327)</li>
                      <li>• <strong>Edamame</strong> - Classic appetizer (¥327)</li>
                      <li>• <strong>Draft beer</strong> - Perfect drink (¥327)</li>
                      <li><strong>Total: ¥1,308</strong> to discover the essentials</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🌟 Gourmet selection</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Tsukune</strong> - Signature meatballs (¥327)</li>
                      <li>• <strong>Teba gyoza</strong> - Unique creation (¥327)</li>
                      <li>• <strong>Chicken nanban</strong> - Refined specialty (¥327)</li>
                      <li>• <strong>Japanese sake</strong> - Perfect pairing (¥327)</li>
                      <li><strong>Total: ¥1,308</strong> for the complete experience</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-2">💡 Budget tips</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• <strong>Fixed price</strong> - Predictable and controlled budget</li>
                    <li>• <strong>Sharing dishes</strong> - Ideal for trying several specialties</li>
                    <li>• <strong>No happy hour</strong> - Same price all day</li>
                    <li>• <strong>Average cost</strong> - ¥2,000-3,000 per person for a complete meal</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Essential information */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Essential Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Hours</div>
                    <div className="text-sm text-gray-600">5:00 PM - 1:00 AM (Sun-Thu)</div>
                    <div className="text-sm text-gray-600">5:00 PM - 2:00 AM (Fri-Sat)</div>
                    <div className="text-sm text-gray-500">Some restaurants open for lunch</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-sm text-gray-600">600+ restaurants in Japan</div>
                    <div className="text-sm text-gray-500">All major cities, lively districts</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CreditCard className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Payment</div>
                    <div className="text-sm text-gray-600">Cash, cards, e-wallets</div>
                    <div className="text-sm text-gray-500">Mobile app with points</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Coins className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Unique price</div>
                    <div className="text-sm text-gray-600">¥327 tax included per dish/drink</div>
                    <div className="text-sm text-gray-500">No surprises on the bill</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tips for visitors */}
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-4">
                💡 Tips for International Visitors
              </h3>
              
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-yellow-700">First yakitori</div>
                  <div className="text-yellow-600">Start with momo (thigh), the most appreciated</div>
                </div>
                
                <div>
                  <div className="font-medium text-yellow-700">Predictable budget</div>
                  <div className="text-yellow-600">Simply count the number of dishes ÁE¥327</div>
                </div>
                
                <div>
                  <div className="font-medium text-yellow-700">Authentic experience</div>
                  <div className="text-yellow-600">True izakaya culture at democratic prices</div>
                </div>
                
                <div>
                  <div className="font-medium text-yellow-700">Friendly sharing</div>
                  <div className="text-yellow-600">Order several dishes to share in a group</div>
                </div>
              </div>
            </div>

            {/* Comparison */}
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">
                📊 Vs other izakaya
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-orange-700">Vs Traditional izakaya</div>
                  <div className="text-orange-600">Same atmosphere, much more affordable and predictable</div>
                </div>
                <div>
                  <div className="font-medium text-orange-700">Vs Watami</div>
                  <div className="text-orange-600">Specialized in chicken vs varied menu</div>
                </div>
                <div>
                  <div className="font-medium text-orange-700">Unique positioning</div>
                  <div className="text-orange-600">Revolutionary pricing democratizes izakaya culture</div>
                </div>
              </div>
            </div>

            {/* Cultural note */}
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-3">
                🏮 Cultural Note
              </h3>
              <p className="text-sm text-green-700">
                Torikizoku has democratized izakaya culture in Japan, making it accessible 
                to all social classes. It's where Japanese people learn to appreciate yakitori 
                and izakaya atmosphere without the intimidation factor of high-end establishments. 
                A true social revolution through food.
              </p>
            </div>

            {/* Useful links */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
              <div className="space-y-2">
                <a href="https://www.torikizoku.co.jp/" 
                   className="block text-yellow-600 hover:text-yellow-700 text-sm">
                  ↁEOfficial Torikizoku website
                </a>
                <a href="/dish-types/izakaya" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  ↁEComplete izakaya guide
                </a>
                <a href="/chains/watami" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  ↁECompare with Watami
                </a>
                <a href="/guides/understanding-japanese-culture" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  ↁEUnderstanding Japanese drinking culture
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}



