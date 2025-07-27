import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Flame, Heart, Crown, Zap } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Tenkaippin 天下一品E| Kotteri Ramen | Japan Food Chains",
  description: "Ultra-rich kotteri broth from Kyoto. A unique and intense experience that's never forgotten.",
  keywords: [
    'tenkaippin', '天下一品E, 'kotteri ramen', 'creamy broth',
    'kyoto ramen', 'traditional ramen', 'kotteri ramen',
    'rich broth', 'authentic ramen', 'kyoto specialty'
  ],
  openGraph: {
    title: "Tenkaippin 天下一品E| Kotteri Ramen | Japan Food Chains",
    description: "Ultra-rich kotteri broth from Kyoto. A unique and intense experience that's never forgotten.",
    type: 'article',
    locale: "en_US",
    siteName: "Japan Food Chains - Japanese Restaurant Guide"
  },
  alternates: {
    canonical: '/chains/tenkaippin',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  },
};

export default function TenkaippinPage() {
  return (
    <>
      <ChainViewTracker chainName="tenkaippin" chainCategory="ramen" />
      <div className="min-h-screen bg-gray-50">
      {/* Header with back button */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/dish-types/ramen" 
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Ramen
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-yellow-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">天</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Tenkaippin</h1>
              <p className="text-lg text-gray-600">天下一品E| てんかぁE��ぴめE/p>
              <p className="text-sm text-gray-500">Japan's richest and creamiest "kotteri" ramen</p>
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
                  <strong>Tenkaippin (天下一品E</strong> is Japan's most iconic "kotteri" (ultra-rich) ramen chain. 
                  Founded in 1971 in Kyoto, this family-run chain has built its reputation on an extraordinarily 
                  rich broth that divides opinions: you either love it or hate it, but no one remains indifferent 
                  to this unique culinary experience.
                </p>
                
                <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-yellow-800 mb-2">🏆 The king of "kotteri"</h3>
                  <ul className="text-yellow-700 space-y-1">
                    <li>• <strong>Ultra-rich broth</strong> - Maximum concentration of collagen and fat</li>
                    <li>• <strong>Unique texture</strong> - Almost solid, coats noodles like a sauce</li>
                    <li>• <strong>Secret recipe</strong> - Cooking process jealously guarded for 50 years</li>
                    <li>• <strong>Passionate clientele</strong> - Absolute fans called "Ten-chan addicts"</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold mb-3">🎯 A polarizing experience</h3>
                <p className="mb-4">
                  Tenkaippin isn't a ramen for everyone. Its extremely rich broth is so unique that it creates 
                  two distinct camps: those who become completely addicted and return several times a week, and 
                  those who can't finish their bowl. This polarization is part of the brand's identity.
                </p>

                <h3 className="text-xl font-semibold mb-3">🏮 Kyoto origins</h3>
                <p className="mb-4">
                  Born in the former imperial capital, Tenkaippin developed its unique style by drawing inspiration 
                  from traditional Kyoto culinary techniques while creating something revolutionary. The first 
                  restaurant, tiny with only 9 seats, already attracted long queues.
                </p>

                <h3 className="text-xl font-semibold mb-3">💪 Resistance to change</h3>
                <p className="mb-4">
                  Unlike other chains that adapt their recipes to modern tastes, Tenkaippin has remained faithful 
                  to its original recipe for over 50 years. This absolute consistency is part of its charm and 
                  explains the exceptional loyalty of its customers.
                </p>
              </div>
            </div>

            {/* Detailed menu */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Utensils className="w-5 h-5 text-yellow-600" />
                <h2 className="text-2xl font-bold text-gray-900">Detailed Menu</h2>
              </div>

              {/* Fundamental choice */}
              <div className="mb-8">
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-yellow-800 mb-3">⚖︁EThe crucial choice: Kotteri vs Assari</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-3 rounded-lg">
                      <div className="font-medium text-yellow-700 mb-2">🔥 KOTTERI (こってめE</div>
                      <div className="text-sm text-yellow-600">The famous ultra-rich broth that's Tenkaippin's signature. Thick, creamy, completely coats the noodles. Intense and unique experience.</div>
                    </div>
                    <div className="bg-white p-3 rounded-lg">
                      <div className="font-medium text-blue-700 mb-2">💧 ASSARI (あっさり)</div>
                      <div className="text-sm text-blue-600">Lighter version of the broth, but still richer than average. For those who find kotteri too intense.</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main ramen */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🍜 Main Ramen</h3>
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
                        <td className="p-3 font-medium">Kotteri Ramen</td>
                        <td className="p-3">ラーメン�E�こってり！E/td>
                        <td className="p-3">The legendary ultra-rich signature ramen</td>
                        <td className="p-3">¥770</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Assari Ramen</td>
                        <td className="p-3">ラーメン�E�あっさり�E�E/td>
                        <td className="p-3">Lighter version but still flavorful</td>
                        <td className="p-3">¥770</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Chashu-men Kotteri</td>
                        <td className="p-3">チャーシュー麺�E�こってり！E/td>
                        <td className="p-3">Kotteri with generous portions of braised pork</td>
                        <td className="p-3">¥1,100</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Menma Ramen</td>
                        <td className="p-3">メンマラーメン</td>
                        <td className="p-3">With crispy fermented bamboo shoots</td>
                        <td className="p-3">¥880</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Negi Ramen</td>
                        <td className="p-3">ネギラーメン</td>
                        <td className="p-3">With generous portion of green onions</td>
                        <td className="p-3">¥880</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Customization options */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🎛�E�ETenkaippin Customization</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-yellow-600 mb-3">Classic toppings</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Extra Chashu</strong> - ¥350 (tender pork)</li>
                      <li>• <strong>Ajitsuke Soft-boiled Egg</strong> - ¥120 (marinated 24h)</li>
                      <li>• <strong>Premium Menma</strong> - ¥150 (fermented bamboo)</li>
                      <li>• <strong>White Negi</strong> - ¥100 (green onions)</li>
                      <li>• <strong>Nori</strong> - ¥100 (grilled seaweed)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-yellow-600 mb-3">Special options</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Extra kotteri</strong> - ¥100 (even richer)</li>
                      <li>• <strong>Moyashi</strong> - ¥80 (crunchy bean sprouts)</li>
                      <li>• <strong>Grated garlic</strong> - ¥80 (extra intensity)</li>
                      <li>• <strong>Kaedama</strong> - ¥130 (extra noodles)</li>
                      <li>• <strong>Black pepper</strong> - Free (flavors the broth)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Side dishes */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">🥁EPopular Side Dishes</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 font-medium">Name</th>
                        <th className="text-left p-3 font-medium">Description</th>
                        <th className="text-left p-3 font-medium">Price</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-3 font-medium">Gyoza (5 pieces)</td>
                        <td className="p-3">Crispy pork-vegetable dumplings</td>
                        <td className="p-3">¥280</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Karaage</td>
                        <td className="p-3">Japanese fried chicken, tender and juicy</td>
                        <td className="p-3">¥400</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">White rice</td>
                        <td className="p-3">To absorb the rich broth</td>
                        <td className="p-3">¥120</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Kimchi</td>
                        <td className="p-3">Spicy fermented cabbage, cuts through richness</td>
                        <td className="p-3">¥200</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* The secret of kotteri */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Crown className="w-5 h-5 text-yellow-600" />
                <h2 className="text-2xl font-bold text-gray-900">The Secret of Kotteri Broth</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-amber-800 mb-2">🔥 Extreme concentration process</h3>
                  <p className="text-amber-700 text-sm mb-3">
                    Tenkaippin's kotteri broth undergoes a unique cooking and concentration process
                  </p>
                  <ol className="text-amber-700 text-sm space-y-1">
                    <li><strong>1.</strong> Initial cooking of pork and chicken bones for 24h</li>
                    <li><strong>2.</strong> Concentration through controlled evaporation</li>
                    <li><strong>3.</strong> Addition of separately simmered vegetables</li>
                    <li><strong>4.</strong> Blending to create ultra-thick emulsion</li>
                    <li><strong>5.</strong> Final aging for several hours</li>
                  </ol>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🌟 Unique characteristics</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Almost solid texture at room temperature</li>
                      <li>• Opaque off-white color</li>
                      <li>• Completely adheres to noodles</li>
                      <li>• Extremely concentrated umami taste</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">⚗︁EMysterious composition</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Base of pork and chicken bones</li>
                      <li>• Secret blend of vegetables</li>
                      <li>• Maximum collagen concentration</li>
                      <li>• Proprietary reduction techniques</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Tasting guide */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="w-5 h-5 text-yellow-600" />
                <h2 className="text-2xl font-bold text-gray-900">How to Appreciate Kotteri</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-red-800 mb-2">🍜 Optimal tasting technique</h3>
                  <p className="text-red-700 text-sm mb-3">
                    Kotteri requires a specific approach to be fully appreciated
                  </p>
                  <ol className="text-red-700 text-sm space-y-1">
                    <li><strong>1.</strong> Do NOT immediately mix the broth</li>
                    <li><strong>2.</strong> First take a sip of pure broth</li>
                    <li><strong>3.</strong> Let the richness coat your palate</li>
                    <li><strong>4.</strong> Only then mix and eat the noodles</li>
                    <li><strong>5.</strong> Alternate between noodles and broth</li>
                  </ol>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">✁ETips for beginners</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Start with half a bowl if you're hesitant</li>
                      <li>• Order rice to "cut" the richness</li>
                      <li>• Drink green tea between sips</li>
                      <li>• Take your time, this isn't fast food</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🚫 Mistakes to avoid</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Don't force it if you don't like it</li>
                      <li>• Avoid eating too quickly</li>
                      <li>• Don't order alcohol with it</li>
                      <li>• Don't expect a "normal" ramen</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Tenkaippin culture */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="w-5 h-5 text-yellow-600" />
                <h2 className="text-2xl font-bold text-gray-900">"Ten-chan" Culture</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-yellow-600 mb-3">👥 Passionate community</h3>
                  <ul className="text-sm space-y-2">
                    <li><strong>Absolute fans</strong> - Nicknamed "Ten-chan addicts"</li>
                    <li><strong>Personal rituals</strong> - Everyone has their own way to enjoy</li>
                    <li><strong>High frequency</strong> - Some come daily</li>
                    <li><strong>Transmission</strong> - Parents initiating their children</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-yellow-600 mb-3">🎌 Strong identity</h3>
                  <ul className="text-sm space-y-2">
                    <li><strong>No compromise</strong> - No adaptation to trends</li>
                    <li><strong>Nostalgic atmosphere</strong> - Decor unchanged for decades</li>
                    <li><strong>Family service</strong> - Relaxed and warm atmosphere</li>
                    <li><strong>Total authenticity</strong> - 100% Japanese, 100% traditional</li>
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
                    <div className="text-sm text-gray-600">11:30 AM - 2:00 AM (general)</div>
                    <div className="text-sm text-gray-500">Often open very late</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-sm text-gray-600">250+ restaurants</div>
                    <div className="text-sm text-gray-500">Mainly in Kansai region</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CreditCard className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Payment</div>
                    <div className="text-sm text-gray-600">Mainly cash</div>
                    <div className="text-sm text-gray-500">Some cards accepted</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-yellow-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Average price</div>
                    <div className="text-sm text-gray-600">¥800-1,200 per person</div>
                    <div className="text-sm text-gray-500">Excellent value for money</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Compatibility test */}
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-4">
                🧪 Compatibility Test
              </h3>
              
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-yellow-700">Do you like rich dishes?</div>
                  <div className="text-yellow-600">Cheese, creams, generous sauces = probable compatibility</div>
                </div>
                
                <div>
                  <div className="font-medium text-yellow-700">Looking for something light?</div>
                  <div className="text-yellow-600">Tenkaippin is definitely NOT for you</div>
                </div>
                
                <div>
                  <div className="font-medium text-yellow-700">First time?</div>
                  <div className="text-yellow-600">Order assari or share a kotteri between two people</div>
                </div>
                
                <div>
                  <div className="font-medium text-yellow-700">Sensitive stomach?</div>
                  <div className="text-yellow-600">Absolutely avoid, it's very heavy to digest</div>
                </div>
              </div>
            </div>

            {/* Comparison */}
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">
                📊 Vs other ramen
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-orange-700">Vs Ippudo</div>
                  <div className="text-orange-600">Total opposite: traditional vs modern, heavy vs balanced</div>
                </div>
                <div>
                  <div className="font-medium text-orange-700">Vs Ichiran</div>
                  <div className="text-orange-600">More social but incomparably richer broth</div>
                </div>
                <div>
                  <div className="font-medium text-orange-700">Unique positioning</div>
                  <div className="text-orange-600">Extreme experience, no compromise</div>
                </div>
              </div>
            </div>

            {/* Cultural note */}
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-3">
                🏮 Cultural Note
              </h3>
              <p className="text-sm text-green-700">
                Tenkaippin represents the traditional soul of Japanese ramen: no concession to trends, 
                absolute fidelity to the original recipe, and creation of a passionate community. 
                It's the antithesis of culinary globalization, a 100% Japanese and authentic experience 
                that doesn't seek to please everyone.
              </p>
            </div>

            {/* Useful links */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
              <div className="space-y-2">
                <a href="https://www.tenkaippin.co.jp/" 
                   className="block text-yellow-600 hover:text-yellow-700 text-sm">
                  ↁEOfficial Tenkaippin website
                </a>
                <a href="/dish-types/ramen" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  ↁEComplete ramen guide
                </a>
                <a href="/chains/ippudo" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  ↁECompare with Ippudo
                </a>
                <a href="/chains/ichiran" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  ↁECompare with Ichiran
                </a>              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}



