import Link from "next/link";
import Image from "next/image";
import CategoryViewTracker from '../../../components/CategoryViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Gyudon: Guide to Beef Rice Bowls (Yoshinoya, Sukiya) | Japanese Chains",
  description: "Discover gyudon, Japan's quintessential fast and economical dish. Comparison of giants: Yoshinoya, Sukiya and Matsuya.",
  keywords: "gyudon, Yoshinoya, Sukiya, Matsuya, beef rice bowl, Japanese fast food",
  openGraph: {
    title: "Gyudon: Guide to Beef Rice Bowls (Yoshinoya, Sukiya) | Japanese Chains",
    description: "Discover gyudon, Japan's quintessential fast and economical dish. Comparison of giants: Yoshinoya, Sukiya and Matsuya.",
    type: "article",
    url: "https://japonchaines.com/type-plat/gyudon",
    siteName: "Japanese Chains",
    locale: "en_US",
    images: [{
      url: "/images/gyudon-cover.jpg",
      width: 1200,
      height: 630,
      alt: "Gyudon - Japanese beef rice bowls"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Gyudon: Guide to Beef Rice Bowls (Yoshinoya, Sukiya) | Japanese Chains",
    description: "Discover gyudon, Japan's quintessential fast and economical dish. Comparison of giants: Yoshinoya, Sukiya and Matsuya.",
    images: ["/images/gyudon-cover.jpg"]
  },
  alternates: {
    canonical: "https://japonchaines.com/type-plat/gyudon"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

export default function GyudonPage() {
  const gyudonChains = [
    {
      name: "Yoshinoya",
      japanese: "吉野家",
      logo: "/logos/yoshinoya.png", // placeholder
      description: "THE ORIGINAL! Founded in 1899 at Nihonbashi fish market, creator of modern gyūdon.",
      specialties: ["Original Gyūdon", "Yakiniku Don", "Curry Gyūdon", "Custom toppings"],
      priceRange: "¥468 (regular) - ¥700+",
      locations: "1,261 restaurants in Japan + International",
      orderingMethod: "Iconic U-shaped counter + Vending machines in some stores",
      vegetarianOptions: "Limited (some curry options)",
      uniqueFeatures: [
        "'Umai, Yasui, Hayai' philosophy (Delicious, Cheap, Fast)",
        "USA imported meat ('Japan Spec' quality)",
        "Secret sauce with white wine and ginger",
        "'継ぎ足し' (continuous addition) cooking method",
        "Optimized meat thickness at 1.3mm",
        "Revolutionary U-shaped counter for efficiency"
      ],
      foundingYear: 1899,
      heritage: "125+ years of history, survived BSE crisis (2004-2006)",
      href: "/chaines/yoshinoya"
    },
    {
      name: "Sukiya",
      japanese: "すき家",
      logo: "/logos/sukiya.png",
      description: "Leader in number of stores (1,942+), specializing in diversity and family accessibility.",
      specialties: ["Mega Gyūdon", "Cheese Gyūdon", "Kimchi Gyūdon", "Dessert menu"],
      priceRange: "¥400 (regular) - ¥800+",
      locations: "1,942 restaurants (market leader)",
      orderingMethod: "Counter ordering + Drive-through",
      vegetarianOptions: "Vegetarian options available",
      uniqueFeatures: [
        "Largest store network in Japan",
        "Strong presence in suburbs and family areas",
        "Most diverse menu (toppings, desserts, seafood)",
        "Family and convenience strategy",
        "Australian meat during BSE crisis (competitive advantage)",
        "Developed drive-through options"
      ],
      foundingYear: 1982,
      heritage: "Rapid expansion, focus on innovation and diversity",
      href: "/chaines/sukiya"
    },
    {
      name: "Matsuya",
      japanese: "松屋",
      logo: "/logos/matsuya.png",
      description: "The innovator! Calls their dishes 'Gyūmeshi' and stands out with bold creations.",
      specialties: ["Gyūmeshi (牛めし)", "Hamburger Steak", "'World Flavors' menu", "Curry"],
      priceRange: "¥400 (regular) - ¥1000+ (premium dishes)",
      locations: "986 restaurants",
      orderingMethod: "Vending machine (pioneer)",
      vegetarianOptions: "Vegetarian curry and various options",
      uniqueFeatures: [
        "Free miso with meals when dining in",
        "Unique term 'Gyūmeshi' instead of 'Gyūdon'",
        "Constant innovator (bold limited menus)",
        "'World Flavors' series (¥1000+ dishes)",
        "Developed teishoku (complete meals) menu",
        "Culinary innovator positioning"
      ],
      foundingYear: 1966,
      heritage: "Creative challenger pushing fast-food boundaries",
      href: "/chaines/matsuya"
    },
    {
      name: "Nakau",
      japanese: "なか卯",
      logo: "/logos/nakau.png",
      description: "The unique specialist combining gyūdon and fresh udon. Family quality and innovation since 1969.",
      specialties: ["親子丼 (Oyako-don)", "牛丼 (Gyū-don)", "うどん (Fresh Udon)", "定食 (Complete sets)", "天丼 (Ten-don)"],
      priceRange: "¥490 (regular) - ¥800+ (sets)",
      locations: "460+ restaurants",
      orderingMethod: "Vending machine + Counter ordering",
      vegetarianOptions: "Udon with vegetable dashi available",
      uniqueFeatures: [
        "Unique fusion of gyūdon + udon under one roof",
        "Udon prepared fresh in each restaurant",
        "Authentic dashi broth with katsuobushi",
        "More relaxed family atmosphere",
        "Oyako-don (chicken-egg) specialist",
        "Superior ingredient quality",
        "Continuous innovation with seasonal menus"
      ],
      foundingYear: 1969,
      heritage: "55 years of innovation in fast-food and family quality fusion",
      href: "/chaines/nakau"
    }
  ];

  const menuItems = [
    {
      name: "Gyūdon (Regular)",
      japanese: "牛丼",
      romaji: "Gyūdon",
      description: "The classic gyūdon: rice bowl topped with thin beef slices simmered in sweet-savory sauce based on soy sauce, mirin and sugar.",
      price: "¥300-400",
      calories: "約650kcal",
      image: "/menu/gyudon-regular.jpg"
    },
    {
      name: "Gyūdon Large (大盛)",
      japanese: "牛丼大盛",
      romaji: "Gyūdon Ōmori",
      description: "Large version of classic gyūdon with more rice and meat.",
      price: "¥450-550",
      calories: "約850kcal",
      image: "/menu/gyudon-large.jpg"
    },
    {
      name: "Cheese Gyūdon",
      japanese: "チーズ牛丼",
      romaji: "Chīzu Gyūdon",
      description: "Gyūdon topped with melted cheese, creating a savory blend between Japanese tradition and Western influence.",
      price: "¥450-600",
      calories: "約750kcal",
      image: "/menu/cheese-gyudon.jpg"
    }
  ];

  return (
    <>
      <CategoryViewTracker categoryName="gyudon" />
      <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-red-600">Home</Link>
            <span className="text-gray-400 mx-2">/</span>
            <Link href="/type-plat" className="text-gray-500 hover:text-red-600">Dish Type</Link>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-gray-900 font-medium">Gyūdon</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-100 to-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-5xl mr-4">🥩</span>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    Gyūdon
                  </h1>
                  <p className="text-2xl text-gray-600 japanese-text">牛丼</p>
                </div>
              </div>
              <p className="text-xl text-gray-700 mb-6">
                The iconic Japanese dish: a bowl of rice topped with thin beef slices 
                simmered in sweet sauce. Fast, affordable and delicious.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                  Price: ¥300-800
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Fast
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Filling
                </span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What is Gyūdon?</h3>
              <p className="text-gray-600 mb-4">
                Gyūdon (牛丼) consists of thin beef slices and onions simmered 
                in a sauce based on soy sauce, mirin, sake and sugar, served over a 
                bowl of hot white rice.
              </p>
              <p className="text-gray-600">
                Born in the late 19th century, this dish has become a symbol of Japanese 
                fast food, appreciated for its simplicity, affordable price and comforting flavor.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Examples */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Popular Gyūdon Variations
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {menuItems.map((item, index) => (
              <div key={index} className="bg-gray-50 rounded-xl overflow-hidden shadow-sm">
                <div className="h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-400 text-sm">Image: {item.name}</span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.name}</h3>
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span className="japanese-text">{item.japanese}</span>
                    <span className="italic">{item.romaji}</span>
                  </div>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-red-600 font-bold">{item.price}</span>
                    <span className="text-gray-500 text-sm">{item.calories}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chains Comparison */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Major Gyūdon Chains
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {gyudonChains.map((chain, index) => (
              <Link 
                key={index}
                href={chain.href}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-red-200 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-xs text-gray-500">Logo</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                        {chain.name}
                      </h3>
                      <p className="text-gray-600 japanese-text">{chain.japanese}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4">{chain.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">Specialties:</h4>
                      <p className="text-sm text-gray-600">{chain.specialties.join(", ")}</p>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="font-semibold text-gray-900">Price: </span>
                        <span className="text-gray-600">{chain.priceRange}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Stores: </span>
                        <span className="text-gray-600">{chain.locations}</span>
                      </div>
                    </div>
                    
                    <div className="text-sm">
                      <span className="font-semibold text-gray-900">Ordering: </span>
                      <span className="text-gray-600">{chain.orderingMethod}</span>
                    </div>
                    
                    {chain.foundingYear && (
                      <div className="text-sm">
                        <span className="font-semibold text-gray-900">Founded: </span>
                        <span className="text-gray-600">{chain.foundingYear} ({chain.heritage})</span>
                      </div>
                    )}
                    
                    {chain.uniqueFeatures && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Unique features:</h4>
                        <div className="flex flex-wrap gap-1">
                          {chain.uniqueFeatures.slice(0, 3).map((feature, featureIndex) => (
                            <span key={featureIndex} className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded-full">
                              {feature.length > 30 ? `${feature.substring(0, 30)}...` : feature}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <div className="text-sm">
                      <span className="font-semibold text-gray-900">Vegetarian: </span>
                      <span className="text-gray-600">{chain.vegetarianOptions}</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-red-600 font-medium text-sm group-hover:text-red-700">
                      View details →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ordering Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Tips for Ordering Gyūdon
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-red-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-red-800 mb-4">🎫 Ordering Method</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Most chains use vending machines</li>
                <li>• Select size: 並盛 (regular), 大盛 (large), 特盛 (extra large)</li>
                <li>• Pay with cash or IC card</li>
                <li>• Hand the ticket to the counter</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-800 mb-4">🥗 Customization Options</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• つゆだく (Tsuyu-daku): extra sauce</li>
                <li>• つゆ抜き (Tsuyu-nuki): no sauce</li>
                <li>• ねぎだく (Negi-daku): extra green onions</li>
                <li>• 玉ねぎ抜き (Tamanegi-nuki): no onions</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link 
              href="/guides/comment-commander"
              className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors inline-block"
            >
              Complete Ordering Guide
            </Link>
          </div>
        </div>
      </section>

      {/* History and Philosophy of Gyūdon */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            The History of Gyūdon: From Fish Market to National Phenomenon
            <span className="block text-lg text-gray-600 mt-2">牛丼の歴史と哲学</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-bold text-red-800 mb-6">
                1899: Birth of a Legend
                <span className="block text-sm font-normal text-gray-600 mt-1">伝説の始まり</span>
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>Nihonbashi Market:</strong> The history of modern gyūdon begins in 1899 
                  when Matsuda Eikichi opens the first Yoshinoya at the Nihonbashi fish market, Tokyo. 
                  Market workers needed a quick, tasty and affordable meal.
                </p>
                <p>
                  <strong>Revolutionary Innovation:</strong> Matsuda adapts traditional "gyūmeshi" 
                  to the specific needs of market workers: speed, consistent quality, accessible price. 
                  This philosophy becomes the foundation of Japanese fast food.
                </p>
                <p>
                  <strong>From Nihonbashi to Tsukiji:</strong> After the Great Earthquake of 1923, 
                  Yoshinoya follows the market to Tsukiji in 1926. This loyalty to market customers 
                  forges the DNA of modern gyūdon.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-6">
                The "Umai, Yasui, Hayai" Philosophy
                <span className="block text-sm font-normal text-gray-600">うまい、やすい、はやい</span>
              </h4>
              <div className="space-y-4">
                <div className="border-l-4 border-red-400 pl-4">
                  <p className="font-bold text-red-800">うまい (Umai) - Delicious</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Quality "Japan Spec" meat, secret sauce with white wine and ginger, 
                    "継ぎ足し" (continuous addition) cooking method to develop flavors
                  </p>
                </div>
                
                <div className="border-l-4 border-orange-400 pl-4">
                  <p className="font-bold text-orange-800">やすい (Yasui) - Affordable</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Cost optimization through operational efficiency, 
                    direct partnerships with American producers
                  </p>
                </div>
                
                <div className="border-l-4 border-yellow-400 pl-4">
                  <p className="font-bold text-yellow-800">はやい (Hayai) - Fast</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Revolutionary U-shaped counter, meat sliced to precisely 1.3mm, 
                    47-hole ladle for optimal service
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-4">🏭</div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Industrial Revolution</h4>
              <p className="text-gray-600 text-sm">
                Gyūdon was born during Japan's modernization, symbolizing the adaptation 
                of traditional cuisine to the needs of the industrial era.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-4">💼</div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Salaryman Culture</h4>
              <p className="text-gray-600 text-sm">
                Becomes the symbol of the Japanese worker's meal - fast, nourishing, 
                and adapted to the frantic pace of modern urban life.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-4xl mb-4">🌍</div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Global Phenomenon</h4>
              <p className="text-gray-600 text-sm">
                From humble origins in Nihonbashi, gyūdon is exported worldwide, 
                becoming an ambassador of Japanese cuisine.
              </p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">The BSE Crisis: Trial and Renaissance (2004-2006)</h3>
            <p className="text-lg text-red-100 max-w-4xl mx-auto mb-4">
              When American beef imports were banned, Yoshinoya chose to stop selling gyūdon 
              rather than compromise quality. This heroic decision paradoxically strengthened 
              consumer confidence.
            </p>
            <p className="text-red-50">
              <strong>Lesson:</strong> Integrity and quality before profit - 
              a philosophy that distinguishes true Japanese brands.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Secrets of Gyūdon */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Technical Secrets of Perfect Gyūdon
            <span className="block text-lg text-gray-600 mt-2">牛丼の技術的秘密</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-blue-800 mb-6">
                Science of Meat
                <span className="block text-sm font-normal text-gray-600">肉の科学</span>
              </h3>
              
              <div className="space-y-4">
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">🥩 Beef Selection</h4>
                  <p className="text-sm text-gray-700">
                    <strong>Cut:</strong> Short Plate (バラ肉) - optimal 6:4 ratio between red meat and fat<br/>
                    <strong>Origin:</strong> Grain-fed North American beef ("Japan Spec" standard)<br/>
                    <strong>Thickness:</strong> Precisely 1.3mm - not too thin (tears), not too thick (hard to chew)
                  </p>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">⏱️ Aging Process</h4>
                  <p className="text-sm text-gray-700">
                    <strong>Thawing:</strong> 14 days of slow aging in factory<br/>
                    <strong>Effect:</strong> Protein breakdown into amino acids (umami)<br/>
                    <strong>Result:</strong> Tender texture and developed deep flavor
                  </p>
                </div>
                
                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-800 mb-2">🍯 Secret Sauce</h4>
                  <p className="text-sm text-gray-700">
                    <strong>Base:</strong> Soy sauce, mirin, sugar, white wine, ginger<br/>
                    <strong>"継ぎ足し" Method:</strong> Continuous addition during cooking<br/>
                    <strong>Evolution:</strong> Each restaurant develops its own complexity
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-red-800 mb-6">
                Operational Revolution
                <span className="block text-sm font-normal text-gray-600">運営革命</span>
              </h3>
              
              <div className="space-y-4">
                <div className="bg-red-50 rounded-lg p-4">
                  <h4 className="font-semibold text-red-800 mb-2">🔄 U-Shaped Counter</h4>
                  <p className="text-sm text-gray-700">
                    <strong>Innovation:</strong> Revolutionary design to maximize efficiency<br/>
                    <strong>Advantage:</strong> One employee can serve multiple customers simultaneously<br/>
                    <strong>Impact:</strong> Reduced waiting times and operational costs
                  </p>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">🥄 Technical Ladle</h4>
                  <p className="text-sm text-gray-700">
                    <strong>Design:</strong> 47 precisely positioned holes<br/>
                    <strong>Function:</strong> Perfect meat/sauce ratio in single portion<br/>
                    <strong>Result:</strong> Absolute consistency and ultra-fast service
                  </p>
                </div>
                
                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">📊 Continuous Optimization</h4>
                  <p className="text-sm text-gray-700">
                    <strong>Goal:</strong> Serve gyūdon in less than 30 seconds<br/>
                    <strong>Method:</strong> Standardization of every gesture and movement<br/>
                    <strong>Evolution:</strong> Constant adaptation based on customer feedback
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-3">⚡</div>
              <h4 className="font-bold text-gray-900 mb-2">Express Service</h4>
              <p className="text-sm text-gray-600">
                From order to service: less than 30 seconds thanks to total optimization
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-3">🔬</div>
              <h4 className="font-bold text-gray-900 mb-2">Scientific Precision</h4>
              <p className="text-sm text-gray-600">
                Every element measured to the millimeter for consistent experience
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-3">🎯</div>
              <h4 className="font-bold text-gray-900 mb-2">Absolute Quality</h4>
              <p className="text-sm text-gray-600">
                Standards so strict that Yoshinoya preferred to stop sales during BSE crisis
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-3">🌏</div>
              <h4 className="font-bold text-gray-900 mb-2">Global Influence</h4>
              <p className="text-sm text-gray-600">
                The gyūdon model has inspired the global fast-food industry
              </p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
