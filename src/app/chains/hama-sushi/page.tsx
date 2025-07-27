import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Gamepad2, Gift, Shield, Smartphone, DollarSign, Zap } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Hama Sushi はま寿司 | ¥110 + 5 Soy Sauces | Japan Chains",
  description: "Most affordable kaiten-zushi. Most plates ¥110, 5 regional soy sauces.",
  keywords: [
    'hama sushi', 'はま寿司', 'kaiten-zushi', 'conveyor belt sushi',
    'touch screen order', 'affordable prices', 'fresh sushi',
    'ramen available', 'fast service', 'varied menu'
  ],
  openGraph: {
    title: "Hama Sushi はま寿司 | ¥110 + 5 Soy Sauces | Japan Chains",
    description: "Most affordable kaiten-zushi. Most plates ¥110, 5 regional soy sauces.",
    type: 'article',
    locale: "en_US",
    siteName: "Japan Chains - Guide to Japanese Restaurants"
  },
  alternates: {
    canonical: '/chains/hama-sushi',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  },
};

export default function HamaSushiPage() {
  return (
    <>
      <ChainViewTracker chainName="hama-sushi" chainCategory="kaiten-zushi" />
      <div className="min-h-screen bg-gray-50">
      {/* Header with back button */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/dish-types/kaiten-zushi" 
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Kaiten-zushi
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-green-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">は</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Hama Sushi</h1>
              <p className="text-lg text-gray-600">はま寿司 | 濱寿司</p>
              <p className="text-sm text-gray-500">Japan's most affordable kaiten-zushi</p>
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
                  <strong>Hama Sushi (はま寿司)</strong> represents a true <strong>technological revolution 
                  in the world of Japanese dining</strong>. Imagine being able to enjoy fresh, professional-quality 
                  sushi at the same price as a cup of coffee, served by robots 
                  in a restaurant of the future. This is <strong>the kaiten-zushi chain that has democratized 
                  sushi in Japan</strong> with over 600 restaurants across the country.
                </p>
                
                <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg mb-6 border border-green-200">
                  <h3 className="font-semibold text-green-800 mb-4">🚀 The Hama Sushi Revolution: Technology + Tradition</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">💰 Revolutionary Pricing</h4>
                      <ul className="text-green-700 space-y-1 text-sm">
                        <li>• <strong>¥110 per plate</strong> - 90% of the menu at the same ultra-accessible price</li>
                        <li>• <strong>Unbeatable value</strong> - High standards maintained</li>
                        <li>• <strong>Complete democratization</strong> - Sushi accessible to all budgets</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">🤁ETechnological Innovation</h4>
                      <ul className="text-blue-700 space-y-1 text-sm">
                        <li>• <strong>Pepper Robots</strong> - Automated multilingual welcome</li>
                        <li>• <strong>High-speed direct line</strong> - Express delivery to your table</li>
                        <li>• <strong>Predictive AI</strong> - Stock optimization and freshness</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold mb-3">🎯 The Secret of the MMD System (Mass Merchandising)</h3>
                <p className="mb-4">
                  The <strong>revolutionary MMD system</strong> developed by the Zensho Group allows Hama Sushi 
                  to control <strong>the entire supply chain</strong>: from fishing and 
                  farming to your plate. This unique vertical integration eliminates all 
                  intermediaries, enabling unbeatable prices while maintaining consistent 
                  quality.
                </p>

                <h3 className="text-xl font-semibold mb-3">📱 The Future Restaurant Experience</h3>
                <p className="mb-4">
                  Hama Sushi transforms every meal into an <strong>immersive technological experience</strong>. 
                  From the moment you arrive, Pepper robots welcome you in multiple languages, then you 
                  order on HD touch tablets before watching your sushi arrive on a 
                  <strong>high-speed direct line</strong> - like a miniature Shinkansen for your table!
                </p>

                <h3 className="text-xl font-semibold mb-3">🍣 Culinary Philosophy: Accessibility & Excellence</h3>
                <p className="mb-4">
                  Hama Sushi's mission transcends simple dining: <strong>democratize Japanese 
                  sushi culture</strong> by making this thousand-year-old culinary tradition accessible to all, 
                  without compromising on quality. Every restaurant uses <strong>100% Japanese rice</strong>, 
                  traditional techniques like <strong>Ikejime</strong> for fish freshness, 
                  and even offers a unique <strong>"5 soy sauce tasting"</strong> experience.
                </p>
              </div>
            </div>

            {/* Detailed Menu */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Utensils className="w-5 h-5 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Detailed Menu</h2>
              </div>

              {/* 5 Soy Sauce Tasting */}
              <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-6 rounded-lg mb-6 border border-amber-200">
                <h3 className="font-semibold text-amber-800 mb-4">🥢 Unique Experience: 5 Soy Sauce Tasting</h3>
                <p className="text-amber-700 mb-4 text-sm">
                  Hama Sushi offers a unique gastronomic experience: <strong>5 different soy sauces</strong> 
                  at each table, like a sommelier offering different wines. Discover the regional subtleties of Japan!
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div className="bg-white p-3 rounded-lg">
                    <div className="font-semibold text-gray-900 text-sm">特製だし�E油</div>
                    <div className="text-xs text-gray-600 mb-1">Special dashi sauce</div>
                    <div className="text-xs text-amber-700">Intense umami, perfect for white fish</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="font-semibold text-gray-900 text-sm">関東風濁E��醤油</div>
                    <div className="text-xs text-gray-600 mb-1">KantŁEthick sauce</div>
                    <div className="text-xs text-amber-700">Traditional Tokyo style, for tuna and salmon</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="font-semibold text-gray-900 text-sm">北海道�E币E�E油</div>
                    <div className="text-xs text-gray-600 mb-1">HokkaidŁEkombu sauce</div>
                    <div className="text-xs text-amber-700">Sweet and marine, ideal for seafood</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="font-semibold text-gray-900 text-sm">九州風さしみ醤油</div>
                    <div className="text-xs text-gray-600 mb-1">Kyūshū sashimi sauce</div>
                    <div className="text-xs text-amber-700">Sweeter, complements delicate sushi</div>
                  </div>
                  <div className="bg-white p-3 rounded-lg">
                    <div className="font-semibold text-gray-900 text-sm">四国風めE��ぽんず</div>
                    <div className="text-xs text-gray-600 mb-1">Shikoku yuzu ponzu</div>
                    <div className="text-xs text-amber-700">Tangy and fresh, reveals subtle flavors</div>
                  </div>
                </div>
              </div>

              {/* Simplified pricing system */}
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg mb-6">
                <h3 className="font-semibold text-green-800 mb-3">💸 Ultra-simplified pricing system</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="text-center bg-white p-3 rounded-lg">
                    <div className="w-8 h-8 bg-green-500 rounded-full mx-auto mb-2"></div>
                    <div className="text-lg font-bold text-green-600">¥110</div>
                    <div className="text-sm text-gray-600">90% of menu</div>
                  </div>
                  <div className="text-center bg-white p-3 rounded-lg">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full mx-auto mb-2"></div>
                    <div className="text-lg font-bold text-yellow-600">¥165</div>
                    <div className="text-sm text-gray-600">Premium specialties</div>
                  </div>
                  <div className="text-center bg-white p-3 rounded-lg">
                    <div className="w-8 h-8 bg-red-500 rounded-full mx-auto mb-2"></div>
                    <div className="text-lg font-bold text-red-600">¥220</div>
                    <div className="text-sm text-gray-600">Exceptional products</div>
                  </div>
                </div>
              </div>

              {/* Popular ¥110 sushi */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🍣 Popular Sushi (¥110)</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 font-medium">English Name</th>
                        <th className="text-left p-3 font-medium">日本誁E/th>
                        <th className="text-left p-3 font-medium">Description</th>
                        <th className="text-left p-3 font-medium">Recommended Sauce</th>
                        <th className="text-left p-3 font-medium">Price</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-3 font-medium">Ikejime Sea Bream</td>
                        <td className="p-3">活、E��だぁE/td>
                        <td className="p-3">Traditional technique, firm and sweet flesh</td>
                        <td className="p-3 text-xs text-amber-600">Special dashi</td>
                        <td className="p-3 text-green-600 font-medium">¥110</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Bluefin Tuna Maguro</td>
                        <td className="p-3">まぐろ</td>
                        <td className="p-3">40kg+ tuna, selected for quality</td>
                        <td className="p-3 text-xs text-amber-600">KantŁEthick</td>
                        <td className="p-3 text-green-600 font-medium">¥110</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Salmon</td>
                        <td className="p-3">サーモン</td>
                        <td className="p-3">Ice-water thawed, cut daily</td>
                        <td className="p-3 text-xs text-amber-600">HokkaidŁEkombu</td>
                        <td className="p-3 text-green-600 font-medium">¥110</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Yuzu-Salt Salmon</td>
                        <td className="p-3">サーモンめE��塩</td>
                        <td className="p-3">Modern innovation, citrus freshness</td>
                        <td className="p-3 text-xs text-amber-600">Yuzu ponzu</td>
                        <td className="p-3 text-green-600 font-medium">¥110</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Boiled Shrimp</td>
                        <td className="p-3">めE��え�E</td>
                        <td className="p-3">Cooked shrimp, sweet and crunchy</td>
                        <td className="p-3 text-xs text-amber-600">Kyūshū sashimi</td>
                        <td className="p-3 text-green-600 font-medium">¥110</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Grilled Duck</td>
                        <td className="p-3">合鴨</td>
                        <td className="p-3">Smoked meat, surprising pairing with rice</td>
                        <td className="p-3 text-xs text-amber-600">Special dashi</td>
                        <td className="p-3 text-green-600 font-medium">¥110</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Roast Beef</td>
                        <td className="p-3">ローストビーチE/td>
                        <td className="p-3">Tender beef, successful modern fusion</td>
                        <td className="p-3 text-xs text-amber-600">KantŁEthick</td>
                        <td className="p-3 text-green-600 font-medium">¥110</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Chicken Karaage</td>
                        <td className="p-3">鶏�Eから揚げ</td>
                        <td className="p-3">Fried to order, perfect crispiness</td>
                        <td className="p-3 text-xs text-amber-600">Kyūshū sashimi</td>
                        <td className="p-3 text-green-600 font-medium">¥110</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Hama Sushi exclusive specialties */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">⭁EExclusive Hama Sushi Specialties</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-green-600 mb-3">🔥 Aburi Sushi (Lightly Seared)</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>White tuna steak-style</strong> - Grilled surface, tender center</li>
                      <li>• <strong>Aburi salmon</strong> - Traditional torch technique</li>
                      <li>• <strong>Yuzu squid tempura</strong> - Freshness and crunch</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <h4 className="font-bold text-green-600 mb-3">🍲 Hot Side Dishes</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Chawanmushi</strong> - Savory custard with shiitake mushrooms</li>
                      <li>• <strong>Authentic ramen</strong> - 12-hour simmered broth</li>
                      <li>• <strong>Fresh udon</strong> - Made daily noodles</li>
                      <li>• <strong>Crispy fries</strong> - HokkaidŁEpotatoes</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Children's menu with Gachapon */}
              <div className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-lg mb-6 border border-pink-200">
                <h3 className="font-semibold text-pink-800 mb-4">🎁 "Hamakko Set" - Magic Children's Menu</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">🍜 Complete Menu</h4>
                    <ul className="text-pink-700 space-y-1 text-sm">
                      <li>• Udon or small ramen</li>
                      <li>• Crispy fries</li>
                      <li>• Choice of drink</li>
                      <li>• <strong>Magic Gachapon coin included!</strong></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">🎰 Gachapon Machine</h4>
                    <p className="text-pink-700 text-sm">
                      Each children's menu includes a special coin to operate the restaurant's Gachapon 
                      machine and win a surprise toy! An unforgettable experience that 
                      transforms the meal into an adventure.
                    </p>
                  </div>
                </div>
              </div>

              {/* Premium options */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">⭁EPremium Options</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 font-medium">Product</th>
                        <th className="text-left p-3 font-medium">Description</th>
                        <th className="text-left p-3 font-medium">Price</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-3 font-medium">Lightly Grilled Salmon</td>
                        <td className="p-3">Lightly grilled salmon, unique texture</td>
                        <td className="p-3 text-yellow-600 font-medium">¥165</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Grilled Eel</td>
                        <td className="p-3">Traditional unagi, tare sauce</td>
                        <td className="p-3 text-yellow-600 font-medium">¥165</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Fatty Tuna (Chu-toro)</td>
                        <td className="p-3">Tuna belly, exceptional melt-in-mouth</td>
                        <td className="p-3 text-red-600 font-medium">¥220</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Sea Urchin</td>
                        <td className="p-3">Quality uni, creamy</td>
                        <td className="p-3 text-red-600 font-medium">¥220</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Complete usage guide */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Smartphone className="w-5 h-5 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Complete Guide: Your First Hama Sushi Visit</h2>
              </div>
              
              <div className="space-y-8">
                {/* Step 1: Robot Welcome */}
                <div className="border-l-4 border-green-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">STEP 1: Welcome by Pepper Robot 🤁E/h3>
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
                    <p className="text-gray-700 mb-3">
                      From the moment you enter, a <strong>humanoid Pepper robot</strong> welcomes you! This isn't 
                      science fiction, it's the daily reality at Hama Sushi.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-2">🗣�E�EAvailable Languages</h4>
                        <ul className="text-sm text-blue-700 space-y-1">
                          <li>• Japanese (default)</li>
                          <li>• <strong>English</strong> - Touch "English"</li>
                          <li>• <strong>Chinese</strong> - 简体中斁Eavailable</li>
                          <li>• Intuitive touch interface</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-2">📝 Simple Selections</h4>
                        <ol className="text-sm text-blue-700 space-y-1">
                          <li><strong>1.</strong> Number of people (1-8)</li>
                          <li><strong>2.</strong> Seat type: Table or Counter</li>
                          <li><strong>3.</strong> Get your numbered ticket</li>
                          <li><strong>4.</strong> Wait for the call on screen</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 2: Installation */}
                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">STEP 2: Your Personalized Sushi Station 🍵</h3>
                  <div className="bg-gradient-to-r from-green-50 to-yellow-50 p-4 rounded-lg">
                    <p className="text-gray-700 mb-3">
                      Each seat is a <strong>complete station</strong> equipped with everything necessary for your optimal experience.
                    </p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white p-3 rounded-lg border">
                        <h4 className="font-semibold text-green-800 mb-2">🍵 Unlimited Green Tea</h4>
                        <p className="text-sm text-green-700">
                          Tea powder + hot water tap. Serve yourself as much as you want, 
                          it's <strong>free and traditional</strong>!
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border">
                        <h4 className="font-semibold text-green-800 mb-2">🥢 5 Soy Sauces</h4>
                        <p className="text-sm text-green-700">
                          Dispensers with 5 regional sauces + fresh wasabi + 
                          <strong>gari (pickled ginger)</strong> unlimited.
                        </p>
                      </div>
                      <div className="bg-white p-3 rounded-lg border">
                        <h4 className="font-semibold text-green-800 mb-2">📱 HD Tablet</h4>
                        <p className="text-sm text-green-700">
                          Your personal command center. Multilingual interface with 
                          high-resolution photos of <strong>all dishes</strong>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 3: Ordering */}
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">STEP 3: Touch Tablet Ordering 📱</h3>
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-3">🌐 Multilingual Interface</h4>
                        <ol className="text-sm text-blue-700 space-y-2">
                          <li><strong>1.</strong> Touch the language button (top right corner)</li>
                          <li><strong>2.</strong> Select "English" or your language</li>
                          <li><strong>3.</strong> Browse categories with HD photos</li>
                          <li><strong>4.</strong> Each dish has its photo and description</li>
                          <li><strong>5.</strong> Price clearly displayed alongside</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-800 mb-3">⚙︁ECustomization Options</h4>
                        <ul className="text-sm text-blue-700 space-y-2">
                          <li>• <strong>"No wasabi"</strong> - Option available</li>
                          <li>• <strong>Allergies</strong> - Automatic filter</li>
                          <li>• <strong>Quantity</strong> - 1-10 pieces per order</li>
                          <li>• <strong>Anime voice</strong> - Change the voice guide!</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 4: Express Delivery */}
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">STEP 4: "Shinkansen" Express Delivery 🚄</h3>
                  <div className="bg-gradient-to-r from-red-50 to-orange-50 p-4 rounded-lg">
                    <p className="text-gray-700 mb-4">
                      The most spectacular experience! Your sushi arrives on a <strong>high-speed direct line</strong>, 
                      like a miniature train that races directly to your table.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-red-800 mb-2">⚡ Revolutionary System</h4>
                        <ul className="text-sm text-red-700 space-y-1">
                          <li>• <strong>Dedicated line</strong> - No rotation, direct!</li>
                          <li>• <strong>3 minutes max</strong> - From chef to your table</li>
                          <li>• <strong>Sound/visual alert</strong> - You won't miss anything</li>
                          <li>• <strong>Perfect hygiene</strong> - No one touches your dishes</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-red-800 mb-2">🎯 Unique Advantages</h4>
                        <ul className="text-sm text-red-700 space-y-1">
                          <li>• Absolute freshness guaranteed</li>
                          <li>• Zero cross-contamination</li>
                          <li>• Optimal temperature maintained</li>
                          <li>• Visual spectacle for children</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step 5: Payment */}
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">STEP 5: Smart & International Payment 💳</h3>
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-purple-800 mb-3">🖥�E�EModern Self-Service</h4>
                        <ol className="text-sm text-purple-700 space-y-1">
                          <li><strong>1.</strong> Touch "お会訁E (Payment) on the tablet</li>
                          <li><strong>2.</strong> Check the total displayed</li>
                          <li><strong>3.</strong> Take the printed ticket</li>
                          <li><strong>4.</strong> Go to counter or self-service</li>
                          <li><strong>5.</strong> Scan the ticket's QR code</li>
                        </ol>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple-800 mb-3">💳 Payment Methods</h4>
                        <div className="space-y-2 text-sm text-purple-700">
                          <div><strong>International cards:</strong> Visa, Mastercard, AMEX</div>
                          <div><strong>E-wallets:</strong> PayPay, Line Pay, Rakuten Pay</div>
                          <div><strong>IC Cards:</strong> Suica, Pasmo (transport)</div>
                          <div><strong>Cash:</strong> Yen accepted everywhere</div>
                          <div><strong>Contactless:</strong> Apple Pay, Google Pay</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Info className="w-5 h-5 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions (FAQ)</h2>
              </div>
              
              <div className="space-y-6">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">❁EI don't speak Japanese at all, can I really manage?</h3>
                  <p className="text-gray-700 text-sm">
                    <strong>Absolutely!</strong> Hama Sushi is designed to be <strong>100% usable without speaking Japanese</strong>. 
                    The Pepper robot welcomes you in English, the tablets have multilingual interfaces with HD photos, 
                    and even payment is self-service. You'll have practically no necessary verbal interaction.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">💰 Is it really that cheap? There's no catch?</h3>
                  <p className="text-gray-700 text-sm">
                    <strong>No catch!</strong> The MMD system (complete supply chain control) and advanced automation 
                    enable these revolutionary prices. The quality is real: 100% Japanese rice, fish treated with 
                    Ikejime technique, 5 artisanal soy sauces. It's the business model that's revolutionary, not a compromise on quality.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">🍣 Can I come alone without being looked down upon?</h3>
                  <p className="text-gray-700 text-sm">
                    <strong>Of course!</strong> In Japan, eating alone is <strong>perfectly normal and respected</strong>. Hama Sushi has 
                    many counter seats specially designed for solo diners. It's even ideal for a first experience 
                    because you can take your time without social pressure.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">🐟 My friend doesn't like raw fish, can they still enjoy it?</h3>
                  <p className="text-gray-700 text-sm">
                    <strong>Perfectly!</strong> Hama Sushi offers incredible variety: meat sushi (duck, roast beef), 
                    crispy tempura, authentic ramen, fresh udon, chicken karaage, and even fries! The menu is 
                    so diverse that people who don't like fish will find plenty to enjoy.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">🌍 What's the difference from sushi restaurants in other countries?</h3>
                  <p className="text-gray-700 text-sm">
                    The main difference is <strong>the overall experience</strong>. Beyond the price (3-4 times cheaper), it's a whole 
                    universe: welcome robots, express delivery line, 5 regional soy sauce tasting, Gachapon 
                    machine for children... It's a <strong>culinary amusement park</strong> as much as a restaurant!
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">📅 Do I need to make reservations? How to avoid waiting?</h3>
                  <p className="text-gray-700 text-sm">
                    Reservations not mandatory, but recommended on weekends. Use the <strong>"Hama Navi"</strong> app or website 
                    to reserve your place in the queue before arriving. You'll receive a notification when your table 
                    is ready, avoiding waiting on-site.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2">🍜 Are the hot side dishes really good?</h3>
                  <p className="text-gray-700 text-sm">
                    <strong>Excellent!</strong> The ramen uses a 12-hour simmered broth, udon are made fresh daily, 
                    and chawanmushi (savory custard) is a refined specialty. Hama Sushi doesn't compromise on the quality of their hot dishes, 
                    considering it what differentiates them from the competition.
                  </p>
                </div>
              </div>
            </div>

            {/* Economic advantages */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <DollarSign className="w-5 h-5 text-green-600" />
                <h2 className="text-2xl font-bold text-gray-900">The Hama Sushi Economic Miracle Explained</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-green-600 mb-3">💡 Optimization Strategies</h3>
                  <ul className="text-sm space-y-2">
                    <li><strong>Advanced automation</strong> - Reduces labor costs</li>
                    <li><strong>Bulk purchasing</strong> - Zensho Group power</li>
                    <li><strong>Strategic locations</strong> - Cheaper suburban rents</li>
                    <li><strong>Simplified menu</strong> - Less waste, more efficiency</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-green-600 mb-3">🎯 Business Model</h3>
                  <ul className="text-sm space-y-2">
                    <li><strong>High volume</strong> - Fast customer turnover</li>
                    <li><strong>Low margin, high volume</strong> - Low-cost philosophy</li>
                    <li><strong>Maximum standardization</strong> - Identical processes everywhere</li>
                    <li><strong>Continuous innovation</strong> - R&D investment</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 bg-green-50 p-4 rounded-lg">
                <h4 className="font-medium text-green-800 mb-2">💰 Economic meal example</h4>
                <div className="text-sm text-green-700">
                  <p><strong>Complete meal for ¥1,100:</strong></p>
                  <ul className="mt-2 space-y-1">
                    <li>• 8 various sushi (8 ÁE¥110 = ¥880)</li>
                    <li>• Free miso soup</li>
                    <li>• Free green tea</li>
                    <li>• Mochi dessert (¥110)</li>
                    <li>• Free gari (ginger) and wasabi</li>
                  </ul>
                  <p className="mt-2 font-medium">Total: ¥990 + tax = approximately ¥1,100</p>
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
                    <div className="text-sm text-gray-600">11:00 AM - 11:00 PM (general)</div>
                    <div className="text-sm text-gray-500">Some locations 24/7</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-sm text-gray-600">500+ restaurants</div>
                    <div className="text-sm text-gray-500">Mainly in suburbs</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CreditCard className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Payment</div>
                    <div className="text-sm text-gray-600">All cards accepted</div>
                    <div className="text-sm text-gray-500">E-wallets, IC cards</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Zap className="w-5 h-5 text-green-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Average price</div>
                    <div className="text-sm text-gray-600">¥1,000-1,500 per person</div>
                    <div className="text-sm text-gray-500">Most economical</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tips for visitors */}
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-4">
                💡 Tips for International Visitors
              </h3>
              
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-green-700">Tight budget</div>
                  <div className="text-green-600">Focus on ¥110 plates - excellent value for money</div>
                </div>
                
                <div>
                  <div className="font-medium text-green-700">First sushi experience</div>
                  <div className="text-green-600">Perfect for discovering without financial pressure</div>
                </div>
                
                <div>
                  <div className="font-medium text-green-700">With children</div>
                  <div className="text-green-600">Fusion options (karaage, hamburger) very popular</div>
                </div>
                
                <div>
                  <div className="font-medium text-green-700">Vegetarians</div>
                  <div className="text-green-600">Kappa-maki, inari, tamago available</div>
                </div>
              </div>
            </div>

            {/* Comparison */}
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                📊 Vs the competition
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-yellow-700">Vs Sushiro</div>
                  <div className="text-yellow-600">50% cheaper, slightly lower quality</div>
                </div>
                <div>
                  <div className="font-medium text-yellow-700">Vs Kura Sushi</div>
                  <div className="text-yellow-600">More economical, fewer games/entertainment</div>
                </div>
                <div>
                  <div className="font-medium text-yellow-700">Positioning</div>
                  <div className="text-yellow-600">The economical choice without major compromise</div>
                </div>
              </div>
            </div>

            {/* Cultural note */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">
                🏮 Cultural Note
              </h3>
              <p className="text-sm text-blue-700">
                Hama Sushi represents the democratization of sushi in Japan. By making this 
                traditional cuisine accessible to all budgets, the chain has contributed to making sushi 
                an everyday dish for Japanese families, transforming what was once 
                a luxury into an affordable family meal.
              </p>
            </div>

            {/* Useful links */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
              <div className="space-y-2">
                <a href="https://www.hamasushi.com/" 
                   className="block text-green-600 hover:text-green-700 text-sm">
                  ↁEOfficial Hama Sushi website
                </a>
                <a href="/dish-types/kaiten-zushi" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  ↁEComplete kaiten-zushi guide
                </a>
                <a href="/chains/sushiro" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  ↁECompare with Sushiro
                </a>
                <a href="/chains/kura-sushi" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  ↁECompare with Kura Sushi
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



