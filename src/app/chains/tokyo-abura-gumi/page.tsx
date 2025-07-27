import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tokyo Abura-gumi 東京油組 | Classic Abura Soba | JapanChains',
  description: 'Classic abura soba specialist. Quality noodles, secret tare, unique pricing for all sizes.',
  keywords: [
    'tokyo abura-gumi', '東京油組総本店', 'abura soba', '油そば',
    'brothless noodles', 'secret tare', 'classic style',
    'interactive mixing', 'oimeshi', 'tokyo noodles'
  ],
  openGraph: {
    title: 'Tokyo Abura-gumi: Traditional Abura Soba | JapanChains',
    description: 'Discover Tokyo Abura-gumi, the classic abura soba specialist. Quality noodles, secret tare and unique pricing for all sizes.',
    type: 'article',
    url: 'https://japanchains.com/chains/tokyo-abura-gumi',
  },
  alternates: {
    canonical: 'https://japanchains.com/chains/tokyo-abura-gumi',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TokyoAburaGumiPage() {
  return (
    <>
      <ChainViewTracker chainName="tokyo-abura-gumi" chainCategory="aburasoba" />
      <div className="min-h-screen bg-gray-50">
        {/* Header with back button */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link 
              href="/dish-types/aburasoba" 
              className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Abura Soba
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl font-bold">油</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Tokyo Abura-gumi Sōhonten</h1>
                <p className="text-lg text-gray-600">東京油組総本店 | とうきょうあぶらぐみそうほんてん</p>
                <p className="text-sm text-gray-500">The pioneer of traditional abura soba</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* General introduction */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Classic School of Abura Soba</h2>
                <div className="prose prose-orange max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Tokyo Abura-gumi Sōhonten is <strong>THE reference for traditional abura soba</strong>, 
                    perpetuating since 2009 the authentic art of Tokyo's brothless noodles. 
                    This chain embodies the <strong>purist philosophy of abura soba</strong>: 
                    superior quality ingredients in their simplest and most refined expression.
                  </p>
                  <p className="text-gray-700">
                    With its <strong>"you are the chef" concept</strong>, Tokyo Abura-gumi transforms 
                    each meal into an interactive experience where the customer becomes the artisan of their own 
                    culinary masterpiece, mixing secret tare, flavored oil and condiments according 
                    to their preferences.
                  </p>
                </div>
              </div>

              {/* History and philosophy */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <History className="w-6 h-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">The Legacy of Tokyo</h2>
                </div>
                
                <div className="space-y-6">
                  {/* Origins */}
                  <div className="border-l-4 border-amber-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">2009: Mission Tradition</h3>
                    <p className="text-gray-700">
                      Tokyo Abura-gumi was born with a clear mission: <strong>preserve and spread 
                      the authentic tradition of Tokyo abura soba</strong> born in the 1950s. 
                      Unlike modern variations, the chain remains faithful to the original style 
                      of Tokyo university districts.
                    </p>
                  </div>

                  {/* Quality philosophy */}
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">"Best Ingredient" Philosophy</h3>
                    <p className="text-gray-700">
                      Each element is chosen with meticulous care: <strong>specially developed noodles</strong> 
                      for the ideal mochi-mochi texture, <strong>secret tare</strong> 
                      prepared with chashu cooking juice, and <strong>premium sesame oil</strong> 
                      for an incomparable taste experience.
                    </p>
                  </div>

                  {/* Service innovation */}
                  <div className="border-l-4 border-red-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Unique Pricing Revolution</h3>
                    <p className="text-gray-700">
                      Remarkable innovation: <strong>all sizes at the same price (¥880)</strong>. 
                      This revolutionary approach allows customers to choose their portion according 
                      to their appetite without financial constraints, embodying the generous spirit of student culture.
                    </p>
                  </div>
                </div>
              </div>

              {/* Signature menu */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <Utensils className="w-6 h-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Signature Menu</h2>
                </div>
                
                <div className="space-y-6">
                  {/* Classic Abura Soba */}
                  <div className="border border-amber-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">Classic Abura Soba</h3>
                        <p className="text-gray-600 japanese-text">油そば</p>
                      </div>
                      <span className="text-2xl font-bold text-amber-600">¥880</span>
                    </div>
                    <p className="text-gray-700 mb-3">
                      Authentic abura soba in its purest form. Thick mochi-mochi noodles, 
                      secret tare at the bottom of the bowl, fragrant sesame oil, thinly sliced chashu, 
                      crunchy menma and fragrant nori.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div><strong>Portions:</strong> 並盛/大盛/W盛 (same price)</div>
                      <div><strong>Preparation:</strong> You mix it yourself</div>
                      <div><strong>Condiments:</strong> Vinegar + spicy oil</div>
                      <div><strong>Philosophy:</strong> Purity of flavors</div>
                    </div>
                  </div>

                  {/* Popular options */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border border-orange-200 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2">+ Marinated Egg</h4>
                      <p className="text-gray-600 text-sm mb-2">味玉 (Ajitsuke Tamago) - ¥100</p>
                      <p className="text-gray-700 text-sm">
                        Soft-boiled egg marinated in sweet soy sauce, adds creamy richness to the dish.
                      </p>
                    </div>
                    
                    <div className="border border-green-200 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2">Oimeshi (Final Rice)</h4>
                      <p className="text-gray-600 text-sm mb-2">追い飯 - ¥100</p>
                      <p className="text-gray-700 text-sm">
                        White rice to mix with the remaining sauce for a savory "second dish".
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tasting guide */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Award className="w-6 h-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">The Art of Perfect Mixing</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="font-bold text-orange-800 mb-2">🥄 Step 1: Preparation</h3>
                    <p className="text-gray-700 text-sm">
                      Your bowl arrives with the tare hidden at the bottom. Add <strong>2 rounds of vinegar</strong> 
                      and <strong>2 rounds of spicy oil</strong> (3 rounds for large portions) 
                      directly onto the hot noodles.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="font-bold text-orange-800 mb-2">🥢 Step 2: Mixing</h3>
                    <p className="text-gray-700 text-sm">
                      Mix <strong>vigorously and quickly</strong> to bring up the tare 
                      from the bottom and create a perfect emulsion. The more you mix, the better it gets!
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="font-bold text-orange-800 mb-2">🍜 Step 3: Tasting</h3>
                    <p className="text-gray-700 text-sm">
                      Taste immediately while it's hot. <strong>Slurp loudly</strong> 
                      - it's not only accepted but encouraged! The optimal temperature reveals all the flavors.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar with practical info */}
            <div className="space-y-6">
              {/* Essential information */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Practical Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Typical hours</h4>
                      <p className="text-sm text-gray-600">11:00 AM - 11:00 PM (varies by store)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CreditCard className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Average price</h4>
                      <p className="text-sm text-gray-600">¥880-1,080 (all sizes)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Presence</h4>
                      <p className="text-sm text-gray-600">Tokyo, Osaka, urban areas</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Strengths */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Strengths</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-gray-700">Authentic traditional style</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-gray-700">Unique pricing for all sizes</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-gray-700">High quality noodles</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-gray-700">Clear mixing instructions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-gray-700">Interactive experience</span>
                  </div>
                </div>
              </div>

              {/* Travel tips */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-green-800 mb-4">💡 Travel Tips</h3>
                <div className="space-y-3 text-sm text-green-700">
                  <p><strong>For beginners:</strong> Start with the regular portion to discover the flavors.</p>
                  <p><strong>Customization:</strong> Add condiments gradually according to your taste.</p>
                  <p><strong>Oimeshi:</strong> Don't miss the final rice experience - it's unique!</p>
                  <p><strong>Timing:</strong> Avoid peak hours (12-1 PM, 7-8 PM) for more tranquility.</p>
                </div>
              </div>

              {/* Tokyo locations */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Recommended Tokyo Stores</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-amber-500 pl-3">
                    <h4 className="font-semibold text-gray-900">Akasaka Mitsuke</h4>
                    <p className="text-sm text-gray-600">赤坂見附店</p>
                    <p className="text-xs text-gray-500">1 min from Akasaka-mitsuke station</p>
                  </div>
                  <div className="border-l-4 border-orange-500 pl-3">
                    <h4 className="font-semibold text-gray-900">Shimbashi</h4>
                    <p className="text-sm text-gray-600">新橋店</p>
                    <p className="text-xs text-gray-500">3 min from Shimbashi station</p>
                  </div>
                  <div className="border-l-4 border-red-500 pl-3">
                    <h4 className="font-semibold text-gray-900">Hiroo</h4>
                    <p className="text-sm text-gray-600">広尾店</p>
                    <p className="text-xs text-gray-500">2 min from Hiroo station</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation to other chains */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Discover other Abura Soba chains</h3>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/chains/ganso-aburado"
                className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-indigo-600 transition-all"
              >
                Ganso Aburado →
              </Link>
              <Link 
                href="/dish-types/aburasoba"
                className="border-2 border-amber-500 text-amber-600 px-6 py-3 rounded-lg font-semibold hover:bg-amber-500 hover:text-white transition-all"
              >
                Complete Abura Soba Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
