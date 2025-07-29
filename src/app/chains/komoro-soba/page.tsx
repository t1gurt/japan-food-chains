import Link from "next/link";
import ChainViewTracker from "../../../components/ChainViewTracker";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Komoro Soba: Authentic Shinshu Soba | Japan Food Chains',
  description: 'Discover Komoro Soba and its tachi-gui (standing eating) experience. Shinshu buckwheat noodles served with tradition and speed.',
  keywords: 'komoro soba, standing soba, tachi-gui, shinshu soba, traditional soba, buckwheat noodles, traditional japanese fast food',
  openGraph: {
    title: 'Komoro Soba: Authentic Shinshu Soba | Japan Food Chains',
    description: 'Discover Komoro Soba and its tachi-gui (standing eating) experience. Shinshu buckwheat noodles served with tradition and speed.',
    type: 'article',
    locale: 'en_US',
    siteName: 'Japan Food Chains - Japanese Restaurant Guide'
  },
  alternates: {
    canonical: '/chains/komoro-soba'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function KomoroSobaPage() {
  const menuCategories = [
    {
      name: "Traditional Soba",
      japanese: "伝統そば",
      items: [
        {
          name: "Kake Soba",
          japanese: "かけそば",
          price: "¥290",
          description: "Classic soba in hot dashi broth, authentic simplicity"
        },
        {
          name: "Mori Soba",
          japanese: "もりそば",
          price: "¥350",
          description: "Cold soba with tsuyu sauce, to fully appreciate the buckwheat"
        },
        {
          name: "Tanuki Soba",
          japanese: "たぬきそば",
          price: "¥330",
          description: "Soba with crispy tenkasu, contrasting texture and flavor"
        },
        {
          name: "Kitsune Soba",
          japanese: "きつねそば",
          price: "¥370",
          description: "Soba with sweet fried tofu, comforting sweetness"
        }
      ]
    },
    {
      name: "Gourmet Soba",
      japanese: "グルメそば",
      items: [
        {
          name: "Tempura Soba",
          japanese: "天ぷらそば",
          price: "¥490",
          description: "Soba with delicate shrimp tempura, perfect marriage"
        },
        {
          name: "Curry Nanban",
          japanese: "カレー南蛮",
          price: "¥530",
          description: "Soba in spicy curry broth, bold fusion"
        },
        {
          name: "Niku Soba",
          japanese: "肉そば",
          price: "¥480",
          description: "Soba with thin slices of simmered beef, intense umami"
        },
        {
          name: "Takoyaki Soba",
          japanese: "たこ焼きそば",
          price: "¥450",
          description: "Komoro specialty: soba with mini takoyaki, unique creativity"
        }
      ]
    },
    {
      name: "Sets & Combos",
      japanese: "セット・コンボ",
      items: [
        {
          name: "Tensoba Set",
          japanese: "天そばセット",
          price: "¥650",
          description: "Tempura soba + rice + pickled vegetables, complete meal"
        },
        {
          name: "Soba & Gyoza Set",
          japanese: "そば餃子セット",
          price: "¥580",
          description: "Kake soba + 3 gyoza, popular combination"
        },
        {
          name: "Mini Katsu Don Set",
          japanese: "ミニカツ丼セット",
          price: "¥680",
          description: "Mini katsu don + choice of soba, perfect balance"
        }
      ]
    }
  ];

  const drinkOptions = [
    { name: "Hot Green Tea", japanese: "熱いお茶", price: "Free" },
    { name: "Cold Water", japanese: "冷水", price: "Free" },
    { name: "Asahi Beer", japanese: "アサヒビール", price: "¥350" },
    { name: "Hot Sake", japanese: "熱燗", price: "¥280" },
    { name: "Orange Juice", japanese: "オレンジジュース", price: "¥180" }
  ];

  return (
    <>
      <ChainViewTracker chainName="komoro-soba" chainCategory="soba" />
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="text-sm">
              <Link href="/" className="text-gray-500 hover:text-indigo-600">Home</Link>
              <span className="text-gray-400 mx-2">/</span>
              <Link href="/type-plat/soba" className="text-gray-500 hover:text-indigo-600">Soba</Link>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-indigo-600 font-medium">Komoro Soba</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-900 via-blue-800 to-cyan-900 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <span className="text-6xl mr-4">🏔️</span>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold mb-2">Komoro Soba</h1>
                    <p className="text-2xl text-blue-200 japanese-text">小諸そば</p>
                  </div>
                </div>
                <p className="text-xl mb-6 text-blue-100">
                  The soul of traditional mountain soba in the heart of Tokyo. Since 1975, 
                  Komoro Soba perpetuates the ancestral art of Shinshu buckwheat with authenticity and passion.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                    Shinshu Tradition
                  </span>
                  <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium">
                    Artisanal Soba
                  </span>
                  <span className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-sm font-medium">
                    Authentic Atmosphere
                  </span>
                  <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full text-sm font-medium">
                    Popular Prices
                  </span>
                </div>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8">
                <h3 className="text-xl font-bold mb-4">The Komoro Experience</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Authentic Shinshu buckwheat soba
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Mountain atmosphere in the heart of Tokyo
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Traditional standing service (tachi-gui)
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Homemade dashi broth
                  </li>
                  <li className="flex items-center">
                    <span className="text-green-400 mr-3">✓</span>
                    Quick and authentic culinary experience
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* History and culture */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  The Heritage of Shinshu in the Heart of Tokyo
                  <span className="block text-lg text-gray-600 mt-2">信州の遺産</span>
                </h2>
                <div className="prose prose-indigo max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Komoro Soba takes its name from the city of Komoro in Nagano Prefecture (former Shinshu Province), 
                    the historic birthplace of <strong>Japanese buckwheat soba</strong>. Since 1975, this chain has perpetuated 
                    the tradition of the Shinshu mountains in bustling Tokyo.
                  </p>
                  <p className="text-gray-700">
                    What distinguishes Komoro Soba is its attachment to <strong>traditional Shinshu methods</strong>: 
                    mountain buckwheat, ancestral kneading technique, and this unique format of <strong>"tachi-gui"</strong> 
                    (standing eating) that was the norm in mountain relay stations.
                  </p>
                  <p className="text-gray-700">
                    The experience at Komoro Soba is deliberately <strong>stripped down and authentic</strong>. 
                    No frills, no excessive modernization - just the pure essence of soba as it was 
                    consumed by travelers of the Edo period crossing the Shinshu mountains.
                  </p>
                  <p className="text-gray-700">
                    This "back to basics" approach makes every visit to Komoro Soba a true 
                    <strong>cultural journey through time</strong>, an authentic pause in modern Tokyo 
                    to rediscover the soul of rural Japan.
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {/* Practical information */}
                <div className="bg-indigo-50 rounded-lg border border-indigo-200 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Practical Information</h3>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">Founded:</span>
                      <span>1975</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">Origin:</span>
                      <span>Shinshu (Nagano)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">Average price:</span>
                      <span>¥290-550</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">Restaurants:</span>
                      <span>80+ (Tokyo/Kanto)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium text-gray-700">Style:</span>
                      <span>Traditional tachi-gui</span>
                    </div>
                  </div>
                </div>

                {/* Unique experience */}
                <div className="bg-white rounded-lg border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">The Tachi-gui Experience</h3>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2 mt-0.5">•</span>
                      <span><strong>Standing service:</strong> Quick and friendly consumption</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2 mt-0.5">•</span>
                      <span><strong>Authentic atmosphere:</strong> Like the mountain relay stations of old</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2 mt-0.5">•</span>
                      <span><strong>Social interaction:</strong> Meeting place for salarymen</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-indigo-500 mr-2 mt-0.5">•</span>
                      <span><strong>Efficiency:</strong> Complete meal in 10 minutes</span>
                    </li>
                  </ul>
                </div>

                {/* Price range */}
                <div className="bg-green-50 rounded-lg border border-green-200 p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">Price Range</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Simple soba:</span>
                      <span className="font-bold">¥290-370</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Premium soba:</span>
                      <span className="font-bold">¥450-530</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Complete sets:</span>
                      <span className="font-bold">¥580-680</span>
                    </div>
                    <div className="border-t pt-2 mt-2">
                      <div className="flex justify-between">
                        <span className="font-medium">Average meal:</span>
                        <span className="font-bold text-green-600">¥400</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detailed menu */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Signature Menu
              <span className="block text-lg text-gray-600 mt-2">看板メニュー</span>
            </h2>

            {menuCategories.map((category, index) => (
              <div key={index} className="mb-12">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm mr-4">{category.name}</span>
                  <span className="text-lg text-gray-600 japanese-text">{category.japanese}</span>
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-lg font-bold text-gray-900">{item.name}</h4>
                        <span className="text-xl font-bold text-indigo-600">{item.price}</span>
                      </div>
                      <p className="text-gray-600 japanese-text mb-3">{item.japanese}</p>
                      <p className="text-gray-700 text-sm">{item.description}</p>
                      {item.name === "Takoyaki Soba" && (
                        <div className="mt-2 text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full inline-block">
                          ⭐ Unique specialty
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Tachi-gui experience guide */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Tachi-gui Experience Guide
              <span className="block text-lg text-gray-600 mt-2">立ち食い体験ガイド</span>
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="text-center p-6 bg-indigo-50 rounded-xl border border-indigo-200">
                <div className="text-3xl mb-4">🚪</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">1. Entry</h3>
                <p className="text-sm text-gray-600">
                  Enter and head to the ticket machine. 
                  The atmosphere is relaxed and welcoming.
                </p>
              </div>
              
              <div className="text-center p-6 bg-blue-50 rounded-xl border border-blue-200">
                <div className="text-3xl mb-4">🎫</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">2. Order</h3>
                <p className="text-sm text-gray-600">
                  Buy your ticket and hand it to the staff. 
                  Simple and efficient.
                </p>
              </div>
              
              <div className="text-center p-6 bg-green-50 rounded-xl border border-green-200">
                <div className="text-3xl mb-4">�</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">3. Position</h3>
                <p className="text-sm text-gray-600">
                  Stand at the counter. 
                  The traditional experience begins!
                </p>
              </div>
              
              <div className="text-center p-6 bg-orange-50 rounded-xl border border-orange-200">
                <div className="text-3xl mb-4">🍜</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">4. Tasting</h3>
                <p className="text-sm text-gray-600">
                  Enjoy your soba quickly. 
                  That's the tachi-gui spirit!
                </p>
              </div>
            </div>

            <div className="bg-indigo-50 rounded-xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Tachi-gui Etiquette</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">✅ Appropriate Behavior</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Eat standing without leaning excessively</li>
                    <li>• Consume quickly (5-10 minutes ideal)</li>
                    <li>• Engage in conversation with other customers</li>
                    <li>• Slurp the noodles loudly</li>
                    <li>• Free up your spot quickly</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">💡 Expert Tips</h4>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Quiet period: 2pm-4pm on weekdays</li>
                    <li>• Morning rush: 7am-9am (authentic experience)</li>
                    <li>• Start with Mori Soba to appreciate the buckwheat</li>
                    <li>• Watch the regulars to learn</li>
                    <li>• Don't hesitate to ask for recommendations</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Drinks and accompaniments */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Drinks & Accompaniments
              <span className="block text-lg text-gray-600 mt-2">飲み物・付け合わせ</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🍵 Available Drinks</h3>
                <div className="space-y-3">
                  {drinkOptions.map((drink, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <div>
                        <span className="font-medium">{drink.name}</span>
                        <span className="text-gray-500 text-sm ml-2 japanese-text">{drink.japanese}</span>
                      </div>
                      <span className={`font-bold ${drink.price === 'Free' ? 'text-green-600' : 'text-indigo-600'}`}>
                        {drink.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">🍶 The Art of Accompaniment</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Green Tea (Free)</h4>
                    <p className="text-sm text-gray-600">
                      Hot green tea served automatically. Cleanses the palate 
                      and enhances the buckwheat tasting.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Sake & Beer</h4>
                    <p className="text-sm text-gray-600">
                      For the complete mountain relay experience. 
                      A respected tradition even at breakfast!
                    </p>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Spring Water</h4>
                    <p className="text-sm text-gray-600">
                      Pure water essential for cleansing the palate between 
                      bites of soba.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Cultural tradition */}
        <section className="py-16 bg-indigo-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Cultural Heritage of Shinshu
              <span className="block text-lg text-gray-600 mt-2">信州の文化遺産</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-4">🏔️</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Shinshu Terroir</h3>
                <p className="text-gray-600 text-sm">
                  The Shinshu mountains (Nagano) offer the perfect climate for buckwheat: 
                  high altitude, significant temperature variations, and pure water from the peaks. 
                  This unique terroir has produced Japan's best soba for centuries.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-4">🥢</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Ancestral Technique</h3>
                <p className="text-gray-600 text-sm">
                  Komoro Soba perpetuates the manufacturing techniques passed down since the Edo period: 
                  manual kneading, precise cutting, and minute cooking. Each bowl tells 400 years 
                  of artisanal know-how.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-sm">
                <div className="text-3xl mb-4">🚶</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Tachi-gui Culture</h3>
                <p className="text-gray-600 text-sm">
                  Eating standing is not just a space constraint, it's a philosophy: 
                  humility, social equality, and concentration on the essential. A Japanese 
                  life lesson in every bowl.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Why Komoro Soba Is a Unique Experience
              </h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">🎯 Pure Authenticity</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    No concessions to modernization. Komoro Soba offers the exact experience 
                    a traveler would have had in a mountain relay 150 years ago.
                  </p>
                  
                  <h4 className="font-bold text-gray-900 mb-3">💎 Exceptional Quality</h4>
                  <p className="text-gray-600 text-sm">
                    100% Shinshu buckwheat, homemade dashi broth made daily, 
                    preserved artisanal techniques. Quality never compromises with price.
                  </p>
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-3">� Social Immersion</h4>
                  <p className="text-gray-600 text-sm mb-4">
                    The tachi-gui format breaks down social barriers. Salarymen, artisans, 
                    students naturally rub shoulders in the egalitarian tradition of soba.
                  </p>
                  
                  <h4 className="font-bold text-gray-900 mb-3">⚡ Urban Energy</h4>
                  <p className="text-gray-600 text-sm">
                    In Tokyo's frenetic pace, Komoro Soba offers an authentic pause 
                    where tradition and modernity meet harmoniously.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to action */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Experience the Authentic Shinshu Soba
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Komoro Soba transports you to the Shinshu mountains without leaving Tokyo. 
              A 150-year tradition awaits you at the counter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/type-plat/soba"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Discover the World of Soba
              </Link>
              <Link 
                href="/guides/culture-etiquette"
                className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Cultural Guide
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
