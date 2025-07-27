import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Heart, Flame, Crown, Coffee } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sukiya Curry すき家カレー | Quick Curry | Japonchaines',
  description: 'Economical curry from Sukiya. Unbeatable prices, 24-hour service from the #1 gyudon chain.',
  keywords: [
    'sukiya curry', 'すき家カレー', 'japanese curry', 'curry rice',
    'affordable prices', 'varied menu', 'authentic curry',
    'japanese style', 'fast curry', 'japanese spices'
  ],
  openGraph: {
    title: 'Sukiya Curry: Economical and Quick Curry | Japonchaines',
    description: 'Discover Sukiya curry offerings. Delicious Japanese curry, unbeatable prices and quick 24-hour service from the #1 gyudon chain.',
    type: 'article',
    url: '/chains/sukiya-curry',
  },
  alternates: {
    canonical: '/chains/sukiya-curry',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SukiyaCurryPage() {
  return (
    <>
      <ChainViewTracker chainName="sukiya-curry" chainCategory="curry" />
      <div className="min-h-screen bg-gray-50">
      {/* Header with return button */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/type-plat/curry" 
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Japanese Curry
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-orange-600 rounded-lg flex items-center justify-center">
              <Coffee className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Sukiya Curry</h1>
              <p className="text-lg text-gray-600">すき家カレー</p>
              <p className="text-sm text-gray-500">The accessible curry from Sukiya chain since 2009</p>
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
                <Info className="w-5 h-5 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
              </div>
              
              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-gray-700 mb-4">
                  <strong>Sukiya Curry</strong> (すき家カレー) is the curry offering from the famous 
                  Sukiya chain, launched in 2009 to diversify the menu beyond gyūdon. 
                  Present in over 2,000 Sukiya restaurants across Japan, this curry 
                  offers an accessible and flavorful alternative with the same philosophy 
                  of speed, quality and affordable prices that makes the brand successful.
                </p>
                
                <div className="bg-orange-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-orange-800 mb-2">🍛 Natural Sukiya extension</h3>
                  <ul className="text-orange-700 space-y-1">
                    <li>• <strong>Launched in 2009</strong> - Successful menu diversification</li>
                    <li>• <strong>2,000+ outlets</strong> - Available at all Sukiya locations</li>
                    <li>• <strong>Sukiya pricing</strong> - Economical positioning</li>
                    <li>• <strong>24-hour service</strong> - Maximum availability</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold mb-3">🔄 Strategic diversification</h3>
                <p className="mb-4">
                  The introduction of curry at Sukiya responds to a diversification 
                  strategy to attract a broader clientele and offer more options to 
                  regular gyūdon customers. This natural extension builds on existing 
                  infrastructure and the chain's culinary expertise, particularly 
                  in preparing simmered dishes like gyūdon.
                </p>

                <h3 className="text-xl font-semibold mb-3">💰 Economical positioning</h3>
                <p className="mb-4">
                  True to Sukiya's philosophy, the curry maintains excellent value 
                  for money. Portions are generous, prices remain very accessible, 
                  and taste quality rivals more expensive specialized chains. 
                  This strategy allows Sukiya to capture a share of the curry market 
                  without cannibalizing its main gyūdon business.
                </p>

                <h3 className="text-xl font-semibold mb-3">⚡ Optimized Sukiya service</h3>
                <p className="mb-4">
                  Sukiya curry benefits from the chain's legendary operational 
                  efficiency: quick service, 24-hour availability in many restaurants, 
                  simplified ordering and standardized preparation. This optimization 
                  allows serving quality curry in just minutes, ideal for busy 
                  lunchtime salarymen.
                </p>

                <h3 className="text-xl font-semibold mb-3">🌶️ Balanced recipe</h3>
                <p className="mb-4">
                  Sukiya curry develops a balanced flavor profile: neither too spicy 
                  nor too mild, with a smooth texture that pleases the mainstream 
                  Japanese palate. This universal recipe suits both children and 
                  adults, maximizing commercial appeal without compromising 
                  distinctive taste.
                </p>

                <h3 className="text-xl font-semibold mb-3">🥩 Gyūdon complementarity</h3>
                <p className="mb-4">
                  Far from competing with signature gyūdon, Sukiya curry draws inspiration 
                  from it: same simmered beef, same comfort food approach, same 
                  generous portions. This intelligent complementarity retains 
                  existing customers while attracting new consumers seeking an 
                  alternative to traditional beef rice.
                </p>
              </div>
            </div>

            {/* Detailed menu */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Utensils className="w-5 h-5 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900">Accessible Curry Menu</h2>
              </div>

              {/* Basic curries */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🍛 Sukiya Signature Curries</h3>
                <div className="bg-orange-50 p-4 rounded-lg mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Coffee className="w-5 h-5 text-orange-600" />
                    <h4 className="font-semibold text-orange-800">🥩 Adapted Sukiya expertise</h4>
                  </div>
                  <p className="text-orange-800 text-sm">
                    Sukiya curry uses the same simmering expertise as for gyūdon, 
                    with tender meats and smooth sauce that built the chain's 
                    reputation.
                  </p>
                </div>
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
                        <td className="p-3 font-medium">Classic curry</td>
                        <td className="p-3">カレー</td>
                        <td className="p-3">Basic Sukiya curry, balanced sweetness</td>
                        <td className="p-3">¥390</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Beef curry</td>
                        <td className="p-3">ビーフカレー</td>
                        <td className="p-3">With simmered beef strips</td>
                        <td className="p-3">¥490</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Pork katsu curry</td>
                        <td className="p-3">カツカレー</td>
                        <td className="p-3">Crispy breaded cutlet</td>
                        <td className="p-3">¥590</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Chicken curry</td>
                        <td className="p-3">チキンカレー</td>
                        <td className="p-3">Tender chicken pieces</td>
                        <td className="p-3">¥520</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Sausage curry</td>
                        <td className="p-3">ソーセージカレー</td>
                        <td className="p-3">Spicy German sausages</td>
                        <td className="p-3">¥480</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Portions and formats */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">📏 Portions and Formats</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 font-medium">Format</th>
                        <th className="text-left p-3 font-medium">日本語</th>
                        <th className="text-left p-3 font-medium">Description</th>
                        <th className="text-left p-3 font-medium">Extra charge</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-3 font-medium">Regular size</td>
                        <td className="p-3">並盛</td>
                        <td className="p-3">Standard portion, 200g rice</td>
                        <td className="p-3">Included</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Large portion</td>
                        <td className="p-3">大盛</td>
                        <td className="p-3">300g rice, increased sauce</td>
                        <td className="p-3">+¥100</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Extra large portion</td>
                        <td className="p-3">特盛</td>
                        <td className="p-3">400g rice, generous sauce</td>
                        <td className="p-3">+¥200</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Mega portion</td>
                        <td className="p-3">メガ盛</td>
                        <td className="p-3">500g rice, for big appetites</td>
                        <td className="p-3">+¥300</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Mini curry</td>
                        <td className="p-3">ミニカレー</td>
                        <td className="p-3">150g rice, child/light portion</td>
                        <td className="p-3">-¥50</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Special curries */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🌟 Sukiya Special Curries</h3>
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
                        <td className="p-3 font-medium">Curry gyūdon fusion</td>
                        <td className="p-3">牛丼カレー</td>
                        <td className="p-3">Signature fusion: curry + gyūdon strips</td>
                        <td className="p-3">¥650</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Triple protein</td>
                        <td className="p-3">トリプルプロテイン</td>
                        <td className="p-3">Beef + chicken + sausage combined</td>
                        <td className="p-3">¥790</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Vegetarian curry</td>
                        <td className="p-3">ベジタブルカレー</td>
                        <td className="p-3">Seasonal vegetables, no meat</td>
                        <td className="p-3">¥450</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Cheese curry</td>
                        <td className="p-3">チーズカレー</td>
                        <td className="p-3">Melted cheese on beef curry</td>
                        <td className="p-3">¥590</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Spicy curry</td>
                        <td className="p-3">辛口カレー</td>
                        <td className="p-3">Hot version for spice lovers</td>
                        <td className="p-3">¥520</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Side dishes */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🥗 Traditional Side Dishes</h3>
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
                        <td className="p-3 font-medium">Green salad</td>
                        <td className="p-3">サラダ</td>
                        <td className="p-3">Fresh vegetable mix, vinaigrette</td>
                        <td className="p-3">¥150</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Miso soup</td>
                        <td className="p-3">味噌汁</td>
                        <td className="p-3">Traditional wakame broth</td>
                        <td className="p-3">¥120</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Fried egg</td>
                        <td className="p-3">目玉焼き</td>
                        <td className="p-3">Sunny-side up on curry</td>
                        <td className="p-3">¥80</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Pickled vegetables</td>
                        <td className="p-3">お新香</td>
                        <td className="p-3">Tangy cabbage and cucumber</td>
                        <td className="p-3">¥100</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Kimchi</td>
                        <td className="p-3">キムチ</td>
                        <td className="p-3">Spicy Korean fermented cabbage</td>
                        <td className="p-3">¥150</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Agedashi tofu</td>
                        <td className="p-3">揚げ出し豆腐</td>
                        <td className="p-3">Crispy tofu, dashi broth</td>
                        <td className="p-3">¥200</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Economy sets */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">💰 Economy Sets</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-orange-600 mb-3">Standard curry sets</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Basic set</strong> - Curry + salad + soup (¥580)</li>
                      <li>• <strong>Katsu set</strong> - Katsu curry + sides (¥750)</li>
                      <li>• <strong>Complete set</strong> - Beef curry + all sides (¥690)</li>
                      <li>• <strong>Mini set</strong> - Mini curry + soup (¥480)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-orange-600 mb-3">Special combos</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Gyūdon + Curry</strong> - Both signatures (¥800)</li>
                      <li>• <strong>Double curry</strong> - Two different curries (¥750)</li>
                      <li>• <strong>Family set</strong> - 2 curries + sides (¥1,200)</li>
                      <li>• <strong>Student set</strong> - Large portion + drink (¥620)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Beverages */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">🥤 Sukiya Beverages</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-medium text-orange-600 mb-3">Hot beverages</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Green tea</strong> - ¥150</li>
                      <li>• <strong>Coffee</strong> - ¥200</li>
                      <li>• <strong>Oolong tea</strong> - ¥150</li>
                      <li>• <strong>Hot chocolate</strong> - ¥250</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-orange-600 mb-3">Cold beverages</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Iced tea</strong> - ¥180</li>
                      <li>• <strong>Cola</strong> - ¥200</li>
                      <li>• <strong>Orange juice</strong> - ¥220</li>
                      <li>• <strong>Mineral water</strong> - ¥150</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-orange-600 mb-3">Specialties</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Lassi</strong> - ¥250</li>
                      <li>• <strong>Ramune</strong> - ¥200</li>
                      <li>• <strong>Cold milk</strong> - ¥180</li>
                      <li>• <strong>Asahi beer</strong> - ¥300</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Menu strategy */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Flame className="w-5 h-5 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900">Sukiya Menu Strategy</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-800 mb-2">🎯 Intelligent complementarity</h3>
                  <p className="text-orange-700 text-sm mb-3">
                    Sukiya curry doesn't compete with gyūdon but complements it, offering 
                    an alternative in the same accessible comfort food register, 
                    using the same infrastructure and culinary expertise.
                  </p>
                  <ul className="text-orange-700 text-sm space-y-1">
                    <li>• <strong>Same price positioning</strong> - Economic consistency</li>
                    <li>• <strong>Same service speed</strong> - Sukiya efficiency</li>
                    <li>• <strong>Same meat quality</strong> - Unified standards</li>
                    <li>• <strong>Combo possibilities</strong> - Gyūdon + curry available</li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">📊 Competitive advantages</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Unbeatable prices in curry market</li>
                      <li>• Unique 24-hour availability</li>
                      <li>• 2,000+ outlets</li>
                      <li>• Ultra-fast service</li>
                      <li>• Adjustable portions</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🎲 Smart positioning</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Between premium and basic curry</li>
                      <li>• Superior quality at Sukiya prices</li>
                      <li>• Gyūdon alternative for variety</li>
                      <li>• Attracts curry customers to Sukiya</li>
                      <li>• Retains existing customers</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">🏆 Commercial success</h4>
                  <p className="text-sm text-blue-700">
                    The introduction of curry increased average Sukiya restaurant 
                    traffic by 15%, with 30% of curry orders coming from new customers. 
                    This successful diversification proves the effectiveness of 
                    well-planned range extension in Japanese fast food.
                  </p>
                </div>
              </div>
            </div>

            {/* Practical guide */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-5 h-5 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900">Economical Curry Guide</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">🍛 Optimal first discovery</h3>
                  <ol className="text-green-700 text-sm space-y-1">
                    <li><strong>1.</strong> Start with curry gyūdon fusion for Sukiya signature</li>
                    <li><strong>2.</strong> Choose regular portion to judge quality/price</li>
                    <li><strong>3.</strong> Add fried egg, classic Japanese curry style</li>
                    <li><strong>4.</strong> Compare with gyūdon if first time at Sukiya</li>
                    <li><strong>5.</strong> Test legendary quick service</li>
                  </ol>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">💰 Budget discovery menu</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Curry gyūdon fusion</strong> - Signature (¥650)</li>
                      <li>• <strong>Fried egg</strong> - Japanese classic (¥80)</li>
                      <li>• <strong>Green salad</strong> - Balance (¥150)</li>
                      <li>• <strong>Green tea</strong> - Traditional drink (¥150)</li>
                      <li><strong>Total: ¥1,030</strong> complete experience</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🥩 Complete gourmet menu</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Triple protein</strong> - Ultimate version (¥790)</li>
                      <li>• <strong>Large portion</strong> - More filling (+¥100)</li>
                      <li>• <strong>Kimchi</strong> - Spicy side (¥150)</li>
                      <li>• <strong>Miso soup</strong> - Traditional (¥120)</li>
                      <li><strong>Total: ¥1,160</strong> for big appetites</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-medium text-purple-800 mb-2">⚡ Sukiya optimization tips</h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• <strong>Off-peak hours advantageous</strong> - Even faster service</li>
                    <li>• <strong>Gyūdon-curry combo</strong> - Discover both signatures</li>
                    <li>• <strong>Large portions</strong> - Excellent value for money</li>
                    <li>• <strong>24-hour availability</strong> - Ideal for late meals/night owls</li>
                    <li>• <strong>Mobile app</strong> - Pre-ordering possible</li>
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
                  <Clock className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Hours</div>
                    <div className="text-sm text-gray-600">24 hours (many locations)</div>
                    <div className="text-sm text-gray-500">Depends on Sukiya restaurant</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-sm text-gray-600">2,000+ Sukiya restaurants</div>
                    <div className="text-sm text-gray-500">Throughout Japan</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CreditCard className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Payment</div>
                    <div className="text-sm text-gray-600">All cards accepted</div>
                    <div className="text-sm text-gray-500">Mobile payment available</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Coffee className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Average budget</div>
                    <div className="text-sm text-gray-600">¥400-800 per person</div>
                    <div className="text-sm text-gray-500">Excellent value for money</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tips for visitors */}
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-orange-800 mb-4">
                💰 Tips for French Visitors
              </h3>
              
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-orange-700">Unbeatable prices</div>
                  <div className="text-orange-600">Quality curry at economical Sukiya prices</div>
                </div>
                
                <div>
                  <div className="font-medium text-orange-700">Maximum availability</div>
                  <div className="text-orange-600">24 hours in many restaurants</div>
                </div>
                
                <div>
                  <div className="font-medium text-orange-700">Ultra-fast service</div>
                  <div className="text-orange-600">Legendary Sukiya efficiency</div>
                </div>
                
                <div>
                  <div className="font-medium text-orange-700">Adjustable portions</div>
                  <div className="text-orange-600">From mini to mega according to appetite</div>
                </div>
              </div>
            </div>

            {/* Sukiya extension */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">
                🔄 Successful Sukiya Extension
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-blue-700">Smart diversification</div>
                  <div className="text-blue-600">Complements gyūdon without competing</div>
                </div>
                <div>
                  <div className="font-medium text-blue-700">Same infrastructure</div>
                  <div className="text-blue-600">Uses existing restaurants</div>
                </div>
                <div>
                  <div className="font-medium text-blue-700">Sukiya standards</div>
                  <div className="text-blue-600">Speed, price, quality preserved</div>
                </div>
                <div>
                  <div className="font-medium text-blue-700">Combo possibilities</div>
                  <div className="text-blue-600">Gyūdon + curry in same order</div>
                </div>
              </div>
            </div>

            {/* Accessible curry note */}
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-3">
                🍛 Accessible Curry Excellence
              </h3>
              <p className="text-sm text-green-700">
                Sukiya Curry proves that quality curry can be offered at very 
                affordable prices without compromising taste. This commercial 
                success demonstrates the effectiveness of range extension strategy 
                in the Sukiya ecosystem, offering more choices to loyal customers 
                while attracting new consumers looking for economical curry.
              </p>
            </div>

            {/* Useful links */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
              <div className="space-y-2">
                <a href="https://www.sukiya.jp/" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Official Sukiya website
                </a>
                <a href="/chains/sukiya" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → See main Sukiya gyūdon
                </a>
                <a href="/type-plat/curry" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Complete Japanese curry guide
                </a>
                <a href="/chains/coco-ichibanya" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Compare with CoCo Ichibanya
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
