import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, MapPin, Star, Utensils } from 'lucide-react';
import ChainViewTracker from '@/components/ChainViewTracker';

export const metadata: Metadata = {
  title: 'Yudetaro: Authentic Japanese Soba Fast Food Chain | Complete Guide',
  description: 'Complete guide to Yudetaro, Japan\'s leading soba noodle fast food chain. Popular menu, how to order, locations, and tips for enjoying fresh buckwheat noodles.',
  keywords: 'Yudetaro, soba, Japanese noodles, fast food, buckwheat noodles, Japan restaurants, Japanese cuisine',
  openGraph: {
    title: 'Yudetaro: Authentic Japanese Soba Fast Food Chain | Complete Guide',
    description: 'Complete guide to Yudetaro, Japan\'s leading soba noodle fast food chain. Popular menu, how to order, locations, and tips for enjoying fresh buckwheat noodles.',
    type: 'article',
    locale: 'en_US',
  },
  alternates: {
    canonical: 'https://japan-food-chains.com/chains/yudetaro'
  }
};

// Menu data
const menuCategories = [
  {
    name: "Hot Soba",
    japanese: "温そば",
    items: [
      {
        name: "Kake Soba",
        japanese: "かけそば",
        price: "¥300",
        description: "Simple hot soba in clear dashi broth - the foundation of soba cuisine"
      },
      {
        name: "Tempura Soba",
        japanese: "天ぷらそば",
        price: "¥490",
        description: "Hot soba topped with crispy shrimp tempura"
      },
      {
        name: "Kitsune Soba",
        japanese: "きつねそば",
        price: "¥380",
        description: "Hot soba with sweet seasoned fried tofu (aburaage)"
      },
      {
        name: "Tanuki Soba",
        japanese: "たぬきそば",
        price: "¥360",
        description: "Hot soba topped with crispy tempura flakes (tenkasu)"
      }
    ]
  },
  {
    name: "Cold Soba",
    japanese: "冷そば",
    items: [
      {
        name: "Zaru Soba",
        japanese: "ざるそば",
        price: "¥350",
        description: "Classic cold soba served on bamboo mat with dipping sauce"
      },
      {
        name: "Mori Soba",
        japanese: "もりそば",
        price: "¥320",
        description: "Simple cold soba with traditional dipping sauce"
      },
      {
        name: "Ten Zaru",
        japanese: "天ざる",
        price: "¥580",
        description: "Cold soba with side of mixed tempura"
      },
      {
        name: "Oroshi Soba",
        japanese: "おろしそば",
        price: "¥420",
        description: "Cold soba with grated daikon radish and ponzu sauce"
      }
    ]
  },
  {
    name: "Set Meals",
    japanese: "セットメニュー",
    items: [
      {
        name: "Soba & Mini Katsu Don Set",
        japanese: "そば・ミニかつ丼セット",
        price: "¥690",
        description: "Hot or cold soba with mini pork cutlet rice bowl"
      },
      {
        name: "Soba & Mini Oyako Don Set",
        japanese: "そば・ミニ親子丼セット",
        price: "¥650",
        description: "Hot or cold soba with mini chicken and egg rice bowl"
      },
      {
        name: "Soba & Inari Set",
        japanese: "そば・いなりセット",
        price: "¥480",
        description: "Hot or cold soba with sweet seasoned tofu pockets"
      },
      {
        name: "Double Soba",
        japanese: "大盛りそば",
        price: "+¥100",
        description: "Double portion of any soba dish"
      }
    ]
  }
];

// Toppings data
const toppings = [
  { name: "Shrimp Tempura", price: "¥150" },
  { name: "Vegetable Tempura", price: "¥100" },
  { name: "Raw Egg", price: "¥60" },
  { name: "Green Onions", price: "¥50" },
  { name: "Wakame Seaweed", price: "¥80" },
  { name: "Extra Noodles", price: "¥100" }
];

