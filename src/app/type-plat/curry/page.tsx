import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Japanese Curry: Best Chain Restaurant Guide (CoCo Ichibanya) | Japan Food Chains",
  description: "Dive into the world of Japanese curry. Customize your dish at CoCo Ichibanya or try the black curry from Go!Go!Curry.",
  keywords: "Japanese curry, CoCo Ichibanya, Go Go Curry, curry katsu, customizable Japanese curry",
  openGraph: {
    title: "Japanese Curry: Best Chain Restaurant Guide (CoCo Ichibanya) | Japan Food Chains",
    description: "Dive into the world of Japanese curry. Customize your dish at CoCo Ichibanya or try the black curry from Go!Go!Curry.",
    type: "article",
    url: "https://japanfoodchains.com/type-plat/curry",
    siteName: "Japan Food Chains",
    locale: "en_US",
    images: [{
      url: "/images/curry-japonais-cover.jpg",
      width: 1200,
      height: 630,
      alt: "Japanese curry - CoCo Ichibanya and other chains"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Japanese Curry: Best Chain Restaurant Guide (CoCo Ichibanya) | Japan Food Chains",
    description: "Dive into the world of Japanese curry. Customize your dish at CoCo Ichibanya or try the black curry from Go!Go!Curry.",
    images: ["/images/curry-japonais-cover.jpg"]
  },
  alternates: {
    canonical: "https://japanfoodchains.com/type-plat/curry"
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

export default function CurryPage() {
  const curryChains = [
    {
      name: "CoCo壱番屋",
      japanese: "ココイチ",
      englishName: "CoCo Ichibanya",
      description: "The undisputed king of Japanese curry with over 1,400 restaurants worldwide. Known for its infinite customization options.",
      specialties: ["Pork katsu curry", "Vegetarian curry", "Spicy level 10 curry"],
      priceRange: "¥500-1200",
      spiceLevel: "Level 0-10 (customizable)",
      orderingMethod: "Counter ordering",
      vegetarianOptions: "Excellent vegetarian and vegan options",
      uniqueFeatures: ["21 spice levels", "Over 40 toppings", "Certified vegan options"],
      href: "/chains/coco-ichibanya"
    },
    {
      name: "Go!Go!Curry",
      japanese: "ゴーゴーカレー",
      englishName: "Go Go Curry",
      description: "Chain from Kanazawa, famous for its thick black curry and unique retro atmosphere.",
      specialties: ["Kanazawa black curry", "Major Curry", "Champion Curry"],
      priceRange: "¥600-1000",
      spiceLevel: "Spicy by default",
      orderingMethod: "Counter ordering + tickets",
      vegetarianOptions: "Limited",
      uniqueFeatures: ["Signature black curry", "Baseball theme", "XXL portions available"],
      href: "/chains/go-go-curry"
    },
    {
      name: "Sukiya Curry",
      japanese: "すき家カレー",
      englishName: "Sukiya Curry",
      description: "Curry extension of the famous Sukiya chain, offering curry and gyūdon in the same restaurant.",
      specialties: ["Curry Gyūdon", "Cheese Curry", "Katsu Curry"],
      priceRange: "¥400-800",
      spiceLevel: "Mild to medium spicy",
      orderingMethod: "Counter ordering",
      vegetarianOptions: "Some options",
      uniqueFeatures: ["Curry + gyūdon combination", "Affordable prices", "24/7 service"],
      href: "/chains/sukiya"
    }
  ];

  const curryTypes = [
    {
      name: "Katsu Curry",
      japanese: "カツカレー",
      description: "Curry with breaded pork cutlet, the most popular in Japan",
      characteristics: "Crispy, hearty, flavorful",
      price: "¥700-1200",
      popularity: "⭐⭐⭐⭐⭐",
      beginner: true
    },
    {
      name: "Chicken Curry",
      japanese: "チキンカレー",
      description: "Curry with tender chicken pieces, classic option",
      characteristics: "Mild, family-friendly, accessible",
      price: "¥600-1000",
      popularity: "⭐⭐⭐⭐",
      beginner: true
    },
    {
      name: "Vegetable Curry",
      japanese: "野菜カレー",
      description: "Vegetable curry, perfect for vegetarians",
      characteristics: "Healthy, colorful, nutritious",
      price: "¥500-900",
      popularity: "⭐⭐⭐",
      beginner: true
    },
    {
      name: "Seafood Curry",
      japanese: "シーフードカレー",
      description: "Seafood curry, specialty of certain chains",
      characteristics: "Rich, oceanic, gourmet",
      price: "¥800-1400",
      popularity: "⭐⭐⭐",
      beginner: false
    },
    {
      name: "Beef Curry",
      japanese: "ビーフカレー",
      description: "Curry with braised beef, premium version",
      characteristics: "Tender, flavorful, premium",
      price: "¥900-1600",
      popularity: "⭐⭐⭐⭐",
      beginner: false
    }
  ];

  const spiceLevels = [
    { level: 0, name: "Very mild", japanese: "甘口", description: "For children and beginners" },
    { level: 1, name: "Mild", japanese: "やや甘口", description: "Slightly spiced" },
    { level: 2, name: "Normal", japanese: "普通", description: "Japanese standard" },
    { level: 3, name: "Medium spicy", japanese: "やや辛口", description: "Starts to tingle" },
    { level: 5, name: "Spicy", japanese: "辛口", description: "For enthusiasts" },
    { level: 10, name: "Very spicy", japanese: "激辛", description: "Extreme challenge!" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-red-600">Home</Link>
            <span className="text-gray-400 mx-2">/</span>
            <Link href="/type-plat" className="text-gray-500 hover:text-red-600">Dish Types</Link>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-gray-900 font-medium">Japanese Curry</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-100 to-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-5xl mr-4">🍛</span>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    Japanese Curry
                  </h1>
                  <p className="text-2xl text-gray-600 japanese-text">カレー</p>
                </div>
              </div>
              <p className="text-xl text-gray-700 mb-6">
                The Japanese version of Indian curry, milder and thicker, has become a 
                national comfort food. Infinitely customizable to your taste.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                  Price: ¥400-1600
                </span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                  Customizable
                </span>
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                  Comfort Food
                </span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Unique Japanese Curry</h3>
              <p className="text-gray-600 mb-4">
                Introduced in the Meiji era via the British Navy, Japanese curry has evolved 
                to become milder and thicker than the original Indian version, adapted to the Japanese palate.
              </p>
              <p className="text-gray-600">
                Served with white rice, it has become so popular that it's considered 
                one of Japan's three national dishes along with ramen and sushi.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curry Types */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Popular Curry Types
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {curryTypes.map((curry, index) => (
              <div key={index} className={`bg-gray-50 rounded-xl p-6 border ${
                curry.beginner ? 'border-green-200 bg-green-50' : 'border-gray-200'
              }`}>
                {curry.beginner && (
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-3 inline-block">
                    Recommended for beginners
                  </span>
                )}
                <h3 className="text-lg font-bold text-gray-900 mb-1">{curry.name}</h3>
                <p className="text-gray-600 japanese-text text-sm mb-3">{curry.japanese}</p>
                <p className="text-gray-600 text-sm mb-4">{curry.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Character:</span>
                    <span className="text-gray-600">{curry.characteristics}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Price:</span>
                    <span className="text-red-600 font-medium">{curry.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Popularity:</span>
                    <span>{curry.popularity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spice Level Guide */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Spice Level Guide
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {spiceLevels.map((spice, index) => (
              <div key={index} className={`bg-white rounded-lg p-4 border-l-4 ${
                spice.level === 0 ? 'border-green-400' :
                spice.level <= 2 ? 'border-yellow-400' :
                spice.level <= 5 ? 'border-orange-400' :
                'border-red-500'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-bold text-gray-900">Level {spice.level}</h4>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold ${
                    spice.level === 0 ? 'bg-green-400' :
                    spice.level <= 2 ? 'bg-yellow-400' :
                    spice.level <= 5 ? 'bg-orange-400' :
                    'bg-red-500'
                  }`}>
                    {spice.level}
                  </div>
                </div>
                <h5 className="font-semibold text-gray-800 mb-1">{spice.name}</h5>
                <p className="text-gray-600 japanese-text text-sm mb-2">{spice.japanese}</p>
                <p className="text-gray-500 text-xs">{spice.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 bg-white p-6 rounded-xl border border-yellow-200">
            <h4 className="font-bold text-yellow-800 mb-2">🌶️ Tip for beginners</h4>
            <p className="text-yellow-700 text-sm">
              Start with level 1-2. Level 0 is very mild (suitable for children). 
              Levels 5+ are for spice lovers! You can always add spice but 
              you can't remove it.
            </p>
          </div>
        </div>
      </section>

      {/* Chains Comparison */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Major Curry Chains
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {curryChains.map((chain, index) => (
              <Link 
                key={index}
                href={chain.href}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-yellow-200 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-yellow-600 text-xl">🍛</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-yellow-600 transition-colors">
                        {chain.name}
                      </h3>
                      <p className="text-gray-600 japanese-text">{chain.japanese}</p>
                      <p className="text-gray-500 text-xs">{chain.englishName}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 text-sm">{chain.description}</p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">Specialties:</h4>
                      <p className="text-sm text-gray-600">{chain.specialties.join(", ")}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">Unique Features:</h4>
                      <p className="text-sm text-gray-600">{chain.uniqueFeatures.join(", ")}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-2 text-sm">
                      <div>
                        <span className="font-semibold text-gray-900">Price: </span>
                        <span className="text-gray-600">{chain.priceRange}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Spice: </span>
                        <span className="text-gray-600">{chain.spiceLevel}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Vegetarian: </span>
                        <span className="text-gray-600">{chain.vegetarianOptions}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-yellow-600 font-medium text-sm group-hover:text-yellow-700">
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
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How to Order Japanese Curry
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🍛</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">1. Curry Type</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Choose your base (pork, chicken, vegetables...)</li>
                <li>• Katsu curry = most popular</li>
                <li>• Vegetarian available everywhere</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🌶️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">2. Spice Level</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• From 0 (very mild) to 10 (extreme)</li>
                <li>• Level 2 = standard for beginners</li>
                <li>• You can ask "Kara-sa wa?" (Spicy?)</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🥄</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">3. Portion</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Normal rice = free</li>
                <li>• Large (大盛) = +¥100-200</li>
                <li>• Extra curry = more sauce</li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">➕</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">4. Toppings</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Egg (卵) = +¥100</li>
                <li>• Cheese (チーズ) = +¥150</li>
                <li>• Extra vegetables</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-xl">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Useful Phrases</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p><span className="font-semibold">Katsu karē kudasai</span> <span className="japanese-text">カツカレーください</span></p>
                <p className="text-gray-600 mb-2">A katsu curry, please</p>
                
                <p><span className="font-semibold">Ni-ban onegaishimasu</span> <span className="japanese-text">2番お願いします</span></p>
                <p className="text-gray-600 mb-2">Spice level 2, please</p>
              </div>
              <div>
                <p><span className="font-semibold">Ōmori dekimasu ka?</span> <span className="japanese-text">大盛りできますか？</span></p>
                <p className="text-gray-600 mb-2">Can you make a large portion?</p>
                
                <p><span className="font-semibold">Yasai karē arimasu ka?</span> <span className="japanese-text">野菜カレーありますか？</span></p>
                <p className="text-gray-600">Do you have vegetarian curry?</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
