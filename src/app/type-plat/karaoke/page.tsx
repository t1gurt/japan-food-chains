import Link from 'next/link';
import { ArrowLeft, Music, Gamepad2, Users, Clock, Star, Heart, TrendingUp, History } from 'lucide-react';
import { Metadata } from 'next';
import CategoryViewTracker from '../../../components/CategoryViewTracker';

export const metadata: Metadata = {
  title: 'Karaoke in Japan | Chains and Culture | Japanese Restaurant Guide',
  description: 'Complete guide to karaoke in Japan - Culture, popular chains like Big Echo and Karaoke Kan, prices, systems and authentic Japanese experience.',
  keywords: [
    'karaoke japan', 'karaoke box', 'big echo', 'karaoke kan',
    'japanese singing', 'japan entertainment', 'karaoke culture',
    'private rooms', 'modern equipment', 'authentic experience'
  ],
  openGraph: {
    title: 'Karaoke in Japan | Culture and Popular Chains',
    description: 'Discover karaoke culture in Japan with our guides to popular chains and practical tips',
    type: 'article',
    url: '/type-plat/karaoke',
  },
  alternates: {
    canonical: '/type-plat/karaoke',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function KaraokePage() {
  const karaokeChains = [
    {
      name: 'Big Echo',
      slug: 'big-echo',
      japanese: 'ビッグエコー',
      description: 'Popular karaoke chain with modern equipment and friendly atmosphere',
      color: 'purple',
      icon: Music,
      features: ['Modern equipment', 'Friendly atmosphere', 'Group rooms']
    },
    {
      name: 'Karaoke Kan',
      slug: 'karaoke-kan',
      japanese: 'カラオケ館',
      description: 'Quality karaoke with private rooms and premium equipment',
      color: 'blue',
      icon: Gamepad2,
      features: ['Premium equipment', 'Private rooms', 'Quality service']
    }
  ];

  return (
    <>
      <CategoryViewTracker categoryName="karaoke" />
      <div className="min-h-screen bg-gray-50">
        {/* Header with back button */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link 
              href="/type-plat" 
              className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to dish types
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center">
                <Music className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Karaoke</h1>
                <p className="text-gray-600">カラオケ - Japanese Musical Entertainment</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Introduction to karaoke culture */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Karaoke Culture in Japan</h2>
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Karaoke was born in Japan in the 1970s and has become a central element 
                of Japanese social culture. More than just entertainment, it's a means 
                of expression, relaxation and socialization after work or with friends.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Japanese "karaoke boxes" offer private rooms equipped with high-quality audio 
                systems, touch screens for song selection, and often dining services. 
                It's the perfect place to have fun without constraints.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <Users className="w-6 h-6 text-purple-600 mb-2" />
                  <h3 className="font-semibold text-gray-900 mb-1">Social</h3>
                  <p className="text-sm text-gray-600">Popular group activity after work</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <Music className="w-6 h-6 text-blue-600 mb-2" />
                  <h3 className="font-semibold text-gray-900 mb-1">Varied</h3>
                  <p className="text-sm text-gray-600">Millions of Japanese and international songs</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <Heart className="w-6 h-6 text-green-600 mb-2" />
                  <h3 className="font-semibold text-gray-900 mb-1">Relaxed</h3>
                  <p className="text-sm text-gray-600">Non-judgmental environment for self-expression</p>
                </div>
              </div>
            </div>
          </div>

          {/* Karaoke chains */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Popular Karaoke Chains</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {karaokeChains.map((chain) => {
                const IconComponent = chain.icon;
                return (
                  <Link 
                    key={chain.slug}
                    href={`/chaines/${chain.slug}`}
                    className="group"
                  >
                    <div className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow p-6">
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 bg-${chain.color}-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                            {chain.name}
                          </h3>
                          <p className="text-gray-600 text-sm mb-2">{chain.japanese}</p>
                          <p className="text-gray-700 text-sm mb-3">{chain.description}</p>
                          
                          <div className="flex flex-wrap gap-2">
                            {chain.features.map((feature, index) => (
                              <span 
                                key={index}
                                className={`text-xs px-2 py-1 bg-${chain.color}-100 text-${chain.color}-800 rounded-full`}
                              >
                                {feature}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Practical information */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Prices and system */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                <Clock className="w-5 h-5 inline mr-2 text-purple-600" />
                Prices and System
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">30 minutes</span>
                  <span className="font-medium">¥400-600</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">1 hour</span>
                  <span className="font-medium">¥800-1200</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-700">All-inclusive (3h)</span>
                  <span className="font-medium">¥1500-2500</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-700">Drink package</span>
                  <span className="font-medium">+¥200-400</span>
                </div>
              </div>
              
              <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  💡 <strong>Tip:</strong> Prices are often cheaper during the day 
                  and weekdays. Some chains offer "nomihoudai" (all-you-can-drink) 
                  packages that are very advantageous.
                </p>
              </div>
            </div>

            {/* How to use */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                <Star className="w-5 h-5 inline mr-2 text-purple-600" />
                How to Use
              </h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    1
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Reservation</p>
                    <p className="text-gray-600 text-sm">Choose duration and number of people at the counter</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    2
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Song selection</p>
                    <p className="text-gray-600 text-sm">Use the touch screen to search for your favorite songs</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    3
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Sing!</p>
                    <p className="text-gray-600 text-sm">Take turns between participants, have fun without constraints</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold">
                    4
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Orders</p>
                    <p className="text-gray-600 text-sm">Order drinks and snacks directly from the room</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Culture and etiquette */}
          <div className="mt-8 bg-white rounded-lg shadow-sm p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              <TrendingUp className="w-5 h-5 inline mr-2 text-purple-600" />
              Karaoke Culture and Etiquette
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-2">✅ Do's</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Encourage other participants</li>
                  <li>• Choose songs known by the group</li>
                  <li>• Share the microphone fairly</li>
                  <li>• Applaud after each performance</li>
                  <li>• Order drinks to maintain the atmosphere</li>
                  <li>• Respect everyone's turn</li>
                  <li>• Help beginners use the system</li>
                  <li>• Maintain a positive and welcoming atmosphere</li>
                </ul>
              </div>
              <div>
                <h4 className="font-medium text-gray-900 mb-2">❌ Don'ts</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Monopolize the microphone</li>
                  <li>• Criticize others' performances</li>
                  <li>• Choose songs that are too long</li>
                  <li>• Make too much noise in the hallways</li>
                  <li>• Forget to pay your share of drinks</li>
                  <li>• Interrupt someone who is singing</li>
                  <li>• Ignore others' requests</li>
                  <li>• Abuse alcohol (if available)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* History and evolution of karaoke */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              <History className="w-5 h-5 inline mr-2 text-purple-600" />
              History of Karaoke in Japan
            </h3>
            <div className="space-y-6">
              <div className="border-l-4 border-purple-600 pl-4">
                <h4 className="font-medium text-gray-900 mb-2">1971 - The Origins</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Daisuke Inoue invents the first karaoke machine in Kobe. The term "karaoke" 
                  literally means "empty orchestra" (kara = empty, oke = orchestra).
                </p>
              </div>
              
              <div className="border-l-4 border-purple-600 pl-4">
                <h4 className="font-medium text-gray-900 mb-2">1980s - Popular Explosion</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Karaoke becomes democratized throughout Japan. The first private "karaoke boxes" 
                  open, revolutionizing the Japanese social experience.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-600 pl-4">
                <h4 className="font-medium text-gray-900 mb-2">1990s-2000s - Golden Age</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Massive expansion of karaoke chains. Introduction of new technologies: 
                  CD+G, then digital systems with touch screens.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-600 pl-4">
                <h4 className="font-medium text-gray-900 mb-2">2010-Today - Continuous Innovation</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  Integration of AI for vocal enhancement, music streaming, 
                  virtual reality and advanced social connectivity.
                </p>
              </div>
            </div>
          </div>

          {/* Types of establishments */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              <Music className="w-5 h-5 inline mr-2 text-purple-600" />
              Types of Karaoke Establishments
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-3">
                  <Music className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-medium text-gray-900 mb-2">Karaoke Box</h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  Private rooms for groups, the most popular and intimate experience.
                </p>
                <div className="text-xs text-gray-600 space-y-1">
                  <div>• 2-20 people</div>
                  <div>• Privacy guaranteed</div>
                  <div>• Room service</div>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-medium text-gray-900 mb-2">Karaoke Bar</h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  Open spaces where you sing in front of other customers, more traditional.
                </p>
                <div className="text-xs text-gray-600 space-y-1">
                  <div>• Friendly atmosphere</div>
                  <div>• Public performance</div>
                  <div>• Less expensive</div>
                </div>
              </div>
              
              <div className="border border-gray-200 rounded-lg p-4">
                <div className="w-12 h-12 bg-purple-600 rounded-lg flex items-center justify-center mb-3">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-medium text-gray-900 mb-2">Premium Lounge</h4>
                <p className="text-gray-700 text-sm leading-relaxed mb-3">
                  High-end establishments with personalized service and premium equipment.
                </p>
                <div className="text-xs text-gray-600 space-y-1">
                  <div>• Luxury and comfort</div>
                  <div>• Concierge service</div>
                  <div>• Professional equipment</div>
                </div>
              </div>
            </div>
          </div>

          {/* Beginner tips */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              <Heart className="w-5 h-5 inline mr-2 text-purple-600" />
              Beginner's Guide
            </h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium text-gray-900 mb-3">🎤 First Steps</h4>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-medium text-gray-900 text-sm">1. Choose your group</p>
                    <p className="text-gray-600 text-xs">2-6 people to start, relaxed atmosphere</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-medium text-gray-900 text-sm">2. Book in advance</p>
                    <p className="text-gray-600 text-xs">Especially evenings and weekends, 1-2h recommended</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-medium text-gray-900 text-sm">3. Start simple</p>
                    <p className="text-gray-600 text-xs">Known songs, short duration, build confidence</p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-medium text-gray-900 mb-3">🎵 Song Choice</h4>
                <div className="space-y-2 text-sm">
                  <div className="bg-green-50 p-2 rounded">
                    <span className="font-medium text-green-800">Beginner:</span>
                    <span className="text-green-700"> Popular songs, simple choruses</span>
                  </div>
                  <div className="bg-blue-50 p-2 rounded">
                    <span className="font-medium text-blue-800">Intermediate:</span>
                    <span className="text-blue-700"> Variety, style experimentation</span>
                  </div>
                  <div className="bg-purple-50 p-2 rounded">
                    <span className="font-medium text-purple-800">Advanced:</span>
                    <span className="text-purple-700"> Technical songs, performances</span>
                  </div>
                </div>
                
                <div className="mt-4 p-3 bg-yellow-50 rounded-lg">
                  <p className="text-sm font-medium text-yellow-800 mb-1">💡 Pro Tip</p>
                  <p className="text-xs text-yellow-700">
                    Prepare a list of 3-5 favorite songs before arriving. 
                    This will save you the stress of choosing in real time!
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social and cultural impact */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              <TrendingUp className="w-5 h-5 inline mr-2 text-purple-600" />
              Social and Cultural Impact
            </h3>
            
            <div className="prose prose-gray max-w-none">
              <p className="text-gray-700 leading-relaxed mb-4">
                Karaoke in Japan goes far beyond simple entertainment. It plays a 
                crucial role in social and professional cohesion, serving as an outlet after 
                long work days and allowing bonds between colleagues to be strengthened.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">🏢 In the Professional World</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Informal team building after work</li>
                    <li>• Free expression outside hierarchical framework</li>
                    <li>• Discovering new facets of colleagues</li>
                    <li>• Tradition of "nomikai" (going out to drink/sing)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-900 mb-3">👨‍👩‍👧‍👦 In Society</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Popular intergenerational activity</li>
                    <li>• Space for liberated personal expression</li>
                    <li>• Stress reduction and mental wellbeing</li>
                    <li>• Preservation of Japanese musical culture</li>
                  </ul>
                </div>
              </div>
              
              <p className="text-gray-700 leading-relaxed">
                This unique social practice reflects important Japanese values: the importance 
                of the group, mutual respect, and the search for social harmony. Karaoke offers a 
                safe space where usual shyness can be temporarily set aside in favor 
                of expression and sharing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
