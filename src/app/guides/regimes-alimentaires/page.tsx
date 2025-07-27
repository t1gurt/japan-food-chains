import Link from 'next/link';
import { ArrowLeft, Leaf, Heart, AlertTriangle, CheckCircle, XCircle, Info, Users, Globe } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dietary Requirements Japan: Vegetarian Halal | JapanChains',
  description: 'Complete guides for vegetarian, vegan, pork-free (halal), and allergy management in Japan.',
  keywords: 'vegetarian japan, vegan japan, halal japan, pork-free japan, allergies japan, dietary restrictions',
  openGraph: {
    title: 'Dietary Requirements Guide for Japan',
    description: 'Eating in Japan with dietary restrictions. Complete guides for vegetarian, vegan, pork-free (halal) and allergy management.',
    type: 'article',
    url: '/guides/regimes-alimentaires',
  },
  alternates: {
    canonical: '/guides/regimes-alimentaires',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function DietaryRequirementsPage() {
  const dietaryGuides = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: 'Vegetarian & Vegan',
      titleJp: 'ベジタリアン・ヴィーガン',
      description: 'Complete guide for vegetarian and vegan options in Japanese chains.',
      challenges: [
        'Dashi (fish broth) in many dishes',
        'Sauces containing animal ingredients',
        'Limited but growing options'
      ],
      solutions: '25+ restaurants with identified vegan options',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-800'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Pork-Free & Halal',
      titleJp: '豚肉不使用・ハラル',
      description: 'Pork-free options and halal information for Japanese restaurants.',
      challenges: [
        'Pork very present in Japanese cuisine',
        'Limited halal certification',
        'Possible cross-contamination'
      ],
      solutions: '15+ chains with safe pork-free options',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      textColor: 'text-blue-800'
    },
    {
      icon: <AlertTriangle className="w-8 h-8" />,
      title: 'Allergies & Intolerances',
      titleJp: 'アレルギー・不耐性',
      description: 'Managing food allergies and intolerances in Japanese restaurants.',
      challenges: [
        'Complex ingredient lists',
        'Language barrier',
        'Hidden allergens in sauces'
      ],
      solutions: 'Translation cards and safe chain recommendations',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      textColor: 'text-orange-800'
    }
  ];

  const practicalTips = [
    {
      title: 'Learn Key Japanese Words',
      icon: <Globe className="w-6 h-6" />,
      tips: [
        'ベジタリアン (Bejitarian) = Vegetarian',
        '豚肉なし (Butaniku nashi) = No pork',
        'アレルギーがあります (Arerugii ga arimasu) = I have allergies',
        '魚の出汁なし (Sakana no dashi nashi) = No fish broth'
      ]
    },
    {
      title: 'Use Translation Cards',
      icon: <Info className="w-6 h-6" />,
      tips: [
        'Prepare cards in Japanese explaining your restrictions',
        'Include specific ingredients to avoid',
        'Show cards to restaurant staff',
        'Keep digital copies on your phone'
      ]
    },
    {
      title: 'Research Before You Go',
      icon: <CheckCircle className="w-6 h-6" />,
      tips: [
        'Check restaurant websites for allergen information',
        'Look for international chains with consistent policies',
        'Read reviews from people with similar restrictions',
        'Have backup restaurant options ready'
      ]
    }
  ];

  const safeChains = [
    {
      category: 'Vegetarian-Friendly',
      chains: [
        { name: 'Saizeriya', reason: 'Many pasta and salad options without meat' },
        { name: 'Mos Burger', reason: 'Veggie burger available' },
        { name: 'Sushiro', reason: 'Vegetable sushi options (cucumber, inari)' },
        { name: 'Hanamaru Udon', reason: 'Plain udon with vegetable tempura' }
      ],
      color: 'text-green-600'
    },
    {
      category: 'Pork-Free Options',
      chains: [
        { name: 'Yoshinoya', reason: 'Beef bowls (gyudon) without pork' },
        { name: 'Sukiya', reason: 'Beef and chicken bowls available' },
        { name: 'KFC Japan', reason: 'Chicken only, no pork products' },
        { name: 'Sushiro', reason: 'Fish and seafood focus' }
      ],
      color: 'text-blue-600'
    },
    {
      category: 'Allergy-Conscious',
      chains: [
        { name: 'McDonald\'s Japan', reason: 'Detailed allergen information available' },
        { name: 'Subway Japan', reason: 'Customizable with visible ingredients' },
        { name: 'Starbucks Japan', reason: 'English menu and allergy info' },
        { name: 'Gusto', reason: 'Family restaurant with ingredient lists' }
      ],
      color: 'text-orange-600'
    }
  ];

  const translationCards = [
    {
      restriction: 'Vegetarian',
      japanese: '私はベジタリアンです。肉、魚、鶏肉は食べられません。野菜だけの料理はありますか？',
      romaji: 'Watashi wa bejitarian desu. Niku, sakana, toriniku wa taberemasen. Yasai dake no ryōri wa arimasu ka?',
      english: 'I am vegetarian. I cannot eat meat, fish, or chicken. Do you have dishes with only vegetables?'
    },
    {
      restriction: 'Vegan',
      japanese: '私はヴィーガンです。肉、魚、卵、乳製品、蜂蜜は食べられません。動物性食品を使わない料理はありますか？',
      romaji: 'Watashi wa vīgan desu. Niku, sakana, tamago, nyūseihin, hachimitsu wa taberemasen. Dōbutsusei shokuhin wo tsukawanai ryōri wa arimasu ka?',
      english: 'I am vegan. I cannot eat meat, fish, eggs, dairy, or honey. Do you have dishes without any animal products?'
    },
    {
      restriction: 'No Pork',
      japanese: '私は豚肉を食べられません。この料理に豚肉は入っていますか？豚肉を使わない料理を教えてください。',
      romaji: 'Watashi wa butaniku wo taberemasen. Kono ryōri ni butaniku wa haitte imasu ka? Butaniku wo tsukawanai ryōri wo oshiete kudasai.',
      english: 'I cannot eat pork. Does this dish contain pork? Please tell me dishes that don\'t use pork.'
    },
    {
      restriction: 'Food Allergies',
      japanese: '私は[アレルゲン]にアレルギーがあります。この料理には[アレルゲン]が入っていますか？',
      romaji: 'Watashi wa [arerugēn] ni arerugī ga arimasu. Kono ryōri ni wa [arerugēn] ga haitte imasu ka?',
      english: 'I am allergic to [allergen]. Does this dish contain [allergen]?'
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
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Leaf className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Dietary Requirements in Japan</h1>
              <p className="text-lg text-gray-600">Complete guide for eating with restrictions</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Introduction */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="prose prose-green max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Eating in Japan with dietary restrictions can be challenging but is definitely possible with 
              the right knowledge and preparation. This guide helps you navigate Japanese restaurants 
              while maintaining your dietary requirements.
            </p>
            
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-900 mb-3">🎯 What this guide covers:</h3>
              <ul className="text-green-800 space-y-1">
                <li>• <strong>Vegetarian & Vegan</strong> options and hidden ingredients</li>
                <li>• <strong>Pork-free & Halal</strong> dining solutions</li>
                <li>• <strong>Allergy management</strong> and communication strategies</li>
                <li>• <strong>Safe restaurant chains</strong> with reliable options</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Dietary Categories */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Dietary Categories & Challenges
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {dietaryGuides.map((guide, index) => (
              <div key={index} className={`${guide.bgColor} ${guide.borderColor} border rounded-lg p-6`}>
                <div className="flex items-center mb-4">
                  <div className={`${guide.textColor} mr-4`}>
                    {guide.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{guide.title}</h3>
                    <p className="text-sm text-gray-600">{guide.titleJp}</p>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-4">{guide.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Main challenges:</h4>
                  <ul className="space-y-1">
                    {guide.challenges.map((challenge, i) => (
                      <li key={i} className="text-sm text-gray-700 flex items-start">
                        <XCircle className="w-4 h-4 text-red-500 mt-0.5 mr-2 flex-shrink-0" />
                        {challenge}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className={`${guide.bgColor} border ${guide.borderColor} rounded p-3`}>
                  <div className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-600 mr-2" />
                    <span className={`text-sm font-medium ${guide.textColor}`}>
                      {guide.solutions}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practical Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Practical Navigation Tips
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {practicalTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    {tip.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{tip.title}</h3>
                </div>
                
                <ul className="space-y-2">
                  {tip.tips.map((tipText, i) => (
                    <li key={i} className="text-gray-700 text-sm flex items-start">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {tipText}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Safe Chain Recommendations */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Recommended Safe Chains
          </h2>
          
          <div className="space-y-8">
            {safeChains.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className={`text-xl font-bold mb-4 ${category.color}`}>
                  {category.category}
                </h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  {category.chains.map((chain, i) => (
                    <div key={i} className="border border-gray-200 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">{chain.name}</h4>
                      <p className="text-sm text-gray-600">{chain.reason}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Translation Cards */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Essential Translation Cards
          </h2>
          
          <div className="space-y-6">
            {translationCards.map((card, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{card.restriction}</h3>
                
                <div className="space-y-3">
                  <div>
                    <span className="text-sm font-medium text-gray-500">Japanese:</span>
                    <p className="text-gray-900 text-lg">{card.japanese}</p>
                  </div>
                  
                  <div>
                    <span className="text-sm font-medium text-gray-500">Pronunciation:</span>
                    <p className="text-gray-700 italic">{card.romaji}</p>
                  </div>
                  
                  <div>
                    <span className="text-sm font-medium text-gray-500">English translation:</span>
                    <p className="text-gray-600">{card.english}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Emergency Information */}
        <section className="bg-red-50 rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-red-900 mb-6 flex items-center">
            <AlertTriangle className="w-6 h-6 mr-2" />
            Emergency Situations
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-semibold text-red-900 mb-3">If you have a severe allergic reaction:</h3>
              <ul className="text-red-800 space-y-1 text-sm">
                <li>• Call 119 for emergency services</li>
                <li>• Use your EpiPen if available</li>
                <li>• Show prepared medical card in Japanese</li>
                <li>• Ask someone to call for help: "救急車を呼んでください" (Kyūkyūsha wo yonde kudasai)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold text-red-900 mb-3">Essential emergency phrases:</h3>
              <ul className="text-red-800 space-y-1 text-sm">
                <li>• Help me: 助けてください (Tasukete kudasai)</li>
                <li>• I need a doctor: 医者が必要です (Isha ga hitsuyō desu)</li>
                <li>• Allergic reaction: アレルギー反応 (Arerugī hannō)</li>
                <li>• Hospital: 病院 (Byōin)</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
