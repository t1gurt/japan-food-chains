import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Heart, Leaf, Crown } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "MOS Burger モスバーガー | Japanese Burger Chain | Japan Food Chains",
  description: "Inventor of Rice Burger and Teriyaki. Premium quality, unique Japanese flavors.",
  keywords: [
    'mos burger', 'モスバーガー', 'premium burgers', 'fresh ingredients',
    'superior quality', 'culinary innovation', 'unique flavors',
    'japanese burgers', 'premium quality', 'creativity'
  ],
  openGraph: {
    title: "MOS Burger モスバーガー | Japanese Burger Chain | Japan Food Chains",
    description: "Inventor of Rice Burger and Teriyaki. Premium quality, unique Japanese flavors.",
    type: 'article',
    url: '/chains/mos-burger',
  },
  alternates: {
    canonical: '/chains/mos-burger',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MOSBurgerPage() {
  return (
    <>
      <ChainViewTracker chainName="mos-burger" chainCategory="burgers" />
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
              <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl font-bold">M</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">MOS Burger</h1>
                <p className="text-lg text-gray-600">モスバーガー | もすばーがー</p>
                <p className="text-sm text-gray-500">The pioneer of premium Japanese burgers</p>
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
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Authentic Japanese Alternative</h2>
                <div className="prose prose-orange max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    MOS Burger is <strong>THE Japanese burger chain par excellence</strong>, founded in 1972 
                    with a unique philosophy: <strong>&quot;Made On-demand System&quot;</strong>. Unlike 
                    American giants, MOS Burger prioritizes <strong>freshness, quality</strong> and 
                    <strong>adaptation to Japanese tastes</strong>.
                  </p>
                  <p className="text-gray-700">
                    With <strong>1,300+ restaurants</strong> mainly in Japan, MOS Burger offers 
                    burgers <strong>prepared to order</strong> with quality local ingredients. 
                    Its &quot;slow fast-food&quot; approach makes it a unique experience in the 
                    fast food world.
                  </p>
                </div>
              </div>

              {/* History and philosophy */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <History className="w-6 h-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">A Revolutionary Vision</h2>
                </div>
                
                <div className="space-y-6">
                  {/* Foundation */}
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">1972: Birth of Innovation</h3>
                    <p className="text-gray-700">
                      Sakuji Ōtsuka founded MOS Burger in <strong>Narimasu, Tokyo</strong> with a 
                      revolutionary vision: create burgers <strong>adapted to Japanese tastes</strong> 
                      with fresh and local ingredients. The name MOS stands for 
                      <strong>&quot;Mountain, Ocean, Sun&quot;</strong> - symbolizing nature.
                    </p>
                  </div>

                  {/* Product innovation */}
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">1980s: Rice Burger Revolution</h3>
                    <p className="text-gray-700">
                      MOS Burger invented the <strong>Rice Burger</strong> in 1987, replacing bread 
                      with compressed rice patties. This typically Japanese innovation 
                      was phenomenally successful and became <strong>the brand&apos;s icon</strong>.
                    </p>
                  </div>

                  {/* Quality expansion */}
                  <div className="border-l-4 border-yellow-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">1990s-2000s: Premium Quality</h3>
                    <p className="text-gray-700">
                      Development of the <strong>&quot;Made On-demand&quot;</strong> concept, use 
                      of organic ingredients, partnerships with local producers. 
                      MOS Burger positioned itself as the <strong>quality and responsible alternative</strong>.
                    </p>
                  </div>

                  {/* International expansion */}
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">2000+: Asian Influence</h3>
                    <p className="text-gray-700">
                      Expansion to <strong>Taiwan, South Korea, Singapore, Hong Kong</strong> and 
                      other Asian markets. MOS Burger exports its concept of 
                      <strong>&quot;Japanese-style&quot;</strong> burgers while adapting to local tastes.
                    </p>
                  </div>
                </div>
              </div>

              {/* MOS Philosophy */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <Award className="w-6 h-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">The MOS Difference</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold text-sm">M</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Made On-demand System</h3>
                      <p className="text-gray-700 text-sm">
                        <strong>Prepared to order</strong>: each burger is assembled on demand. 
                        Wait time of 5-8 minutes but <strong>guaranteed freshness</strong> and 
                        optimal flavor.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold text-sm">O</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Organic & Local</h3>
                      <p className="text-gray-700 text-sm">
                        <strong>Organic and local ingredients</strong> prioritized. Partnerships 
                        with Japanese producers, seasonal vegetables, premium quality meat.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold text-sm">S</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Japanese Specialties</h3>
                      <p className="text-gray-700 text-sm">
                        <strong>Adapted to Japanese tastes</strong>: Rice Burger, Kinpira Burger, 
                        Japanese sauces, traditional ingredients integrated in Western format.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-green-600 font-bold text-sm">✓</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">Environmental Responsibility</h3>
                      <p className="text-gray-700 text-sm">
                        <strong>Sustainable development</strong>: eco-responsible packaging, 
                        waste reduction, support for local agriculture.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed menu */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">MOS Burger Menu</h2>
                
                {/* Signature burgers */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm mr-3">Signatures</span>
                    Iconic Burgers
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="min-w-full border border-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Burger</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Description</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Price</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-4">
                            <div className="font-medium text-gray-900">MOS Burger</div>
                            <div className="text-sm text-gray-500">Original</div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-700">
                            The original burger: beef, lettuce, tomato, special MOS sauce
                          </td>
                          <td className="px-4 py-4 text-sm font-medium text-gray-900">¥380</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-4">
                            <div className="font-medium text-gray-900">Rice Burger</div>
                            <div className="text-sm text-gray-500">Kinpira/Yakitori/Ebi</div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-700">
                            Compressed rice buns, traditional Japanese fillings
                          </td>
                          <td className="px-4 py-4 text-sm font-medium text-gray-900">¥320-420</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-4">
                            <div className="font-medium text-gray-900">Tobikiri Cheese</div>
                            <div className="text-sm text-gray-500">Premium</div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-700">
                            Premium beef, triple cheese, special sauce, fresh vegetables
                          </td>
                          <td className="px-4 py-4 text-sm font-medium text-gray-900">¥520</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-4">
                            <div className="font-medium text-gray-900">Spicy MOS</div>
                            <div className="text-sm text-gray-500">Spicy</div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-700">
                            Spicy beef, jalapeños, hot sauce, fresh vegetables
                          </td>
                          <td className="px-4 py-4 text-sm font-medium text-gray-900">¥420</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-4">
                            <div className="font-medium text-gray-900">Fish Burger</div>
                            <div className="text-sm text-gray-500">Fish</div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-700">
                            Breaded fish fillet, tartar sauce, crispy lettuce
                          </td>
                          <td className="px-4 py-4 text-sm font-medium text-gray-900">¥360</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Vegetarian options */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="bg-lime-100 text-lime-800 px-2 py-1 rounded text-sm mr-3">Veggie</span>
                    Vegetarian Options
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-gray-200 rounded p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Vegetable Burger</h4>
                      <p className="text-sm text-gray-700 mb-2">Vegetable patty, avocado, fresh tomatoes</p>
                      <div className="text-sm text-gray-600">¥340</div>
                    </div>
                    <div className="border border-gray-200 rounded p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Soy Patty Burger</h4>
                      <p className="text-sm text-gray-700 mb-2">Soy patty, crispy vegetables, soy sauce</p>
                      <div className="text-sm text-gray-600">¥380</div>
                    </div>
                    <div className="border border-gray-200 rounded p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Rice Burger Kinpira</h4>
                      <p className="text-sm text-gray-700 mb-2">Rice buns, kinpira (Japanese sautéed vegetables)</p>
                      <div className="text-sm text-gray-600">¥320</div>
                    </div>
                    <div className="border border-gray-200 rounded p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Moss Chicken</h4>
                      <p className="text-sm text-gray-700 mb-2">Plant-based chicken alternative, authentic taste</p>
                      <div className="text-sm text-gray-600">¥420</div>
                    </div>
                  </div>
                </div>

                {/* The Legendary Teriyaki Burger Innovation */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm mr-3">Innovation</span>
                    The Legendary Teriyaki Burger (1973)
                  </h3>
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-6 border border-red-200">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-3">🥇 World&apos;s First (1973)</h4>
                        <p className="text-gray-700 mb-4">
                          MOS Burger created the <strong>world&apos;s first Teriyaki Burger</strong> in 1973, 
                          revolutionizing the hamburger industry. This innovation was so successful 
                          that McDonald&apos;s copied it... 18 years later in 1991!
                        </p>
                        
                        <div className="bg-white p-4 rounded-lg border-l-4 border-red-500 mb-4">
                          <h5 className="font-bold text-red-700 mb-2">The Secret: Miso Sauce 🤫</h5>
                          <p className="text-sm text-gray-700">
                            The genius of MOS Teriyaki lies in the subtle addition of <strong>miso</strong> 
                            to traditional teriyaki sauce. This touch creates an umami complexity 
                            that no one has ever managed to perfectly reproduce.
                          </p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-3">🎯 Technique & Philosophy</h4>
                        <div className="space-y-3">
                          <div className="bg-white p-3 rounded-lg">
                            <span className="font-semibold text-gray-900">Perfect balance: </span>
                            <span className="text-sm text-gray-600">Typically Japanese sweet-salty</span>
                          </div>
                          <div className="bg-white p-3 rounded-lg">
                            <span className="font-semibold text-gray-900">Deep umami: </span>
                            <span className="text-sm text-gray-600">Miso + mirin + soy sauce</span>
                          </div>
                          <div className="bg-white p-3 rounded-lg">
                            <span className="font-semibold text-gray-900">Caramelization: </span>
                            <span className="text-sm text-gray-600">Grilling that intensifies flavors</span>
                          </div>
                          <div className="bg-white p-3 rounded-lg">
                            <span className="font-semibold text-gray-900">Global impact: </span>
                            <span className="text-sm text-gray-600">Copied by all global chains</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                      <h5 className="font-bold text-yellow-800 mb-2">💡 Tasting Tip</h5>
                      <p className="text-sm text-gray-700">
                        Unlike imitations, MOS Teriyaki requires <strong>no additional condiments</strong>. 
                        The sauce is perfectly balanced and self-sufficient. 
                        Enjoy it plain to fully appreciate this historic innovation!
                      </p>
                    </div>
                  </div>
                </div>

                {/* Sides and desserts */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm mr-3">Sides</span>
                    Sides & Desserts
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border border-gray-200 rounded p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">French Fries</h4>
                      <p className="text-sm text-gray-700 mb-2">Crispy fries, Japanese sea salt</p>
                      <div className="text-sm text-gray-600">S: ¥150 / M: ¥200</div>
                    </div>
                    <div className="border border-gray-200 rounded p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Onion Rings</h4>
                      <p className="text-sm text-gray-700 mb-2">Breaded onion rings, special sauce</p>
                      <div className="text-sm text-gray-600">¥220</div>
                    </div>
                    <div className="border border-gray-200 rounded p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Chicken Nuggets</h4>
                      <p className="text-sm text-gray-700 mb-2">Chicken nuggets, choice of sauces</p>
                      <div className="text-sm text-gray-600">¥280</div>
                    </div>
                    <div className="border border-gray-200 rounded p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Soft Cream</h4>
                      <p className="text-sm text-gray-700 mb-2">Vanilla ice cream, seasonal flavors</p>
                      <div className="text-sm text-gray-600">¥180</div>
                    </div>
                    <div className="border border-gray-200 rounded p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Hot Apple Pie</h4>
                      <p className="text-sm text-gray-700 mb-2">Apple turnover, Japanese cinnamon</p>
                      <div className="text-sm text-gray-600">¥160</div>
                    </div>
                    <div className="border border-gray-200 rounded p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Matcha Shake</h4>
                      <p className="text-sm text-gray-700 mb-2">Green tea milkshake, authentic flavor</p>
                      <div className="text-sm text-gray-600">¥250</div>
                    </div>
                  </div>
                </div>

                {/* Sets and combos */}
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">MOS Burger Sets</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                    <div>
                      <strong>Standard Set</strong> - Burger + Fries + Drink
                      <div className="text-gray-600">+¥250 compared to burger only</div>
                    </div>
                    <div>
                      <strong>Premium Set</strong> - Burger + Onion Rings + Drink
                      <div className="text-gray-600">+¥300 compared to burger only</div>
                    </div>
                    <div>
                      <strong>Family Set</strong> - 2 Burgers + 2 Fries + 2 Drinks
                      <div className="text-gray-600">Save ¥200</div>
                    </div>
                    <div>
                      <strong>Breakfast Set</strong> - Burger + Hash Browns + Coffee
                      <div className="text-gray-600">Available until 10:30 AM</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Usage guide */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">MOS Burger Guide</h2>
                
                <div className="space-y-6">
                  {/* Steps */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-green-600 font-bold">1</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Order</h3>
                      <p className="text-sm text-gray-600">At counter or via MOS mobile app</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-green-600 font-bold">2</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Wait</h3>
                      <p className="text-sm text-gray-600">5-8 minutes fresh preparation</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-green-600 font-bold">3</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Collect</h3>
                      <p className="text-sm text-gray-600">Number called, hot burger served</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-green-600 font-bold">4</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Enjoy</h3>
                      <p className="text-sm text-gray-600">Savor MOS freshness</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-green-600 font-bold">5</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Recycle</h3>
                      <p className="text-sm text-gray-600">Sort waste (eco packaging)</p>
                    </div>
                  </div>

                  {/* Practical tips */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">Tips for an Optimal Experience</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-medium text-gray-900">Timing:</div>
                        <div className="text-gray-700">Allow 5-8 min wait time (freshness requires time)</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Rice Burger:</div>
                        <div className="text-gray-700">Unique specialty to absolutely try</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Mobile App:</div>
                        <div className="text-gray-700">Mobile ordering to avoid waiting</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Vegetarians:</div>
                        <div className="text-gray-700">Excellent plant-based options available</div>
                      </div>
                    </div>
                  </div>

                  {/* Useful phrases */}
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">Useful Phrases</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-medium text-gray-900">Order a set:</div>
                        <div className="text-gray-700">&quot;MOS Burger set kudasai&quot;</div>
                        <div className="text-gray-500 text-xs">モスバーガーセットください</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Rice Burger:</div>
                        <div className="text-gray-700">&quot;Raisu bāgā onegaishimasu&quot;</div>
                        <div className="text-gray-500 text-xs">ライスバーガーお願いします</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">To go:</div>
                        <div className="text-gray-700">&quot;Tēkuauto de&quot;</div>
                        <div className="text-gray-500 text-xs">テイクアウトで</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Thank you for the meal:</div>
                        <div className="text-gray-700">&quot;Gochisōsama deshita&quot;</div>
                        <div className="text-gray-500 text-xs">ごちそうさまでした</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Culture of Optimal Cooking */}
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h4 className="font-semibold text-blue-900 mb-3">🇯🇵 Japanese Culture: No Choice of Cooking</h4>
                    <p className="text-sm text-gray-700 mb-3">
                      <strong>Important for international visitors:</strong> Unlike some countries, 
                      you will never be asked for burger doneness in Japan. This isn&apos;t a lack of service, 
                      but the expression of the <strong>chef&apos;s absolute confidence</strong> 
                      in their ability to deliver optimal cooking.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4 text-xs">
                      <div className="bg-white p-3 rounded">
                        <span className="font-bold text-blue-700">🌍 In the West: </span>
                        <span className="text-gray-600">Customization according to individual tastes</span>
                      </div>
                      <div className="bg-white p-3 rounded">
                        <span className="font-bold text-blue-700">🇯🇵 In Japan: </span>
                        <span className="text-gray-600">Technical perfection through shokunin expertise</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Competitive advantages */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-6 h-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">The MOS Advantage</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-green-600 text-xs">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Guaranteed Freshness</h4>
                        <p className="text-sm text-gray-700">
                          Made to order, daily ingredients
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-green-600 text-xs">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Japanese Innovation</h4>
                        <p className="text-sm text-gray-700">
                          Rice Burger, local flavors, creative adaptations
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-green-600 text-xs">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Ecological Responsibility</h4>
                        <p className="text-sm text-gray-700">
                          Organic ingredients, sustainable packaging
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-green-600 text-xs">✓</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">Premium Experience</h4>
                        <p className="text-sm text-gray-700">
                          Personalized service, consistent quality, attention to detail
                        </p>
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
                      <div className="text-gray-600">7 AM - 10 PM (varies by location)</div>
                      <div className="text-gray-500 text-xs">Breakfast until 10:30 AM</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-gray-400 mt-1" />
                    <div>
                      <div className="font-medium text-gray-900">Location</div>
                      <div className="text-gray-600">City centers, stations, shopping centers</div>
                      <div className="text-gray-500 text-xs">1,300+ restaurants in Japan</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CreditCard className="w-4 h-4 text-gray-400 mt-1" />
                    <div>
                      <div className="font-medium text-gray-900">Payment</div>
                      <div className="text-gray-600">Cash, cards, mobile payment</div>
                      <div className="text-gray-500 text-xs">IC cards accepted</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Users className="w-4 h-4 text-gray-400 mt-1" />
                    <div>
                      <div className="font-medium text-gray-900">Clientele</div>
                      <div className="text-gray-600">Students, employees, families</div>
                      <div className="text-gray-500 text-xs">Casual atmosphere</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <a 
                    href="https://www.mos.jp" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 text-sm font-medium"
                  >
                    Official MOS Burger website →
                  </a>
                </div>
              </div>

              {/* Average prices */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Average Prices</h3>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Burger only</span>
                    <span className="font-medium">¥320-520</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Complete set</span>
                    <span className="font-medium">¥600-800</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sides</span>
                    <span className="font-medium">¥150-280</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 mt-2">
                    <div className="flex justify-between font-medium">
                      <span className="text-gray-900">Average meal</span>
                      <span className="text-gray-900">¥700-1,000</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Our opinion */}
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Opinion</h3>
                <div className="flex items-center mb-2">
                  <div className="flex text-green-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <span className="text-sm text-gray-600 ml-2">Japanese excellence</span>
                </div>
                <p className="text-sm text-gray-700">
                  <strong>The antithesis of classic fast food.</strong> MOS Burger offers a 
                  premium burger experience with a Japanese philosophy of quality. 
                  The Rice Burger is a unique must-try worldwide. Slower service 
                  but remarkable quality.
                </p>
              </div>

              {/* Mobile app */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">MOS Order App</h3>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Order ahead</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Detailed customization</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>Loyalty program</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span>New product notifications</span>
                  </div>
                </div>
              </div>

              {/* Navigation to other chains */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Other Burgers</h3>
                
                <div className="space-y-3">
                  <Link 
                    href="/chains/freshness-burger" 
                    className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="font-medium text-gray-900">Freshness Burger</div>
                    <div className="text-sm text-gray-600">Gourmet burgers</div>
                  </Link>
                  
                  <Link 
                    href="/chains/lotteria" 
                    className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="font-medium text-gray-900">Lotteria</div>
                    <div className="text-sm text-gray-600">Korean-Japanese flavors</div>
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
