import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowLeft, Flame, Users, Sparkles } from 'lucide-react';

export const metadata: Metadata = {
  title: "Yakiniku | Japanese Wagyu BBQ | Japan Food Chains",
  description: "Complete Yakiniku guide. Learn to grill wagyu, kalbi and harami like a pro. Discover the best chains like Gyukaku.",
  keywords: [
    'yakiniku', 'japanese grill', 'wagyu', 'kalbi', 'harami', 'japanese culinary culture',
    'japanese barbecue', 'conviviality', 'interactive gastronomy', 'yakiniku restaurant',
    'grilled meat', 'cooking technique', 'tare sauce', 'ホルモン hormone'
  ],
  openGraph: {
    title: "Yakiniku | Japanese Wagyu BBQ | Japan Food Chains",
    description: "Complete Yakiniku guide. Learn to grill wagyu, kalbi and harami like a pro. Discover the best chains like Gyukaku.",
    type: 'article',
    locale: "en_US",
    siteName: "Japan Food Chains - Japanese Restaurant Guide"
  },
  alternates: {
    canonical: '/type-plat/yakiniku',
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function YakinikuPage() {
  const yakinikuChains = [
    {
      name: "Gyukaku",
      japanese: "牛角",
      englishName: "Gyukaku",
      description: "Premium yakiniku chain offering quality meats in a modern and convivial atmosphere.",
      specialties: ["Premium Kalbi", "Harami Selection", "Gyukaku Special Course", "All-you-can-eat"],
      priceRange: "¥2000-4000",
      style: "Modern premium yakiniku",
      orderingMethod: "Paper menu + table service",
      vegetarianOptions: "Grilled vegetables, salad, side dishes",
      uniqueFeatures: ["Premium meats", "All-you-can-eat options", "Modern atmosphere"],
      cuisine: "Yakiniku/Japanese BBQ",
      href: "/chaines/gyukaku"
    },
    {
      name: "Futago",
      japanese: "ふたご",
      englishName: "Futago",
      description: "Premium yakiniku revolution from Osaka with legendary 'Hasami-deru Kalbi' and 'to-the-mouth' service.",
      specialties: ["Hasami-deru Kalbi", "Gourmet hormone", "Premium service", "Half quantity/Half price"],
      priceRange: "¥3000-5000",
      style: "Premium yakiniku entertainment",
      orderingMethod: "Full service by staff",
      vegetarianOptions: "Premium vegetables, traditional side dishes",
      uniqueFeatures: ["Culinary entertainment", "Hasami-deru show", "Service to the mouth"],
      cuisine: "Premium Yakiniku/Hormone",
      href: "/chaines/futago"
    },
    {
      name: "Anan",
      japanese: "安安",
      englishName: "Anan",
      description: "Affordable yakiniku with authentic charcoal grill using the concept '安くて旨い' (cheap and delicious).",
      specialties: ["Charcoal shichirin", "Affordable kalbi", "All-you-can-eat options", "Popular atmosphere"],
      priceRange: "¥1500-2500",
      style: "Traditional accessible yakiniku",
      orderingMethod: "Simple paper menu + charcoal grill",
      vegetarianOptions: "Seasonal vegetables, kimchi, Korean side dishes",
      uniqueFeatures: ["Accessible prices", "Traditional charcoal", "Relaxed atmosphere"],
      cuisine: "Yakiniku/Japanese BBQ",
      href: "/chaines/anan"
    }
  ];

  // New data based on yakiniku_add.md
  const premiumBeefParts = [
    {
      name: "Sankaku-bara",
      japanese: "三角バラ",
      english: "Triangular Brisket",
      description: "The 'King of Kalbi' - Most flavorful part with exceptional marbling",
      characteristics: "Dense marbling, rich and melting flavor",
      rarity: "Premium",
      recommendedSauce: "Concentrated soy sauce, Wasabi-shoyu",
      cookingTip: "Medium cooking, watch the fat melting"
    },
    {
      name: "Zabuton",
      japanese: "ザブトン",
      english: "Cushion (Chuck)",
      description: "Fine marbling like butter, exceptional melting texture",
      characteristics: "Very fine marbling, rich and creamy taste",
      rarity: "Premium",
      recommendedSauce: "Salt, Wasabi-shoyu, Mild sauce",
      cookingTip: "Rare cooking, flip as soon as fat melts"
    },
    {
      name: "Misuji",
      japanese: "ミスジ",
      english: "Three Ribs (Chuck)",
      description: "Rare part with characteristic three ribs and unique marbling",
      characteristics: "Unique gelatinous texture, melts in mouth",
      rarity: "Premium",
      recommendedSauce: "Salt, Sudachi, Wasabi-shoyu",
      cookingTip: "Rare to medium cooking"
    },
    {
      name: "Chateaubriand",
      japanese: "シャトーブリアン",
      english: "Chateaubriand",
      description: "Ultimate tenderness - Center of beef tenderloin",
      characteristics: "Absolute tenderness, little fat, refined taste",
      rarity: "Premium",
      recommendedSauce: "Salt, Truffle salt, Wasabi",
      cookingTip: "Sear hard then cook with residual heat"
    }
  ];

  const hormonParts = [
    {
      name: "Mino",
      japanese: "ミノ",
      description: "First stomach - Crunchy texture, neutral taste",
      texture: "Elastic crunchy",
      difficulty: "Beginner"
    },
    {
      name: "Shimacho",
      japanese: "シマチョウ",
      description: "Striped large intestine - King of offal",
      texture: "Firm and juicy",
      difficulty: "Intermediate"
    },
    {
      name: "Harami",
      japanese: "ハラミ",
      description: "Diaphragm - #1 popularity, red meat taste",
      texture: "Tender and juicy",
      difficulty: "Beginner"
    },
    {
      name: "Tan-moto",
      japanese: "タン元",
      description: "Tongue base - Most tender and fatty part",
      texture: "Melting marbled",
      difficulty: "Intermediate"
    }
  ];

  const waguyuBrands = [
    {
      name: "Kobe Beef",
      japanese: "神戸ビーフ",
      region: "Hyogo",
      characteristics: "Ultimate standards - A4+ and BMS 6+ mandatory",
      specialty: "Absolute worldwide prestige"
    },
    {
      name: "Matsusaka",
      japanese: "松阪牛",
      region: "Mie",
      characteristics: "Virgin cows only - Fat melts at low temperature",
      specialty: "Exceptional richness and aroma"
    },
    {
      name: "Omi",
      japanese: "近江牛",
      region: "Shiga",
      characteristics: "Oldest history - Offered to shoguns since Edo period",
      specialty: "Grain fineness and delicate aroma"
    },
    {
      name: "Yonezawa",
      japanese: "米沢牛",
      region: "Yamagata",
      characteristics: "Top 3 candidate - Raised in cold region",
      specialty: "Flavor-tenderness balance"
    }
  ];

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Header with back link */}
        <div className="bg-white border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link 
              href="/type-plat" 
              className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Food Types
            </Link>
            
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  YAKINIKU <span className="text-lg font-medium text-gray-600">(焼肉)</span>
                </h1>
                <p className="text-xl text-gray-700 mb-3">
                  The gastronomic and convivial experience of Japan
                </p>
                <div className="flex items-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Flame className="w-4 h-4 mr-1" />
                    Art of Grilling
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    Conviviality (おもてなし)
                  </div>
                  <div className="flex items-center">
                    <Sparkles className="w-4 h-4 mr-1" />
                    Wagyu & Techniques
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <article className="bg-white rounded-lg shadow-sm p-8">
            {/* Enhanced introduction */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Welcome to the YAKINIKU Universe <span className="text-gray-600">(焼肉)</span>
              </h2>
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="text-lg leading-relaxed mb-6">
                  Japanese yakiniku transcends the simple notion of "grilling." Born from Korean culture and refined by Japanese excellence,
                  it's an <strong>interactive gastronomic experience</strong> where French barbecue conviviality meets 
                  Japanese culinary precision and millennial craftsmanship. Imagine yourself around a grill, sharing the fire like at a stone grill,
                  but with the incomparable fineness of wagyu meats and ancestral know-how.
                </p>
                <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border-l-4 border-red-400 mb-6">
                  <h3 className="font-semibold text-red-900 mb-2">🔥 The Philosophy of Yakiniku</h3>
                  <p className="text-red-800">
                    Each piece of meat is a work of art that you sculpt through cooking. 
                    From choosing the cut (部位 - bui) to mastering the fire, you become the artisan of your own feast,
                    transforming exceptional raw materials into unforgettable gustatory moments.
                  </p>
                </div>
              </div>
            </section>

            {/* Complete beef anatomy */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Anatomy of a Feast <span className="text-gray-600">- The art of Japanese cutting</span>
              </h2>
              
              <p className="text-gray-700 mb-8">
                In Japan, a single beef carcass can give birth to more than 50 different parts, 
                each with its own gustatory characteristics and cooking techniques. 
                This anatomical precision transforms each meal into a journey through flavors.
              </p>

              {/* Premium Parts */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">🏆 Premium Parts - For Connoisseurs</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {premiumBeefParts.map((part, index) => (
                    <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 rounded-lg border border-amber-200">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-bold text-amber-900">{part.name}</h4>
                          <p className="text-sm text-amber-700">{part.japanese} - <em>{part.english}</em></p>
                        </div>
                        <span className="bg-amber-600 text-white text-xs px-2 py-1 rounded-full">
                          {part.rarity}
                        </span>
                      </div>
                      <p className="text-amber-800 text-sm mb-3">{part.description}</p>
                      <div className="space-y-2 text-xs">
                        <div><strong>Characteristics:</strong> {part.characteristics}</div>
                        <div><strong>Recommended sauce:</strong> {part.recommendedSauce}</div>
                        <div><strong>Cooking tip:</strong> {part.cookingTip}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Hormone - The world of exceptional offal */}
              <div className="mb-10">
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  🥩 Hormone (ホルモン) - The Universe of Exceptional Offal
                </h3>
                <div className="bg-blue-50 p-6 rounded-lg mb-6">
                  <p className="text-blue-800">
                    <strong>"Mottainai" Philosophy (もったいない):</strong> Waste nothing, transform every part into delight. 
                    The term "hormone" comes from Kansai dialect "hōrumon" (放るもん = "what we throw away"), 
                    illustrating the transformation of ordinary into extraordinary.
                  </p>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {hormonParts.map((part, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
                      <h4 className="font-semibold text-gray-900">{part.name}</h4>
                      <p className="text-sm text-gray-600 mb-2">{part.japanese}</p>
                      <p className="text-xs text-gray-700 mb-3">{part.description}</p>
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">Texture: {part.texture}</span>
                        <span className={`px-2 py-1 rounded-full ${
                          part.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                          part.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {part.difficulty}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Optimal cooking technique */}
              <div className="bg-gray-900 text-white p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-6">⚡ Master Techniques - The Art of Perfect Cooking</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold text-yellow-400 mb-3">🥩 Fundamental Rule</h4>
                    <p className="text-sm">"<em>Flip only once, at the right moment</em>" - Wait for juices to appear on surface before flipping to preserve all aromas.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-400 mb-3">🔥 Flavor Progression</h4>
                    <ol className="text-sm space-y-1">
                      <li>1. Tongue (salt + lemon)</li>
                      <li>2. Red meats (light sauces)</li>
                      <li>3. Marbled parts (rich sauces)</li>
                      <li>4. Offal (robust sauces)</li>
                    </ol>
                  </div>
                  <div>
                    <h4 className="font-semibold text-yellow-400 mb-3">🚨 Sacred Hygiene Rule</h4>
                    <p className="text-sm">NEVER use same tongs for raw and cooked meat! This absolute Japanese rule ensures safety and respect for tradition.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Wagyu - Absolute excellence */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                WAGYU (和牛) <span className="text-gray-600">- World's Bovine Excellence</span>
              </h2>
              
              <div className="bg-gradient-to-br from-black to-gray-800 text-white p-8 rounded-lg mb-8">
                <h3 className="text-xl font-semibold mb-4">✨ The Science of "Shimofuri" (霜降り)</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <p className="mb-4">
                      Wagyu is not "fatty" - it's a <strong>genetic masterpiece</strong>. 
                      Its unique marbling melts at <span className="text-yellow-400">25°C</span> (body temperature!), 
                      creating this melt-in-mouth sensation comparable to the finest foie gras.
                    </p>
                    <h4 className="font-semibold mb-2">🔬 Scientific Characteristics</h4>
                    <ul className="text-sm space-y-1">
                      <li>• Ultra-low fat melting point</li>
                      <li>• Oleic fatty acid concentration</li>
                      <li>• Unique "wagyu-kō" aroma in the world</li>
                      <li>• Perfect intramuscular network</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">🏆 A5 Decoding - Myth vs Reality</h4>
                    <div className="bg-gray-700 p-4 rounded">
                      <p className="text-sm mb-2">
                        <strong>A</strong> = Yield (A{'>'}B{'>'}C) - For producers<br/>
                        <strong>5</strong> = Quality (1-5) - Based on visible marbling
                      </p>
                      <p className="text-yellow-300 text-xs">
                        💡 A5 ≠ "Most delicious"! True connoisseurs sometimes appreciate 
                        A3-A4 for their optimal flavor/texture balance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Legendary Wagyu brands */}
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">🌟 Legendary Wagyu Brands</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {waguyuBrands.map((brand, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <h4 className="font-bold text-gray-900">{brand.name}</h4>
                          <p className="text-gray-600">{brand.japanese} - {brand.region}</p>
                        </div>
                        <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                          Legendary
                        </span>
                      </div>
                      <p className="text-gray-700 text-sm mb-2">{brand.characteristics}</p>
                      <p className="text-red-600 text-sm font-medium">{brand.specialty}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Sauces and accompaniments */}
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">The Alchemy of "Tare" Sauces (タレ)</h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-amber-50 border border-amber-200 p-6 rounded-lg">
                  <h3 className="font-semibold text-amber-900 mb-3">🍯 Soy Sauce (醤油ベース)</h3>
                  <p className="text-amber-800 text-sm mb-3">
                    Universal sweet-salty base with fruits (apple, pear), garlic and ginger. 
                    Perfect for kalbi and rich meats.
                  </p>
                  <div className="text-xs text-amber-700">
                    <strong>Pairings:</strong> Kalbi, Rosu, marbled meats
                  </div>
                </div>
                
                <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
                  <h3 className="font-semibold text-red-900 mb-3">🌶️ Miso Sauce (味噌ベース)</h3>
                  <p className="text-red-800 text-sm mb-3">
                    Deep fermented and full-bodied, often spicy. Its power sublimates 
                    strong offal flavors without masking them.
                  </p>
                  <div className="text-xs text-red-700">
                    <strong>Pairings:</strong> Hormone, offal, strong parts
                  </div>
                </div>
                
                <div className="bg-green-50 border border-green-200 p-6 rounded-lg">
                  <h3 className="font-semibold text-green-900 mb-3">🧂 Salt Sauce (塩ベース)</h3>
                  <p className="text-green-800 text-sm mb-3">
                    Mineral purity with sesame oil, garlic and sometimes lemon. 
                    Reveals the very essence of exceptional meats.
                  </p>
                  <div className="text-xs text-green-700">
                    <strong>Pairings:</strong> Tongue, premium wagyu, delicate parts
                  </div>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg border border-purple-200">
                <h3 className="font-semibold text-purple-900 mb-3">🌿 Exceptional Condiments</h3>
                <div className="grid md:grid-cols-4 gap-4 text-sm">
                  <div><strong>Wasabi:</strong> Cuts through the richness of fatty parts</div>
                  <div><strong>Yuzu-kosho:</strong> Citrus + chili, perfect accent</div>
                  <div><strong>Lemon/Sudachi:</strong> Reveals tongue flavors</div>
                  <div><strong>Garlic/Ginger:</strong> Neutralizes offal odors</div>
                </div>
              </div>
            </section>

            {/* Recommended Chains */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Excellent Yakiniku Chains
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {yakinikuChains.map((chain) => (
                  <Link
                    key={chain.name}
                    href={chain.href}
                    className="block bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-all duration-200 hover:border-red-300"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{chain.name}</h3>
                        <p className="text-gray-600 font-medium">{chain.japanese}</p>
                      </div>
                      <span className="bg-red-100 text-red-800 text-xs px-3 py-1 rounded-full">
                        {chain.priceRange}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4 leading-relaxed">{chain.description}</p>
                    <div className="space-y-2">
                      <div>
                        <span className="text-sm font-semibold text-gray-900">Specialties:</span>
                        <p className="text-sm text-gray-600">{chain.specialties.join(", ")}</p>
                      </div>
                      <div>
                        <span className="text-sm font-semibold text-gray-900">Style:</span>
                        <p className="text-sm text-gray-600">{chain.style}</p>
                      </div>
                      <div className="flex flex-wrap gap-2 mt-3">
                        {chain.uniqueFeatures.map((feature, index) => (
                          <span key={index} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </section>

            {/* Optimal ordering guide */}
            <section className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Ordering Guide - Becoming an Expert</h2>
              
              <div className="bg-gradient-to-r from-blue-800 to-indigo-900 text-white p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">🎯 The "Golden Rule" of Ordering</h3>
                <p className="mb-6">
                  Like composing a tasting menu, the art of yakiniku follows an orchestrated progression: 
                  from delicate to powerful, creating a perfect gustatory symphony.
                </p>
                
                <div className="grid md:grid-cols-4 gap-4 text-black">
                  <div className="bg-white bg-opacity-20 p-4 rounded">
                    <h4 className="font-semibold mb-2">1️⃣ Appetizers</h4>
                    <p className="text-sm text-black">Kimchi, Namul → Stimulate appetite</p>
                  </div>
                  <div className="bg-white bg-opacity-20 p-4 rounded">
                    <h4 className="font-semibold mb-2">2️⃣ Salt (塩もの)</h4>
                    <p className="text-sm text-black">Tongue, delicate meats → Purity of flavors</p>
                  </div>
                  <div className="bg-white bg-opacity-20 p-4 rounded">
                    <h4 className="font-semibold mb-2">3️⃣ Sauce (タレもの)</h4>
                    <p className="text-sm text-black">Kalbi, rich parts → Gustatory climax</p>
                  </div>
                  <div className="bg-white bg-opacity-20 p-4 rounded">
                    <h4 className="font-semibold mb-2">4️⃣ Finish</h4>
                    <p className="text-sm text-black">Cold noodles, Kuppa → Perfect conclusion</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Conclusion */}
            <section className="border-t border-gray-200 pt-8">
              <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white p-8 rounded-lg text-center">
                <h2 className="text-2xl font-bold mb-4">
                  Your Yakiniku Initiation is Complete
                </h2>
                <p className="text-lg mb-6">
                  Armed with knowledge of cuts, cooking techniques and respect for traditions, 
                  you are now ready to live an authentic and unforgettable yakiniku experience.
                </p>
                <div className="flex justify-center items-center space-x-4 text-lg">
                  <span>いただきます</span>
                  <span>🥢</span>
                  <span>🔥</span>
                  <span>🥩</span>
                  <span>Bon appétit!</span>
                </div>
              </div>
            </section>
          </article>
        </div>
      </div>
    </>
  );
}
