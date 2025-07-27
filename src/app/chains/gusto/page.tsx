import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Heart, Coffee, Leaf, Zap } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Gusto ガスト | Famiresu N°1 | Japonchaines",
  description: "Leader family restaurants. Varied menu, robot service, unlimited drink bar.",
  keywords: [
    'gusto', 'ガスト', 'family restaurant', 'family restaurant',
    'varied menu', 'affordable prices', 'perfect for families',
    'relaxed atmosphere', 'western cuisine', 'popular restaurant'
  ],
  openGraph: {
    title: "Gusto ガスト | Famiresu N°1 | Japonchaines",
    description: "Leader family restaurants. Varied menu, robot service, unlimited drink bar.",
    type: 'article',
    locale: "en_US",
    siteName: "Japonchaines - Japanese Restaurant Guide"
  },
  alternates: {
    canonical: '/chains/gusto',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GustoPage() {
  return (
    <>
      <ChainViewTracker chainName="gusto" chainCategory="family-restaurants" />
      <div className="min-h-screen bg-gray-50">
      {/* Header avec retour */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/type-plat/family-restaurants" 
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Family Restaurants
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">G</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Gusto</h1>
              <p className="text-lg text-gray-600">ガスト | がすと</p>
              <p className="text-sm text-gray-500">Japan's most popular family restaurant</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contenu principal */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Présentation */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Info className="w-5 h-5 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Overview</h2>
              </div>
              
              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-gray-700 mb-4">
                  <strong>Gusto (ガスト)</strong> is THE reference family restaurant (famiresu) chain in Japan, 
                  with over 1,300 establishments throughout the archipelago. Launched in 1970 by the Skylark group, 
                  Gusto perfectly embodies the Japanese concept of a family restaurant: accessibility, 
                  variety, and impeccable service available 24/7 in many establishments.
                </p>
                
                <div className="bg-green-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-green-800 mb-2">🏆 Undisputed leader of famiresu</h3>
                  <ul className="text-green-700 space-y-1">
                    <li>• <strong>1,300+ restaurants</strong> - Presence throughout Japan</li>
                    <li>• <strong>24/7</strong> - Most establishments are open continuously</li>
                    <li>• <strong>Giant menu</strong> - Over 200 different dishes available</li>
                    <li>• <strong>Affordable prices</strong> - Full meal from ¥500</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold mb-3">🎯 Revolutionary Concept</h3>
                <p className="mb-4">
                  Gusto revolutionized Japanese dining by importing the American "family 
                  restaurant" concept while adapting it to Japanese tastes. This fusion created a unique format: 
                  a restaurant where the whole family can eat together, everyone finding something they like, at 
                  any time of day.
                </p>

                <h3 className="text-xl font-semibold mb-3">🔧 Technological Innovation</h3>
                <p className="mb-4">
                  Gusto is a pioneer in the use of technology in Japanese restaurants. Robot 
                  waiters, tablet ordering, automated delivery systems: the chain 
                  invests heavily in innovation to maintain low prices and efficient service.
                </p>

                <h3 className="text-xl font-semibold mb-3">🌏 Culinary Diversity</h3>
                <p className="mb-4">
                  The Gusto menu is a true world tour: traditional Japanese cuisine, adapted 
                  Western dishes, Asian specialties, desserts, and even an unlimited salad bar. 
                  This diversity allows satisfying all tastes and all ages within the same family.
                </p>

                <h3 className="text-xl font-semibold mb-3">💫 Unique Social Experience</h3>
                <p className="mb-4">
                  More than just a restaurant, Gusto has become an important place for socialization in 
                  Japanese society: a meeting place for teenagers, a workspace for 
                  students, a nocturnal refuge for salarymen, and of course a family restaurant on weekends.
                </p>
              </div>
            </div>

            {/* Menu détaillé */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Utensils className="w-5 h-5 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Complete Gusto Menu</h2>
              </div>

              {/* Main Categories */}
              <div className="mb-8">
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-green-800 mb-3">🗂️ Menu Structure (200+ dishes)</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="bg-white p-2 rounded text-center text-sm">
                      <div className="font-medium text-green-700">Japanese Cuisine</div>
                      <div className="text-green-600">40+ dishes</div>
                    </div>
                    <div className="bg-white p-2 rounded text-center text-sm">
                      <div className="font-medium text-red-700">Western Cuisine</div>
                      <div className="text-red-600">60+ dishes</div>
                    </div>
                    <div className="bg-white p-2 rounded text-center text-sm">
                      <div className="font-medium text-yellow-700">Asian Fusion</div>
                      <div className="text-yellow-600">30+ dishes</div>
                    </div>
                    <div className="bg-white p-2 rounded text-center text-sm">
                      <div className="font-medium text-purple-700">Desserts & Drinks</div>
                      <div className="text-purple-600">70+ options</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Signature Dishes */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">⭐ Popular Signature Dishes</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 font-medium">Name</th>
                        <th className="text-left p-3 font-medium">Category</th>
                        <th className="text-left p-3 font-medium">Description</th>
                        <th className="text-left p-3 font-medium">Price</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-3 font-medium">Cheese In Hamburg</td>
                        <td className="p-3 text-red-600">Western</td>
                        <td className="p-3">Signature hamburger with melted cheese core</td>
                        <td className="p-3">¥799</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Karaage Chicken</td>
                        <td className="p-3 text-green-600">Japanese</td>
                        <td className="p-3">Japanese fried chicken, extra crispy</td>
                        <td className="p-3">¥549</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Beef Steak Garlic</td>
                        <td className="p-3 text-red-600">Western</td>
                        <td className="p-3">Beef steak with garlic sauce</td>
                        <td className="p-3">¥999</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Yakitori Don</td>
                        <td className="p-3 text-green-600">Japanese</td>
                        <td className="p-3">Rice bowl with teriyaki chicken skewers</td>
                        <td className="p-3">¥649</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Margherita Pizza</td>
                        <td className="p-3 text-red-600">Italian</td>
                        <td className="p-3">Classic pizza, thin crispy crust</td>
                        <td className="p-3">¥699</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Menu by Time of Day */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🕐 Menu by Time of Day</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-orange-600 mb-3">🌅 Breakfast (5 AM - 11 AM)</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Morning Set</strong> - ¥399 (eggs, toast, coffee)</li>
                      <li>• <strong>Pancake Set</strong> - ¥499 (3 pancakes, syrup, butter)</li>
                      <li>• <strong>Japanese Morning</strong> - ¥549 (rice, miso, grilled fish)</li>
                      <li>• <strong>Sandwich Morning</strong> - ¥449 (sandwich + salad + coffee)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-600 mb-3">🌙 Late Night (10 PM - 5 AM)</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Midnight Ramen</strong> - ¥649 (ramen + gyoza)</li>
                      <li>• <strong>Curry Rice</strong> - ¥549 (available 24/7)</li>
                      <li>• <strong>Fried Rice</strong> - ¥599 (homemade fried rice)</li>
                      <li>• <strong>Study Set</strong> - ¥399 (snack + unlimited drink)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Salad and Drink Bar */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🥗 Salad & Drink Bar</h3>
                
                <div className="bg-green-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-green-800 mb-2">🌿 Unlimited Salad Bar</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="font-medium text-green-700 mb-2">Bar Content</div>
                      <ul className="text-green-600 text-sm space-y-1">
                        <li>• 15+ fresh daily vegetables</li>
                        <li>• 8 sauces and dressings</li>
                        <li>• Seasonal fruits</li>
                        <li>• Corn, olives, grated cheese</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-medium text-green-700 mb-2">Prices and Formulas</div>
                      <ul className="text-green-600 text-sm space-y-1">
                        <li>• <strong>Alone:</strong> ¥599 (unlimited)</li>
                        <li>• <strong>+ dish:</strong> ¥299 (supplement)</li>
                        <li>• <strong>+ drinks:</strong> ¥199 (supplement)</li>
                        <li>• <strong>Children:</strong> ¥299 (up to 12 years old)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-blue-600 mb-3">☕ Drink Bar</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Coffee (8 varieties)</li>
                      <li>• Hot and iced teas</li>
                      <li>• Sodas and juices (20+ flavors)</li>
                      <li>• Hot chocolates</li>
                      <li>• <strong>Price:</strong> ¥329 unlimited</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-600 mb-3">🍨 Popular Desserts</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Fruit parfait - ¥449</li>
                      <li>• Chocolate Volcano - ¥399</li>
                      <li>• Pancake Tower - ¥599</li>
                      <li>• Ice Cream Sundae - ¥349</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Technological Experience */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="w-5 h-5 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Technological Innovation</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">🤖 Robot Waiters "Bellabot"</h3>
                  <p className="text-blue-700 text-sm mb-3">
                    Gusto has been deploying autonomous robots for dish delivery since 2020
                  </p>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• Autonomous navigation between tables</li>
                    <li>• Voice recognition for customer interaction</li>
                    <li>• Capacity to carry 4 trays simultaneously</li>
                    <li>• 30% reduction in waiting times</li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">📱 Digital Ordering</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Touchscreen tablets at each table</li>
                      <li>• Interactive menu with detailed photos</li>
                      <li>• Real-time dish customization</li>
                      <li>• Direct payment at table</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🏭 Automated Kitchen</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Automatic frying system</li>
                      <li>• Programmable grills</li>
                      <li>• AI temperature control</li>
                      <li>• Full ingredient traceability</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Usage Guide */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="w-5 h-5 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">How to Best Use Gusto</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 mb-2">💡 Optimization Strategies</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="font-medium text-yellow-700 mb-2">🍽️ For Families</div>
                      <ul className="text-yellow-600 text-sm space-y-1">
                        <li>• Order dishes to share</li>
                        <li>• Salad bar for picky eaters</li>
                        <li>• Combo sets to save money</li>
                        <li>• Happy hour 2 PM - 5 PM (reduced prices)</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-medium text-yellow-700 mb-2">📚 For Studying/Working</div>
                      <ul className="text-yellow-600 text-sm space-y-1">
                        <li>• Drink bar + small dish = perfect base</li>
                        <li>• Free WiFi in all restaurants</li>
                        <li>• Power outlets available</li>
                        <li>• Quiet atmosphere during the day</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">⏰ Best Times</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li><strong>Breakfast:</strong> 7 AM - 9 AM (quiet, fast service)</li>
                      <li><strong>Lunch:</strong> 11:30 AM - 2 PM (many sets)</li>
                      <li><strong>Study:</strong> 2 PM - 6 PM (quiet, drink bar)</li>
                      <li><strong>Family Dinner:</strong> 6 PM - 9 PM (lively atmosphere)</li>
                      <li><strong>Late night:</strong> 10 PM - 2 AM (special menu)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">💰 Possible Savings</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li><strong>Happy Hour:</strong> -30% on certain dishes</li>
                      <li><strong>Combo sets:</strong> -20% vs separate dishes</li>
                      <li><strong>Mobile App:</strong> Exclusive coupons</li>
                      <li><strong>Loyalty card:</strong> Points = free meals</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Phenomenon */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Users className="w-5 h-5 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Gusto as a Social Phenomenon</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-green-600 mb-3">👨‍👩‍👧‍👦 Family Gathering Place</h3>
                  <ul className="text-sm space-y-2">
                    <li><strong>Weekends:</strong> Essential family brunch</li>
                    <li><strong>Birthdays:</strong> Desserts and relaxed atmosphere</li>
                    <li><strong>Generations:</strong> Menu for all ages</li>
                    <li><strong>Budgets:</strong> Accessible even to large families</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-green-600 mb-3">🎓 Youth Space</h3>
                  <ul className="text-sm space-y-2">
                    <li><strong>Students:</strong> Study desk with WiFi and outlets</li>
                    <li><strong>Teenagers:</strong> Social meeting point</li>
                    <li><strong>Salarymen:</strong> Decompression break after work</li>
                    <li><strong>24/7:</strong> Night refuge for insomniacs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Essential Information */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Essential Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Hours</div>
                    <div className="text-sm text-gray-600">24/7 (most restaurants)</div>
                    <div className="text-sm text-gray-500">Some 6 AM - 2 AM</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-sm text-gray-600">1,300+ restaurants</div>
                    <div className="text-sm text-gray-500">Throughout Japan</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CreditCard className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Payment</div>
                    <div className="text-sm text-gray-600">All cards accepted</div>
                    <div className="text-sm text-gray-500">Mobile payment OK</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Average price</div>
                    <div className="text-sm text-gray-600">¥700-1,200 per person</div>
                    <div className="text-sm text-gray-500">Excellent value for money</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Practical Tips */}
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-4">
                💡 Practical Tips
              </h3>
              
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-green-700">First visit?</div>
                  <div className="text-green-600">Cheese In Hamburg + Salad bar = perfect combo</div>
                </div>
                
                <div>
                  <div className="font-medium text-green-700">With children?</div>
                  <div className="text-green-600">Kids menu ¥399, high chairs available</div>
                </div>
                
                <div>
                  <div className="font-medium text-green-700">On a budget?</div>
                  <div className="text-green-600">Happy Hour 2 PM - 5 PM, morning sets ¥399</div>
                </div>
                
                <div>
                  <div className="font-medium text-green-700">Long stay?</div>
                  <div className="text-green-600">Drink bar + WiFi = perfect temporary office</div>
                </div>
              </div>
            </div>

            {/* Mobile Application */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">
                📱 Gusto Mobile App
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-blue-700">Features</div>
                  <div className="text-blue-600">• Restaurant location<br/>• Discount coupons<br/>• Pre-order possible<br/>• Loyalty program</div>
                </div>
                <div>
                  <div className="font-medium text-blue-700">Exclusive Benefits</div>
                  <div className="text-blue-600">• Member-exclusive offers<br/>• Double loyalty points<br/>• Early access to new items</div>
                </div>
              </div>
            </div>

            {/* Comparison */}
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">
                📊 Vs other famiresu
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-orange-700">Vs Jonathan's</div>
                  <div className="text-orange-600">More popular, more technology, same group</div>
                </div>
                <div>
                  <div className="font-medium text-orange-700">Vs Saizeriya</div>
                  <div className="text-orange-600">More expensive but much more varied</div>
                </div>
                <div>
                  <div className="font-medium text-orange-700">Gusto Advantages</div>
                  <div className="text-orange-600">Innovation, consistent quality, national network</div>
                </div>
              </div>
            </div>

            {/* Cultural Note */}
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">
                🏮 Cultural Impact
              </h3>
              <p className="text-sm text-purple-700">
                Gusto has profoundly transformed Japanese eating habits by democratizing 
                Western cuisine and creating a "third place" between home and office. 
                It has become a central element of Japanese popular culture, a symbol of 
                accessibility and modernity.
              </p>
            </div>

            {/* Useful Links */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
              <div className="space-y-2">
                <a href="https://www.skylark.co.jp/gusto/" 
                   className="block text-green-600 hover:text-green-700 text-sm">
                  → Official Gusto Site
                </a>
                <a href="/type-plat/family-restaurants" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Family Restaurants Guide
                </a>
                <a href="/chaines/saizeriya" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Compare with Saizeriya
                </a>
                <a href="/chaines/jonathans" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Discover Jonathan's
                </a>              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
