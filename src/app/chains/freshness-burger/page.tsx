import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Heart, Leaf, Crown, ChefHat, DollarSign } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Freshness Burger フレッシュネスバーガー | Made to Order | JapanChains",
  description: "Premium burgers made to order. Fresh local ingredients, fast-casual experience.",
  keywords: [
    'freshness burger', 'フレッシュネスバーガー', 'premium burgers', 'fresh ingredients',
    'superior quality', 'gourmet burgers', 'Japanese style',
    'Japanese burgers', 'premium quality', 'natural ingredients'
  ],
  openGraph: {
    title: "Freshness Burger フレッシュネスバーガー | Made to Order | JapanChains",
    description: "Premium burgers made to order. Fresh local ingredients, fast-casual experience.",
    type: 'article',
    locale: "en_US",
    siteName: "JapanChains - Your Guide to Japanese Restaurants"
  },
  alternates: {
    canonical: '/chaines/freshness-burger',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  },
};

export default function FreshnessBurgerPage() {
  return (
    <>
      <ChainViewTracker chainName="freshness-burger" chainCategory="burgers" />
      <div className="min-h-screen bg-gray-50">
      {/* Header with back button */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/type-plat/burgers" 
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Japanese Burgers
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-green-700 rounded-lg flex items-center justify-center">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Freshness Burger</h1>
              <p className="text-lg text-gray-600">フレッシュネスバーガー</p>
              <p className="text-sm text-gray-500">Japan's premium "Made to Order" burger</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contenu principal */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Introduction */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Info className="w-5 h-5 text-green-700" />
                <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
              </div>
              
              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-gray-700 mb-4">
                  <strong>Freshness Burger</strong> is Japan's premium burger chain, founded in 1992 
                  with a simple philosophy: "Made to Order" with 100% fresh ingredients. Unlike 
                  traditional fast-food chains, Freshness Burger prioritizes quality over speed, 
                  offering burgers prepared to order in a relaxed "casual dining" atmosphere.
                </p>
                
                <div className="bg-green-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-green-800 mb-2">🌿 "Freshness" Philosophy</h3>
                  <ul className="text-green-700 space-y-1">
                    <li>• <strong>Made to Order</strong> - Each burger prepared to order</li>
                    <li>• <strong>Daily fresh ingredients</strong> - Vegetables delivered every morning</li>
                    <li>• <strong>Artisan bread</strong> - Buns baked on-site several times a day</li>
                    <li>• <strong>Premium meat</strong> - High-quality Australian and Japanese beef</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold mb-3">🎯 Unique positioning</h3>
                <p className="mb-4">
                  Freshness Burger occupies the "fast-casual" niche, between traditional fast food 
                  and classic restaurants. With prices about 50% higher than McDonald's 
                  but significantly higher quality, the chain attracts an urban clientele 
                  who prioritize quality and freshness.
                </p>

                <h3 className="text-xl font-semibold mb-3">🏪 Restaurant concept</h3>
                <p className="mb-4">
                  Freshness Burger restaurants feature a modern and warm design, with 
                  comfortable spaces for dining in. The relaxed atmosphere allows 
                  you to take your time, contrasting with the "rush" aspect of traditional chains. 
                  Many restaurants also offer coffee corners with premium beverages.
                </p>

                <h3 className="text-xl font-semibold mb-3">🌍 Controlled expansion</h3>
                <p className="mb-4">
                  With approximately 180 restaurants mainly concentrated in the Kanto region 
                  (Tokyo and surroundings), Freshness Burger prioritizes quality over quantity, 
                  maintaining high standards rather than rapid expansion.
                </p>
              </div>
            </div>

            {/* Menu détaillé */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Utensils className="w-5 h-5 text-green-700" />
                <h2 className="text-2xl font-bold text-gray-900">Menu Signature</h2>
              </div>

              {/* Burgers signature */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🍔 Burgers Signature</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 font-medium">Nom français</th>
                        <th className="text-left p-3 font-medium">日本語</th>
                        <th className="text-left p-3 font-medium">Description</th>
                        <th className="text-left p-3 font-medium">Prix</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-3 font-medium">Classic Beef Burger</td>
                        <td className="p-3">クラシックビーフバーガー</td>
                        <td className="p-3">Le burger signature, bœuf australien frais</td>
                        <td className="p-3">¥580</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Freshness Burger</td>
                        <td className="p-3">フレッシュネスバーガー</td>
                        <td className="p-3">Double steak, légumes croquants du jour</td>
                        <td className="p-3">¥780</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">The Tower Burger</td>
                        <td className="p-3">ザ・タワーバーガー</td>
                        <td className="p-3">Burger géant 3 étages, défi gourmand</td>
                        <td className="p-3">¥1,080</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Bacon Cheese Deluxe</td>
                        <td className="p-3">ベーコンチーズデラックス</td>
                        <td className="p-3">Bacon fumé, fromage fondu gourmand</td>
                        <td className="p-3">¥850</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Burgers premium */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">⭐ Gamme Premium</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 font-medium">Produit</th>
                        <th className="text-left p-3 font-medium">日本語</th>
                        <th className="text-left p-3 font-medium">Description</th>
                        <th className="text-left p-3 font-medium">Prix</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-3 font-medium">Wagyu Premium</td>
                        <td className="p-3">和牛プレミアム</td>
                        <td className="p-3">Wagyu japonais, luxe absolu</td>
                        <td className="p-3">¥1,480</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Salmon Teriyaki</td>
                        <td className="p-3">サーモンテリヤキ</td>
                        <td className="p-3">Saumon grillé, sauce teriyaki maison</td>
                        <td className="p-3">¥950</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Avocado Veggie</td>
                        <td className="p-3">アボカドベジー</td>
                        <td className="p-3">Galette végétale, avocat frais</td>
                        <td className="p-3">¥780</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Accompagnements et boissons */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">🍟 Accompagnements & Boissons</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-green-700 mb-3">Accompagnements</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Frites fraîches</strong> - ¥280 (fraîches, coupées sur place)</li>
                      <li>• <strong>Sweet Potato Fries</strong> - ¥320 (option plus saine)</li>
                      <li>• <strong>Onion Rings</strong> - ¥350 (rondelles d'oignon croustillantes)</li>
                      <li>• <strong>Side Salad</strong> - ¥380 (légumes biologiques)</li>
                      <li>• <strong>Seasonal Soup</strong> - ¥280 (recette changeante)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-green-700 mb-3">Boissons premium</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Café premium</strong> - ¥320 (grains sélectionnés)</li>
                      <li>• <strong>Thé japonais</strong> - ¥280 (infusion longue)</li>
                      <li>• <strong>Smoothies</strong> - ¥450 (5 parfums)</li>
                      <li>• <strong>Jus locaux</strong> - ¥480 (sélection locale)</li>
                      <li>• <strong>Sodas artisanaux</strong> - ¥320 (sans conservateurs)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Concept Made to Order */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <ChefHat className="w-5 h-5 text-green-700" />
                <h2 className="text-2xl font-bold text-gray-900">Le Concept "Made to Order"</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-yellow-800 mb-2">⏱️ Temps d'attente</h3>
                  <p className="text-yellow-700 text-sm mb-3">
                    Contrairement au fast-food traditionnel, comptez 8-12 minutes d'attente pour recevoir 
                    votre commande fraîchement préparée.
                  </p>
                  <ol className="text-yellow-700 text-sm space-y-1">
                    <li><strong>1.</strong> Commande prise et numéro attribué</li>
                    <li><strong>2.</strong> Préparation immédiate en cuisine</li>
                    <li><strong>3.</strong> Cuisson du steak à la plancha</li>
                    <li><strong>4.</strong> Assemblage avec légumes frais du jour</li>
                    <li><strong>5.</strong> Service à table ou comptoir</li>
                  </ol>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🥩 Qualité de la viande</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Bœuf australien grain-fed exclusivement</li>
                      <li>• Steaks formés à la main, jamais congelés</li>
                      <li>• Cuisson à la plancha pour préserver les jus</li>
                      <li>• Assaisonnement au moment de la cuisson</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🥬 Fraîcheur quotidienne</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Légumes livrés chaque matin</li>
                      <li>• Pain cuit sur place toutes les 4 heures</li>
                      <li>• Sauces préparées quotidiennement</li>
                      <li>• Aucun conservateur ou additif artificiel</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Ordering Guide */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Users className="w-5 h-5 text-green-700" />
                <h2 className="text-2xl font-bold text-gray-900">How to Order</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">🗣️ Counter Ordering</h3>
                  <p className="text-blue-700 text-sm mb-3">
                    Traditional service with English-speaking staff in most restaurants.
                  </p>
                  <ol className="text-blue-700 text-sm space-y-1">
                    <li><strong>1.</strong> Approach the order counter</li>
                    <li><strong>2.</strong> Consult the illustrated menu above</li>
                    <li><strong>3.</strong> Indicate your choice (name or pointing)</li>
                    <li><strong>4.</strong> Specify if set menu or burger only</li>
                    <li><strong>5.</strong> Choose drink and side</li>
                    <li><strong>6.</strong> Pay and receive your number</li>
                  </ol>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">💰 Price Options</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Burger only</strong> - From ¥580</li>
                      <li>• <strong>Set menu</strong> - +¥350 (fries + drink)</li>
                      <li>• <strong>Premium upgrade</strong> - +¥150 (special side)</li>
                      <li>• <strong>Full meal</strong> - ¥900-1,200 on average</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🍔 Customization</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Meat doneness (rare to well-done)</li>
                      <li>• Add/remove ingredients</li>
                      <li>• Custom sauce</li>
                      <li>• Special bun option (+¥50)</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-2">🌱 Vegetarian Options</h4>
                  <p className="text-sm text-green-700">
                    Freshness Burger offers several vegetarian options: Avocado Burger, 
                    Mushroom Swiss Burger, and Veggie Deluxe Burger with homemade vegetable patty. 
                    All sauces and sides can be adapted.
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
                  <Clock className="w-5 h-5 text-green-700 mt-0.5" />
                  <div>
                    <div className="font-medium">Hours</div>
                    <div className="text-sm text-gray-600">11:00 AM - 10:00 PM (general)</div>
                    <div className="text-sm text-gray-500">Varies by location</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-green-700 mt-0.5" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-sm text-gray-600">180+ restaurants</div>
                    <div className="text-sm text-gray-500">Mainly Tokyo area</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CreditCard className="w-5 h-5 text-green-700 mt-0.5" />
                  <div>
                    <div className="font-medium">Payment</div>
                    <div className="text-sm text-gray-600">Cards, cash, IC cards</div>
                    <div className="text-sm text-gray-500">PayPay accepted</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <DollarSign className="w-5 h-5 text-green-700 mt-0.5" />
                  <div>
                    <div className="font-medium">Average price</div>
                    <div className="text-sm text-gray-600">¥900-1,200 per person</div>
                    <div className="text-sm text-gray-500">Premium but affordable</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tips for visitors */}
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-4">
                💡 Tips for Visitors
              </h3>
              
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-green-700">Premium quality</div>
                  <div className="text-green-600">Excellent value for a "homemade" burger</div>
                </div>
                
                <div>
                  <div className="font-medium text-green-700">Waiting time</div>
                  <div className="text-green-600">Allow 10-15 minutes, normal for the quality offered</div>
                </div>
                
                <div>
                  <div className="font-medium text-green-700">Vegetarians</div>
                  <div className="text-green-600">Good vegetarian options available</div>
                </div>
                
                <div>
                  <div className="font-medium text-green-700">Atmosphere</div>
                  <div className="text-green-600">Perfect for a quality casual meal</div>
                </div>
              </div>
            </div>

            {/* Comparison */}
            <div className="bg-yellow-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                📊 Vs Competition
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-yellow-700">Vs McDonald's</div>
                  <div className="text-yellow-600">50% more expensive, significantly higher quality</div>
                </div>
                <div>
                  <div className="font-medium text-yellow-700">Vs MOS Burger</div>
                  <div className="text-yellow-600">Similar concept, more focused on freshness</div>
                </div>
                <div>
                  <div className="font-medium text-yellow-700">Positioning</div>
                  <div className="text-yellow-600">The accessible premium of Japanese burgers</div>
                </div>
              </div>
            </div>

            {/* Cultural Note */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">
                🏮 Cultural Note
              </h3>
              <p className="text-sm text-blue-700">
                Freshness Burger represents the Japanese adaptation of the American "fast-casual" concept. 
                The chain has successfully created a perfect balance between the speed expected of a fast-food 
                and the quality sought by Japanese consumers, always prioritizing 
                freshness and attentive service.
              </p>
            </div>

            {/* Useful Links */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
              <div className="space-y-2">
                <a href="https://www.freshnessburger.co.jp/" 
                   className="block text-green-700 hover:text-green-800 text-sm">
                  → Official Freshness Burger Website
                </a>
                <a href="/type-plat/burgers" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Complete Japanese Burgers Guide
                </a>
                <a href="/chaines/mos-burger" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Compare with MOS Burger
                </a>              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
