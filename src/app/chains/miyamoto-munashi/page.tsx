import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Heart, Zap, ChefHat, DollarSign } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Miyamoto Munashi 螳ｮ譛ｬ繧縺ｪ縺・| Osaka Teishoku | Japan Food Chains',
  description: 'Ultra-affordable Osaka teishoku chain. Generous complete meals at unbeatable prices.',
  keywords: [
    'miyamoto munashi', '螳ｮ譛ｬ繧縺ｪ縺・, 'teishoku', 'balanced meals',
    'affordable prices', 'japanese cuisine', 'traditional restaurant',
    'japanese menu', 'complete meals', 'teishoku style'
  ],
  openGraph: {
    title: 'Miyamoto Munashi: Ultra-Affordable Osaka Teishoku | Japan Food Chains',
    description: 'Discover Miyamoto Munashi, the Osaka teishoku chain. Complete and generous meals at unbeatable prices.',
    type: 'article',
    url: '/chains/miyamoto-munashi',
  },
  alternates: {
    canonical: '/chains/miyamoto-munashi',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function MiyamotoMunashiPage() {
  const menuItems = [
    {
      category: "Signature Teishoku",
      items: [
        { name: "Katsu Teishoku", nameJp: "繧ｫ繝・ｮ夐｣・, price: "ﾂ･490", description: "Breaded cutlet, rice, miso soup, pickles" },
        { name: "Ginger Pork Teishoku", nameJp: "逕溷ｧ懃┥縺榊ｮ夐｣・, price: "ﾂ･450", description: "Ginger pork, generous portion" },
        { name: "Fried Chicken Teishoku", nameJp: "蜚先恕縺貞ｮ夐｣・, price: "ﾂ･480", description: "Crispy fried chicken, tartar sauce" },
        { name: "Grilled Fish Teishoku", nameJp: "辟ｼ縺埼ｭ壼ｮ夐｣・, price: "ﾂ･520", description: "Daily grilled fish, very economical" }
      ]
    },
    {
      category: "Rice Bowls",
      items: [
        { name: "Katsu Don", nameJp: "繧ｫ繝・ｸｼ", price: "ﾂ･390", description: "Rice bowl with cutlet and egg" },
        { name: "Oyako Don", nameJp: "隕ｪ蟄蝉ｸｼ", price: "ﾂ･380", description: "Chicken and egg over rice" },
        { name: "Pork Bowl", nameJp: "雎壻ｸｼ", price: "ﾂ･420", description: "Stir-fried pork over rice" }
      ]
    },
    {
      category: "Curry & Others",
      items: [
        { name: "Katsu Curry", nameJp: "繧ｫ繝・き繝ｬ繝ｼ", price: "ﾂ･480", description: "Japanese curry with cutlet" },
        { name: "Hamburg Steak", nameJp: "繝上Φ繝舌・繧ｰ", price: "ﾂ･460", description: "Japanese-style hamburger steak" },
        { name: "Udon Set", nameJp: "縺・←繧薙そ繝・ヨ", price: "ﾂ･450", description: "Udon noodles with small rice bowl" }
      ]
    }
  ];

  const orderingSteps = [
    {
      step: "1",
      title: "Ticket Machine",
      description: "Purchase your ticket at the vending machine at the entrance",
      tip: "Pictures on buttons make selection easy"
    },
    {
      step: "2",
      title: "Find a Seat",
      description: "Sit at the counter or communal tables",
      tip: "Casual atmosphere, perfect for dining alone"
    },
    {
      step: "3",
      title: "Give Your Ticket",
      description: "Hand your ticket to kitchen staff",
      tip: "Very fast service, 3-5 minutes wait"
    },
    {
      step: "4",
      title: "Enjoy",
      description: "Enjoy your generous teishoku at a low price",
      tip: "Self-service rice at some locations"
    }
  ];

  return (
    <>
      <ChainViewTracker 
        chainName="miyamoto-munashi" 
        chainCategory="teishoku"
      />
      
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="flex space-x-2 text-sm">
              <Link href="/" className="text-gray-500 hover:text-red-600">Home</Link>
              <span className="text-gray-400">竊・/span>
              <Link href="/dish-types/teishoku" className="text-gray-500 hover:text-red-600">Teishoku</Link>
              <span className="text-gray-400">竊・/span>
              <span className="text-gray-900">Miyamoto Munashi</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="mb-6">
                  <span className="bg-orange-200 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    Affordable Teishoku
                  </span>
                </div>
                <h1 className="text-5xl font-bold mb-4">
                  Miyamoto Munashi
                </h1>
                <div className="text-2xl mb-6 japanese-text opacity-90">
                  螳ｮ譛ｬ繧縺ｪ縺・
                </div>
                <p className="text-xl leading-relaxed mb-8">
                  Japan's most affordable teishoku chain, founded in Osaka in 1989. 
                  Famous for XXL portions at unbeatable prices.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center bg-white/20 rounded-lg px-4 py-2">
                    <DollarSign className="w-5 h-5 mr-2" />
                    <span>ﾂ･400-800</span>
                  </div>
                  <div className="flex items-center bg-white/20 rounded-lg px-4 py-2">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>Mainly Kansai</span>
                  </div>
                  <div className="flex items-center bg-white/20 rounded-lg px-4 py-2">
                    <Clock className="w-5 h-5 mr-2" />
                    <span>Very fast service</span>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                  <h3 className="text-xl font-bold mb-4">Key Points</h3>
                  <ul className="space-y-3 text-lg">
                    <li className="flex items-center">
                      <Star className="w-5 h-5 mr-3 text-yellow-300" />
                      Lowest prices on the market
                    </li>
                    <li className="flex items-center">
                      <Users className="w-5 h-5 mr-3 text-yellow-300" />
                      Generous portions
                    </li>
                    <li className="flex items-center">
                      <Utensils className="w-5 h-5 mr-3 text-yellow-300" />
                      Authentic teishoku
                    </li>
                    <li className="flex items-center">
                      <Clock className="w-5 h-5 mr-3 text-yellow-300" />
                      Express service
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Story Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="bg-white rounded-2xl shadow-sm p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Story of Miyamoto Munashi</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Founded in 1989 in Osaka, Miyamoto Munashi revolutionized the concept of affordable teishoku. 
                The name "繧縺ｪ縺・ (munashi) means "empty" or "futile," an ironic reference to the idea 
                that even on a tight budget, you can eat with dignity.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-6">
                The chain's philosophy rests on three pillars: <strong>maximum volume</strong>, 
                <strong>minimum price</strong>, and <strong>consistent quality</strong>. This approach 
                won over workers, students, and families in Osaka before expanding throughout Kansai.
              </p>
              
              <div className="bg-orange-50 border-l-4 border-orange-400 p-6 my-8">
                <h3 className="text-lg font-semibold text-orange-800 mb-2">Unique Concept</h3>
                <p className="text-orange-700">
                  Miyamoto Munashi defies conventions by offering complete teishoku meals for under 500ﾂ･, 
                  a feat in a market where quality often means high prices.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Menu Section */}
        <div className="bg-gray-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Signature Menu</h2>
              <p className="text-xl text-gray-600">Generous teishoku at unbeatable prices</p>
            </div>
            
            <div className="grid gap-8">
              {menuItems.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-white rounded-2xl shadow-sm p-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 pb-3 border-b border-gray-200">
                    {category.category}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex justify-between items-start p-4 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h4 className="font-semibold text-gray-900">{item.name}</h4>
                            <span className="japanese-text text-sm text-gray-600">{item.nameJp}</span>
                          </div>
                          <p className="text-sm text-gray-600">{item.description}</p>
                        </div>
                        <div className="text-right ml-4">
                          <span className="text-lg font-bold text-orange-600">{item.price}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Ordering Guide */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Order</h2>
            <p className="text-xl text-gray-600">Simple and efficient ticket system</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {orderingSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  {index < orderingSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-16 w-full h-0.5 bg-gray-300"></div>
                  )}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 mb-3">{step.description}</p>
                <div className="bg-orange-50 text-orange-700 text-sm p-3 rounded-lg">
                  庁 {step.tip}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Cultural Tips */}
        <div className="bg-orange-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Cultural Tips</h2>
              <p className="text-xl text-gray-600">Make the most of your Miyamoto Munashi experience</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl mb-4">･｢</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Popular Atmosphere</h3>
                <p className="text-gray-600">
                  Casual and lively atmosphere, typical of popular Osaka restaurants. 
                  Perfect for an authentic Kansai experience.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl mb-4">腸</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Student Budget</h3>
                <p className="text-gray-600">
                  Very popular with students and workers for its 
                  "maximum food, minimum money" proposition.
                </p>
              </div>
              
              <div className="bg-white rounded-lg p-6 shadow-sm">
                <div className="text-3xl mb-4">忽</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Self-Service Rice</h3>
                <p className="text-gray-600">
                  At some locations, rice is served self-service. 
                  Don't hesitate to get seconds if you're still hungry!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-orange-600 text-white py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for affordable teishoku?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Discover why Miyamoto Munashi became the symbol of affordable teishoku 
              and generous portions in Osaka.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/dish-types/teishoku"
                className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Explore Teishoku
              </Link>
              <Link
                href="/chains"
                className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
              >
                Other Chains
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



