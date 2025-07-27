import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Heart, Wine, Music, Leaf } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Watami ワタミ | Responsible Izakaya | Japonchaines',
  description: 'Organic farm-to-table izakaya. Varied menu, family atmosphere, quality commitment.',
  keywords: [
    'watami', 'ワタミ', 'izakaya', 'japanese restaurant',
    'varied menu', 'friendly atmosphere', 'reasonable prices',
    'traditional dishes', 'japanese drinks', 'popular chain'
  ],
  openGraph: {
    title: 'Watami: The Responsible Izakaya | Japonchaines',
    description: 'Discover Watami, the izakaya with its own organic farms. Varied menu, family atmosphere and quality commitment.',
    type: 'article',
    locale: "en_US",
    siteName: "Japonchaines - Japanese Restaurant Guide"
  },
  alternates: {
    canonical: '/chains/watami',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function WatamiPage() {
  return (
    <>
      <ChainViewTracker chainName="watami" chainCategory="izakaya" />
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
            <div className="w-16 h-16 bg-green-700 rounded-lg flex items-center justify-center">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Watami</h1>
              <p className="text-lg text-gray-600">和民</p>
              <p className="text-sm text-gray-500">The responsible family izakaya since 1984</p>
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
                <Info className="w-5 h-5 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
              </div>
              
              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-gray-700 mb-4">
                  <strong>Watami</strong> (和民, "People in Harmony") is one of Japan's largest 
                  izakaya chains with over 400 restaurants. Founded in 1984, 
                  Watami distinguishes itself through its family-friendly and responsible approach, 
                  offering accessible cuisine in a welcoming environment for all ages. 
                  The chain is a pioneer in organic agriculture and corporate social 
                  responsibility in Japan.
                </p>
                
                <div className="bg-green-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-green-800 mb-2">🌱 Responsible philosophy</h3>
                  <ul className="text-green-700 space-y-1">
                    <li>• <strong>Organic agriculture</strong> - Watami farms for fresh vegetables</li>
                    <li>• <strong>Complete traceability</strong> - Controlled production circuit</li>
                    <li>• <strong>Family first</strong> - Welcoming atmosphere for everyone</li>
                    <li>• <strong>Accessible prices</strong> - Democratization of izakaya</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold mb-3">🚜 Unique agricultural integration</h3>
                <p className="mb-4">
                  Watami owns its own organic farms that directly supply its restaurants 
                  with fresh vegetables. This vertical integration guarantees quality 
                  and freshness of products while controlling costs. The company employs 
                  over 60 dedicated farmers in its farms spread across Japan.
                </p>

                <h3 className="text-xl font-semibold mb-3">👨‍👩‍👧‍👦 Family positioning</h3>
                <p className="mb-4">
                  Unlike traditional izakaya often reserved for adults, Watami explicitly 
                  welcomes families with children. The restaurants offer children's menus, 
                  high chairs, and an atmosphere less focused on alcohol, while maintaining 
                  the friendly spirit of izakaya.
                </p>

                <h3 className="text-xl font-semibold mb-3">🌍 International expansion</h3>
                <p className="mb-4">
                  Watami has successfully expanded to Asia (Korea, Taiwan, Hong Kong) and 
                  is testing the American market. Each implementation adapts the concept 
                  to local tastes while keeping the fundamental values of quality and 
                  accessibility that make the brand successful.
                </p>

                <h3 className="text-xl font-semibold mb-3">📊 Digital innovation</h3>
                <p className="mb-4">
                  Watami invests heavily in technology with ordering applications, 
                  smart reservation systems, and even service robots in some restaurants. 
                  This modernization aims to improve efficiency while maintaining 
                  human contact.
                </p>
              </div>
            </div>

            {/* Detailed menu */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Utensils className="w-5 h-5 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Family & Responsible Menu</h2>
              </div>

              {/* Watami farm vegetables */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🥬 Watami Farm Vegetables</h3>
                <div className="bg-green-50 p-4 rounded-lg mb-4">
                  <p className="text-green-800 text-sm">
                    <strong>Own production:</strong> Vegetables grown on Watami organic farms, 
                    harvested at maturity and delivered directly to restaurants.
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 font-medium">English Name</th>
                        <th className="text-left p-3 font-medium">日本語</th>
                        <th className="text-left p-3 font-medium">Description</th>
                        <th className="text-left p-3 font-medium">Price</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-3 font-medium">Farmer's Salad</td>
                        <td className="p-3">農園サラダ</td>
                        <td className="p-3">Seasonal vegetables from Watami farms</td>
                        <td className="p-3">¥580</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Grilled Vegetables</td>
                        <td className="p-3">焼き野菜</td>
                        <td className="p-3">Charcoal-grilled selection</td>
                        <td className="p-3">¥680</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Vegetable Soup</td>
                        <td className="p-3">野菜スープ</td>
                        <td className="p-3">Homemade soup with farm vegetables</td>
                        <td className="p-3">¥420</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Vegetable Tempura</td>
                        <td className="p-3">野菜天ぷら</td>
                        <td className="p-3">Light batter, crispy vegetables</td>
                        <td className="p-3">¥720</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Family dishes */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">👨‍👩‍👧‍👦 Family Dishes</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 font-medium">English Name</th>
                        <th className="text-left p-3 font-medium">日本語</th>
                        <th className="text-left p-3 font-medium">Description</th>
                        <th className="text-left p-3 font-medium">Price</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-3 font-medium">Family Karaage</td>
                        <td className="p-3">ファミリーからあげ</td>
                        <td className="p-3">Large portion, perfect for sharing</td>
                        <td className="p-3">¥880</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Gyoza Plate</td>
                        <td className="p-3">餃子プレート</td>
                        <td className="p-3">12 pieces, thin homemade wrapper</td>
                        <td className="p-3">¥650</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Japanese Pizza</td>
                        <td className="p-3">和風ピザ</td>
                        <td className="p-3">Creative fusion, mayonnaise and seaweed</td>
                        <td className="p-3">¥780</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Watami Fried Rice</td>
                        <td className="p-3">和民チャーハン</td>
                        <td className="p-3">Stir-fried rice with farm vegetables</td>
                        <td className="p-3">¥620</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Potato Gratin</td>
                        <td className="p-3">ポテトグラタン</td>
                        <td className="p-3">Japanized comfort food, local cheese</td>
                        <td className="p-3">¥580</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Izakaya specialties */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🍢 Izakaya Specialties</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 font-medium">English Name</th>
                        <th className="text-left p-3 font-medium">日本語</th>
                        <th className="text-left p-3 font-medium">Description</th>
                        <th className="text-left p-3 font-medium">Price</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-3 font-medium">Yakitori Assortment</td>
                        <td className="p-3">焼鳥盛合せ</td>
                        <td className="p-3">5 varied skewers, tare sauce</td>
                        <td className="p-3">¥980</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Daily Sashimi</td>
                        <td className="p-3">本日の刺身</td>
                        <td className="p-3">Fresh selection according to market</td>
                        <td className="p-3">¥880</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Agedashi Tofu</td>
                        <td className="p-3">揚げ出し豆腐</td>
                        <td className="p-3">Fried tofu, delicate dashi broth</td>
                        <td className="p-3">¥480</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Watami Takoyaki</td>
                        <td className="p-3">和民たこ焼き</td>
                        <td className="p-3">8 pieces, original recipe</td>
                        <td className="p-3">¥520</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Shrimp Tempura</td>
                        <td className="p-3">海老天ぷら</td>
                        <td className="p-3">Large shrimp, light batter</td>
                        <td className="p-3">¥780</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Children's menu */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🧒 Children's Menu</h3>
                <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                  <p className="text-yellow-800 text-sm">
                    <strong>Specially designed:</strong> Adapted portions and mild flavors 
                    to introduce children to Japanese cuisine.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-green-600 mb-3">Main dishes</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Mini karaage</strong> - Fried chicken without spice (¥380)</li>
                      <li>• <strong>Child omurice</strong> - Egg rice, mild sauce (¥450)</li>
                      <li>• <strong>Mini hamburger</strong> - Japanese version (¥420)</li>
                      <li>• <strong>Simple udon</strong> - Light broth, soft noodles (¥350)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-600 mb-3">Sides & desserts</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Sweet potato fries</strong> - Naturally sweet (¥280)</li>
                      <li>• <strong>Edamame</strong> - Introduction to Japanese vegetables (¥220)</li>
                      <li>• <strong>Vanilla ice cream</strong> - Simple and appreciated dessert (¥250)</li>
                      <li>• <strong>Fruit juice</strong> - 100% natural (¥200)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Beverages */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">🍺 Drinks & Sake</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-medium text-green-600 mb-3">Beer & Alcohol</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Draft beer</strong> - ¥420 (M), ¥620 (L)</li>
                      <li>• <strong>House chu-hi</strong> - Fresh fruits - ¥480</li>
                      <li>• <strong>Quality sake</strong> - Careful selection - ¥520</li>
                      <li>• <strong>Whisky highball</strong> - Izakaya classic - ¥450</li>
                      <li>• <strong>Farm wine</strong> - Watami production - ¥580</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-600 mb-3">Family beverages</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>House iced tea</strong> - ¥280</li>
                      <li>• <strong>Vegetable juice</strong> - Watami farms - ¥350</li>
                      <li>• <strong>Fresh lemonade</strong> - ¥320</li>
                      <li>• <strong>Iced/hot coffee</strong> - ¥300</li>
                      <li>• <strong>Mineral water</strong> - ¥200</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-600 mb-3">Watami specialties</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Vegetable-fruit smoothie</strong> - ¥420</li>
                      <li>• <strong>Premium green tea</strong> - ¥350</li>
                      <li>• <strong>Non-alcoholic cocktail</strong> - ¥380</li>
                      <li>• <strong>Soy milk</strong> - Organic production - ¥250</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Social responsibility */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="w-5 h-5 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Responsible Commitment</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">🌱 Organic agriculture</h3>
                  <p className="text-green-700 text-sm mb-3">
                    Watami owns and directly operates several certified organic farms 
                    in Japan, guaranteeing complete traceability of its vegetables.
                  </p>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• <strong>Zero pesticides</strong> - 100% natural cultivation</li>
                    <li>• <strong>Short circuit</strong> - From farm to restaurant in 24h</li>
                    <li>• <strong>Seasonality</strong> - Menus adapted to harvests</li>
                    <li>• <strong>Local employment</strong> - 60+ farmers employed</li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">♻️ Sustainable development</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Food waste reduction</li>
                      <li>• Biodegradable packaging</li>
                      <li>• Energy savings in restaurants</li>
                      <li>• Optimized farm-restaurant transport</li>
                      <li>• Cooking oil recycling</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">👥 Social responsibility</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Young farmer training</li>
                      <li>• Local producer support</li>
                      <li>• Senior employment on farms</li>
                      <li>• Educational programs for children</li>
                      <li>• Agricultural school partnerships</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">🏆 Certifications & awards</h4>
                  <p className="text-sm text-blue-700">
                    Watami has received numerous distinctions for its environmental 
                    and social commitment, including Japanese organic certifications 
                    and awards for sustainable innovation in catering.
                  </p>
                </div>
              </div>
            </div>

            {/* Practical guide */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Users className="w-5 h-5 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Family Practical Guide</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-2">👨‍👩‍👧‍👦 With children</h3>
                  <ol className="text-purple-700 text-sm space-y-1">
                    <li><strong>1.</strong> Reservation advised, specify "family with children"</li>
                    <li><strong>2.</strong> Request regular table (more practical than counter)</li>
                    <li><strong>3.</strong> Children's menu available with illustrations</li>
                    <li><strong>4.</strong> High chairs and children's utensils provided</li>
                    <li><strong>5.</strong> Tolerant atmosphere, children welcome</li>
                  </ol>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🎯 Family discovery menu</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Farmer's salad</strong> - Organic vegetables (¥580)</li>
                      <li>• <strong>Family karaage</strong> - To share (¥880)</li>
                      <li>• <strong>Mini hamburger</strong> - For child (¥420)</li>
                      <li>• <strong>Yakitori assortment</strong> - Discovery (¥980)</li>
                      <li>• <strong>Various drinks</strong> - With/without alcohol (¥200-600)</li>
                      <li><strong>Total: ¥3,060-3,460</strong> for family of 4</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🌱 Organic and local focus</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Grilled vegetables</strong> - From Watami farms (¥680)</li>
                      <li>• <strong>Vegetable-fruit smoothie</strong> - Organic (¥420)</li>
                      <li>• <strong>Vegetable tempura</strong> - Guaranteed freshness (¥720)</li>
                      <li>• <strong>Vegetable juice</strong> - Own production (¥350)</li>
                      <li>• <strong>Agedashi tofu</strong> - Organic soy (¥480)</li>
                      <li><strong>Total: ¥2,650</strong> for organic experience</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-medium text-orange-800 mb-2">💡 Practical tips</h4>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>• <strong>Family hours</strong> - Prefer 5-7 PM to avoid crowds</li>
                    <li>• <strong>Reservation</strong> - Watami mobile app very practical</li>
                    <li>• <strong>Payment</strong> - All cards accepted, very family-friendly</li>
                    <li>• <strong>Allergies</strong> - Trained staff, traced organic ingredients</li>
                    <li>• <strong>Duration</strong> - Allow 1.5-2 hours for a relaxed meal</li>
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
                  <Clock className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Hours</div>
                    <div className="text-sm text-gray-600">5:00 PM - 11:30 PM (Sun-Thu)</div>
                    <div className="text-sm text-gray-600">5:00 PM - 1:00 AM (Fri-Sat)</div>
                    <div className="text-sm text-gray-500">Some open at noon</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-sm text-gray-600">400+ restaurants in Japan</div>
                    <div className="text-sm text-gray-500">Shopping centers, family neighborhoods</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CreditCard className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Payment</div>
                    <div className="text-sm text-gray-600">All cards, e-wallets</div>
                    <div className="text-sm text-gray-500">Mobile app with ordering</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Heart className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Family budget</div>
                    <div className="text-sm text-gray-600">¥2,500-4,500 per person</div>
                    <div className="text-sm text-gray-500">Children's menu ¥800-1,200</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tips for visitors */}
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-4">
                💡 Tips for Families
              </h3>
              
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-green-700">With children</div>
                  <div className="text-green-600">Most family-friendly environment among izakaya</div>
                </div>
                
                <div>
                  <div className="font-medium text-green-700">Organic quality</div>
                  <div className="text-green-600">Fresh vegetables from Watami farms, guaranteed traceability</div>
                </div>
                
                <div>
                  <div className="font-medium text-green-700">Useful app</div>
                  <div className="text-green-600">Simplified reservation and ordering via app</div>
                </div>
                
                <div>
                  <div className="font-medium text-green-700">Culinary education</div>
                  <div className="text-green-600">Perfect for introducing children to Japanese cuisine</div>
                </div>
              </div>
            </div>

            {/* Must-try specialties */}
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                🏆 Must-Try Specialties
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-yellow-700">Farmer's salad</div>
                  <div className="text-yellow-600">Organic vegetables from Watami farms, optimal freshness</div>
                </div>
                <div>
                  <div className="font-medium text-yellow-700">Family karaage</div>
                  <div className="text-yellow-600">Large portion perfect for family sharing</div>
                </div>
                <div>
                  <div className="font-medium text-yellow-700">Children's menu</div>
                  <div className="text-yellow-600">Gentle introduction to Japanese cuisine</div>
                </div>
                <div>
                  <div className="font-medium text-yellow-700">Vegetable-fruit smoothie</div>
                  <div className="text-yellow-600">Watami innovation, organic and delicious</div>
                </div>
              </div>
            </div>

            {/* Cultural note */}
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">
                🏮 Cultural Note
              </h3>
              <p className="text-sm text-purple-700">
                Watami revolutionized the izakaya concept in Japan by adapting it to 
                modern families. This approach reflects the evolution of Japanese society 
                towards more family inclusion in restaurant outings, while maintaining 
                environmental commitment that becomes a growing priority for Japanese consumers.
              </p>
            </div>

            {/* Useful links */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
              <div className="space-y-2">
                <a href="https://www.watami.co.jp/" 
                   className="block text-green-600 hover:text-green-700 text-sm">
                  → Official Watami website
                </a>
                <a href="/dish-types/izakaya" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Complete izakaya guide
                </a>
                <a href="/chains/torikizoku" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Compare with Torikizoku
                </a>
                <a href="/chains/shirokiya" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Compare with Shirokiya
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
