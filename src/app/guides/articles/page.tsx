import Link from 'next/link';
import { BookOpen, Clock, TrendingUp, Star, ArrowRight, Calendar, Users, Award } from 'lucide-react';
import GuideViewTracker from '../../../components/GuideViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'In-depth Articles on Japanese Culinary Culture | JapanChains',
  description: 'In-depth analysis of the history, trends and secrets of Japanese gastronomy and its restaurant chains.',
  keywords: 'Japanese culinary culture, Japan gastronomy articles, Japanese restaurant history, culinary anthropology, food trends',
  openGraph: {
    title: 'In-depth Articles on Japanese Culinary Culture | JapanChains',
    description: 'In-depth analysis of the history, trends and secrets of Japanese gastronomy and its restaurant chains.',
    type: 'website',
    locale: 'en_US',
    siteName: 'JapanChains - Guide to Japanese Restaurant Chains'
  },
  alternates: {
    canonical: '/guides/articles'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function ArticlesPage() {
  // Articles sorted by difficulty level
  const articles = [
    {
      title: 'From "Omotenashi" to "Ohitorisama": Japanese Gastronomic Culture seen by a French Person',
      slug: 'culture-gaishoku-francais',
      description: 'In-depth analysis of cultural differences between France and Japan in the art of restaurant dining',
      excerpt: 'A fascinating exploration of opposing culinary philosophies: from Japanese no-tipping service to solo dining culture, through restaurant specialization and presentation aesthetics.',
      readTime: '18 min',
      category: 'Culinary Anthropology',
      difficulty: 'Beginner',
      topics: ['French culture', 'Omotenashi', 'Ohitorisama', 'Cultural comparison', 'Gastronomic philosophy'],
      publishDate: '2025-07-06',
      featured: true,
      icon: '🇫🇷',
      color: 'bg-blue-500'
    },
    {
      title: 'Gotochiburger: The Regional Gastronomic Journey',
      slug: 'gotochiburger-voyage',
      description: 'Explore Japan\'s unique regional burgers: from historic Sasebo to marine creations from Suruga Bay',
      excerpt: 'Discover gotōchi burgers, these regional specialties that transform each prefecture into a unique culinary destination. From Kitakata\'s ramen burger to Awaji\'s creations.',
      readTime: '12 min',
      category: 'Regional Culture',
      difficulty: 'Beginner',
      topics: ['Gotōchi', 'Regions', 'Specialties', 'Culinary journey'],
      publishDate: '2025-01-20',
      featured: true,
      icon: '🗾',
      color: 'bg-green-500'
    },
    {
      title: 'The Japanese Burger Revolution: From Fast Food to Gastronomy',
      slug: 'revolution-burger-japonais',
      description: 'How Japan transformed the American hamburger into culinary art with Rice Burger, Teriyaki and Wagyu',
      excerpt: 'Discover how Japan reinvented the hamburger by integrating its culinary philosophy: from the revolutionary Rice Burger to gastronomic Wagyu creations, a story of respectful innovation.',
      readTime: '15 min',
      category: 'Culinary History',
      difficulty: 'Intermediate',
      topics: ['Innovation', 'Gastronomy', 'History', 'Culture'],
      publishDate: '2025-01-15',
      featured: true,
      icon: '🍔',
      color: 'bg-red-500'
    },
    {
      title: 'The History of Ramen in Japan',
      slug: 'histoire-ramen',
      description: 'From Chinese import to Japanese invention: how ramen became the soul of Japanese street food',
      excerpt: 'Discover how a dish of Chinese origin transformed into a Japanese culinary symbol, from the first Yokohama stalls to modern chains conquering the world.',
      readTime: '8 min',
      category: 'History',
      difficulty: 'Intermediate',
      topics: ['Culture', 'History', 'Culinary evolution'],
      publishDate: '2024-12-15',
      featured: true,
      icon: '🍜',
      color: 'bg-orange-500'
    },
    {
      title: 'Kaiten-zushi: The Technological Revolution in Restaurant Industry',
      slug: 'kaiten-zushi-technologie-revolution',
      description: 'Pepper robots, predictive AI, express delivery: how conveyor belt sushi revolutionizes global gastronomy',
      excerpt: 'Discover how Japanese kaiten-zushi have become laboratories of technological innovation, transforming culinary art into future experiences with robots, AI and automation.',
      readTime: '16 min',
      category: 'Innovation & Technology',
      difficulty: 'Intermediate',
      topics: ['Robotics', 'Artificial Intelligence', 'Automation', 'Future', 'Hama Sushi'],
      publishDate: '2025-01-30',
      featured: true,
      icon: '🤖',
      color: 'bg-cyan-500'
    },
    {
      title: 'Yakiniku: Japan\'s Gastronomic and Social Experience',
      slug: 'yakiniku-culture-et-gastronomie',
      description: 'From its Korean origins to its transformation into Japanese culinary art: history, philosophy and yakiniku techniques',
      excerpt: 'Discover the world of Japanese yakiniku: from its historical roots to its philosophy of sharing, through perfect grilling techniques and the art of tare sauces. A complete immersion in this culinary tradition that transcends simple gastronomy.',
      readTime: '15 min',
      category: 'Culture & Gastronomy',
      difficulty: 'Intermediate',
      topics: ['Yakiniku', 'Culture', 'Conviviality', 'Wagyu', 'Grilling techniques', 'History'],
      publishDate: '2025-07-05',
      featured: true,
      icon: '🔥',
      color: 'bg-red-500'
    },
    {
      title: 'Kikan Gentei & Moe-dan: The Japanese Art of Burger',
      slug: 'culture-consommation-burger',
      description: 'Limited period and cut aesthetics: how Japan revolutionized consumption culture',
      excerpt: 'Analyze the kikan gentei (期間限定) and moe-dan (萌え断) phenomena that transform each burger into a cultural and viral experience on social media.',
      readTime: '14 min',
      category: 'Culture & Society',
      difficulty: 'Advanced',
      topics: ['Kikan Gentei', 'Moe-dan', 'Marketing', 'Aesthetics', 'Social Media'],
      publishDate: '2025-01-25',
      featured: true,
      icon: '📸',
      color: 'bg-pink-500'
    },
    {
      title: 'The Secrets of Dashi',
      slug: 'secrets-dashi',
      description: 'The fundamental broth of Japanese cuisine: ingredients, techniques and philosophy of umami taste',
      excerpt: 'Dive into the millennial art of dashi, this transparent broth that revolutionizes taste. Kombu, katsuobushi and modern innovations from chains.',
      readTime: '10 min',
      category: 'Technique',
      difficulty: 'Advanced',
      topics: ['Umami', 'Culinary technique', 'Traditional ingredients'],
      publishDate: '2024-12-10',
      featured: true,
      icon: '🥣',
      color: 'bg-blue-500'
    },
    {
      title: 'Gyudon Chain Comparison',
      slug: 'comparatif-gyudon',
      description: 'Yoshinoya vs Sukiya vs Matsuya: detailed analysis of the three giants of Japanese beef bowl',
      excerpt: 'Battle royale of gyudon titans! History, strategies, secret recipes and brand positioning of the three chains that dominate Japan.',
      readTime: '12 min',
      category: 'Analysis',
      difficulty: 'Expert',
      topics: ['Business', 'Comparison', 'Marketing strategy'],
      publishDate: '2024-12-05',
      featured: true,
      icon: '🥩',
      color: 'bg-purple-500'
    }
  ];

  const categories = [
    {
      name: 'Culinary Anthropology',
      description: 'Comparative analysis and in-depth cultural studies',
      count: 1,
      color: 'bg-blue-100 text-blue-800'
    },
    {
      name: 'Culture & Gastronomy',
      description: 'Japanese culinary art and gastronomic traditions',
      count: 1,
      color: 'bg-red-100 text-red-800'
    },
    {
      name: 'Innovation & Technology',
      description: 'Technological revolutions in Japanese restaurant industry',
      count: 1,
      color: 'bg-cyan-100 text-cyan-800'
    },
    {
      name: 'Culinary History',
      description: 'Revolutions and evolutions of Japanese cuisine',
      count: 2,
      color: 'bg-orange-100 text-orange-800'
    },
    {
      name: 'Regional Culture',
      description: 'Japanese local specialties and traditions',
      count: 1,
      color: 'bg-green-100 text-green-800'
    },
    {
      name: 'Culture & Society',
      description: 'Social phenomena and contemporary trends',
      count: 1,
      color: 'bg-pink-100 text-pink-800'
    },
    {
      name: 'Technique',
      description: 'Culinary secrets and traditional methods',
      count: 1,
      color: 'bg-blue-100 text-blue-800'
    },
    {
      name: 'Analysis',
      description: 'In-depth studies of chains and trends',
      count: 1,
      color: 'bg-purple-100 text-purple-800'
    }
  ];
  const difficultyLevels: Record<string, { color: string; icon: string }> = {
    'Beginner': { color: 'bg-green-100 text-green-800', icon: '🌱' },
    'Intermediate': { color: 'bg-yellow-100 text-yellow-800', icon: '🌿' },
    'Advanced': { color: 'bg-orange-100 text-orange-800', icon: '🌳' },
    'Expert': { color: 'bg-red-100 text-red-800', icon: '🎋' }
  };

  const stats = [
    { label: 'Available articles', value: '8', icon: BookOpen },
    { label: 'Total reading time', value: '105 min', icon: Clock },
    { label: 'Topics covered', value: '27', icon: Star },
    { label: 'Technologies covered', value: '100%', icon: Award }
  ];

  const comingSoon = [
    {
      title: 'The Art of Kaizen at CoCo Ichibanya',
      description: 'How continuous improvement shapes customer experience',
      eta: 'January 2025'
    },
    {
      title: 'The Sushi Revolution: from Craft to Industrial',
      description: 'The technological evolution of kaiten-zushi chains',
      eta: 'February 2025'
    },
    {
      title: 'Psychology of Design: Why Ichiran Isolates its Customers',
      description: 'Behavioral analysis of restaurant architecture',
      eta: 'March 2025'
    }
  ];

  return (
    <>
      <GuideViewTracker guideName="articles" />
      <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="flex space-x-2 text-sm">
            <Link href="/" className="text-gray-500 hover:text-red-600">Home</Link>
            <span className="text-gray-400">→</span>
            <Link href="/guides" className="text-gray-500 hover:text-red-600">Practical Guides</Link>
            <span className="text-gray-400">→</span>
            <span className="text-gray-900">In-depth Articles</span>
          </nav>
        </div>
      </div>

      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <BookOpen className="w-12 h-12 text-indigo-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              In-depth Articles
            </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
              In-depth explorations of Japanese culinary culture. History, techniques, 
              business analysis and secrets of the biggest chains in the Land of the Rising Sun.
            </p>
            <div className="text-sm text-gray-500 japanese-text">
              専門記事コレクション
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center mb-2">
                    <IconComponent className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Featured Articles */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Available Articles
        </h2>
        
        <div className="space-y-8">
          {articles.map((article, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className={`${article.color} p-3 rounded-lg`}>
                      <span className="text-2xl">{article.icon}</span>
                    </div>
                    <div>
                      <div className="flex items-center space-x-3 mb-2">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${difficultyLevels[article.difficulty].color}`}>
                          {difficultyLevels[article.difficulty].icon} {article.difficulty}
                        </span>
                        <span className="px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                          {article.category}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{article.title}</h3>
                      <p className="text-gray-600 font-medium">{article.description}</p>
                    </div>
                  </div>
                  
                  <div className="text-right text-sm text-gray-500">
                    <div className="flex items-center mb-1">
                      <Clock className="w-4 h-4 mr-1" />
                      {article.readTime}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(article.publishDate).toLocaleDateString('en-US')}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6 leading-relaxed">{article.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {article.topics.map((topic, i) => (
                      <span key={i} className="bg-indigo-50 text-indigo-700 px-2 py-1 rounded text-xs">
                        {topic}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    href={`/guides/articles/${article.slug}`}
                    className="inline-flex items-center bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
                  >
                    Read article
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              </div>
              
              {article.featured && (
                <div className="bg-gradient-to-r from-yellow-50 to-orange-50 border-t px-8 py-4">
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-500 mr-2" />
                    <span className="text-sm font-medium text-yellow-800">Featured article</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-gray-100 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Article Categories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex items-center justify-center space-x-2">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${category.color}`}>
                    {category.count} article{category.count > 1 ? 's' : ''}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Coming Soon */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">
          Coming Soon
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {comingSoon.map((item, index) => (
            <div key={index} className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6">
              <div className="text-center mb-4">
                <TrendingUp className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm">
                  {item.eta}
                </span>
              </div>
              
              <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">
              Don't miss any new articles
            </h2>
            <p className="text-indigo-200 mb-6 max-w-2xl mx-auto">
              Be the first to know about our exclusive analysis and discoveries 
              about Japanese culinary culture.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/about"
                className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors"
              >
                About the project
              </Link>
              <Link
                href="/guides"
                className="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors"
              >
                All guides
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
