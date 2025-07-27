import Link from 'next/link';
import { ArrowLeft, HelpCircle, Star, DollarSign, Users, Clock, Utensils, MapPin, Award, Heart } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Choose Restaurant Japan | Guide 2025 | JapanChains',
  description: 'Practical guide by cuisine, budget, occasion. Avoid traps, eat like a local.',
  keywords: 'how to choose Japanese restaurant, Japan restaurant guide, types Japanese restaurants, Japan restaurant budget, Japan travel tips',
  openGraph: {
    title: 'How to Choose a Restaurant in Japan? | Guide 2025 | JapanChains',
    description: 'Practical guide for choosing where to eat in Japan. By cuisine type, budget and occasion. Tips to avoid tourist traps.',
    type: 'article',
    url: '/guides/comment-choisir-restaurant-japonais',
  },
  alternates: {
    canonical: '/guides/comment-choisir-restaurant-japonais',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HowToChooseJapaneseRestaurantPage() {
  const decisionFactors = [
    {
      title: "Budget",
      icon: DollarSign,
      color: "text-green-600",
      bgColor: "bg-green-50",
      factors: [
        "Economical (¥500-1500): Chains like Yoshinoya, Sukiya, Sushiro",
        "Medium (¥1500-3000): Family restaurants, premium ramen",
        "High (¥3000+): Traditional sushi-ya, gastronomic restaurants"
      ]
    },
    {
      title: "Type of experience",
      icon: Star,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      factors: [
        "Authentic: Small local restaurants, traditional izakaya",
        "Practical: Modern chains with multilingual interface",
        "Cultural: Restaurants with demonstrations, cooking classes"
      ]
    },
    {
      title: "Group composition",
      icon: Users,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      factors: [
        "Solo: Ramen counters, kaiten-zushi, vending machines",
        "Couple: Romantic restaurants, intimate izakaya",
        "Family: Family chains, children's menu, spacious areas"
      ]
    },
    {
      title: "Hours",
      icon: Clock,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      factors: [
        "24/7: Sukiya, McDonald's Japan, some Yoshinoya",
        "Lunch: Teishoku, bento, business restaurants",
        "Dinner: Izakaya, gastronomic restaurants, teppanyaki"
      ]
    }
  ];

  const restaurantTypes = [
    {
      type: "Japanese fast-food chains",
      examples: ["Yoshinoya", "Matsuya", "Sukiya"],
      bestFor: "Tight budget, speed, first experience",
      price: "¥300-1000",
      difficulty: "Very easy",
      description: "Restaurants with vending machines, simple menus and clearly displayed prices."
    },
    {
      type: "Kaiten-zushi (conveyor belt sushi)",
      examples: ["Sushiro", "Kura Sushi", "Hama Sushi"],
      bestFor: "Sushi discovery, families, budget control",
      price: "¥100-300/plate",
      difficulty: "Easy",
      description: "Intuitive conveyor belt system, multilingual tablets, fixed prices by plate color."
    },
    {
      type: "Family restaurants",
      examples: ["Gusto", "Saizeriya", "Jonathan's"],
      bestFor: "Groups, varied menu, casual atmosphere",
      price: "¥800-2000",
      difficulty: "Easy",
      description: "Tablet menus, wide choice of dishes, table service, suitable for non-Japanese speakers."
    },
    {
      type: "Specialized ramen-ya",
      examples: ["Ichiran", "Ippudo", "local restaurants"],
      bestFor: "Authentic ramen experience, quick meal",
      price: "¥800-1500",
      difficulty: "Medium",
      description: "Specialized in ramen, often with vending machines, some with individual booths."
    },
    {
      type: "Traditional izakaya",
      examples: ["Torikizoku", "Watami", "local establishments"],
      bestFor: "Social experience, cultural discovery, evening",
      price: "¥2000-4000",
      difficulty: "Difficult",
      description: "Authentic Japanese atmosphere, voice ordering, variety of small dishes and alcohol."
    },
    {
      type: "High-end restaurants",
      examples: ["Sushi Jiro", "Kappo", "Kaiseki"],
      bestFor: "Special occasions, gastronomic experience",
      price: "¥8000-30000+",
      difficulty: "Very difficult",
      description: "Reservation required, strict etiquette, often no English, deep cultural experience."
    }
  ];

  const practicalTips = [
    {
      title: "Recognize a good Japanese restaurant",
      icon: Award,
      tips: [
        "Queue of locals = generally good sign",
        "Laminated menu with photos = accessible to foreigners",
        "Vending machine = simple and economical system",
        "Multilingual tablets = easy ordering",
        "Food samples in window = helps decision making"
      ]
    },
    {
      title: "Avoid tourist traps",
      icon: MapPin,
      tips: [
        "Avoid restaurants with touts",
        "Be wary if menu is only in English near tourist sites",
        "Excessively high prices without quality justification",
        "Complete absence of Japanese customers",
        "Pressure to order quickly"
      ]
    },
    {
      title: "Dietary adaptation",
      icon: Heart,
      tips: [
        "Vegetarian: Saizeriya, some kaiten-zushi (inari, cucumber)",
        "Halal: look for certification, avoid pork and alcohol in cooking",
        "Allergies: prepare explanatory cards in Japanese",
        "Vegan: more difficult, favor specialized restaurants",
        "Translation apps for ingredients"
      ]
    }
  ];

  const budgetGuide = [
    {
      budget: "Small budget (¥500-1500/meal)",
      recommendations: [
        "Gyudon: Yoshinoya, Sukiya, Matsuya",
        "Kaiten-zushi: Sushiro, Hama Sushi",
        "Bento: konbini (Seven-Eleven, Lawson)",
        "Udon/Soba: Marugame Seimen, Hanamaru"
      ]
    },
    {
      budget: "Medium budget (¥1500-3000/meal)",
      recommendations: [
        "Family restaurants: Gusto, Saizeriya",
        "Premium ramen: Ippudo, Ichiran",
        "Tonkatsu: specialized chains",
        "Japanese curry: CoCo Ichibanya"
      ]
    },
    {
      budget: "High budget (¥3000+/meal)",
      recommendations: [
        "Traditional sushi: local sushi-ya",
        "Kaiseki: refined traditional cuisine",
        "Teppanyaki: culinary show",
        "Wagyu: restaurants specialized in premium beef"
      ]
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
            <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">How to Choose a Japanese Restaurant?</h1>
              <p className="text-lg text-gray-600">Complete guide to make the right choice based on your situation</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Introduction */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="prose prose-red max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              With more than <strong>380,000 restaurants</strong> in Japan, choosing where to eat can seem 
              intimidating. This guide helps you select the perfect Japanese restaurant according to your 
              budget, tastes, group and comfort level with Japanese culture.
            </p>
            
            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-red-900 mb-3">🎯 What you'll learn:</h3>
              <ul className="text-red-800 space-y-1">
                <li>• <strong>4 key factors</strong> for choosing a Japanese restaurant</li>
                <li>• <strong>6 types</strong> of restaurants from simplest to most complex</li>
                <li>• <strong>Practical tips</strong> to avoid traps</li>
                <li>• <strong>Budget guide</strong> with specific recommendations</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Decision factors */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            The 4 Key Factors for Choosing
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {decisionFactors.map((factor, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 ${factor.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                    <factor.icon className={`w-6 h-6 ${factor.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{factor.title}</h3>
                </div>
                
                <ul className="space-y-2">
                  {factor.factors.map((item, i) => (
                    <li key={i} className="text-gray-700 text-sm flex items-start">
                      <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Restaurant types */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Restaurant Types by Difficulty Level
          </h2>
          
          <div className="space-y-6">
            {restaurantTypes.map((restaurant, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="grid lg:grid-cols-4 gap-4 items-center">
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{restaurant.type}</h3>
                    <div className="flex flex-wrap gap-1">
                      {restaurant.examples.map((example, i) => (
                        <span key={i} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Best for:</div>
                    <div className="text-sm text-gray-900 font-medium">{restaurant.bestFor}</div>
                  </div>
                  
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Price:</div>
                    <div className="text-sm text-green-600 font-semibold">{restaurant.price}</div>
                    <div className="text-sm text-gray-600 mt-1">Difficulty:</div>
                    <div className={`text-sm font-medium ${
                      restaurant.difficulty === 'Very easy' ? 'text-green-600' :
                      restaurant.difficulty === 'Easy' ? 'text-blue-600' :
                      restaurant.difficulty === 'Medium' ? 'text-yellow-600' :
                      restaurant.difficulty === 'Difficult' ? 'text-orange-600' : 'text-red-600'
                    }`}>
                      {restaurant.difficulty}
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm text-gray-700">{restaurant.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practical tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Practical Tips
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {practicalTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <tip.icon className="w-6 h-6 text-blue-600 mr-2" />
                  <h3 className="text-lg font-bold text-gray-900">{tip.title}</h3>
                </div>
                
                <ul className="space-y-2">
                  {tip.tips.map((item, i) => (
                    <li key={i} className="text-gray-700 text-sm flex items-start">
                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Budget guide */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Budget Guide and Recommendations
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {budgetGuide.map((guide, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{guide.budget}</h3>
                
                <ul className="space-y-3">
                  {guide.recommendations.map((rec, i) => (
                    <li key={i} className="text-gray-700 text-sm">
                      <strong className="text-gray-900">{rec.split(': ')[0]}:</strong>
                      <span className="ml-1">{rec.split(': ')[1]}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Conclusion */}
        <section className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Summary: Your Checklist for Choosing
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">🎯 Questions to ask yourself:</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• What is my budget per meal?</li>
                <li>• Am I alone or in a group?</li>
                <li>• Do I want an authentic or practical experience?</li>
                <li>• Do I have dietary restrictions?</li>
                <li>• Am I comfortable with the language barrier?</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">✅ Recommendations for beginners:</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• <strong>First trip:</strong> Chains with vending machines (Yoshinoya, Sukiya)</li>
                <li>• <strong>Sushi:</strong> Kaiten-zushi (Sushiro, Kura Sushi)</li>
                <li>• <strong>Family:</strong> Family restaurants (Gusto, Saizeriya)</li>
                <li>• <strong>Experience:</strong> Specialized ramen (Ichiran, Ippudo)</li>
                <li>• <strong>Gastronomy:</strong> Book in advance, learn about etiquette</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
