import { Metadata } from 'next';
import Link from 'next/link';
import ChainViewTracker from '@/components/ChainViewTracker';

export const metadata: Metadata = {
  title: 'Futago ふたご | Premium Osaka Yakiniku | JapanChains',
  description: 'Osaka yakiniku revolution. "Hasami-deru Kalbi", premium service, exceptional offal.',
  keywords: [
    'futago', 'ふたご', 'premium yakiniku', 'hasami-deru kalbi', 'offal',
    'osaka yakiniku', 'Japanese restaurant', 'premium Japanese barbecue',
    'premium service', 'yakiniku revolution'
  ],
  openGraph: {
    title: 'Futago: The Revolutionary Osaka Yakiniku | JapanChains',
    description: 'Guide to Futago restaurant. Discover the "Hasami-deru Kalbi" that overflows the grill and the "mouth-to-mouth" service.',
    type: 'article',
    url: '/chains/futago',
  },
  alternates: {
    canonical: '/chains/futago',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function FutagoPage() {
  const signatureMenuItems = [
    {
      category: "🥩 Futago Signatures - Exclusives",
      items: [
        { 
          name: "Hasami-deru Kalbi (はみ出るカルビ)", 
          price: "¥2,890 → ¥1,445", 
          description: "THE iconic dish - 250g A5 wagyu kalbi that spectacularly overflows the grill. Reservation required.",
          highlight: "⭐ SIGNATURE" as const
        },
        { 
          name: "Futago-mori (ふたご盛り)", 
          price: "¥1,680 → ¥840", 
          description: "Assortment of daily offal (4-5 varieties) - Perfect for discovering diverse textures.",
          highlight: "🎯 DISCOVERY" as const
        },
        { 
          name: "Hasami-detai Harami (はみ出たいハラミ)", 
          price: "¥1,580 → ¥790", 
          description: "Mega-size harami with signature teriyaki sauce - The savory challenge.",
          highlight: "💪 CHALLENGE" as const
        },
        { 
          name: "Tsutsumeru Wagyu Sirloin (包める和牛サーロイン)", 
          price: "¥2,480 → ¥1,240", 
          description: "'Nikufest' Champion - Ultra-thin sliced A4/A5, fresh negi, grated daikon, ponzu sauce.",
          highlight: "🏆 CHAMPION" as const
        }
      ]
    },
    {
      category: "🫀 Premium Offal - The Art of Giblets",
      items: [
        { 
          name: "Hoso-shio (ホソ塩)", 
          price: "¥980 → ¥490", 
          description: "Salted beef small intestine - Juicy and tender, rich in collagen.",
          highlight: ""
        },
        { 
          name: "Yamerarenai Mino (やめられないミノ)", 
          price: "¥880 → ¥440", 
          description: "'Irresistible' first stomach - Addictively crispy texture.",
          highlight: ""
        },
        { 
          name: "Maboroshi no Harami (幻のハラミ)", 
          price: "¥1,280 → ¥640", 
          description: "Rare pork diaphragm - Exceptional tenderness and deep flavor.",
          highlight: ""
        },
        { 
          name: "Tomaranai Ago-niku (とまらないあご肉)", 
          price: "¥980 → ¥490", 
          description: "'Unstoppable' beef cheek - Intense umami, gelatinous texture.",
          highlight: ""
        }
      ]
    },
    {
      category: "🍜 Sides & Finishers",
      items: [
        { 
          name: "Hangoroshi Kimchi (半殺しキムチ)", 
          price: "¥580 → ¥290", 
          description: "'Half-crushed' vegetable kimchi using Nagano technique - Perfect fermentation.",
          highlight: ""
        },
        { 
          name: "Hitokuchi Reimen (一口冷麺)", 
          price: "¥680 → ¥340", 
          description: "Single-bite cold noodles - 12-ingredient broth simmered for 8h, Iwate noodles.",
          highlight: ""
        },
        { 
          name: "Omoni no Tail Soup (オモニの自家製テールスープ)", 
          price: "¥780 → ¥390", 
          description: "Founding mother's homemade oxtail soup - Secret family recipe.",
          highlight: ""
        }
      ]
    }
  ];

  const experienceSteps = [
    {
      step: "1. Essential Reservation",
      description: "Absolutely necessary for the 'Hasami-deru Kalbi' - Almost sold out daily",
      tip: "Book 2-3 days in advance to guarantee the signature dish"
    },
    {
      step: "2. The 'Futago Style' Welcome",
      description: "Relaxed retro atmosphere, 2000s J-Pop music, restored vintage gas counter",
      tip: "Store coats in the baskets under the table to avoid odors"
    },
    {
      step: "3. The 'Mouth-to-Mouth' Service",
      description: "The staff cooks EVERYTHING to perfection in front of you - Zero cooking stress",
      tip: "Enjoy the show: it's culinary entertainment!"
    },
    {
      step: "4. The Big 'Yoisho!' Moment",
      description: "Signature cry of the staff when flipping the Hasami-deru Kalbi",
      tip: "Participate in the atmosphere: applaud and film this unique moment!"
    }
  ];

  const culturalBackground = [
    {
      title: "🏮 History of the Futago Brothers",
      content: "Founded in 2010 by twins Lee Soon-chul and Lee Soon-bong, originally from Tsuruhashi (Osaka), a historic yakiniku district. From their small 13-tsubo restaurant in Gotanda to international expansion (Taiwan 2014, NYC with Michelin star).",
      highlight: "From local to global in 4 years"
    },
    {
      title: "🎯 'Futago Style' Philosophy",
      content: "6 revolutionary pillars: 'Half quantity, half price' to multiply discoveries + 'Mouth-to-mouth service' for a stress-free experience. Total innovation of the traditional yakiniku model.",
      highlight: "Customer experience revolution"
    },
    {
      title: "🔥 Art of Offal",
      content: "Specialists in offal (giblets) with a French gastronomic approach. Transformation of the 'mottainai' concept (nothing wasted) into a refined culinary experience, comparable to the best French 'abats'.",
      highlight: "Franco-Japanese cultural bridge"
    }
  ];

  const hormoneDictionary = [
    { 
      japanese: "ミノ (Mino)", 
      french: "1st stomach", 
      description: "Firm crunchy texture, delicate flavor", 
      equivalent: "Tripe/Honeycomb tripe",
      difficulty: "Beginner"
    },
    { 
      japanese: "ハチノス (Hachinosu)", 
      french: "2nd stomach", 
      description: "'Honeycomb' appearance, unique soft texture", 
      equivalent: "Honeycomb tripe",
      difficulty: "Intermediate"
    },
    { 
      japanese: "センマイ (Senmai)", 
      french: "3rd stomach", 
      description: "Light crunchy texture, often served as sashimi", 
      equivalent: "Book tripe/Omasum",
      difficulty: "Beginner"
    },
    { 
      japanese: "シマチョウ (Shimacho)", 
      french: "Large intestine", 
      description: "Elastic 'spring' texture, rich in savory fat", 
      equivalent: "Large intestine",
      difficulty: "Expert"
    },
    { 
      japanese: "ハラミ (Harami)", 
      french: "Diaphragm", 
      description: "Looks like red meat but classified as offal - Tender and juicy", 
      equivalent: "Skirt steak/Hanger steak",
      difficulty: "Beginner"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ChainViewTracker chainName="futago" chainCategory="yakiniku" />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-red-600">Home</Link>
            <span className="text-gray-400 mx-2">/</span>
            <Link href="/dish-types/yakiniku" className="text-gray-500 hover:text-red-600">Yakiniku</Link>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-red-600 font-medium">Futago</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-800 via-orange-700 to-amber-600 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <span className="text-6xl mr-4">🔥</span>
            <span className="text-6xl mr-4">🥩</span>
            <span className="text-6xl">✨</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            FUTAGO
          </h1>
          <p className="text-2xl mb-4 text-orange-100 japanese-text">ふたご - 大阪焼肉・ホルモン</p>
          <p className="text-xl mb-8 text-orange-100">
            The Premium Yakiniku Revolution of Osaka
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">"Transforming yakiniku from a mere meal into unforgettable 'food entertainment'."</h2>
            <p className="text-lg text-orange-200">
              From twin brothers in Osaka who revolutionized the yakiniku experience: 
              the legendary "Hasami-deru Kalbi" (カルビがはみ出る) that overflows the grill, 
              the "mouth-to-mouth" service, and the gastronomic art of offal.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-red-100 text-red-800 px-4 py-2 rounded-full font-semibold">
              Hasami-deru Kalbi
            </span>
            <span className="bg-orange-100 text-orange-800 px-4 py-2 rounded-full font-semibold">
              Premium Service
            </span>
            <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold">
              Gastronomic Offal
            </span>
            <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
              Culinary Entertainment
            </span>
          </div>
        </div>
      </section>

      {/* Navigation rapide */}
      <section className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8 overflow-x-auto py-4">
            <a href="#signatures" className="text-gray-600 hover:text-red-600 whitespace-nowrap font-medium">Signature Dishes</a>
            <a href="#experience" className="text-gray-600 hover:text-red-600 whitespace-nowrap font-medium">Futago Experience</a>
            <a href="#hormone" className="text-gray-600 hover:text-red-600 whitespace-nowrap font-medium">Offal Guide</a>
            <a href="#histoire" className="text-gray-600 hover:text-red-600 whitespace-nowrap font-medium">History & Culture</a>
            <a href="#pratique" className="text-gray-600 hover:text-red-600 whitespace-nowrap font-medium">Practical Info</a>
          </div>
        </div>
      </section>

      {/* Pricing Innovation Section */}
      <section className="py-12 bg-gradient-to-r from-amber-50 to-orange-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              💡 "Half Quantity, Half Price" Innovation
            </h2>
            <p className="text-lg text-gray-700">
              Futago revolutionizes the yakiniku experience: taste more varieties for the same budget!
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 border border-orange-200 shadow-lg">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="bg-red-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-red-800 mb-3">🎯 Revolutionary Concept</h3>
                <p className="text-red-700">
                  All portions divided by 2<br/>
                  = Price divided by 2<br/>
                  = 2x more discoveries!
                </p>
              </div>
              <div className="bg-orange-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-orange-800 mb-3">🍽️ Concrete Advantages</h3>
                <p className="text-orange-700">
                  Perfect for couples and small groups<br/>
                  Maximum culinary exploration<br/>
                  Optimized budget, doubled pleasure
                </p>
              </div>
              <div className="bg-yellow-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-yellow-800 mb-3">✨ Result</h3>
                <p className="text-yellow-700">
                  From ¥2,890 → ¥1,445<br/>
                  Try 4-5 dishes instead of 2-3<br/>
                  Optimal gastronomic experience
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Menu Section */}
      <section id="signatures" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            🌟 Futago Signature Menu
          </h2>
          
          <div className="space-y-8">
            {signatureMenuItems.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl p-6 border border-red-200">
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                  {category.category}
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                  {category.items.map((item, i) => (
                    <div key={i} className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 mb-1">{item.name}</h4>
                          {item.highlight && (
                            <span className={`text-xs px-2 py-1 rounded-full ${
                              item.highlight === '⭐ SIGNATURE' ? 'bg-red-100 text-red-800' :
                              item.highlight === '🎯 DISCOVERY' ? 'bg-blue-100 text-blue-800' :
                              item.highlight === '💪 CHALLENGE' ? 'bg-green-100 text-green-800' :
                              'bg-yellow-100 text-yellow-800'
                            }`}>
                              {item.highlight}
                            </span>
                          )}
                        </div>
                        <span className="text-red-600 font-bold text-lg ml-4">{item.price}</span>
                      </div>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section Expérience Futago */}
      <section id="experience" className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            🎭 The "Futago Style" Experience
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {experienceSteps.map((step, index) => (
                <div key={index} className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-red-600 mb-3">{step.step}</h3>
                  <p className="text-gray-700 mb-3">{step.description}</p>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <p className="text-sm text-orange-800">
                      <strong>💡 Tip:</strong> {step.tip}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gradient-to-br from-red-800 to-orange-700 text-white rounded-xl p-8">
              <h3 className="text-2xl font-bold mb-6">🔥 The "Mouth-to-Mouth" Service</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-yellow-400 text-xl mr-3">👨‍🍳</span>
                  <div>
                    <h4 className="font-semibold mb-2">Professional Mastery</h4>
                    <p className="text-sm text-red-100">
                      Each piece cooked to perfection by our experts: 
                      wagyu medium-rare, offal caramelized outside, juicy inside.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-400 text-xl mr-3">🎪</span>
                  <div>
                    <h4 className="font-semibold mb-2">Live Entertainment</h4>
                    <p className="text-sm text-red-100">
                      Live culinary show: spectacular flip of the Hasami-deru Kalbi 
                      with the signature "Yoisho!" cry that electrifies the room.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <span className="text-yellow-400 text-xl mr-3">😌</span>
                  <div>
                    <h4 className="font-semibold mb-2">Zero Stress</h4>
                    <p className="text-sm text-red-100">
                      Total focus on conversation and pleasure. 
                      No more fear of burning that ¥3000 wagyu piece!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Guide Hormone */}
      <section id="hormone" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-6">
            🫀 Offal Guide - The Gastronomic Art of Organ Meat
          </h2>
          
          <div className="bg-blue-50 rounded-xl p-8 mb-8 border border-blue-200">
            <h3 className="text-xl font-bold text-blue-900 mb-4">
              🌐 Cultural Bridge: From Western Offal to Japanese Hormone
            </h3>
            <p className="text-blue-800 mb-4">
              Just as France celebrates its andouillettes, tripes and sweetbreads, 
              Japan has developed the art of hormone. Futago elevates this tradition to gastronomic level, 
              transforming "what was thrown away" (放るもの) into sought-after delicacies.
            </p>
            <div className="bg-blue-100 p-4 rounded-lg">
              <p className="text-blue-900 text-sm">
                <strong>🧠 "Mottainai" Philosophy:</strong> Waste nothing, transform each part into a taste experience. 
                Offal over direct fire reveals textures and flavors impossible to achieve with other cooking methods.
              </p>
            </div>
          </div>

          <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
            📚 Offal Dictionary for International Visitors
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {hormoneDictionary.map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-lg border border-gray-200">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-bold text-gray-900 text-sm">{item.japanese}</h4>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    item.difficulty === 'Beginner' ? 'bg-green-100 text-green-800' :
                    item.difficulty === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {item.difficulty}
                  </span>
                </div>
                <p className="text-gray-600 text-xs mb-2"><em>{item.french}</em></p>
                <p className="text-gray-700 text-xs mb-2">{item.description}</p>
                <p className="text-gray-500 text-xs">
                  <strong>🇫🇷 Equivalent:</strong> {item.equivalent}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History & Culture Section */}
      <section id="histoire" className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            📖 The History of the Futago Brothers
          </h2>
          
          <div className="space-y-8">
            {culturalBackground.map((section, index) => (
              <div key={index} className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
                <div className="flex items-start">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{section.title}</h3>
                    <p className="text-gray-700 mb-4">{section.content}</p>
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <p className="text-orange-800 font-medium text-sm">
                        ✨ {section.highlight}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Success Timeline */}
          <div className="mt-12 bg-gradient-to-r from-gray-800 to-gray-900 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6 text-center">⏰ Success Timeline</h3>
            <div className="grid md:grid-cols-4 gap-4 text-center">
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-400 mb-2">2010</h4>
                <p className="text-sm">Opened in Gotanda<br/>Only 13 tsubo</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-400 mb-2">2014</h4>
                <p className="text-sm">International: Taiwan<br/>Asian expansion</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-400 mb-2">2014</h4>
                <p className="text-sm">New York opening<br/>Michelin Guide ⭐</p>
              </div>
              <div className="bg-white/10 p-4 rounded-lg">
                <h4 className="font-bold text-yellow-400 mb-2">2025</h4>
                <p className="text-sm">Premium yakiniku leader<br/>30+ establishments</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Information Section */}
      <section id="pratique" className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            💡 Futago Practical Information
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 border border-red-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🏪 Access & Reservation</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• <strong>Reservation:</strong> MANDATORY for Hasami-deru Kalbi</li>
                <li>• <strong>Anticipation:</strong> 2-3 days in advance minimum</li>
                <li>• <strong>Location:</strong> Main Tokyo districts</li>
                <li>• <strong>Atmosphere:</strong> Casual but premium</li>
              </ul>
              <div className="bg-red-100 p-3 rounded-lg mt-4">
                <p className="text-red-800 text-xs">
                  <strong>⚠️ Important:</strong> No reservation = No Hasami-deru Kalbi!
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-teal-50 rounded-xl p-6 border border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">💰 Budget & Pricing</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• <strong>Unique system:</strong> Half price = double discovery</li>
                <li>• <strong>Typical budget:</strong> ¥3,000-5,000/person</li>
                <li>• <strong>Service:</strong> +5% sometimes at checkout</li>
                <li>• <strong>Drinks:</strong> Additional budget ¥800-1,500</li>
              </ul>
              <div className="bg-green-100 p-3 rounded-lg mt-4">
                <p className="text-green-800 text-xs">
                  <strong>💡 Tip:</strong> Order 4-5 different dishes instead of 2-3!
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🎯 Experience Tips</h3>
              <ul className="text-gray-700 space-y-2 text-sm">
                <li>• <strong>Ideal order:</strong> Futago-mori → Hasami-deru Kalbi → Offal</li>
                <li>• <strong>Photos:</strong> Encouraged during the "Yoisho!"</li>
                <li>• <strong>Duration:</strong> 90-120 minutes to fully enjoy</li>
                <li>• <strong>Clothing:</strong> Avoid white (offal smoke)</li>
              </ul>
              <div className="bg-blue-100 p-3 rounded-lg mt-4">
                <p className="text-blue-800 text-xs">
                  <strong>🌟 Secret:</strong> The staff loves to explain each part!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Conclusion Call-to-Action */}
      <section className="py-16 bg-gradient-to-r from-red-700 to-orange-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            🎉 Ready for the Futago Adventure?
          </h2>
          <p className="text-xl mb-8 text-red-100">
            From the spectacular "Hasami-deru Kalbi" to the "mouth-to-mouth" service, 
            experience the premium yakiniku revolution Osaka style!
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4">⭐ Your Futago Checklist</h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <div>
                <h4 className="font-semibold mb-2">✅ Before your visit:</h4>
                <ul className="text-sm space-y-1 text-red-100">
                  <li>• Book 2-3 days in advance</li>
                  <li>• Plan budget ¥4,000-5,000</li>
                  <li>• Wear "offal-friendly" clothes</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2">🎯 Must-tries:</h4>
                <ul className="text-sm space-y-1 text-red-100">
                  <li>• Hasami-deru Kalbi (signature)</li>
                  <li>• Futago-mori (offal discovery)</li>
                  <li>• Participate in the collective "Yoisho!"</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="flex justify-center items-center space-x-4 text-2xl">
            <span>いただきます</span>
            <span>🔥</span>
            <span>🥩</span>
            <span>🎭</span>
            <span>Enjoy your meal!</span>
          </div>
        </div>
      </section>

      {/* Navigation to other chains */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Discover other yakiniku experiences
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/dish-types/yakiniku" className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors">
              ← Back to Yakiniku
            </Link>
            <Link href="/chains/gyukaku" className="bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-colors">
              Discover Gyukaku
            </Link>
            <Link href="/chains/anan" className="bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-colors">
              Discover Anan
            </Link>
            <Link href="/chains" className="bg-white text-gray-700 px-6 py-3 rounded-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-colors">
              All Chains
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}



