import { Metadata } from 'next';
import Link from 'next/link';
import CategoryViewTracker from '@/components/CategoryViewTracker';

export const metadata: Metadata = {
  title: 'Teishoku (定食) - Traditional Complete Meals | Japanese Restaurant Chain Guide',
  description: 'Discover teishoku, traditional Japanese complete meals with rice, soup and side dishes. Guide to the best Japanese restaurant chains specializing in balanced meals.',
  keywords: 'teishoku, 定食, japanese restaurant, complete meal, traditional cuisine, Ootoya, Yayoiken, miso soup, rice',
  openGraph: {
    title: 'Teishoku - Traditional Japanese Complete Meals',
    description: 'Complete guide to teishoku: balanced meals with rice, miso soup and side dishes from the best Japanese chains.',
    type: 'article'
  }
};

export default function TeishokuPage() {
  const teishokuChains = [
    {
      name: "Ootoya",
      japanese: "大戸屋",
      englishName: "Ootoya",
      description: "Premium teishoku chain offering traditional complete meals with fresh ingredients and carefully prepared cuisine.",
      specialties: ["Saba Teishoku", "Karaage Teishoku", "Tofu Hamburger", "Seasonal Vegetables"],
      priceRange: "¥800-1500",
      style: "Refined traditional teishoku",
      orderingMethod: "Paper menu + table service",
      vegetarianOptions: "Excellent vegetarian options",
      uniqueFeatures: ["Fresh vegetables", "Visible kitchen", "Elegant presentation"],
      atmosphere: "Refined family-friendly",
      href: "/chains/ootoya"
    },
    {
      name: "Yayoiken",
      japanese: "やよい軒",
      englishName: "Yayoiken",
      description: "Popular teishoku chain offering hearty and affordable meals in a casual atmosphere.",
      specialties: ["Chicken Nanban", "Karaage Teishoku", "Gyoza Teishoku", "Seasonal Menu"],
      priceRange: "¥600-1200",
      style: "Popular teishoku",
      orderingMethod: "Tickets + counter/table",
      vegetarianOptions: "Limited options",
      uniqueFeatures: ["Unlimited rice", "Affordable prices", "Generous portions"],
      atmosphere: "Casual family-friendly",
      href: "/chains/yayoiken"
    },
    {
      name: "Miyamoto Munashi",
      japanese: "宮本むなし",
      englishName: "Miyamoto Munashi",
      description: "Budget teishoku chain from Osaka, famous for generous portions at affordable prices.",
      specialties: ["Budget Teishoku", "Katsu Teishoku", "Ginger Pork", "Rice Bowl Sets"],
      priceRange: "¥400-800",
      style: "Budget teishoku",
      orderingMethod: "Tickets + counter",
      vegetarianOptions: "Very limited options",
      uniqueFeatures: ["Very low prices", "XXL portions", "Fast service"],
      atmosphere: "Casual working-class",
      href: "/chains/miyamoto-munashi"
    }
  ];

  const teishokuComponents = [
    {
      name: "Main Dish",
      japanese: "主菜",
      description: "Grilled fish, meat or tofu prepared according to daily recipes",
      characteristics: "Quality proteins, traditional cooking methods",
      examples: ["Grilled mackerel", "Chicken karaage", "Tofu hambagu", "Teriyaki beef"],
      importance: "Primary source of protein"
    },
    {
      name: "White Rice",
      japanese: "ご飯",
      description: "Perfectly cooked Japanese rice, nutritional foundation of the meal",
      characteristics: "Glossy grains, slightly sticky texture",
      examples: ["Gohan rice", "Short-grain rice", "Sometimes multigrain rice"],
      importance: "Energy base, often unlimited"
    },
    {
      name: "Miso Soup",
      japanese: "味噌汁",
      description: "Broth made with miso paste with tofu, wakame seaweed and vegetables",
      characteristics: "Umami flavor, comforting, nutritious",
      examples: ["Spinach miso", "Tofu miso", "Mushroom miso"],
      importance: "Provides probiotics and minerals"
    },
    {
      name: "Pickled Vegetables",
      japanese: "漬物",
      description: "Tsukemono - fermented or pickled vegetables for digestion",
      characteristics: "Tangy, crunchy, aids digestion",
      examples: ["Pickled cabbage", "Daikon radish", "Cucumber with miso"],
      importance: "Facilitates digestion, vitamins"
    },
    {
      name: "Side Dishes",
      japanese: "副菜",
      description: "Various small side dishes that change with the season",
      characteristics: "Varied, colorful, nutritional balance",
      examples: ["Kinpira gobo", "Hijiki", "Tamagoyaki", "Potato salad"],
      importance: "Completes nutritional balance"
    }
  ];

  const culturalSignificance = [
    {
      title: "Ichijuu Sansai Philosophy",
      icon: "🍚",
      description: "\"One soup, three dishes\" - fundamental principle of Japanese dietary balance",
      details: "Teishoku follows this ancient rule that ensures a nutritionally complete and visually harmonious meal."
    },
    {
      title: "Nutritional Balance",
      icon: "⚖️",
      description: "Perfect combination of proteins, carbohydrates, vegetables and probiotics",
      details: "Each component has its role: rice for energy, fish/meat for protein, vegetables for vitamins."
    },
    {
      title: "Home Cooking",
      icon: "👨‍👩‍👧‍👦",
      description: "Represents the essence of traditional Japanese home cooking",
      details: "What a Japanese mother would prepare for her family: simple, nutritious and comforting."
    },
    {
      title: "Accessibility",
      icon: "💰",
      description: "Complete and balanced meal at affordable prices for everyone",
      details: "Democratizes good traditional Japanese nutrition, accessible to workers and families."
    },
    {
      title: "Seasonality",
      icon: "🌸",
      description: "Use of seasonal ingredients for freshness and flavor",
      details: "Menus change with seasons, reflecting Japanese philosophy of respecting nature."
    },
    {
      title: "Harmonious Presentation",
      icon: "🎨",
      description: "Aesthetic arrangement that also feeds the eyes",
      details: "The art of Japanese presentation: colors, shapes and textures in harmony on the tray."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <CategoryViewTracker categoryName="teishoku" />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-red-600">Home</Link>
            <span className="text-gray-400 mx-2">/</span>
            <Link href="/food-type" className="text-gray-500 hover:text-red-600">Food Type</Link>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-gray-900 font-medium">Teishoku</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-100 to-blue-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-5xl mr-4">🍱</span>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    Teishoku
                  </h1>
                  <p className="text-2xl text-gray-600 japanese-text">定食</p>
                </div>
              </div>
              <p className="text-xl text-gray-700 mb-6">
                Discover the essence of Japanese home cooking with teishoku: 
                complete and balanced meals combining ancient tradition with modern 
                nutrition. A main dish, rice, miso soup and side dishes for a 
                perfectly harmonious meal.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Price: ¥600-1500
                </span>
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Complete meal
                </span>
                <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                  Traditional cuisine
                </span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Traditional Teishoku</h3>
              <p className="text-gray-600 mb-4">
                Teishoku follows the "ichijuu sansai" philosophy (one soup, three dishes) 
                which guarantees a nutritionally balanced meal. It's the embodiment 
                of Japanese culinary wisdom.
              </p>
              <p className="text-gray-600">
                Each element has its function: rice provides energy, the main dish 
                provides protein, miso soup provides probiotics, and side dishes 
                provide vitamins and minerals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Significance */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            The Philosophy of Teishoku
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {culturalSignificance.map((significance, index) => (
              <div key={index} className="bg-green-50 rounded-xl p-6 border border-green-200">
                <div className="text-3xl mb-4">{significance.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{significance.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{significance.description}</p>
                <p className="text-gray-500 text-xs">{significance.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Components Breakdown */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Components of a Teishoku
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teishokuComponents.map((component, index) => (
              <div key={index} className="bg-white rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{component.name}</h3>
                <p className="text-gray-600 japanese-text text-sm mb-3">{component.japanese}</p>
                <p className="text-gray-600 text-sm mb-4">{component.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="font-semibold text-gray-900">Characteristics:</span>
                    <p className="text-gray-600">{component.characteristics}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Examples:</span>
                    <p className="text-gray-600">{component.examples.join(", ")}</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-900">Importance:</span>
                    <p className="text-gray-600">{component.importance}</p>
                  </div>
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
            Major Teishoku Chains
          </h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {teishokuChains.map((chain, index) => (
              <Link 
                key={index}
                href={chain.href}
                className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-green-200 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-green-600 text-xl">🍱</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                        {chain.name}
                      </h3>
                      <p className="text-gray-600 japanese-text">{chain.japanese}</p>
                      <p className="text-gray-500 text-xs">{chain.atmosphere}</p>
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
                        <span className="font-semibold text-gray-900">Style: </span>
                        <span className="text-gray-600">{chain.style}</span>
                      </div>
                      <div>
                        <span className="font-semibold text-gray-900">Vegetarian: </span>
                        <span className="text-gray-600">{chain.vegetarianOptions}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 flex items-center justify-between">
                    <span className="text-green-600 font-medium text-sm group-hover:text-green-700">
                      See details →
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
            How to Order Teishoku
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-green-50 p-6 rounded-xl border border-green-200">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">1. Choose the Set</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Look at the teishoku menu</li>
                <li>• Choose the main dish</li>
                <li>• Note included side dishes</li>
              </ul>
            </div>
            
            <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
              <div className="text-3xl mb-4">🍚</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">2. Rice Options</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Standard white rice</li>
                <li>• Sometimes multigrain rice</li>
                <li>• Often unlimited (okawari)</li>
              </ul>
            </div>
            
            <div className="bg-purple-50 p-6 rounded-xl border border-purple-200">
              <div className="text-3xl mb-4">🥤</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">3. Beverages</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Green tea often free</li>
                <li>• Cold water available</li>
                <li>• Additional drinks for extra cost</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
              <div className="text-3xl mb-4">⏰</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">4. Service</h3>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Wait to be seated</li>
                <li>• Everything arrives together</li>
                <li>• Eat in any order you prefer</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 bg-white p-6 rounded-xl border border-gray-200">
            <h4 className="text-lg font-bold text-gray-900 mb-4">Useful Phrases</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p><span className="font-semibold">Teishoku wo kudasai</span> <span className="japanese-text">定食をください</span></p>
                <p className="text-gray-600 mb-2">A teishoku, please</p>
                
                <p><span className="font-semibold">Gohan okawari dekimasu ka?</span> <span className="japanese-text">ご飯おかわりできますか？</span></p>
                <p className="text-gray-600 mb-2">Can I have a second serving of rice?</p>
              </div>
              <div>
                <p><span className="font-semibold">Osusume wa nan desu ka?</span> <span className="japanese-text">おすすめは何ですか？</span></p>
                <p className="text-gray-600 mb-2">What do you recommend?</p>
                
                <p><span className="font-semibold">Gochisousama deshita</span> <span className="japanese-text">ごちそうさまでした</span></p>
                <p className="text-gray-600">Thank you for the meal (at the end)</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="py-16 bg-green-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Tips for Enjoying Teishoku
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🥢</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Eating Order</h3>
              <p className="text-gray-600 text-sm">
                Start with miso soup to prepare your stomach, then alternate 
                between the main dish and rice. Pickles cleanse the palate.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">⚖️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Perfect Balance</h3>
              <p className="text-gray-600 text-sm">
                Teishoku is designed to be nutritionally complete. 
                Eat all components to benefit from this balance.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Excellent Value</h3>
              <p className="text-gray-600 text-sm">
                A teishoku offers a complete meal for less than ordering 
                several dishes separately. Perfect for a balanced lunch.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🌱</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Vegetarian Options</h3>
              <p className="text-gray-600 text-sm">
                Ootoya offers excellent vegetarian options. Yayoiken 
                and other chains have tofu-based alternatives.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Photo Menus</h3>
              <p className="text-gray-600 text-sm">
                Teishoku chains generally have menus with photos, 
                making ordering easy even without speaking Japanese.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <div className="text-3xl mb-4">🕐</div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Ideal Hours</h3>
              <p className="text-gray-600 text-sm">
                Avoid lunch rush hour (12-1pm) for more peace. 
                Teishoku are also perfect for a light dinner.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
