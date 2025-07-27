import Link from "next/link";
import ChainViewTracker from "@/components/ChainViewTracker";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kushikatsu Tanaka - Authentic Osaka Taste | Japan Food Chains',
  description: 'Discover Kushikatsu Tanaka and its breaded skewers from Osaka. Learn the golden rule: "no double dipping"!',
  keywords: 'kushikatsu tanaka, kushikatsu osaka, breaded skewers, osaka rule, double dipping, izakaya osaka, street food osaka',
  openGraph: {
    title: 'Kushikatsu Tanaka - Authentic Osaka Taste | Japan Food Chains',
    description: 'Discover Kushikatsu Tanaka and its breaded skewers from Osaka. Learn the golden rule: "no double dipping"!',
    type: 'article',
    locale: 'en_US',
    siteName: 'Japan Food Chains - Japanese Restaurant Guide'
  },
  alternates: {
    canonical: '/chains/kushikatsu-tanaka'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function KushikatsuTanakaPage() {
  return (
    <>
      <ChainViewTracker chainName="kushikatsu-tanaka" chainCategory="izakaya" />
      
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="text-sm">
              <Link href="/" className="text-gray-500 hover:text-purple-600">Home</Link>
              <span className="text-gray-400 mx-2">/</span>
              <Link href="/dish-types/izakaya" className="text-gray-500 hover:text-purple-600">Izakaya</Link>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-purple-600 font-medium">Kushikatsu Tanaka</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-800 via-yellow-700 to-red-800 text-white py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-8">
              <span className="text-6xl mr-4">困</span>
              <span className="text-6xl mr-4">櫨</span>
              <span className="text-6xl">瑳</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Kushikatsu Tanaka
            </h1>
            <p className="text-2xl mb-4 text-orange-100 japanese-text">荳ｲ繧ｫ繝・伐荳ｭ</p>
            <p className="text-xl mb-8 text-orange-100">
              The King of Kushikatsu - Osaka's Fried Skewers Around the World
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">The Essence of Osaka Kushikatsu</h2>
              <p className="text-lg text-orange-200">
                Since 1929, Kushikatsu Tanaka has perpetuated the tradition of Osaka kushikatsu: 
                breaded and fried skewers, served with their secret sauce, in the 
                relaxed atmosphere of an authentic izakaya.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-semibold">
                Osaka Specialty
              </span>
              <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold">
                Tradition 1929
              </span>
              <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-semibold">
                Popular Atmosphere
              </span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* History & Heritage */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                尚 The Heritage of Osaka Kushikatsu
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">套 Birth of a Tradition (1929)</h3>
                  <p className="text-gray-700 mb-4">
                    Kushikatsu Tanaka was born in 1929 in the popular Shinsekai district of Osaka, 
                    the birthplace of kushikatsu. This Osaka specialty consists of various ingredients 
                    skewered, breaded, and deep-fried in oil.
                  </p>
                  <p className="text-gray-700">
                    Founder Tanaka-san revolutionized the concept by creating a secret sauce 
                    that perfectly complements kushikatsu, becoming the chain's signature.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-yellow-50 to-red-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">件 Global Expansion</h3>
                  <p className="text-gray-700 mb-4">
                    From its humble beginnings in Osaka, Kushikatsu Tanaka has expanded throughout Japan 
                    and internationally, exporting the authentic culture of Osaka kushikatsu.
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li>窶｢ <strong>1929:</strong> First restaurant in Osaka</li>
                    <li>窶｢ <strong>1990s:</strong> Expansion in Kansai region</li>
                    <li>窶｢ <strong>2000s:</strong> National presence in Japan</li>
                    <li>窶｢ <strong>2010s:</strong> International opening</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Kushikatsu Menu */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                困 The Art of Kushikatsu
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* Classic Kushikatsu */}
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">･ｩ Classic Kushikatsu</h3>
                  <p className="text-gray-600 japanese-text mb-2">螳夂分荳ｲ繧ｫ繝・/p>
                  <p className="text-2xl font-bold text-orange-600 mb-3">ﾂ･130-280/skewer</p>
                  <p className="text-gray-700 mb-4">
                    The kushikatsu essentials: beef, pork, chicken and vegetables, 
                    all breaded in unique breadcrumbs and fried to perfection.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Beef (迚・:</span>
                      <span className="text-sm font-semibold">ﾂ･280</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Pork (雎・:</span>
                      <span className="text-sm font-semibold">ﾂ･230</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Chicken (鮓・:</span>
                      <span className="text-sm font-semibold">ﾂ･200</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Vegetables:</span>
                      <span className="text-sm font-semibold">ﾂ･130-180</span>
                    </div>
                  </div>
                </div>

                {/* Premium Kushikatsu */}
                <div className="bg-gradient-to-br from-yellow-50 to-red-50 rounded-xl p-6 border border-yellow-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">箝・Premium Kushikatsu</h3>
                  <p className="text-gray-600 japanese-text mb-2">繝励Ξ繝溘い繝荳ｲ繧ｫ繝・/p>
                  <p className="text-2xl font-bold text-yellow-600 mb-3">ﾂ･350-580/skewer</p>
                  <p className="text-gray-700 mb-4">
                    Refined versions with premium ingredients: seafood, 
                    wagyu, seasonal vegetables and chef's special creations.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Wagyu:</span>
                      <span className="text-sm font-semibold">ﾂ･580</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Shrimp:</span>
                      <span className="text-sm font-semibold">ﾂ･450</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Cheese:</span>
                      <span className="text-sm font-semibold">ﾂ･350</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Specials:</span>
                      <span className="text-sm font-semibold">ﾂ･400-500</span>
                    </div>
                  </div>
                </div>

                {/* Sets & Drinks */}
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">瑳 Sets & Drinks</h3>
                  <p className="text-gray-600 japanese-text mb-2">繧ｻ繝・ヨ繝ｻ繝峨Μ繝ｳ繧ｯ</p>
                  <p className="text-2xl font-bold text-red-600 mb-3">ﾂ･800-1500</p>
                  <p className="text-gray-700 mb-4">
                    Kushikatsu sets with beer, traditional accompaniments 
                    and various sauces for a complete izakaya experience.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Discovery Set:</span>
                      <span className="text-sm font-semibold">ﾂ･1200</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Family Set:</span>
                      <span className="text-sm font-semibold">ﾂ･1500</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Beer + 3 kushikatsu:</span>
                      <span className="text-sm font-semibold">ﾂ･800</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Extra sauce:</span>
                      <span className="text-sm font-semibold">ﾂ･100</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Important Rules */}
              <div className="mt-8 bg-red-50 rounded-xl p-6 border border-red-200">
                <h3 className="text-lg font-bold text-red-800 mb-4">笞・・Golden Rule of Kushikatsu</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">圻 "NO DOUBLE DIPPING!"</h4>
                    <p className="text-sm text-gray-700">
                      <strong>ABSOLUTE PROHIBITION:</strong> Dipping the same skewer twice 
                      in the communal sauce. This sacred Osaka rule ensures hygiene 
                      and mutual respect.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">笨・How to do it right:</h4>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>窶｢ Only one dip in the communal sauce</li>
                      <li>窶｢ Use cabbage as a "spoon" if needed</li>
                      <li>窶｢ Order extra sauce if necessary</li>
                      <li>窶｢ Respect this Osaka tradition!</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Izakaya Experience */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                尚 The Kushikatsu Izakaya Experience
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">瑳 Izakaya Atmosphere</h3>
                  <p className="text-gray-700 mb-4">
                    Relaxed and friendly atmosphere typical of Osaka. 
                    Lively counters, conversations between customers, and the characteristic sound 
                    of sizzling fryers.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>窶｢ <strong>Style:</strong> Popular and warm</li>
                    <li>窶｢ <strong>Clientele:</strong> Workers, friends, families</li>
                    <li>窶｢ <strong>Atmosphere:</strong> Relaxed, lively</li>
                    <li>窶｢ <strong>Service:</strong> Quick and efficient</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">識 How to Order</h3>
                  <p className="text-gray-700 mb-4">
                    Simple ordering system: paper menu with checkboxes, 
                    handed to the server. Kushikatsu arrive gradually.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mr-2 text-xs font-bold">1</span>
                      <span>Free seating</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mr-2 text-xs font-bold">2</span>
                      <span>Paper menu with checkboxes</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mr-2 text-xs font-bold">3</span>
                      <span>Order drinks</span>
                    </div>
                    <div className="flex items-center">
                      <span className="w-6 h-6 bg-orange-100 text-orange-600 rounded-full flex items-center justify-center mr-2 text-xs font-bold">4</span>
                      <span>Continuous service</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">竢ｰ Timing & Price</h3>
                  <p className="text-gray-700 mb-4">
                    Perfect for drinks or casual dinner. 
                    Average budget of ﾂ･1500-2500 for a complete meal with drinks.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Drinks:</span>
                      <span className="font-semibold">ﾂ･800-1200</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Dinner:</span>
                      <span className="font-semibold">ﾂ･1500-2500</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Group:</span>
                      <span className="font-semibold">ﾂ･2000-3000</span>
                    </div>
                    <div className="flex justify-between border-t pt-2 mt-2">
                      <span className="text-gray-800 font-semibold">Average duration:</span>
                      <span className="font-bold text-orange-600">1-2 hours</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Practical Guide */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                庁 Practical Guide for Visitors
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-xl font-bold text-green-800 mb-4">笨・Recommendations</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">困</span>
                      <span><strong>Start with classics:</strong> Beef, pork, chicken to discover the basics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">瑳</span>
                      <span><strong>Pair with beer:</strong> Cold Japanese beer pairs perfectly</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">･ｬ</span>
                      <span><strong>Use the cabbage:</strong> Provided free, it refreshes between bites</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-green-600 mr-2">竢ｰ</span>
                      <span><strong>Avoid 7pm-9pm:</strong> Peak hours, prefer 5pm-7pm or after 9pm</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-xl font-bold text-blue-800 mb-4">邃ｹ・・Practical Information</h3>
                  <ul className="space-y-3 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">宵</span>
                      <span><strong>Distribution:</strong> Over 300 restaurants throughout Japan</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">嚊</span>
                      <span><strong>Location:</strong> City centers, business districts, shopping areas</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">諜</span>
                      <span><strong>Payment:</strong> Mainly cash, some accept cards</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-600 mr-2">倹</span>
                      <span><strong>Official website:</strong> Location and menus in Japanese</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Dietary Requirements */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                ･・Dietary Requirements & Restrictions
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                  <h3 className="text-lg font-bold text-red-800 mb-4">圻 Vegetarian/Vegan</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Limited options</strong>: Most kushikatsu contain meat or fish. 
                    A few vegetable options available.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">笨・/span>
                      <span>Vegetable kushikatsu (eggplant, pepper)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">笨・/span>
                      <span>Cabbage provided (vegetarian)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-2">笞・・/span>
                      <span>Shared frying oil</span>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                  <h3 className="text-lg font-bold text-orange-800 mb-4">盛 Halal/No Pork</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Caution required</strong>: Pork present in some kushikatsu. 
                    No official halal certification.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">笨・/span>
                      <span>Beef, chicken kushikatsu</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-500 mr-2">笶・/span>
                      <span>Pork kushikatsu</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-2">笞・・/span>
                      <span>Check ingredients</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-lg font-bold text-blue-800 mb-4">笞・・Allergies</h3>
                  <p className="text-gray-700 mb-4">
                    Caution recommended: breadcrumbs contain gluten, 
                    shared frying oil between all ingredients.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">笞・・/span>
                      <span>Gluten (breadcrumbs)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">笞・・/span>
                      <span>Seafood (some kushikatsu)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">笞・・/span>
                      <span>Possible cross-contamination</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Kushikatsu Culture */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                詞 The Culture of Osaka Kushikatsu
              </h2>
              
              <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">鋤・・Culinary Heritage</h3>
                    <p className="text-gray-700 mb-4">
                      Kushikatsu was born in the popular districts of Osaka as affordable 
                      and nourishing street food. Kushikatsu Tanaka perpetuates this tradition 
                      by keeping the popular and accessible spirit.
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>窶｢ <strong>Origin:</strong> Osaka street food (1920s)</li>
                      <li>窶｢ <strong>Philosophy:</strong> Simple and tasty food</li>
                      <li>窶｢ <strong>Social:</strong> Gathering and conviviality</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">検 Innovation & Tradition</h3>
                    <p className="text-gray-700 mb-4">
                      Kushikatsu Tanaka modernizes the experience while respecting traditions: 
                      new ingredients, improved hygiene, but still the same secret sauce 
                      and the same sacred rules.
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>窶｢ <strong>Modernity:</strong> New ingredients, hygiene</li>
                      <li>窶｢ <strong>Tradition:</strong> Secret sauce, Osaka rules</li>
                      <li>窶｢ <strong>Global:</strong> Export of Japanese culture</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    困 "Kushikatsu: More than a Dish, a Way of Life"
                  </h3>
                  <p className="text-gray-600">
                    Kushikatsu Tanaka transforms a simple fried dish into an authentic cultural experience, 
                    where each bite tells the story of Osaka and its popular generosity.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="text-center">
              <div className="inline-flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/dish-types/izakaya"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  竊・Back to Izakaya
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



