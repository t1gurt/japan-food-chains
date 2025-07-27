import Link from 'next/link';
import { ArrowLeft, BookOpen, Users, Heart, Utensils, Star, ArrowRight, Globe, Calendar, Clock } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Japanese Restaurant Etiquette: Culture Guide | JapanChains',
  description: 'Master table manners: chopsticks, tipping, proper behavior for successful dining experience.',
  keywords: 'japanese restaurant etiquette, japan manners, japanese dining culture, japan table manners, chopsticks etiquette',
  openGraph: {
    title: 'Japanese Restaurant Etiquette: Cultural Guide',
    description: 'Discover proper manners and etiquette for a successful experience in Japanese restaurants.',
    type: 'article',
    url: '/guides/culture-etiquette',
  },
  alternates: {
    canonical: '/guides/culture-etiquette',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function CultureEtiquettePage() {
  const culturalTips = [
    {
      title: 'Respect for silence',
      description: 'Japanese restaurants value a calm atmosphere',
      icon: '🔇',
      tip: 'Speak quietly, avoid phone calls'
    },
    {
      title: 'Patience and courtesy',
      description: 'Service may seem slow but it is meticulous',
      icon: '⏰',
      tip: 'Wait patiently, thank with a smile'
    },
    {
      title: 'Cleanliness and order',
      description: 'Keep your table space clean',
      icon: '✨',
      tip: 'Use provided napkins, organize your belongings'
    },
    {
      title: 'Respect for rules',
      description: 'Each restaurant has its own procedures',
      icon: '📋',
      tip: 'Observe other customers, follow instructions'
    }
  ];

  const commonPhrases = [
    {
      situation: 'When entering',
      japanese: 'いらっしゃいませ',
      romaji: 'Irasshaimase',
      english: 'Welcome',
      response: 'Nod or smile'
    },
    {
      situation: 'When leaving',
      japanese: 'ありがとうございました',
      romaji: 'Arigatō gozaimashita',
      english: 'Thank you very much',
      response: 'どういたしまして (Dōitashimashite) - You\'re welcome'
    },
    {
      situation: 'Excuse me',
      japanese: 'すみません',
      romaji: 'Sumimasen',
      english: 'Excuse me / Please',
      response: 'To get staff attention'
    },
    {
      situation: 'It was delicious',
      japanese: 'おいしかったです',
      romaji: 'Oishikatta desu',
      english: 'It was delicious',
      response: 'Compliment appreciated by staff'
    }
  ];

  const etiquetteRules = [
    {
      category: 'Chopsticks (Hashi)',
      rules: [
        'Never stick chopsticks upright in rice',
        'Don\'t point with chopsticks',
        'Place chopsticks on the chopstick rest'
      ],
      icon: '🥢'
    },
    {
      category: 'Miso Soup',
      rules: [
        'Drink directly from the bowl',
        'Use chopsticks for ingredients',
        'Finish the soup completely'
      ],
      icon: '🍲'
    },
    {
      category: 'Sushi',
      rules: [
        'Eat in one bite if possible',
        'Dip fish, not rice, in soy sauce',
        'Ginger cleanses palate between pieces'
      ],
      icon: '🍣'
    },
    {
      category: 'Payment',
      rules: [
        'Pay at counter, not at table',
        'Tipping is not necessary',
        'Prepare exact change if possible'
      ],
      icon: '💴'
    }
  ];

  const diningEssentials = [
    {
      title: 'Before eating',
      phrase: 'いただきます (Itadakimasu)',
      meaning: 'I humbly receive',
      usage: 'Say before starting your meal to show gratitude'
    },
    {
      title: 'After eating',
      phrase: 'ごちそうさまでした (Gochisousama deshita)',
      meaning: 'Thank you for the feast',
      usage: 'Say after finishing to thank for the meal'
    },
    {
      title: 'Asking for help',
      phrase: 'すみません (Sumimasen)',
      meaning: 'Excuse me',
      usage: 'Politely get staff attention or apologize'
    },
    {
      title: 'Expressing satisfaction',
      phrase: 'おいしいです (Oishii desu)',
      meaning: 'It\'s delicious',
      usage: 'Compliment the food while eating'
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
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Culture & Etiquette</h1>
              <p className="text-lg text-gray-600">Discover cultural codes and proper manners for Japanese dining</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Introduction */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="prose prose-purple max-w-none">
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Understanding Japanese dining culture goes beyond just knowing how to use chopsticks. 
              It's about respect, harmony, and gratitude – values deeply embedded in every aspect 
              of the Japanese dining experience.
            </p>
            
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-900 mb-3">🎯 What you'll learn:</h3>
              <ul className="text-purple-800 space-y-1">
                <li>• <strong>Essential phrases</strong> for restaurant interactions</li>
                <li>• <strong>Table manners</strong> and proper chopstick usage</li>
                <li>• <strong>Cultural principles</strong> behind dining etiquette</li>
                <li>• <strong>Common mistakes</strong> to avoid</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cultural Tips */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Essential Cultural Principles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {culturalTips.map((tip, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center">
                <div className="text-3xl mb-4">{tip.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{tip.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{tip.description}</p>
                <p className="text-xs text-purple-700 font-medium">{tip.tip}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Dining Essentials */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Essential Dining Phrases
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {diningEssentials.map((essential, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="font-bold text-gray-900 mb-3">{essential.title}</h3>
                
                <div className="space-y-2 mb-4">
                  <div>
                    <span className="text-sm text-gray-500">Japanese:</span>
                    <div className="text-lg font-medium text-gray-900">{essential.phrase}</div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Meaning:</span>
                    <div className="text-gray-700">{essential.meaning}</div>
                  </div>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded p-3">
                  <span className="text-sm text-purple-800">{essential.usage}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Common Phrases */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Common Restaurant Phrases
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {commonPhrases.map((phrase, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <Globe className="w-5 h-5 text-purple-600 mr-2" />
                  <h3 className="font-bold text-gray-900">{phrase.situation}</h3>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div>
                    <span className="text-sm text-gray-500">Japanese:</span>
                    <div className="text-lg font-medium">{phrase.japanese}</div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">Pronunciation:</span>
                    <div className="italic text-gray-700">{phrase.romaji}</div>
                  </div>
                  <div>
                    <span className="text-sm text-gray-500">English:</span>
                    <div className="font-medium">{phrase.english}</div>
                  </div>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded p-3">
                  <span className="text-sm text-purple-800">{phrase.response}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Etiquette Rules */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Fundamental Etiquette Rules
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {etiquetteRules.map((category, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="text-center mb-4">
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <h3 className="font-bold text-gray-900">{category.category}</h3>
                </div>
                
                <ul className="space-y-2">
                  {category.rules.map((rule, i) => (
                    <li key={i} className="text-sm text-gray-700 flex items-start">
                      <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {rule}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Key Reminders */}
        <section className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Key Reminders for Success
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Show Gratitude</h3>
              <p className="text-gray-600 text-sm">
                Japanese dining culture is built on gratitude. Always thank before and after meals.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Respect Others</h3>
              <p className="text-gray-600 text-sm">
                Keep quiet, be patient, and show consideration for other diners and staff.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Observe & Learn</h3>
              <p className="text-gray-600 text-sm">
                Watch other customers and follow their lead. When in doubt, ask politely.
              </p>
            </div>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-gray-600 italic">
              "The most important thing is not perfect execution, but showing genuine respect and effort to understand Japanese culture."
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
