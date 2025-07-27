import Link from "next/link";
import { Metadata } from "next";
import ChainViewTracker from "../../../components/ChainViewTracker";

export const metadata: Metadata = {
  title: "Isomaru Suisan 磯丸水産 | 24h Seafood Izakaya | JapanChains",
  description: "24/7 seafood izakaya. Grill fresh shellfish and fish yourself in a fishing village atmosphere.",
  keywords: "Isomaru Suisan, 磯丸水産, izakaya, seafood, grill, hamayaki, Tokyo, Osaka, fresh fish, shellfish, interactive dining, Japanese culture",
  openGraph: {
    title: "Isomaru Suisan: The 24/7 Seafood Izakaya Experience | JapanChains",
    description: "Discover Isomaru Suisan, the revolutionary izakaya bringing the atmosphere of a 'sea house' to the heart of Japan's major cities.",
    url: "/chains/isomaru-suisan",
    type: "article",
    siteName: "JapanChains - Japanese Restaurant Chain Guide",
    locale: "en_US",
  },
  alternates: {
    canonical: '/chains/isomaru-suisan',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function IsomaruSuisanPage() {
  const menuHighlights = [
    {
      name: "Kani Miso Kōra Yaki",
      japanese: "蟹味噌甲羁E��",
      description: "Signature dish: crab simmered in its own shell with secret sauce",
      price: "¥600-800",
      difficulty: "Easy",
      mustTry: true,
      tips: "Pair with bread for a unique experience",
      cookingTime: "5-7 minutes"
    },
    {
      name: "Hotate no Hamayaki",
      japanese: "ホタチE�E浜焼ぁE,
      description: "Scallops grilled right at your table, juicy and aromatic",
      price: "¥200-300 each",
      difficulty: "Easy",
      mustTry: true,
      tips: "Don't overcook to maintain tenderness",
      cookingTime: "3-4 minutes per side"
    },
    {
      name: "Sazae no Tsubo Yaki",
      japanese: "サザエの壺焼ぁE,
      description: "Sea snails cooked in their shells with sake and soy sauce",
      price: "¥300-400 each",
      difficulty: "Medium",
      mustTry: false,
      tips: "Be careful with the hot shell, use the provided tongs",
      cookingTime: "6-8 minutes"
    },
    {
      name: "Kaisendon",
      japanese: "海鮮丼",
      description: "Rice bowl topped with fresh and varied raw fish",
      price: "¥900-1,400",
      difficulty: "None",
      mustTry: false,
      tips: "Perfect for lunch, excellent value for money",
      cookingTime: "Served immediately"
    },
    {
      name: "Ikasu Kai Moriwase",
      japanese: "活貝盛り合わせ",
      description: "Assortment of live shellfish to discover multiple flavors",
      price: "¥1,200-1,800",
      difficulty: "Easy",
      mustTry: true,
      tips: "Ideal for beginners and group sharing",
      cookingTime: "Varies by shellfish"
    },
    {
      name: "Geta Mori Sashimi",
      japanese: "ゲタ盛り刺身",
      description: "Assorted sashimi presented on traditional wooden platform",
      price: "¥1,500-2,500",
      difficulty: "None",
      mustTry: false,
      tips: "Freshness guaranteed thanks to the restaurant's live tanks",
      cookingTime: "Served immediately"
    }
  ];

  const hamayakiGuide = [
    {
      step: "1. Preparation",
      description: "Light the small grill on your table and let it heat up",
      icon: "🔥",
      tips: "The grill is safe and easy to use"
    },
    {
      step: "2. Placement",
      description: "Place shellfish flat side down on the grill",
      icon: "🐚",
      tips: "This prevents the juices from escaping"
    },
    {
      step: "3. Cooking",
      description: "Wait for the shell to open naturally with heat",
      icon: "⏱�E�E,
      tips: "Patience! Don't force the opening"
    },
    {
      step: "4. Turning",
      description: "Turn carefully with the provided tongs",
      icon: "🔄",
      tips: "Watch out for hot juices that may splash"
    },
    {
      step: "5. Tasting",
      description: "Enjoy when the flesh becomes opaque and smells good",
      icon: "�E",
      tips: "Add a drop of soy sauce if desired"
    }
  ];

  const atmosphereFeatures = [
    {
      title: "Maritime Decoration",
      description: "Colorful fishing flags, traditional lanterns and nets",
      icon: "🏮"
    },
    {
      title: "Live Fish Tanks",
      description: "Living fish swimming before your eyes, guarantee of freshness",
      icon: "🐟"
    },
    {
      title: "Festive Atmosphere",
      description: "Nostalgic 80s music and warm welcoming shouts",
      icon: "🎵"
    },
    {
      title: "Table Grills",
      description: "Each table equipped with a small grill for the hamayaki experience",
      icon: "🔥"
    },
    {
      title: "Umi no Ie Style",
      description: "Recreation of a traditional 'sea house' in the middle of the city",
      icon: "🏠"
    },
    {
      title: "24/7 Service",
      description: "Many establishments open all night long",
      icon: "🌙"
    }
  ];

  const culturalInsights = [
    {
      title: "Interactive Dining",
      description: "Like Korean BBQ or hot pot, Isomaru Suisan emphasizes sharing and communal cooking",
      comparison: "🔥 Interactive Grilling Experience"
    },
    {
      title: "Revolutionary Concept",
      description: "First to democratize high-end seafood in a casual setting",
      comparison: "Accessible luxury for everyone"
    },
    {
      title: "2009 Innovation",
      description: "Born in Kichijōji from a surfer's inspiration visiting beach huts",
      comparison: "From beach to city"
    },
    {
      title: "Unique Otōshi",
      description: "Even the mandatory appetizer is grilled at your table",
      comparison: "Participation from arrival"
    }
  ];

  const practicalInfo = [
    {
      category: "Average Budget",
      details: [
        "Lunch: ¥1,000-1,500",
        "Dinner: ¥3,000-4,000", 
        "Otōshi: ¥329-399",
        "Drinks: ¥300-600"
      ]
    },
    {
      category: "Ordering",
      details: [
        "Multilingual touch tablet",
        "Detailed dish photos",
        "Helpful staff readily available",
        "Option to cancel otōshi"
      ]
    },
    {
      category: "Hours",
      details: [
        "Many open 24/7",
        "Others: 11am-5am",
        "Ideal after transport closes",
        "Reservations possible"
      ]
    },
    {
      category: "Payment",
      details: [
        "Cash accepted",
        "Credit cards",
        "IC Cards (Suica, etc.)",
        "QR codes (PayPay)"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <ChainViewTracker chainName="isomaru-suisan" chainCategory="izakaya" />
      
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-red-600">Home</Link>
            <span className="text-gray-400 mx-2">/</span>
            <Link href="/chains" className="text-gray-500 hover:text-red-600">Chains</Link>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-gray-900 font-medium">Isomaru Suisan</span>
          </nav>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-100 via-cyan-100 to-teal-100 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-6">
                <span className="text-6xl mr-4">🦀</span>
                <div>
                  <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                    Isomaru Suisan
                  </h1>
                  <p className="text-2xl text-gray-600 japanese-text mb-2">磯丸水産</p>
                  <p className="text-lg text-gray-600 italic">The "Sea House" in the City</p>
                </div>
              </div>
              <p className="text-xl text-gray-700 mb-6">
                Discover the unique experience of <strong>Japanese interactive dining</strong> where you 
                grill ultra-fresh seafood yourself in the atmosphere of a fishing hut 
                transported to the heart of major cities.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Interactive grill
                </span>
                <span className="bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full text-sm font-medium">
                  Fresh seafood
                </span>
                <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                  Open 24/7
                </span>
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                  Social dining
                </span>
              </div>
            </div>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-cyan-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🌊 The Unique Concept</h3>
              <p className="text-gray-600 mb-4">
                Isomaru Suisan revolutionizes the seafood experience by recreating 
                the relaxed atmosphere of Japanese <em>"umi no ie"</em> (sea houses) 
                in convenient urban locations.
              </p>
              <p className="text-gray-600">
                More than a restaurant, it's a sensory journey where interactive cooking 
                creates authentic moments of connection, similar to Korean BBQ!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cultural Connection */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            🎌 Where Interactive Dining Meets Japanese Innovation
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {culturalInsights.map((insight, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
                <h3 className="text-lg font-bold text-gray-900 mb-3">{insight.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{insight.description}</p>
                <div className="bg-white p-3 rounded-lg border border-blue-100">
                  <p className="text-center text-sm font-medium text-blue-700">
                    {insight.comparison}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Atmosphere */}
      <section className="py-16 bg-gradient-to-r from-cyan-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            🏮 The Atmosphere: Journey to a Fishing Port
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {atmosphereFeatures.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-cyan-200">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-12 bg-white p-8 rounded-xl shadow-sm border border-cyan-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">🎭 Total Immersion of the 5 Senses</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">👁�E�ESight</h4>
                <p className="text-gray-600 text-sm">Fish swimming in live tanks, colorful traditional fishing flags</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">👂 Sound</h4>
                <p className="text-gray-600 text-sm">Sizzling grills, retro music, warm welcoming calls from staff</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">👃 Smell</h4>
                <p className="text-gray-600 text-sm">Marine aromas, fragrant grill smoke, caramelized soy sauce</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Hamayaki Guide */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            🔥 Master the Art of Hamayaki (浜焼ぁE
          </h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Hamayaki is the soul of Isomaru Suisan: grilling your own seafood 
            on a small table brazier. Like Korean BBQ, it's a sharing moment 
            where everyone becomes a chef!
          </p>
          
          <div className="grid md:grid-cols-5 gap-6">
            {hamayakiGuide.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center text-2xl mb-4 mx-auto border border-orange-200">
                  {step.icon}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{step.step}</h3>
                <p className="text-gray-600 text-sm mb-3">{step.description}</p>
                <p className="text-orange-700 text-xs bg-orange-50 p-2 rounded border border-orange-200">
                  💡 {step.tips}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-xl border border-orange-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">🚨 Safety Tips</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">⚠�E�EPrecautions</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Always use the provided tongs</li>
                  <li>• Never touch the grill directly</li>
                  <li>• Watch out for hot juice splashes</li>
                  <li>• Don't lean too far over the grill</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">✁EBest Practices</h4>
                <ul className="text-gray-600 text-sm space-y-1">
                  <li>• Monitor cooking to avoid burning</li>
                  <li>• Share the experience in groups</li>
                  <li>• Ask staff for help if needed</li>
                  <li>• Savor the process as much as the result</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            🍽�E�EMust-Try Menu
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {menuHighlights.map((item, index) => (
              <div key={index} className={`bg-white rounded-xl p-6 shadow-sm border transition-all hover:shadow-md ${
                item.mustTry ? 'border-yellow-300 bg-gradient-to-br from-yellow-50 to-orange-50' : 'border-gray-200'
              }`}>
                {item.mustTry && (
                  <div className="flex items-center mb-3">
                    <span className="bg-yellow-400 text-yellow-900 text-xs px-2 py-1 rounded-full font-bold">
                      ⭁EMUST TRY
                    </span>
                  </div>
                )}
                
                <h3 className="text-lg font-bold text-gray-900 mb-1">{item.name}</h3>
                <p className="text-gray-600 japanese-text text-sm mb-3">{item.japanese}</p>
                <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Price:</span>
                    <span className="text-red-600 font-medium">{item.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Difficulty:</span>
                    <span className={`font-medium ${
                      item.difficulty === 'Easy' ? 'text-green-600' : 
                      item.difficulty === 'Medium' ? 'text-yellow-600' : 
                      'text-gray-600'
                    }`}>
                      {item.difficulty}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-semibold text-gray-900">Cooking:</span>
                    <span className="text-gray-600">{item.cookingTime}</span>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
                  <h4 className="text-sm font-semibold text-blue-900 mb-1">💡 Chef's Tip</h4>
                  <p className="text-blue-700 text-xs">{item.tips}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            📋 Practical Information
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {practicalInfo.map((info, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 border border-gray-200">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{info.category}</h3>
                <ul className="space-y-2">
                  {info.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="text-gray-600 text-sm flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-r from-red-50 to-pink-50 p-8 rounded-xl border border-red-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6">🍻 Understanding Otōshi Tradition</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">What is Otōshi?</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Otōshi is a small dish automatically served at the beginning of meals in izakaya. 
                  At Isomaru Suisan, it's often dried fish or fish cheese 
                  <strong> that you grill yourself</strong>!
                </p>
                <p className="text-red-700 text-sm bg-red-100 p-3 rounded">
                  <strong>Price:</strong> ¥329-399 per person, included in final bill
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-3">Recommended Approach</h4>
                <p className="text-gray-600 text-sm mb-4">
                  Consider otōshi as your "entry ticket" into Japanese culture. 
                  At Isomaru Suisan, it's actually fun because you participate from arrival!
                </p>
                <p className="text-green-700 text-sm bg-green-100 p-3 rounded">
                  <strong>Tip:</strong> If you really can't, politely ask 
                  "Otōshi wa iranai desu" upon arrival
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Perfect Visit Guide */}
      <section className="py-16 bg-gradient-to-r from-blue-50 to-cyan-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            🌟 Your Perfect First Visit to Isomaru Suisan
          </h2>
          
          <div className="bg-white rounded-xl p-8 shadow-lg border border-cyan-200">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-4 mt-1">
                  1
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">🍻 Welcome and Kanpai!</h3>
                  <p className="text-gray-600">
                    Get seated, order a fresh Japanese beer or sake. 
                    Enjoy the grilled otōshi to get into the mood!
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-4 mt-1">
                  2
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">🦀 The Signature Dish</h3>
                  <p className="text-gray-600">
                    Absolutely order the <strong>Kani Miso Kōra Yaki</strong> (蟹味噌甲羁E��). 
                    This crab simmered in its shell is THE dish that made Isomaru Suisan's reputation.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-4 mt-1">
                  3
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">🐚 The Hamayaki Experience</h3>
                  <p className="text-gray-600">
                    Get the <strong>Ikasu Kai Moriwase</strong> (活貝盛り合わせ) to discover 
                    various shellfish. Grill together, share techniques, laugh at little mishaps!
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-4 mt-1">
                  4
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">🍜 The Final Touch</h3>
                  <p className="text-gray-600">
                    End with a comforting dish like chicken ramen 
                    <strong>Tori RāEmen</strong> to beautifully close this experience.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-lg border border-yellow-200">
              <h3 className="text-lg font-bold text-gray-900 mb-3">🎯 Recommended Budget and Duration</h3>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <span className="font-semibold text-gray-900">Budget: </span>
                  <span className="text-gray-600">¥3,000-4,000 per person</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Duration: </span>
                  <span className="text-gray-600">1.5-2 hours to savor</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Group: </span>
                  <span className="text-gray-600">2-6 people ideal</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Finding Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            📍 Finding Isomaru Suisan
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-6 rounded-xl border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🗺�E�EStrategic Locations</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">📍</span>
                  <span><strong>Tokyo:</strong> Shibuya, Shinjuku, Ikebukuro, Ginza</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">📍</span>
                  <span><strong>Osaka:</strong> Namba, Umeda, Tennoji</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">📍</span>
                  <span><strong>Others:</strong> Nagoya, Kyoto, Fukuoka, Sapporo</span>
                </li>
              </ul>
              
              <div className="mt-6 p-4 bg-white rounded-lg border border-blue-100">
                <h4 className="font-semibold text-gray-900 mb-2">🔍 How to Recognize</h4>
                <p className="text-gray-600 text-sm">
                  Look for large signs with colorful Japanese characters, 
                  often near train stations. The smell of grilling and festive atmosphere 
                  are recognizable from a distance!
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-xl border border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">📱 Digital Help</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">🔍</span>
                  <span>Search "Isomaru Suisan" on Google Maps</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">🌐</span>
                  <span>Official site: <strong>isomaru.jp</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">📞</span>
                  <span>Reservations possible online or by phone</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-500 mr-2">🚇</span>
                  <span>Most are 2-5 minutes walk from stations</span>
                </li>
              </ul>
              
              <div className="mt-6 p-4 bg-white rounded-lg border border-green-100">
                <h4 className="font-semibold text-gray-900 mb-2">⏰ Timing Advice</h4>
                <p className="text-gray-600 text-sm">
                  Avoid 6-8pm on weekdays (office worker rush). 
                  Weekend afternoons or late evenings are calmer.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final Call to Action */}
      <section className="py-16 bg-gradient-to-r from-orange-100 to-red-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            🎉 Ready for the Isomaru Suisan Adventure?
          </h2>
          <p className="text-xl text-gray-700 mb-8">
            More than a meal, Isomaru Suisan offers you a true experience of 
            <strong> Japanese interactive dining</strong>. Grilling seafood together 
            creates unforgettable memories and guaranteed laughter!
          </p>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border border-orange-200 max-w-2xl mx-auto">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              🌟 Why Choose Isomaru Suisan?
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>✁EUnique interactive cooking experience</li>
                <li>✁EAuthentic fishing port atmosphere</li>
                <li>✁EUltra-fresh seafood guaranteed</li>
                <li>✁EWarm welcome and helpful service</li>
              </ul>
              <ul className="space-y-2 text-gray-600 text-sm">
                <li>✁EAffordable prices for the quality</li>
                <li>✁EOpen very late or 24/7</li>
                <li>✁EPerfect for groups of friends</li>
                <li>✁EMemorable experiences guaranteed</li>
              </ul>
            </div>
          </div>
          
          <p className="text-gray-600 mt-6 text-sm">
            <em>Don't hesitate: Isomaru Suisan awaits you for an evening of laughter, 
            marine flavors and Japanese-style conviviality!</em>
          </p>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Explore More Japanese Chains</h3>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/chains/sushiro" className="text-blue-600 hover:text-blue-800 hover:underline">
              Sushiro (Conveyor Belt Sushi)
            </Link>
            <Link href="/chains/ichiran" className="text-blue-600 hover:text-blue-800 hover:underline">
              Ichiran (Tonkotsu Ramen)
            </Link>
            <Link href="/chains/ippudo" className="text-blue-600 hover:text-blue-800 hover:underline">
              Ippudo (Premium Ramen)
            </Link>
            <Link href="/dish-types/seafood" className="text-blue-600 hover:text-blue-800 hover:underline">
              More Seafood Restaurants
            </Link>
            <Link href="/dish-types/izakaya" className="text-blue-600 hover:text-blue-800 hover:underline">
              Other Izakaya Chains
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}



