import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, ChefHat, Heart, Zap, Droplets, Wheat } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Ringer Hut リンガーハッチE| Nagasaki Champon | Japan Food Chains",
  description: "Nagasaki champon specialist. Fresh vegetables, unique broth, rich noodles.",
  keywords: [
    'ringer hut', 'リンガーハッチE, 'chanpon', 'nagasaki chanpon',
    'vegetable ramen', 'flavorful broth', 'nagasaki cuisine',
    'fresh vegetables', 'fusion ramen', 'kyushu specialty'
  ],
  openGraph: {
    title: "Ringer Hut リンガーハッチE| Nagasaki Champon | Japan Food Chains",
    description: "Nagasaki champon specialist. Fresh vegetables, unique broth, rich noodles.",
    type: 'article',
    locale: "en_US",
    siteName: "Japan Food Chains - Japanese Restaurant Guide"
  },
  alternates: {
    canonical: '/chains/ringer-hut',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  },
};

export default function RingerHutPage() {
  return (
    <>
      <ChainViewTracker chainName="ringer-hut" chainCategory="chinese_cuisine" />
      <div className="min-h-screen bg-gray-50">
        {/* Header with return */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link 
              href="/chains" 
              className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Chains
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-blue-700 rounded-lg flex items-center justify-center">
                <Droplets className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Ringer Hut</h1>
                <p className="text-lg text-gray-600">リンガーハッチE/p>
                <p className="text-sm text-gray-500">Nagasaki champon specialist since 1974</p>
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
                  <Info className="w-5 h-5 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Overview</h2>
                </div>
                
                <div className="prose prose-gray max-w-none">
                  <p className="text-lg text-gray-700 mb-4">
                    <strong>Ringer Hut</strong> (リンガーハッチE is the chain specializing in 
                    <strong>champon</strong>, Nagasaki's signature dish. Founded in 1974, 
                    this chain of over 540 restaurants in Japan has made it their mission 
                    to introduce this local specialty throughout the country. Ringer Hut 
                    is also a pioneer in chemical-free agriculture and complete food traceability.
                  </p>
                  
                  <div className="bg-blue-50 p-4 rounded-lg mb-6">
                    <h3 className="font-semibold text-blue-800 mb-2">🍜 Authentic champon</h3>
                    <ul className="text-blue-700 space-y-1">
                      <li>• <strong>Nagasaki specialty</strong> - Preserved culinary heritage</li>
                      <li>• <strong>Thick noodles</strong> - Unique and satisfying texture</li>
                      <li>• <strong>Abundant vegetables</strong> - 250g of vegetables per bowl</li>
                      <li>• <strong>Rich broth</strong> - Pork and seafood simmered</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold mb-3">🏝�E�ENagasaki Heritage</h3>
                  <p className="mb-4">
                    Champon was born in Nagasaki in the early 20th century, created by a 
                    Chinese immigrant to feed local Chinese students. This unique Sino-Japanese 
                    fusion dish combines Chinese noodles, local Japanese vegetables, and 
                    culinary techniques from both cultures. Ringer Hut perpetuates this tradition 
                    while adapting it to contemporary tastes.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">🌱 Responsible agriculture</h3>
                  <p className="mb-4">
                    Ringer Hut is a pioneer in chemical-free agriculture in Japan. 
                    The chain works directly with over 250 partner farmers 
                    who grow vegetables without pesticides or chemical fertilizers. This approach 
                    guarantees food safety and the authentic taste of the vegetables that 
                    make up their dishes.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">📍 Complete traceability</h3>
                  <p className="mb-4">
                    Every ingredient used at Ringer Hut is traceable to its source. 
                    The chain displays in each restaurant the exact origin of the day's vegetables, 
                    allowing customers to know the producing farm. This transparency, 
                    rare in fast food, demonstrates the brand's commitment to quality.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">🔧 Unique cooking technique</h3>
                  <p className="mb-4">
                    Champon preparation at Ringer Hut follows a special technique 
                    where vegetables are stir-fried at high temperature with meat and 
                    seafood, before adding broth and noodles. This "itame-ni" method 
                    (stir-fried-simmered) concentrates flavors and creates the 
                    characteristic texture of authentic champon.
                  </p>
                </div>
              </div>

              {/* Detailed menu */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <Utensils className="w-5 h-5 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Specialized Champon Menu</h2>
                </div>

                {/* Champon - The specialty */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">🍜 Champon - The Absolute Specialty</h3>
                  <div className="bg-green-50 p-4 rounded-lg mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Wheat className="w-5 h-5 text-green-600" />
                      <h4 className="font-semibold text-green-800">🌿 Chemical-free vegetables</h4>
                    </div>
                    <p className="text-green-800 text-sm">
                      Each bowl contains 250g of fresh vegetables grown without pesticides or 
                      chemical fertilizers by Ringer Hut's partner farmers.
                    </p>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="text-left p-3 font-medium">English name</th>
                          <th className="text-left p-3 font-medium">日本誁E/th>
                          <th className="text-left p-3 font-medium">Description</th>
                          <th className="text-left p-3 font-medium">Price</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="p-3 font-medium">Classic Champon</td>
                          <td className="p-3">ちめE��ぽめE/td>
                          <td className="p-3">Original Nagasaki recipe</td>
                          <td className="p-3">¥680</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Vegetable Champon</td>
                          <td className="p-3">野菜ちめE��ぽめE/td>
                          <td className="p-3">Vegetarian version, 350g of vegetables</td>
                          <td className="p-3">¥750</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Seafood Champon</td>
                          <td className="p-3">海鮮ちめE��ぽめE/td>
                          <td className="p-3">Shrimp, squid, scallops</td>
                          <td className="p-3">¥880</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Spicy Champon</td>
                          <td className="p-3">辛味ちめE��ぽめE/td>
                          <td className="p-3">Spicy version with hot miso</td>
                          <td className="p-3">¥720</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Large Champon</td>
                          <td className="p-3">大盛りちめE��ぽめE/td>
                          <td className="p-3">XL portion for big appetites</td>
                          <td className="p-3">¥780</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Regional variations */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">🗾 Regional Variations</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="text-left p-3 font-medium">English name</th>
                          <th className="text-left p-3 font-medium">日本誁E/th>
                          <th className="text-left p-3 font-medium">Description</th>
                          <th className="text-left p-3 font-medium">Price</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="p-3 font-medium">Nagasaki Sara-udon</td>
                          <td className="p-3">皿ぁE��めE/td>
                          <td className="p-3">Crispy noodles with thick sauce</td>
                          <td className="p-3">¥650</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Seafood Sara-udon</td>
                          <td className="p-3">海鮮皿ぁE��めE/td>
                          <td className="p-3">Premium version with seafood</td>
                          <td className="p-3">¥850</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Gomoku-ankake</td>
                          <td className="p-3">五目あんかけ</td>
                          <td className="p-3">Soft noodles with thickened sauce, Kyushu style</td>
                          <td className="p-3">¥680</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Kyushu Ramen</td>
                          <td className="p-3">九州ラーメン</td>
                          <td className="p-3">Local ramen with tonkotsu broth</td>
                          <td className="p-3">¥620</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Side dishes */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">🥁ETraditional Sides</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="text-left p-3 font-medium">English name</th>
                          <th className="text-left p-3 font-medium">日本誁E/th>
                          <th className="text-left p-3 font-medium">Description</th>
                          <th className="text-left p-3 font-medium">Price</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="p-3 font-medium">Nagasaki Gyoza (5 pieces)</td>
                          <td className="p-3">長崎餁E��！E個！E/td>
                          <td className="p-3">Local gyoza with thicker wrapper</td>
                          <td className="p-3">¥320</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Vegetable Fried Rice</td>
                          <td className="p-3">野菜チャーハン</td>
                          <td className="p-3">Fried rice with additive-free vegetables</td>
                          <td className="p-3">¥580</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Fresh Vegetable Salad</td>
                          <td className="p-3">フレチE��ュ野菜サラダ</td>
                          <td className="p-3">Raw vegetables from partner farms</td>
                          <td className="p-3">¥380</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Chicken Karaage</td>
                          <td className="p-3">鶏�Eから揚げ</td>
                          <td className="p-3">Fried chicken with special marinade</td>
                          <td className="p-3">¥450</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Pickled Vegetables</td>
                          <td className="p-3">お漬物</td>
                          <td className="p-3">Assorted fermented vegetables</td>
                          <td className="p-3">¥250</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Value sets */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">💰 Value Sets</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-blue-600 mb-3">Champon sets</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>Champon + gyoza set</strong> - Main + 3 gyoza (¥850)</li>
                        <li>• <strong>Champon + fried rice set</strong> - Perfect combo (¥980)</li>
                        <li>• <strong>Champon + karaage set</strong> - Protein + vegetables (¥920)</li>
                        <li>• <strong>Discovery set</strong> - Small champon + sara-udon (¥890)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-600 mb-3">Family meals</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>Family platter</strong> - 2 champon + gyoza + rice (¥1,850)</li>
                        <li>• <strong>Sharing set</strong> - Large champon + sara-udon (¥1,200)</li>
                        <li>• <strong>Kids menu</strong> - Mini champon + juice + toy (¥650)</li>
                        <li>• <strong>All-you-can-drink</strong> - Unlimited soft drinks (+¥200)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Beverages */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4">🥤 Beverages</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-medium text-blue-600 mb-3">Hot drinks</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Oolong tea</strong> - ¥200</li>
                        <li>• <strong>Green tea</strong> - ¥200</li>
                        <li>• <strong>Coffee</strong> - ¥250</li>
                        <li>• <strong>Jasmine tea</strong> - ¥220</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-600 mb-3">Cold drinks</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Iced tea</strong> - ¥250</li>
                        <li>• <strong>Cola</strong> - ¥280</li>
                        <li>• <strong>Orange juice</strong> - ¥300</li>
                        <li>• <strong>Mineral water</strong> - ¥200</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-blue-600 mb-3">Specialties</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Fresh vegetable juice</strong> - ¥350</li>
                        <li>• <strong>Soy milk</strong> - ¥280</li>
                        <li>• <strong>Vegetable smoothie</strong> - ¥420</li>
                        <li>• <strong>Japanese beer</strong> - ¥400</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Healthy vegetables philosophy */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Wheat className="w-5 h-5 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Healthy Vegetables Philosophy</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2">🌱 Additive-free agriculture</h3>
                    <p className="text-green-700 text-sm mb-3">
                      Since 2006, Ringer Hut sources exclusively vegetables 
                      grown without pesticides or chemical fertilizers from 250 
                      certified partner farmers.
                    </p>
                    <ul className="text-green-700 text-sm space-y-1">
                      <li>• <strong>Zero pesticides</strong> - 100% natural cultivation</li>
                      <li>• <strong>Strict controls</strong> - Regular farm inspections</li>
                      <li>• <strong>Seasonality respected</strong> - Seasonal vegetables prioritized</li>
                      <li>• <strong>Authentic taste</strong> - Natural flavors preserved</li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">📍 Complete traceability</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Origin of each vegetable displayed</li>
                        <li>• Producer farmer's name</li>
                        <li>• Harvest date specified</li>
                        <li>• Direct farm-to-restaurant transport</li>
                        <li>• Verified organic certifications</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">🤁EAgricultural partnership</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• 250 exclusive partner farmers</li>
                        <li>• Secured long-term contracts</li>
                        <li>• Organic technique training</li>
                        <li>• Technical and financial support</li>
                        <li>• Guaranteed fair prices</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">🏆 Pioneers of responsibility</h4>
                    <p className="text-sm text-blue-700">
                      Ringer Hut was one of the first fast food chains 
                      in Japan to adopt a 100% sustainable agriculture approach. This 
                      philosophy, initially costly, is now recognized as 
                      visionary and inspires other chains to follow this responsible path.
                    </p>
                  </div>
                </div>
              </div>

              {/* Practical guide */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Star className="w-5 h-5 text-blue-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Perfect Champon Guide</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-yellow-800 mb-2">🍜 Essential first tasting</h3>
                    <ol className="text-yellow-700 text-sm space-y-1">
                      <li><strong>1.</strong> Start with classic champon to discover the original</li>
                      <li><strong>2.</strong> Observe the vegetables: bright colors, obvious freshness</li>
                      <li><strong>3.</strong> Taste the broth first: richness and balance</li>
                      <li><strong>4.</strong> Mix noodles and vegetables well</li>
                      <li><strong>5.</strong> Note the difference from traditional ramen</li>
                    </ol>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">🎯 Discovery menu</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• <strong>Classic champon</strong> - The authentic (¥680)</li>
                        <li>• <strong>Nagasaki gyoza</strong> - Local side (¥320)</li>
                        <li>• <strong>Fresh vegetable salad</strong> - Organic greens (¥380)</li>
                        <li>• <strong>Oolong tea</strong> - Traditional drink (¥200)</li>
                        <li><strong>Total: ¥1,580</strong> for complete experience</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">🌟 Gourmet menu</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• <strong>Seafood champon</strong> - Premium (¥880)</li>
                        <li>• <strong>Nagasaki sara-udon</strong> - Specialty (¥650)</li>
                        <li>• <strong>Chicken karaage</strong> - Protein (¥450)</li>
                        <li>• <strong>Fresh vegetable juice</strong> - Healthy (¥350)</li>
                        <li><strong>Total: ¥2,330</strong> for connoisseurs</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-medium text-purple-800 mb-2">💡 Expert tips</h4>
                    <ul className="text-sm text-purple-700 space-y-1">
                      <li>• <strong>Optimal timing</strong> - Vegetables delivered in morning, maximum freshness</li>
                      <li>• <strong>Reading signs</strong> - Vegetable origins displayed daily</li>
                      <li>• <strong>Tasting technique</strong> - Mix frequently for even distribution</li>
                      <li>• <strong>Regional differences</strong> - Each region offers local vegetables</li>
                      <li>• <strong>Takeaway available</strong> - Champon takeout available</li>
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
                    <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <div className="font-medium">Hours</div>
                      <div className="text-sm text-gray-600">11:00 AM - 10:00 PM</div>
                      <div className="text-sm text-gray-500">Some open earlier</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <div className="font-medium">Location</div>
                      <div className="text-sm text-gray-600">540+ restaurants in Japan</div>
                      <div className="text-sm text-gray-500">Strong presence in Kyushu</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CreditCard className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <div className="font-medium">Payment</div>
                      <div className="text-sm text-gray-600">All cards accepted</div>
                      <div className="text-sm text-gray-500">Mobile app available</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Droplets className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <div className="font-medium">Average budget</div>
                      <div className="text-sm text-gray-600">¥800-1,500 per person</div>
                      <div className="text-sm text-gray-500">Excellent value for money</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tips for visitors */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">
                  💡 Tips for Visitors
                </h3>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-medium text-blue-700">Unique discovery</div>
                    <div className="text-blue-600">Champon exists almost exclusively at Ringer Hut</div>
                  </div>
                  
                  <div>
                    <div className="font-medium text-blue-700">Organic quality</div>
                    <div className="text-blue-600">Additive-free vegetables, complete traceability</div>
                  </div>
                  
                  <div>
                    <div className="font-medium text-blue-700">Regional specialty</div>
                    <div className="text-blue-600">Taste authentic Nagasaki cuisine</div>
                  </div>
                  
                  <div>
                    <div className="font-medium text-blue-700">Very nutritious</div>
                    <div className="text-blue-600">250g of vegetables per bowl, balanced meal</div>
                  </div>
                </div>
              </div>

              {/* Champon specialty */}
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">
                  🍜 Champon Explained
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-medium text-green-700">Origin</div>
                    <div className="text-green-600">Created in Nagasaki to feed Chinese students</div>
                  </div>
                  <div>
                    <div className="font-medium text-green-700">Difference from ramen</div>
                    <div className="text-green-600">Thick noodles, integrated stir-fried vegetables</div>
                  </div>
                  <div>
                    <div className="font-medium text-green-700">Unique technique</div>
                    <div className="text-green-600">Stir-fried then simmered, not simply boiled</div>
                  </div>
                  <div>
                    <div className="font-medium text-green-700">Philosophy</div>
                    <div className="text-green-600">Complete dish: carbs, vegetables, protein</div>
                  </div>
                </div>
              </div>

              {/* Cultural note */}
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">
                  🏮 Cultural Note
                </h3>
                <p className="text-sm text-purple-700">
                  Ringer Hut preserves and spreads the culinary heritage of Nagasaki, historic 
                  city of exchanges between Japan and abroad. Champon symbolizes 
                  this Sino-Japanese cultural fusion, just like Nagasaki itself. 
                  The chain contributes to keeping this unique culinary tradition alive 
                  while promoting responsible agriculture.
                </p>
              </div>

              {/* Useful links */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
                <div className="space-y-2">
                  <a href="https://www.ringerhut.jp/" 
                     className="block text-blue-600 hover:text-blue-700 text-sm">
                    ↁEOfficial Ringer Hut website
                  </a>
                  <a href="/chains" 
                     className="block text-orange-600 hover:text-orange-700 text-sm">
                    ↁEComplete Chinese cuisine guide
                  </a>
                  <a href="/chains/gyoza-no-ohsho" 
                     className="block text-orange-600 hover:text-orange-700 text-sm">
                    ↁECompare with Gyoza no Ohsho
                  </a>
                  <a href="/chains/bamiyan" 
                     className="block text-orange-600 hover:text-orange-700 text-sm">
                    ↁECompare with Bamiyan
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



