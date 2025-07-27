import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, Globe, Award, History } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Yoshinoya 蜷蛾㍽螳ｶ | Original Gyudon Since 1899 | Japan Food Chains",
  description: "Gyudon pioneer. Secret recipe 125 years, authentic Japanese fast-food experience.",
  keywords: [
    'yoshinoya', '蜷蛾㍽螳ｶ', 'gyudon', 'gyudon pioneer',
    'beef rice', '1899 tradition', 'japanese fast food',
    'secret recipe', 'continuous innovation', 'gyudon history'
  ],
  openGraph: {
    title: "Yoshinoya 蜷蛾㍽螳ｶ | Original Gyudon Since 1899 | Japan Food Chains",
    description: "Gyudon pioneer. Secret recipe 125 years, authentic Japanese fast-food experience.",
    type: 'article',
    locale: "en_US",
    siteName: "Japan Food Chains - Japanese Restaurant Guide"
  },
  alternates: {
    canonical: '/chains/yoshinoya',
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function YoshinoyaPage() {
  return (
    <>
      <ChainViewTracker chainName="yoshinoya" chainCategory="gyudon" />
      <div className="min-h-screen bg-gray-50">
      {/* Header with back button */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/dish-types/gyudon" 
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Gyﾅｫdon
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">蜷・/span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Yoshinoya</h1>
              <p className="text-lg text-gray-600">蜷蛾㍽螳ｶ | 繧医＠縺ｮ繧・/p>
              <p className="text-sm text-gray-500">The gyﾅｫdon pioneer since 1899</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Cultural welcome message */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Under the Orange Sign: An Invitation to Japan's Soul</h2>
              <div className="prose prose-orange max-w-none">
                <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-6">
                  <h3 className="text-lg font-semibold text-orange-900 mb-2">For our international friends</h3>
                  <p className="text-orange-800 italic">
                    "Like your neighborhood bakery or familiar kebab shop after work, 
                    Yoshinoya represents much more than just a restaurant for Japanese people: 
                    it's a piece of their daily life, rooted in 125 years of history."
                  </p>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  Behind this familiar orange sign lies much more than a restaurant chain. 
                  Yoshinoya is Japan's <strong>"People's Bistro"</strong> - a place where modern 
                  Japanese history, the soul of its workers, and the art of perfect simplicity meet.
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg my-4">
                  <h4 className="font-semibold text-gray-900 mb-2">What you'll discover here</h4>
                  <p className="text-gray-700 text-sm">
                    This isn't just a restaurant guide, but an <strong>invitation to a cultural journey</strong>. 
                    Through a bowl of gyﾅｫdon, you'll touch 125 years of Japanese history, 
                    discover fascinating technical secrets, and live an authentic experience 
                    that only "insiders" truly know.
                  </p>
                </div>
                
                <p className="text-gray-700">
                  Since 1899, this institution has embodied the legendary philosophy 
                  <strong>"Umai, Yasui, Hayai"</strong> (Delicious, Affordable, Fast) - 
                  three words that summarize the essence of Japanese service and urban lifestyle.
                </p>
              </div>
            </div>

            {/* Enriched history and heritage */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <History className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">The Epic of a Legend: 125 Years of History</h2>
              </div>
              
              <div className="space-y-8">
                {/* 1899 - Origins */}
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">1899: Birth in the Heart of Tokyo</h3>
                  <p className="text-gray-700 mb-3">
                    In the bustling <strong>Nihonbashi fish market</strong>, Matsuda Eikichi observed 
                    the hurried market workers. He understood their needs: fast, nourishing, 
                    and tasty food. Inspired by the trendy "gyﾅｫmeshi," he perfected the recipe 
                    to create <strong>modern gyﾅｫdon</strong>.
                  </p>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <h4 className="font-semibold text-orange-900 mb-1">The Secret of the Name "Yoshinoya"</h4>
                    <p className="text-orange-800 text-sm">
                      Contrary to urban legend, the name doesn't come from the founder's hometown, 
                      but from his love for the <strong>cherry blossoms of Yoshino</strong> (Nara). 
                      A poetic choice revealing Japanese sensibility: blending business with natural beauty.
                    </p>
                  </div>
                </div>

                {/* 1926 - Move to Tsukiji */}
                <div className="border-l-4 border-blue-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">1926: The Golden Age of Tsukiji</h3>
                  <p className="text-gray-700 mb-3">
                    After the Great Tokyo Earthquake (1923), Yoshinoya followed the fish market to 
                    <strong> Tsukiji</strong>. This period forged the brand's legendary reputation among 
                    Japan's most demanding professionals: fishmongers, traders, and workers 
                    of the world's largest market.
                  </p>
                  <p className="text-gray-700">
                    Here the culture of the <strong>U-shaped counter</strong> was born and the 
                    ultra-fast service techniques that would make Yoshinoya famous were perfected.
                  </p>
                </div>

                {/* 2004-2006 - BSE Crisis */}
                <div className="border-l-4 border-red-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">2004-2006: The Test of Courage</h3>
                  <p className="text-gray-700 mb-3">
                    When the <strong>BSE (mad cow disease) crisis</strong> hit, Yoshinoya made a decision 
                    that stunned the industry: <strong>completely stop selling gyﾅｫdon for 2 years and 7 months</strong>, 
                    refusing any compromise on the quality of American beef it required.
                  </p>
                  <div className="bg-red-50 p-3 rounded-lg">
                    <p className="text-red-800 text-sm">
                      <strong>The Integrity Gamble:</strong> Rather than changing suppliers or quality, 
                      Yoshinoya preferred to lose billions of yen. This decision paradoxically strengthened 
                      consumer confidence in the brand's absolute quality commitment.
                    </p>
                  </div>
                </div>

                {/* Today */}
                <div className="border-l-4 border-yellow-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">Today: The Living Heritage</h3>
                  <p className="text-gray-700">
                    With its <strong>1,261 restaurants in Japan</strong> and presence in 12 countries, 
                    Yoshinoya continues to carry the soul of authentic gyﾅｫdon while adapting 
                    to contemporary challenges. Each bowl served perpetuates 125 years of tradition, 
                    innovation, and Japanese passion.
                  </p>
                </div>
              </div>
            </div>

            {/* Philosophy */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">The Evolving Philosophy: "Umai, Yasui, Hayai"</h2>
              </div>
              
              <p className="text-gray-700 mb-6">
                What makes this motto fascinating is that <strong>the order of words has changed with the times</strong>, 
                reflecting the evolution of Japanese society and each generation's priorities.
              </p>
              
              {/* The three pillars today */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-orange-50 rounded-lg">
                  <div className="text-3xl font-bold text-orange-600 mb-3">縺・∪縺・/div>
                  <div className="text-lg font-semibold text-gray-900 mb-3">Umai (Delicious)</div>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>Short Plate beef</strong> grain-fed American</p>
                    <p><strong>White wine sauce</strong> and ginger</p>
                    <p><strong>"Tsugi-tashi" technique</strong> to concentrate flavors</p>
                    <p><strong>47-hole ladle</strong> for perfect balance</p>
                  </div>
                </div>
                
                <div className="text-center p-6 bg-green-50 rounded-lg">
                  <div className="text-3xl font-bold text-green-600 mb-3">繧・☆縺・/div>
                  <div className="text-lg font-semibold text-gray-900 mb-3">Yasui (Affordable)</div>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>Maximum operational efficiency</strong></p>
                    <p><strong>Supply chain control</strong></p>
                    <p><strong>"Japan Spec" standards</strong> created with US industry</p>
                    <p><strong>Global volume</strong> to negotiate best prices</p>
                  </div>
                </div>
                
                <div className="text-center p-6 bg-blue-50 rounded-lg">
                  <div className="text-3xl font-bold text-blue-600 mb-3">縺ｯ繧・＞</div>
                  <div className="text-lg font-semibold text-gray-900 mb-3">Hayai (Fast)</div>
                  <div className="space-y-2 text-sm text-gray-700">
                    <p><strong>Patented U-shaped counter</strong> to optimize movement</p>
                    <p><strong>Service in under 2 minutes</strong> guaranteed</p>
                    <p><strong>Standardized staff training</strong></p>
                    <p><strong>Choreographed process</strong> like a ballet</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Menu */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Detailed Menu: The Art of Customization</h2>
              </div>
              
              <p className="text-gray-700 mb-6">
                Yoshinoya offers much more than basic gyudon. Discover all the "secret codes" 
                to transform your bowl according to your taste, exactly like Japanese regulars.
              </p>
              
              <div className="space-y-8">
                {/* Essential basics */}
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">忽 The Basics: Your Absolute References</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-900 mb-2">･ｩ Classic Gyudon</h4>
                      <div className="text-sm space-y-1">
                        <div><strong>S (荳ｦ逶・:</strong> ﾂ･468 (633 kcal)</div>
                        <div><strong>M (螟ｧ逶・:</strong> ﾂ･588 (853 kcal)</div>
                        <div><strong>L (迚ｹ逶・:</strong> ﾂ･708 (1073 kcal)</div>
                        <div><strong>Mini:</strong> ﾂ･348 (413 kcal)</div>
                        <div className="text-orange-700 mt-2">The perfect standard, balanced and flavorful</div>
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-900 mb-2">盛 Butadon (Pork)</h4>
                      <div className="text-sm space-y-1">
                        <div><strong>S:</strong> ﾂ･350</div>
                        <div><strong>M:</strong> ﾂ･450</div>
                        <div><strong>L:</strong> ﾂ･550</div>
                        <div className="text-orange-700 mt-2">Milder, slightly sweet sauce</div>
                      </div>
                    </div>
                    
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-orange-900 mb-2">数 Oyakodon</h4>
                      <div className="text-sm space-y-1">
                        <div><strong>S:</strong> ﾂ･420</div>
                        <div><strong>M:</strong> ﾂ･520</div>
                        <div className="text-orange-700 mt-2">Chicken and egg, guaranteed tenderness</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Secret customizations */}
                <div className="border-l-4 border-purple-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">識 "Secret Codes": Customize Like a Pro</h3>
                  
                  <div className="space-y-6">
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-3">櫨 Free Options (Ask for them!)</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                          <div><strong>"Tsuyu-daku" (縺､繧・□縺・</strong>: Extra sauce</div>
                          <div><strong>"Tsuyu-nuki" (縺､繧・栢縺・</strong>: No sauce</div>
                          <div><strong>"Negi-daku" (縺ｭ縺弱□縺・</strong>: Extra onions</div>
                          <div><strong>"Negi-nuki" (縺ｭ縺取栢縺・</strong>: No onions</div>
                        </div>
                        <div className="space-y-2">
                          <div><strong>"Niku-mashi" (閧峨∪縺・</strong>: Double meat (+ﾂ･240)</div>
                          <div><strong>"Aji-tama" (蜻ｳ邇・</strong>: Marinated egg (+ﾂ･80)</div>
                          <div><strong>"Cheese" (繝√・繧ｺ)</strong>: Cheese (+ﾂ･160)</div>
                          <div><strong>"Kimchi" (繧ｭ繝繝・</strong>: Korean kimchi (+ﾂ･100)</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-green-900 mb-3">幻・・Spice Levels</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                        <div className="text-center">
                          <div className="font-semibold text-green-700">Karakuchi (霎帛哨)</div>
                          <div>Lightly spicy</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-orange-700">Chﾅｫ-kara (荳ｭ霎・</div>
                          <div>Medium spicy</div>
                        </div>
                        <div className="text-center">
                          <div className="font-semibold text-red-700">ﾅ・kara (螟ｧ霎・</div>
                          <div>Very spicy</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-blue-900 mb-3">･・Popular Sides</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div className="space-y-2">
                          <div><strong>Miso Soup:</strong> ﾂ･60 (perfect with gyudon)</div>
                          <div><strong>Salad:</strong> ﾂ･120 (necessary freshness)</div>
                          <div><strong>Oshinko:</strong> ﾂ･120 (traditional pickles)</div>
                        </div>
                        <div className="space-y-2">
                          <div><strong>Karaage:</strong> ﾂ･250 (crispy fried chicken)</div>
                          <div><strong>Gyoza:</strong> ﾂ･150 (pan-fried dumplings)</div>
                          <div><strong>Soft Cream:</strong> ﾂ･150 (classic dessert)</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">庁 Expert Advice</h4>
                <p className="text-gray-700 text-sm">
                  For your first visit, order a <strong>"Gyudon Nami, Tsuyu-daku, Miso-soup"</strong> 
                  (medium bowl with extra sauce and miso soup). This is exactly how 
                  90% of Japanese salarymen eat. Then experiment with customizations!
                </p>
              </div>
            </div>

            {/* Ordering guide */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Master the Art of Ordering at Yoshinoya</h2>
              </div>
              
              <p className="text-gray-700 mb-6">
                At Yoshinoya, ordering correctly makes the difference between being a tourist 
                and looking like a true connoisseur. Here are your keys to the authentic experience.
              </p>
              
              <div className="space-y-8">
                {/* Step-by-step process */}
                <div className="border-l-4 border-orange-500 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">搭 The Process: Simple but Precise</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-orange-50 p-4 rounded-lg text-center">
                      <div className="text-2xl mb-2">窓</div>
                      <h4 className="font-semibold text-orange-900 mb-2">1. Enter</h4>
                      <p className="text-sm text-orange-800">Say "Irasshaimase" in response, sit at counter</p>
                    </div>
                    
                    <div className="bg-orange-50 p-4 rounded-lg text-center">
                      <div className="text-2xl mb-2">搭</div>
                      <h4 className="font-semibold text-orange-900 mb-2">2. Order</h4>
                      <p className="text-sm text-orange-800">Clear and direct: "Gyudon nami, tsuyu-daku"</p>
                    </div>
                    
                    <div className="bg-orange-50 p-4 rounded-lg text-center">
                      <div className="text-2xl mb-2">竢ｱ・・/div>
                      <h4 className="font-semibold text-orange-900 mb-2">3. Wait</h4>
                      <p className="text-sm text-orange-800">Usually under 2 minutes, watch the preparation</p>
                    </div>
                    
                    <div className="bg-orange-50 p-4 rounded-lg text-center">
                      <div className="text-2xl mb-2">唆</div>
                      <h4 className="font-semibold text-orange-900 mb-2">4. Enjoy</h4>
                      <p className="text-sm text-orange-800">Eat quickly, pay at counter when done</p>
                    </div>
                  </div>
                </div>

                {/* Useful phrases */}
                <div className="bg-white p-6 rounded-xl border border-gray-200">
                  <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">Useful Phrases at Yoshinoya</h4>
                  <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p><span className="font-semibold">Gyudon nami, tsuyu-daku de</span></p>
                      <p className="text-gray-600 japanese-text mb-2">迚帑ｸｼ荳ｦ縲√▽繧・□縺上〒</p>
                      <p className="text-gray-500 text-xs mb-3">Medium gyudon with extra sauce</p>
                      
                      <p><span className="font-semibold">Oishi desu</span></p>
                      <p className="text-gray-600 japanese-text mb-2">鄒主袖縺励＞縺ｧ縺・/p>
                      <p className="text-gray-500 text-xs">It's delicious</p>
                    </div>
                    <div>
                      <p><span className="font-semibold">Okaikei onegaishimasu</span></p>
                      <p className="text-gray-600 japanese-text mb-2">縺贋ｼ夊ｨ医♀鬘倥＞縺励∪縺・/p>
                      <p className="text-gray-500 text-xs mb-3">Check, please</p>
                      
                      <p><span className="font-semibold">Gochisousama deshita</span></p>
                      <p className="text-gray-600 japanese-text mb-2">縺斐■縺昴≧縺輔∪縺ｧ縺励◆</p>
                      <p className="text-gray-500 text-xs">Thank you for the meal</p>
                    </div>
                  </div>
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
                    <div className="text-sm text-gray-600">24/7 (most locations)</div>
                    <div className="text-sm text-gray-500">Some locations vary</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-sm text-gray-600">1,261+ restaurants in Japan</div>
                    <div className="text-sm text-gray-500">Train stations, busy areas</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CreditCard className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Payment</div>
                    <div className="text-sm text-gray-600">Cash, cards, IC cards</div>
                    <div className="text-sm text-gray-500">Mobile payments accepted</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Users className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Average budget</div>
                    <div className="text-sm text-gray-600">ﾂ･400-800 per person</div>
                    <div className="text-sm text-gray-500">Quick meal under ﾂ･500</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tips for visitors */}
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-orange-800 mb-4">
                庁 Tips for First-Timers
              </h3>
              
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-orange-700">Peak hours</div>
                  <div className="text-orange-600">Avoid 12-1 PM and 7-8 PM rush</div>
                </div>
                
                <div>
                  <div className="font-medium text-orange-700">Counter seating</div>
                  <div className="text-orange-600">Traditional experience, watch the preparation</div>
                </div>
                
                <div>
                  <div className="font-medium text-orange-700">Customization</div>
                  <div className="text-orange-600">Don't hesitate to ask for "tsuyu-daku" (extra sauce)</div>
                </div>
                
                <div>
                  <div className="font-medium text-orange-700">Speed eating</div>
                  <div className="text-orange-600">Eat relatively quickly, it's part of the culture</div>
                </div>
              </div>
            </div>

            {/* Must-try specialties */}
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                醇 Must-Try Items
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-yellow-700">Classic Gyudon</div>
                  <div className="text-yellow-600">The original and still the best, medium size recommended</div>
                </div>
                <div>
                  <div className="font-medium text-yellow-700">Extra sauce version</div>
                  <div className="text-yellow-600">"Tsuyu-daku" for the full flavor experience</div>
                </div>
                <div>
                  <div className="font-medium text-yellow-700">With miso soup</div>
                  <div className="text-yellow-600">Perfect complement, traditional combination</div>
                </div>
                <div>
                  <div className="font-medium text-yellow-700">Cheese gyudon</div>
                  <div className="text-yellow-600">Modern twist on the classic</div>
                </div>
              </div>
            </div>

            {/* Cultural note */}
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">
                尚 Cultural Note
              </h3>
              <p className="text-sm text-purple-700">
                Yoshinoya represents the essence of Japanese work culture - quick, efficient, 
                and quality-focused. Eating here is participating in a 125-year-old tradition 
                that connects you to generations of Japanese workers who have fueled the nation's 
                economic miracle, one bowl at a time.
              </p>
            </div>

            {/* Useful links */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
              <div className="space-y-2">
                <a href="https://www.yoshinoya.com/" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  竊・Official Yoshinoya website
                </a>
                <a href="/dish-types/gyudon" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  竊・Complete gyudon guide
                </a>
                <a href="/chains/sukiya" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  竊・Compare with Sukiya
                </a>
                <a href="/chains/matsuya" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  竊・Compare with Matsuya
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



