import { Metadata } from 'next';
import Link from 'next/link';
import ChainViewTracker from '@/components/ChainViewTracker';

export const metadata: Metadata = {
  title: "Ootoya 大戸屋 | Premium Teishoku | Japan Food Chains",
  description: "Premium teishoku restaurant. Fresh ingredients, visible kitchen, balanced meals.",
  keywords: 'Ootoya, 大戸屋, teishoku, Japanese restaurant, complete meal, traditional cuisine, fresh vegetables, saba teishoku',
  openGraph: {
    title: "Ootoya 大戸屋 | Premium Teishoku | Japan Food Chains",
    description: "Premium teishoku restaurant. Fresh ingredients, visible kitchen, balanced meals.",
    type: 'article',
    locale: "en_US",
    siteName: "Japan Food Chains - Japanese Restaurant Guide"
  },
  alternates: {
    canonical: '/chains/ootoya'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  }
};

export default function OotoyaPage() {
  const menuItems = [
    {
      category: "Fish Teishoku",
      items: [
        { name: "Saba Teishoku", japanese: "鯖定食", price: "¥980", description: "Grilled mackerel with rice, miso soup, and seasonal vegetables" },
        { name: "Salmon Teishoku", japanese: "鮭定食", price: "¥1080", description: "Grilled salmon with teriyaki sauce and traditional sides" },
        { name: "Hokke Teishoku", japanese: "ホッケ定食", price: "¥1180", description: "Grilled atka mackerel, Hokkaido specialty" },
        { name: "Buri Teriyaki", japanese: "ブリ照り焼き", price: "¥1280", description: "Glazed yellowtail teriyaki with sautéed vegetables" }
      ]
    },
    {
      category: "Meat Teishoku",
      items: [
        { name: "Chicken Nanban", japanese: "チキン南蛮", price: "¥1080", description: "Fried chicken with sweet and sour sauce, cabbage salad, rice" },
        { name: "Tori Karaage", japanese: "鶏唐揚げ", price: "¥980", description: "Crispy Japanese fried chicken with vegetables" },
        { name: "Buta Shogayaki", japanese: "豚生姜焼き", price: "¥1180", description: "Pork sautéed with ginger and crispy vegetables" },
        { name: "Gyoza Teishoku", japanese: "餃子定食", price: "¥880", description: "Homemade gyoza with rice and soup" }
      ]
    },
    {
      category: "Vegetarian Options",
      items: [
        { name: "Tofu Hamburger", japanese: "豆腐ハンバーグ", price: "¥980", description: "Homemade tofu hamburger with ponzu sauce" },
        { name: "Yasai Itame", japanese: "野菜炒め", price: "¥880", description: "Seasonal stir-fried vegetables, rich in vitamins" },
        { name: "Agedashi Tofu", japanese: "揚げ出し豆腐", price: "¥780", description: "Fried tofu in light dashi broth" },
        { name: "Vegetable Curry", japanese: "野菜カレー", price: "¥980", description: "Japanese vegetable curry, mild and nutritious" }
      ]
    }
  ];

  const ootoyaFeatures = [
    {
      title: "Fresh Ingredients",
      icon: "🥬",
      description: "Seasonal vegetables selected for their freshness and nutritional quality",
      details: "Ootoya prioritizes seasonal Japanese vegetables, prepared daily to preserve vitamins and flavors."
    },
    {
      title: "Visible Kitchen",
      icon: "👨‍🍳",
      description: "Open kitchen allowing you to see real-time food preparation",
      details: "Complete transparency in preparation, guaranteeing quality and freshness of teishoku."
    },
    {
      title: "Refined Presentation",
      icon: "🎨",
      description: "Aesthetic plating respecting traditional Japanese culinary art",
      details: "Each teishoku is carefully presented, reflecting Japanese aesthetic philosophy."
    },
    {
      title: "Vegetarian Options",
      icon: "🌱",
      description: "Wide vegetarian selection rare in traditional teishoku chains",
      details: "Ootoya offers many vegetarian alternatives without compromising authenticity."
    },
    {
      title: "Consistent Quality",
      icon: "⭐",
      description: "High standards maintained across all chain restaurants",
      details: "Rigorous staff training to guarantee a uniform experience."
    },
    {
      title: "Family Atmosphere",
      icon: "👨‍👩‍👧‍👦",
      description: "Warm atmosphere suitable for families and casual business meals",
      details: "Natural wood décor and soft lighting create a calming ambiance."
    }
  ];

  const ichijuuSansai = [
    {
      element: "一汁",
      name: "Ichijuu (One Soup)",
      description: "Traditional miso soup",
      content: "Foundation of Japanese meals, miso soup brings umami, probiotics, and comfort.",
      ingredients: ["Red or white miso", "Silken tofu", "Wakame", "Green onion"],
      significance: "Prepares the stomach and stimulates appetite"
    },
    {
      element: "三菜",
      name: "Sansai (Three Dishes)",
      description: "Three balanced side dishes",
      content: "Main dish (fish/meat), seasonal vegetables, and small pickled accompaniments.",
      ingredients: ["Grilled main dish", "Sautéed vegetables", "Tsukemono (pickles)"],
      significance: "Nutritional balance and variety of flavors"
    }
  ];

  const orderingGuide = [
    {
      step: 1,
      title: "Restaurant Entry",
      icon: "🚪",
      description: "Wait to be seated by staff",
      tips: ["Say 'Irasshaimase' in return", "Indicate number of people", "Follow to table"]
    },
    {
      step: 2,
      title: "Menu Consultation",
      icon: "📋",
      description: "Illustrated menu with detailed photos",
      tips: ["Photos of all teishoku", "Prices clearly indicated", "Vegetarian options marked"]
    },
    {
      step: 3,
      title: "Ordering",
      icon: "✍️",
      description: "Order from the server",
      tips: ["Point to photo if necessary", "Specify 'teishoku' for complete set", "Request modifications if needed"]
    },
    {
      step: 4,
      title: "Waiting",
      icon: "⏱️",
      description: "Fresh preparation, allow 10-15 minutes",
      tips: ["Green tea served free", "Watch the open kitchen", "Preparation time longer than fast food"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ChainViewTracker chainName="Ootoya" chainCategory="Teishoku" />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-red-600">Home</Link>
            <span className="text-gray-400 mx-2">/</span>
            <Link href="/chains" className="text-gray-500 hover:text-red-600">Chains</Link>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-gray-900 font-medium">Ootoya</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-100 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <span className="text-6xl mr-4">🍱</span>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    Ootoya
                  </h1>
                  <p className="text-3xl text-gray-600 japanese-text mb-2">大戸屋</p>
                  <p className="text-lg text-gray-600">Premium Teishoku</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-700 mb-6">
                Discover the excellence of teishoku at Ootoya: refined traditional cuisine 
                with fresh ingredients, visible preparation, and refined presentation. 
                Japanese family cooking elevated to the next level.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Fresh Vegetables
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Visible Kitchen
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  Vegetarian Options
                </span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                  Premium Quality
                </span>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Practical Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Average price:</span>
                  <span className="text-gray-600">¥800-1500</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Style:</span>
                  <span className="text-gray-600">Refined teishoku</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Specialty:</span>
                  <span className="text-gray-600">Grilled fish & vegetables</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Ordering:</span>
                  <span className="text-gray-600">Table service</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Atmosphere:</span>
                  <span className="text-gray-600">Warm family-style</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Vegetarian:</span>
                  <span className="text-green-600 font-medium">Excellent options</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ichijuu Sansai Philosophy */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            The Ichijuu Sansai Philosophy at Ootoya
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            一汁三菜 (Ichijuu Sansai) - "One soup, three dishes" - fundamental principle 
            of Japanese dietary balance, perfectly embodied in each Ootoya teishoku.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {ichijuuSansai.map((element, index) => (
              <div key={index} className="bg-green-50 rounded-xl p-8 border border-green-200">
                <div className="text-center mb-6">
                  <div className="text-4xl japanese-text mb-2">{element.element}</div>
                  <h3 className="text-2xl font-bold text-gray-900">{element.name}</h3>
                  <p className="text-lg text-gray-600">{element.description}</p>
                </div>
                
                <p className="text-gray-700 mb-4">{element.content}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Typical components:</h4>
                  <div className="flex flex-wrap gap-2">
                    {element.ingredients.map((ingredient, idx) => (
                      <span key={idx} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border">
                        {ingredient}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-green-100">
                  <h4 className="font-semibold text-gray-900 mb-1">Nutritional significance:</h4>
                  <p className="text-gray-600 text-sm">{element.significance}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Ootoya Menu - Teishoku Selection
          </h2>
          
          <div className="space-y-8">
            {menuItems.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
                  {category.category === "Vegetarian Options" && <span className="text-green-500 mr-2">🌱</span>}
                  {category.category === "Fish Teishoku" && <span className="text-blue-500 mr-2">🐟</span>}
                  {category.category === "Meat Teishoku" && <span className="text-red-500 mr-2">🍖</span>}
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-gray-900">{item.name}</h4>
                        <span className="text-green-600 font-bold text-lg">{item.price}</span>
                      </div>
                      <p className="text-gray-600 japanese-text text-sm mb-2">{item.japanese}</p>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Ootoya's Strengths
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ootoyaFeatures.map((feature, index) => (
              <div key={index} className="bg-green-50 p-6 rounded-xl border border-green-200">
                <div className="text-3xl mb-4 text-center">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-sm mb-4 text-center">{feature.description}</p>
                <div className="bg-white p-3 rounded-lg border border-green-100">
                  <p className="text-gray-500 text-xs">{feature.details}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ordering Guide */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How to Order at Ootoya
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {orderingGuide.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-green-600 font-bold">{step.step}</span>
                  </div>
                  <div className="text-3xl mb-2">{step.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4 text-center">{step.description}</p>
                <div className="space-y-1">
                  {step.tips.map((tip, tipIndex) => (
                    <p key={tipIndex} className="text-xs text-gray-500">• {tip}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white p-6 rounded-xl border border-gray-200">
            <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">Useful Phrases at Ootoya</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p><span className="font-semibold">Saba teishoku onegaishimasu</span></p>
                <p className="text-gray-600 japanese-text mb-2">鯖定食お願いします</p>
                <p className="text-gray-500 text-xs mb-3">A mackerel teishoku, please</p>
                
                <p><span className="font-semibold">Yasai wa nan ga arimasu ka?</span></p>
                <p className="text-gray-600 japanese-text mb-2">野菜は何がありますか？</p>
                <p className="text-gray-500 text-xs">What vegetables do you have?</p>
              </div>
              <div>
                <p><span className="font-semibold">Bejitarian menyuu wa?</span></p>
                <p className="text-gray-600 japanese-text mb-2">ベジタリアンメニューは？</p>
                <p className="text-gray-500 text-xs mb-3">Do you have a vegetarian menu?</p>
                
                <p><span className="font-semibold">Oishikatta desu</span></p>
                <p className="text-gray-600 japanese-text mb-2">美味しかったです</p>
                <p className="text-gray-500 text-xs">It was delicious</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Other Teishoku Chains
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/chains/yayoiken" className="group bg-yellow-50 p-6 rounded-xl border border-yellow-200 hover:border-yellow-300 transition-colors">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-yellow-600 mb-3">Yayoiken</h3>
              <p className="text-gray-600 text-sm">Popular teishoku with unlimited rice and affordable prices.</p>
            </Link>
            
            <Link href="/chains/miyamoto-munashi" className="group bg-orange-50 p-6 rounded-xl border border-orange-200 hover:border-orange-300 transition-colors">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 mb-3">Miyamoto Munashi</h3>
              <p className="text-gray-600 text-sm">Economical teishoku from Osaka with generous portions at low prices.</p>
            </Link>
            
            <Link href="/chains" className="group bg-green-50 p-6 rounded-xl border border-green-200 hover:border-green-300 transition-colors">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-600 mb-3">All Teishoku Chains</h3>
              <p className="text-gray-600 text-sm">Discover all teishoku chains and their philosophy.</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
