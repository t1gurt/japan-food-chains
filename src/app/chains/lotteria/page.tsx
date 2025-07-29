import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Heart, Crown, Coffee, Zap, Candy } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Lotteria ロッテリア | Creative Burgers | Japan Food Chains",
  description: "Unique creations. From Ebi Burger to Tower Burger, flavors you won't find anywhere else.",
  keywords: [
    'lotteria', 'ロッテリア', 'japanese burgers', 'unique menu',
    'local flavors', 'japanese style', 'asian influences',
    'original burgers', 'japanese fast food', 'culinary creativity'
  ],
  openGraph: {
    title: "Lotteria ロッテリア | Creative Burgers | Japan Food Chains",
    description: "Unique creations. From Ebi Burger to Tower Burger, flavors you won't find anywhere else.",
    type: 'article',
    locale: "en_US",
    siteName: "Japan Food Chains - Japanese Restaurant Guide"
  },
  alternates: {
    canonical: '/chains/lotteria',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  },
};

export default function LotteriaPage() {
  return (
    <>
      <ChainViewTracker chainName="lotteria" chainCategory="burgers" />
      <div className="min-h-screen bg-gray-50">
        {/* Header with back button */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link 
              href="/dish-types/burgers" 
              className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Japanese Burgers
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl font-bold">L</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Lotteria</h1>
                <p className="text-lg text-gray-600">ロッテリア</p>
                <p className="text-sm text-gray-500">Japanese burgers with unique flavors since 1972</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Presentation */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Info className="w-5 h-5 text-red-600" />
                  <h2 className="text-2xl font-bold text-gray-900">About Lotteria</h2>
                </div>
                
                <div className="prose prose-gray max-w-none">
                  <p className="text-lg text-gray-700 mb-4">
                    <strong>Lotteria</strong> is a unique fast-food chain owned by confectionery giant 
                    Lotte. Founded in 1972, it's Japan's oldest burger chain and stands out with its 
                    bold creations blending Korean, Japanese and Western influences. Lotteria is famous 
                    for its extravagant burgers and flavors impossible to find elsewhere.
                  </p>
                  
                  <div className="bg-red-50 p-4 rounded-lg mb-6">
                    <h3 className="font-semibold text-red-800 mb-2">🎨 Culinary Innovation</h3>
                    <ul className="text-red-700 space-y-1">
                      <li>• <strong>Fusion burgers</strong> - Creative blends of Asian and Western flavors</li>
                      <li>• <strong>Limited editions</strong> - New burgers every month</li>
                      <li>• <strong>Korean influences</strong> - Connection to Lotte's Korean origins</li>
                      <li>• <strong>Unique desserts</strong> - Integration of Lotte confectionery into the menu</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold mb-3">🏢 Lotte Group</h3>
                  <p className="mb-4">
                    Owned by the Lotte conglomerate (confectionery, department stores, hotels), 
                    Lotteria benefits from considerable financial power allowing it to experiment 
                    without immediate profitability constraints. This creative freedom explains 
                    its sometimes surprising but always innovative creations.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">🌏 Asian Expansion</h3>
                  <p className="mb-4">
                    With restaurants in Japan, South Korea, China and several Southeast Asian 
                    countries, Lotteria adapts its menus to local tastes while keeping its 
                    creative DNA. In Japan, about 270 restaurants are mainly located in 
                    urban centers and shopping malls.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">🎯 Youth Positioning</h3>
                  <p className="mb-4">
                    Lotteria particularly targets young urbanites (15-25 years) with 
                    Instagram-friendly burgers, collaborations with popular anime, 
                    and quirky marketing campaigns. The chain fully embraces its 
                    "fun food" and non-conformist side.
                  </p>
                </div>
              </div>

              {/* Detailed menu */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <Utensils className="w-5 h-5 text-red-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Creative Menu</h2>
                </div>

                {/* Permanent signature burgers */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">🍔 Signature Burgers (permanent)</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="text-left p-3 font-medium">English name</th>
                          <th className="text-left p-3 font-medium">日本語</th>
                          <th className="text-left p-3 font-medium">Description</th>
                          <th className="text-left p-3 font-medium">Price</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="p-3 font-medium">Classic Burger</td>
                          <td className="p-3">クラシックバーガー</td>
                          <td className="p-3">Lotteria's basic burger, balanced flavor</td>
                          <td className="p-3">¥390</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Teriyaki Burger</td>
                          <td className="p-3">テリヤキバーガー</td>
                          <td className="p-3">Homemade teriyaki sauce, typically Japanese taste</td>
                          <td className="p-3">¥450</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Bulgogi Burger</td>
                          <td className="p-3">プルコギバーガー</td>
                          <td className="p-3">Korean influence, authentic bulgogi marinade</td>
                          <td className="p-3">¥520</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Fried Chicken Burger</td>
                          <td className="p-3">フライドチキンバーガー</td>
                          <td className="p-3">Crispy fried chicken, optional spicy sauce</td>
                          <td className="p-3">¥480</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Fish Burger</td>
                          <td className="p-3">フィッシュバーガー</td>
                          <td className="p-3">Breaded fish, Japanese tartar sauce</td>
                          <td className="p-3">¥420</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Extraordinary limited edition burgers */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">🌟 Extraordinary Creations (limited editions)</h3>
                  <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                    <p className="text-yellow-800 text-sm">
                      <strong>Note:</strong> These iconic burgers return periodically or inspire new creations
                    </p>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="text-left p-3 font-medium">English name</th>
                          <th className="text-left p-3 font-medium">日本語</th>
                          <th className="text-left p-3 font-medium">Description</th>
                          <th className="text-left p-3 font-medium">Typical price</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="p-3 font-medium">Tower Burger</td>
                          <td className="p-3">タワーバーガー</td>
                          <td className="p-3">Giant 7-layer burger, viral culinary challenge</td>
                          <td className="p-3">¥1,200</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Ramen Burger</td>
                          <td className="p-3">ラーメンバーガー</td>
                          <td className="p-3">Bun replaced with fried ramen noodles</td>
                          <td className="p-3">¥680</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Kimchi Burger</td>
                          <td className="p-3">キムチバーガー</td>
                          <td className="p-3">Fermented kimchi, authentic Korean taste</td>
                          <td className="p-3">¥580</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Mochi Burger</td>
                          <td className="p-3">モチバーガー</td>
                          <td className="p-3">Mochi bun, unique and innovative texture</td>
                          <td className="p-3">¥650</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Chocolate Burger</td>
                          <td className="p-3">チョコレートバーガー</td>
                          <td className="p-3">Dessert-burger, surprising sweet innovation</td>
                          <td className="p-3">¥450</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Sides and desserts */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4">🍟 Sides & Lotte Desserts</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-red-600 mb-3">Sides</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>Classic fries</strong> - ¥250 (crispy, generous portion)</li>
                        <li>• <strong>Sweet potato fries</strong> - ¥320 (Korean specialty)</li>
                        <li>• <strong>Chicken nuggets</strong> - ¥380 (special sauce included)</li>
                        <li>• <strong>Onion rings</strong> - ¥330 (light batter, very crispy)</li>
                        <li>• <strong>Corn dogs</strong> - ¥290 (Korean street-food influence)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-red-600 mb-3">Lotte Desserts</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>Koala no March Shake</strong> - ¥420 (Milkshake with iconic cookies)</li>
                        <li>• <strong>Choco Pie Ice</strong> - ¥380 (Ice cream version of Choco Pie)</li>
                        <li>• <strong>Toppo Sundae</strong> - ¥350 (Sundae with Toppo cookies)</li>
                        <li>• <strong>Ghana Chocolate Cake</strong> - ¥450 (Ghana chocolate cake)</li>
                        <li>• <strong>Seasonal Parfait</strong> - ¥520 (Parfait with current Lotte products)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Innovation and creativity */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Zap className="w-5 h-5 text-red-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Innovation & Creativity</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-pink-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-pink-800 mb-2">🎪 Surprising collaborations</h3>
                    <p className="text-pink-700 text-sm mb-3">
                      Lotteria regularly collaborates with anime, idols, and brands to 
                      create themed burgers unique in the world.
                    </p>
                    <ul className="text-pink-700 text-sm space-y-1">
                      <li>• <strong>Anime collaborations</strong> - Burgers in the colors of popular characters</li>
                      <li>• <strong>Seasonal editions</strong> - Sakura Burger in spring, Halloween specials</li>
                      <li>• <strong>Viral challenges</strong> - Giant burgers for social media</li>
                      <li>• <strong>Impossible flavors</strong> - Combinations only Lotteria dares to try</li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">🧪 Culinary laboratory</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Test new flavors every month</li>
                        <li>• Customer feedback integrated into development</li>
                        <li>• Research on food trends</li>
                        <li>• Adaptation of Asian tastes to burgers</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">📱 Digital marketing</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• "Instagrammable" burgers by design</li>
                        <li>• TikTok and YouTube challenges</li>
                        <li>• Mobile app with exclusive games</li>
                        <li>• Augmented reality for promotions</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ordering guide */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Users className="w-5 h-5 text-red-600" />
                  <h2 className="text-2xl font-bold text-gray-900">How to Order</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">🎯 Traditional ordering</h3>
                    <p className="text-blue-700 text-sm mb-3">
                      Classic counter service with very detailed visual menus to overcome 
                      the language barrier.
                    </p>
                    <ol className="text-blue-700 text-sm space-y-1">
                      <li><strong>1.</strong> Check the menu screens above the counter</li>
                      <li><strong>2.</strong> Point to the image of the desired burger</li>
                      <li><strong>3.</strong> Indicate if you want a set menu</li>
                      <li><strong>4.</strong> Choose drink and side dish</li>
                      <li><strong>5.</strong> Pay and wait for your number</li>
                    </ol>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">💝 Value sets</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• <strong>Value Set</strong> - Burger + fries + drink (+¥200)</li>
                        <li>• <strong>Deluxe Set</strong> - Burger + 2 sides + drink (+¥350)</li>
                        <li>• <strong>Dessert Set</strong> - Burger + Lotte dessert + drink (+¥280)</li>
                        <li>• <strong>Challenge Set</strong> - XXL burger + L fries + L drink (+¥450)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">🎮 Mobile app</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Pre-order and payment</li>
                        <li>• Games with loyalty points</li>
                        <li>• New burger notifications</li>
                        <li>• Exclusive discount coupons</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium text-red-800 mb-2">🌶️ Taste management</h4>
                    <p className="text-sm text-red-700">
                      Don't hesitate to ask for "less spicy" or "no kimchi" if you're 
                      not used to Korean flavors. Staff are used to requests from 
                      foreign tourists.
                    </p>
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
                    <Clock className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <div className="font-medium">Hours</div>
                      <div className="text-sm text-gray-600">10:00 AM - 10:00 PM (shopping centers)</div>
                      <div className="text-sm text-gray-500">Varies by location</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <div className="font-medium">Location</div>
                      <div className="text-sm text-gray-600">270+ restaurants in Japan</div>
                      <div className="text-sm text-gray-500">Shopping centers, stations</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CreditCard className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <div className="font-medium">Payment</div>
                      <div className="text-sm text-gray-600">All cards, e-wallets</div>
                      <div className="text-sm text-gray-500">Mobile app available</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Candy className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <div className="font-medium">Average price</div>
                      <div className="text-sm text-gray-600">¥600-900 per person</div>
                      <div className="text-sm text-gray-500">Competitive with innovations</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tips for visitors */}
              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-800 mb-4">
                  💡 Tips for Visitors
                </h3>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-medium text-red-700">First experience</div>
                    <div className="text-red-600">Start with Teriyaki Burger for a familiar taste</div>
                  </div>
                  
                  <div>
                    <div className="font-medium text-red-700">Korean flavors</div>
                    <div className="text-red-600">Try Bulgogi Burger to discover Korean influence</div>
                  </div>
                  
                  <div>
                    <div className="font-medium text-red-700">Limited editions</div>
                    <div className="text-red-600">Ask about current month's creations</div>
                  </div>
                  
                  <div>
                    <div className="font-medium text-red-700">Instagram</div>
                    <div className="text-red-600">Perfect for unique Japanese food photos</div>
                  </div>
                </div>
              </div>

              {/* Integrated Lotte products */}
              <div className="bg-yellow-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                  🍭 Lotte Universe
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-medium text-yellow-700">Famous confectionery</div>
                    <div className="text-yellow-600">Koala no March, Toppo, Ghana Chocolate integrated into menu</div>
                  </div>
                  <div>
                    <div className="font-medium text-yellow-700">Exclusives</div>
                    <div className="text-yellow-600">Desserts impossible to find elsewhere than at Lotte stores</div>
                  </div>
                  <div>
                    <div className="font-medium text-yellow-700">Souvenirs</div>
                    <div className="text-yellow-600">Lotte goods and products available in store</div>
                  </div>
                </div>
              </div>

              {/* The Ebi Burger Innovation - World Revolution */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-lg shadow-sm p-6 mb-6 border border-orange-200">
                <div className="flex items-center mb-4">
                  <Award className="w-6 h-6 text-orange-600 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900">The Ebi Burger: A World Revolution (1977)</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">🌍 World's First Shrimp Burger</h4>
                    <p className="text-gray-700 mb-4 text-sm">
                      In 1977, Lotteria revolutionized the global burger industry by creating the 
                      <strong> world's first Ebi (Shrimp) Burger</strong>. This innovation perfectly reflects 
                      Japan's island geography and its thousand-year maritime culture.
                    </p>
                    
                    <div className="bg-white p-4 rounded-lg border-l-4 border-orange-500 mb-4">
                      <h5 className="font-bold text-orange-700 mb-2 text-sm">🕐 McDonald's: 28 Years Behind!</h5>
                      <p className="text-xs text-gray-700">
                        It wasn't until <strong>2005</strong> that McDonald's finally offered 
                        a shrimp burger (Ebi Burger in Japan). Lotteria was therefore 28 years ahead 
                        of the American giant!
                      </p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">🍤 Technique & Philosophy</h4>
                    <div className="space-y-2">
                      <div className="bg-white p-3 rounded-lg">
                        <span className="font-semibold text-gray-900 text-sm">Adapted tempura: </span>
                        <span className="text-xs text-gray-600">Traditional technique for burger format</span>
                      </div>
                      <div className="bg-white p-3 rounded-lg">
                        <span className="font-semibold text-gray-900 text-sm">Marine freshness: </span>
                        <span className="text-xs text-gray-600">Shrimp selected daily</span>
                      </div>
                      <div className="bg-white p-3 rounded-lg">
                        <span className="font-semibold text-gray-900 text-sm">Secret sauce: </span>
                        <span className="text-xs text-gray-600">Unique Japanese tartar sauce</span>
                      </div>
                      <div className="bg-white p-3 rounded-lg">
                        <span className="font-semibold text-gray-900 text-sm">Continuous innovation: </span>
                        <span className="text-xs text-gray-600">45+ years of constant improvement</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 bg-red-50 p-4 rounded-lg border border-red-200">
                  <h5 className="font-bold text-red-800 mb-2 text-sm">🌍 Why Important for International Visitors?</h5>
                  <p className="text-xs text-gray-700">
                    This innovation perfectly illustrates the Japanese art of creative adaptation. 
                    Lotteria took a Western concept (the burger) and transformed it with 
                    typically Japanese ingredients (tempura shrimp), creating something 
                    entirely new that still inspires the world today.
                  </p>
                </div>
              </div>

              {/* Cultural note */}
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">
                  🏮 Cultural Note
                </h3>
                <p className="text-sm text-purple-700">
                  Lotteria perfectly illustrates the Japanese approach to innovation: taking 
                  a Western concept (the burger) and reinventing it with boldness and creativity. 
                  The chain also represents the growing influence of Korean culture in 
                  Japan, with its kimchi and bulgogi flavors that appeal to Japanese youth.
                </p>
              </div>

              {/* Useful links */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
                <div className="space-y-2">
                  <a href="https://www.lotteria.jp/" 
                     className="block text-red-600 hover:text-red-700 text-sm">
                    → Official Lotteria website
                  </a>
                  <a href="/dish-types/burgers" 
                     className="block text-orange-600 hover:text-orange-700 text-sm">
                    → Complete Japanese burgers guide
                  </a>
                  <a href="/chains/mos-burger" 
                     className="block text-orange-600 hover:text-orange-700 text-sm">
                    → Compare with MOS Burger
                  </a>
                  <a href="/chains/freshness-burger" 
                     className="block text-orange-600 hover:text-orange-700 text-sm">
                    → Compare with Freshness Burger
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



