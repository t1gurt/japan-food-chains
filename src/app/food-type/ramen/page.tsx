import Link from "next/link";
import CategoryViewTracker from '../../../components/CategoryViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Ramen: Guide to Broths, Noodles and Chains (Ichiran) | Japonchaines",
  description: "Explore the world of ramen. From tonkotsu, shoyu, shio, miso broths to the best chains like Ichiran and Ippudo.",
  keywords: "ramen, Ichiran, Ippudo, Tenkaippin, tonkotsu, shoyu, miso, japanese noodles",
  openGraph: {
    title: "Ramen: Guide to Broths, Noodles and Chains (Ichiran) | Japonchaines",
    description: "Explore the world of ramen. From tonkotsu, shoyu, shio, miso broths to the best chains like Ichiran and Ippudo.",
    type: "article",
    url: "https://japonchaines.com/food-type/ramen",
    siteName: "Japonchaines",
    locale: "en_US",
    images: [{
      url: "/images/ramen-cover.jpg",
      width: 1200,
      height: 630,
      alt: "Japanese Ramen - Guide to broths and chains"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Ramen: Guide to Broths, Noodles and Chains (Ichiran) | Japonchaines",
    description: "Explore the world of ramen. From tonkotsu, shoyu, shio, miso broths to the best chains like Ichiran and Ippudo.",
    images: ["/images/ramen-cover.jpg"]
  },
  alternates: {
    canonical: "https://japonchaines.com/food-type/ramen"
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

export default function RamenPage() {const ramenChains = [
    {
      name: "Ichiran",
      japanese: "一蘭",
      description: "Famous for its tonkotsu ramen and unique ordering system with individual booths.",
      specialties: ["Tonkotsu Ramen", "Garlic-free Ramen", "Extra spicy Ramen"],
      priceRange: "¥800-1200",
      orderingMethod: "Custom paper form",
      vegetarianOptions: "Not available",
      uniqueFeatures: ["'Ajimi-Shūchū' system", "Individual booths", "No-interaction ordering"],
      founded: "1960",
      href: "/chains/ichiran"
    },
    {
      name: "Ippudo",
      japanese: "一風堂",
      description: "Premium chain specializing in Hakata-style tonkotsu ramen, founded in Fukuoka.",
      specialties: ["Shiromaru Motoaji", "Akamaru Shinaji", "Karaka-men"],
      priceRange: "¥900-1500",
      orderingMethod: "Waiter service",
      vegetarianOptions: "Vegetarian ramen available",
      uniqueFeatures: ["International expansion", "Modern design", "Premium quality"],
      founded: "1985",
      href: "/chains/ippudo"
    },
    {
      name: "Tenkaippin",
      japanese: "天下一品",
      description: "Known for its unique kotteri (thick and rich) broth made from pork bones and vegetables.",
      specialties: ["Kotteri Ramen", "Assari Ramen", "Karaage"],
      priceRange: "¥700-1100",
      orderingMethod: "Vending machine",
      vegetarianOptions: "Limited",
      uniqueFeatures: ["Signature 'kotteri' broth", "Devoted fans", "Unique texture"],
      founded: "1971",
      href: "/chains/tenkaippin"
    }
  ];
  const ramenTypes = [
    {
      name: "Tonkotsu Ramen",
      japanese: "豚骨ラーメン",
      description: "White and creamy broth made from pork bones simmered for hours",
      region: "Kyushu (Fukuoka)",
      characteristics: "Rich, creamy, intense flavor",
      toppings: "Chashu, marinated egg, green onions, nori seaweed",
      history: "Born in 1947 in Kurume by accident, when a cook forgot to turn off the fire under pork bones"
    },
    {
      name: "Shoyu Ramen",
      japanese: "醤油ラーメン",
      description: "Clear broth based on soy sauce, the most traditional style",
      region: "Tokyo",
      characteristics: "Light, flavorful, balanced",
      toppings: "Chashu, menma, green onions, naruto",
      history: "Created in 1910 at Rairaiken restaurant in Asakusa, first ramen adapted to Japanese taste"
    },
    {
      name: "Shio Ramen",
      japanese: "塩ラーメン",
      description: "Salt-based broth, the lightest, often made with seafood",
      region: "Hakodate",
      characteristics: "Delicate, clear, refreshing",
      toppings: "Chashu, wonbok, green onions",
      history: "The oldest style, allowing pure appreciation of broth quality"
    },
    {
      name: "Miso Ramen",
      japanese: "味噌ラーメン",
      description: "Miso paste-based broth, often more robust and spicy",
      region: "Sapporo",
      characteristics: "Rich, salty, complex",
      toppings: "Chashu, corn, butter, green onions",
      history: "Invented in 1954 at Aji no Sanpei restaurant in Sapporo, revolutionizing the ramen world"
    }
  ];  return (
    <>
      <CategoryViewTracker categoryName="ramen" />
      <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-red-600">Home</Link>
            <span className="text-gray-400 mx-2">/</span>
            <Link href="/food-type" className="text-gray-500 hover:text-red-600">Food Type</Link>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-gray-900 font-medium">Ramen</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section 
        className="relative py-16"
        style={{
          backgroundImage: "url('/images/chaines/ippudo/shiromaru-motoaji.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div 
          className="absolute inset-0"
          style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
        ></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-5xl mr-4">🍜</span>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    Ramen
                  </h1>
                  <p className="text-2xl text-gray-200 japanese-text">ラーメン</p>
                </div>
              </div>
              <p className="text-xl text-gray-200 mb-6">
                Japan's most iconic noodle dish. Wheat noodles served 
                in flavorful broth with various toppings.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-orange-500 bg-opacity-80 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Price: ¥700-1500
                </span>
                <span className="bg-red-500 bg-opacity-80 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Comforting
                </span>
                <span className="bg-blue-500 bg-opacity-80 text-white px-3 py-1 rounded-full text-sm font-medium">
                  Many varieties
                </span>
              </div>
            </div>
            <div className="bg-white bg-opacity-90 p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Art of Ramen</h3>
              <p className="text-gray-700 mb-4">
                Modern ramen was born in the early 20th century, influenced by Chinese noodles. 
                Each region of Japan has developed its own unique style.
              </p>
              <p className="text-gray-700">
                Good ramen consists of three essential elements: the broth (dashi), 
                the noodles (men) and the toppings. The harmony between these elements 
                creates the perfect ramen experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ramen Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            The Four Great Types of Ramen
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ramenTypes.map((type, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-lg font-bold text-gray-900 mb-2">{type.name}</h3>
                <p className="text-gray-600 japanese-text text-sm mb-3">{type.japanese}</p>
                <p className="text-gray-600 text-sm mb-4">{type.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-semibold text-gray-900">Origin: </span>
                    <span className="text-gray-600">{type.region}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Character: </span>
                    <span className="text-gray-600">{type.characteristics}</span>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Toppings: </span>
                    <span className="text-gray-600">{type.toppings}</span>
                  </div>
                  <div className="pt-2 border-t border-gray-200">
                    <span className="font-semibold text-gray-900">History: </span>
                    <span className="text-gray-600 text-xs">{type.history}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Chains */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Major Ramen Chains
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {ramenChains.map((chain, index) => (
              <Link 
                key={index}
                href={chain.href}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-orange-200 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mr-4 overflow-hidden">
                      {chain.name === "Ippudo" ? (
                        <img 
                          src="/images/chaines/ippudo/ippudo-logo.jpg" 
                          alt="Logo Ippudo"
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <span className="text-xs text-gray-500">Logo</span>
                      )}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
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
                      <div className="grid grid-cols-1 gap-2 text-sm">
                      <div>
                        <span className="font-semibold text-gray-900">Price: </span>
                        <span className="text-gray-600">{chain.priceRange}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Founded: </span>
                        <span className="text-gray-600">{chain.founded}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Ordering: </span>
                        <span className="text-gray-600">{chain.orderingMethod}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Vegetarian: </span>
                        <span className="text-gray-600">{chain.vegetarianOptions}</span>
                      </div>
                    </div>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Unique features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {chain.uniqueFeatures.map((feature, featureIndex) => (
                          <span key={featureIndex} className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-200">
                      <div className="text-sm text-gray-600">
                        <span className="font-semibold text-gray-900">Vegetarian: </span>
                        <span className="text-gray-600">{chain.vegetarianOptions}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-orange-600 font-medium text-sm group-hover:text-orange-700">
                      View details →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ordering Guide */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Ramen Ordering Guide
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-orange-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-orange-800 mb-4">🎫 Ordering Methods</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>Vending machine:</strong> Most chains</li>
                <li>• <strong>Form:</strong> Ichiran (customization)</li>
                <li>• <strong>Waiter:</strong> Premium restaurants</li>
                <li>• <strong>QR Code:</strong> Modern new chains</li>
              </ul>
            </div>
            
            <div className="bg-red-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-red-800 mb-4">🍜 Customization</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• <strong>硬さ (Katasa):</strong> Noodle firmness</li>
                <li>• <strong>濃さ (Kosa):</strong> Broth intensity</li>
                <li>• <strong>油 (Abura):</strong> Amount of oil</li>
                <li>• <strong>ニンニク (Ninniku):</strong> Garlic</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-blue-800 mb-4">🥢 Ramen Etiquette</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Slurp noodles loudly (it's OK!)</li>
                <li>• Eat quickly (noodles get soft)</li>
                <li>• Don't leave broth</li>
                <li>• Leave your seat quickly</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <Link 
              href="/guides/comment-commander"
              className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors inline-block"
            >
              Complete Ordering Guide
            </Link>
          </div>
        </div>
      </section>

      {/* Cultural History Section */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            History and Culture of Ramen
            <span className="block text-lg text-gray-600 mt-2">ラーメンの歴史と文化</span>
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-4">🏮</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Origins (1910-1920)</h3>
              <p className="text-gray-600 mb-4">
                Modern ramen was born in 1910 at the <strong>Rairaiken</strong> restaurant in Asakusa, Tokyo. 
                Owner Ozaki Kanichi adapted Chinese noodles to Japanese taste by using 
                lighter broth with soy sauce.
              </p>
              <p className="text-sm text-gray-500">
                This "Japanization" of a Chinese dish marks the beginning of ramen's unique evolution.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-4">🌊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expansion (1920-1950)</h3>
              <p className="text-gray-600 mb-4">
                The <strong>Great Kantō Earthquake (1923)</strong> scattered Tokyo cooks throughout 
                Japan. Then, after World War II, repatriates from China and cheap American flour 
                democratized ramen.
              </p>
              <p className="text-sm text-gray-500">
                Ramen became Japan's post-war reconstruction food.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Innovation (1950-present)</h3>
              <p className="text-gray-600 mb-4">
                The 1950s-60s saw major innovations: <strong>miso ramen</strong> (1954), 
                <strong>tsukemen</strong> (1955), and the invention of <strong>instant ramen</strong> (1958) 
                which popularized the term "ramen" worldwide.
              </p>
              <p className="text-sm text-gray-500">
                From simple popular dish, ramen became a refined culinary art.
              </p>
            </div>
          </div>
          
          <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              The Three Pillars of Modern Ramen
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl mb-4">🥄</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Dashi (出汁)</h4>
                <p className="text-gray-600 text-sm">
                  The base broth, extracted from pork bones, chicken, fish or vegetables. 
                  Can be <strong>chintan</strong> (clear) or <strong>paitan</strong> (cloudy).
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🥢</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Tare (タレ)</h4>
                <p className="text-gray-600 text-sm">
                  The concentrated seasoning that determines the type: shoyu (soy sauce), 
                  shio (salt), or miso (fermented soybean paste).
                </p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🍜</div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Kansui (かん水)</h4>
                <p className="text-gray-600 text-sm">
                  The alkaline water that gives noodles their characteristic texture, 
                  yellowish color and unique flavor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Ramen Guide */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Iconic Regional Ramen
            <span className="block text-lg text-gray-600 mt-2">ご当地ラーメン</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">❄️</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Sapporo Ramen</h3>
                  <p className="text-gray-600">札幌ラーメン - Hokkaido</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                <strong>Miso ramen</strong> born in 1954 at "Aji no Sanpei" restaurant. Thick miso broth, 
                thick wavy noodles, topped with corn and butter. The thick layer of fat 
                protects from winter cold.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><strong>Specialty:</strong> Miso + stir-fried vegetables</div>
                <div><strong>Particularity:</strong> Wok cooking</div>
                <div><strong>Season:</strong> Perfect in winter</div>
                <div><strong>Price:</strong> ¥800-1200</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">🌸</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Hakata Ramen</h3>
                  <p className="text-gray-600">博多ラーメン - Fukuoka</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                <strong>Tonkotsu</strong> with creamy white broth, born by accident in 1947. Very thin noodles, 
                quick cooking. Unique "kaedama" system (extra noodles) because they get soft quickly.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><strong>Specialty:</strong> Tonkotsu + chashu</div>
                <div><strong>Particularity:</strong> Kaedama system</div>
                <div><strong>Toppings:</strong> Red pickled ginger</div>
                <div><strong>Price:</strong> ¥600-900</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">🏔️</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Kitakata Ramen</h3>
                  <p className="text-gray-600">喜多方ラーメン - Fukushima</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Tradition of <strong>"asa-ra"</strong> (morning ramen) since 1925. Light shoyu broth, 
                flat wavy noodles with high water content. Generous chashu covering the bowl.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><strong>Specialty:</strong> Shoyu + XXL chashu</div>
                <div><strong>Particularity:</strong> Breakfast</div>
                <div><strong>Noodles:</strong> Flat and thick</div>
                <div><strong>Price:</strong> ¥700-1000</div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                <span className="text-3xl mr-4">🌊</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Yokohama Iekei</h3>
                  <p className="text-gray-600">横浜家系 - Kanagawa</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Created in 1974 by Yoshimura Minoru. Tonkotsu-shoyu fusion with chicken oil (chi-yu). 
                Customization: noodle firmness, broth intensity, oil amount.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div><strong>Specialty:</strong> Tonkotsu-shoyu</div>
                <div><strong>Particularity:</strong> Customization</div>
                <div><strong>Toppings:</strong> 3 nori sheets</div>
                <div><strong>Price:</strong> ¥800-1100</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Ramen Trends */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Modern Ramen Trends
            <span className="block text-lg text-gray-600 mt-2">現代のラーメントレンド</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-4">🌶️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Tantanmen</h3>
              <p className="text-gray-600 text-sm mb-3">
                Japanese version of Chinese dandan. Creamy sesame and miso broth, less spicy than the original.
              </p>
              <span className="text-xs text-orange-600 font-medium">Growing trend</span>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-4">🍅</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Tomato Ramen</h3>
              <p className="text-gray-600 text-sm mb-3">
                Modern innovation combining traditional broth and tomatoes. Popular East-West fusion.
              </p>
              <span className="text-xs text-green-600 font-medium">Recent innovation</span>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-4">🥦</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Vegan Ramen</h3>
              <p className="text-gray-600 text-sm mb-3">
                Vegetable-based broths, miso and seaweed. Responds to growing demand for plant options.
              </p>
              <span className="text-xs text-blue-600 font-medium">Emerging market</span>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-4">🔥</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Mazesoba</h3>
              <p className="text-gray-600 text-sm mb-3">
                "Dry ramen" without broth, mixed with thick sauce. Very popular modern alternative.
              </p>
              <span className="text-xs text-purple-600 font-medium">Established style</span>
            </div>
          </div>
        </div>
      </section>

      {/* Useful Phrases Section */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Useful Phrases for Ordering
            <span className="block text-lg text-gray-600 mt-2">便利なフレーズ</span>
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-green-800">
                Basic Orders
                <span className="block text-sm font-normal text-gray-600">基本注文</span>
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-green-400 pl-4">
                  <p className="font-medium text-gray-900 mb-1">Tonkotsu ramen please</p>
                  <p className="text-lg text-gray-800 mb-1">豚骨ラーメンをお願いします</p>
                  <p className="text-sm text-gray-600 italic">Tonkotsu rāmen o onegaishimasu</p>
                </div>
                <div className="border-l-4 border-green-400 pl-4">
                  <p className="font-medium text-gray-900 mb-1">With marinated egg</p>
                  <p className="text-lg text-gray-800 mb-1">味玉付きで</p>
                  <p className="text-sm text-gray-600 italic">Ajitama tsuki de</p>
                </div>
                <div className="border-l-4 border-green-400 pl-4">
                  <p className="font-medium text-gray-900 mb-1">Extra noodles</p>
                  <p className="text-lg text-gray-800 mb-1">替え玉お願いします</p>
                  <p className="text-sm text-gray-600 italic">Kaedama onegaishimasu</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-blue-800">
                Customization
                <span className="block text-sm font-normal text-gray-600">カスタマイズ</span>
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-blue-400 pl-4">
                  <p className="font-medium text-gray-900 mb-1">Firm noodles</p>
                  <p className="text-lg text-gray-800 mb-1">麺硬めで</p>
                  <p className="text-sm text-gray-600 italic">Men katame de</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-4">
                  <p className="font-medium text-gray-900 mb-1">Light broth</p>
                  <p className="text-lg text-gray-800 mb-1">あっさりで</p>
                  <p className="text-sm text-gray-600 italic">Assari de</p>
                </div>
                <div className="border-l-4 border-blue-400 pl-4">
                  <p className="font-medium text-gray-900 mb-1">Less oil</p>
                  <p className="text-lg text-gray-800 mb-1">油少なめで</p>
                  <p className="text-sm text-gray-600 italic">Abura sukuname de</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold mb-6 text-orange-800">
                Useful Situations
                <span className="block text-sm font-normal text-gray-600">便利な場面</span>
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-400 pl-4">
                  <p className="font-medium text-gray-900 mb-1">It's delicious!</p>
                  <p className="text-lg text-gray-800 mb-1">美味しいです！</p>
                  <p className="text-sm text-gray-600 italic">Oishii desu!</p>
                </div>
                <div className="border-l-4 border-orange-400 pl-4">
                  <p className="font-medium text-gray-900 mb-1">The bill please</p>
                  <p className="text-lg text-gray-800 mb-1">お会計お願いします</p>
                  <p className="text-sm text-gray-600 italic">Okaikei onegaishimasu</p>
                </div>
                <div className="border-l-4 border-orange-400 pl-4">
                  <p className="font-medium text-gray-900 mb-1">Thank you for the meal</p>
                  <p className="text-lg text-gray-800 mb-1">ごちそうさまでした</p>
                  <p className="text-sm text-gray-600 italic">Gochisōsama deshita</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Noodle Firmness Levels
              <span className="block text-sm font-normal text-gray-600">麺の硬さレベル</span>
            </h3>
            <div className="grid md:grid-cols-5 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <p className="font-bold text-gray-900">粉落とし</p>
                <p className="text-sm text-gray-600">Konootoshi</p>
                <p className="text-xs text-gray-500">Ultra firm</p>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <p className="font-bold text-gray-900">針金</p>
                <p className="text-sm text-gray-600">Harigane</p>
                <p className="text-xs text-gray-500">Very firm</p>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <p className="font-bold text-gray-900">バリカタ</p>
                <p className="text-sm text-gray-600">Barikata</p>
                <p className="text-xs text-gray-500">Firm</p>
              </div>
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <p className="font-bold text-gray-900">普通</p>
                <p className="text-sm text-gray-600">Futsū</p>
                <p className="text-xs text-gray-500">Normal</p>
              </div>
              <div className="text-center p-4 bg-red-50 rounded-lg">
                <p className="font-bold text-gray-900">やわ</p>
                <p className="text-sm text-gray-600">Yawa</p>
                <p className="text-xs text-gray-500">Soft</p>
              </div>            </div>
          </div>
        </div>      </section>
      </div>
    </>
  );
}
