import Link from 'next/link';
import { Wine, Coffee, Beer, Droplets, Star, ArrowRight, BookOpen, Heart, Globe, Thermometer, Clock, Award } from 'lucide-react';
import GuideViewTracker from '../../../components/GuideViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Japanese Drinks | Sake Shochu | JapanChains',
  description: 'Expert sake, shochu, whisky, beer. Perfect pairings, culture, etiquette.',
  keywords: 'Japanese drinks, sake, nihonshu, shochu, Japanese whisky, Japanese beer, umeshu, chuhai, French guide, Japanese culture, food drink pairing',
  openGraph: {
    title: 'Guide to Japanese Drinks: Sake, Shochu, Beer | JapanChains',
    description: 'Learn to choose and taste Japanese drinks. Complete guide on sake, shochu, Japanese whisky and the art of drinking in Japan.',
    type: 'article',
    url: '/guides/boissons-japonaises',
  },
  alternates: {
    canonical: '/guides/boissons-japonaises',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function JapaneseDrinksPage() {
  const drinkCategories = [
    {
      id: 'sake',
      title: 'Sake (日本酒)',
      subtitle: 'The Liquid Heart of Japan',
      description: 'Rice-based fermented beverage, symbol of Japanese refinement and tradition. Discover the secrets of parallel fermentation and premium classifications.',
      icon: Wine,
      color: 'purple',
      alcohol: '14-16%',
      temp: '5-50°C',
      highlights: [
        'Unique parallel fermentation process',
        'Classifications: Junmai, Ginjo, Daiginjo',
        'Traditional service: cold, warm or hot',
        'Perfect pairings with sushi and Japanese cuisine'
      ]
    },
    {
      id: 'shochu',
      title: 'Shochu (焼酎)',
      subtitle: 'The Spirit of Japanese Terroir',
      description: 'Japanese distilled spirit with multiple faces according to its ingredients: sweet potato, barley, rice. The pure expression of Japanese terroir.',
      icon: Droplets,
      color: 'orange',
      alcohol: '20-45%',
      temp: 'Variable',
      highlights: [
        'Varieties: Imo (potato), Mugi (barley), Kome (rice)',
        'Authentic vs industrial Shochu',
        'Tasting modes: neat, diluted, cocktails',
        'Regional cultural heritage'
      ]
    },
    {
      id: 'whisky',
      title: 'Japanese Whisky',
      subtitle: 'Excellence of Japanese Distillation',
      description: 'World-renowned Japanese whisky, perfect fusion between Scottish tradition and Japanese perfectionism. Highball: the revolution of everyday whisky.',
      icon: Coffee,
      color: 'amber',
      alcohol: '40-43%',
      temp: 'With ice',
      highlights: [
        'Strict 2021 standards for authenticity',
        'Exceptional single malts',
        'Highball culture (whisky-soda)',
        'Iconic brands: Suntory, Nikka'
      ]
    },
    {
      id: 'biere',
      title: 'Japanese Beer',
      subtitle: 'Daily Conviviality',
      description: 'Crystal-clear lagers with pure taste, perfect for the Japanese climate. "Toriaezu biru" - the magic phrase that opens all meals with friends.',
      icon: Beer,
      color: 'yellow',
      alcohol: '3-5%',
      temp: 'Very cold',
      highlights: [
        'Dominant Pilsner style',
        'Social ritual "Toriaezu biru"',
        'Sizes: Dai, Chu, Sho',
        'Freshness and cleanliness above all'
      ]
    }
  ];

  const servingStyles = [
    {
      name: 'Reishu (冷酒)',
      temp: '5-15°C',
      description: 'Sake served cold, ideal for aromatic ginjo',
      icon: '❄️'
    },
    {
      name: 'Hiya (冷や)',
      temp: '20-25°C',
      description: 'Room temperature, reveals natural balance',
      icon: '🌡️'
    },
    {
      name: 'Kanzake (燗酒)',
      temp: '35-50°C',
      description: 'Heated sake, enriches junmai flavors',
      icon: '🔥'
    }
  ];

  const pairingPrinciples = [
    {
      type: 'Harmony (調和)',
      description: 'Combine similar flavors to create unity',
      examples: [
        'Delicate sushi + Crystalline Ginjo sake',
        'Soy ramen + Umami Junmai sake',
        'Salt yakitori + Dry and light sake'
      ],
      icon: '🤝'
    },
    {
      type: 'Contrast (補完)',
      description: 'Use opposition to cleanse and refresh',
      examples: [
        'Fatty karaage + Sparkling Highball',
        'Oily gyoza + Carbonated beer',
        'Tempura + Acidic or sparkling sake'
      ],
      icon: '⚖️'
    }
  ];

  const etiquetteRules = [
    {
      rule: 'Kanpai (乾杯)',
      description: 'Wait until everyone is served before toasting',
      tip: 'Place your glass lower than that of your elders',
      icon: '🥂'
    },
    {
      rule: 'Oshaku (お酌)',
      description: 'Serve others, never serve yourself',
      tip: 'Hold the bottle with both hands, label visible',
      icon: '🍶'
    },
    {
      rule: 'Otoshi (お通し)',
      description: 'Automatic appetizer charged as cover charge',
      tip: 'Don\'t refuse, it\'s included in the experience',
      icon: '🍤'
    }
  ];

  const vocabularyGuide = [
    { japanese: '日本酒', romaji: 'Nihonshu', english: 'Authentic Japanese sake' },
    { japanese: '醸造酒', romaji: 'Jōzōshu', english: 'Fermented beverage' },
    { japanese: '蒸留酒', romaji: 'Jōryūshu', english: 'Distilled spirit' },
    { japanese: '純米', romaji: 'Junmai', english: 'Pure rice sake (no added alcohol)' },
    { japanese: '吟醸', romaji: 'Ginjō', english: 'Premium sake polished to 60% minimum' },
    { japanese: '大吟醸', romaji: 'Daiginjō', english: 'Ultra-premium sake polished to 50% minimum' },
    { japanese: '焼酎', romaji: 'Shōchū', english: 'Japanese distilled spirit' },
    { japanese: '芋/麦/米', romaji: 'Imo/Mugi/Kome', english: 'Sweet potato/Barley/Rice' },
    { japanese: '水割り', romaji: 'Mizuwari', english: 'Diluted with cold water' },
    { japanese: 'お湯割り', romaji: 'Oyuwari', english: 'Diluted with hot water' },
    { japanese: '梅酒', romaji: 'Umeshu', english: 'Plum liqueur' },
    { japanese: 'チューハイ', romaji: 'Chūhai', english: 'Canned cocktail' }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        icon: 'text-purple-600',
        accent: 'bg-purple-600'
      },
      orange: {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        icon: 'text-orange-600',
        accent: 'bg-orange-600'
      },
      amber: {
        bg: 'bg-amber-50',
        border: 'border-amber-200',
        icon: 'text-amber-600',
        accent: 'bg-amber-600'
      },
      yellow: {
        bg: 'bg-yellow-50',
        border: 'border-yellow-200',
        icon: 'text-yellow-600',
        accent: 'bg-yellow-600'
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <>
      <GuideViewTracker guideName="boissons-japonaises" />
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex space-x-2 text-sm">
              <Link href="/" className="text-gray-500 hover:text-red-600">Home</Link>
              <span className="text-gray-400">→</span>
              <Link href="/guides" className="text-gray-500 hover:text-red-600">Practical Guides</Link>
              <span className="text-gray-400">→</span>
              <span className="text-gray-900">Japanese Drinks</span>
            </nav>
          </div>
        </div>

        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <Wine className="w-16 h-16 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                The Art of Japanese Beverages
              </h1>
              <p className="text-xl text-purple-100 mb-8 max-w-4xl mx-auto">
                Discover the fascinating world of Japanese beverages: from refined sake to authentic shochu, 
                master Japan's drinking culture with expert guidance.
              </p>
              <div className="text-sm text-purple-200 japanese-text">
                日本の酒文化完全ガイド
              </div>
            </div>
          </div>
        </div>

        {/* Philosophical introduction */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
              A Philosophy of Drinking
            </h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p className="text-xl leading-relaxed mb-6">
                Just as wine in France reveals the soul of terroir, Japanese beverages tell 
                the story of a nation, its values and its relationship with nature. This guide invites 
                you to discover not only <strong>how to drink</strong>, but <strong>why</strong> 
                each sip carries centuries of tradition and innovation.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="font-bold text-purple-900 mb-3">🍶 Fermentation (醸造)</h3>
                  <p className="text-gray-700">
                    Sake and beer reveal Japanese patience. Sake's parallel fermentation, 
                    a technique unique in the world, symbolizes harmony between nature and human craftsmanship.
                  </p>
                </div>
                <div className="bg-orange-50 p-6 rounded-lg">
                  <h3 className="font-bold text-orange-900 mb-3">🔥 Distillation (蒸留)</h3>
                  <p className="text-gray-700">
                    Shochu and Japanese whisky embody the quest for purity. Each distillation captures 
                    the very essence of ingredients, from terroir to spirit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main categories */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            The Four Pillars of Japanese Beverages
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {drinkCategories.map((category) => {
              const colors = getColorClasses(category.color);
              const IconComponent = category.icon;
              return (
                <div key={category.id} className={`${colors.bg} ${colors.border} border-2 rounded-xl p-8 hover:shadow-lg transition-shadow`}>
                  <div className="flex items-center mb-6">
                    <div className="bg-white p-4 rounded-lg mr-4">
                      <IconComponent className={`w-8 h-8 ${colors.icon}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                      <p className="text-lg text-gray-600">{category.subtitle}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-6">{category.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="flex items-center">
                      <Droplets className="w-4 h-4 text-blue-500 mr-2" />
                      <span className="text-sm text-gray-600">Alcohol: {category.alcohol}</span>
                    </div>
                    <div className="flex items-center">
                      <Thermometer className="w-4 h-4 text-red-500 mr-2" />
                      <span className="text-sm text-gray-600">Service: {category.temp}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {category.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <Star className="w-4 h-4 text-yellow-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>

        {/* Service styles */}
        <div className="bg-purple-50 border-t border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              The Art of Service: Temperature and Expression
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Unlike wines that have their optimal temperature, sake reveals different personalities 
              depending on its serving temperature. The same bottle becomes three distinct experiences.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {servingStyles.map((style, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md">
                  <div className="text-4xl mb-4">{style.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{style.name}</h3>
                  <div className="text-2xl font-bold text-purple-600 mb-3">{style.temp}</div>
                  <p className="text-gray-600">{style.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pairing principles */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Master Pairings: Harmony vs Contrast
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pairingPrinciples.map((principle, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-8">
                <div className="flex items-center mb-6">
                  <div className="text-3xl mr-4">{principle.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900">{principle.type}</h3>
                </div>
                <p className="text-gray-600 mb-6">{principle.description}</p>
                <div className="space-y-3">
                  {principle.examples.map((example, i) => (
                    <div key={i} className="flex items-center bg-gray-50 p-3 rounded">
                      <ArrowRight className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Japanese etiquette */}
        <div className="bg-red-50 border-t border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Etiquette: The Social Codes of Drinking
            </h2>
            <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Drinking in Japan is never just an individual act. It's a codified social ritual 
              that strengthens bonds and expresses mutual respect.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {etiquetteRules.map((etiquette, index) => (
                <div key={index} className="bg-white rounded-lg p-6 text-center shadow-md">
                  <div className="text-4xl mb-4">{etiquette.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{etiquette.rule}</h3>
                  <p className="text-gray-600 mb-4">{etiquette.description}</p>
                  <div className="bg-red-50 border border-red-200 rounded p-3">
                    <p className="text-sm text-red-800 font-medium">{etiquette.tip}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Essential vocabulary */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Essential Vocabulary
          </h2>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {vocabularyGuide.map((term, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="japanese-text text-xl font-bold text-gray-900">{term.japanese}</span>
                    <BookOpen className="w-4 h-4 text-gray-400" />
                  </div>
                  <div className="text-sm text-gray-600 italic mb-2">{term.romaji}</div>
                  <div className="text-gray-700">{term.english}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Conclusion and call-to-action */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="text-center">
              <h2 className="text-3xl font-bold mb-6">
                Your Journey Begins Now
              </h2>
              <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
                Armed with this knowledge, you are no longer just a tourist but an enlightened enthusiast, 
                ready to discover the subtleties of Japanese drinking culture.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  href="/chains"
                  className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Explore chains
                </Link>
                <Link
                  href="/guides/culture-etiquette"
                  className="border border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
                >
                  Learn more about etiquette
                </Link>
              </div>
              
              <div className="mt-8 text-purple-200">
                <p className="text-lg japanese-text">乾杯！- Kanpai !</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
