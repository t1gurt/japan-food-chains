import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Gamepad2, Gift, Shield } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Kura Sushi くら寿司 | Interactive Kaiten | JapanChains",
  description: "100% additive-free pioneer! Fun Bikkura-Pon system, antibacterial protection, revolutionary technology. Muttenka quality.",
  keywords: [
    'kura sushi', 'くら寿司', 'muttenka additive-free', 'bikkura-pon game',
    'antibacterial protection', 'revolutionary kaiten', 'family fun',
    'sushi technology', 'natural quality', 'culinary innovation'
  ],
  openGraph: {
    title: "Kura Sushi くら寿司 | Interactive Kaiten | JapanChains",
    description: "100% additive-free pioneer! Fun Bikkura-Pon system, antibacterial protection, revolutionary technology. Muttenka quality.",
    type: 'article',
    locale: "en_US",
    siteName: "JapanChains - Japanese Restaurant Guide"
  },
  alternates: {
    canonical: '/chains/kura-sushi',
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function KuraSushiPage() {
  return (
    <>
      <ChainViewTracker chainName="kura-sushi" chainCategory="kaiten_zushi" />
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
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl font-bold">く</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Kura Sushi</h1>
                <p className="text-lg text-gray-600">くら寿司 | 無添くら寿司</p>
                <p className="text-sm text-gray-500">The revolutionary additive-free kaiten-zushi</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Presentation */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Info className="w-5 h-5 text-purple-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Overview</h2>
                </div>
                
                <div className="prose prose-gray max-w-none">                  <p className="text-lg text-gray-700 mb-4">
                    <strong>Kura Sushi (くら寿司)</strong> is a revolutionary kaiten-zushi chain that has transformed 
                    the industry with its <em>"Muttenka"</em> (無添加) concept - additive-free. Founded in 1977 
                    in Osaka, this innovative Japanese restaurant has established itself as Japan's most creative chain, 
                    combining sushi tradition with modern technology.
                    culinary art and cutting-edge technology.
                  </p>
                  
                  <div className="bg-purple-50 p-4 rounded-lg mb-6">
                    <h3 className="font-semibold text-purple-800 mb-2">🎯 The revolutionary concept</h3>
                    <ul className="text-purple-700 space-y-1">
                      <li>• <strong>100% chemical additive-free</strong> - No preservatives, artificial colors, or flavor enhancers</li>
                      <li>• <strong>Bikkura-Pon! System</strong> - Integrated capsule game to entertain customers</li>
                      <li>• <strong>Anti-virus technology</strong> - Unique antibacterial protection system</li>
                      <li>• <strong>Complete traceability</strong> - All ingredients tracked from origin to plate</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold mb-3">🏆 Technological innovations</h3>
                  <p className="mb-4">
                    Kura Sushi is a pioneer in integrating technology into Japanese dining. 
                    Their restaurants use robots for certain preparations, multilingual 
                    touch ordering systems, and their famous sushi protection system with 
                    automatic antibacterial covers.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">🌍 International expansion</h3>
                  <p className="mb-4">
                    With over 540 restaurants in Japan and a growing presence in the United States, South Korea 
                    and Taiwan, Kura Sushi exports its unique model of healthy and fun dining worldwide.
                  </p>
                </div>
              </div>

              {/* Detailed menu */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <Utensils className="w-5 h-5 text-purple-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Detailed Menu</h2>
                </div>

                {/* Pricing system */}
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-purple-800 mb-3">💰 Color-coded plate pricing system</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="text-center">
                      <div className="w-8 h-8 bg-yellow-400 rounded-full mx-auto mb-1"></div>
                      <div className="text-sm font-medium">¥115</div>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 bg-red-500 rounded-full mx-auto mb-1"></div>
                      <div className="text-sm font-medium">¥165</div>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 bg-black rounded-full mx-auto mb-1"></div>
                      <div className="text-sm font-medium">¥275</div>
                    </div>
                    <div className="text-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full mx-auto mb-1"></div>
                      <div className="text-sm font-medium">¥385</div>
                    </div>
                  </div>
                </div>

                {/* Popular sushi */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">🍣 Popular Sushi (¥115)</h3>
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
                          <td className="p-3 font-medium">Salmon</td>
                          <td className="p-3">サーモン</td>
                          <td className="p-3">Fresh Atlantic salmon, additive-free</td>
                          <td className="p-3">¥115</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Tuna</td>
                          <td className="p-3">まぐろ</td>
                          <td className="p-3">Traditional bluefin tuna, sashimi quality</td>
                          <td className="p-3">¥115</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Hamachi</td>
                          <td className="p-3">はまち</td>
                          <td className="p-3">Japanese yellowtail, melting texture</td>
                          <td className="p-3">¥115</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Cooked Shrimp</td>
                          <td className="p-3">えび</td>
                          <td className="p-3">Boiled shrimp, mild and sweet</td>
                          <td className="p-3">¥115</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Squid</td>
                          <td className="p-3">いか</td>
                          <td className="p-3">Fresh squid, crispy texture</td>
                          <td className="p-3">¥115</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Japanese Omelet</td>
                          <td className="p-3">たまご</td>
                          <td className="p-3">Traditional tamago, slightly sweet</td>
                          <td className="p-3">¥115</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Premium specialties */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">⭐ Premium Specialties</h3>
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
                          <td className="p-3 font-medium">Fatty Tuna (Otoro)</td>
                          <td className="p-3">大とろ</td>
                          <td className="p-3">Tuna belly, exceptionally tender</td>
                          <td className="p-3">¥385</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Sea Urchin</td>
                          <td className="p-3">うに</td>
                          <td className="p-3">Hokkaido sea urchin, creamy</td>
                          <td className="p-3">¥275</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Ikura</td>
                          <td className="p-3">いくら</td>
                          <td className="p-3">Salmon roe, bursts in mouth</td>
                          <td className="p-3">¥275</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Grilled Eel</td>
                          <td className="p-3">うなぎ</td>
                          <td className="p-3">Unagi glazed with tare sauce, intense flavor</td>
                          <td className="p-3">¥275</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Kids menu and desserts */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4">🍮 Desserts & Kids Menu</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h4 className="font-medium text-purple-600">Popular desserts</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>Ice cream mochi</strong> - ¥115 (various flavors)</li>
                        <li>• <strong>Dorayaki</strong> - ¥165 (pancake filled with anko)</li>
                        <li>• <strong>Pudding</strong> - ¥115 (Japanese style)</li>
                        <li>• <strong>Cheesecake</strong> - ¥165 (light version)</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-medium text-purple-600">Kids menu</h4>
                      <ul className="space-y-2 text-sm">
                        <li>• <strong>Tamago Set</strong> - ¥165 (omelet + drink)</li>
                        <li>• <strong>Salmon Set</strong> - ¥215 (grilled salmon + sides)</li>
                        <li>• <strong>Kids Bento</strong> - ¥385 (adapted assortment)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bikkura-Pon System */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Gamepad2 className="w-5 h-5 text-purple-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Bikkura-Pon! System 🎮</h2>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg mb-4">
                  <h3 className="font-semibold text-purple-800 mb-2">🎁 How does it work?</h3>
                  <ol className="text-purple-700 space-y-2">
                    <li><strong>1.</strong> Eat your sushi and slide 5 empty plates into the slot</li>
                    <li><strong>2.</strong> A fun video game automatically starts on the screen</li>
                    <li><strong>3.</strong> If you win, you receive a surprise capsule!</li>
                    <li><strong>4.</strong> Collectionnez les figurines exclusives Kura Sushi</li>
                  </ol>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-purple-600 mb-2">Possible rewards</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Popular character figurines</li>
                      <li>• Exclusive Kura Sushi keychains</li>
                      <li>• Collector stickers</li>
                      <li>• Miniature kitchen accessories</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-600 mb-2">Why kids love it</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Transforms the meal into a game</li>
                      <li>• Encourages finishing their plate</li>
                      <li>• Collection of unique souvenirs</li>
                      <li>• Interactive family experience</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Ordering guide */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Users className="w-5 h-5 text-purple-600" />
                  <h2 className="text-2xl font-bold text-gray-900">How to Order</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-yellow-800 mb-2">📱 Touch screen ordering system</h3>
                    <p className="text-yellow-700 text-sm mb-3">
                      Kura Sushi uses multilingual touch screens at each table, available in English!
                    </p>
                    <ol className="text-yellow-700 text-sm space-y-1">
                      <li><strong>1.</strong> Tap the screen and select "English"</li>
                      <li><strong>2.</strong> Browse the menu by categories (sushi, maki, desserts...)</li>
                      <li><strong>3.</strong> Touch the image of the desired dish</li>
                      <li><strong>4.</strong> Confirm your order</li>
                      <li><strong>5.</strong> Your order arrives via the upper conveyor belt</li>
                    </ol>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">🍣 Traditional conveyor belt</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Free selection of passing plates</li>
                        <li>• Perfect for discovering new tastes</li>
                        <li>• Plates renewed regularly</li>
                        <li>• Automatic antibacterial protection</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">🚄 Express ordering</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>• Direct delivery to your table</li>
                        <li>• Guaranteed freshness</li>
                        <li>• Selection of premium products</li>
                        <li>• Arrives via the upper rail</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Practical information */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Shield className="w-5 h-5 text-purple-600" />
                  <h2 className="text-2xl font-bold text-gray-900">"Muttenka" Concept (Additive-free)</h2>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-purple-600 mb-3">🌿 Quality commitment</h3>
                    <ul className="text-sm space-y-2">
                      <li><strong>No artificial preservatives</strong> - Natural freshness preserved</li>
                      <li><strong>No chemical colorings</strong> - Natural ingredient colors</li>
                      <li><strong>No flavor enhancers</strong> - Authentic flavors respected</li>
                      <li><strong>Complete traceability</strong> - Origin of each ingredient known</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-purple-600 mb-3">🔬 Safety innovation</h3>
                    <ul className="text-sm space-y-2">
                      <li><strong>Anti-virus system</strong> - Advanced antibacterial protection</li>
                      <li><strong>Automatic covers</strong> - Maximum conveyor belt hygiene</li>
                      <li><strong>Temperature control</strong> - Cold chain respected</li>
                      <li><strong>High-frequency cleaning</strong> - Continuous disinfection</li>
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
                    <Clock className="w-5 h-5 text-purple-600 mt-0.5" />
                    <div>
                      <div className="font-medium">Hours</div>
                      <div className="text-sm text-gray-600">11:00 AM - 11:00 PM (general)</div>
                      <div className="text-sm text-gray-500">Varies by location</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-purple-600 mt-0.5" />
                    <div>
                      <div className="font-medium">Location</div>
                      <div className="text-sm text-gray-600">540+ restaurants in Japan</div>
                      <div className="text-sm text-gray-500">Shopping centers, tourist areas</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CreditCard className="w-5 h-5 text-purple-600 mt-0.5" />
                    <div>
                      <div className="font-medium">Payment</div>
                      <div className="text-sm text-gray-600">Cash, cards, IC cards</div>
                      <div className="text-sm text-gray-500">PayPay, other e-wallets</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Gift className="w-5 h-5 text-purple-600 mt-0.5" />
                    <div>
                      <div className="font-medium">Average price</div>
                      <div className="text-sm text-gray-600">¥1,500-2,500 per person</div>
                      <div className="text-sm text-gray-500">Depending on appetite</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tips for visitors */}
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-800 mb-4">
                  💡 Tips for Visitors
                </h3>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-medium text-purple-700">Best time</div>
                    <div className="text-purple-600">Avoid 12:00-2:00 PM and 7:00-9:00 PM (peak hours)</div>
                  </div>
                  
                  <div>
                    <div className="font-medium text-purple-700">With children</div>
                    <div className="text-purple-600">The Bikkura-Pon! system makes the experience magical</div>
                  </div>
                  
                  <div>
                    <div className="font-medium text-purple-700">For vegetarians</div>
                    <div className="text-purple-600">Limited options: tamago, avocado, inari, kappa-maki</div>
                  </div>
                  
                  <div>
                    <div className="font-medium text-purple-700">Save money</div>
                    <div className="text-purple-600">Focus on yellow plates (¥115)</div>
                  </div>
                </div>
              </div>

              {/* Cultural note */}
              <div className="bg-yellow-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                  🏮 Cultural Note
                </h3>
                <p className="text-sm text-yellow-700">
                  Kura Sushi represents the modern evolution of kaiten-zushi, combining Japanese culinary 
                  tradition with technological innovation. The "Muttenka" concept reflects the growing 
                  concern of Japanese people for healthy eating, while preserving the pleasure 
                  and conviviality of family meals.
                </p>
              </div>

              {/* Useful links */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
                <div className="space-y-2">
                  <a href="https://www.kurasushi.co.jp/" 
                     className="block text-purple-600 hover:text-purple-700 text-sm">
                    → Official Kura Sushi website
                  </a>
                  <a href="/type-plat/kaiten-zushi" 
                     className="block text-orange-600 hover:text-orange-700 text-sm">
                    → Complete kaiten-zushi guide
                  </a>
                  <a href="/chains/sushiro" 
                     className="block text-orange-600 hover:text-orange-700 text-sm">
                    → Compare with Sushiro
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