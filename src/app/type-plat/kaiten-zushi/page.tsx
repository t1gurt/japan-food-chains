import Link from "next/link";
import { Metadata } from 'next';
import CategoryViewTracker from '../../../components/CategoryViewTracker';

export const metadata: Metadata = {
  title: "Kaiten-zushi: Guide to Conveyor Belt Sushi Restaurants | Japanese Chains",
  description: "Complete guide to kaiten-zushi. Discover the best chains (Sushiro, Kura), how to order and rules to know.",
  keywords: "kaiten-zushi, conveyor belt sushi, Sushiro, Kura Sushi, Hama Sushi, affordable sushi",
  openGraph: {
    title: "Kaiten-zushi: Guide to Conveyor Belt Sushi Restaurants | Japanese Chains",
    description: "Complete guide to kaiten-zushi. Discover the best chains (Sushiro, Kura), how to order and rules to know.",
    type: "article",
    url: "https://japonchaines.com/type-plat/kaiten-zushi",
    siteName: "Japanese Chains",
    locale: "en_US",
    images: [{
      url: "/images/kaiten-zushi-cover.jpg",
      width: 1200,
      height: 630,
      alt: "Kaiten-zushi - Conveyor belt sushi restaurants"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Kaiten-zushi: Guide to Conveyor Belt Sushi Restaurants | Japanese Chains",
    description: "Complete guide to kaiten-zushi. Discover the best chains (Sushiro, Kura), how to order and rules to know.",
    images: ["/images/kaiten-zushi-cover.jpg"]
  },
  alternates: {
    canonical: "https://japonchaines.com/type-plat/kaiten-zushi"
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

export default function KaitenZushiPage() {
  const sushiChains = [
    {
      name: "Sushiro",
      japanese: "スシロー",
      description: "The Japanese market leader with over 600 restaurants. Known for consistent quality and affordable prices.",
      specialties: ["Traditional sushi", "Creative sushi", "Japanese desserts"],
      priceRange: "¥100-300 per plate",
      orderingMethod: "Conveyor belt + tablet ordering",
      vegetarianOptions: "Limited options (inari, cucumber)",
      uniqueFeatures: ["Reservation system", "Seasonal menu", "Varied desserts"],
      href: "/chaines/sushiro"
    },
    {
      name: "Kura Sushi",
      japanese: "くら寿司",
      description: "Pioneer of the 'no additives' concept with a unique reward capsule system for empty plates.",
      specialties: ["Additive-free sushi", "Bikkura-Pon system", "Varied menu"],
      priceRange: "¥100-500 per plate",
      orderingMethod: "Conveyor belt + touch screen ordering",
      vegetarianOptions: "Some vegetarian options",
      uniqueFeatures: ["Bikkura-Pon game", "No additives", "Organic products"],
      href: "/chaines/kura-sushi"
    },
    {
      name: "Hama Sushi",
      japanese: "はま寿司",
      description: "Technological revolution of kaiten-zushi! Pepper robots, high-speed express line and 5 regional soy sauces for a futuristic experience at unbeatable prices.",
      specialties: ["Revolutionary MMD system", "5 artisanal soy sauces", "Multilingual Pepper robot", "Express direct line", "Hamakko menu with Gachapon"],
      priceRange: "¥110 for 90% of menu",
      orderingMethod: "Reception robot + multilingual touch tablet + express delivery",
      vegetarianOptions: "Inari, kappa-maki, tamago, fusion options",
      uniqueFeatures: ["Lowest market prices", "Technological experience", "Soy sauce tasting", "Robot reception", "Stock prediction AI"],
      href: "/chaines/hama-sushi"
    }
  ];

  const plateColors = [
    {
      color: "Yellow",
      japanese: "黄色",
      price: "¥100-120",
      description: "Entry-level sushi, perfect for discovery"
    },
    {
      color: "Red",
      japanese: "赤",
      price: "¥150-180",
      description: "Popular sushi of standard quality"
    },
    {
      color: "Black",
      japanese: "黒",
      price: "¥200-250",
      description: "Premium sushi with quality ingredients"
    },
    {
      color: "Silver",
      japanese: "銀",
      price: "¥300-400",
      description: "High-end sushi and seasonal specialties"
    },
    {
      color: "Gold",
      japanese: "金",
      price: "¥500+",
      description: "Exceptional sushi with rare ingredients"
    }
  ];

  const popularSushi = [
    {
      name: "Maguro",
      japanese: "まぐろ",
      english: "Bluefin Tuna",
      description: "The most popular sushi in Japan. Tender and savory red flesh.",
      price: "¥100-200",
      beginner: true
    },
    {
      name: "Salmon",
      japanese: "サーモン",
      english: "Salmon",
      description: "Very popular with beginners. Mild taste and melting texture.",
      price: "¥100-150",
      beginner: true
    },
    {
      name: "Ebi",
      japanese: "えび",
      english: "Shrimp",
      description: "Cooked shrimp, sweet and slightly sugary. Ideal for children.",
      price: "¥100-150",
      beginner: true
    },
    {
      name: "Tamago",
      japanese: "たまご",
      english: "Sweet Omelet",
      description: "Sweet Japanese omelet. Perfect option for vegetarians.",
      price: "¥100-120",
      beginner: true
    },
    {
      name: "Ika",
      japanese: "いか",
      english: "Squid",
      description: "Unique texture and delicate taste. Popular in Japan.",
      price: "¥120-180",
      beginner: false
    },
    {
      name: "Uni",
      japanese: "うに",
      english: "Sea Urchin",
      description: "Japanese delicacy with intense oceanic taste. For connoisseurs.",
      price: "¥300-500",
      beginner: false
    }
  ];

  return (
    <>
      <CategoryViewTracker categoryName="kaiten-zushi" />
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="text-sm">
              <Link href="/" className="text-gray-500 hover:text-red-600">Home</Link>
              <span className="text-gray-400 mx-2">/</span>
              <Link href="/type-plat" className="text-gray-500 hover:text-red-600">Dish Type</Link>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-gray-900 font-medium">Kaiten-zushi</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-blue-100 to-cyan-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <span className="text-5xl mr-4">🍣</span>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                      Kaiten-zushi
                    </h1>
                    <p className="text-2xl text-gray-600 japanese-text">回転寿司</p>
                  </div>
                </div>              
                <p className="text-xl text-gray-700 mb-6">
                  Japan's most accessible sushi experience. These conveyor belt sushi restaurants 
                  offer fresh sushi at affordable prices, making Japanese cuisine accessible 
                  to everyone. The perfect type of sushi restaurant to discover Japanese culinary culture.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Price: ¥100-500 per plate
                  </span>
                  <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium">
                    Family-friendly
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Accessible
                  </span>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">The Kaiten-zushi Innovation</h3>
                <p className="text-gray-600 mb-4">
                  Invented in 1958 by Yoshiaki Shiraishi, the kaiten-zushi (revolving sushi) concept 
                  revolutionized access to sushi by making it affordable and friendly.
                </p>
                <p className="text-gray-600">
                  Today, these restaurants combine tradition and technology with tablet 
                  ordering systems, while preserving the charm of the original conveyor belt.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Plate Color System */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Plate Color Pricing System
            </h2>
            <div className="grid md:grid-cols-5 gap-6">
              {plateColors.map((plate, index) => (
                <div key={index} className="text-center">
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-full border-4 shadow-lg ${
                    plate.color === 'Yellow' ? 'bg-yellow-400 border-yellow-500' :
                    plate.color === 'Red' ? 'bg-red-400 border-red-500' :
                    plate.color === 'Black' ? 'bg-gray-800 border-gray-900' :
                    plate.color === 'Silver' ? 'bg-gray-300 border-gray-400' :
                    'bg-yellow-300 border-yellow-400'
                  }`}></div>
                  <h3 className="font-bold text-gray-900 mb-1">{plate.color}</h3>
                  <p className="text-sm text-gray-600 japanese-text mb-2">{plate.japanese}</p>
                  <p className="font-semibold text-red-600 mb-2">{plate.price}</p>
                  <p className="text-xs text-gray-500">{plate.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 bg-blue-50 p-6 rounded-xl">
              <h4 className="font-bold text-blue-900 mb-2">💡 Practical tip</h4>
              <p className="text-blue-700 text-sm">
                Colors may vary between chains, but the principle remains the same: 
                the more "precious" the color, the higher the price. Always check the 
                price chart displayed in the restaurant.
              </p>
            </div>
          </div>
        </section>

        {/* Popular Sushi Guide */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Popular Sushi Guide
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {popularSushi.map((sushi, index) => (
                <div key={index} className={`bg-white rounded-xl p-6 shadow-sm border ${
                  sushi.beginner ? 'border-green-200' : 'border-gray-200'
                }`}>
                  {sushi.beginner && (
                    <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full mb-3 inline-block">
                      Beginner-friendly
                    </span>
                  )}
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{sushi.english}</h3>
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span className="japanese-text">{sushi.japanese}</span>
                    <span className="italic">{sushi.name}</span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{sushi.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-red-600">{sushi.price}</span>
                    {sushi.beginner && (
                      <span className="text-green-600 text-xs">👍 Recommended</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Chains Comparison */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Major Kaiten-zushi Chains
            </h2>
            <div className="grid lg:grid-cols-3 gap-8">
              {sushiChains.map((chain, index) => (
                <Link 
                  key={index}
                  href={chain.href}
                  className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-200 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-blue-600 text-xl">🍣</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                          {chain.name}
                        </h3>
                        <p className="text-gray-600 japanese-text">{chain.japanese}</p>
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
                          <span className="font-semibold text-gray-900">Ordering: </span>
                          <span className="text-gray-600">{chain.orderingMethod}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900">Vegetarian: </span>
                          <span className="text-gray-600">{chain.vegetarianOptions}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-blue-600 font-medium text-sm group-hover:text-blue-700">
                        View details →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* How to Eat Guide */}
        <section className="py-16 bg-blue-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Practical Guide to Kaiten-zushi
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-4">🚪</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">1. Entry</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Wait to be seated by staff</li>
                  <li>• Take a seat at the counter or table</li>
                  <li>• Pick up your ordering tablet</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-4">🍽️</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">2. Ordering</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Take plates that pass by</li>
                  <li>• Or order via tablet</li>
                  <li>• Stack your empty plates</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-4">🥢</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">3. Tasting</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Eat in one bite if possible</li>
                  <li>• Dip lightly in soy sauce</li>
                  <li>• Ginger cleanses the palate</li>
                </ul>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-sm">
                <div className="text-3xl mb-4">💰</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">4. Payment</h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Staff counts your plates</li>
                  <li>• Pay according to colors</li>
                  <li>• IC cards accepted</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 bg-white p-6 rounded-xl">
              <h4 className="text-lg font-bold text-gray-900 mb-4">Useful Phrases</h4>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p><span className="font-semibold">Sumimasen</span> <span className="japanese-text">すみません</span></p>
                  <p className="text-gray-600 mb-2">Excuse me (to call staff)</p>
                  
                  <p><span className="font-semibold">Kore wa nan desu ka?</span> <span className="japanese-text">これは何ですか？</span></p>
                  <p className="text-gray-600 mb-2">What is this?</p>
                </div>
                <div>
                  <p><span className="font-semibold">Okaikei onegaishimasu</span> <span className="japanese-text">お会計お願いします</span></p>
                  <p className="text-gray-600 mb-2">The bill, please</p>
                  
                  <p><span className="font-semibold">Gochisousama</span> <span className="japanese-text">ごちそうさま</span></p>
                  <p className="text-gray-600">Thank you for the meal (when leaving)</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Background Articles */}
        <section className="bg-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">In-Depth Articles on Kaiten-zushi</h2>
              <p className="text-lg text-gray-600">Deepen your knowledge with our detailed analyses</p>
            </div>
            
            <div className="bg-gradient-to-r from-cyan-50 to-blue-50 rounded-xl p-8 border border-cyan-200">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-cyan-500 rounded-lg flex items-center justify-center text-2xl">
                    🤖
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Kaiten-zushi: The Technological Revolution of Japanese Dining
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Discover how Japanese conveyor belt sushi is revolutionizing global gastronomy through Pepper robots, 
                    predictive AI and express delivery systems. A dive into the future of dining.
                  </p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                    <span className="flex items-center">
                      <span className="w-4 h-4 mr-1">⏱️</span>
                      16 min read
                    </span>
                    <span className="flex items-center">
                      <span className="w-4 h-4 mr-1">🎯</span>
                      Innovation & Technology
                    </span>
                    <span className="flex items-center">
                      <span className="w-4 h-4 mr-1">📊</span>
                      Intermediate Level
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-cyan-100 text-cyan-800 rounded-md text-xs">Robotics</span>
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-md text-xs">Artificial Intelligence</span>
                    <span className="px-2 py-1 bg-purple-100 text-purple-800 rounded-md text-xs">Automation</span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-md text-xs">Hama Sushi</span>
                  </div>
                  <Link 
                    href="/guides/articles/kaiten-zushi-technology-revolution"
                    className="inline-flex items-center px-4 py-2 bg-cyan-600 text-white rounded-lg hover:bg-cyan-700 transition-colors"
                  >
                    Read full article
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <Link 
                href="/guides/articles"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                View all in-depth articles
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
