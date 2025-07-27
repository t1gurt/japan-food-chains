import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Family Restaurants (Famiresu) in Japan: Complete Guide | Japanese Chains",
  description: "The guide to Japanese \"famiresu\" restaurants. Varied menus for all tastes (Gusto, Saizeriya) and a relaxed atmosphere ideal for groups.",
  keywords: "famiresu, family restaurants japan, Gusto, Saizeriya, family restaurant",
  openGraph: {
    title: "Family Restaurants (Famiresu) in Japan: Complete Guide | Japanese Chains",
    description: "The guide to Japanese \"famiresu\" restaurants. Varied menus for all tastes (Gusto, Saizeriya) and a relaxed atmosphere ideal for groups.",
    type: "article",
    url: "https://japonchaines.com/type-plat/family-restaurants",
    siteName: "Japanese Chains",
    locale: "en_US",
    images: [{
      url: "/images/family-restaurants-cover.jpg",
      width: 1200,
      height: 630,
      alt: "Japanese family restaurants - Famiresu"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Family Restaurants (Famiresu) in Japan: Complete Guide | Japanese Chains",
    description: "The guide to Japanese \"famiresu\" restaurants. Varied menus for all tastes (Gusto, Saizeriya) and a relaxed atmosphere ideal for groups.",
    images: ["/images/family-restaurants-cover.jpg"]
  },
  alternates: {
    canonical: "https://japonchaines.com/type-plat/family-restaurants"
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

export default function FamilyRestaurantsPage() {
  const familyChains = [
    {
      name: "Saizeriya",
      japanese: "サイゼリヤ",
      englishName: "Saizeriya",
      description: "Affordable Italian chain very popular in Japan, famous for its mini prices and ¥300 pizza.",
      specialties: ["Margherita Pizza", "Pasta Arrabbiata", "House Salad"],
      priceRange: "¥200-800",
      style: "Casual Italian",
      orderingMethod: "Paper menu + table service",
      vegetarianOptions: "Good Italian options",
      uniqueFeatures: ["Exceptional prices", "¥300 pizza", "Multilingual menu"],
      cuisine: "Italian",
      href: "/chaines/saizeriya"
    },
    {
      name: "Gusto",
      japanese: "ガスト",
      englishName: "Gusto",
      description: "Large family restaurant chain offering Japanese and Western cuisine in a relaxed atmosphere.",
      specialties: ["Hamburg Steak", "Pasta", "Teishoku Sets"],
      priceRange: "¥400-1200",
      style: "Classic family restaurant",
      orderingMethod: "Touch tablet + table service",
      vegetarianOptions: "Various options available",
      uniqueFeatures: ["Tablet menu", "All-you-can-drink", "Family atmosphere"],
      cuisine: "Varied (Japanese + Western)",
      href: "/chaines/gusto"
    },
    {
      name: "Jonathan's",
      japanese: "ジョナサン",
      englishName: "Jonathan's",
      description: "Premium family restaurant with refined decor and quality Japanese-Western fusion menu.",
      specialties: ["Gratin", "Premium Pasta", "Elaborate Desserts"],
      priceRange: "¥600-1800",
      style: "Premium family restaurant",
      orderingMethod: "Traditional table service",
      vegetarianOptions: "Decent selection",
      uniqueFeatures: ["Refined decor", "Superior quality", "Remarkable desserts"],
      cuisine: "Japanese-Western Fusion",
      href: "/chaines/jonathans"
    },
    {
      name: "Jolly Pasta",
      japanese: "ジョリーパスタ",
      englishName: "Jolly Pasta",
      description: "Italian pasta specialist with a family approach and recipes adapted to Japanese taste.",
      specialties: ["Spaghetti Carbonara", "Pizza Margherita", "Seafood Gratin"],
      priceRange: "¥800-1500",
      style: "Family Italian",
      orderingMethod: "Paper menu + table service",
      vegetarianOptions: "Good pasta options",
      uniqueFeatures: ["Artisanal pasta", "Japanese adaptation", "Warm atmosphere"],
      cuisine: "Adapted Italian",
      href: "/chaines/jolly-pasta"
    }
  ];

  const menuCategories = [
    {
      name: "Japanese Cuisine",
      japanese: "和食",
      description: "Traditional dishes adapted to family taste",
      items: ["Teishoku Sets", "Donburi", "Curry Rice", "Miso Soup"],
      price: "¥400-1200",
      popularity: "⭐⭐⭐⭐⭐",
      beginner: true
    },
    {
      name: "Western Cuisine",
      japanese: "洋食",
      description: "European and American dishes adapted to Japan",
      items: ["Hamburg Steak", "Pasta", "Pizza", "Gratin"],
      price: "¥500-1500",
      popularity: "⭐⭐⭐⭐⭐",
      beginner: true
    },
    {
      name: "Desserts & Drinks",
      japanese: "デザート・ドリンク",
      description: "Wide selection of desserts and beverages",
      items: ["Parfait", "Cake Sets", "Soft Cream", "Drink Bar"],
      price: "¥200-800",
      popularity: "⭐⭐⭐⭐",
      beginner: true
    },
    {
      name: "Set Menus",
      japanese: "セットメニュー",
      description: "Complete menus with main dish + accompaniments",
      items: ["Main + Salad + Soup", "Pasta Sets", "Gratin Sets"],
      price: "¥800-1600",
      popularity: "⭐⭐⭐⭐",
      beginner: true
    }
  ];

  const popularDishes = [
    {
      name: "Hamburg Steak (ハンバーグステーキ)",
      japanese: "ハンバーグステーキ",
      description: "Japanese hamburger steak with demi-glace sauce",
      characteristics: "Flavorful, hearty, family-friendly",
      price: "¥600-1200",
      availability: "All chains",
      beginner: true
    },
    {
      name: "Pasta (パスタ)",
      japanese: "パスタ",
      description: "Spaghetti and other pasta, Italian-Japanese style",
      characteristics: "Varied, generous, popular",
      price: "¥400-1000",
      availability: "All chains",
      beginner: true
    },
    {
      name: "Pizza (ピザ)",
      japanese: "ピザ",
      description: "Italian-style pizza at very affordable prices",
      characteristics: "Crispy, economical, for sharing",
      price: "¥300-800",
      availability: "Mainly Saizeriya",
      beginner: true
    },
    {
      name: "Teishoku Set (定食セット)",
      japanese: "定食セット",
      description: "Traditional Japanese set with rice, miso, vegetables",
      characteristics: "Balanced, traditional, healthy",
      price: "¥700-1400",
      availability: "Gusto, Jonathan's",
      beginner: true
    },
    {
      name: "Gratin (グラタン)",
      japanese: "グラタン",
      description: "French gratin adapted to Japanese taste",
      characteristics: "Creamy, comforting, gourmet",
      price: "¥800-1500",
      availability: "Jonathan's, Gusto",
      beginner: false
    },
    {
      name: "Drink Bar (ドリンクバー)",
      japanese: "ドリンクバー",
      description: "All-you-can-drink beverages (soft drinks, coffee, tea)",
      characteristics: "Unlimited, varied, economical",
      price: "¥200-400",
      availability: "All chains",
      beginner: true
    }
  ];

  const advantages = [
    {
      title: "Multilingual Menu",
      icon: "🌍",
      description: "Menus often available in English and sometimes French",
      benefit: "Ideal for beginners"
    },
    {
      title: "Affordable Prices",
      icon: "💰",
      description: "Excellent value for money for the whole family",
      benefit: "Controlled budget"
    },
    {
      title: "Variety",
      icon: "🍽️",
      description: "Japanese AND Western cuisine in the same restaurant",
      benefit: "Satisfies all tastes"
    },
    {
      title: "Relaxed Atmosphere",
      icon: "😊",
      description: "Family-friendly and casual atmosphere",
      benefit: "Perfect for groups"
    },
    {
      title: "No Rush Service",
      icon: "⏰",
      description: "No pressure to free up the table quickly",
      benefit: "Take your time"
    },
    {
      title: "Unlimited Drinks",
      icon: "🥤",
      description: "Drink bar with all-you-can-drink beverages",
      benefit: "Guaranteed hydration"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-red-600">Home</Link>
            <span className="text-gray-400 mx-2">/</span>
            <Link href="/type-plat" className="text-gray-500 hover:text-red-600">Dish Type</Link>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-gray-900 font-medium">Family Restaurants</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-100 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-5xl mr-4">🍽️</span>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    Family Restaurants
                  </h1>
                  <p className="text-2xl text-gray-600 japanese-text">ファミリーレストラン</p>
                </div>
              </div>
              <p className="text-xl text-gray-700 mb-6">
                The perfect solution for groups: varied menus combining Japanese 
                and Western cuisine, gentle prices and a relaxed atmosphere where 
                everyone finds their happiness.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Price: ¥200-1800
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Varied cuisine
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  Groups welcome
                </span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The Family Restaurant Spirit</h3>
              <p className="text-gray-600 mb-4">
                Born in the 1970s, family restaurants embody the Japanese adaptation 
                of American diner culture. They offer a space where families and 
                friends can share a moment without time constraints.
              </p>
              <p className="text-gray-600">
                With their illustrated menus, affordable prices and attentive service, 
                they represent modern Japanese hospitality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose a Family Restaurant?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advantages.map((advantage, index) => (
              <div key={index} className="bg-green-50 rounded-xl p-6 border border-green-200">
                <div className="text-3xl mb-4">{advantage.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{advantage.title}</h3>
                <p className="text-gray-600 text-sm mb-3">{advantage.description}</p>
                <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                  {advantage.benefit}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Menu Categories
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {menuCategories.map((category, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{category.name}</h3>
                <p className="text-gray-600 japanese-text text-sm mb-3">{category.japanese}</p>
                <p className="text-gray-600 text-sm mb-4">{category.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-gray-900 mb-2">Examples:</h4>
                  <div className="space-y-1">
                    {category.items.map((item, itemIndex) => (
                      <span key={itemIndex} className="block text-xs text-gray-600">• {item}</span>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Price:</span>
                    <span className="text-red-600 font-medium">{category.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Popularity:</span>
                    <span>{category.popularity}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Dishes */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Must-Try Dishes
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularDishes.map((dish, index) => (
              <div key={index} className={`bg-white rounded-xl p-6 border ${
                dish.beginner ? 'border-green-200 bg-green-50' : 'border-gray-200'
              }`}>
                {dish.beginner && (
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-3 inline-block">
                    Beginner recommended
                  </span>
                )}
                <h3 className="text-lg font-bold text-gray-900 mb-1">{dish.name}</h3>
                <p className="text-gray-600 japanese-text text-sm mb-3">{dish.japanese}</p>
                <p className="text-gray-600 text-sm mb-4">{dish.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Character:</span>
                    <span className="text-gray-600">{dish.characteristics}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Price:</span>
                    <span className="text-red-600 font-medium">{dish.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Availability:</span>
                    <span className="text-gray-600">{dish.availability}</span>
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
            Major Family Restaurant Chains
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {familyChains.map((chain, index) => (
              <Link 
                key={index}
                href={chain.href}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-green-200 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-green-600 text-xl">🍽️</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
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
                      <h4 className="text-sm font-semibold text-gray-900">Unique features:</h4>
                      <p className="text-sm text-gray-600">{chain.uniqueFeatures.join(", ")}</p>
                    </div>
                    
                    <div className="grid grid-cols-1 gap-2 text-sm">
                      <div>
                        <span className="font-semibold text-gray-900">Price: </span>
                        <span className="text-gray-600">{chain.priceRange}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Cuisine: </span>
                        <span className="text-gray-600">{chain.cuisine}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Vegetarian: </span>
                        <span className="text-gray-600">{chain.vegetarianOptions}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-green-600 font-medium text-sm group-hover:text-green-700">
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
            How to Enjoy a Family Restaurant
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <div className="text-3xl mb-4">🚪</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">1. Entry</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Wait to be seated</li>
                <li>• Specify number of people</li>
                <li>• Tables or booths available</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">2. Ordering</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Paper menu or tablet</li>
                <li>• Photos of dishes available</li>
                <li>• Traditional table service</li>
              </ul>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
              <div className="text-3xl mb-4">🥤</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">3. Drink Bar</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• +¥200-400 for unlimited drinks</li>
                <li>• Coffee, tea, soft drinks</li>
                <li>• Self-service</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
              <div className="text-3xl mb-4">⏰</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">4. Time</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Take your time</li>
                <li>• Perfect for discussions</li>
                <li>• Relaxed atmosphere</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-xl border border-gray-200">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Useful Phrases</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p><span className="font-semibold">Yonin desu</span> <span className="japanese-text">4人です</span></p>
                <p className="text-gray-600 mb-2">We are 4 people</p>
                
                <p><span className="font-semibold">Dorinku bā onegaishimasu</span> <span className="japanese-text">ドリンクバーお願いします</span></p>
                <p className="text-gray-600 mb-2">The drink bar, please</p>
              </div>
              <div>
                <p><span className="font-semibold">Menyu wa arimasu ka?</span> <span className="japanese-text">メニューはありますか？</span></p>
                <p className="text-gray-600 mb-2">Do you have a menu?</p>
                
                <p><span className="font-semibold">Osusume wa nan desu ka?</span> <span className="japanese-text">おすすめは何ですか？</span></p>
                <p className="text-gray-600">What do you recommend?</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Tips for Family Restaurants
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Save Money</h3>
              <p className="text-gray-600 text-sm">
                Set menus offer the best value for money. The drink bar 
                is profitable if you stay more than an hour.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">👥</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Groups</h3>
              <p className="text-gray-600 text-sm">
                Perfect for groups with different tastes. Everyone can 
                order according to their preferences in the same price category.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🕐</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Hours</h3>
              <p className="text-gray-600 text-sm">
                Avoid peak hours (12pm-2pm, 6pm-8pm) for faster service 
                and a calmer atmosphere.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🍰</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Desserts</h3>
              <p className="text-gray-600 text-sm">
                Family restaurants excel at desserts. Parfaits, cakes and 
                soft cream are often spectacular and affordable.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🌐</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Language</h3>
              <p className="text-gray-600 text-sm">
                Menus often illustrated with photos. Some chains offer 
                English menus upon request.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🎂</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Special Occasions</h3>
              <p className="text-gray-600 text-sm">
                Many offer birthday services with special desserts. 
                Ideal for family celebrations.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
