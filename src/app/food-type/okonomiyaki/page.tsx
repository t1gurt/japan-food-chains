import Link from "next/link";
import { ArrowLeft, Clock, MapPin, Star, TrendingUp, Users, History, Award, Utensils, Heart, Crown, Flame } from 'lucide-react';
import CategoryViewTracker from '../../../components/CategoryViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Okonomiyaki (お好み焼き) | Japanese Restaurant Guide',
  description: 'Complete guide to okonomiyaki - Osaka\'s "Japanese pizza". History, techniques, recommended chains and master chef secrets.',
  keywords: [
    'okonomiyaki', 'お好み焼き', 'japanese pizza', 'osaka cuisine',
    'botejyu', 'ぼてぢゅう', 'modan-yaki', 'konamon',
    'mayonnaise okonomiyaki', 'takoyaki', 'teppanyaki',
    'street food osaka', 'osaka cuisine'
  ],
  openGraph: {
    title: 'Okonomiyaki (お好み焼き) | Osaka\'s Japanese Pizza',
    description: 'Discover authentic Osaka okonomiyaki, its historic innovations and the best chains',
    type: 'article',
    url: '/food-type/okonomiyaki',
  },
  alternates: {
    canonical: '/food-type/okonomiyaki',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function OkonomiyakiPage() {
  const chains = [
    {
      name: 'Botejyu',
      nameJp: 'ぼてぢゅう',
      slug: 'botejyu',
      description: 'The legendary inventor of okonomiyaki with mayonnaise and creator of Modan-yaki since 1946',
      specialties: ['Original Okonomiyaki', 'Modan-yaki (Invention)', 'Secret Sauce & Mayonnaise'],
      avgPrice: '¥800-1800',
      popularity: 'Legendary',
      heritage: 'Founded 1946',
      innovation: 'Mayonnaise Revolution 1955',
      locations: 'Original Osaka + International',
      experience: 'Professional cooking + Living history'
    }
  ];

  const okonomiyakiHistory = [
    {
      period: "Edo Period",
      japanese: "江戸時代",
      development: "Funoyaki - The Ancestor",
      description: "Simple pancakes made from flour and water, distant ancestor of okonomiyaki"
    },
    {
      period: "Meiji Era",
      japanese: "明治時代", 
      development: "Yoshokuyaki - Evolution",
      description: "Western influence: addition of eggs and vegetables, approaching the modern form"
    },
    {
      period: "Taishō Period",
      japanese: "大正時代",
      development: "Issen Yoshoku - Precursor",
      description: "Popular version with Worcestershire sauce, popular in working-class districts"
    },
    {
      period: "Post-War",
      japanese: "戦後",
      development: "Modern Okonomiyaki",
      description: "Birth of the current version with abundant cabbage, became a reconstruction dish"
    },
    {
      period: "1946-1955",
      japanese: "ぼてぢゅう革命",
      development: "Botejyu Revolution",
      description: "Botejyu revolutionizes with mayonnaise (1955) and creates Modan-yaki, defining standards"
    },
    {
      period: "Today",
      japanese: "現代",
      development: "Global Culture",
      description: "Culinary symbol of Osaka, exported worldwide, infinite variations"
    }
  ];

  const preparationSecrets = [
    {
      title: "The Magic Batter",
      japanese: "魔法の生地",
      technique: "Precise mixture of flour + dashi + yam",
      secret: "Dashi (broth) in the batter brings deep umami that differentiates real okonomiyaki from imitations",
      icon: "🍜"
    },
    {
      title: "Science of Cabbage",
      japanese: "キャベツの科学", 
      technique: "Specific cutting + perfect timing",
      secret: "Cabbage must be cut into 2-3mm strips, neither too fine (becomes mushy) nor too thick (doesn't cook evenly)",
      icon: "🥬"
    },
    {
      title: "Griddle Mastery",
      japanese: "鉄板の支配",
      technique: "Temperature 140°C + flipping techniques",
      secret: "Flipped only once with spatulas (kote), never pressed - trapped air creates the perfect fluffy texture",
      icon: "🔥"
    },
    {
      title: "The Art of Sauces",
      japanese: "ソースの芸術",
      technique: "Layering of flavors",
      secret: "Okonomiyaki sauce + mayonnaise + katsuobushi + nori - each layer has its precise taste and visual role",
      icon: "🎨"
    }
  ];

  const regionalVariations = [
    {
      region: "Osaka Style",
      japanese: "大阪風",
      description: "'Mix' style - all ingredients mixed into batter before cooking",
      characteristics: ["Batter + ingredients mixed", "Fluffy texture", "Standard mayonnaise", "Sweet sauce"],
      originality: "Dominant style exported worldwide"
    },
    {
      region: "Hiroshima Style", 
      japanese: "広島風",
      description: "'Layer' style - ingredients stacked in distinct layers",
      characteristics: ["Thin base pancake", "Layered vegetables", "Yakisoba included", "More voluminous"],
      originality: "Distinct local tradition but less international"
    },
    {
      region: "Tokyo Modern",
      japanese: "東京モダン",
      description: "Urban adaptations with premium ingredients",
      characteristics: ["Premium seafood", "Imported cheeses", "Organic vegetables", "Refined presentation"],
      originality: "Contemporary innovation for affluent clientele"
    },
    {
      region: "International Fusion",
      japanese: "国際フュージョン",
      description: "Global adaptations with local flavors",
      characteristics: ["Local ingredients", "Adapted sauces", "Modified formats", "Vegetarian/vegan"],
      originality: "Natural evolution for international markets"
    }
  ];

  const culturalSignificance = [
    {
      aspect: "Soul of Osaka",
      japanese: "大阪の魂",
      description: "Okonomiyaki embodies Osaka's spirit: creativity, conviviality, absence of pretension and authentic joy of living."
    },
    {
      aspect: "Reconstruction Cuisine",
      japanese: "復興の料理",
      description: "Born from post-war necessity, symbolizes Japanese resilience and ability to create beauty from simplicity."
    },
    {
      aspect: "Konamon Culture",
      japanese: "粉もん文化",
      description: "Represents popular culture of 'flour-based dishes' against haute cuisine, democratizing culinary pleasure."
    },
    {
      aspect: "Perpetual Innovation",
      japanese: "永続的革新",
      description: "From Botejyu to today, continues to evolve while preserving its roots, model of creative adaptation."
    }
  ];

  const orderingTips = [
    {
      situation: "First Visit",
      japanese: "初回訪問",
      tip: "Start with pork okonomiyaki (classic) to understand the base before exploring",
      phrase: "豚お好み焼きをお願いします (Buta okonomiyaki wo onegaishimasu)"
    },
    {
      situation: "Authentic Experience", 
      japanese: "本格体験",
      tip: "At Botejyu, order the original Modan-yaki to taste the historic invention",
      phrase: "元祖モダン焼きを (Ganso modan-yaki wo)"
    },
    {
      situation: "Self-Cooking",
      japanese: "自分で焼く",
      tip: "If cooking yourself: flip only ONCE and never press down",
      phrase: "自分で焼きたいです (Jibun de yakitai desu)"
    },
    {
      situation: "Sides",
      japanese: "付け合わせ",
      tip: "Cold beer or green tea balances the richness - avoid sweet drinks",
      phrase: "ビールも一緒に (Bīru mo issho ni)"
    }
  ];

  const nutritionalInfo = [
    {
      component: "Cabbage (Main)",
      benefits: ["Vitamin C", "Fiber", "Low calories"],
      role: "Healthy nutritional base, texture and freshness"
    },
    {
      component: "Batter (生地)",
      benefits: ["Complex carbs", "Plant proteins"],
      role: "Sustained energy, satiety"
    },
    {
      component: "Proteins",
      benefits: ["Essential amino acids", "Iron (pork)"],
      role: "Muscle building, energy"
    },
    {
      component: "Toppings",
      benefits: ["Calcium (katsuobushi)", "Natural umami"],
      role: "Flavor and nutritional enhancement"
    }
  ];

  return (
    <>
      <CategoryViewTracker categoryName="okonomiyaki" />
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="text-sm">
              <Link href="/" className="text-gray-500 hover:text-red-600">Home</Link>
              <span className="text-gray-400 mx-2">/</span>
              <Link href="/food-type" className="text-gray-500 hover:text-red-600">Food Type</Link>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-red-600 font-medium">Okonomiyaki</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-700 to-orange-600 text-white py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-8">
              <span className="text-6xl mr-4">🥞</span>
              <span className="text-6xl mr-4">🍜</span>
              <span className="text-6xl">🎨</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Okonomiyaki
            </h1>
            <p className="text-2xl mb-4 text-orange-100 japanese-text">お好み焼き</p>
            <p className="text-xl mb-8 text-orange-100">
              Osaka's "Japanese Pizza" - Culinary Revolution since 1946
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">"As You Like It" Philosophy</h2>
              <p className="text-lg text-orange-200">
                "お好み焼き" literally means "grilled as you like it". 
                This revolutionary customization philosophy, born in Osaka, 
                transformed a simple mixture of flour and cabbage into a symbol 
                of culinary creativity and Japanese conviviality.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-semibold">
                Mayonnaise Invention 1955
              </span>
              <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-semibold">
                Modan-yaki Creator
              </span>
              <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold">
                Soul of Osaka
              </span>
              <span className="bg-white text-red-700 px-4 py-2 rounded-full font-semibold">
                ¥800-1800
              </span>
            </div>
          </div>
        </section>

        {/* Historical Evolution */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Historical Evolution of Okonomiyaki
              <span className="block text-lg text-gray-600 mt-2">お好み焼きの歴史的進化</span>
            </h2>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-red-300"></div>
              
              <div className="space-y-12">
                {okonomiyakiHistory.map((era, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                      <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 shadow-lg">
                        <div className="flex items-center mb-3">
                          <div className="mr-4">
                            <h3 className="text-lg font-bold text-red-800">{era.period}</h3>
                            <p className="text-sm text-gray-600">{era.japanese}</p>
                          </div>
                        </div>
                        <h4 className="text-xl font-semibold text-gray-900 mb-2">{era.development}</h4>
                        <p className="text-gray-700">{era.description}</p>
                      </div>
                    </div>
                    
                    <div className="w-8 h-8 bg-red-600 border-4 border-white rounded-full shadow-lg z-10"></div>
                    
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Preparation Secrets */}
        <section className="py-16 bg-gradient-to-br from-amber-50 to-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Mastery Secrets
              <span className="block text-lg text-gray-600 mt-2">お好み焼きマスターの秘密</span>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {preparationSecrets.map((secret, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{secret.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-red-800">{secret.title}</h3>
                      <p className="text-sm text-gray-600">{secret.japanese}</p>
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Technique:</h4>
                    <p className="text-gray-700">{secret.technique}</p>
                  </div>
                  <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-lg p-4">
                    <h4 className="font-semibold text-red-800 mb-2">Master's Secret:</h4>
                    <p className="text-sm text-gray-700">{secret.secret}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Regional Variations */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Regional Variations and Evolution
              <span className="block text-lg text-gray-600 mt-2">地域差と進化</span>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {regionalVariations.map((variation, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-red-800 mb-3">
                    {variation.region}
                    <span className="block text-sm font-normal text-gray-600">{variation.japanese}</span>
                  </h3>
                  <p className="text-gray-700 mb-4">{variation.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Characteristics:</h4>
                    <ul className="space-y-1">
                      {variation.characteristics.map((char, charIndex) => (
                        <li key={charIndex} className="text-sm text-gray-600 flex items-center">
                          <span className="w-2 h-2 bg-red-400 rounded-full mr-2"></span>
                          {char}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-xs font-semibold text-red-700 mb-1">Originality:</p>
                    <p className="text-xs text-gray-600">{variation.originality}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cultural Significance */}
        <section className="py-16 bg-gradient-to-br from-red-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Deep Cultural Significance
              <span className="block text-lg text-gray-600 mt-2">深い文化的意義</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {culturalSignificance.map((significance, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-red-800 mb-3">
                    {significance.aspect}
                    <span className="block text-sm font-normal text-gray-600">{significance.japanese}</span>
                  </h3>
                  <p className="text-gray-700">{significance.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Chains Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Recommended Specialty Chains
              <span className="block text-lg text-gray-600 mt-2">推奨専門チェーン</span>
            </h2>
            
            <div className="space-y-8">
              {chains.map((chain, index) => (
                <Link 
                  key={index}
                  href={`/chains/${chain.slug}`}
                  className="block bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow group"
                >
                  <div className="grid lg:grid-cols-3 gap-8">
                    <div>
                      <h3 className="text-2xl font-bold text-red-800 mb-2 group-hover:text-red-600">
                        {chain.name}
                        <span className="block text-lg font-normal text-gray-600">{chain.nameJp}</span>
                      </h3>
                      <p className="text-gray-700 mb-4">{chain.description}</p>
                      <div className="space-y-2">
                        <div className="flex items-center">
                          <Crown className="w-4 h-4 text-yellow-600 mr-2" />
                          <span className="text-sm font-semibold">{chain.popularity}</span>
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 text-red-600 mr-2" />
                          <span className="text-sm">{chain.avgPrice}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Specialties:</h4>
                      <ul className="space-y-1 mb-4">
                        {chain.specialties.map((specialty, specIndex) => (
                          <li key={specIndex} className="text-sm text-gray-600 flex items-center">
                            <Flame className="w-3 h-3 text-orange-500 mr-2" />
                            {specialty}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-xs font-semibold text-red-700 mb-1">Heritage:</p>
                        <p className="text-xs text-gray-600">{chain.heritage}</p>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-xs font-semibold text-orange-700 mb-1">Innovation:</p>
                        <p className="text-xs text-gray-600">{chain.innovation}</p>
                      </div>
                      <div className="bg-white rounded-lg p-3">
                        <p className="text-xs font-semibold text-gray-700 mb-1">Experience:</p>
                        <p className="text-xs text-gray-600">{chain.experience}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Ordering Tips */}
        <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Expert Ordering Tips
              <span className="block text-lg text-gray-600 mt-2">注文のコツ</span>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {orderingTips.map((tip, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold text-green-800 mb-3">
                    {tip.situation}
                    <span className="block text-sm font-normal text-gray-600">{tip.japanese}</span>
                  </h3>
                  <p className="text-gray-700 mb-4">{tip.tip}</p>
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 rounded-lg p-4">
                    <p className="text-sm font-semibold text-green-800 mb-1">Useful phrase:</p>
                    <p className="text-lg text-gray-800">{tip.phrase}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nutritional Benefits */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Nutritional Aspects
              <span className="block text-lg text-gray-600 mt-2">栄養面の特徴</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {nutritionalInfo.map((info, index) => (
                <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-bold text-blue-800 mb-3">{info.component}</h3>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {info.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">
                          <span className="w-2 h-2 bg-blue-400 rounded-full mr-2"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-white rounded-lg p-3">
                    <p className="text-xs font-semibold text-blue-700 mb-1">Role:</p>
                    <p className="text-xs text-gray-600">{info.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-12 text-gray-900">
              Explore More
              <span className="block text-lg text-gray-600 mt-2">関連コンテンツ</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/chains/botejyu" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group">
                <div className="text-4xl mb-4">🏆</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-red-600">
                  Botejyu - The Inventor
                </h3>
                <p className="text-gray-600">The legendary restaurant that created modern okonomiyaki</p>
              </Link>
              
              <Link href="/food-type/street-food" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group">
                <div className="text-4xl mb-4">🍡</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-red-600">
                  Osaka Street Food
                </h3>
                <p className="text-gray-600">Takoyaki and other Osaka street specialties</p>
              </Link>
              
              <Link href="/guides/culture-etiquette" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group">
                <div className="text-4xl mb-4">🎌</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-red-600">
                  Culture & Etiquette
                </h3>
                <p className="text-gray-600">Understanding Japanese traditions and etiquette</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <section className="py-12 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <Link 
                href="/food-type" 
                className="flex items-center text-gray-600 hover:text-red-600 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Food Types
              </Link>
              
              <div className="flex space-x-4">
                <Link 
                  href="/chains/botejyu" 
                  className="text-red-600 hover:text-red-700 font-medium"
                >
                  View Botejyu →
                </Link>
                <Link 
                  href="/food-type/street-food" 
                  className="text-red-600 hover:text-red-700 font-medium"
                >
                  Street Food →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
