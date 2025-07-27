import Link from 'next/link';
import { ArrowLeft, Fish, MapPin, Clock, Award, Utensils, DollarSign, Users, ChefHat, Star, AlertTriangle } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Sushi Restaurants Japan | Kaiten Traditional | JapanChains',
  description: 'Choose sushi restaurant: kaiten-zushi (Sushiro), traditional sushi-ya, chains.',
  keywords: 'sushi restaurant, sushi japan, kaiten-zushi, japanese restaurant, sushi guide, sushiro, kura sushi, hama sushi',
  openGraph: {
    title: 'Sushi Restaurants Guide in Japan: Kaiten, Traditional | JapanChains',
    description: 'How to choose your sushi restaurant in Japan? Complete guide to kaiten-zushi, traditional sushi-ya and modern chains.',
    type: 'article',
    url: '/guides/restaurant-sushi',
  },
  alternates: {
    canonical: '/guides/restaurant-sushi',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function SushiRestaurantPage() {
  const sushiTypes = [
    {
      type: "Kaiten-zushi",
      japanese: "回転寿司",
      description: "Sushi restaurants with conveyor belt",
      priceRange: "¥100-300/plate",
      bestFor: "Families, tight budgets, discovery",
      examples: ["Sushiro", "Kura Sushi", "Hama Sushi"],
      pros: ["Affordable prices", "No waiting", "Varied menu", "Easy ordering"],
      icon: "🍣"
    },
    {
      type: "Traditional Sushi-ya",
      japanese: "寿司屋",
      description: "Authentic sushi restaurants with chef",
      priceRange: "¥3000-15000",
      bestFor: "Authentic experience, special occasions",
      examples: ["Jiro", "Kyubei", "Ginza Sushi-Ko"],
      pros: ["Exceptional quality", "Cultural experience", "Fresh sushi", "Chef interaction"],
      icon: "🥢"
    },
    {
      type: "Modern Sushi Restaurant",
      japanese: "モダン寿司",
      description: "Modern and creative fusion",
      priceRange: "¥2000-8000",
      bestFor: "Culinary innovation, modern atmosphere",
      examples: ["Nabezo", "Genki Sushi", "Numazuko"],
      pros: ["Creativity", "Modern atmosphere", "Quality-price", "Fusion menu"],
      icon: "🌟"
    }
  ];

  const sushiChains = [
    {
      name: "Sushiro",
      japanese: "スシロー",
      rank: "#1",
      description: "The undisputed market leader with 627+ restaurants",
      specialty: "Consistent quality and innovation",
      avgPrice: "¥110-300",
      popularity: "⭐⭐⭐⭐⭐",
      href: "/chains/sushiro",
      color: "bg-blue-500"
    },
    {
      name: "Kura Sushi",
      japanese: "くら寿司",
      rank: "#2",
      description: "Pioneer of 'additive-free' concept with fun games",
      specialty: "Bikkura-Pon system and organic products",
      avgPrice: "¥110-500",
      popularity: "⭐⭐⭐⭐⭐",
      href: "/chains/kura-sushi",
      color: "bg-purple-500"
    },
    {
      name: "Hama Sushi",
      japanese: "はま寿司",
      rank: "#3",
      description: "The economical choice from Zensho Group",
      specialty: "Ultra-competitive prices and expanded menu",
      avgPrice: "¥110-250",
      popularity: "⭐⭐⭐⭐",
      href: "/chains/hama-sushi",
      color: "bg-green-500"
    }
  ];

  const choosingTips = [
    {
      situation: "First trip to Japan",
      recommendation: "Kaiten-zushi (Sushiro or Kura Sushi)",
      reason: "Simple interface, clear prices, no language barrier"
    },
    {
      situation: "Limited budget",
      recommendation: "Hama Sushi or Sushiro",
      reason: "Fixed prices at ¥110, excellent value for money"
    },
    {
      situation: "Authentic experience",
      recommendation: "Local traditional sushi-ya",
      reason: "Chef interaction, sushi prepared to order"
    },
    {
      situation: "Family with children",
      recommendation: "Kura Sushi",
      reason: "Bikkura-Pon game system, fun atmosphere"
    },
    {
      situation: "Business meal",
      recommendation: "Modern or high-end traditional sushi restaurant",
      reason: "Appropriate setting, exceptional quality"
    }
  ];

  const sushiEtiquette = [
    {
      rule: "Use hands or chopsticks",
      explanation: "Both are acceptable for eating sushi",
      icon: "🤲"
    },
    {
      rule: "Dip fish side in soy sauce",
      explanation: "Never dip the rice side to avoid breaking",
      icon: "🍱"
    },
    {
      rule: "Eat in one bite",
      explanation: "Sushi is designed to be eaten whole",
      icon: "👄"
    },
    {
      rule: "Don't mix wasabi in soy sauce",
      explanation: "The chef has already added the right amount",
      icon: "🌶️"
    }
  ];

  const qualityIndicators = [
    {
      indicator: "Fish appearance",
      goodSigns: ["Bright colors", "Firm texture", "Fresh smell"],
      badSigns: ["Dull colors", "Mushy texture", "Fishy smell"]
    },
    {
      indicator: "Rice quality",
      goodSigns: ["Body temperature", "Proper seasoning", "Good texture"],
      badSigns: ["Too cold/hot", "Bland taste", "Too sticky/dry"]
    },
    {
      indicator: "Restaurant cleanliness",
      goodSigns: ["Clean counter", "Fresh uniforms", "Organized workspace"],
      badSigns: ["Dirty surfaces", "Stained clothes", "Messy preparation area"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with back link */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/guides" 
            className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Guides
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              <Fish className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Complete Guide to Sushi Restaurants in Japan</h1>
              <p className="text-lg text-gray-600">Everything you need to know to choose the right sushi restaurant</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Introduction */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="prose prose-blue max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Japan offers an incredible variety of sushi experiences, from affordable conveyor belt restaurants 
              to world-renowned traditional establishments. This guide helps you navigate the different types 
              and choose the perfect sushi experience for your needs and budget.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">🎯 In this guide:</h3>
              <ul className="text-blue-800 space-y-1">
                <li>• <strong>3 main types</strong> of sushi restaurants</li>
                <li>• <strong>Top chains</strong> with detailed comparisons</li>
                <li>• <strong>Choosing tips</strong> based on your situation</li>
                <li>• <strong>Sushi etiquette</strong> and quality indicators</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Sushi Restaurant Types */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Types of Sushi Restaurants
          </h2>
          
          <div className="space-y-8">
            {sushiTypes.map((type, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="grid lg:grid-cols-4 gap-6">
                  <div className="text-center">
                    <div className="text-4xl mb-2">{type.icon}</div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{type.type}</h3>
                    <p className="text-sm text-gray-600 mb-2">{type.japanese}</p>
                    <p className="text-sm text-gray-700">{type.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Price Range:</h4>
                    <p className="text-lg font-semibold text-green-600 mb-3">{type.priceRange}</p>
                    <h4 className="font-semibold text-gray-900 mb-2">Best For:</h4>
                    <p className="text-sm text-gray-700">{type.bestFor}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                    <ul className="space-y-1 mb-3">
                      {type.examples.map((example, i) => (
                        <li key={i} className="text-sm text-gray-700">• {example}</li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Advantages:</h4>
                    <ul className="space-y-1">
                      {type.pros.map((pro, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Top Sushi Chains */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Top Kaiten-Zushi Chains
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {sushiChains.map((chain, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className={`${chain.color} text-white p-4`}>
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold">{chain.name}</h3>
                      <p className="text-sm opacity-90">{chain.japanese}</p>
                    </div>
                    <div className="text-2xl font-bold">{chain.rank}</div>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-gray-700 mb-4">{chain.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div>
                      <span className="text-sm font-medium text-gray-500">Specialty:</span>
                      <p className="text-sm text-gray-900">{chain.specialty}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Average Price:</span>
                      <p className="text-sm font-semibold text-green-600">{chain.avgPrice}</p>
                    </div>
                    <div>
                      <span className="text-sm font-medium text-gray-500">Popularity:</span>
                      <p className="text-sm">{chain.popularity}</p>
                    </div>
                  </div>
                  
                  <Link
                    href={chain.href}
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                  >
                    Learn more
                    <ArrowLeft className="w-4 h-4 ml-1 rotate-180" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Choosing Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            How to Choose Based on Your Situation
          </h2>
          
          <div className="space-y-4">
            {choosingTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="grid lg:grid-cols-3 gap-4 items-center">
                  <div>
                    <h3 className="font-bold text-gray-900">{tip.situation}</h3>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-600">{tip.recommendation}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-700">{tip.reason}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sushi Etiquette */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Essential Sushi Etiquette
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sushiEtiquette.map((rule, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center">
                <div className="text-3xl mb-3">{rule.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-2">{rule.rule}</h3>
                <p className="text-sm text-gray-700">{rule.explanation}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quality Indicators */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            How to Spot Quality Sushi
          </h2>
          
          <div className="space-y-6">
            {qualityIndicators.map((indicator, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{indicator.indicator}</h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2 flex items-center">
                      <Award className="w-4 h-4 mr-2" />
                      Good Signs
                    </h4>
                    <ul className="space-y-1">
                      {indicator.goodSigns.map((sign, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {sign}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2 flex items-center">
                      <AlertTriangle className="w-4 h-4 mr-2" />
                      Warning Signs
                    </h4>
                    <ul className="space-y-1">
                      {indicator.badSigns.map((sign, i) => (
                        <li key={i} className="text-sm text-gray-700 flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {sign}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Your Sushi Adventure Awaits
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Budget-Friendly</h3>
              <p className="text-gray-600 text-sm">
                Start with kaiten-zushi chains like Sushiro for an affordable introduction to Japanese sushi culture.
              </p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Family-Friendly</h3>
              <p className="text-gray-600 text-sm">
                Kaiten-zushi offers something for everyone with varied menus and interactive dining experiences.
              </p>
            </div>
            
            <div>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <ChefHat className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Authentic Experience</h3>
              <p className="text-gray-600 text-sm">
                When ready, explore traditional sushi-ya for the ultimate authentic Japanese sushi experience.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
