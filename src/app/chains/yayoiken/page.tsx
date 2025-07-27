import { Metadata } from 'next';
import Link from 'next/link';
import ChainViewTracker from '@/components/ChainViewTracker';

export const metadata: Metadata = {
  title: "Yayoiken 繧・ｈ縺・ｻ・| Unlimited Rice | Japan Food Chains",
  description: "Teishoku with unlimited rice. Balanced meals, affordable prices, authentic experience.",
  keywords: 'Yayoiken, 繧・ｈ縺・ｻ・ teishoku, japanese restaurant, unlimited rice, affordable prices, fast service, popular teishoku',
  openGraph: {
    title: "Yayoiken 繧・ｈ縺・ｻ・| Unlimited Rice | Japan Food Chains",
    description: "Teishoku with unlimited rice. Balanced meals, affordable prices, authentic experience.",
    type: 'article',
    locale: "en_US",
    siteName: "Japan Food Chains - Japanese Restaurant Guide"
  },
  alternates: {
    canonical: '/chains/yayoiken'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  }
};

export default function YayoikenPage() {
  const menuItems = [
    {
      category: "Popular Teishoku",
      items: [
        { name: "Saba Shioyaki", japanese: "魃門｡ｩ辟ｼ縺榊ｮ夐｣・, price: "ﾂ･690", description: "Salt-grilled mackerel, unlimited rice, miso soup" },
        { name: "Chicken Katsu", japanese: "繝√く繝ｳ繧ｫ繝・ｮ夐｣・, price: "ﾂ･750", description: "Breaded chicken cutlet, tonkatsu sauce, vegetables" },
        { name: "Hamburger Teishoku", japanese: "繝上Φ繝舌・繧ｰ螳夐｣・, price: "ﾂ･790", description: "Japanese hamburger with demi-glace sauce" },
        { name: "Ginger Pork", japanese: "逕溷ｧ懃┥縺榊ｮ夐｣・, price: "ﾂ･850", description: "Ginger-stir-fried pork with crispy vegetables" }
      ]
    },
    {
      category: "Fish Teishoku",
      items: [
        { name: "Saba Miso", japanese: "魃門袖蝎檎・螳夐｣・, price: "ﾂ･790", description: "Mackerel simmered in miso, rich umami flavor" },
        { name: "Salmon Teriyaki", japanese: "魄ｭ辣ｧ繧顔┥縺榊ｮ夐｣・, price: "ﾂ･850", description: "Grilled salmon with sweet-savory teriyaki sauce" },
        { name: "Sanma Shioyaki", japanese: "縺輔ｓ縺ｾ蝪ｩ辟ｼ縺榊ｮ夐｣・, price: "ﾂ･690", description: "Salt-grilled Pacific saury, autumn fish specialty" },
        { name: "Aji Fry", japanese: "繧｢繧ｸ繝輔Λ繧､螳夐｣・, price: "ﾂ･750", description: "Fried horse mackerel with Japanese tartar sauce" }
      ]
    },
    {
      category: "Budget Options",
      items: [
        { name: "Egg Teishoku", japanese: "邇牙ｭ千┥縺榊ｮ夐｣・, price: "ﾂ･490", description: "Sweet Japanese omelet, most affordable option" },
        { name: "Natto Teishoku", japanese: "邏崎ｱ・ｮ夐｣・, price: "ﾂ･450", description: "Traditional fermented soybeans, highly nutritious" },
        { name: "Tofu Teishoku", japanese: "蜀ｷ螂ｴ螳夐｣・, price: "ﾂ･490", description: "Cold tofu with condiments, light and healthy" },
        { name: "Vegetable Curry", japanese: "驥手除繧ｫ繝ｬ繝ｼ螳夐｣・, price: "ﾂ･650", description: "Mild vegetable curry, vegetarian option" }
      ]
    }
  ];

  const yayoikenFeatures = [
    {
      title: "Unlimited Rice",
      icon: "忽",
      description: "Free unlimited white rice included with all teishoku",
      details: "Free rice refills, perfect for big appetites and students.",
      highlight: "Signature service"
    },
    {
      title: "Affordable Prices",
      icon: "腸",
      description: "Teishoku starting from ﾂ･450, accessible to all budgets",
      details: "Budget positioning without compromising on quality of basic ingredients.",
      highlight: "Excellent value for money"
    },
    {
      title: "Fast Service",
      icon: "笞｡",
      description: "Preparation and service in under 10 minutes",
      details: "Partially pre-prepared cuisine for express service suitable for lunch breaks.",
      highlight: "Perfect for lunch breaks"
    },
    {
      title: "Family Menu",
      icon: "捉窶昨汨ｩ窶昨汨ｧ窶昨汨ｦ",
      description: "Options suitable for children and large families",
      details: "Generous portions and mild flavors appreciated by the whole family.",
      highlight: "Friendly for everyone"
    },
    {
      title: "Extended Hours",
      icon: "武",
      description: "Open from breakfast to dinner at most locations",
      details: "Extended availability to adapt to various Japanese lifestyles.",
      highlight: "Great flexibility"
    },
    {
      title: "Standardization",
      icon: "搭",
      description: "Consistent taste and quality in all restaurants",
      details: "Strict procedures ensuring identical experience throughout Japan.",
      highlight: "Guaranteed reliability"
    }
  ];

  const riceTips = [
    {
      title: "Asking for Extra Rice",
      japanese: "縺秘｣ｯ縺ｮ縺翫°繧上ｊ",
      romanji: "Gohan no okawari",
      description: "Raise your hand slightly and say 'Gohan no okawari onegaishimasu'",
      icon: "刹窶坂凾・・
    },
    {
      title: "Initial Rice Portion",
      japanese: "縺秘｣ｯ縺ｮ驥・,
      romanji: "Gohan no ryou",
      description: "Ask for 'oomori' (large portion) or 'sukuname' (small portion) when ordering",
      icon: "棟"
    },
    {
      title: "Mixing with Dishes",
      japanese: "豺ｷ縺懊ｋ",
      romanji: "Mazeru",
      description: "Use rice to absorb sauces and accompany each bite",
      icon: "･・
    }
  ];

  const orderingGuide = [
    {
      step: 1,
      title: "Ticket Machine",
      icon: "辞",
      description: "Buy your ticket at the vending machine",
      tips: ["Cash or card payment", "Photos on buttons", "Clearly displayed prices"]
    },
    {
      step: 2,
      title: "Choose Your Seat",
      icon: "ｪ・,
      description: "Freely choose from available tables",
      tips: ["Self-service seating", "Counter or tables", "Bring your ticket"]
    },
    {
      step: 3,
      title: "Present Ticket",
      icon: "次・・,
      description: "Give ticket to service staff",
      tips: ["Wait for a server to pass by", "Keep ticket visible", "Specify rice quantity if needed"]
    },
    {
      step: 4,
      title: "Fast Service",
      icon: "鎖・・,
      description: "Receive teishoku in 5-10 minutes",
      tips: ["Trays brought to table", "Free rice refills", "Self-service water"]
    }
  ];

  const budgetGuide = [
    {
      category: "Student Budget",
      range: "ﾂ･450-650",
      recommendations: ["Natto Teishoku", "Egg Teishoku", "Vegetable Curry"],
      description: "Most economical options with unlimited rice to compensate"
    },
    {
      category: "Standard Lunch",
      range: "ﾂ･650-850",
      recommendations: ["Saba Shioyaki", "Chicken Katsu", "Salmon Teriyaki"],
      description: "Popular teishoku offering the best price-flavor balance"
    },
    {
      category: "Hearty Meal",
      range: "ﾂ･850-1200",
      recommendations: ["Hamburger + side", "Tonkatsu Set", "Mix Plate"],
      description: "More substantial options with additional sides"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ChainViewTracker chainName="Yayoiken" chainCategory="Teishoku" />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-red-600">Home</Link>
            <span className="text-gray-400 mx-2">/</span>
            <Link href="/dish-types/teishoku" className="text-gray-500 hover:text-red-600">Teishoku</Link>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-gray-900 font-medium">Yayoiken</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-yellow-100 to-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <span className="text-6xl mr-4">忽</span>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    Yayoiken
                  </h1>
                  <p className="text-3xl text-gray-600 japanese-text mb-2">繧・ｈ縺・ｻ・/p>
                  <p className="text-lg text-gray-600">Popular Teishoku</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-700 mb-6">
                The reference for accessible teishoku! Yayoiken offers complete 
                traditional meals with unlimited rice, unbeatable prices and express service. 
                The art of teishoku democratized for all budgets.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                  Unlimited Rice
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Affordable Prices
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Fast Service
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  Family-Friendly
                </span>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Practical Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Average price:</span>
                  <span className="text-gray-600">ﾂ･450-850</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Style:</span>
                  <span className="text-gray-600">Popular teishoku</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Specialty:</span>
                  <span className="text-yellow-600 font-medium">Unlimited rice</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Ordering:</span>
                  <span className="text-gray-600">Ticket machine</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Service:</span>
                  <span className="text-blue-600 font-medium">Express (5-10 min)</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Clientele:</span>
                  <span className="text-gray-600">Students, families</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rice Unlimited Feature */}
      <section className="py-16 bg-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">忽</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Unlimited Rice - Yayoiken's Signature</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Yayoiken's signature service: unlimited white rice included with all teishoku. 
              A tradition that makes every meal a generous and satisfying moment.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {riceTips.map((tip, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-yellow-200">
                <div className="text-3xl mb-4 text-center">{tip.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 text-center">{tip.title}</h3>
                <p className="text-gray-600 japanese-text text-center mb-2">{tip.japanese}</p>
                <p className="text-gray-500 text-sm text-center mb-3">({tip.romanji})</p>
                <p className="text-gray-600 text-sm">{tip.description}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-white p-6 rounded-xl border border-yellow-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">庁 Tips for Enjoying Unlimited Rice</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="mb-2"><span className="font-semibold">鎖・・Strategy:</span> Start with normal portion, ask for more according to appetite</p>
                <p className="mb-2"><span className="font-semibold">竢ｰ Timing:</span> Ask for more rice mid-meal to accompany remaining dishes</p>
                <p><span className="font-semibold">･｢ Etiquette:</span> Finish your rice before asking for more (Japanese respect)</p>
              </div>
              <div>
                <p className="mb-2"><span className="font-semibold">ｧ・Pairing:</span> Use rice to balance salty flavors</p>
                <p className="mb-2"><span className="font-semibold">佐 Technique:</span> Mix lightly with miso soup at end of meal</p>
                <p><span className="font-semibold">丁 Health:</span> Plain rice, energy source without additives</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Budget Guide */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Budget Guide - Yayoiken for Everyone
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {budgetGuide.map((budget, index) => (
              <div key={index} className="bg-green-50 p-6 rounded-xl border border-green-200">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{budget.category}</h3>
                <div className="text-2xl font-bold text-green-600 mb-4">{budget.range}</div>
                <p className="text-gray-600 text-sm mb-4">{budget.description}</p>
                
                <h4 className="font-semibold text-gray-900 mb-2">Recommendations:</h4>
                <div className="space-y-1">
                  {budget.recommendations.map((item, idx) => (
                    <p key={idx} className="text-sm text-gray-600">窶｢ {item}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
            <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">腸 Smart Economic Calculation</h3>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Why Yayoiken is Economical:</h4>
                <p className="mb-2">窶｢ <span className="font-semibold">Unlimited rice:</span> Free complement to fill up</p>
                <p className="mb-2">窶｢ <span className="font-semibold">Miso soup included:</span> Nutrition and satiety added</p>
                <p className="mb-2">窶｢ <span className="font-semibold">Vegetables included:</span> Nutritional balance within price</p>
                <p>窶｢ <span className="font-semibold">No hidden fees:</span> All-inclusive displayed price</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Value Comparison:</h4>
                <p className="mb-2">窶｢ <span className="font-semibold">vs Fast-food:</span> More nutritious at similar price</p>
                <p className="mb-2">窶｢ <span className="font-semibold">vs Convenience store:</span> Hot complete meal vs snacks</p>
                <p className="mb-2">窶｢ <span className="font-semibold">vs Home cooking:</span> Time and dishes savings</p>
                <p>窶｢ <span className="font-semibold">vs Other teishoku:</span> 30-40% cheaper</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Yayoiken Menu - Popular Selection
          </h2>
          
          <div className="space-y-8">
            {menuItems.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-white rounded-xl p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center flex items-center justify-center">
                  {category.category === "Budget Options" && <span className="text-green-500 mr-2">腸</span>}
                  {category.category === "Fish Teishoku" && <span className="text-blue-500 mr-2">澄</span>}
                  {category.category === "Popular Teishoku" && <span className="text-yellow-500 mr-2">箝・/span>}
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
                      <p className="text-xs text-green-600 mt-2 font-medium">+ Unlimited rice included</p>
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
            Yayoiken Advantages
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {yayoikenFeatures.map((feature, index) => (
              <div key={index} className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
                <div className="text-3xl mb-4 text-center">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-sm mb-4 text-center">{feature.description}</p>
                
                <div className="bg-white p-3 rounded-lg border border-yellow-100 mb-3">
                  <p className="text-gray-500 text-xs">{feature.details}</p>
                </div>
                
                <div className="text-center">
                  <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium">
                    {feature.highlight}
                  </span>
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
            How to Order at Yayoiken
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {orderingGuide.map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <div className="text-center mb-4">
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                    <span className="text-yellow-600 font-bold">{step.step}</span>
                  </div>
                  <div className="text-3xl mb-2">{step.icon}</div>
                  <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                </div>
                <p className="text-gray-600 text-sm mb-4 text-center">{step.description}</p>
                <div className="space-y-1">
                  {step.tips.map((tip, tipIndex) => (
                    <p key={tipIndex} className="text-xs text-gray-500">窶｢ {tip}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-white p-6 rounded-xl border border-gray-200">
            <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">Useful Phrases at Yayoiken</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p><span className="font-semibold">Gohan no okawari onegaishimasu</span></p>
                <p className="text-gray-600 japanese-text mb-2">縺秘｣ｯ縺ｮ縺翫°繧上ｊ縺企｡倥＞縺励∪縺・/p>
                <p className="text-gray-500 text-xs mb-3">More rice, please</p>
                
                <p><span className="font-semibold">Oomori de onegaishimasu</span></p>
                <p className="text-gray-600 japanese-text mb-2">螟ｧ逶帙ｊ縺ｧ縺企｡倥＞縺励∪縺・/p>
                <p className="text-gray-500 text-xs">Large portion, please</p>
              </div>
              <div>
                <p><span className="font-semibold">Yasui teishoku wa dore desu ka?</span></p>
                <p className="text-gray-600 japanese-text mb-2">螳峨＞螳夐｣溘・縺ｩ繧後〒縺吶°・・/p>
                <p className="text-gray-500 text-xs mb-3">Which is the cheapest teishoku?</p>
                
                <p><span className="font-semibold">Gochisousama deshita</span></p>
                <p className="text-gray-600 japanese-text mb-2">縺斐■縺昴≧縺輔∪縺ｧ縺励◆</p>
                <p className="text-gray-500 text-xs">Thank you for the meal</p>
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
            <Link href="/chains/ootoya" className="group bg-green-50 p-6 rounded-xl border border-green-200 hover:border-green-300 transition-colors">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-green-600 mb-3">Ootoya</h3>
              <p className="text-gray-600 text-sm">Premium teishoku with fresh ingredients and visible kitchen.</p>
            </Link>
            
            <Link href="/chains/miyamoto-munashi" className="group bg-orange-50 p-6 rounded-xl border border-orange-200 hover:border-orange-300 transition-colors">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 mb-3">Miyamoto Munashi</h3>
              <p className="text-gray-600 text-sm">Budget teishoku from Osaka with generous portions at low prices.</p>
            </Link>
            
            <Link href="/dish-types/teishoku" className="group bg-yellow-50 p-6 rounded-xl border border-yellow-200 hover:border-yellow-300 transition-colors">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-yellow-600 mb-3">All Teishoku</h3>
              <p className="text-gray-600 text-sm">Discover all teishoku chains and their philosophy.</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}



