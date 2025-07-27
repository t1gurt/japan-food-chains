import Link from 'next/link';
import { ArrowLeft, Book, Heart, Users, Globe, Brain, Lightbulb, MessageCircle, Eye, Handshake, Coffee } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Understanding Japanese Culture | Deep Guide 2025 | JapanChains',
  description: 'Complete guide to decode Japanese behavior and mindset. Beyond stereotypes: in-depth analysis of Japanese mentality.',
  keywords: 'japanese culture, japanese behavior, japanese mindset, japan social rules, japanese psychology, understand japan',
  openGraph: {
    title: 'Understanding Japanese Culture | Deep Guide 2025',
    description: 'Complete guide to decode Japanese behavior and mindset. Beyond stereotypes: in-depth analysis.',
    type: 'article',
    url: '/guides/comprendre-culture-japonaise',
  },
  alternates: {
    canonical: '/guides/comprendre-culture-japonaise',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function UnderstandingJapaneseCulturePage() {
  const culturalFoundations = [
    {
      title: "Geography and Nature",
      icon: Globe,
      description: "Isolated archipelago that shaped unique mentality",
      points: [
        "Island isolation fostered homogeneous society",
        "Natural disasters developed collective resilience",
        "Limited space created harmony-focused culture",
        "Four seasons influenced aesthetic sensitivity"
      ]
    },
    {
      title: "Spirituality and Values",
      icon: Heart,
      description: "Shinto and Buddhism blend shaping worldview",
      points: [
        "Respect for nature and ancestors",
        "Concept of purity (kegare) and purification",
        "Impermanence acceptance (mono no aware)",
        "Balance and middle way philosophy"
      ]
    },
    {
      title: "Social Hierarchy",
      icon: Users,
      description: "Confucian influence on social structure",
      points: [
        "Age and seniority respect (senpai-kohai)",
        "Group before individual priorities",
        "Face-saving and honor concepts",
        "Vertical relationships importance"
      ]
    }
  ];

  const socialConcepts = [
    {
      term: "Wa (和)",
      pronunciation: "wa",
      translation: "Harmony",
      explanation: "The fundamental principle of Japanese society. Avoiding conflict and maintaining group harmony takes precedence over individual expression.",
      examples: [
        "Not contradicting others directly in meetings",
        "Using indirect communication",
        "Compromising personal desires for group benefit"
      ]
    },
    {
      term: "Omotenashi (おもてなし)",
      pronunciation: "o-mo-te-na-shi",
      translation: "Hospitality",
      explanation: "Selfless service anticipating others' needs without expecting anything in return. Goes beyond simple customer service.",
      examples: [
        "Restaurant staff anticipating your needs",
        "Helping strangers without being asked",
        "Extra care in service details"
      ]
    },
    {
      term: "Kuuki wo yomu (空気を読む)",
      pronunciation: "kū-ki wo yo-mu",
      translation: "Reading the atmosphere",
      explanation: "Ability to sense unspoken social dynamics and act appropriately without explicit communication.",
      examples: [
        "Knowing when to speak or stay silent",
        "Understanding group mood changes",
        "Adapting behavior to social context"
      ]
    },
    {
      term: "Tatemae/Honne (建前/本音)",
      pronunciation: "ta-te-ma-e / ho-n-ne",
      translation: "Public face / True feelings",
      explanation: "Distinction between what is publicly expressed (tatemae) and true feelings (honne). Not deception, but social lubrication.",
      examples: [
        "Polite refusal instead of direct 'no'",
        "Modest responses to compliments",
        "Expressing opinions indirectly"
      ]
    }
  ];

  const practicalSituations = [
    {
      situation: "In the subway",
      icon: Users,
      dos: [
        "Keep conversations quiet",
        "Give priority seats to elderly/pregnant",
        "Move to car center to make space",
        "Wait for people to exit before boarding"
      ],
      donts: [
        "Don't talk loudly on phone",
        "Don't eat strong-smelling food",
        "Don't push aggressively",
        "Don't put bags on seats during rush hour"
      ],
      culturalWhy: "Public spaces are shared territory requiring mutual respect and consideration."
    },
    {
      situation: "In restaurants",
      icon: Coffee,
      dos: [
        "Wait to be seated",
        "Say 'itadakimasu' before eating",
        "Use both hands when receiving items",
        "Thank staff when leaving"
      ],
      donts: [
        "Don't tip (can be insulting)",
        "Don't stick chopsticks upright in rice",
        "Don't pass food chopstick to chopstick",
        "Don't pour your own drink in formal settings"
      ],
      culturalWhy: "Dining is a ritual with deep cultural meaning, showing respect for food and service."
    },
    {
      situation: "At work/meetings",
      icon: Handshake,
      dos: [
        "Arrive early",
        "Exchange business cards with both hands",
        "Listen more than you speak",
        "Acknowledge others' opinions before stating yours"
      ],
      donts: [
        "Don't interrupt seniors",
        "Don't disagree directly",
        "Don't be too individual in opinions",
        "Don't rush decisions"
      ],
      culturalWhy: "Hierarchy and consensus-building are fundamental to Japanese business culture."
    }
  ];

  const complexConcepts = [
    {
      title: "The Modesty Paradox",
      description: "Why Japanese people downplay their achievements",
      explanation: "Modesty (enryo) is not false humility but genuine concern for group harmony. Standing out individually can be seen as selfish.",
      practicalTip: "When complimented, acknowledge graciously but don't boast. Say 'arigato gozaimasu' and deflect credit to team/teacher/luck."
    },
    {
      title: "The Apology Culture",
      description: "Why Japanese people apologize constantly",
      explanation: "Sumimasen serves multiple functions: apology, excuse me, thank you. It's social lubricant maintaining harmony, not admission of guilt.",
      practicalTip: "Use 'sumimasen' liberally - when entering spaces, asking for help, or receiving service. It shows cultural awareness."
    },
    {
      title: "The Silence Comfort",
      description: "Why quiet moments aren't awkward",
      explanation: "Silence (ma) is meaningful in Japanese culture. It allows reflection and shows respect for others' thoughts.",
      practicalTip: "Don't feel pressured to fill quiet moments. Comfortable silence often indicates good relationship."
    }
  ];

  const foreignerPerspective = [
    {
      title: "Gaijin Effect",
      description: "How being foreign affects interactions",
      reality: "Japanese people often have lowered expectations for foreigners, which can be both helpful (forgiveness for mistakes) and limiting (assumption of inability).",
      tips: [
        "Learn basic Japanese to exceed expectations",
        "Show cultural awareness to gain respect",
        "Don't exploit 'gaijin privilege' too much",
        "Understand you may always be somewhat 'outside'"
      ]
    },
    {
      title: "Communication Styles",
      description: "Adapting to indirect communication",
      reality: "Direct communication can be seen as rude or aggressive. Japanese prefer suggestion and implication.",
      tips: [
        "Use phrases like 'maybe' or 'perhaps'",
        "Ask 'what do you think?' instead of stating opinions",
        "Watch for non-verbal cues",
        "Understand 'maybe' often means 'no'"
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
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Understanding Japanese Culture</h1>
              <p className="text-lg text-gray-600">Complete guide to decode behaviors and mindset</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Introduction */}
        <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="prose prose-purple max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Beyond Stereotypes</h2>
            <p className="text-xl text-gray-700 leading-relaxed mb-6">
              Japanese culture is often misunderstood through oversimplified stereotypes. This guide provides 
              an in-depth analysis of the psychological and social mechanisms that truly drive Japanese behavior, 
              helping you understand the 'why' behind cultural practices.
            </p>
            
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-900 mb-3">🎯 What you'll discover:</h3>
              <ul className="text-purple-800 space-y-1">
                <li>• <strong>Deep foundations</strong> of Japanese mentality</li>
                <li>• <strong>Social concepts</strong> that govern interactions</li>
                <li>• <strong>Practical applications</strong> for daily situations</li>
                <li>• <strong>Foreign perspective</strong> on cultural navigation</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cultural Foundations */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Foundations of Japanese Mentality
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {culturalFoundations.map((foundation, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
                    <foundation.icon className="w-6 h-6 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{foundation.title}</h3>
                    <p className="text-sm text-gray-600">{foundation.description}</p>
                  </div>
                </div>
                
                <ul className="space-y-2">
                  {foundation.points.map((point, i) => (
                    <li key={i} className="text-gray-700 text-sm flex items-start">
                      <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Social Concepts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Key Social Concepts
          </h2>
          
          <div className="space-y-6">
            {socialConcepts.map((concept, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="grid lg:grid-cols-3 gap-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{concept.term}</h3>
                    <div className="text-sm text-gray-600 mb-2">
                      <strong>Pronunciation:</strong> {concept.pronunciation}
                    </div>
                    <div className="text-sm text-blue-600 font-semibold">
                      "{concept.translation}"
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <p className="text-gray-700 mb-4">{concept.explanation}</p>
                    
                    <h4 className="font-semibold text-gray-900 mb-2">Examples in practice:</h4>
                    <ul className="space-y-1">
                      {concept.examples.map((example, i) => (
                        <li key={i} className="text-gray-600 text-sm flex items-start">
                          <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                          {example}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Practical Situations */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Practical Daily Situations
          </h2>
          
          <div className="space-y-8">
            {practicalSituations.map((situation, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <situation.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{situation.situation}</h3>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="font-semibold text-green-700 mb-3">✅ Do:</h4>
                    <ul className="space-y-2">
                      {situation.dos.map((item, i) => (
                        <li key={i} className="text-gray-700 text-sm flex items-start">
                          <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-red-700 mb-3">❌ Don't:</h4>
                    <ul className="space-y-2">
                      {situation.donts.map((item, i) => (
                        <li key={i} className="text-gray-700 text-sm flex items-start">
                          <span className="w-2 h-2 bg-red-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-blue-900 mb-2">Cultural Understanding:</h4>
                  <p className="text-blue-800 text-sm">{situation.culturalWhy}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Complex Concepts */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            Most Confusing Concepts Explained
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {complexConcepts.map((concept, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{concept.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{concept.description}</p>
                <p className="text-gray-700 text-sm mb-4">{concept.explanation}</p>
                
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-orange-900 mb-2">💡 Practical Tip:</h4>
                  <p className="text-orange-800 text-sm">{concept.practicalTip}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Foreigner Perspective */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
            The Foreign Perspective
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {foreignerPerspective.map((perspective, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">{perspective.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{perspective.description}</p>
                <p className="text-gray-700 mb-4">{perspective.reality}</p>
                
                <h4 className="font-semibold text-gray-900 mb-3">Practical Tips:</h4>
                <ul className="space-y-2">
                  {perspective.tips.map((tip, i) => (
                    <li key={i} className="text-gray-700 text-sm flex items-start">
                      <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                      {tip}
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
            Key Takeaways for Cultural Navigation
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">🎯 Remember these principles:</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• Group harmony over individual expression</li>
                <li>• Indirect communication is the norm</li>
                <li>• Silence can be comfortable and meaningful</li>
                <li>• Modesty and humility are highly valued</li>
                <li>• Context matters more than explicit words</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-3">✅ Success strategies:</h4>
              <ul className="text-gray-700 text-sm space-y-1">
                <li>• <strong>Observe first:</strong> Watch before acting</li>
                <li>• <strong>Ask softly:</strong> Use indirect questions</li>
                <li>• <strong>Be patient:</strong> Allow time for responses</li>
                <li>• <strong>Show respect:</strong> Acknowledge hierarchy</li>
                <li>• <strong>Stay humble:</strong> Don't boast about achievements</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-gray-600 italic">
              "Understanding Japanese culture is not about perfect behavior, but about showing genuine respect and effort to connect across cultural differences."
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}
