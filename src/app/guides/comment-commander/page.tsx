import Link from 'next/link';
import { ArrowLeft, Ticket, Monitor, QrCode, MessageCircle, AlertCircle, CheckCircle, Clock } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'How to Order in Japan: Guide to Machines and Tablets | JapanChains',
  description: 'Complete guide to ordering in Japanese restaurants: master ticket machines (kenbaiki), touch screens, and QR codes.',
  keywords: 'how to order japan, kenbaiki, ticket machine japan, touch screen restaurant, QR code ordering, japan restaurant guide',
  openGraph: {
    title: 'How to Order in Japan: Machines, Tablets and QR Codes',
    description: 'Master all Japanese ordering systems: kenbaiki, touch screens and QR codes. Practical guide with useful phrases.',
    type: 'article',
    url: '/guides/comment-commander',
  },
  alternates: {
    canonical: '/guides/comment-commander',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function HowToOrderPage() {
  const orderingSystems = [
    {
      id: 'ticket-machines',
      title: 'Ticket Machines',
      subtitle: '券売機 (Kenbaiki)',
      description: 'The classic Japanese system found in most ramen, gyūdon and curry restaurants.',
      icon: Ticket,
      color: 'red',
      popularity: '70%',
      difficulty: 'Easy',
      steps: [
        'Approach the machine near the entrance',
        'Look at dish photos (usually with prices)',
        'Insert your money (coins and bills accepted)',
        'Press the button for your desired dish',
        'Collect your ticket and change',
        'Give ticket to staff when seated'
      ],
      tips: [
        'Prepare 100¥ coins for easier purchase',
        'Lit buttons = available dishes',
        'Dark buttons = out of stock',
        'Keep your ticket until end of meal'
      ],
      phrases: [
        { en: 'Excuse me, how do I use this machine?', jp: 'すみません、この機械の使い方を教えてください', romaji: 'Sumimasen, kono kikai no tsukai-kata wo oshiete kudasai' },
        { en: 'Is this dish available?', jp: 'この料理はありますか', romaji: 'Kono ryōri wa arimasu ka?' },
        { en: 'One ticket, please', jp: '券を一枚お願いします', romaji: 'Ken wo ichi-mai onegaishimasu' }
      ]
    },
    {
      id: 'touch-screens',
      title: 'Touch Screens',
      subtitle: 'タッチパネル (Touch Panel)',
      description: 'Modern systems with graphical interface, often multilingual in popular chains.',
      icon: Monitor,
      color: 'blue',
      popularity: '25%',
      difficulty: 'Very Easy',
      steps: [
        'Touch screen to start',
        'Select language (often available in English)',
        'Browse menu categories',
        'Touch desired dishes to add them',
        'Check your order and total',
        'Choose payment method',
        'Pay and collect receipt/number'
      ],
      tips: [
        'Look for flag icon to change language',
        'Use + and - buttons to adjust quantities',
        'Always check total before paying',
        'Keep receipt with order number'
      ],
      phrases: [
        { en: 'Is there an English menu?', jp: '英語のメニューはありますか', romaji: 'Eigo no menyū wa arimasu ka?' },
        { en: 'How do I change the language?', jp: '言語を変えるにはどうすればいいですか', romaji: 'Gengo wo kaeru ni wa dō sureba ii desu ka?' },
        { en: 'I finished my order', jp: '注文が終わりました', romaji: 'Chūmon ga owarimashita' }
      ]
    },
    {
      id: 'qr-code',
      title: 'QR Code Ordering',
      subtitle: 'QRコード注文 (QR Code Chūmon)',
      description: 'The newest system, popularized since 2020. Order directly from your smartphone.',
      icon: QrCode,
      color: 'green',
      popularity: '5%',
      difficulty: 'Very Easy',
      steps: [
        'Scan QR code on your table with smartphone',
        'Open link in your browser',
        'Select language if offered',
        'Browse digital menu',
        'Add dishes to cart',
        'Confirm and pay online',
        'Wait for dishes to arrive at table'
      ],
      tips: [
        'Make sure you have stable internet connection',
        'Some systems require card payment',
        'Dishes come directly to your table',
        'You can order multiple times during meal'
      ],
      phrases: [
        { en: 'The QR code is not working', jp: 'QRコードが動作しません', romaji: 'QR kōdo ga dōsa shimasen' },
        { en: 'How do I pay with my phone?', jp: 'スマートフォンで支払うにはどうすればいいですか', romaji: 'Sumātofon de shiharau ni wa dō sureba ii desu ka?' },
        { en: 'I placed my order online', jp: 'オンラインで注文しました', romaji: 'Onrain de chūmon shimashita' }
      ]
    }
  ];

  const commonPhrases = [
    {
      category: 'Restaurant arrival',
      phrases: [
        { en: 'Welcome!', jp: 'いらっしゃいませ', romaji: 'Irasshaimase', note: 'Staff says this first' },
        { en: 'One person', jp: '一人です', romaji: 'Hitori desu', note: 'For "one person"' },
        { en: 'Two people', jp: '二人です', romaji: 'Futari desu', note: 'For "two people"' },
        { en: 'Is there space available?', jp: '空いていますか', romaji: 'Aite imasu ka?', note: 'If restaurant seems full' }
      ]
    },
    {
      category: 'During ordering',
      phrases: [
        { en: 'I recommend this', jp: 'これがおすすめです', romaji: 'Kore ga osusume desu', note: 'Staff might say this' },
        { en: 'Not spicy, please', jp: '辛くないでお願いします', romaji: 'Karakunai de onegaishimasu', note: 'To avoid spicy food' },
        { en: 'With extra vegetables', jp: '野菜を多めでお願いします', romaji: 'Yasai wo ōme de onegaishimasu', note: 'For more vegetables' },
        { en: 'That\'s all', jp: '以上です', romaji: 'Ijō desu', note: 'When you\'re finished ordering' }
      ]
    },
    {
      category: 'During the meal',
      phrases: [
        { en: 'Let\'s eat! (before eating)', jp: 'いただきます', romaji: 'Itadakimasu', note: 'Before starting to eat' },
        { en: 'It\'s delicious', jp: 'おいしいです', romaji: 'Oishii desu', note: 'To compliment' },
        { en: 'The bill, please', jp: 'お会計お願いします', romaji: 'Okaikei onegaishimasu', note: 'To ask for the bill' },
        { en: 'Thank you for the meal', jp: 'ごちそうさまでした', romaji: 'Gochisōsama deshita', note: 'When leaving' }
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      red: 'bg-red-50 border-red-200 text-red-600',
      blue: 'bg-blue-50 border-blue-200 text-blue-600',
      green: 'bg-green-50 border-green-200 text-green-600'
    };
    return colorMap[color as keyof typeof colorMap];
  };

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
              <Ticket className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">How to Order in Japan</h1>
              <p className="text-lg text-gray-600">Master all Japanese ordering systems with confidence</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Introduction */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The 3 Japanese Ordering Systems</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Ordering in Japanese restaurants might seem intimidating at first. However, once you know the three main 
            systems, you'll feel comfortable anywhere! Here's your complete guide.
          </p>
          <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg p-6">
            <div className="flex items-start">
              <AlertCircle className="h-6 w-6 text-orange-600 mr-3 mt-1 flex-shrink-0" />
              <div>
                <p className="text-gray-800 font-medium mb-2">
                  <strong>Important tip:</strong> Don't worry if you make a mistake!
                </p>
                <p className="text-gray-700">
                  Japanese staff are generally very patient and kind with foreigners. 
                  Don't hesitate to ask for help by pointing or using the basic phrases below.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ordering Systems */}
        <div className="space-y-8">
          {orderingSystems.map((system, index) => {
            const IconComponent = system.icon;
            return (
              <div key={system.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <div className={`${getColorClasses(system.color)} border-b-2 p-6`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center">
                      <IconComponent className="h-10 w-10 mr-4" />
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{system.title}</h3>
                        <p className="text-lg text-gray-600">{system.subtitle}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-600 mb-1">Popularity</div>
                      <div className="text-xl font-bold">{system.popularity}</div>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{system.description}</p>
                  <div className="flex items-center space-x-4">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      system.difficulty === 'Very Easy' ? 'bg-green-100 text-green-800' :
                      system.difficulty === 'Easy' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-red-100 text-red-800'
                    }`}>
                      {system.difficulty}
                    </span>
                    <span className="text-sm text-gray-600">#{index + 1} in this guide</span>
                  </div>
                </div>

                <div className="p-8">
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Steps */}
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <Clock className="h-5 w-5 mr-2 text-red-600" />
                        Steps to follow
                      </h4>
                      <ol className="space-y-3">
                        {system.steps.map((step, stepIndex) => (
                          <li key={stepIndex} className="flex items-start">
                            <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium mr-3 mt-1 flex-shrink-0">
                              {stepIndex + 1}
                            </span>
                            <span className="text-gray-700">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>

                    {/* Tips */}
                    <div>
                      <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                        <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                        Practical tips
                      </h4>
                      <ul className="space-y-3">
                        {system.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start">
                            <span className="bg-green-100 text-green-600 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-gray-700">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Phrases */}
                  <div className="mt-8 bg-gray-50 rounded-lg p-6">
                    <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                      <MessageCircle className="h-5 w-5 mr-2 text-blue-600" />
                      Useful phrases for this system
                    </h4>
                    <div className="space-y-4">
                      {system.phrases.map((phrase, phraseIndex) => (
                        <div key={phraseIndex} className="bg-white rounded-lg p-4">
                          <div className="mb-2">
                            <span className="font-medium text-gray-900">{phrase.en}</span>
                          </div>
                          <div className="text-sm text-gray-600 mb-1">
                            <span className="font-medium">Japanese:</span> {phrase.jp}
                          </div>
                          <div className="text-sm text-gray-600">
                            <span className="font-medium">Pronunciation:</span> {phrase.romaji}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Common Phrases Section */}
        <section className="bg-white rounded-lg shadow-sm p-8 mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Essential Phrases for All Restaurants</h2>
          <p className="text-lg text-gray-700 text-center mb-8">
            These expressions will be useful regardless of which ordering system is used.
          </p>
          
          <div className="space-y-8">
            {commonPhrases.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-xl font-semibold text-red-600 mb-4">{category.category}</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {category.phrases.map((phrase, phraseIndex) => (
                    <div key={phraseIndex} className="bg-red-50 border border-red-200 rounded-lg p-4">
                      <div className="mb-2">
                        <span className="font-medium text-gray-900">{phrase.en}</span>
                        {phrase.note && (
                          <span className="text-sm text-gray-500 ml-2">({phrase.note})</span>
                        )}
                      </div>
                      <div className="text-sm text-gray-600 mb-1">
                        <span className="font-medium">Japanese:</span> {phrase.jp}
                      </div>
                      <div className="text-sm text-gray-600">
                        <span className="font-medium">Romaji:</span> {phrase.romaji}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Final Tips */}
        <section className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-8 mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Final Expert Tips</h2>
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="bg-white p-4 rounded-full inline-block mb-4">
                <Clock className="h-8 w-8 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Take your time</h3>
              <p className="text-gray-700">Nobody is rushing you. Japanese people prefer you take time to understand properly.</p>
            </div>
            <div>
              <div className="bg-white p-4 rounded-full inline-block mb-4">
                <MessageCircle className="h-8 w-8 text-orange-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Use gestures</h3>
              <p className="text-gray-700">Pointing and smiling are universal. Don't hesitate to communicate with your hands.</p>
            </div>
            <div>
              <div className="bg-white p-4 rounded-full inline-block mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Practice</h3>
              <p className="text-gray-700">Repeat phrases out loud before your trip. Practice builds confidence.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
