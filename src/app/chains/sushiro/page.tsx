import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Zap } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Sushiro スシロー | Kaiten #1 | Japonchaines",
  description: "Conveyor belt sushi leader. Exceptional quality, conquering technological innovation.",
  keywords: [
    'sushiro', 'スシロー', 'kaiten-zushi', 'conveyor belt sushi',
    'japan leader', 'tech innovation', 'quality price',
    'seasonal menu', 'affordable sushi', 'touch tablet'
  ],
  openGraph: {
    title: "Sushiro スシロー | Kaiten #1 | Japonchaines",
    description: "Conveyor belt sushi leader. Exceptional quality, conquering technological innovation.",
    type: 'article',
    locale: "en_US",
    siteName: "Japonchaines - Japanese Restaurant Guide"
  },
  alternates: {
    canonical: '/chains/sushiro',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SushiroPage() {
  return (
    <>
      <ChainViewTracker chainName="sushiro" chainCategory="kaiten-zushi" />
      <div className="min-h-screen bg-gray-50">
        {/* Header with back button */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link 
              href="/type-plat/kaiten-zushi" 
              className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Kaiten-zushi
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl font-bold">ス</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Sushiro</h1>
                <p className="text-lg text-gray-600">スシロー | すしろー</p>
                <p className="text-sm text-gray-500">The undisputed #1 in kaiten-zushi for 8 years</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Welcome message for French visitors */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Essential Sushi Experience in Japan</h2>
                <div className="prose prose-orange max-w-none">
                  <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-6">
                    <h3 className="text-lg font-semibold text-blue-900 mb-2">For our international visitors</h3>
                    <p className="text-blue-800 italic">
                      &quot;Japan's culinary beauty offers countless dining experiences, 
                      but none is as iconic, fun and accessible as 'kaiten-zushi' 
                      (conveyor belt sushi). At the top of this popular culture stands a name every Japanese knows: <strong>Sushiro</strong>.&quot;
                    </p>
                  </div>
                  
                  <p className="text-lg text-gray-700 leading-relaxed">
                    More than just a restaurant chain, Sushiro has been the <strong>absolute leader of kaiten-zushi since 2011</strong>, 
                    embodying a revolution that democratized access to quality sushi. This unique experience transforms 
                    a simple meal into <strong>immersion in the dynamic and modern face of Japanese food culture</strong>.
                  </p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg my-4">
                    <h4 className="font-semibold text-gray-900 mb-2">The Sushiro Philosophy - More than a Slogan</h4>
                    <blockquote className="text-gray-700 italic border-l-3 border-orange-400 pl-4">
                      &quot;うまいすしを、腹一杯。うまいすしで、心も一杯。&quot;<br/>
                      <span className="text-sm text-gray-600">&quot;Delicious sushi to satisfaction. Delicious sushi to fill the heart.&quot;</span>
                    </blockquote>
                    <p className="text-sm text-gray-600 mt-2">
                      This mission embodies Sushiro's ability to transform a simple meal into a moment of joy and deep satisfaction, 
                      offering surprising quality at a price accessible to all.
                    </p>
                  </div>
                  
                  <p className="text-gray-700">
                    For those accustomed to Western sushi prices, Sushiro reveals that <strong>high quality and freshness 
                    can harmonize with democratic prices and shared pleasure</strong>. This philosophy makes 
                    each visit a discovery of modern Japanese culinary art in its purest and most accessible form.
                  </p>
                </div>
              </div>

              {/* Secrets of excellence */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <Award className="w-6 h-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">The &quot;こだわり&quot; (Kodawari) Philosophy - The Obsession with Perfection</h2>
                </div>
                
                <p className="text-gray-700 mb-6">
                  The Japanese word <strong>&quot;こだわり&quot; (Kodawari)</strong> is difficult to translate directly. 
                  It expresses an unwavering attitude of pursuing perfection in the smallest details, 
                  a <strong>constructive obsession</strong> that forms the foundation of Sushiro's quality and success.
                </p>
                
                <div className="space-y-8">
                  {/* Revolutionary innovation */}
                  <div className="border-l-4 border-red-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      🏭 2004: The Anti-Central Revolution
                    </h3>
                    
                    <div className="bg-red-50 p-4 rounded-lg mb-4">
                      <p className="text-red-800 text-sm">
                        <strong>Historic decision:</strong> While all major chains were centralizing their production 
                        to reduce costs, Sushiro took the opposite bet by <strong>completely eliminating its central kitchens</strong>.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">🐟 In-Store Cutting and Preparation</h4>
                        <p className="text-gray-700 text-sm">
                          All crucial operations - fish cutting, fillet preparation, sushi assembly - 
                          are now done directly in each restaurant. <strong>Result: maximum freshness 
                          and sushi prepared just before service.</strong>
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">⚖️ Complexity vs Quality</h4>
                        <p className="text-gray-700 text-sm">
                          This approach is operationally more complex and costly, but it allows Sushiro 
                          to claim <strong>authentic freshness</strong> and create a decisive competitive advantage 
                          in consumers' minds.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Revolutionary technological system */}
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      💡 2002: World Technological Innovation
                    </h3>
                    
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <p className="text-blue-800 text-sm">
                        <strong>World first:</strong> Sushiro develops the <strong>&quot;Integrated Kaiten-Zushi 
                        Management System&quot;</strong> - revolutionary technology that transforms freshness management.
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">🔧 Smart IC Chips</h4>
                        <p className="text-gray-700 text-sm">
                          Each sushi plate contains an <strong>IC chip</strong> that tracks its journey in real time 
                          on the conveyor belt. As soon as a plate exceeds a defined distance 
                          (example: 350 meters), it is <strong>automatically removed from the circuit and eliminated</strong>.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">🎯 Absolute Freshness Guarantee</h4>
                        <p className="text-gray-700 text-sm">
                          This technology eliminates all uncertainty: <strong>customers only receive the 
                          freshest products</strong>, transforming a potential logistical nightmare into 
                          an unbeatable quality advantage.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hygiene and safety */}
                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      🧼 Rigorous Hygiene: Beyond Necessity
                    </h3>
                    
                    <div className="space-y-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">✋ Hand Washing Protocol</h4>
                        <p className="text-green-800 text-sm">
                          Before entering the kitchen, each employee must wash their hands <strong>2 times</strong>: 
                          wrists, palms, backs of hands, fingers and nails, <strong>10 times each area</strong> 
                          with 2 different soaps (cleaning and disinfection). The process is supervised and recorded.
                        </p>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">🏭 Supplier Audits</h4>
                        <p className="text-green-800 text-sm">
                          Before any partnership, Sushiro audits the processing plants of its potential suppliers 
                          with a <strong>200-point checklist</strong> covering operations, ingredient management 
                          and hygiene conditions.
                        </p>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">📋 Daily Controls</h4>
                        <p className="text-green-800 text-sm">
                          More than <strong>70 daily control points</strong> in each restaurant: 
                          employee health, refrigerator temperatures, expiration dates, 
                          utensil disinfection. Complete audit every 3 months by specialized teams.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* The 4 pillars of taste */}
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      🎯 The Four Pillars of Perfect Taste
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-900 mb-2">🍚 Shari (Sushi Rice)</h4>
                        <p className="text-purple-800 text-sm">
                          High-quality Japanese rice, grown according to Sushiro specifications, 
                          cooked perfectly in each restaurant to guarantee <strong>ideal temperature and texture</strong>.
                        </p>
                      </div>
                      
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-900 mb-2">🌿 Wasabi</h4>
                        <p className="text-purple-800 text-sm">
                          Exclusive blend of <strong>&quot;hon-wasabi&quot; from Hokkaido</strong> and Western horseradish, 
                          dosed for perfect balance between spiciness and aroma.
                        </p>
                      </div>
                      
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-900 mb-2">🥢 Soy Sauce</h4>
                        <p className="text-purple-800 text-sm">
                          Soy sauce <strong>specially brewed for Sushiro</strong>, designed to enhance 
                          sushi flavors without masking them.
                        </p>
                      </div>
                      
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-900 mb-2">🍵 Green Tea</h4>
                        <p className="text-purple-800 text-sm">
                          <strong>100% Japanese</strong> tea powder available free at every table, 
                          refreshing the palate between each bite.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* The technological experience */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <Zap className="w-6 h-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Step-by-Step Practical Guide</h2>
                </div>
                
                <p className="text-gray-700 mb-6">
                  First visit to Sushiro? This detailed guide transforms apprehension of the unknown 
                  into <strong>confident mastery of the experience</strong>. Follow these steps to fully enjoy 
                  your Japanese culinary adventure.
                </p>
                
                <div className="space-y-6">
                  {/* Step 1: Reservation */}
                  <div className="border border-orange-200 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-orange-900 mb-3 flex items-center">
                      📱 Step 1: Avoid the Queue - Smart Reservation System
                    </h3>
                    
                    <div className="space-y-3">
                      <div className="bg-orange-50 p-3 rounded-lg">
                        <h4 className="font-medium text-orange-900 mb-1">Sushiro App (Recommended)</h4>
                        <p className="text-orange-800 text-sm">
                          <strong>2 options:</strong> &quot;Now&quot; (virtual ticket + estimated wait time) 
                          or &quot;Later&quot; (reservation up to 1 month in advance). Multilingual interface available.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-1">LINE Mini-App</h4>
                        <p className="text-gray-700 text-sm">
                          For LINE users: same features without additional download.
                        </p>
                      </div>
                      
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <h4 className="font-medium text-blue-900 mb-1">Takeout Order</h4>
                        <p className="text-blue-800 text-sm">
                          Pre-order and payment via app, quick pickup in store.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step 2: Arrival */}
                  <div className="border border-blue-200 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3 flex items-center">
                      🏪 Step 2: Arrival and Setup
                    </h3>
                    
                    <div className="space-y-3">
                      <div className="bg-blue-50 p-3 rounded-lg">
                        <h4 className="font-medium text-blue-900 mb-1">Automated Check-in</h4>
                        <p className="text-blue-800 text-sm">
                          <strong>With reservation:</strong> Enter your number on the multilingual reception terminal. 
                          <strong>Warning:</strong> arrive within 30 minutes, otherwise automatic cancellation.
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h4 className="font-medium text-gray-900 mb-1">Without Reservation</h4>
                        <p className="text-gray-700 text-sm">
                          Take a ticket at the same terminal and wait. Wait time displayed in real time.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step 3: Ordering */}
                  <div className="border border-green-200 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-green-900 mb-3 flex items-center">
                      🎮 Step 3: Master the Art of Ordering
                    </h3>
                    
                    <div className="space-y-3">
                      <div className="bg-green-50 p-3 rounded-lg">
                        <h4 className="font-medium text-green-900 mb-1">Multilingual Touch Tablet</h4>
                        <p className="text-green-800 text-sm">
                          Interface in Japanese, English, Korean, Chinese. HD photos facilitate selection. 
                          <strong>Tip:</strong> even children become experts!
                        </p>
                      </div>
                      
                      <div className="bg-green-50 p-3 rounded-lg">
                        <h4 className="font-medium text-green-900 mb-1">&quot;Dijiro&quot; - Recent Store Innovation</h4>
                        <p className="text-green-800 text-sm">
                          Dynamic screens above the belt: order directly by touching 
                          the sushi animations that scroll by!
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step 4: Double system */}
                  <div className="border border-purple-200 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-purple-900 mb-3 flex items-center">
                      🚄 Step 4: Understanding the Double-Rail System
                    </h3>
                    
                    <div className="space-y-3">
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <h4 className="font-medium text-purple-900 mb-1">Lower Rail: Free Selection</h4>
                        <p className="text-purple-800 text-sm">
                          Standard sushi in continuous rotation. Take what appeals to you as it passes!
                        </p>
                      </div>
                      
                      <div className="bg-purple-50 p-3 rounded-lg">
                        <h4 className="font-medium text-purple-900 mb-1">Upper Rail: &quot;Express Lane&quot;</h4>
                        <p className="text-purple-800 text-sm">
                          <strong>Your &quot;personal train&quot;:</strong> your specific orders arrive 
                          directly at your table via this dedicated rail.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Step 5: Payment */}
                  <div className="border border-red-200 rounded-lg p-4">
                    <h3 className="text-lg font-semibold text-red-900 mb-3 flex items-center">
                      💳 Step 5: Futuristic Payment
                    </h3>
                    
                    <div className="space-y-3">
                      <div className="bg-red-50 p-3 rounded-lg">
                        <h4 className="font-medium text-red-900 mb-1">Automatic Counting</h4>
                        <p className="text-red-800 text-sm">
                          Image recognition cameras automatically count your plates by color. 
                          Real-time calculation!
                        </p>
                      </div>
                      
                      <div className="bg-red-50 p-3 rounded-lg">
                        <h4 className="font-medium text-red-900 mb-1">Self-Service Terminal</h4>
                        <p className="text-red-800 text-sm">
                          Call server via tablet → receive card/barcode → 
                          pay at terminal (cash, international card, Japanese mobile payment).
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mt-6">
                  <h4 className="font-semibold text-orange-900 mb-2">💡 Pro Tip</h4>
                  <p className="text-orange-800 text-sm">
                    <strong>First time?</strong> Watch other customers for a few minutes. 
                    The system is so intuitive that you'll quickly master all the gestures!
                  </p>
                </div>
              </div>

              {/* Menu highlights */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <Utensils className="w-6 h-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Sushiro's Culinary Universe: Much More than Sushi</h2>
                </div>
                
                <p className="text-gray-700 mb-6">
                  With more than <strong>100 varieties permanently</strong> and seasonal campaigns that constantly renew 
                  the offering, Sushiro transcends the traditional definition of sushi to become 
                  a <strong>complete and evolving culinary adventure</strong>.
                </p>
                
                {/* Color pricing system */}
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
                  <h3 className="text-lg font-semibold text-yellow-900 mb-2">🎨 Understanding the Color Pricing System</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
                    <div>
                      <div className="w-4 h-4 bg-yellow-400 rounded-full inline-block mr-2"></div>
                      <strong>Yellow:</strong> 120-150¥<br/>
                      <span className="text-yellow-700">80+ basic varieties</span>
                    </div>
                    <div>
                      <div className="w-4 h-4 bg-red-500 rounded-full inline-block mr-2"></div>
                      <strong>Red:</strong> 180-210¥<br/>
                      <span className="text-red-700">Superior quality</span>
                    </div>
                    <div>
                      <div className="w-4 h-4 bg-gray-800 rounded-full inline-block mr-2"></div>
                      <strong>Black:</strong> 260-290¥<br/>
                      <span className="text-gray-700">&quot;Takumi&quot; series</span>
                    </div>
                    <div>
                      <div className="w-4 h-4 bg-gray-200 border-2 border-gray-400 rounded-full inline-block mr-2"></div>
                      <strong>White:</strong> Variable price<br/>
                      <span className="text-gray-600">Limited editions</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-8">
                  {/* Traditional sushi champions */}
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">🏆 The Unmissable Champions</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">🥇 Maguro (Tuna) - Absolute #1</h4>
                        <p className="text-blue-800 text-sm">
                          Secret: only the <strong>&quot;Tenmi&quot;</strong> part of large Mebachimaguro. 
                          Without tendons, maximum umami concentration. The standard that defined Sushiro's success.
                        </p>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">🥈 Hamachi (Yellowtail) - #2 in Sales</h4>
                        <p className="text-blue-800 text-sm">
                          Farming in partner pools, morning slaughter, in-store preparation. 
                          Melting texture and exceptional freshness guaranteed.
                        </p>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">🍣 Ebi Avocado - Historic Innovation</h4>
                        <p className="text-blue-800 text-sm">
                          <strong>Created by Sushiro in 2004!</strong> Perfectly poached shrimp, 
                          creamy avocado, special mayonnaise. The innovation that democratized creative sushi.
                        </p>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">🍳 Tamago - 6-Layer Perfection</h4>
                        <p className="text-blue-800 text-sm">
                          While the standard is 5 layers, Sushiro makes 6 for a 
                          <strong>unique ultra-soft texture</strong>. A detail that makes the difference.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Niku-Zushi revolution */}
                  <div className="border-l-4 border-red-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">🥩 Revolution: The Era of Niku-Zushi</h3>
                    
                    <div className="bg-red-50 p-4 rounded-lg mb-4">
                      <p className="text-red-800 text-sm">
                        <strong>Sushiro revolutionized the very concept of sushi</strong> by introducing &quot;niku-zushi&quot; 
                        (meat sushi), breaking conventions to create a new culinary category.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">🔥 Grilled Beef Kalbi</h4>
                        <p className="text-gray-700 text-sm">
                          Secret yakiniku sauce, mastered cooking. The sushi that converted 
                          fish skeptics!
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">🍖 Chashu (Braised Pork)</h4>
                        <p className="text-gray-700 text-sm">
                          Technique borrowed from ramen: pork braised for hours in secret broth 
                          to perfect tenderness.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Beyond sushi */}
                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">🍜 The Side Dish Empire</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">🥢 Restaurant-Level Ramen</h4>
                        <p className="text-green-800 text-sm">
                          <strong>Sea Bream Broth Ramen:</strong> staff's #1 recommendation. 
                          Sea bream bones (used for sushi) boiled with clams and chicken broth. 
                          Zero waste, specialized restaurant taste.
                        </p>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">🍤 &quot;Potero&quot; Fries - Social Phenomenon</h4>
                        <p className="text-green-800 text-sm">
                          Affectionately nicknamed by fans. Ordered on demand, 
                          always <strong>ultra-crispy</strong>. Simple but perfect.
                        </p>
                      </div>
                      
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">🥘 Chawanmushi - #1 Side Dish</h4>
                        <p className="text-green-800 text-sm">
                          <strong>2.07 million portions sold per year!</strong> Bonito, kombu and Japanese mackerel broth. 
                          Steam cooked individually in each restaurant.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Sushiro Café */}
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">🍰 &quot;Sushiro Café-bu&quot; - The Dessert Revolution</h3>
                    
                    <div className="bg-purple-50 p-4 rounded-lg mb-4">
                      <p className="text-purple-800 text-sm">
                        <strong>Mission:</strong> &quot;Prevent customers from going to konbini after the meal&quot;. 
                        Since 2017, a team of pastry chefs trained in luxury hotels develops 
                        desserts worthy of Parisian tea salons.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-900 mb-2">🔥 Catalana Ice Brûlée - Absolute Star</h4>
                        <p className="text-purple-800 text-sm">
                          Surface caramelized with torch <strong>on order</strong>. 
                          Perfect contrast: crispy caramel + creamy ice cream.
                        </p>
                      </div>
                      
                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-900 mb-2">🎂 Hokkaido Mille-Crêpes</h4>
                        <p className="text-purple-800 text-sm">
                          Hokkaido fresh cream, glazed strawberries, Parisian café presentation. 
                          Unexpected sophistication in a kaiten-zushi!
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Limited campaigns */}
                  <div className="border-l-4 border-orange-500 pl-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">🎪 The Art of Limited Campaigns</h3>
                    
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="text-orange-800 text-sm mb-3">
                        <strong>Sushiro Day:</strong> once a year, premium bluefin tuna at exceptional prices. 
                        <strong>Ramen collabs:</strong> partnerships with cult restaurants. 
                        <strong>GODIVA:</strong> premium signed chocolates. <strong>Anime:</strong> collaborations with Haikyu!!, 
                        Sanrio to attract all audiences.
                      </p>
                      <p className="text-orange-800 text-sm font-semibold">
                        💡 Tip: check the app before your visit for current surprises!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Enriched FAQ */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Cultural and Practical Guide for International Visitors</h2>
                
                <div className="space-y-8">
                  {/* Etiquette and good manners */}
                  <div className="border-l-4 border-blue-500 pl-6">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">🎌 Japanese Sushi Etiquette</h3>
                    
                    <div className="space-y-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">🥢 The Golden Rule of Soy Sauce</h4>
                        <p className="text-blue-800 text-sm">
                          <strong>Dip the FISH, never the rice!</strong> Rice absorbs too much sauce, 
                          masks the fish flavor and makes the sushi fall apart. 
                          For gunkan (&quot;boat&quot; sushi), use ginger as a brush.
                        </p>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">🌸 Gari (Pickled Ginger) - Your Ally</h4>
                        <p className="text-blue-800 text-sm">
                          These pink/white slices are eaten <strong>BETWEEN</strong> different sushi, 
                          not as a topping on them. They cleanse the palate and have an antibacterial effect. 
                          Perfect for moving from fatty fish to lean fish!
                        </p>
                      </div>
                      
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">🍵 The Art of Green Tea</h4>
                        <p className="text-blue-800 text-sm">
                          Free service at every table! Put 1-2 spoons of powder in your cup, 
                          add a little hot water, mix to avoid lumps, then fill. 
                          <strong>Free and unlimited!</strong>
                        </p>
                      </div>
                      
                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-900 mb-2">⚠️ Absolute Rule</h4>
                        <p className="text-red-800 text-sm">
                          A plate taken from the belt = your property! <strong>Even taken by mistake, 
                          NEVER put it back in circulation.</strong> It's considered extremely rude 
                          and dangerous for hygiene.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Practical questions */}
                  <div className="border-l-4 border-green-500 pl-6">
                    <h3 className="text-xl font-semibold text-green-900 mb-4">💡 Essential Practical Questions</h3>
                    
                    <div className="space-y-4">
                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">🌐 Language barrier: really a problem?</h4>
                        <p className="text-gray-700 text-sm">
                          <strong>Absolutely not!</strong> Multilingual tablets (English guaranteed), HD photos for everything. 
                          The system is designed to be <strong>entirely visual and intuitive</strong>. 
                          Even 5-year-old children manage perfectly!
                        </p>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">👨‍👩‍👧‍👦 Sushiro with family: good idea?</h4>
                        <p className="text-gray-700 text-sm">
                          <strong>It's THE typical Japanese family restaurant!</strong> 
                          Children fascinated by the &quot;sushi train&quot;, special kids menus, 
                          free toys, options for picky eaters (tamagoyaki, inari, niku-sushi). 
                          <strong>Relaxed atmosphere, no protocol stress.</strong>
                        </p>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">🥗 Real vegetarian/vegan options?</h4>
                        <p className="text-gray-700 text-sm">
                          <strong>Yes, but be vigilant:</strong> kappa-maki (cucumber), 
                          natto-maki (fermented soy), inari (sweet tofu), avocado, vegetable tempura. 
                          <strong>Warning:</strong> broths often fish-based, possible cross-contamination. 
                          Sushiro is developing plant-based options for Expo 2025.
                        </p>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">⏱️ How much time to plan?</h4>
                        <p className="text-gray-700 text-sm">
                          <strong>45-90 minutes depending on your style.</strong> No rush! 
                          Some families spend 2 hours exploring and playing, 
                          other pros finish in 30 minutes. <strong>You manage your pace.</strong>
                        </p>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">💳 Payments accepted for tourists?</h4>
                        <p className="text-gray-700 text-sm">
                          <strong>Very wide acceptance:</strong> cash (always safe), 
                          Visa/Mastercard/AMEX international, contactless, 
                          Japanese mobile payments. <strong>Self-service terminals very simple.</strong> 
                          Avoid transportation IC cards (Suica, etc.).
                        </p>
                      </div>

                      <div className="border border-gray-200 rounded-lg p-4">
                        <h4 className="font-semibold text-gray-900 mb-2">🍣 Does the quality really justify these low prices?</h4>
                        <p className="text-gray-700 text-sm">
                          <strong>That's all Sushiro's genius!</strong> Huge volumes + technology + 
                          eliminating intermediaries = consistent quality at democratic prices. 
                          The &quot;Tenmi&quot; tuna at 120¥ rivals Parisian sushi at 8€. 
                          <strong>Economic revolution without taste compromise.</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Cultural context */}
                  <div className="border-l-4 border-purple-500 pl-6">
                    <h3 className="text-xl font-semibold text-purple-900 mb-4">🏛️ A Bit of History: The Invention of Kaiten-Zushi</h3>
                    
                    <div className="bg-purple-50 p-4 rounded-lg">
                      <h4 className="font-semibold text-purple-900 mb-2">🍺 Brewery Inspiration</h4>
                      <p className="text-purple-800 text-sm mb-3">
                        <strong>1958, Osaka:</strong> Yoshiaki Shiraishi, owner of the small restaurant &quot;Genroku Sushi&quot;, 
                        faces a labor shortage. During a visit to Asahi Beer factory, 
                        he observes bottles moving on a conveyor belt... <strong>The eureka moment!</strong>
                      </p>
                      <p className="text-purple-800 text-sm">
                        <strong>1970, Osaka Expo:</strong> Kaiten-zushi becomes a world phenomenon. 
                        What was a local solution becomes <strong>cultural revolution</strong> exported worldwide.
                      </p>
                    </div>
                  </div>
                  
                  {/* Competition comparison */}
                  <div className="border-l-4 border-yellow-500 pl-6">
                    <h3 className="text-xl font-semibold text-yellow-900 mb-4">⚖️ Sushiro vs Competition: Who to Choose?</h3>
                    
                    <div className="space-y-3">
                      <div className="bg-yellow-50 p-3 rounded-lg">
                        <h5 className="font-semibold text-yellow-900 text-sm">🏆 Sushiro: The Technological Champion</h5>
                        <p className="text-yellow-800 text-xs">
                          Best freshness (in-store cooking), cutting-edge tech, tea salon level desserts, 
                          creative campaigns. <strong>For the complete experience and consistent quality.</strong>
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h5 className="font-semibold text-gray-900 text-sm">🎮 Kura Sushi: The Playful</h5>
                        <p className="text-gray-700 text-xs">
                          &quot;Bikkura Pon!&quot; system (game every 5 plates), &quot;no additives&quot; concept. 
                          <strong>Perfect for families with young children.</strong>
                        </p>
                      </div>
                      
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h5 className="font-semibold text-gray-900 text-sm">🧂 Hama Sushi: The Customizable</h5>
                        <p className="text-gray-700 text-xs">
                          Variety of soy sauces at table, ultra-competitive prices. 
                          <strong>For taste experimenters.</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mt-8">
                  <h4 className="font-semibold text-orange-900 mb-2">🎌 Final Message to International Visitors</h4>
                  <p className="text-orange-800 text-sm">
                    <strong>Sushiro is not just a restaurant, it's an initiation into modern Japanese culture.</strong> 
                    You'll discover how Japan fuses millennial tradition and technological innovation, 
                    how quality can rhyme with accessibility, and how efficiency can create conviviality. 
                    <strong>A cultural as much as culinary experience!</strong>
                  </p>
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
                      <div className="text-gray-600">11am-11pm (7 days/week)</div>
                      <div className="text-gray-500 text-xs">Varies by location</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-gray-400 mt-1" />
                    <div>
                      <div className="font-medium text-gray-900">Location</div>
                      <div className="text-gray-600">Shopping centers, urban areas</div>
                      <div className="text-gray-500 text-xs">600+ restaurants in Japan</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CreditCard className="w-4 h-4 text-gray-400 mt-1" />
                    <div>
                      <div className="font-medium text-gray-900">Payment</div>
                      <div className="text-gray-600">Cash, cards, mobile payment</div>
                      <div className="text-gray-500 text-xs">Self-service terminals</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Users className="w-4 h-4 text-gray-400 mt-1" />
                    <div>
                      <div className="font-medium text-gray-900">Clientele</div>
                      <div className="text-gray-600">Families, couples, solo</div>
                      <div className="text-gray-500 text-xs">All ages welcome</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <a 
                    href="https://www.sushiro.co.jp" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 text-sm font-medium"
                  >
                    Official Sushiro website →
                  </a>
                </div>
              </div>

              {/* Average prices */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Average Prices</h3>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Standard sushi</span>
                    <span className="font-medium">120¥</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Premium sushi</span>
                    <span className="font-medium">190-290¥</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Niku-sushi</span>
                    <span className="font-medium">210-350¥</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Side dishes</span>
                    <span className="font-medium">160-390¥</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 mt-2">
                    <div className="flex justify-between font-medium">
                      <span className="text-gray-900">Average meal</span>
                      <span className="text-gray-900">1,200-2,000¥</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Our rating */}
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Evaluation</h3>
                <div className="flex items-center mb-2">
                  <div className="flex text-blue-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <span className="text-sm text-gray-600 ml-2">Undisputed leader</span>
                </div>
                
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Quality/Price</span>
                    <span className="font-semibold text-blue-600">Revolutionary</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Innovation</span>
                    <span className="font-semibold text-blue-600">World pioneer</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Accessibility</span>
                    <span className="font-semibold text-blue-600">Perfect</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Cultural experience</span>
                    <span className="font-semibold text-blue-600">Authentic</span>
                  </div>
                </div>
                
                <p className="text-sm text-gray-700">
                  <strong>Kaiten-zushi excellence in its most accomplished form.</strong> 
                  Sushiro embodies the perfect fusion between Japanese culinary tradition and technological innovation. 
                  <strong>#1 since 2011</strong> thanks to one obsession: absolute quality at democratic prices. 
                  An experience that redefines your vision of sushi and Japanese service.
                </p>
                
                <div className="mt-4 pt-3 border-t border-blue-200">
                  <p className="text-xs text-blue-700">
                    <strong>🎯 Recommended for:</strong> First kaiten-zushi discovery, 
                    families, innovation enthusiasts, controlled budget without quality compromise.
                  </p>
                </div>
              </div>

              {/* Navigation to other chains */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Other Kaiten-zushi</h3>
                
                <div className="space-y-3">
                  <Link 
                    href="/chains/kura-sushi" 
                    className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="font-medium text-gray-900">Kura Sushi</div>
                    <div className="text-sm text-gray-600">The automated pioneer</div>
                  </Link>
                  
                  <Link 
                    href="/chains/hama-sushi" 
                    className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="font-medium text-gray-900">Hama Sushi</div>
                    <div className="text-sm text-gray-600">Ultra-competitive prices</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
