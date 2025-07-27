import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Heart, Flame, Crown, ChefHat, DollarSign } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Dom Dom Burger ドムドムバーガー | First Burger | JapanChains",
  description: "Japan's first hamburger (1970). Creative menus, crab burger, iconic revival.",
  keywords: [
    'dom dom burger', 'ドムドムバーガー', 'Japanese hamburger', 'oldest',
    'domuzō-kun', 'どむぞうくん', 'phoenix', 'bold creations',
    'historic hamburger', 'Japanese mascot', 'revival', 'wabi-sabi',
    'fujisaki shinobu', 'first Japanese burger', 'daiei', 'omoiyari'
  ],
  openGraph: {
    title: "Dom Dom Burger ドムドムバーガー | First Burger | JapanChains",
    description: "Japan's first hamburger (1970). Creative menus, crab burger, iconic revival.",
    type: 'article',
    locale: "en_US",
    siteName: "JapanChains - Your Guide to Japanese Restaurants"
  },
  alternates: {
    canonical: '/chaines/domdom',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  }
};

export default function DomDomPage() {
  return (
    <>
      <ChainViewTracker chainName="domdom" chainCategory="burgers" />
      <div className="min-h-screen bg-gray-50">
      {/* Header with back button */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/chaines" 
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Chains
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-red-600 rounded-lg flex items-center justify-center">
              <Flame className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dom Dom Burger</h1>
              <p className="text-lg text-gray-600">ドムドムバーガー</p>
              <p className="text-sm text-gray-500">The Phoenix of Japanese Burgers - A Resurrected Legend</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contenu principal */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Fascinating History */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <History className="w-5 h-5 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900">A Fascinating History</h2>
              </div>
              
              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-gray-700 mb-4">
                  <strong>Dom Dom Burger</strong> is not just a fast-food chain, it's a living legend. 
                  Founded in <strong>1970</strong>, a year before McDonald's in Japan, Dom Dom is the 
                  <strong>very first Japanese hamburger</strong> in history. Its name comes from the 
                  Daiei slogan "どんどん安く" (dondon yasuku - "more and more affordable").
                </p>
                
                <div className="bg-red-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-red-800 mb-2">🔥 The Phoenix Saga</h3>
                  <ul className="text-red-700 space-y-2">
                    <li>• <strong>1970</strong> - Revolutionary Birth: First Japanese burger</li>
                    <li>• <strong>80s-90s</strong> - Golden Age: Nearly 400 restaurants in Japan</li>
                    <li>• <strong>2000s</strong> - Decline: Reduced to only 27 restaurants</li>
                    <li>• <strong>2017</strong> - Rebirth: Acquisition and new vision</li>
                    <li>• <strong>2018-2025</strong> - Miraculous Resurrection under Fujisaki Shinobu</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold mb-3">📱 The Social Revolution</h3>
                <p className="mb-4">
                  Under the visionary leadership of President Fujisaki Shinobu (藤﨑忍), Dom Dom has 
                  achieved the impossible: transforming a nearly extinct brand into a viral phenomenon. 
                  Thanks to bold menus and a brilliant social strategy, the chain has recaptured 
                  the hearts of Japanese people and international media.
                </p>

                <h3 className="text-xl font-semibold mb-3">🎯 The "Wabi-Sabi" Spirit</h3>
                <p className="mb-4">
                  Dom Dom embodies the Japanese aesthetic of "wabi-sabi" - beauty in imperfection 
                  and transience. Unlike standardized global chains, Dom Dom celebrates 
                  authenticity, bold innovation, and emotional connection with its fans.
                </p>

                <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                  <h4 className="font-semibold text-yellow-800 mb-2">👑 The "Omoiyari" Philosophy</h4>
                  <p className="text-yellow-700 text-sm">
                    President Fujisaki applies the Japanese concept of "omoiyari" (思いやり - empathy/benevolence) 
                    in her management. This humanist approach prioritizes the happiness of customers and employees 
                    before profits, creating a unique corporate culture in the fast-food industry.
                  </p>
                </div>
              </div>
            </div>

            {/* Revolutionary Creative Menus */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Utensils className="w-5 h-5 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900">Revolutionary Menus</h2>
              </div>

              {/* Classic Signature Burgers */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🍔 Timeless Classics</h3>
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
                        <td className="p-3 font-medium">"Amakara" Chicken Burger</td>
                        <td className="p-3">甘辛チキンバーガー</td>
                        <td className="p-3">The #1 for 20 years, unique sweet and savory sauce</td>
                        <td className="p-3">¥520</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">"Atsuyaki" Thick Omelette Burger</td>
                        <td className="p-3">手作り厚焼きたまごバーガー</td>
                        <td className="p-3">Thick homemade omelette, specialty created by the president</td>
                        <td className="p-3">¥450</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Dom Dom Classic</td>
                        <td className="p-3">ドムドムクラシック</td>
                        <td className="p-3">The original burger, authentic 1970 recipe</td>
                        <td className="p-3">¥400</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Crazy Burgers - Limited Editions */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🦀 Legendary "Crazy" Burgers</h3>
                <div className="bg-orange-50 p-4 rounded-lg mb-4">
                  <p className="text-orange-800 text-sm font-medium mb-2">
                    🔥 These bold creations have caused a sensation on social media and in international media!
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 font-medium">Creation</th>
                        <th className="text-left p-3 font-medium">日本語</th>
                        <th className="text-left p-3 font-medium">Description</th>
                        <th className="text-left p-3 font-medium">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-3 font-medium">Whole Crab Burger</td>
                        <td className="p-3">丸ごと!!カニバーガー</td>
                        <td className="p-3">Fried whole soft-shell crab, global viral sensation</td>
                        <td className="p-3 text-red-600">¥980 - Legendary</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Okonomiyaki Burger</td>
                        <td className="p-3">お好み焼きバーガー</td>
                        <td className="p-3">Japanese pancake with sauce, mayo, ginger</td>
                        <td className="p-3 text-yellow-600">¥680 - Limited Edition</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Katsudon Burger</td>
                        <td className="p-3">かつ丼バーガー</td>
                        <td className="p-3">Recreation of the rice dish in burger version</td>
                        <td className="p-3 text-yellow-600">¥750 - Seasonal</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Shungiku Kakiage Burger</td>
                        <td className="p-3">春菊かき揚げバーガー</td>
                        <td className="p-3">Edible chrysanthemum fritter, vegetable innovation</td>
                        <td className="p-3 text-green-600">¥620 - Comeback</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Ika Devil Burger</td>
                        <td className="p-3">イカデビルバーガー</td>
                        <td className="p-3">Fried squid in black bun, dramatic look</td>
                        <td className="p-3 text-purple-600">¥780 - Special</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Culinary Philosophy */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">🎨 "Sōzai Pan" Philosophy</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-red-600 mb-3">Cultural Innovation</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Creative fusion</strong> - Japanese dishes transformed into burgers</li>
                      <li>• <strong>"B-kyū gourmet" spirit</strong> - Authentic popular gastronomy</li>
                      <li>• <strong>Made-to-viral</strong> - Creations designed for social interaction</li>
                      <li>• <strong>Wabi-sabi</strong> - Beauty in assumed imperfection</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-red-600 mb-3">Cultural Heritage</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>"Sōzai pan" culture</strong> - Tradition of Japanese meal breads</li>
                      <li>• <strong>Limited edition</strong> - Concept of Japanese ephemerality</li>
                      <li>• <strong>Fan interaction</strong> - Co-creation with the community</li>
                      <li>• <strong>Storytelling</strong> - Each burger tells a story</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Domuzō-kun et culture */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="w-5 h-5 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900">Domuzō-kun (どむぞうくん) - Plus qu'une Mascotte</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-pink-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-pink-800 mb-2">🐘 L'Éléphant Bien-aimé</h3>
                  <p className="text-pink-700 text-sm mb-3">
                    Depuis 1970, Domuzō-kun l'éléphant accompagne Dom Dom dans toutes ses aventures. 
                    Témoin silencieux de l'âge d'or, du déclin et de la renaissance, il incarne 
                    la résilience et l'optimisme du Japon.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🎭 Symbolisme</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Éléphant</strong> - Force, mémoire, bienveillance</li>
                      <li>• <strong>Cercle rouge</strong> - Connexion, communauté, chaleur</li>
                      <li>• <strong>Évolution design</strong> - Adapté mais jamais abandonné</li>
                      <li>• <strong>Nostalgie</strong> - Lien avec l'enfance et les souvenirs</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🛍️ Culture des Fans</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Peluches collector</strong> - Sold-out systématique</li>
                      <li>• <strong>Collaborations mode</strong> - BEAMS, FRAPBOIS</li>
                      <li>• <strong>Art toys</strong> - Figurines édition limitée</li>
                      <li>• <strong>Community "Dom-ren"</strong> - Fans dévoués</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Glossaire Dom Dom */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Award className="w-5 h-5 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900">Glossaire Dom Dom : Les Mots-Clés</h2>
              </div>
              
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-600 mb-2">Domuzō-kun (どむぞうくん)</h4>
                  <p className="text-sm text-gray-700">
                    Mascotte éléphant de Dom Dom depuis 1970. Symbole de parenté, d'amour 
                    et de croissance. Témoin de toute l'histoire épique de la marque.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-600 mb-2">Sōzai Pan (惣菜パン)</h4>
                  <p className="text-sm text-gray-700">
                    Catégorie japonaise unique de pains salés contenant des plats complets. 
                    Inspire la philosophie créative de Dom Dom pour transformer les plats 
                    traditionnels en burgers.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-600 mb-2">B-kyū Gourmet (B級グルメ)</h4>
                  <p className="text-sm text-gray-700">
                    Cuisine populaire japonaise - pas chère mais délicieuse et profondément 
                    aimée du peuple. Dom Dom incarne parfaitement cet esprit authentique.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-600 mb-2">Omoiyari (思いやり)</h4>
                  <p className="text-sm text-gray-700">
                    Philosophie de management de Fujisaki Shinobu : empathie, considération 
                    et bienveillance envers clients et employés avant tout.
                  </p>
                </div>

                <div className="border border-gray-200 rounded-lg p-4">
                  <h4 className="font-semibold text-red-600 mb-2">Wabi-Sabi (わびさび)</h4>
                  <p className="text-sm text-gray-700">
                    Esthétique japonaise trouvant la beauté dans l'imperfection et l'éphémère. 
                    Dom Dom incarne cette philosophie face aux standards globaux parfaits.
                  </p>
                </div>
              </div>
            </div>

            {/* Ordering Guide */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Users className="w-5 h-5 text-red-600" />
                <h2 className="text-2xl font-bold text-gray-900">How to Order</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">🗣️ Authentic Experience</h3>
                  <p className="text-blue-700 text-sm mb-3">
                    Dom Dom prioritizes human interaction. Counter service allows 
                    you to interact with staff and discover current specialties.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">📋 Ordering Steps</h4>
                    <ol className="text-sm text-gray-600 space-y-1">
                      <li><strong>1.</strong> Observe the illustrated menu above the counter</li>
                      <li><strong>2.</strong> Ask for daily specials</li>
                      <li><strong>3.</strong> Choose burger only or set menu</li>
                      <li><strong>4.</strong> Select sides and drink</li>
                      <li><strong>5.</strong> Pay and wait for your number to be called</li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">💡 Insider Tips</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Ask if there are any limited editions</li>
                      <li>• Photograph your burger for social media</li>
                      <li>• Taste the special sides</li>
                      <li>• Buy Domuzō-kun merchandise</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-2">🎌 Cultural Immersion</h4>
                  <p className="text-sm text-green-700">
                    Eating at Dom Dom is participating in a moment of Japanese history. 
                    Each visit helps keep this legend of Japanese fast food alive 
                    and supports a company that embodies Japanese values of innovation 
                    and perseverance.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Essential Information */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Essential Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-red-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Hours</div>
                    <div className="text-sm text-gray-600">10:00 AM - 9:00 PM (general)</div>
                    <div className="text-sm text-gray-500">Varies by location</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-red-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-sm text-gray-600">50+ resurrected restaurants</div>
                    <div className="text-sm text-gray-500">Mainly Kanto region</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CreditCard className="w-5 h-5 text-red-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Payment</div>
                    <div className="text-sm text-gray-600">Cards, cash, IC cards</div>
                    <div className="text-sm text-gray-500">QR codes accepted</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <DollarSign className="w-5 h-5 text-red-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Average price</div>
                    <div className="text-sm text-gray-600">¥600-900 per person</div>
                    <div className="text-sm text-gray-500">Affordable and authentic</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Living Legend */}
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-red-800 mb-4">
                🔥 Living Legend
              </h3>
              
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-red-700">Historic first</div>
                  <div className="text-red-600">The very first Japanese burger (1970)</div>
                </div>
                
                <div>
                  <div className="font-medium text-red-700">Resurrection</div>
                  <div className="text-red-600">From 27 to 50+ restaurants in 6 years</div>
                </div>
                
                <div>
                  <div className="font-medium text-red-700">Innovation</div>
                  <div className="text-red-600">Viral burgers and Japanese creativity</div>
                </div>
                
                <div>
                  <div className="font-medium text-red-700">Culture</div>
                  <div className="text-red-600">Embodiment of the "wabi-sabi" spirit</div>
                </div>
              </div>
            </div>

            {/* Fujisaki Shinobu */}
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">
                👑 Fujisaki Shinobu
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-purple-700">Unusual career path</div>
                  <div className="text-purple-600">From housewife to visionary CEO</div>
                </div>
                <div>
                  <div className="font-medium text-purple-700">Philosophy "Omoiyari"</div>
                  <div className="text-purple-600">Management through empathy and benevolence</div>
                </div>
                <div>
                  <div className="font-medium text-purple-700">Innovation</div>
                  <div className="text-purple-600">Creator of the legendary thick egg burger</div>
                </div>
              </div>
            </div>

            {/* Historical Context */}
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                📚 Historical Context
              </h3>
              <p className="text-sm text-yellow-700">
                Dom Dom Burger is not just a restaurant, it's a symbol of Japanese adaptation 
                and resilience. Born from the rivalry between Daiei and McDonald's, 
                it represents Japan's ability to create its own versions of Western concepts, 
                then reinvent them in a unique and authentic way.
              </p>
            </div>

            {/* Useful Links */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
              <div className="space-y-2">
                <a href="https://www.domdom.jp/" 
                   className="block text-red-600 hover:text-red-700 text-sm">
                  → Official Dom Dom Burger Website
                </a>
                <a href="/type-plat/burgers" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Complete Japanese Burgers Guide
                </a>
                <a href="/chaines/mos-burger" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Compare with MOS Burger
                </a>
                <a href="/chaines/freshness-burger" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Compare with Freshness Burger
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
