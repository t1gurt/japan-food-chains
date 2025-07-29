import Link from "next/link";
import ChainViewTracker from "@/components/ChainViewTracker";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jolly Pasta: The Japanese Family Trattoria | JapanChains',
  description: 'Discover Jolly Pasta, the family restaurant chain specializing in Italian pasta adapted to Japanese taste. Varied menu and affordable prices.',
  keywords: 'jolly pasta, japanese pasta, family restaurant, italian japan, japanese pasta, family trattoria, italian famiresu',
  openGraph: {
    title: 'Jolly Pasta: The Japanese Family Trattoria | JapanChains',
    description: 'Discover Jolly Pasta, the family restaurant chain specializing in Italian pasta adapted to Japanese taste. Varied menu and affordable prices.',
    type: 'article',
    locale: 'en_US',
    siteName: 'JapanChains - Japanese Restaurant Chain Guide'
  },
  alternates: {
    canonical: '/chains/jolly-pasta'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function JollyPastaPage() {
  return (
    <>
      <ChainViewTracker chainName="jolly-pasta" chainCategory="family-restaurants" />
      
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="text-sm">
              <Link href="/" className="text-gray-500 hover:text-purple-600">Home</Link>
              <span className="text-gray-400 mx-2">/</span>
              <Link href="/type-plat/family-restaurants" className="text-gray-500 hover:text-purple-600">Family Restaurants</Link>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-purple-600 font-medium">Jolly Pasta</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-800 via-orange-700 to-yellow-600 text-white py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-8">
              <span className="text-6xl mr-4">🍝</span>
              <span className="text-6xl mr-4">🇮🇹</span>
              <span className="text-6xl">👨‍👩‍👧‍👦</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Jolly Pasta
            </h1>
            <p className="text-2xl mb-4 text-yellow-100 japanese-text">ジョリーパスタ</p>
            <p className="text-xl mb-8 text-yellow-100">
              Family Italy in Japan - Authentic Pasta at Accessible Prices
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">Popular Japanese Trattoria</h2>
              <p className="text-lg text-yellow-200">
                Since 1979, Jolly Pasta has democratized Italian cuisine in Japan 
                by offering authentic pasta in a warm family atmosphere, 
                accessible to all budgets.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold">
                Italian Cuisine
              </span>
              <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-semibold">
                Family Restaurant
              </span>
              <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-semibold">
                Popular Prices
              </span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* History & Concept */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🇮🇹 Accessible Italy in Japan
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">🍝 Birth of a Passion (1979)</h3>
                  <p className="text-gray-700 mb-4">
                    Jolly Pasta was born from the desire to make Italian cuisine 
                    accessible to Japanese families, at a time when pasta 
                    was still an exotic luxury.
                  </p>
                  <p className="text-gray-700">
                    The goal: to offer real Italian flavors with 
                    Japanese hospitality, in generous portions 
                    and at reasonable family prices.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">👨‍👩‍👧‍👦 Family Philosophy</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Mission:</strong> "Buongiorno! Good mood with family." 
                    Jolly Pasta cultivates a relaxed atmosphere where all 
                    generations come together around good food.
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li>• <strong>Family-friendly:</strong> Kids menu and adapted spaces</li>
                    <li>• <strong>Authentic:</strong> Respected Italian recipes</li>
                    <li>• <strong>Accessible:</strong> Moderate prices, generous portions</li>
                    <li>• <strong>Friendly:</strong> Warm Japanese service</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Signature Menu */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🍝 Authentic Italian Menu
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* Classic Pasta */}
                <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🍝 Signature Pasta</h3>
                  <p className="text-gray-600 japanese-text mb-2">パスタクラシック</p>
                  <p className="text-2xl font-bold text-red-600 mb-3">¥680-1,380</p>
                  <p className="text-gray-700 mb-4">
                    Authentic Italian pasta: al dente spaghetti, 
                    house sauces prepared daily, imported cheeses.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Spaghetti Bolognese:</span>
                      <span className="text-sm font-semibold">¥880</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Classic Carbonara:</span>
                      <span className="text-sm font-semibold">¥980</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Penne Arrabbiata:</span>
                      <span className="text-sm font-semibold">¥780</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Seafood Pasta:</span>
                      <span className="text-sm font-semibold">¥1,280</span>
                    </div>
                  </div>
                </div>

                {/* Pizza & Specialità */}
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border border-orange-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">🍕 Pizza & Risotto</h3>
                  <p className="text-gray-600 japanese-text mb-2">ピッツァ・リゾット</p>
                  <p className="text-2xl font-bold text-orange-600 mb-3">¥880-1,580</p>
                  <p className="text-gray-700 mb-4">
                    Crispy thin-crust pizzas, creamy al dente risottos. 
                    All the classics of Italian trattoria.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Pizza Margherita:</span>
                      <span className="text-sm font-semibold">¥880</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Pizza Quattro Stagioni:</span>
                      <span className="text-sm font-semibold">¥1,280</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Mushroom Risotto:</span>
                      <span className="text-sm font-semibold">¥1,180</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Ham Calzone:</span>
                      <span className="text-sm font-semibold">¥1,080</span>
                    </div>
                  </div>
                </div>

                {/* Family Menu */}
                <div className="bg-gradient-to-br from-yellow-50 to-red-50 rounded-xl p-6 border border-yellow-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">👨‍👩‍👧‍👦 Family Menu</h3>
                  <p className="text-gray-600 japanese-text mb-2">ファミリーセット</p>
                  <p className="text-2xl font-bold text-yellow-600 mb-3">¥480-1,980</p>
                  <p className="text-gray-700 mb-4">
                    Generous family sets, adapted kids menus, 
                    Italian-style convivial sharing, house desserts.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Kids Menu:</span>
                      <span className="text-sm font-semibold">¥480</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Family Set 2-3 people:</span>
                      <span className="text-sm font-semibold">¥1,680</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Grande Famiglia 4-6 people:</span>
                      <span className="text-sm font-semibold">¥2,980</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">House Tiramisu:</span>
                      <span className="text-sm font-semibold">¥420</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Complete Menu */}
              <div className="mt-8 bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">🍽️ Complete Jolly Pasta Menu</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Antipasti & Starters:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Antipasto Misto</strong> - ¥680 - Italian assortment</li>
                      <li>• <strong>Tomato Basil Bruschetta</strong> - ¥480 - Authentic grilled bread</li>
                      <li>• <strong>Caesar Salad</strong> - ¥580 - Crispy lettuce, parmesan</li>
                      <li>• <strong>Minestrone Soup</strong> - ¥380 - Traditional simmered vegetables</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Drinks & Desserts:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Espresso Coffee</strong> - ¥280 - Imported from Italy</li>
                      <li>• <strong>Chianti Red Wine</strong> - ¥680 - Bottle/glass available</li>
                      <li>• <strong>3-Scoop Gelato</strong> - ¥380 - Artisanal Italian ice cream</li>
                      <li>• <strong>Panna Cotta</strong> - ¥450 - House signature dessert</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Family Experience */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                👨‍👩‍👧‍👦 The Jolly Famiglia Experience
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">🇮🇹 Trattoria Atmosphere</h3>
                  <p className="text-gray-700 mb-4">
                    Warm decor inspired by Italian trattorias: 
                    warm colors, wooden furniture, photos of Italy.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• <strong>Design:</strong> Authentic Italian trattoria</li>
                    <li>• <strong>Music:</strong> Italian hits and ambiance</li>
                    <li>• <strong>Lighting:</strong> Warm and friendly</li>
                    <li>• <strong>Space:</strong> Spacious family tables</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">👶 Kids Welcome</h3>
                  <p className="text-gray-700 mb-4">
                    Service specially adapted to families with children: 
                    high chairs, colorful menu, adapted portions.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">High chairs:</span>
                      <span className="font-semibold">Available</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Kids menu:</span>
                      <span className="font-semibold">¥480-680</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Portions:</span>
                      <span className="font-semibold">Age-adapted</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Toys:</span>
                      <span className="font-semibold">Small gifts</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">🍝 Fast & Fresh Service</h3>
                  <p className="text-gray-700 mb-4">
                    Visible kitchen, quick preparation, fresh ingredients 
                    renewed daily to guarantee authenticity.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-red-600 mr-2">✅</span>
                      <span>Pasta cooked to order</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-600 mr-2">✅</span>
                      <span>Sauces prepared daily</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-600 mr-2">✅</span>
                      <span>Service in 10-15 minutes</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-red-600 mr-2">✅</span>
                      <span>Staff trained in Italian recipes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ordering Guide */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🎯 Jolly Pasta Ordering Guide
              </h2>
              
              <div className="bg-red-50 rounded-xl p-8 border border-red-200">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-red-800 mb-4">📋 How to Order</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</span>
                        <div>
                          <p className="font-semibold text-gray-800">Seating</p>
                          <p className="text-sm text-gray-600">Warm welcome, family seating</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</span>
                        <div>
                          <p className="font-semibold text-gray-800">Menu & Advice</p>
                          <p className="text-sm text-gray-600">Staff can recommend based on taste</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">3</span>
                        <div>
                          <p className="font-semibold text-gray-800">Table ordering</p>
                          <p className="text-sm text-gray-600">Traditional service, no machines</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="w-8 h-8 bg-red-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">4</span>
                        <div>
                          <p className="font-semibold text-gray-800">Famiglia tasting</p>
                          <p className="text-sm text-gray-600">Dishes served together, convivial sharing</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-red-800 mb-4">💡 Experience Tips</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">🍝</span>
                        <span><strong>Specialty:</strong> Try the signature house sauces</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">👨‍👩‍👧‍👦</span>
                        <span><strong>Family:</strong> Sharing sets very advantageous</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">🕐</span>
                        <span><strong>Timing:</strong> Less waiting outside peak hours</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-600 mr-2">💰</span>
                        <span><strong>Budget:</strong> Lunch sets very economical</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Dietary Requirements */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                � Dietary Requirements & Options
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-lg font-bold text-green-800 mb-4">✅ Vegetarian</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Very good options:</strong> Italian cuisine naturally 
                    rich in delicious and authentic vegetarian dishes.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Pasta with vegetables, cheeses</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Pizza Margherita, Quattro Formaggi</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Mushroom risotto, vegetables</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Salads, vegetarian antipasti</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-lg font-bold text-blue-800 mb-4">🐷 Pork-Free/Halal</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Limited options:</strong> many dishes contain 
                    ham or pancetta. Inform staff for adaptations.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Pasta with tomato, cheese, vegetables</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Pizza without charcuterie</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-2">⚠️</span>
                      <span>Carbonara, Amatriciana (pork)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-2">⚠️</span>
                      <span>Ask for possible adaptation</span>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                  <h3 className="text-lg font-bold text-orange-800 mb-4">⚠️ Allergies</h3>
                  <p className="text-gray-700 mb-4">
                    Italian cuisine with frequent gluten, milk, eggs. 
                    Staff can inform about specific ingredients.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">⚠️</span>
                      <span>Gluten (pasta, pizza, bread)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">⚠️</span>
                      <span>Milk (cheeses, creamy sauces)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">⚠️</span>
                      <span>Eggs (fresh pasta, desserts)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">✅</span>
                      <span>Staff can adapt certain dishes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Italian Culture in Japan */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                🇮🇹 Italy Adopted by Japan
              </h2>
              
              <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">🍝 Culinary Revolution</h3>
                    <p className="text-gray-700 mb-4">
                      Jolly Pasta played a key role in the adoption of Italian 
                      cuisine by Japanese families, transforming pasta 
                      from exoticism to daily comfort food.
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>• <strong>Pioneer:</strong> Democratization of pasta</li>
                      <li>• <strong>Adaptation:</strong> Japanese tastes respected</li>
                      <li>• <strong>Accessibility:</strong> Popular family prices</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">👨‍👩‍👧‍👦 Social Impact</h3>
                    <p className="text-gray-700 mb-4">
                      By creating a relaxed family space around Italian cuisine, 
                      Jolly Pasta influenced family dining culture in Japan, 
                      encouraging sharing and conviviality.
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>• <strong>Tradition:</strong> United family meals</li>
                      <li>• <strong>Modernity:</strong> International openness</li>
                      <li>• <strong>Generations:</strong> Multi-generational pleasures</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    🇮🇹 "Jolly Pasta: When Italy Meets the Japanese Famiglia"
                  </h3>
                  <p className="text-gray-600">
                    By making Italian cuisine accessible and family-friendly, Jolly Pasta 
                    created a cultural bridge between Italian art of living and Japanese 
                    hospitality, offering an authentic and warm experience.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="text-center">
              <div className="inline-flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/type-plat/family-restaurants"
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  ↗ Back to Family Restaurants
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

        {/* Related Links */}
        <section className="py-12 bg-gray-100">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Explore More Japanese Chains</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link href="/chains/gusto" className="text-red-600 hover:text-red-800 hover:underline">
                Gusto (Family Restaurant)
              </Link>
              <Link href="/chains/jonathans" className="text-red-600 hover:text-red-800 hover:underline">
                Jonathan's (Family Dining)
              </Link>
              <Link href="/chains/ootoya" className="text-red-600 hover:text-red-800 hover:underline">
                Ootoya (Japanese Home Cooking)
              </Link>
              <Link href="/type-plat/family-restaurants" className="text-red-600 hover:text-red-800 hover:underline">
                More Family Restaurants
              </Link>
              <Link href="/type-plat/italian" className="text-red-600 hover:text-red-800 hover:underline">
                Other Italian Chains
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}



