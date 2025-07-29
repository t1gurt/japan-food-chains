import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Heart, Crown, Zap, Clock9 } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Go Go Curry ゴーゴーカレー | Black Curry | Japan Food Chains",
  description: "Kanazawa black curry. Thick sauce, 55-second service, unique rock ambiance.",
  keywords: [
    'go go curry', 'ゴーゴーカレー', 'curry kanazawa', 'thick sauce',
    'rock ambiance', 'japanese curry', 'authentic curry',
    'kanazawa style', 'tasty curry', 'specialty curry'
  ],
  openGraph: {
    title: "Go Go Curry ゴーゴーカレー | Black Curry | Japan Food Chains",
    description: "Kanazawa black curry. Thick sauce, 55-second service, unique rock ambiance.",
    type: 'article',
    locale: "en_US",
    siteName: "Japan Food Chains - Japanese Restaurant Guide"
  },
  alternates: {
    canonical: '/chains/go-go-curry',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  },
};

export default function GoGoCarryPage() {
  return (
    <>
      <ChainViewTracker chainName="go-go-curry" chainCategory="curry" />
      <div className="min-h-screen bg-gray-50">
        {/* Header avec retour */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link 
              href="/dish-types/curry" 
              className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Japanese Curry
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-yellow-500 rounded-lg flex items-center justify-center">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Go!Go!Curry</h1>
                <p className="text-lg text-gray-600">ゴーゴーカレー</p>
                <p className="text-sm text-gray-500">Kanazawa's explosive curry since 2004</p>
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
                  <Info className="w-5 h-5 text-yellow-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Overview</h2>
                </div>
                
                <div className="prose prose-gray max-w-none">
                  <p className="text-lg text-gray-700 mb-4">
                    <strong>Go!Go!Curry</strong> (ゴーゴーカレー) is Japan's most energetic curry chain, 
                    founded in 2004 in Kanazawa. With its slogan "The curry that gives you energy!", 
                    this chain of over 90 restaurants offers a unique black Japanese curry, 
                    served in a rock and roll atmosphere with constant references to gorillas 
                    and raw energy.
                  </p>
                  
                  <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                    <h3 className="font-semibold text-yellow-800 mb-2">⚡ The energy of black curry</h3>
                    <ul className="text-yellow-700 space-y-1">
                      <li>• <strong>Unique black sauce</strong> - Distinctive color and intense taste</li>
                      <li>• <strong>Ultra-fast service</strong> - Served in less than 55 seconds</li>
                      <li>• <strong>Rock ambiance</strong> - Energetic music, gorilla decor</li>
                      <li>• <strong>Guaranteed energy</strong> - Slogan: "The curry that gives strength"</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold mb-3">� The world of gorillas</h3>
                  <p className="mb-4">
                    Go!Go!Curry adopted the gorilla as its mascot, a symbol of strength and energy. 
                    Each restaurant is decorated with primate references, from figurines to posters, 
                    creating a unique atmosphere in the world of Japanese curry. 
                    This strong visual identity contributes to the brand's immersive experience.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">⚫ The secret of black curry</h3>
                  <p className="mb-4">
                    Go!Go!Curry's curry sauce gets its characteristic black color from a 
                    secret blend of roasted spices and black bean paste. This unique recipe, 
                    developed specifically for the chain, offers a more complex 
                    and intense taste than traditional Japanese curries, while remaining accessible 
                    to the Japanese palate.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">⚡ Lightning-fast 55-second service</h3>
                  <p className="mb-4">
                    Go!Go!Curry prides itself on serving its dishes in less than 55 seconds 
                    flat. This performance is possible thanks to an optimized preparation system 
                    where the curry is kept at a constant temperature and the rice is pre-cooked. 
                    This speed, rare even in Japanese fast food, is part 
                    of the brand's energetic identity.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">🏟️ Rock stadium ambiance</h3>
                  <p className="mb-4">
                    The sound atmosphere of Go!Go!Curry restaurants is unique: energetic rock music, 
                    theatrical announcements from the staff, and even shouts of encouragement 
                    during service. This sports stadium atmosphere transforms a simple 
                    meal into a dynamic experience, particularly appreciated by young people 
                    and salarymen looking for energy.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">🌟 National expansion</h3>
                  <p className="mb-4">
                    From Kanazawa, Go!Go!Curry quickly expanded throughout Japan, 
                    with a particular concentration in Tokyo and major cities. 
                    The chain has even opened restaurants in the United States, exporting its 
                    energetic black Japanese curry concept internationally.
                  </p>
                </div>
              </div>

              {/* Menu détaillé */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <Utensils className="w-5 h-5 text-yellow-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Energetic Black Curry Menu</h2>
                </div>

                {/* Basic Curries */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">⚫ Signature Black Curries</h3>
                  <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Zap className="w-5 h-5 text-yellow-600" />
                      <h4 className="font-semibold text-yellow-800">⚡ Energizing Black Sauce</h4>
                    </div>
                    <p className="text-yellow-800 text-sm">
                      Go!Go!Curry's signature: a unique black curry sauce obtained by 
                      roasting spices and black bean paste, for an intense taste and 
                      maximum energy.
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
                          <td className="p-3 font-medium">Go!Go!Curry Basic</td>
                          <td className="p-3">ゴーゴーカレー</td>
                          <td className="p-3">The original black curry, intensity 1</td>
                          <td className="p-3">¥580</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Major Curry</td>
                          <td className="p-3">メジャーカレー</td>
                          <td className="p-3">Augmented version, more sauce + rice</td>
                          <td className="p-3">¥680</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Captain Curry</td>
                          <td className="p-3">キャプテンカレー</td>
                          <td className="p-3">Generous portion, intensity 2</td>
                          <td className="p-3">¥780</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Champion Curry</td>
                          <td className="p-3">チャンピオンカレー</td>
                          <td className="p-3">XL portion for champions</td>
                          <td className="p-3">¥980</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Gorilla Curry</td>
                          <td className="p-3">ゴリラカレー</td>
                          <td className="p-3">The biggest, for gorilla strength</td>
                          <td className="p-3">¥1,280</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Curries with Proteins */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">🥩 Curries with Proteins</h3>
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
                          <td className="p-3 font-medium">Pork Katsu Curry</td>
                          <td className="p-3">ポークカツカレー</td>
                          <td className="p-3">Breaded pork cutlet + black curry</td>
                          <td className="p-3">¥880</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Chicken Katsu Curry</td>
                          <td className="p-3">チキンカツカレー</td>
                          <td className="p-3">Crispy breaded chicken</td>
                          <td className="p-3">¥820</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Hamburg Curry</td>
                          <td className="p-3">ハンバーグカレー</td>
                          <td className="p-3">Juicy Japanese hamburger steak</td>
                          <td className="p-3">¥950</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Sausage Curry</td>
                          <td className="p-3">ソーセージカレー</td>
                          <td className="p-3">Spicy German sausages</td>
                          <td className="p-3">¥750</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Beef Curry</td>
                          <td className="p-3">ビーフカレー</td>
                          <td className="p-3">Tender stewed beef</td>
                          <td className="p-3">¥1,080</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Double Katsu Curry</td>
                          <td className="p-3">ダブルカツカレー</td>
                          <td className="p-3">Breaded pork + chicken</td>
                          <td className="p-3">¥1,200</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Special Curries */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">🌟 Energetic Specialties</h3>
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
                          <td className="p-3 font-medium">King Kong Curry</td>
                          <td className="p-3">キングコングカレー</td>
                          <td className="p-3">Mega mix: katsu + hamburg + sausage</td>
                          <td className="p-3">¥1,580</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Energy Explosion</td>
                          <td className="p-3">エナジー爆発</td>
                          <td className="p-3">Triple meat + vegetables + egg</td>
                          <td className="p-3">¥1,680</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Black Thunder</td>
                          <td className="p-3">ブラックサンダー</td>
                          <td className="p-3">Black curry MAX intensity + chili</td>
                          <td className="p-3">¥780</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Gorilla Power</td>
                          <td className="p-3">ゴリラパワー</td>
                          <td className="p-3">Giant portion + double protein</td>
                          <td className="p-3">¥1,480</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Samurai Spirit</td>
                          <td className="p-3">サムライスピリット</td>
                          <td className="p-3">Katsu + egg + pickled vegetables</td>
                          <td className="p-3">¥1,080</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Sides and Extras */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">➕ Energetic Sides</h3>
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
                          <td className="p-3 font-medium">Extra curry sauce</td>
                          <td className="p-3">カレー追加</td>
                          <td className="p-3">Additional black sauce</td>
                          <td className="p-3">¥180</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Extra rice</td>
                          <td className="p-3">ライス追加</td>
                          <td className="p-3">Additional portion of rice</td>
                          <td className="p-3">¥150</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Fried egg</td>
                          <td className="p-3">目玉焼き</td>
                          <td className="p-3">Fried egg on top of curry</td>
                          <td className="p-3">¥120</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Energetic salad</td>
                          <td className="p-3">エナジーサラダ</td>
                          <td className="p-3">Crispy vitamin-rich vegetables</td>
                          <td className="p-3">¥380</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Melted cheese</td>
                          <td className="p-3">チーズトッピング</td>
                          <td className="p-3">Melted cheese on curry</td>
                          <td className="p-3">¥200</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Pickled vegetables</td>
                          <td className="p-3">ピクルス</td>
                          <td className="p-3">Sour cabbage and cucumber</td>
                          <td className="p-3">¥250</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Energetic Sets */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">⚡ Energetic Sets</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-yellow-600 mb-3">Power Sets</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>Champion Set</strong> - Captain curry + salad + drink (¥1,080)</li>
                        <li>• <strong>Gorilla Set</strong> - Gorilla curry + egg + vegetables (¥1,580)</li>
                        <li>• <strong>Explosion Set</strong> - Energy explosion + all extras (¥1,980)</li>
                        <li>• <strong>Discovery Set</strong> - Go!Go! + sausage + drink (¥850)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-yellow-600 mb-3">Quick Formulas</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>Quick Power</strong> - Major curry + drink (¥850)</li>
                        <li>• <strong>Business Set</strong> - Katsu curry + salad (¥1,050)</li>
                        <li>• <strong>Student Energy</strong> - Go!Go! + egg + tea (¥750)</li>
                        <li>• <strong>Double Strength</strong> - Two basic curries (¥1,000)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Energetic Drinks */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4">🥤 Energetic Drinks</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-medium text-yellow-600 mb-3">Hot Drinks</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Strong Coffee</strong> - ¥250</li>
                        <li>• <strong>Energizing Black Tea</strong> - ¥200</li>
                        <li>• <strong>Spiced Chai</strong> - ¥300</li>
                        <li>• <strong>Hot Chocolate</strong> - ¥350</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-yellow-600 mb-3">Energy Drinks</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Energy Cola</strong> - ¥300</li>
                        <li>• <strong>Energy Drink</strong> - ¥400</li>
                        <li>• <strong>Vitamin Juice</strong> - ¥350</li>
                        <li>• <strong>Sparkling Water</strong> - ¥250</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-yellow-600 mb-3">Specialties</h4>
                      <ul className="space-y-1 text-sm">
                        <li>• <strong>Gorilla Juice</strong> - ¥450</li>
                        <li>• <strong>Power Smoothie</strong> - ¥500</li>
                        <li>• <strong>Spiced Lassi</strong> - ¥380</li>
                        <li>• <strong>Japanese Beer</strong> - ¥450</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Service éclair */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Clock9 className="w-5 h-5 text-yellow-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Lightning-Fast 55-Second Service</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-yellow-800 mb-2">⚡ Timed Performance</h3>
                    <p className="text-yellow-700 text-sm mb-3">
                      Go!Go!Curry commits to serving all its dishes in less than 55 seconds 
                      flat after ordering. This technical feat revolutionizes 
                      Japanese fast food.
                    </p>
                    <ul className="text-yellow-700 text-sm space-y-1">
                      <li>• <strong>Less than 55 seconds</strong> - Timed promise</li>
                      <li>• <strong>Pre-heated curry</strong> - Maintained at optimal temperature</li>
                      <li>• <strong>Ready rice</strong> - Continuously cooked, never reheated</li>
                      <li>• <strong>Optimized system</strong> - Every action calculated</li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">🔧 Preparation System</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Black curry in heated vats</li>
                        <li>• Rice continuously cooked</li>
                        <li>• Pre-fried katsu, quickly reheated</li>
                        <li>• Optimized assembly</li>
                        <li>• Ultra-trained staff</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">📊 Quality Control</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Constant temperature verified</li>
                        <li>• Freshness guaranteed maximum 2h</li>
                        <li>• Continuous ingredient rotation</li>
                        <li>• Intensive staff training</li>
                        <li>• Timers in every kitchen</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium text-red-800 mb-2">🏆 Record Broken</h4>
                    <p className="text-sm text-red-700">
                      Go!Go!Curry's unofficial record is 38 seconds for a full katsu curry, 
                      set in the Shibuya restaurant. This exceptional performance 
                      demonstrates the efficiency of the lightning-fast preparation system 
                      without compromising taste quality.
                    </p>
                  </div>
                </div>
              </div>

              {/* Guide pratique */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Star className="w-5 h-5 text-yellow-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Guide to the Energetic Experience</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-green-800 mb-2">🎯 Essential First Visit</h3>
                    <ol className="text-green-700 text-sm space-y-1">
                      <li><strong>1.</strong> Order the classic Go!Go!Curry to discover the black</li>
                      <li><strong>2.</strong> Time the service: less than 55 seconds!</li>
                      <li><strong>3.</strong> Immerse yourself in the energetic rock ambiance</li>
                      <li><strong>4.</strong> Taste the difference with a classic curry</li>
                      <li><strong>5.</strong> Observe the gorilla decoration everywhere</li>
                    </ol>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">⚡ Beginner Energy Menu</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• <strong>Go!Go!Curry Basic</strong> - Discovery (¥580)</li>
                        <li>• <strong>Fried Egg</strong> - Classic supplement (¥120)</li>
                        <li>• <strong>Energetic Salad</strong> - Balance (¥380)</li>
                        <li>• <strong>Energetic Cola</strong> - Ambiance (¥300)</li>
                        <li><strong>Total: ¥1,380</strong> for the complete initiation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">🦁EConfirmed Gorilla Menu</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• <strong>King Kong Curry</strong> - Ultimate experience (¥1,580)</li>
                        <li>• <strong>Extra Sauce</strong> - Max intensity (¥180)</li>
                        <li>• <strong>Melted Cheese</strong> - Indulgence (¥200)</li>
                        <li>• <strong>Gorilla Juice</strong> - Signature drink (¥450)</li>
                        <li><strong>Total: ¥2,410</strong> for true warriors</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h4 className="font-medium text-purple-800 mb-2">🎵 Rock Ambiance Tips</h4>
                    <ul className="text-sm text-purple-700 space-y-1">
                      <li>• <strong>Loud music</strong> - Be prepared for high volume</li>
                      <li>• <strong>Energetic staff</strong> - Normal shouts of encouragement</li>
                      <li>• <strong>Gorilla decor</strong> - Look for all the hidden details</li>
                      <li>• <strong>Theatrical service</strong> - Participate in the collective energy</li>
                      <li>• <strong>Photos allowed</strong> - Immortalize the unique experience</li>
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
                    <Clock className="w-5 h-5 text-yellow-600 mt-0.5" />
                    <div>
                      <div className="font-medium">Hours</div>
                      <div className="text-sm text-gray-600">11:00 AM - 11:00 PM</div>
                      <div className="text-sm text-gray-500">Continuous service</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-yellow-600 mt-0.5" />
                    <div>
                      <div className="font-medium">Location</div>
                      <div className="text-sm text-gray-600">90+ restaurants Japan</div>
                      <div className="text-sm text-gray-500">Concentration Tokyo/Kanazawa</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CreditCard className="w-5 h-5 text-yellow-600 mt-0.5" />
                    <div>
                      <div className="font-medium">Payment</div>
                      <div className="text-sm text-gray-600">All cards accepted</div>
                      <div className="text-sm text-gray-500">Cash recommended</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Zap className="w-5 h-5 text-yellow-600 mt-0.5" />
                    <div>
                      <div className="font-medium">Average budget</div>
                      <div className="text-sm text-gray-600">¥800-1,500 per person</div>
                      <div className="text-sm text-gray-500">Guaranteed energy included</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Conseils pour les visiteurs */}
              <div className="bg-yellow-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-4">
                  ⚡ Tips for Visitors
                </h3>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-medium text-yellow-700">Unique experience</div>
                    <div className="text-yellow-600">Black curry found nowhere else</div>
                  </div>
                  
                  <div>
                    <div className="font-medium text-yellow-700">Record service</div>
                    <div className="text-yellow-600">55 seconds flat, impressive to watch</div>
                  </div>
                  
                  <div>
                    <div className="font-medium text-yellow-700">Rock ambiance</div>
                    <div className="text-yellow-600">High volume, communicative energy</div>
                  </div>
                  
                  <div>
                    <div className="font-medium text-yellow-700">Generous portions</div>
                    <div className="text-yellow-600">Filling, ideal after tiring visits</div>
                  </div>
                </div>
              </div>

              {/* Spécialité curry noir */}
              <div className="bg-gray-900 text-white rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-3">
                  ⚫ Black Curry Explained
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-medium text-gray-300">Unique color</div>
                    <div className="text-gray-400">Roasted spices + black bean paste</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-300">Distinctive taste</div>
                    <div className="text-gray-400">More complex than classic curry</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-300">Thick texture</div>
                    <div className="text-gray-400">Coats rice well, substantial</div>
                  </div>
                  <div>
                    <div className="font-medium text-gray-300">Energizing effect</div>
                    <div className="text-gray-400">Stimulating spices, guaranteed boost</div>
                  </div>
                </div>
              </div>

              {/* Univers gorille */}
              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-green-800 mb-3">
                  🦁EThe Gorilla Universe
                </h3>
                <p className="text-sm text-green-700 mb-3">
                  Go!Go!Curry adopted the gorilla as a symbol of raw strength and energy. 
                  This omnipresent mascot creates a unique visual identity 
                  in the world of Japanese curry.
                </p>
                <ul className="text-sm text-green-600 space-y-1">
                  <li>• Figurines in every restaurant</li>
                  <li>• King Kong style posters</li>
                  <li>• Staff sometimes roars</li>
                  <li>• Menu with primate references</li>
                  <li>• Urban jungle ambiance</li>
                </ul>
              </div>

              {/* Liens utiles */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
                <div className="space-y-2">
                  <a href="https://www.gogocurry.com/" 
                     className="block text-yellow-600 hover:text-yellow-700 text-sm">
                    ↁEOfficial Go!Go!Curry Site
                  </a>
                  <a href="/dish-types/curry" 
                     className="block text-orange-600 hover:text-orange-700 text-sm">
                    ↁEComplete Japanese Curry Guide
                  </a>
                  <a href="/chaines/coco-ichibanya" 
                     className="block text-orange-600 hover:text-orange-700 text-sm">
                    ↁECompare with CoCo Ichibanya
                  </a>
                  <a href="/chaines/sukiya" 
                     className="block text-orange-600 hover:text-orange-700 text-sm">
                    ↁESee Sukiya Curry
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



