import { Metadata } from 'next';
import Link from 'next/link';
import ChainViewTracker from '@/components/ChainViewTracker';

export const metadata: Metadata = {
  title: 'Osaka Ohsho 大阪王将 | Osaka-Style Gyoza | JapanChains',
  description: 'Crispy gyoza, signature yakimeshi. Friendly Osaka street food atmosphere.',
  keywords: 'Osaka Ohsho, 大阪王将, Japanese Chinese restaurant, gyoza, yakimeshi, Osaka Chinese cuisine',
  openGraph: {
    title: 'Osaka Ohsho: Gyoza and Chinese Cuisine from Osaka | JapanChains',
    description: 'Guide to Osaka Ohsho. Discover their crispy gyoza, signature yakimeshi, and the friendly atmosphere of Osaka street cuisine.',
    type: 'article',
    url: 'https://japanchains.com/chains/osaka-ohsho',
  },
  alternates: {
    canonical: 'https://japanchains.com/chains/osaka-ohsho',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function OsakaOhshoPage() {
  const menuItems = [
    {
      category: "Gyoza & Appetizers",
      items: [
        { name: "Gyoza (6 pieces)", japanese: "餃子", price: "¥350", description: "Crispy Osaka-style gyoza, thicker than average" },
        { name: "Gyoza (12 pieces)", japanese: "餃子", price: "¥650", description: "Family portion, perfect for sharing" },
        { name: "Ebi Chili", japanese: "エビチリ", price: "¥680", description: "Shrimp in spicy sauce, popular specialty" },
        { name: "Harumaki", japanese: "春巻き", price: "¥420", description: "Crispy spring rolls" }
      ]
    },
    {
      category: "Rice & Noodles",
      items: [
        { name: "Yakimeshi", japanese: "焼きめし", price: "¥650", description: "Osaka Ohsho's signature fried rice, light and fragrant" },
        { name: "Tenshin-han", japanese: "天津飯", price: "¥750", description: "Rice topped with crab omelet and sweet-sour sauce" },
        { name: "Chinese Ramen", japanese: "中華ラーメン", price: "¥580", description: "Chinese-style ramen with clear, flavorful broth" },
        { name: "Yakisoba", japanese: "焼きそば", price: "¥680", description: "Stir-fried noodles with vegetables and meat" }
      ]
    },
    {
      category: "Main Dishes",
      items: [
        { name: "Subuta", japanese: "酢豚", price: "¥880", description: "Sweet and sour pork with colorful vegetables" },
        { name: "Mapo Tofu", japanese: "麻婆豆腐", price: "¥750", description: "Spicy tofu sauce, milder than Chinese version" },
        { name: "Karaage", japanese: "唐揚げ", price: "¥650", description: "Crispy fried chicken marinated in Chinese spices" },
        { name: "Hoikoro", japanese: "ホイコーロー", price: "¥820", description: "Stir-fried pork with cabbage and miso, hearty dish" }
      ]
    }
  ];

  const tips = [
    {
      title: "Signature Yakimeshi",
      icon: "🍚",
      description: "Osaka Ohsho's yakimeshi is their signature dish - lighter than classic fried rice, with a distinctly Japanese taste."
    },
    {
      title: "Osaka-Style Gyoza",
      icon: "🥟", 
      description: "Their gyoza are thicker and crispier than average, reflecting Osaka's culinary style."
    },
    {
      title: "Generous Portions",
      icon: "🍽️",
      description: "Known for generous portions at affordable prices, perfect for families and big appetites."
    },
    {
      title: "Casual Atmosphere",
      icon: "😊",
      description: "Family-friendly and casual atmosphere typical of Osaka, friendly and unpretentious service."
    }
  ];

  const culturalNotes = [
    {
      title: "Osaka Origins",
      description: "Founded in Osaka, the chain reflects this city's culinary spirit: generous, unpretentious, and flavorful."
    },
    {
      title: "Kansai Style",
      description: "Kansai region influence visible in slightly milder flavors and casual approach to service."
    },
    {
      title: "Local Adaptation",
      description: "Chinese cuisine adapted to Japanese taste, particularly that of the Osaka-Kansai region."
    }
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      <ChainViewTracker chainName="Osaka Ohsho" chainCategory="Chinese Cuisine" />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-red-600">Home</Link>
            <span className="text-gray-400 mx-2">/</span>
            <Link href="/chains" className="text-gray-500 hover:text-red-600">Chains</Link>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-gray-900 font-medium">Osaka Ohsho</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-100 to-orange-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <span className="text-6xl mr-4">🥟</span>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    Osaka Ohsho
                  </h1>
                  <p className="text-3xl text-gray-600 japanese-text mb-2">大阪王将</p>
                  <p className="text-lg text-gray-600">Osaka-Style Chinese Restaurant</p>
                </div>
              </div>
              
              <p className="text-xl text-gray-700 mb-6">
                Discover Osaka's culinary spirit with Osaka Ohsho: crispy gyoza, 
                signature yakimeshi, and generous Chinese cuisine in a casual 
                Kansai-style atmosphere.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-6">
                <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                  Osaka-Style Gyoza
                </span>
                <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                  Signature Yakimeshi
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                  Generous Portions
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Family Atmosphere
                </span>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Practical Information</h3>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Average price:</span>
                  <span className="text-gray-600">¥500-1300</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Style:</span>
                  <span className="text-gray-600">Osaka Chinese</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Specialty:</span>
                  <span className="text-gray-600">Gyoza & Yakimeshi</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Ordering:</span>
                  <span className="text-gray-600">Paper menu</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Atmosphere:</span>
                  <span className="text-gray-600">Casual family-style</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-semibold text-gray-900">Vegetarian:</span>
                  <span className="text-gray-600">Limited options</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Osaka Ohsho Menu
          </h2>
          
          <div className="space-y-8">
            {menuItems.map((category, categoryIndex) => (
              <div key={categoryIndex} className="bg-gray-50 rounded-xl p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-white p-4 rounded-lg border border-gray-200">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-gray-900">{item.name}</h4>
                        <span className="text-red-600 font-bold text-lg">{item.price}</span>
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

      {/* Tips Section */}
      <section className="py-16 bg-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Osaka Ohsho Tips
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tips.map((tip, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-red-200">
                <div className="text-3xl mb-4 text-center">{tip.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">{tip.title}</h3>
                <p className="text-gray-600 text-sm text-center">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Notes */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Culture & Origins
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {culturalNotes.map((note, index) => (
              <div key={index} className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{note.title}</h3>
                <p className="text-gray-600">{note.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ordering Guide */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            How to Order at Osaka Ohsho
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-red-50 p-6 rounded-xl border border-red-200">
              <div className="text-3xl mb-4 text-center">🥟</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">1. Start with Gyoza</h3>
              <p className="text-gray-600 text-sm text-center">
                Osaka Ohsho's gyoza are thick and crispy, 
                perfect for discovering their unique style.
              </p>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
              <div className="text-3xl mb-4 text-center">🍚</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">2. Try the Yakimeshi</h3>
              <p className="text-gray-600 text-sm text-center">
                Their signature yakimeshi is different from classic fried rice, 
                lighter and more fragrant.
              </p>
            </div>
            
            <div className="bg-yellow-50 p-6 rounded-xl border border-yellow-200">
              <div className="text-3xl mb-4 text-center">🍤</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 text-center">3. Popular Ebi Chili</h3>
              <p className="text-gray-600 text-sm text-center">
                Ebi chili (shrimp in spicy sauce) is a specialty 
                much appreciated by regulars.
              </p>
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-xl border border-gray-200">
            <h4 className="text-lg font-bold text-gray-900 mb-4 text-center">Recommended Orders</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center">
                <h5 className="font-bold text-gray-900 mb-2">Discovery Set</h5>
                <p className="text-gray-600 text-sm mb-2">Gyoza (6) + Yakimeshi + Drink</p>
                <p className="text-red-600 font-bold">≈ ¥1200</p>
              </div>
              <div className="text-center">
                <h5 className="font-bold text-gray-900 mb-2">Family Set</h5>
                <p className="text-gray-600 text-sm mb-2">Gyoza (12) + 2 Dishes + Rice</p>
                <p className="text-red-600 font-bold">≈ ¥2500</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Other Similar Chains
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/chains/gyoza-no-ohsho" className="group bg-red-50 p-6 rounded-xl border border-red-200 hover:border-red-300 transition-colors">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 mb-3">Gyoza no Ohsho</h3>
              <p className="text-gray-600 text-sm">The other major gyoza chain, more traditional Chinese style.</p>
            </Link>
            
            <Link href="/chains/bamiyan" className="group bg-yellow-50 p-6 rounded-xl border border-yellow-200 hover:border-yellow-300 transition-colors">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-yellow-600 mb-3">Bamiyan</h3>
              <p className="text-gray-600 text-sm">Family Chinese cuisine with drink bar and casual atmosphere.</p>
            </Link>
            
            <Link href="/chains" className="group bg-orange-50 p-6 rounded-xl border border-orange-200 hover:border-orange-300 transition-colors">
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 mb-3">All Chinese Cuisine</h3>
              <p className="text-gray-600 text-sm">Discover all Chinese cuisine chains in Japan.</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
