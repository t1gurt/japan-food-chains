import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Globe, Flame, ChefHat } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Ippudo 一風堁E| Premium Ramen | JapanChains",
  description: "Premium tonkotsu ramen. Hakata innovation, international quality, refined experience.",
  keywords: [
    'ippudo', '一風堁E, 'tonkotsu ramen', 'hakata ramen',
    'premium ramen', 'superior quality', 'authentic ramen',
    'hakata style', 'refined ramen', 'ramen innovation'
  ],
  openGraph: {
    title: "Ippudo 一風堁E| Premium Ramen | JapanChains",
    description: "Premium tonkotsu ramen. Hakata innovation, international quality, refined experience.",
    type: 'article',
    locale: "en_US",
    siteName: "JapanChains - Guide to Japanese Restaurant Chains"
  },
  alternates: {
    canonical: '/chains/ippudo',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  },
};

export default function IppudoPage() {
  return (
    <>
      <ChainViewTracker chainName="ippudo" chainCategory="ramen" />
      <div className="min-h-screen bg-gray-50">
      {/* Header with back link */}
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
            <div className="w-16 h-16 rounded-lg overflow-hidden">
              <img 
                src="/images/chaines/ippudo/ippudo-logo.jpg" 
                alt="Ippudo Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Ippudo</h1>
              <p className="text-lg text-gray-600">一風堁E| ぁE��ぷぁE��ぁE/p>
              <p className="text-sm text-gray-500">Pioneer of modern and international tonkotsu ramen</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Overview */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Info className="w-5 h-5 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900">Overview</h2>
              </div>
              
              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-gray-700 mb-4">
                  <strong>Ippudo (一風堁E</strong> is one of Japan's most prestigious and 
                  influential ramen chains. Founded in 1985 in Fukuoka by Shigemi Kawahara, Ippudo revolutionized 
                  the art of tonkotsu ramen by creating a modern, refined style accessible to the world. 
                  A true ambassador of Japanese ramen culture internationally.
                </p>
                
                <div className="bg-red-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-red-800 mb-2">🏆 Excellence of modern tonkotsu</h3>
                  <ul className="text-red-700 space-y-1">
                    <li>• <strong>Signature broth</strong> - 18 hours of slow cooking for perfect creamy tonkotsu</li>
                    <li>• <strong>Constant innovation</strong> - Fusion of tradition and contemporary creativity</li>
                    <li>• <strong>International presence</strong> - New York, Paris, London, Sydney and more</li>
                    <li>• <strong>Unique corporate culture</strong> - "Ganko Oyaji" (the stubborn chef spirit)</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold mb-3">🌟 Ippudo's cultural impact</h3>
                <p className="mb-4">
                  Ippudo is not just a ramen chain: it's a cultural phenomenon that democratized 
                  and modernized the perception of ramen. By introducing a more stylish and 
                  contemporary approach, while respecting traditions, Ippudo inspired a whole generation 
                  of ramen-ya and contributed to making ramen a globally recognized dish.
                </p>

                <h3 className="text-xl font-semibold mb-3">🌍 International expansion</h3>
                <p className="mb-4">
                  First to open authentic ramen restaurants abroad, Ippudo paved 
                  the way for internationalization of this cuisine. With over 100 restaurants worldwide, 
                  the chain adapts its recipes to local tastes while preserving the 
                  Japanese soul of its creations.
                </p>

                <h3 className="text-xl font-semibold mb-3">🎯 "Smile & Arigatou" philosophy</h3>
                <p className="mb-4">
                  Ippudo promotes a philosophy of warm hospitality where every customer should leave 
                  with a smile. This approach, combined with exceptional product quality, 
                  makes Ippudo a complete culinary experience rather than just a meal.
                </p>
              </div>
            </div>

            {/* Photos of signature dishes */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Star className="w-5 h-5 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900">Signature Dishes in Images</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {/* Shiromaru */}
                <div className="text-center">
                  <div className="relative rounded-lg overflow-hidden mb-3 h-48">
                    <img 
                      src="/images/chaines/ippudo/shiromaru-motoaji.jpg" 
                      alt="Shiromaru Motoaji - Original Ippudo tonkotsu ramen"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900">Shiromaru Motoaji</h3>
                  <p className="text-sm text-gray-600">白丸允E��</p>
                  <p className="text-xs text-gray-500 mt-1">Ippudo's original ramen with creamy and balanced tonkotsu broth</p>
                </div>

                {/* Akamaru */}
                <div className="text-center">
                  <div className="relative rounded-lg overflow-hidden mb-3 h-48">
                    <img 
                      src="/images/chaines/ippudo/akamaru-shinaji.jpg" 
                      alt="Akamaru Shinaji - Spicy Ippudo tonkotsu ramen"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900">Akamaru Shinaji</h3>
                  <p className="text-sm text-gray-600">赤丸新味</p>
                  <p className="text-xs text-gray-500 mt-1">Spicy version with red miso, garlic and fragrant oil for more complexity</p>
                </div>

                {/* Hitouchi Gyoza */}
                <div className="text-center">
                  <div className="relative rounded-lg overflow-hidden mb-3 h-48">
                    <img 
                      src="/images/chaines/ippudo/hitouchi-gyoza.jpg" 
                      alt="Hitouchi Gyoza - Ippudo signature gyoza"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="font-semibold text-gray-900">Hitouchi Gyoza</h3>
                  <p className="text-sm text-gray-600">ひとくち餁E��E/p>
                  <p className="text-xs text-gray-500 mt-1">Signature vegetable gyoza, perfectly crispy outside and juicy inside</p>
                </div>
              </div>
            </div>

            {/* Detailed menu */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Utensils className="w-5 h-5 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900">Detailed Menu</h2>
              </div>

              {/* Signature ramen */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🍜 Signature Ramen</h3>
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
                        <td className="p-3 font-medium">Shiromaru Motoaji</td>
                        <td className="p-3">白丸允E��</td>
                        <td className="p-3">Ippudo's original ramen, classic and balanced tonkotsu</td>
                        <td className="p-3">¥990</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Akamaru Shinaji</td>
                        <td className="p-3">赤丸新味</td>
                        <td className="p-3">Spicy version with red miso and garlic, more complex</td>
                        <td className="p-3">¥1,080</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Karaka-men</td>
                        <td className="p-3">からか麺</td>
                        <td className="p-3">Spicy ramen with red chili, for thrill seekers</td>
                        <td className="p-3">¥1,190</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Shiromaru Hakata Classic</td>
                        <td className="p-3">白丸博多クラシチE��</td>
                        <td className="p-3">Traditional Hakata version, more authentic</td>
                        <td className="p-3">¥950</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Ippudo Salad Ramen</td>
                        <td className="p-3">一風堂サラダラーメン</td>
                        <td className="p-3">Fresh version with vegetables, lighter broth</td>
                        <td className="p-3">¥1,280</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Premium toppings */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🥢 Premium Toppings</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-red-600 mb-3">Meat & Proteins</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Premium Chashu</strong> - ¥350 (pork braised 12h, tender)</li>
                      <li>• <strong>Chicken Chashu</strong> - ¥300 (tender marinated chicken)</li>
                      <li>• <strong>Ajitsuke Marinated Egg</strong> - ¥150 (perfect runny yolk)</li>
                      <li>• <strong>Menma Bamboo</strong> - ¥200 (crispy fermented shoots)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-600 mb-3">Vegetables & Extras</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>White Negi</strong> - ¥150 (finely sliced green onions)</li>
                      <li>• <strong>Premium Nori</strong> - ¥100 (superior quality seaweed)</li>
                      <li>• <strong>Crispy Moyashi</strong> - ¥120 (fresh bean sprouts)</li>
                      <li>• <strong>Grilled Garlic</strong> - ¥100 (delicately flavors the broth)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Kara-moyashi and crispy vegetables */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🌶�E�EKara-moyashi and Side Vegetables</h3>
                <div className="bg-red-50 p-4 rounded-lg mb-4">
                  <div className="flex items-start space-x-4">
                    <div className="rounded-lg overflow-hidden w-24 h-24 flex-shrink-0">
                      <img 
                        src="/images/chaines/ippudo/kara-moyashi.jpg" 
                        alt="Kara-moyashi - Spicy bean sprouts from Ippudo"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-red-800 mb-2">Kara-moyashi (辛もめE��) - Spicy bean sprouts</h4>
                      <p className="text-red-700 text-sm mb-2">
                        Ippudo specialty: bean sprouts marinated in spicy sauce. 
                        Can be enjoyed alone <strong>before the ramen</strong> as an appetizer or 
                        added during the meal to <strong>change the taste</strong> of the broth.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div>
                          <h5 className="font-medium text-red-700 mb-1">🍽�E�EAppetizer tasting</h5>
                          <ul className="text-red-600 text-xs space-y-1">
                            <li>• Eaten with chopsticks</li>
                            <li>• Prepare palate for ramen</li>
                            <li>• Stimulate appetite with spice</li>
                            <li>• Refreshing crispy texture</li>
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-red-700 mb-1">🔄 Usage for "taste change"</h5>
                          <ul className="text-red-600 text-xs space-y-1">
                            <li>• Added halfway through ramen</li>
                            <li>• Change flavor balance</li>
                            <li>• Add freshness and spice</li>
                            <li>• Rekindle taste interest</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <h5 className="font-medium text-blue-800 mb-2">🥬 Other side vegetables</h5>
                    <ul className="text-blue-700 text-sm space-y-1">
                      <li>• <strong>Negi</strong> - Finely sliced green onions</li>
                      <li>• <strong>Menma</strong> - Fermented bamboo shoots</li>
                      <li>• <strong>Kikurage</strong> - Black gelatinous mushrooms (seasonal)</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <h5 className="font-medium text-yellow-800 mb-2">💡 Tasting advice</h5>
                    <p className="text-yellow-700 text-sm">
                      <strong>Traditional method:</strong> Start with some kara-moyashi as appetizer, 
                      then add them to the ramen halfway through for a new flavor dimension.
                    </p>
                  </div>
                </div>
              </div>

              {/* Side dishes */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">🥁ESignature Side Dishes</h3>
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
                        <td className="p-3 font-medium">Hitouchi Gyoza (5pcs)</td>
                        <td className="p-3">Signature vegetable gyoza, crispy and juicy</td>
                        <td className="p-3">¥650</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Ippudo Fried Rice</td>
                        <td className="p-3">Ippudo-style fried rice with chashu</td>
                        <td className="p-3">¥850</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Spicy Cod Roe Rice</td>
                        <td className="p-3">Rice with spicy cod roe</td>
                        <td className="p-3">¥450</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* Condiments and seasonings */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Award className="w-5 h-5 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900">Condiments and Seasonings</h2>
              </div>
              
              <div className="mb-6">
                <div className="rounded-lg overflow-hidden h-64 md:h-96 mb-4">
                  <img 
                    src="/images/chaines/ippudo/condiments-station.jpg" 
                    alt="Ippudo condiment station with 5 seasonings"
                    className="w-full h-full object-contain md:object-cover"
                  />
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  Ippudo offers a carefully curated selection of condiments to personalize your ramen to your taste.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-800 mb-3">🥁EFor Gyoza</h3>
                  <ul className="text-orange-700 text-sm space-y-2">
                    <li>
                      <strong>Shoyu (醤油)</strong><br/>
                      <span className="text-xs">Soy sauce specially for dipping hitouchi gyoza</span>
                    </li>
                    <li>
                      <strong>Su (酢)</strong><br/>
                      <span className="text-xs">Rice vinegar for gyoza, perfect acidity for the wrapper</span>
                    </li>
                  </ul>
                  <div className="mt-2 p-2 bg-orange-100 rounded text-xs text-orange-800">
                    <strong>💡 Usage:</strong> Mix shoyu + vinegar for perfect gyoza sauce
                  </div>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-red-800 mb-3">🍜 For Ramen</h3>
                  <ul className="text-red-700 text-sm space-y-2">
                    <li>
                      <strong>Goma (胡麻)</strong><br/>
                      <span className="text-xs">Sesame seeds to grind fresh in the ramen</span>
                    </li>
                    <li>
                      <strong>Ramen Pepper (ラーメン専用ペッパ�E)</strong><br/>
                      <span className="text-xs">Specially blended pepper for ramen, aromatic complexity</span>
                    </li>
                  </ul>
                  <div className="mt-2 p-2 bg-red-100 rounded text-xs text-red-800">
                    <strong>⚡ Tip:</strong> Crush goma just before adding to release oils
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-3">🍜 Flavor concentrate</h3>
                  <ul className="text-green-700 text-sm space-y-2">
                    <li>
                      <strong>Ramen Dashi (ラーメンダシ)</strong><br/>
                      <span className="text-xs">Broth concentrate, to intensify umami and depth</span>
                    </li>
                  </ul>
                  <div className="mt-3 p-2 bg-green-100 rounded text-xs text-green-800">
                    <strong>💡 Tip:</strong> Concentrated dashi allows adjusting taste intensity without diluting the broth.
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-yellow-50 p-4 rounded-lg">
                <h3 className="font-semibold text-yellow-800 mb-3">💡 Condiment usage guide</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <h4 className="font-medium text-yellow-700 mb-2">🥁EFor Gyoza</h4>
                    <ul className="text-yellow-600 space-y-1">
                      <li>• Mix <strong>shoyu + vinegar</strong> (2:1 ratio)</li>
                      <li>• Dip each gyoza delicately</li>
                      <li>• Vinegar acidity cuts through the wrapper richness</li>
                      <li>• Perfect salty-acid balance</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-yellow-700 mb-2">🍜 For Ramen</h4>
                    <ul className="text-yellow-600 space-y-1">
                      <li>• <strong>Goma:</strong> Crush fresh with spoon</li>
                      <li>• <strong>Ramen dashi:</strong> Add at end of meal</li>
                      <li>• <strong>Pepper:</strong> A pinch for aroma</li>
                      <li>• Stir gently to preserve texture</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Art of tonkotsu */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <ChefHat className="w-5 h-5 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900">The Art of Ippudo Tonkotsu</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-orange-800 mb-2">🔥 The 18-hour process</h3>
                  <p className="text-orange-700 text-sm mb-3">
                    Ippudo's tonkotsu broth requires continuous cooking for 18 hours at high temperature
                  </p>
                  <ol className="text-orange-700 text-sm space-y-1">
                    <li><strong>1.</strong> Selection of Kyushu pork bones, rich in collagen</li>
                    <li><strong>2.</strong> Initial blanching to remove impurities</li>
                    <li><strong>3.</strong> Non-stop high rolling boil for 18 hours</li>
                    <li><strong>4.</strong> Perfect emulsion creating signature creamy texture</li>
                    <li><strong>5.</strong> Meticulous filtering for velvety consistency</li>
                  </ol>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🌟 Unique characteristics</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Characteristic milky white color</li>
                      <li>• Richness without excessive heaviness</li>
                      <li>• Perfect umami-fat balance</li>
                      <li>• Clean and satisfying aftertaste</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🎯 Ippudo innovations</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Precise temperature control</li>
                      <li>• Optimized collagen melting techniques</li>
                      <li>• Blend of bones from different pork parts</li>
                      <li>• Standardization for consistent quality</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Ordering system and branding */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-6">
                <TrendingUp className="w-5 h-5 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900">Ordering System and Visual Identity</h2>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Logo and branding */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">🏮 Ippudo Logo and Identity</h3>
                  <div className="rounded-lg overflow-hidden h-80 mb-4">
                    <img 
                      src="/images/chaines/ippudo/ippudo-logo.jpg" 
                      alt="Official Ippudo logo with Japanese character"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-red-50 p-3 rounded-lg">
                      <h4 className="font-medium text-red-800 mb-2">Logo meaning</h4>
                      <p className="text-red-700 text-sm">
                        The character <strong>「一、Eichi)</strong> symbolizes uniqueness and excellence. 
                        It represents Ippudo's quest for perfection in the art of ramen.
                      </p>
                    </div>
                    
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <h4 className="font-medium text-orange-800 mb-2">Modern design</h4>
                      <p className="text-orange-700 text-sm">
                        Clean typography combining Japanese tradition and contemporary aesthetics, 
                        reflecting Ippudo's philosophy of respectful modernization.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Ordering system */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">📱 Digital Ordering Tablet</h3>
                  <div className="rounded-lg overflow-hidden h-80 mb-4">
                    <img 
                      src="/images/chaines/ippudo/tablet-ordering.jpg" 
                      alt="Multilingual touch ordering tablet at Ippudo"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <h4 className="font-medium text-blue-800 mb-2">Multilingual interface</h4>
                      <p className="text-blue-700 text-sm">
                        Touch tablets available in Japanese, English and sometimes French 
                        in tourist restaurants. Intuitive interface with detailed photos.
                      </p>
                    </div>
                    
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h4 className="font-medium text-green-800 mb-2">Advanced customization</h4>
                      <p className="text-green-700 text-sm">
                        Complete customization system: noodle firmness, broth richness, 
                        individual toppings, side dishes. Integrated payment possible.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 bg-purple-50 p-4 rounded-lg">
                <h3 className="font-semibold text-purple-800 mb-3">🎯 Step-by-step ordering experience</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm">
                  <div className="text-center">
                    <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 border-2 border-purple-300">
                      <span className="text-purple-600 font-bold">1</span>
                    </div>
                    <div className="font-medium text-purple-700">Selection</div>
                    <div className="text-purple-600">Choose base ramen on tablet</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 border-2 border-purple-300">
                      <span className="text-purple-600 font-bold">2</span>
                    </div>
                    <div className="font-medium text-purple-700">Customization</div>
                    <div className="text-purple-600">Adjust noodles, broth, toppings</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 border-2 border-purple-300">
                      <span className="text-purple-600 font-bold">3</span>
                    </div>
                    <div className="font-medium text-purple-700">Side dishes</div>
                    <div className="text-purple-600">Add gyoza, flavored rice, drinks</div>
                  </div>
                  <div className="text-center">
                    <div className="bg-white rounded-full w-8 h-8 flex items-center justify-center mx-auto mb-2 border-2 border-purple-300">
                      <span className="text-purple-600 font-bold">4</span>
                    </div>
                    <div className="font-medium text-purple-700">Confirmation</div>
                    <div className="text-purple-600">Validate and make payment</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ordering guide */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Users className="w-5 h-5 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900">How to Order at Ippudo</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">📋 Ordering system</h3>
                  <p className="text-blue-700 text-sm mb-3">
                    Ippudo uses a counter ordering system with advanced customization
                  </p>
                  <ol className="text-blue-700 text-sm space-y-1">
                    <li><strong>1.</strong> Choose your base ramen (Shiromaru, Akamaru, etc.)</li>
                    <li><strong>2.</strong> Select noodle firmness (katamen, futsu, yawaramen)</li>
                    <li><strong>3.</strong> Adjust broth richness (assari to kotteri)</li>
                    <li><strong>4.</strong> Add your favorite toppings</li>
                    <li><strong>5.</strong> Order your side dishes</li>
                  </ol>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🍜 Noodle customization</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Katamen</strong> - Firm (recommended for beginners)</li>
                      <li>• <strong>Futsu</strong> - Normal (Japanese standard)</li>
                      <li>• <strong>Yawaramen</strong> - Soft (for regulars)</li>
                      <li>• <strong>Kaedama</strong> - Extra portion ¥200</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🥢 Ippudo etiquette</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Mix well before tasting</li>
                      <li>• Slurp noodles with sound (normal)</li>
                      <li>• Drink broth directly from bowl</li>
                      <li>• Order quickly (respect for others)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Cultural experience */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Globe className="w-5 h-5 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900">The Ippudo Experience</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-red-600 mb-3">🎌 Modern Japanese ambiance</h3>
                  <ul className="text-sm space-y-2">
                    <li><strong>Contemporary design</strong> - Blend of tradition and modernity</li>
                    <li><strong>Open counter</strong> - Live preparation show</li>
                    <li><strong>Curated music</strong> - Relaxed yet refined atmosphere</li>
                    <li><strong>"Omotenashi" service</strong> - Authentic Japanese hospitality</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-red-600 mb-3">🌟 What makes Ippudo unique</h3>
                  <ul className="text-sm space-y-2">
                    <li><strong>Consistent quality</strong> - High standards in all restaurants</li>
                    <li><strong>Continuous innovation</strong> - New seasonal ramens</li>
                    <li><strong>Rigorous training</strong> - Chefs trained to Ippudo standards</li>
                    <li><strong>Corporate philosophy</strong> - "Creating smiles through ramen"</li>
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
                  <Clock className="w-5 h-5 text-red-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Hours</div>
                    <div className="text-sm text-gray-600">11:00 AM - 11:00 PM (general)</div>
                    <div className="text-sm text-gray-500">May vary by location</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-red-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-sm text-gray-600">80+ restaurants in Japan</div>
                    <div className="text-sm text-gray-500">City centers, trendy districts</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CreditCard className="w-5 h-5 text-red-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Payment</div>
                    <div className="text-sm text-gray-600">Cards accepted</div>
                    <div className="text-sm text-gray-500">Cash, IC cards, PayPay</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-red-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Average price</div>
                    <div className="text-sm text-gray-600">¥1,500-2,500 per person</div>
                    <div className="text-sm text-gray-500">Premium segment</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tips for visitors */}
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-4">
                💡 Tips for International Visitors
              </h3>
              
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-red-700">First visit</div>
                  <div className="text-red-600">Start with Shiromaru Motoaji, Ippudo's classic</div>
                </div>
                
                <div>
                  <div className="font-medium text-red-700">Queue</div>
                  <div className="text-red-600">Avoid 12pm-2pm and 7pm-9pm, popular with tourists</div>
                </div>
                
                <div>
                  <div className="font-medium text-red-700">Customization</div>
                  <div className="text-red-600">Don't hesitate to customize, it's encouraged at Ippudo</div>
                </div>
                
                <div>
                  <div className="font-medium text-red-700">Complete experience</div>
                  <div className="text-red-600">Order gyoza, they're part of the experience</div>
                </div>
              </div>
            </div>

            {/* Comparison */}
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                📊 Vs other ramen-ya
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-yellow-700">Vs Ichiran</div>
                  <div className="text-yellow-600">More social, less privacy but more atmosphere</div>
                </div>
                <div>
                  <div className="font-medium text-yellow-700">Positioning</div>
                  <div className="text-yellow-600">High-end, premium ramen experience</div>
                </div>
                <div>
                  <div className="font-medium text-yellow-700">Innovation</div>
                  <div className="text-yellow-600">Precursor of modern ramen trends</div>
                </div>
              </div>
            </div>

            {/* Cultural note */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">
                🏮 Cultural Note
              </h3>
              <p className="text-sm text-blue-700">
                Ippudo represents the modern evolution of traditional ramen. By elevating this popular dish 
                to the level of refined culinary experience, the chain contributed to making ramen 
                a global gastronomic phenomenon, while respecting its deep Japanese roots.
              </p>
            </div>

            {/* Useful links */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
              <div className="space-y-2">
                <a href="https://www.ippudo.com/" 
                   className="block text-red-600 hover:text-red-700 text-sm">
                  ↁEOfficial Ippudo website
                </a>
                <a href="/dish-types/ramen" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  ↁEComplete ramen guide
                </a>
                <a href="/chains/ichiran" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  ↁECompare with Ichiran
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



