import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Heart, Flame, Crown } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Botejyu ぼてぢゅう | Okonomiyaki Inventor | JapanChains",
  description: "Inventor of okonomiyaki mayonnaise and Modan-yaki. History, menu, specialties since 1946.",
  keywords: [
    'botejyu', 'ぼてぢゅう', 'okonomiyaki', 'modan-yaki', 'mayonnaise okonomiyaki',
    'osaka cuisine', 'konamon', 'takoyaki', 'teppanyaki', 'restaurant osaka',
    'original okonomiyaki', 'mayonnaise invention', 'takarazuka'
  ],
  openGraph: {
    title: "Botejyu ぼてぢゅう | Okonomiyaki Inventor | JapanChains",
    description: "Inventor of okonomiyaki mayonnaise and Modan-yaki. History, menu, specialties since 1946.",
    type: 'article',
    locale: "en_US",
    siteName: "JapanChains - Your Guide to Japanese Restaurants"
  },
  alternates: {
    canonical: '/chaines/botejyu',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  },
};

export default function BotejyuPage() {
  const menuCategories = [
    {
      name: "Classic Okonomiyaki",
      japanese: "定番お好み焼き",
      items: [
        {
          name: "Pork Okonomiyaki",
          japanese: "豚お好み焼き",
          price: "¥950",
          description: "The timeless classic with pork, cabbage, and Botejyu's essential mayonnaise",
          isSignature: true,
          isPopular: false,
          isVegetarian: false,
          isInvention: false
        },
        {
          name: "Seafood Okonomiyaki",
          japanese: "海鮮お好み焼き",
          price: "¥1,280",
          description: "Shrimp, squid, and scallops with special sauce and white mayonnaise",
          isSignature: false,
          isPopular: true,
          isVegetarian: false,
          isInvention: false
        },
        {
          name: "Vegetarian Okonomiyaki",
          japanese: "野菜お好み焼き",
          price: "¥850",
          description: "Vegetarian version with seasonal vegetables and mushrooms",
          isSignature: false,
          isPopular: false,
          isVegetarian: true,
          isInvention: false
        },
        {
          name: "Botejyu Special Okonomiyaki",
          japanese: "ぼてぢゅうスペシャル",
          price: "¥1,480",
          description: "The signature creation with wagyu beef, shrimp, and scallops",
          isSignature: true,
          isPopular: false,
          isVegetarian: false,
          isInvention: false
        }
      ]
    },
    {
      name: "Modan-yaki (Botejyu Invention)",
      japanese: "モダン焼き（ぼてぢゅう発明）",
      items: [
        {
          name: "Original Modan-yaki",
          japanese: "元祖モダン焼き",
          price: "¥1,180",
          description: "The revolutionary invention: okonomiyaki + yakisoba, born from workers' meals",
          isSignature: true,
          isPopular: false,
          isVegetarian: false,
          isInvention: true
        },
        {
          name: "Deluxe Modan-yaki",
          japanese: "デラックスモダン焼き",
          price: "¥1,580",
          description: "Premium version with seafood and premium beef",
          isSignature: false,
          isPopular: true,
          isVegetarian: false,
          isInvention: false
        },
        {
          name: "Spicy Modan-yaki",
          japanese: "辛口モダン焼き",
          price: "¥1,280",
          description: "With kimchi sauce and Korean spices for spicy food lovers",
          isSignature: false,
          isPopular: false,
          isVegetarian: false,
          isInvention: false
        }
      ]
    },
    {
      name: "Teppanyaki & Specialties",
      japanese: "鉄板焼き・名物",
      items: [
        {
          name: "Botejyu Takoyaki (8 pieces)",
          japanese: "ぼてぢゅうたこ焼き",
          price: "¥680",
          description: "Authentic Osaka takoyaki with fresh octopus and homemade sauce",
          isSignature: false,
          isPopular: false,
          isVegetarian: false,
          isInvention: false
        },
        {
          name: "Osaka Style Yakisoba",
          japanese: "大阪風焼きそば",
          price: "¥780",
          description: "Stir-fried noodles with vegetables and special Worcestershire sauce",
          isSignature: false,
          isPopular: false,
          isVegetarian: false,
          isInvention: false
        },
        {
          name: "Teppanyaki Beef",
          japanese: "鉄板焼きビーフ",
          price: "¥1,980",
          description: "Japanese beef grilled on a hot plate with vegetables",
          isSignature: false,
          isPopular: false,
          isVegetarian: false,
          isInvention: false
        },
        {
          name: "Ika-yaki (Grilled Squid)",
          japanese: "いか焼き",
          price: "¥580",
          description: "Whole grilled squid, an Osaka street food specialty",
          isSignature: false,
          isPopular: false,
          isVegetarian: false,
          isInvention: false
        }
      ]
    }
  ];

  const historicalTimeline = [
    {
      year: "1946",
      event: "Founding in Tamade",
      japanese: "玉出創業",
      description: "Nishino Eikichi and his wife open the first Botejyu in the working-class district of Tamade, Osaka"
    },
    {
      year: "1953",
      event: "Expansion to Soemoncho",
      japanese: "宗右衛門町進出",
      description: "Opening in the entertainment district, gaining popularity"
    },
    {
      year: "1955",
      event: "Mayonnaise Revolution",
      japanese: "マヨネーズ革命",
      description: "Takarazuka actresses popularize okonomiyaki with mayonnaise - an invention that would change Japanese cuisine"
    },
    {
      year: "1960s",
      event: "Creation of Modan-yaki",
      japanese: "モダン焼き誕生",
      description: "Born from workers' meals: okonomiyaki + yakisoba = 'Mori-dakusan-yaki' became 'Modan-yaki'"
    },
    {
      year: "1965",
      event: "Tokyo Expansion",
      japanese: "東京進出",
      description: "First restaurant in Shibuya, bringing okonomiyaki culture to Kanto"
    },
    {
      year: "Present",
      event: "International Empire",
      japanese: "国際展開",
      description: "Restaurants worldwide, guardians of Osaka's okonomiyaki tradition"
    }
  ];

  const cookingSecrets = [
    {
      title: "The Science of the Iron Plate",
      japanese: "鉄板の科学",
      description: "Thick plates maintaining 140°C+ for the perfect Maillard reaction",
      icon: "🔥"
    },
    {
      title: "Secret Dashi Batter",
      japanese: "秘伝の出汁生地",
      description: "Wheat flour + mountain yam + natural broth (bonito, kombu, shrimp)",
      icon: "🍜"
    },
    {
      title: "Special White Mayonnaise",
      japanese: "特製白マヨネーズ",
      description: "Less acidic, softer mayonnaise, specially developed for okonomiyaki",
      icon: "🥄"
    },
    {
      title: "'Bote-Juu' Cooking Technique",
      japanese: "ぼてぢゅう調理法",
      description: "Characteristic sound: 'Bote' (flip) + 'Juu' (sizzle) = perfection",
      icon: "👨‍🍳"
    }
  ];

  const sauceComponents = [
    {
      name: "Botejyu Original Sauce",
      japanese: "ぼてぢゅうオリジナルソース",
      description: "30+ spices, vegetables, fruits, tamari Worcester sauce - oil-free, reduced salt",
      color: "border-orange-400 bg-orange-50"
    },
    {
      name: "Osaka White Mayonnaise",
      japanese: "大阪白マヨネーズ",
      description: "Less acidic than classic mayo, mild and creamy taste perfect for okonomiyaki",
      color: "border-yellow-400 bg-yellow-50"
    },
    {
      name: "Japanese Mustard",
      japanese: "和からし",
      description: "A hint of spice that balances the richness of sauce and mayonnaise",
      color: "border-green-400 bg-green-50"
    },
    {
      name: "Katsuobushi (Dried Bonito)",
      japanese: "かつお節",
      description: "Dancing flakes that bring umami and visual spectacle",
      color: "border-red-400 bg-red-50"
    }
  ];

  const orderingSteps = [
    {
      step: 1,
      title: "Choose the Specialty",
      japanese: "名物選択",
      description: "Classic Okonomiyaki or Modan-yaki (Botejyu invention)"
    },
    {
      step: 2,
      title: "Main Ingredients",
      japanese: "具材選択",
      description: "Pork, seafood, vegetarian, or Botejyu special"
    },
    {
      step: 3,
      title: "Professional Cooking",
      japanese: "プロ調理",
      description: "The chef prepares in front of you with the 'Bote-Juu' technique"
    },
    {
      step: 4,
      title: "Service on Hot Plate",
      japanese: "熱々サーブ",
      description: "Served on a hot plate to maintain perfect temperature"
    },
    {
      step: 5,
      title: "Tasting with Spatulas",
      japanese: "コテで実食",
      description: "Eat with small spatulas (kote) like Osakans"
    }
  ];

  const culturalSignificance = [
    {
      title: "Mayonnaise Revolution",
      japanese: "マヨネーズ革命",
      description: "Botejyu introduced American mayonnaise to okonomiyaki in 1955. Takarazuka actresses popularized it, creating a national standard.",
      impact: "Today 99% of okonomiyaki in Japan include mayonnaise"
    },
    {
      title: "Birth of Modan-yaki",
      japanese: "モダン焼き誕生",
      description: "Created as a worker's meal (mori-dakusan = hearty), became 'modan' (modern). Symbol of post-war Japanese culinary innovation.",
      impact: "Botejyu registered trademark, copied throughout Japan"
    },
    {
      title: "Konamon Culture",
      japanese: "粉もん文化",
      description: "Botejyu embodies Osaka's 'konamon' (flour-based dishes) tradition, a popular culinary face against Kyoto's haute cuisine.",
      impact: "Ambassador of Osaka's culinary identity"
    },
    {
      title: "Cultural Expansion",
      japanese: "文化発信",
      description: "First to export okonomiyaki outside Kansai (Tokyo 1965), then internationally. Guardian of authenticity against adaptations.",
      impact: "Global reference for authentic okonomiyaki"
    }
  ];

  const practicalInfo = [
    {
      category: "Opening Hours",
      japanese: "営業時間",
      info: "11:00 AM-10:00 PM (varies by restaurant), last orders 9:30 PM"
    },
    {
      category: "Payment Methods",
      japanese: "支払い方法",
      info: "Cash, major credit cards, IC cards, PayPay in some restaurants"
    },
    {
      category: "Reservations",
      japanese: "予約",
      info: "Recommended for premium restaurants, not necessary for casual dining"
    },
    {
      category: "Cooking Plate",
      japanese: "鉄板",
      info: "Service on a hot plate maintained at optimal temperature"
    },
    {
      category: "English Menu",
      japanese: "英語メニュー",
      info: "Available in tourist restaurants (airports, city centers)"
    },
    {
      category: "Recommended Experience",
      japanese: "推奨体験",
      info: "Watch the cooking, eat with spatulas, taste historical inventions"
    }
  ];

  const usefulPhrases = [
    {
      situation: "Ordering Specialties",
      japanese: "名物注文",
      phrases: [
        { french: "Pork okonomiyaki, please", japanese: "豚お好み焼きをお願いします", romaji: "Buta okonomiyaki wo onegaishimasu" },
        { french: "The original Modan-yaki", japanese: "元祖モダン焼きを", romaji: "Ganso modan-yaki wo" },
        { french: "Botejyu Special", japanese: "ぼてぢゅうスペシャル", romaji: "Botejyu supesharu" },
        { french: "With extra mayonnaise", japanese: "マヨネーズ多めで", romaji: "Mayonēzu ōme de" }
      ]
    },
    {
      situation: "About the History",
      japanese: "歴史について",
      phrases: [
        { french: "Is this the original restaurant?", japanese: "こちらが元祖のお店ですか？", romaji: "Kochira ga ganso no omise desu ka?" },
        { french: "Did you invent mayonnaise?", japanese: "マヨネーズは発明されたんですか？", romaji: "Mayonēzu wa hatsumei sareta n desu ka?" },
        { french: "History of Modan-yaki?", japanese: "モダン焼きの歴史は？", romaji: "Modan-yaki no rekishi wa?" },
        { french: "Since what year?", japanese: "何年からですか？", romaji: "Nan-nen kara desu ka?" }
      ]
    },
    {
      situation: "During the Meal",
      japanese: "食事中",
      phrases: [
        { french: "How to eat with spatulas?", japanese: "コテでどう食べますか？", romaji: "Kote de dō tabemasu ka?" },
        { french: "It's very hot!", japanese: "とても熱いです！", romaji: "Totemo atsui desu!" },
        { french: "Delicious, as expected!", japanese: "美味しい、さすがです！", romaji: "Oishii, sasuga desu!" },
        { french: "The texture is perfect", japanese: "食感が完璧です", romaji: "Shokkan ga kanpeki desu" }
      ]
    }
  ];

  return (
    <>
      <ChainViewTracker chainName="botejyu" chainCategory="okonomiyaki" />
      <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50">
        
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-red-700 to-orange-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                ぼてぢゅう
                <span className="block text-2xl md:text-3xl font-normal mt-2 text-orange-100">
                  Botejyu
                </span>
              </h1>
              <p className="text-xl md:text-2xl mb-6 text-orange-100 max-w-4xl mx-auto">
                Original • The Inventor of Modern Okonomiyaki
              </p>
              <p className="text-lg mb-8 text-orange-50 max-w-3xl mx-auto">
                From the 'Bote-Juu' sound of the spatula on the hot plate to a global empire. 
                Since 1946, guardian of Osaka's revolutionary traditions.
              </p>
              
              <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-orange-100">1946</div>
                  <div className="text-sm text-orange-50">Founded Osaka</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-orange-100">1955</div>
                  <div className="text-sm text-orange-50">Mayo Revolution</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-orange-100">1960s</div>
                  <div className="text-sm text-orange-50">Modan-yaki Invention</div>
                </div>
                <div className="bg-white/10 rounded-lg p-4">
                  <div className="text-2xl font-bold text-orange-100">77</div>
                  <div className="text-sm text-orange-50">Years of tradition</div>
                </div>
              </div>
              
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-white text-red-600 px-4 py-2 rounded-full font-semibold">
                  🏆 Mayonnaise Inventor
                </span>
                <span className="bg-white text-red-600 px-4 py-2 rounded-full font-semibold">
                  🍜 Modan-yaki Creator
                </span>
                <span className="bg-white text-red-600 px-4 py-2 rounded-full font-semibold">
                  🔥 Pro Cooking
                </span>
                <span className="bg-white text-red-600 px-4 py-2 rounded-full font-semibold">
                  💰 ¥800-1800
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Menu des Inventions Légendaires
              <span className="block text-lg text-gray-600 mt-2">伝説の発明メニュー</span>
            </h2>
            
            <div className="space-y-12">
              {menuCategories.map((category, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-8 shadow-lg">
                  <h3 className="text-2xl font-bold mb-6 text-red-800">
                    {category.name}
                    <span className="block text-sm font-normal text-gray-600">{category.japanese}</span>
                  </h3>
                  <div className="grid lg:grid-cols-2 gap-6">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="bg-white rounded-lg p-6 shadow-sm relative">
                        {item.isSignature && (
                          <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs px-3 py-1 rounded-full">
                            🏆 Signature
                          </span>
                        )}
                        {item.isInvention && (
                          <span className="absolute -top-2 -left-2 bg-yellow-500 text-white text-xs px-3 py-1 rounded-full">
                            💡 Invention
                          </span>
                        )}
                        {item.isPopular && !item.isSignature && !item.isInvention && (
                          <span className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                            人気
                          </span>
                        )}
                        <div className="flex justify-between items-start mb-3">
                          <h4 className="font-semibold text-gray-900 text-lg">
                            {item.name}
                            {item.isVegetarian && <span className="ml-2 text-green-600">🌱</span>}
                          </h4>
                          <span className="text-xl font-bold text-red-600">{item.price}</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">{item.japanese}</p>
                        <p className="text-gray-700">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Historical Timeline */}
        <section className="py-16 bg-gradient-to-br from-amber-50 to-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Chronologie des Révolutions Culinaires
              <span className="block text-lg text-gray-600 mt-2">料理革命の年表</span>
            </h2>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-red-300"></div>
              
              <div className="space-y-12">
                {historicalTimeline.map((event, index) => (
                  <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                      <div className="bg-white rounded-xl p-6 shadow-lg">
                        <div className="flex items-center mb-3">
                          <span className="text-2xl font-bold text-red-600 mr-3">{event.year}</span>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{event.event}</h3>
                            <p className="text-sm text-gray-600">{event.japanese}</p>
                          </div>
                        </div>
                        <p className="text-gray-700">{event.description}</p>
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

        {/* Cooking Secrets */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Les Secrets de la Maîtrise Botejyu
              <span className="block text-lg text-gray-600 mt-2">ぼてぢゅうの技術秘伝</span>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {cookingSecrets.map((secret, index) => (
                <div key={index} className="bg-gradient-to-br from-orange-50 to-red-50 rounded-xl p-8 shadow-lg">
                  <div className="flex items-center mb-4">
                    <span className="text-4xl mr-4">{secret.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-red-800">{secret.title}</h3>
                      <p className="text-sm text-gray-600">{secret.japanese}</p>
                    </div>
                  </div>
                  <p className="text-gray-700">{secret.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sauce Components */}
        <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              L'Orchestre des Saveurs Botejyu
              <span className="block text-lg text-gray-600 mt-2">ぼてぢゅう味の響き</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              {sauceComponents.map((component, index) => (
                <div key={index} className={`bg-white rounded-xl p-6 shadow-lg border-l-4 ${component.color}`}>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {component.name}
                    <span className="block text-sm font-normal text-gray-600">{component.japanese}</span>
                  </h3>
                  <p className="text-gray-700">{component.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-white rounded-xl p-8 shadow-lg text-center">
              <h3 className="text-2xl font-bold text-red-800 mb-4">La Symphonie Gustative</h3>
              <p className="text-gray-700 max-w-3xl mx-auto">
                Ces quatre éléments, combinés sur la plaque brûlante, créent une symphonie 
                de textures et saveurs impossible à reproduire à la maison. L'art de Botejyu 
                réside dans l'équilibre parfait entre tradition et innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Cultural Significance */}
        <section className="py-16 bg-gradient-to-br from-red-50 to-pink-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Impact Culturel et Historique
              <span className="block text-lg text-gray-600 mt-2">文化的歴史的影響</span>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {culturalSignificance.map((significance, index) => (
                <div key={index} className="bg-white rounded-xl p-8 shadow-lg">
                  <h3 className="text-xl font-bold text-red-800 mb-3">
                    {significance.title}
                    <span className="block text-sm font-normal text-gray-600">{significance.japanese}</span>
                  </h3>
                  <p className="text-gray-700 mb-4">{significance.description}</p>
                  <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-lg p-4">
                    <p className="text-sm font-semibold text-red-800">Impact :</p>
                    <p className="text-sm text-gray-700">{significance.impact}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Ordering Guide */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              L'Expérience Complète Botejyu
              <span className="block text-lg text-gray-600 mt-2">ぼてぢゅう完全体験</span>
            </h2>
            
            <div className="grid md:grid-cols-5 gap-6">
              {orderingSteps.map((step, index) => (
                <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 shadow-lg text-center">
                  <div className="w-12 h-12 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{step.title}</h3>
                  <p className="text-sm text-gray-600 mb-3">{step.japanese}</p>
                  <p className="text-sm text-gray-700">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Useful Phrases */}
        <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Phrases Essentielles chez Botejyu
              <span className="block text-lg text-gray-600 mt-2">ぼてぢゅうで使える日本語</span>
            </h2>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {usefulPhrases.map((section, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-6 text-green-800">
                    {section.situation}
                    <span className="block text-sm font-normal text-gray-600">{section.japanese}</span>
                  </h3>
                  <div className="space-y-4">
                    {section.phrases.map((phrase, phraseIndex) => (
                      <div key={phraseIndex} className="border-l-4 border-green-400 pl-4">
                        <p className="font-medium text-gray-900 mb-1">{phrase.french}</p>
                        <p className="text-lg text-gray-800 mb-1">{phrase.japanese}</p>
                        <p className="text-sm text-gray-600 italic">{phrase.romaji}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Practical Information */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
              Informations Pratiques
              <span className="block text-lg text-gray-600 mt-2">実用情報</span>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {practicalInfo.map((info, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 shadow-lg">
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">
                    {info.category}
                    <span className="block text-sm font-normal text-gray-600">{info.japanese}</span>
                  </h3>
                  <p className="text-gray-700">{info.info}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Links */}
        <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-12 text-gray-900">
              Explore More Osaka Culture
              <span className="block text-lg text-gray-600 mt-2">関連する大阪文化</span>
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Link href="/type-plat/street-food" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group">
                <div className="text-4xl mb-4">🍡</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-red-600">
                  Osaka Street Food
                </h3>
                <p className="text-gray-600">Takoyaki, okonomiyaki and street specialties</p>
              </Link>
              
              <Link href="/guides/culture-etiquette" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group">
                <div className="text-4xl mb-4">🎌</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-red-600">
                  Culture & Etiquette
                </h3>
                <p className="text-gray-600">Japanese traditions and manners</p>
              </Link>
              
              <Link href="/guides/comprendre-culture-japonaise" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group">
                <div className="text-4xl mb-4">🏮</div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-red-600">
                  Understanding Japan
                </h3>
                <p className="text-gray-600">Japanese history and mentality</p>
              </Link>
            </div>
          </div>
        </section>

        {/* Legacy and Global Expansion */}
        <section className="py-16 bg-gradient-to-br from-amber-50 to-yellow-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Botejyu's Global Legacy
              <span className="block text-lg text-gray-600 mt-2">ぼてぢゅうの世界的遺産</span>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
              <div>
                <h3 className="text-2xl font-bold text-orange-800 mb-6">
                  From Tamade to World Kitchens
                  <span className="block text-sm font-normal text-gray-600 mt-1">From Tamade to world kitchens</span>
                </h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    What started as a small restaurant in the working-class district of Tamade 
                    has become a global culinary revolution. Botejyu didn't just 
                    invent dishes - it transformed how the world perceives Japanese cuisine.
                  </p>
                  <p>
                    <strong>International impact:</strong> Today, from the street food of London to 
                    culinary festivals in São Paulo, okonomiyaki with mayonnaise is recognized 
                    as authentically Japanese. This "Japanization" of mayonnaise on okonomiyaki 
                    is directly linked to Botejyu's innovation in 1955.
                  </p>
                  <p>
                    <strong>Guardian of authenticity:</strong> Faced with numerous global adaptations, 
                    Botejyu remains the reference for authentic Osaka okonomiyaki, maintaining 
                    its secret recipes while adapting to local tastes.
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <h4 className="text-xl font-bold text-gray-900 mb-6">
                  "Glocal" Strategy (Global + Local)
                  <span className="block text-sm font-normal text-gray-600">Global expansion with local adaptation</span>
                </h4>
                <div className="space-y-4">
                  <div className="border-l-4 border-orange-400 pl-4">
                    <p className="font-semibold text-orange-800">🌏 Maintaining the Core</p>
                    <p className="text-sm text-gray-700 mt-2">
                      Basic recipes (dashi batter, original sauce, cooking technique) 
                      are identical in all global restaurants.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-red-400 pl-4">
                    <p className="font-semibold text-red-800">🍽️ Local Adaptations</p>
                    <p className="text-sm text-gray-700 mt-2">
                      Local ingredients respectfully integrated: European cheeses, 
                      regional vegetables, halal/vegetarian adaptations.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-green-400 pl-4">
                    <p className="font-semibold text-green-800">🎓 International Training</p>
                    <p className="text-sm text-gray-700 mt-2">
                      Local chefs trained in Japan in authentic techniques before 
                      opening restaurants in their home countries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-3xl mb-3">🏪</div>
                <h4 className="font-bold text-gray-900 mb-2">Global Expansion</h4>
                <p className="text-sm text-gray-600">
                  Restaurants in Asia, Europe, Americas - ambassadors of Osaka culture
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-3xl mb-3">👨‍🍳</div>
                <h4 className="font-bold text-gray-900 mb-2">Continuous Training</h4>
                <p className="text-sm text-gray-600">
                  Continuous training program to maintain authentic standards
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-3xl mb-3">🔬</div>
                <h4 className="font-bold text-gray-900 mb-2">Constant Innovation</h4>
                <p className="text-sm text-gray-600">
                  Continuous R&D: new ingredients, modern techniques, sustainability
                </p>
              </div>
              
              <div className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="text-3xl mb-3">🏆</div>
                <h4 className="font-bold text-gray-900 mb-2">Preserved Heritage</h4>
                <p className="text-sm text-gray-600">
                  77 years of traditions preserved and passed down to new generations
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation Links */}
        <section className="py-12 bg-white border-t border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <Link 
                href="/chaines" 
                className="flex items-center text-gray-600 hover:text-red-600 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Chains
              </Link>
              
              <div className="flex space-x-4">
                <Link 
                  href="/type-plat/street-food" 
                  className="text-red-600 hover:text-red-700 font-medium"
                >
                  Street Food →
                </Link>
                <Link 
                  href="/guides/culture-etiquette" 
                  className="text-red-600 hover:text-red-700 font-medium"
                >
                  Culture →
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