export default function YudetaroPage() {
  return (
    <>
      <ChainViewTracker chainName="Yudetaro" chainCategory="soba" />
      
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-purple-900 via-purple-800 to-purple-600 text-white overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold mb-6">
                  Yudetaro
                  <span className="block text-2xl lg:text-3xl text-purple-200 mt-2 japanese-text">
                    ゆで太郎
                  </span>
                </h1>
                <p className="text-xl lg:text-2xl text-purple-100 mb-8 leading-relaxed">
                  Japan's Leading Soba Fast Food Chain
                  <span className="block text-lg mt-2">Fresh Buckwheat Noodles, Traditional Taste</span>
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>Quick Service</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                    <Utensils className="w-5 h-5 mr-2" />
                    <span>Fresh Noodles</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                    <Star className="w-5 h-5 mr-2" />
                    <span>Traditional Recipe</span>
                  </div>
                </div>
              </div>
              
              <div className="text-center lg:text-right">
                <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <div className="text-6xl mb-4">🍜</div>
                  <h2 className="text-2xl font-bold mb-4">Restaurant Information</h2>
                  <div className="space-y-3 text-left">
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-200">Founded:</span>
                      <span>1994</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-200">Locations:</span>
                      <span>300+ stores</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-200">Specialty:</span>
                      <span>Soba noodles</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-200">Price Range:</span>
                      <span>¥300-700</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-medium text-gray-200">Service:</span>
                      <span>Quick self-service</span>
                    </div>
                  </div>
                </div>

                {/* Why Choose */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Why Choose Yudetaro?</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2 mt-0.5">•</span>
                      <span><strong>Accessible authenticity:</strong> Real soba experience without intimidation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2 mt-0.5">•</span>
                      <span><strong>Great value:</strong> Artisanal quality at fast-food prices</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2 mt-0.5">•</span>
                      <span><strong>Freshness:</strong> Soba prepared daily on-site</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-500 mr-2 mt-0.5">•</span>
                      <span><strong>Variety:</strong> Wide selection for all tastes</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Menu */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Popular Menu
              <span className="block text-lg text-gray-600 mt-2">人気メニュー</span>
            </h2>

            {menuCategories.map((category, index) => (
              <div key={index} className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm mr-4">{category.name}</span>
                  <span className="text-lg text-gray-600 japanese-text">{category.japanese}</span>
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-lg font-bold text-gray-900">{item.name}</h4>
                        <span className="text-xl font-bold text-purple-600">{item.price}</span>
                      </div>
                      <p className="text-gray-600 japanese-text mb-3">{item.japanese}</p>
                      <p className="text-gray-700 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ordering Guide */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              How to Order at Yudetaro
              <span className="block text-lg text-gray-600 mt-2">注文方法</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="text-center p-6 bg-purple-50 rounded-xl border border-purple-200">
                <div className="text-3xl mb-4">🎫</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">1. Buy Ticket</h3>
                <p className="text-sm text-gray-600">
                  Use the vending machine at the entrance. 
                  Choose your dish and pay.
                </p>
              </div>
              
              <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-200">
                <div className="text-3xl mb-4">🪑</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">2. Take a Seat</h3>
                <p className="text-sm text-gray-600">
                  Find an available seat and wait for staff 
                  to collect your ticket.
                </p>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-xl border border-green-200">
                <div className="text-3xl mb-4">⏰</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">3. Wait</h3>
                <p className="text-sm text-gray-600">
                  Soba are prepared fresh. 
                  Allow 3-5 minutes for preparation.
                </p>
              </div>
              
              <div className="text-center p-6 bg-orange-50 rounded-xl border border-orange-200">
                <div className="text-3xl mb-4">🍜</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">4. Enjoy</h3>
                <p className="text-sm text-gray-600">
                  Enjoy your soba! Don't hesitate to 
                  slurp the noodles loudly.
                </p>
              </div>
            </div>

            {/* Customization options */}
            <div className="bg-gray-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Customization Options</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">🍤 Available Toppings</h4>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    {toppings.map((topping, index) => (
                      <div key={index} className="flex justify-between">
                        <span>{topping.name}</span>
                        <span className="font-medium text-purple-600">{topping.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">📝 Ordering Tips</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• <strong>First time:</strong> Start with Kake Soba or Zaru Soba</li>
                    <li>• <strong>Summer:</strong> Choose cold soba (Zaru, Mori)</li>
                    <li>• <strong>Winter:</strong> Go for hot soba with tempura</li>
                    <li>• <strong>Full meal:</strong> Choose a set with donburi</li>
                    <li>• <strong>Budget option:</strong> Kake Soba only ¥300!</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Culture and traditions */}
        <section className="py-16 bg-purple-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Yudetaro Cultural Experience
              <span className="block text-lg text-gray-600 mt-2">ゆで太郎の文化体験</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-4">🌾</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Buckwheat Tradition</h3>
                <p className="text-gray-600 text-sm">
                  Yudetaro perpetuates the millennial tradition of Japanese soba, where each 
                  grain of buckwheat is respected and transformed according to ancestral methods 
                  adapted to modern times.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Efficient Modernity</h3>
                <p className="text-gray-600 text-sm">
                  The Yudetaro concept combines tradition and modernity: vending machines, 
                  quick service and casual atmosphere, perfect for discovering soba 
                  without protocol constraints.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Cultural Inclusivity</h3>
                <p className="text-gray-600 text-sm">
                  By democratizing access to soba, Yudetaro breaks cultural barriers 
                  and allows everyone to discover this important facet of Japanese 
                  gastronomy at their own pace.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-white rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Soba Etiquette at Yudetaro</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">✅ Do</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Slurp the noodles loudly (it's encouraged!)</li>
                    <li>• Eat quickly to appreciate the texture</li>
                    <li>• Drink the remaining broth directly from the bowl</li>
                    <li>• Leave your seat quickly after the meal</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">❌ Don't</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Don't cut the noodles with your teeth</li>
                    <li>• Avoid letting hot soba get cold</li>
                    <li>• Don't fully dip cold soba in the sauce</li>
                    <li>• Don't stay too long at the table</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Discover Authentic Soba?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Yudetaro opens the doors to Japanese buckwheat tradition 
              in a modern and accessible setting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/type-plat/soba"
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Explore All Soba
              </Link>
              <Link 
                href="/guides/comment-commander"
                className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Ordering Guide
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
