import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Ichiran 一蘭 | Solo Ramen Temple | JapanChains",
  description: "Ultimate tonkotsu ramen experience. Individual booths, 3000 personalized combinations, 24-hour broth. Temple of concentration.",
  keywords: [
    'ichiran', '一蘭', 'tonkotsu ramen', 'individual booths',
    'extreme customization', '24-hour broth', 'yatai style',
    'maximum concentration', 'ramen temple', 'specialist unique'
  ],
  openGraph: {
    title: "Ichiran 一蘭 | Solo Ramen Temple | JapanChains",
    description: "Ultimate tonkotsu ramen experience. Individual booths, 3000 personalized combinations, 24-hour broth. Temple of concentration.",
    type: 'article',
    locale: "en_US",
    siteName: "JapanChains - Guide to Japanese Restaurant Chains"
  },
  alternates: {
    canonical: '/chains/ichiran',
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function IchiranPage() {
  return (
    <>
      <ChainViewTracker chainName="ichiran" chainCategory="ramen" />
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
            <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">一</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Ichiran</h1>
              <p className="text-lg text-gray-600">一蘭 (Ichiran)</p>
              <p className="text-sm text-gray-500">The temple of solo tonkotsu ramen</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* General presentation */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Ultimate Ramen Experience</h2>
              <div className="prose prose-orange max-w-none">
                <p className="text-lg text-gray-700 leading-relaxed">
                  Ichiran is <strong>THE most iconic ramen chain in Japan</strong>, founded in 1960 
                  in Fukuoka. Specializing exclusively in <strong>tonkotsu ramen</strong> (pork bone broth), 
                  Ichiran revolutionized the ramen experience with its unique concept 
                  of <strong>&quot;maximum concentration&quot;</strong> on taste.
                </p>
                <p className="text-gray-700">
                  With its <strong>individual booths (yatai-style)</strong> and personalized 
                  order form system, Ichiran offers a <strong>distraction-free</strong> tasting 
                  experience where only you and your perfect bowl of ramen matter.
                </p>
              </div>
            </div>

            {/* History and philosophy */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <History className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">The Art of Perfect Ramen</h2>
              </div>
              
              <div className="space-y-6">
                {/* Origins */}
                <div className="border-l-4 border-red-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">1960: Birth in Fukuoka</h3>
                  <p className="text-gray-700">
                    Ichiran was born in <strong>Fukuoka, the birthplace of tonkotsu ramen</strong>. From the start, 
                    the chain focused solely on <strong>perfecting a single type of ramen</strong>: 
                    tonkotsu, with its creamy white broth simmered for 24 hours.
                  </p>
                </div>

                {/* System innovation */}
                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">1993: Yatai Revolution</h3>
                  <p className="text-gray-700">
                    Ichiran invented the <strong>individual booth system</strong> inspired by 
                    traditional yatai. This innovation allows <strong>total concentration</strong> 
                    on the ramen, without distracting social interactions.
                  </p>
                </div>

                {/* Customization system */}
                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">2000s: Ultimate Customization</h3>
                  <p className="text-gray-700">
                    Development of <strong>&quot;My Ichiran&quot;</strong>: order form system 
                    allowing customization of every ramen aspect (richness, noodle firmness, 
                    garlic amount, spices, etc.).
                  </p>
                </div>

                {/* International expansion */}
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">2010+: Global Conquest</h3>
                  <p className="text-gray-700">
                    International expansion to <strong>Hong Kong, Taiwan, United States, Europe</strong>. 
                    Ichiran exports its unique concept while rigorously maintaining its philosophy 
                    and quality standards.
                  </p>
                </div>
              </div>
            </div>

            {/* The Ichiran system */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">The Ichiran System</h2>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Isolated Seats (Yatai-Style)</h3>
                    <p className="text-gray-700 text-sm">
                      <strong>Individual booths with partitions</strong>: each customer eats alone, 
                      without distraction. Maximum concentration on the taste experience. 
                      Design inspired by traditional street stalls.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Order by Form</h3>
                    <p className="text-gray-700 text-sm">
                      <strong>Complete customization form</strong>: broth richness, 
                      noodle firmness, garlic amount, scallions, spices, chashu. 
                      Over 3,000 possible combinations.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Curtain Service</h3>
                    <p className="text-gray-700 text-sm">
                      <strong>Minimal interaction</strong>: staff serves through a lowered curtain. 
                      Communication by gestures and signals. Respect for taste privacy.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-red-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Unique Specialization</h3>
                    <p className="text-gray-700 text-sm">
                      <strong>Single menu: tonkotsu ramen</strong>. Absolute perfection of a 
                      mastered recipe. No distraction from other dishes.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ichiran ramen */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Ichiran Ramen</h2>
              
              {/* Ramen components */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm mr-3">Base</span>
                  Ramen Composition
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Tonkotsu Broth</h4>
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>24-hour simmering</strong> of selected pork bones. Creamy white broth, 
                        rich in collagen, deep and complex flavor.
                      </p>
                      <div className="text-xs text-gray-500">Secret: double filtration</div>
                    </div>
                    
                    <div className="border border-gray-200 rounded p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Special Noodles</h4>
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>Ultra-fresh thin noodles</strong>, made daily. 
                        Perfect texture to absorb the tonkotsu broth.
                      </p>
                      <div className="text-xs text-gray-500">Firmness customizable</div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="border border-gray-200 rounded p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Secret Tare</h4>
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>Secret red sauce</strong> based on miso and spices. Perfect 
                        balance between umami, salty and slightly spicy.
                      </p>
                      <div className="text-xs text-gray-500">Recipe jealously guarded</div>
                    </div>
                    
                    <div className="border border-gray-200 rounded p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Premium Chashu</h4>
                      <p className="text-sm text-gray-700 mb-2">
                        <strong>Tender braised pork</strong>, marinated in special sauce. 
                        Soft texture, concentrated flavor.
                      </p>
                      <div className="text-xs text-gray-500">Quantity adjustable</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Customization options */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm mr-3">Custom</span>
                  Ichiran Customization
                </h3>
                
                <div className="overflow-x-auto">
                  <table className="min-w-full border border-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Element</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Options</th>
                        <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Recommendation</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-4 font-medium text-gray-900">Broth richness</td>
                        <td className="px-4 py-4 text-sm text-gray-700">Light | Normal | Rich | Extra-rich</td>
                        <td className="px-4 py-4 text-sm text-gray-600">Rich (first time)</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 font-medium text-gray-900">Noodle firmness</td>
                        <td className="px-4 py-4 text-sm text-gray-700">Ultra-soft | Soft | Normal | Firm | Ultra-firm</td>
                        <td className="px-4 py-4 text-sm text-gray-600">Normal to Firm</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 font-medium text-gray-900">Garlic amount</td>
                        <td className="px-4 py-4 text-sm text-gray-700">None | Little | Normal | Much | Extra</td>
                        <td className="px-4 py-4 text-sm text-gray-600">Normal</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 font-medium text-gray-900">Scallions</td>
                        <td className="px-4 py-4 text-sm text-gray-700">None | Normal | Extra</td>
                        <td className="px-4 py-4 text-sm text-gray-600">Normal</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 font-medium text-gray-900">Chashu</td>
                        <td className="px-4 py-4 text-sm text-gray-700">None | Normal | Extra | Double</td>
                        <td className="px-4 py-4 text-sm text-gray-600">Normal or Extra</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-4 font-medium text-gray-900">Spicy sauce</td>
                        <td className="px-4 py-4 text-sm text-gray-700">None | Little | Normal | Spicy | Very spicy</td>
                        <td className="px-4 py-4 text-sm text-gray-600">Little (beginners)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Side dishes */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm mr-3">Extra</span>
                  Available Side Dishes
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="border border-gray-200 rounded p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Gyoza</h4>
                    <p className="text-sm text-gray-700 mb-2">Pork-scallion dumplings, crispy</p>
                    <div className="text-sm text-gray-600">¥280 (5 pieces)</div>
                  </div>
                  <div className="border border-gray-200 rounded p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Chashu Rice</h4>
                    <p className="text-sm text-gray-700 mb-2">White rice with chashu slices</p>
                    <div className="text-sm text-gray-600">¥210</div>
                  </div>
                  <div className="border border-gray-200 rounded p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Beer</h4>
                    <p className="text-sm text-gray-700 mb-2">Asahi Super Dry, perfect with ramen</p>
                    <div className="text-sm text-gray-600">¥380</div>
                  </div>
                  <div className="border border-gray-200 rounded p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Kaedama</h4>
                    <p className="text-sm text-gray-700 mb-2">Extra portion of noodles</p>
                    <div className="text-sm text-gray-600">¥190</div>
                  </div>
                  <div className="border border-gray-200 rounded p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Soft-boiled Egg</h4>
                    <p className="text-sm text-gray-700 mb-2">Marinated ajitsuke egg, perfect texture</p>
                    <div className="text-sm text-gray-600">¥120</div>
                  </div>
                  <div className="border border-gray-200 rounded p-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Nori Seaweed</h4>
                    <p className="text-sm text-gray-700 mb-2">Grilled seaweed sheets</p>
                    <div className="text-sm text-gray-600">¥120</div>
                  </div>
                </div>
              </div>

              {/* Base ramen price */}
              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2">Ichiran Ramen Prices</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                  <div>
                    <strong>Standard Tonkotsu Ramen</strong>
                    <div className="text-gray-600">¥890 (basic composition)</div>
                  </div>
                  <div>
                    <strong>Ramen + Popular Extras</strong>
                    <div className="text-gray-600">¥1,200-1,400 (with extra chashu + egg)</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Usage guide */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Ichiran Guide</h2>
              
              <div className="space-y-6">
                {/* Detailed steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-red-600 font-bold">1</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Queue</h3>
                    <p className="text-sm text-gray-600">Wait often necessary (huge popularity)</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-red-600 font-bold">2</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Ticket machine</h3>
                    <p className="text-sm text-gray-600">Buy your ramen ticket + extras</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-red-600 font-bold">3</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Booth assignment</h3>
                    <p className="text-sm text-gray-600">Staff assigns you an individual booth</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-red-600 font-bold">4</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Order form</h3>
                    <p className="text-sm text-gray-600">Fill out the customization form</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-red-600 font-bold">5</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Curtain service</h3>
                    <p className="text-sm text-gray-600">Ramen arrives via curtain system</p>
                  </div>
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <span className="text-red-600 font-bold">6</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 mb-2">Tasting</h3>
                    <p className="text-sm text-gray-600">Total concentration on your ramen</p>
                  </div>
                </div>

                {/* Expert tips */}
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Expert Ichiran Tips</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium text-gray-900">First visit:</div>
                      <div className="text-gray-700">Order &quot;osusume&quot; (recommended) for standard configuration</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Optimal timing:</div>
                      <div className="text-gray-700">Avoid 12-2pm and 7-9pm to minimize wait</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Tasting technique:</div>
                      <div className="text-gray-700">Mix first, taste broth, then noodles</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Kaedama:</div>
                      <div className="text-gray-700">Order extra noodles when 1/3 broth remains</div>
                    </div>
                  </div>
                </div>

                {/* Special etiquette */}
                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Ichiran Etiquette</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium text-gray-900">Respected silence:</div>
                      <div className="text-gray-700">Quiet atmosphere is part of the experience</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Minimal interaction:</div>
                      <div className="text-gray-700">Communication by gestures with staff</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Concentration:</div>
                      <div className="text-gray-700">Turn off phone, focus on ramen</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Recommended duration:</div>
                      <div className="text-gray-700">15-20 minutes max to enjoy ideal temperature</div>
                    </div>
                  </div>
                </div>

                {/* Useful phrases */}
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-3">Useful Phrases at Ichiran</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="font-medium text-gray-900">Standard recommendation:</div>
                      <div className="text-gray-700">&quot;Osusume de onegaishimasu&quot;</div>
                      <div className="text-gray-500 text-xs">おすすめでお願いしまぁE/div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Kaedama (extra noodles):</div>
                      <div className="text-gray-700">&quot;Kaedama kudasai&quot;</div>
                      <div className="text-gray-500 text-xs">替玉ください</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">It was delicious:</div>
                      <div className="text-gray-700">&quot;Gochisōsama deshita&quot;</div>
                      <div className="text-gray-500 text-xs">ごちそうさまでした</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Call service:</div>
                      <div className="text-gray-700">Press the button in your booth</div>
                      <div className="text-gray-500 text-xs">ボタンを押ぁE/div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ichiran excellence */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Why Ichiran is Legendary</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 text-xs">✁E/span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Absolute Specialization</h4>
                      <p className="text-sm text-gray-700">
                        Single dish perfected for 60+ years
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 text-xs">✁E/span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Unique Experience</h4>
                      <p className="text-sm text-gray-700">
                        Individual booth concept unmatched worldwide
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 text-xs">✁E/span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Extreme Customization</h4>
                      <p className="text-sm text-gray-700">
                        3,000+ combinations for perfect ramen
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 text-xs">✁E/span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Consistent Quality</h4>
                      <p className="text-sm text-gray-700">
                        Rigorous standards, identical taste everywhere
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Practical information */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Info className="w-5 h-5 text-orange-600 mr-2" />
                Practical Information
              </h3>
              
              <div className="space-y-4 text-sm">
                <div className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Hours</div>
                    <div className="text-gray-600">24/7 (main locations)</div>
                    <div className="text-gray-500 text-xs">Varies by location</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Location</div>
                    <div className="text-gray-600">City centers, stations, busy districts</div>
                    <div className="text-gray-500 text-xs">400+ restaurants in Japan</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CreditCard className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Payment</div>
                    <div className="text-gray-600">Ticket machine (cash/cards)</div>
                    <div className="text-gray-500 text-xs">IC cards accepted</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Users className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Clientele</div>
                    <div className="text-gray-600">Mainly solo, all ages</div>
                    <div className="text-gray-500 text-xs">Individual experience</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <a 
                  href="https://ichiran.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-orange-600 hover:text-orange-700 text-sm font-medium"
                >
                  Official Ichiran Website ↁE
                </a>
              </div>
            </div>

            {/* Average prices */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Average Prices</h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Tonkotsu ramen</span>
                  <span className="font-medium">¥890</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">With popular extras</span>
                  <span className="font-medium">¥1,200-1,400</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Kaedama</span>
                  <span className="font-medium">¥190</span>
                </div>
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <div className="flex justify-between font-medium">
                    <span className="text-gray-900">Average meal</span>
                    <span className="text-gray-900">¥1,000-1,300</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Our review */}
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Review</h3>
              <div className="flex items-center mb-2">
                <div className="flex text-red-400">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                </div>
                <span className="text-sm text-gray-600 ml-2">Transcendent experience</span>
              </div>
              <p className="text-sm text-gray-700">
                <strong>The ultimate ramen experience.</strong> Ichiran transforms ramen tasting 
                into an almost meditative ritual. The booth system and exceptional 
                tonkotsu quality make it an absolute must-try. A unique experience 
                in the world to experience at least once.
              </p>
            </div>

            {/* Loyalty system */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">My Ichiran</h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Save your preferences</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Order history</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Loyalty points</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span>Express mobile ordering</span>
                </div>
              </div>
            </div>

            {/* Navigation to other chains */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Other Ramen</h3>
              
              <div className="space-y-3">
                <Link 
                  href="/chains/ippudo" 
                  className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="font-medium text-gray-900">Ippudo</div>
                  <div className="text-sm text-gray-600">Modern and creative ramen</div>
                </Link>
                
                <Link 
                  href="/chains/ramen-jiro" 
                  className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="font-medium text-gray-900">Ramen JirŁE/div>
                  <div className="text-sm text-gray-600">The extreme experience</div>
                </Link>
              </div>
            </div>
          </div>        </div>
      </div>
    </div>
    </>
  );
}



