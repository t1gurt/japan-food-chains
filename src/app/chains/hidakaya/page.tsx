import Link from "next/link";
import ChainViewTracker from "@/components/ChainViewTracker";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Hidakaya: Popular "Chuka" for Salarymen | Japan Food Chains',
  description: 'Discover Hidakaya, the affordable Chinese cuisine (chuka) chain. Ramen, gyoza and stir-fried dishes at unbeatable prices. The salaryman headquarters.',
  keywords: 'hidakaya, chuka, japanese chinese cuisine, cheap ramen, gyoza, salaryman restaurant, chinese fast food japan',
  openGraph: {
    title: 'Hidakaya: Popular "Chuka" for Salarymen | Japan Food Chains',
    description: 'Discover Hidakaya, the affordable Chinese cuisine (chuka) chain. Ramen, gyoza and stir-fried dishes at unbeatable prices. The salaryman headquarters.',
    type: 'article',
    locale: 'en_US',
    siteName: 'Japan Food Chains - Guide to Japanese Restaurant Chains'
  },
  alternates: {
    canonical: '/chains/hidakaya'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function HidakayaPage() {
  return (
    <>
      <ChainViewTracker chainName="hidakaya" chainCategory="chinese-cuisine" />
      
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="text-sm">
              <Link href="/" className="text-gray-500 hover:text-purple-600">Home</Link>
              <span className="text-gray-400 mx-2">/</span>
              <Link href="/dish-types/chinese-cuisine" className="text-gray-500 hover:text-purple-600">Chinese Cuisine</Link>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-purple-600 font-medium">Hidakaya</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-900 via-orange-800 to-yellow-700 text-white py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-8">
              <span className="text-6xl mr-4">･・/span>
              <span className="text-6xl mr-4">骨</span>
              <span className="text-6xl">櫨</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Hidakaya
            </h1>
            <p className="text-2xl mb-4 text-red-100 japanese-text">譌･鬮伜ｱ・/p>
            <p className="text-xl mb-8 text-red-100">
              Popular Gyoza & Ramen - Accessible Chinese Cuisine
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">The Champion of Affordable Gyoza & Ramen</h2>
              <p className="text-lg text-red-200">
                Since 1979, Hidakaya has democratized Chinese cuisine in Japan with its 
                crispy gyoza and authentic ramen at unbeatable prices.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-semibold">
                Famous Gyoza
              </span>
              <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-semibold">
                Authentic Ramen
              </span>
              <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold">
                Popular Prices
              </span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* History & Philosophy */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                尚 Hidakaya History & Philosophy
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">套 Birth of a Legend (1979)</h3>
                  <p className="text-gray-700 mb-4">
                    Hidakaya was born in 1979 with a revolutionary mission: to make Chinese cuisine 
                    accessible to all Japanese people. Unlike traditional Chinese restaurants that 
                    were often expensive, Hidakaya focused on quality at democratic prices.
                  </p>
                  <p className="text-gray-700">
                    The name "Hidakaya" (譌･鬮伜ｱ・ literally means "Hidaka House," referencing 
                    the Hidaka region, symbolizing authenticity and tradition.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">識 Democratic Mission</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Philosophy:</strong> "Quality Chinese cuisine for everyone, 
                    every day." Hidakaya revolutionized access to Chinese cuisine 
                    by offering authentic dishes starting from just 200ﾂ･.
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li>窶｢ <strong>Accessibility:</strong> Ultra-competitive prices</li>
                    <li>窶｢ <strong>Speed:</strong> Express service for daily life</li>
                    <li>窶｢ <strong>Authenticity:</strong> Traditional Chinese recipes</li>
                    <li>窶｢ <strong>Proximity:</strong> In every neighborhood</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Signature Menu */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                ･・Hidakaya Signature Menu
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* Gyoza */}
                <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 border border-red-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">･・Legendary Gyoza</h3>
                  <p className="text-gray-600 japanese-text mb-2">鬢・ｭ・/p>
                  <p className="text-2xl font-bold text-red-600 mb-3">230ﾂ･ (6 pieces)</p>
                  <p className="text-gray-700 mb-4">
                    Hidakaya gyoza are an institution: thin and crispy skin, 
                    juicy filling mixing pork, Chinese cabbage and garlic. Grilled to perfection 
                    on the hot plate.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Texture:</span>
                      <span className="text-sm font-semibold">Crispy + Juicy</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Filling:</span>
                      <span className="text-sm font-semibold">Pork + Vegetables</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Specialty:</span>
                      <span className="text-sm font-semibold">Artisanal grilling</span>
                    </div>
                  </div>
                </div>

                {/* Ramen */}
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">骨 Classic Ramen</h3>
                  <p className="text-gray-600 japanese-text mb-2">繝ｩ繝ｼ繝｡繝ｳ</p>
                  <p className="text-2xl font-bold text-orange-600 mb-3">390ﾂ･</p>
                  <p className="text-gray-700 mb-4">
                    Authentic ramen with pork and soy sauce broth, thin noodles 
                    and traditional toppings. The unchanged recipe since 1979 
                    that has won over millions of Japanese people.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Broth:</span>
                      <span className="text-sm font-semibold">Pork + Soy</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Noodles:</span>
                      <span className="text-sm font-semibold">Traditional thin</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Toppings:</span>
                      <span className="text-sm font-semibold">Chashu + Menma</span>
                    </div>
                  </div>
                </div>

                {/* Fried Rice */}
                <div className="bg-gradient-to-br from-yellow-50 to-green-50 rounded-xl p-6 border border-yellow-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">忽 Signature Fried Rice</h3>
                  <p className="text-gray-600 japanese-text mb-2">繝√Ε繝ｼ繝上Φ</p>
                  <p className="text-2xl font-bold text-yellow-600 mb-3">450ﾂ･</p>
                  <p className="text-gray-700 mb-4">
                    Wok-fried rice with eggs, shrimp and vegetables. Each grain 
                    perfectly coated, perfect texture between firm and tender. 
                    An unmissable classic.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Cooking:</span>
                      <span className="text-sm font-semibold">High temperature wok</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Ingredients:</span>
                      <span className="text-sm font-semibold">Egg + Shrimp</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Style:</span>
                      <span className="text-sm font-semibold">Authentic Chinese</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Additional Menu */}
              <div className="mt-8 bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">鎖・・Other Popular Specialties</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Main Dishes:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>窶｢ <strong>Tantanmen (諡・・ｺｺ)</strong> - 490ﾂ･ - Spicy sesame ramen</li>
                      <li>窶｢ <strong>Mapo Tofu (鮗ｻ蟀・ｱ・・)</strong> - 350ﾂ･ - Tofu in spicy sauce</li>
                      <li>窶｢ <strong>Ebi Chili (豬ｷ閠√メ繝ｪ)</strong> - 480ﾂ･ - Shrimp in sweet-spicy sauce</li>
                      <li>窶｢ <strong>Gomoku Ankake (莠皮岼縺ゅｓ縺九￠)</strong> - 520ﾂ･ - Stir-fried vegetables in thick sauce</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Side Dishes:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>窶｢ <strong>Shumai (繧ｷ繝･繧ｦ繝槭う)</strong> - 250ﾂ･ - Steamed dumplings</li>
                      <li>窶｢ <strong>Karaage (縺九ｉ謠壹￡)</strong> - 280ﾂ･ - Fried chicken</li>
                      <li>窶｢ <strong>Yasai Itame (驥手除轤偵ａ)</strong> - 320ﾂ･ - Stir-fried vegetables</li>
                      <li>窶｢ <strong>Kimchi (繧ｭ繝繝・</strong> - 150ﾂ･ - Fermented cabbage</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Customer Experience */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                宵 The Hidakaya Experience
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">辞 Ordering System</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Meal tickets (鬟溷虻):</strong> Buy your tickets at the machine at the entrance, 
                    then hand them to the counter. Fast and efficient system.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-2 text-xs font-bold">1</span>
                      <span>Buy ticket from machine</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-2 text-xs font-bold">2</span>
                      <span>Hand ticket to counter</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-2 text-xs font-bold">3</span>
                      <span>Free seating</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-red-100 text-red-600 rounded-full flex items-center justify-center mr-2 text-xs font-bold">4</span>
                      <span>Fast service (3-5 min)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">鎖・・Atmosphere & Setting</h3>
                  <p className="text-gray-700 mb-4">
                    Compact restaurants with counter and a few tables. 
                    Casual atmosphere, popular with workers, students and families.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>窶｢ <strong>Style:</strong> Casual, unpretentious</li>
                    <li>窶｢ <strong>Clientele:</strong> Local and diverse</li>
                    <li>窶｢ <strong>Hours:</strong> Often 11am-11pm</li>
                    <li>窶｢ <strong>Meal duration:</strong> 15-30 minutes</li>
                    <li>窶｢ <strong>Noise:</strong> Lively atmosphere</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">腸 Prices & Value</h3>
                  <p className="text-gray-700 mb-4">
                    Hidakaya is famous for its ultra-competitive prices. 
                    A complete meal for less than 1000ﾂ･ is the norm.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Gyoza (6p):</span>
                      <span className="font-semibold">230ﾂ･</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Ramen:</span>
                      <span className="font-semibold">390ﾂ･</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Fried rice:</span>
                      <span className="font-semibold">450ﾂ･</span>
                    </div>
                    <div className="flex justify-between border-t pt-2 mt-2">
                      <span className="text-gray-800 font-semibold">Complete meal:</span>
                      <span className="font-bold text-red-600">600-800ﾂ･</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Practical Tips */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                庁 Practical Guide for Visitors
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-xl font-bold text-green-800 mb-4">笨・Recommendations</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">･・/span>
                      <span><strong>Order the gyoza:</strong> Absolute specialty, perfect texture between crispy and juicy</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">腸</span>
                      <span><strong>Prepare cash:</strong> Machines accept coins and bills, but prepare exact change</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">竢ｰ</span>
                      <span><strong>Avoid 12pm-1pm:</strong> Office rush hour, longer waiting times</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">骨</span>
                      <span><strong>Winning combo:</strong> Gyoza + Ramen = complete Hidakaya experience for ~620ﾂ･</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">邃ｹ・・Practical Information</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">宵</span>
                      <span><strong>Distribution:</strong> Over 400 restaurants, mainly in Tokyo region</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">嚊</span>
                      <span><strong>Location:</strong> Near stations and shopping centers, easily accessible</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">諜</span>
                      <span><strong>Payment:</strong> Mainly cash, some accept IC cards (Suica/Pasmo)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">導</span>
                      <span><strong>Official app:</strong> Restaurant location and updated menus</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Dietary Restrictions */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                ･・Dietary Restrictions & Allergies
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                  <h3 className="text-lg font-bold text-red-800 mb-4">圻 Vegetarian/Vegan</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Difficult:</strong> Most dishes contain meat or animal products. 
                    Broths often use pork stock.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">笶・/span>
                      <span>Ramen (pork broth)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">笶・/span>
                      <span>Gyoza (pork filling)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-2">笞・・/span>
                      <span>Stir-fried vegetables (possible)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                  <h3 className="text-lg font-bold text-orange-800 mb-4">盛 Halal/No Pork</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Very limited:</strong> Pork present in most specialties. 
                    No official halal certification.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">笶・/span>
                      <span>Gyoza (pork)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">笶・/span>
                      <span>Ramen (pork broth)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-2">笞・・/span>
                      <span>Some chicken/shrimp dishes</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-lg font-bold text-blue-800 mb-4">笞・・Allergies</h3>
                  <p className="text-gray-700 mb-4">
                    Limited allergen information available. Caution recommended 
                    for severe allergies.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">笞・・/span>
                      <span>Gluten (noodles, soy sauce)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">笞・・/span>
                      <span>Eggs (fried rice, noodles)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">笞・・/span>
                      <span>Seafood (certain dishes)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cultural Impact */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                詞 Hidakaya in Japanese Culture
              </h2>
              
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">鋤・・Social Phenomenon</h3>
                    <p className="text-gray-700 mb-4">
                      Hidakaya embodies the democratization of Chinese cuisine in Japan. 
                      By making accessible what was once a luxury, the chain has transformed 
                      the eating habits of millions of Japanese people.
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>窶｢ <strong>Popular revolution:</strong> Chinese cuisine for everyone</li>
                      <li>窶｢ <strong>Food egalitarianism:</strong> Quality without price barrier</li>
                      <li>窶｢ <strong>Social innovation:</strong> Democratic ticket system</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">識 Economic Impact</h3>
                    <p className="text-gray-700 mb-4">
                      Revolutionary economic model based on standardization, 
                      operational efficiency and fast turnover, enabling 
                      unbeatable prices.
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>窶｢ <strong>Accessibility:</strong> Complete meal under 1000ﾂ･</li>
                      <li>窶｢ <strong>Efficiency:</strong> Service in less than 5 minutes</li>
                      <li>窶｢ <strong>Proximity:</strong> In every popular neighborhood</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    醇 "The McDonald's of Chinese Cuisine in Japan"
                  </h3>
                  <p className="text-gray-600">
                    Hidakaya revolutionized access to Chinese cuisine like McDonald's did 
                    for hamburgers: standardization, speed and affordable prices without 
                    compromising the essence of the product.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="text-center">
              <div className="inline-flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/dish-types/chinese-cuisine"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  竊・Back to Chinese Cuisine
                </Link>
                <Link 
                  href="/chains"
                  className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  All Chains
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}



