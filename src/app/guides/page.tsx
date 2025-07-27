import Link from 'next/link';
import { ArrowLeft, Book, Utensils, Heart, Globe, ChefHat, HelpCircle, Brain, Wine } from 'lucide-react';
import GuideViewTracker from '../../components/GuideViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Practical Guides | Dining in Japan | JapanChains",
  description: "Master the art of dining in Japan: ordering, etiquette, dietary requirements, culinary culture.",
  keywords: "Japan travel guide, Japanese restaurant, how to order, Japan etiquette, dietary requirements",
  openGraph: {
    title: "Practical Guides | Dining in Japan | JapanChains",
    description: "Master the art of dining in Japan: ordering, etiquette, dietary requirements, culinary culture.",
    type: "website",
    locale: "en_US",
    siteName: "JapanChains - Guide to Japanese Restaurant Chains"
  },
  alternates: {
    canonical: "/guides"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function GuidesPage() {  const guides = [
    {
      id: 'comprendre-culture-japonaise',
      title: 'Understanding Japanese Culture',
      subtitle: 'Complete guide to the Japanese mindset',
      description: 'In-depth analysis of the Japanese spirit beyond stereotypes. Decode the concepts of honne/tatemae, uchi/soto and indirect communication for authentic understanding.',
      icon: Brain,
      color: 'purple',
      available: true,
      highlights: [
        'Historical and geographical foundations',
        'Key concepts: honne/tatemae, uchi/soto',
        'Japanese social psychology',
        'Effective intercultural communication'
      ]
    },
    {
      id: 'comment-choisir-restaurant-japonais',
      title: 'How to Choose a Japanese Restaurant',
      subtitle: 'Selection guide based on your situation',
      description: 'Practical advice for choosing the ideal Japanese restaurant according to your budget, group and dietary preferences.',
      icon: HelpCircle,
      color: 'orange',
      available: true,
      highlights: [
        'Key decision factors',
        'Restaurant types by difficulty level',
        'Budget advice and recommendations',
        'Avoiding tourist traps'
      ]
    },
    {
      id: 'comment-commander',
      title: 'How to Order',
      subtitle: 'Master all Japanese ordering systems',
      description: 'Complete guide to vending machines, touch screens, QR codes and useful phrases for stress-free ordering.',
      icon: Utensils,
      color: 'red',
      available: true,
      highlights: [
        'Ticket vending machines step by step',
        'Interactive touch screens',
        'QR code ordering',
        'Essential phrases in 3 languages'
      ]
    },
    {
      id: 'restaurant-sushi',
      title: 'Sushi Restaurant Guide',
      subtitle: 'Choose the perfect sushi restaurant',
      description: 'Complete guide to navigate the world of Japanese sushi restaurants: kaiten-zushi, traditional sushi-ya and modern chains.',
      icon: ChefHat,
      color: 'blue',
      available: true,
      highlights: [
        'Comparison of restaurant types',
        'Top 3 sushi chains',
        'Selection advice by situation',
        'Price and budget guide'
      ]
    },
    {
      id: 'regimes-alimentaires',
      title: 'Dietary Requirements Guide',
      subtitle: 'Eat according to your needs and beliefs',
      description: 'Detailed information for vegetarians, vegans, halal and food allergies in each chain.',
      icon: Heart,
      color: 'green',
      available: true,
      highlights: [
        'Vegetarian and vegan options',
        'Halal and pork-free foods',
        'Allergen guide',
        'Advice by restaurant chain'
      ]
    },
    {
      id: 'culture-etiquette',
      title: 'Culture & Etiquette',
      subtitle: 'Discover Japanese cultural customs',
      description: 'Learn good manners, culinary vocabulary and traditions for an authentic experience.',
      icon: Globe,
      color: 'blue',
      available: true,
      highlights: [
        'Japanese cuisine glossary',
        'Restaurant etiquette',
        'Culinary traditions',
        'Common expressions'
      ]
    },
    {
      id: 'boissons-japonaises',
      title: 'Guide to Japanese Drinks',
      subtitle: 'The art of drinking in Japan',
      description: 'Complete guide to Japanese beverages: sake, shochu, Japanese whisky, beer. Culture, etiquette and perfect pairings for an authentic experience.',
      icon: Wine,
      color: 'purple',
      available: true,
      highlights: [
        'Sake: classifications and temperatures',
        'Shochu and Japanese whisky',
        'Service etiquette and culture',
        'Expert food and drink pairings'
      ]
    },
    {
      id: 'articles',
      title: 'In-depth Articles',
      subtitle: 'Dive into Japanese culinary culture',
      description: 'In-depth articles on dish history, chain comparisons and secrets of Japanese gastronomy.',
      icon: Book,
      color: 'purple',
      available: true,
      highlights: [
        'History of ramen',
        'Secrets of dashi',
        'Gyūdon chain comparison',
        'Evolution of Japanese cuisine'
      ]
    }
  ];

  const getColorClasses = (color: string) => {    const colorMap = {
      red: {
        bg: 'bg-red-50',
        border: 'border-red-200',
        icon: 'text-red-600',
        button: 'bg-red-600 hover:bg-red-700',
        coming: 'bg-red-100 text-red-800'
      },
      orange: {
        bg: 'bg-orange-50',
        border: 'border-orange-200',
        icon: 'text-orange-600',
        button: 'bg-orange-600 hover:bg-orange-700',
        coming: 'bg-orange-100 text-orange-800'
      },
      green: {
        bg: 'bg-green-50',
        border: 'border-green-200',
        icon: 'text-green-600',
        button: 'bg-green-600 hover:bg-green-700',
        coming: 'bg-green-100 text-green-800'
      },
      blue: {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        icon: 'text-blue-600',
        button: 'bg-blue-600 hover:bg-blue-700',
        coming: 'bg-blue-100 text-blue-800'
      },
      purple: {
        bg: 'bg-purple-50',
        border: 'border-purple-200',
        icon: 'text-purple-600',
        button: 'bg-purple-600 hover:bg-purple-700',
        coming: 'bg-purple-100 text-purple-800'
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };  return (
    <>
      <GuideViewTracker guideName="guides-overview" />
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-r from-red-600 to-orange-600 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <div className="flex justify-center mb-6">
              <div className="bg-white/20 p-4 rounded-full">
                <ChefHat className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Practical Guides
            </h1>
            <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
              Master the art of dining in Japanese chains with our expert guides
            </p>
          </div>
        </div>
      </div>

      {/* Introduction */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Culinary Passport to Japan</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            Beyond a simple list of restaurants, we offer you the keys to living an <strong>authentic experience</strong> 
            in Japanese chains. These practical guides transform apprehension into confidence and confusion into pleasure.
          </p>
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-lg p-6">
            <p className="text-gray-800 font-medium">
              💡 <strong>Expert tip:</strong> Start with the "How to Order" guide to learn the basics, 
              then explore other sections based on your specific needs.
            </p>
          </div>
        </div>

        {/* Guides Grid */}
        <div className="grid gap-8">
          {guides.map((guide) => {
            const colors = getColorClasses(guide.color);
            const IconComponent = guide.icon;
            
            return (
              <div key={guide.id} className={`${colors.bg} ${colors.border} border-2 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl`}>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <div className={`${colors.icon} bg-white p-3 rounded-full mr-4`}>
                        <IconComponent className="h-8 w-8" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{guide.title}</h3>
                        <p className="text-lg text-gray-600">{guide.subtitle}</p>
                      </div>
                      {!guide.available && (
                        <div className={`${colors.coming} px-3 py-1 rounded-full text-sm font-medium ml-4`}>
                          Coming soon
                        </div>
                      )}
                    </div>
                    
                    <p className="text-gray-700 mb-6">{guide.description}</p>
                    
                    <div className="grid md:grid-cols-2 gap-3 mb-6">
                      {guide.highlights.map((highlight, index) => (
                        <div key={index} className="flex items-center">
                          <span className="bg-white rounded-full w-2 h-2 mr-3"></span>
                          <span className="text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="lg:ml-8">
                    {guide.available ? (
                      <Link 
                        href={`/guides/${guide.id}`}
                        className={`${colors.button} text-white px-8 py-4 rounded-xl font-semibold transition-colors duration-200 inline-block text-center`}
                      >
                        Discover the guide
                      </Link>
                    ) : (
                      <div className="bg-gray-200 text-gray-600 px-8 py-4 rounded-xl font-semibold text-center">
                        In preparation
                      </div>
                    )}                  </div>
                </div>
              </div>
            );
          })}        </div>
      </div>
      </div>
    </>
  );
}
