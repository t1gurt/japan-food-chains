import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, Award, History, Zap } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Tenya てんや | Fast Tempura | Japonchaines",
  description: "Professional tempura art made fast and affordable. Light batter on rice, unbeatable prices.",
  keywords: [
    'tenya', 'てんや', 'tempura', 'fast tempura',
    'professional technique', 'affordable prices', 'seasonal ingredients',
    'affordable tempura', 'japanese frying', 'ebi tempura'
  ],
  openGraph: {
    title: "Tenya てんや | Fast Tempura | Japonchaines",
    description: "Professional tempura art made fast and affordable. Light batter on rice, unbeatable prices.",
    type: 'article',
    locale: "en_US",
    siteName: "Japonchaines - Japanese Restaurant Guide"
  },
  alternates: {
    canonical: '/chains/tenya',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  },
};

export default function TenyaPage() {
  return (
    <>
      <ChainViewTracker chainName="tenya" chainCategory="tempura" />
      <div className="min-h-screen bg-gray-50">
      {/* Header with back button */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/dish-types/tempura" 
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tempura/Tendon
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-amber-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">天</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Tenya</h1>
              <p className="text-lg text-gray-600">てんや | The Tempura Specialist</p>
              <p className="text-sm text-gray-500">Traditional tempura art accessible to all</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* General introduction */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Accessible Tempura Excellence</h2>
              <div className="prose prose-amber max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Tenya revolutionized the tempura world by making this <strong>traditionally 
                  high-end culinary art accessible to the general public</strong>. With 
                  <strong>over 200 restaurants</strong> mainly concentrated in the Tokyo region, 
                  this chain has managed to preserve the authenticity and quality of tempura 
                  while democratizing its prices.
                </p>
                <p className="text-gray-700">
                  What sets Tenya apart is its commitment to <strong>absolute freshness</strong>: 
                  tempura prepared to order, oil changed regularly, premium ingredients. The Tenya 
                  experience is discovering that true tempura can be both exceptional and affordable.
                </p>
              </div>
            </div>

            {/* History and tradition */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <History className="w-6 h-6 text-amber-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">The History of a Democratized Tradition</h2>
              </div>
              
              <div className="space-y-6">
                {/* Foundation */}
                <div className="border-l-4 border-amber-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">1989: Revolutionary Vision</h3>
                  <p className="text-gray-700">
                    Tenya founded by <strong>Tenya Corporation</strong> with a clear mission: 
                    make restaurant-quality tempura accessible to Japanese families. The first 
                    restaurant opens in Nihonbashi, Tokyo's historic heart.
                  </p>
                </div>

                {/* Model innovation */}
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">1990-2000: Concept Innovation</h3>
                  <p className="text-gray-700">
                    Development of the <strong>"premium fast-food tempura"</strong> format: 
                    fast service but no compromise on quality. Introduction of affordable tendon 
                    (tempura on rice) system, revolutionizing a traditional market.
                  </p>
                </div>

                {/* Expansion */}
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">2000-2015: Metropolitan Expansion</h3>
                  <p className="text-gray-700">
                    Rapid growth in Tokyo and Kansai regions. Tenya becomes 
                    <strong>the reference for accessible tempura</strong>, building loyalty among 
                    customers who discover that quality and affordability can coexist.
                  </p>
                </div>

                {/* Modernization */}
                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">2015+: Modernization and Expansion</h3>
                  <p className="text-gray-700">
                    Restaurant modernization, introduction of new formats (takeaway, delivery), 
                    while <strong>maintaining the artisanal tradition</strong> that makes Tenya's 
                    reputation. Progressive expansion to other regions.
                  </p>
                </div>
              </div>
            </div>

            {/* The art of tempura at Tenya */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Zap className="w-6 h-6 text-amber-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">The Art of Perfected Tempura</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Perfect Tempura Batter</h3>
                    <p className="text-gray-700 text-sm">
                      <strong>Optimized secret recipe</strong>: special flour, ice water, 
                      minimal mixing technique to achieve ideal texture - crispy outside, 
                      light and airy inside.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Superior Quality Oil</h3>
                    <p className="text-gray-700 text-sm">
                      <strong>Premium oil changed regularly</strong>: precisely controlled 
                      temperature (180°C), continuous filtration, frequent replacement to 
                      maintain taste purity.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Premium Ingredients</h3>
                    <p className="text-gray-700 text-sm">
                      <strong>Rigorous selection</strong>: fresh shrimp, seasonal vegetables, 
                      superior quality fish. Same quality standard as high-end traditional 
                      restaurants.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-amber-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Perfect Timing</h3>
                    <p className="text-gray-700 text-sm">
                      <strong>Cooked to order</strong>: each tempura is fried when ordered, 
                      served immediately to preserve ideal crispness and heat.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Detailed menu */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Tenya Menu</h2>
              
              {/* Popular tendon */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-amber-100 text-amber-800 px-2 py-1 rounded text-sm mr-3">Signature</span>
                  Tendon (Tempura on Rice)
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Tendon</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Contents</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Price</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Tenya Tendon</div>
                          <div className="text-sm text-gray-500">てんや天丼</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">2 shrimp, squid, assorted vegetables, tendon sauce</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">¥590</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Ebi Tendon</div>
                          <div className="text-sm text-gray-500">海老天丼</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">4 large shrimp tempura, vegetables, special sauce</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">¥790</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">All Star Tendon</div>
                          <div className="text-sm text-gray-500">オールスター天丼</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Premium selection: shrimp, anago, luxury vegetables</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">¥1,090</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4">
                          <div className="font-medium text-gray-900">Yasai Tendon</div>
                          <div className="text-sm text-gray-500">野菜天丼</div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-700">Assorted seasonal vegetables, vegetarian option</td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900">¥490</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* À la carte tempura */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm mr-3">À la carte</span>
                  Individual Tempura
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Seafood</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Ebi (Shrimp)</span>
                        <span className="font-medium">¥180</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Ika (Squid)</span>
                        <span className="font-medium">¥150</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Anago (Eel)</span>
                        <span className="font-medium">¥200</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Hotate (Scallop)</span>
                        <span className="font-medium">¥220</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Tako (Octopus)</span>
                        <span className="font-medium">¥160</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Vegetables</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span>Nasu (Eggplant)</span>
                        <span className="font-medium">¥120</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Kabocha (Pumpkin)</span>
                        <span className="font-medium">¥120</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Shishito (Pepper)</span>
                        <span className="font-medium">¥100</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Renkon (Lotus root)</span>
                        <span className="font-medium">¥130</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Shiitake</span>
                        <span className="font-medium">¥140</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Set meals */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm mr-3">Complete</span>
                  Set Meals
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <div>
                      <div className="font-medium">Standard Set</div>
                      <div className="text-gray-600">Tendon + miso soup + pickles</div>
                    </div>
                    <div className="font-medium">+¥150</div>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded">
                    <div>
                      <div className="font-medium">Deluxe Set</div>
                      <div className="text-gray-600">Tendon + soup + salad + chawanmushi</div>
                    </div>
                    <div className="font-medium">+¥300</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quality commitment */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-amber-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Quality Commitment</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">🎯 Uncompromising Standards</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Oil changed multiple times daily</li>
                      <li>• Temperature monitored constantly</li>
                      <li>• Fresh ingredients delivered daily</li>
                      <li>• Batter made fresh every few hours</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">⏱️ Perfect Timing</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Each order fried individually</li>
                      <li>• Served within 3 minutes</li>
                      <li>• No pre-cooked tempura ever</li>
                      <li>• Optimal crispness guaranteed</li>
                    </ul>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">🌟 Premium Ingredients</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Large fresh shrimp from trusted suppliers</li>
                      <li>• Seasonal vegetables at peak freshness</li>
                      <li>• Special tempura flour blend</li>
                      <li>• Professional-grade cooking oil</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">👨‍🍳 Skilled Preparation</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• Trained tempura specialists</li>
                      <li>• Traditional Japanese techniques</li>
                      <li>• Consistent quality across all locations</li>
                      <li>• Regular quality control checks</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Cultural significance */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Info className="w-6 h-6 text-amber-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Cultural Impact</h2>
              </div>
              
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-700 mb-4">
                  Tenya's success represents more than just a business model - it's a 
                  <strong>democratization of Japanese culinary art</strong>. By making high-quality 
                  tempura accessible to working families, Tenya has preserved and spread appreciation 
                  for this traditional cooking technique.
                </p>
                
                <div className="bg-amber-50 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold text-amber-800 mb-2">🏮 Breaking Class Barriers</h3>
                  <p className="text-amber-700 text-sm">
                    Traditionally, excellent tempura was only available at expensive restaurants. 
                    Tenya proved that artisanal quality could be maintained while keeping prices 
                    accessible, changing how Japanese people think about "fast food."
                  </p>
                </div>
                
                <p className="text-gray-700">
                  The chain has become a cultural bridge, introducing younger generations to 
                  traditional tempura craftsmanship while maintaining the respect and technique 
                  that defines authentic Japanese cuisine.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Essential information */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Essential Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Hours</div>
                    <div className="text-gray-600">11:00 AM - 10:00 PM</div>
                    <div className="text-gray-500 text-xs">Some locations vary</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Locations</div>
                    <div className="text-gray-600">Tokyo, Kansai regions</div>
                    <div className="text-gray-500 text-xs">200+ restaurants</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CreditCard className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Payment</div>
                    <div className="text-gray-600">Cash, cards, IC</div>
                    <div className="text-gray-500 text-xs">PayPay accepted</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Users className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Clientele</div>
                    <div className="text-gray-600">Office workers, families</div>
                    <div className="text-gray-500 text-xs">Quality enthusiasts</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <a 
                  href="https://www.tenya.co.jp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-amber-600 hover:text-amber-700 text-sm font-medium"
                >
                  Official Tenya website →
                </a>
              </div>
            </div>

            {/* Indicative prices */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Average Prices</h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Tenya Tendon</span>
                  <span className="font-medium">¥590</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Ebi Tendon</span>
                  <span className="font-medium">¥790</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">+ Set (soup, salad)</span>
                  <span className="font-medium">+¥200</span>
                </div>
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <div className="flex justify-between font-medium">
                    <span className="text-gray-900">Complete meal</span>
                    <span className="text-gray-900">¥700-1,200</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Our evaluation */}
            <div className="bg-amber-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Review</h3>
              <div className="flex items-center mb-2">
                <div className="flex text-amber-400">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <span className="text-sm text-gray-600 ml-2">Accessible tempura excellence</span>
              </div>
              <p className="text-sm text-gray-700">
                <strong>The reference for democratized tempura.</strong> Tenya proves 
                that it's possible to maintain artisanal excellence while making tempura 
                accessible. An authentic experience that reveals the true nature of this 
                Japanese culinary art.
              </p>
            </div>

            {/* Recommendations */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Must-Try</h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span><strong>Tenya Tendon</strong> - The perfect classic</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span><strong>Ebi Tendon</strong> - For shrimp lovers</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span><strong>All Star</strong> - The premium experience</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span><strong>Yasai Tendon</strong> - Vegetarian discovery</span>
                </div>
              </div>
            </div>

            {/* Comparison */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Why Choose Tenya?</h3>
              
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-blue-800">vs Expensive tempura restaurants</div>
                  <div className="text-blue-700">Same quality, 1/3 the price</div>
                </div>
                <div>
                  <div className="font-medium text-blue-800">vs Other chains</div>
                  <div className="text-blue-700">Specialized expertise, fresh preparation</div>
                </div>
                <div>
                  <div className="font-medium text-blue-800">Perfect for</div>
                  <div className="text-blue-700">Discovering authentic tempura without breaking the bank</div>
                </div>
              </div>
            </div>

            {/* Useful links */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Useful Links</h3>
              <div className="space-y-2">
                <a href="/dish-types/tempura" 
                   className="block text-amber-600 hover:text-amber-700 text-sm">
                  → Complete tempura guide
                </a>
                <a href="/chains/tsunahachi" 
                   className="block text-amber-600 hover:text-amber-700 text-sm">
                  → Compare with Tsunahachi
                </a>
                <a href="/guides/how-to-order" 
                   className="block text-amber-600 hover:text-amber-700 text-sm">
                  → How to order in Japanese
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
