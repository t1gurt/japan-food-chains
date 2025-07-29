'use client';

import Link from 'next/link';
import { useState, useMemo } from 'react';
import { Search, Star, TrendingUp, Clock, MapPin } from 'lucide-react';
import { Metadata } from 'next';

// Note: This metadata will need to be moved to a layout.tsx or generated statically
// since this is a client component
const metadata: Metadata = {
  title: "46 Japanese Chains | 2025 Guide | JapanChains",
  description: "Explore 46 chains classified by type. Reviews, menus, prices to help you choose where to eat in Japan.",
  keywords: "Japanese restaurant chains, Japan restaurant list, Japanese chains guide, eating in Japan",
  openGraph: {
    title: "46 Japanese Chains | 2025 Guide | JapanChains",
    description: "Explore 46 chains classified by type. Reviews, menus, prices to help you choose where to eat in Japan.",
    type: "website",
    locale: "en_US",
    siteName: "JapanChains - Your Guide to Japanese Restaurants"
  },
  alternates: {
    canonical: "/chains"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function ChainsPage() {
  // State for search and filtering
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const chains = useMemo(() => [
    {
      slug: 'anan',
      name: 'Anan',
      nameJp: '安安',
      category: 'Yakiniku',
      description: 'Affordable charcoal yakiniku - "安くて旨い" (cheap and delicious) in a casual atmosphere.',
      popularity: 'Popular',
      avgPrice: '1500-2500¥'
    },
    {
      slug: 'bamiyan',
      name: 'Bamiyan',
      nameJp: 'バーミヤン',
      category: 'Chinese Cuisine',
      description: 'Family-friendly Chinese restaurant chain with generous portions at affordable prices.',
      popularity: 'Popular',
      avgPrice: '800-1500¥'
    },
    {
      slug: 'big-echo',
      name: 'Big Echo',
      nameJp: 'ビッグエコー',
      category: 'Karaoke',
      description: 'Japan\'s leading karaoke chain - cutting-edge technology and an exhaustive music library.',
      popularity: 'Very Popular',
      avgPrice: '1500-3500¥'
    },
    {
      slug: 'botejyu',
      name: 'Botejyu',
      nameJp: 'ぼてぢゅう',
      category: 'Okonomiyaki',
      description: 'The legendary inventor of okonomiyaki with mayonnaise and creator of Modan-yaki since 1946.',
      popularity: 'Popular',
      avgPrice: '800-1800¥'
    },
    {
      slug: 'coco-ichibanya',
      name: 'CoCo Ichibanya',
      nameJp: 'CoCo壱番屋',
      category: 'Curry',
      description: 'The most popular Japanese curry chain with many customization options.',
      popularity: 'Very Popular',
      avgPrice: '600-1200¥'
    },
    {
      slug: 'domdom',
      name: 'Dom Dom Burger',
      nameJp: 'ドムドムハンバーガー',
      category: 'Burgers',
      description: 'Japan\'s oldest hamburger (1970) - a resurrected phoenix with bold creations and a legendary mascot.',
      popularity: 'Moderate',
      avgPrice: '500-900¥'
    },
    {
      slug: 'doutor',
      name: 'Doutor Coffee',
      nameJp: 'ドトールコーヒー',
      category: 'Cafe',
      description: 'Pioneer of modern Japanese coffee - artisanal quality and innovation since 1980.',
      popularity: 'Very Popular',
      avgPrice: '200-450¥'
    },
    {
      slug: 'freshness-burger',
      name: 'Freshness Burger',
      nameJp: 'フレッシュネスバーガー',
      category: 'Burgers',
      description: 'Premium burger chain with fresh ingredients and healthy options.',
      popularity: 'Moderate',
      avgPrice: '800-1500¥'
    },
    {
      slug: 'fuji-soba',
      name: 'Fuji Soba',
      nameJp: '富士そば',
      category: 'Soba',
      description: 'Traditional Tokyo soba noodle chain, open 24/7, popular with salarymen.',
      popularity: 'Popular',
      avgPrice: '300-700¥'
    },
    {
      slug: 'futago',
      name: 'Futago',
      nameJp: 'ふたご',
      category: 'Yakiniku',
      description: 'Osaka\'s premium yakiniku revolution with the legendary "Hasami-deru Kalbi" and "mouth-to-mouth" service.',
      popularity: 'Popular',
      avgPrice: '3000-5000¥'
    },
    {
      slug: 'gindako',
      name: 'Gindako',
      nameJp: '銀だこ',
      category: 'Street Food',
      description: 'Specialist in authentic Osaka takoyaki with live cooking and a secret sauce.',
      popularity: 'Very Popular',
      avgPrice: '480-800¥'
    },
    {
      slug: 'go-go-curry',
      name: 'Go Go Curry',
      nameJp: 'ゴーゴーカレー',
      category: 'Curry',
      description: 'Kanazawa-style curry served quickly with a characteristic thick sauce.',
      popularity: 'Popular',
      avgPrice: '500-900¥'
    },
    {
      slug: 'gusto',
      name: 'Gusto',
      nameJp: 'ガスト',
      category: 'Family Restaurant',
      description: '24-hour family restaurant with a varied menu of Western and Japanese dishes.',
      popularity: 'Very Popular',
      avgPrice: '600-1200¥'
    },
    {
      slug: 'gyoza-no-ohsho',
      name: 'Gyoza no Ohsho',
      nameJp: '餃子の王将',
      category: 'Chinese Cuisine',
      description: 'Specialist in gyoza and Chinese dishes at popular prices.',
      popularity: 'Very Popular',
      avgPrice: '400-800¥'
    },
    {
      slug: 'gyukaku',
      name: 'Gyukaku',
      nameJp: '牛角',
      category: 'Yakiniku',
      description: 'Leader in premium yakiniku - quality meats in a modern and friendly atmosphere.',
      popularity: 'Very Popular',
      avgPrice: '2000-4000¥'
    },
    {
      slug: 'hama-sushi',
      name: 'Hama Sushi',
      nameJp: 'はま寿司',
      category: 'Sushi',
      description: 'Conveyor belt sushi at 110¥ per piece with tablet ordering.',
      popularity: 'Very Popular',
      avgPrice: '100-120¥/piece'
    },
    {
      slug: 'hanamaru-udon',
      name: 'Hanamaru Udon',
      nameJp: 'はなまるうどん',
      category: 'Udon',
      description: 'Specialist in affordable fresh udon with many toppings.',
      popularity: 'Very Popular',
      avgPrice: '200-500¥'
    },
    {
      slug: 'hidakaya',
      name: 'Hidakaya',
      nameJp: '日高屋',
      category: 'Chinese Cuisine',
      description: 'Popular gyoza & ramen - accessible Chinese cuisine since 1979.',
      popularity: 'Very Popular',
      avgPrice: '300-700¥'
    },
    {
      slug: 'hoshino',
      name: 'Hoshino Coffee',
      nameJp: '星乃珈琲店',
      category: 'Cafe',
      description: 'Authentic Showa nostalgia - artisanal siphon coffee and signature pancakes.',
      popularity: 'Popular',
      avgPrice: '480-1280¥'
    },
    {
      slug: 'ichiran',
      name: 'Ichiran',
      nameJp: '一蘭',
      category: 'Ramen',
      description: 'Tonkotsu ramen in individual booths for a unique experience.',
      popularity: 'Very Popular',
      avgPrice: '800-1200¥'
    },
    {
      slug: 'isomaru-suisan',
      name: 'Isomaru Suisan',
      nameJp: '磯丸水産',
      category: 'Izakaya',
      description: 'Revolutionary izakaya with table grills for fresh seafood - friendly maritime atmosphere.',
      popularity: 'Very Popular',
      avgPrice: '1000-4000¥'
    },
    {
      slug: 'ikinari-steak',
      name: 'Ikinari Steak',
      nameJp: 'いきなりステーキ',
      category: 'Steak',
      description: 'Steak revolution in Japan: premium quality standing at affordable prices.',
      popularity: 'Popular',
      avgPrice: '1500-3000¥'
    },
    {
      slug: 'ippudo',
      name: 'Ippudo',
      nameJp: '一風堂',
      category: 'Ramen',
      description: 'High-end tonkotsu ramen originating from Hakata (Fukuoka).',
      popularity: 'Popular',
      avgPrice: '900-1500¥',
      bgImage: '/images/chaines/ippudo/shiromaru-motoaji.jpg'
    },
    {
      slug: 'jolly-pasta',
      name: 'Jolly Pasta',
      nameJp: 'ジョリーパスタ',
      category: 'Family Restaurant',
      description: 'Specialist in Italian pasta adapted to Japanese taste, family atmosphere.',
      popularity: 'Popular',
      avgPrice: '800-1500¥'
    },
    {
      slug: 'jonathans',
      name: 'Jonathan\'s',
      nameJp: 'ジョナサン',
      category: 'Family Restaurant',
      description: 'Family restaurant with a varied menu, open late and suitable for families.',
      popularity: 'Popular',
      avgPrice: '700-1300¥'
    },
    {
      slug: 'karaoke-kan',
      name: 'Karaoke Kan',
      nameJp: 'カラオケ館',
      category: 'Karaoke',
      description: 'Premium service and high-end spaces for an exceptional karaoke experience.',
      popularity: 'Popular',
      avgPrice: '2000-4500¥'
    },
    {
      slug: 'komeda',
      name: 'Komeda Coffee',
      nameJp: 'コメダ珈琲店',
      category: 'Cafe',
      description: 'Modern Kissaten with legendary Morning Service and Shironoir specialty.',
      popularity: 'Very Popular',
      avgPrice: '450-780¥'
    },
    {
      slug: 'komoro-soba',
      name: 'Komoro Soba',
      nameJp: '小諸そば',
      category: 'Soba',
      description: 'Authentic tachi-gui (standing eating) experience with traditional Shinshu-style soba.',
      popularity: 'Moderate',
      avgPrice: '290-550¥'
    },
    {
      slug: 'kura-sushi',
      name: 'Kura Sushi',
      nameJp: 'くら寿司',
      category: 'Sushi',
      description: 'Conveyor belt sushi with a game system and rewards for children.',
      popularity: 'Very Popular',
      avgPrice: '100-120¥/piece'
    },
    {
      slug: 'kushikatsu-tanaka',
      name: 'Kushikatsu Tanaka',
      nameJp: '串カツ田中',
      category: 'Izakaya',
      description: 'Specialist in Osaka kushikatsu - breaded and fried skewers with secret sauce.',
      popularity: 'Popular',
      avgPrice: '1500-2500¥'
    },
    {
      slug: 'lotteria',
      name: 'Lotteria',
      nameJp: 'ロッテリア',
      category: 'Fast Food',
      description: 'Japanese fast food chain with local-style burgers.',
      popularity: 'Moderate',
      avgPrice: '500-1000¥'
    },
    {
      slug: 'marugame-seimen',
      name: 'Marugame Seimen',
      nameJp: '丸亀製麺',
      category: 'Udon',
      description: 'Freshly prepared udon in front of you with many toppings.',
      popularity: 'Very Popular',
      avgPrice: '300-600¥'
    },
    {
      slug: 'matsuya',
      name: 'Matsuya',
      nameJp: '松屋',
      category: 'Gyudon',
      description: 'Cheap gyudon and curry, open 24/7 in many locations.',
      popularity: 'Very Popular',
      avgPrice: '350-700¥'
    },
    {
      slug: 'miyamoto-munashi',
      name: 'Miyamoto Munashi',
      nameJp: '宮本むなし',
      category: 'Teishoku',
      description: 'Economical teishoku chain from Osaka, known for its XXL portions at low prices.',
      popularity: 'Popular',
      avgPrice: '400-800¥'
    },
    {
      slug: 'mos-burger',
      name: 'Mos Burger',
      nameJp: 'モスバーガー',
      category: 'Burgers',
      description: 'Japanese burgers with local ingredients and unique flavors.',
      popularity: 'Popular',
      avgPrice: '600-1200¥'
    },
    {
      slug: 'nakau',
      name: 'Nakau',
      nameJp: 'なか卯',
      category: 'Gyudon',
      description: 'Family-friendly gyudon with udon specialties and balanced options.',
      popularity: 'Popular',
      avgPrice: '350-650¥'
    },
    {
      slug: 'ootoya',
      name: 'Ootoya',
      nameJp: '大戸屋',
      category: 'Teishoku',
      description: 'High-end teishoku with fresh vegetables, visible cooking, and careful presentation.',
      popularity: 'Popular',
      avgPrice: '800-1500¥'
    },
    {
      slug: 'osaka-ohsho',
      name: 'Osaka Ohsho',
      nameJp: '大阪王将',
      category: 'Chinese Cuisine',
      description: 'Osaka-style Chinese cuisine with crispy gyoza and signature yakimeshi.',
      popularity: 'Popular',
      avgPrice: '500-1300¥'
    },
    {
      slug: 'ringer-hut',
      name: 'Ringer Hut',
      nameJp: 'リンガーハット',
      category: 'Champon/Ramen',
      description: 'Specialist in Nagasaki champon with fresh vegetables.',
      popularity: 'Popular',
      avgPrice: '600-1000¥'
    },
    {
      slug: 'saizeriya',
      name: 'Saizeriya',
      nameJp: 'サイゼリヤ',
      category: 'Italian',
      description: 'Very affordable Italian restaurant popular with students.',
      popularity: 'Very Popular',
      avgPrice: '200-800¥'
    },
    {
      slug: 'shirokiya',
      name: 'Shirokiya',
      nameJp: '白木屋',
      category: 'Izakaya',
      description: 'Izakaya chain with all-you-can-eat options and a casual atmosphere.',
      popularity: 'Popular',
      avgPrice: '2000-3500¥'
    },
    {
      slug: 'sukiya',
      name: 'Sukiya',
      nameJp: 'すき家',
      category: 'Gyudon',
      description: 'Japan\'s largest gyudon chain, open 24/7.',
      popularity: 'Very Popular',
      avgPrice: '300-600¥'
    },
    {
      slug: 'sukiya-curry',
      name: 'Sukiya Curry',
      nameJp: 'すき家のカレー',
      category: 'Curry',
      description: 'Sukiya\'s curry version with quick and affordable curries.',
      popularity: 'Moderate',
      avgPrice: '400-700¥'
    },
    {
      slug: 'sushiro',
      name: 'Sushiro',
      nameJp: 'スシロー',
      category: 'Sushi',
      description: 'Leader in conveyor belt sushi with a mobile app to avoid waiting.',
      popularity: 'Very Popular',
      avgPrice: '100-120¥/piece'
    },
    {
      slug: 'tenkaippin',
      name: 'Tenkaippin',
      nameJp: '天下一品',
      category: 'Ramen',
      description: 'Ramen with a thick and creamy broth, a very popular unique style.',
      popularity: 'Popular',
      avgPrice: '700-1100¥'
    },
    {
      slug: 'tenya',
      name: 'Tenya',
      nameJp: 'てんや',
      category: 'Tempura',
      description: 'Specialist in quick and affordable tendon (tempura on rice).',
      popularity: 'Popular',
      avgPrice: '500-900¥'
    },
    {
      slug: 'torikizoku',
      name: 'Torikizoku',
      nameJp: '鳥貴族',
      category: 'Yakitori',
      description: 'Yakitori chain with a single price of 327¥ per skewer.',
      popularity: 'Very Popular',
      avgPrice: '327¥/skewer'
    },
    {
      slug: 'tsunahachi',
      name: 'Tsunahachi',
      nameJp: 'つな八',
      category: 'Tempura',
      description: 'Traditional high-quality tempura since 1923.',
      popularity: 'Moderate',
      avgPrice: '1500-3000¥'
    },
    {
      slug: 'watami',
      name: 'Watami',
      nameJp: 'ワタミ',
      category: 'Izakaya',
      description: 'Large izakaya chain with all-you-can-eat options and a friendly atmosphere.',
      popularity: 'Popular',
      avgPrice: '2500-4000¥'
    },
    {
      slug: 'yayoiken',
      name: 'Yayoiken',
      nameJp: 'やよい軒',
      category: 'Teishoku',
      description: 'Popular teishoku with free unlimited rice and affordable prices for everyone.',
      popularity: 'Popular',
      avgPrice: '450-850¥'
    },
    {
      slug: 'yoshinoya',
      name: 'Yoshinoya',
      nameJp: '吉野家',
      category: 'Gyudon',
      description: 'Pioneer of gyudon since 1899, open 24/7 throughout Japan.',
      popularity: 'Very Popular',
      avgPrice: '300-600¥'
    },
    {
      slug: 'yudetaro',
      name: 'Yudetaro',
      nameJp: 'ゆで太郎',
      category: 'Soba',
      description: 'Modern soba chain offering artisanal noodles at affordable prices with fast service.',
      popularity: 'Popular',
      avgPrice: '300-600¥'
    }], []);
  const categories = [
    'All',
    'Cafe',
    'Champon/Ramen',
    'Chinese Cuisine',
    'Curry',
    'Fast Food',
    'Gyudon',
    'Burgers',
    'Italian',
    'Izakaya',
    'Karaoke',
    'Okonomiyaki',
    'Ramen',
    'Family Restaurant',
    'Soba',
    'Steak',
    'Street Food',
    'Sushi',
    'Teishoku',
    'Tempura',
    'Udon',
    'Yakitori',
    'Yakiniku'
  ];

  // Filtered chains based on search and category
  const filteredChains = useMemo(() => {
    return chains.filter(chain => {
      const matchesSearch = searchTerm === '' || 
        chain.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        chain.nameJp.includes(searchTerm) ||
        chain.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
        chain.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === 'All' || chain.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, chains]);

  const getPopularityBadge = (popularity: string) => {
    switch (popularity) {
      case 'Very Popular':
        return 'bg-red-100 text-red-800';
      case 'Popular':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPopularityIcon = (popularity: string) => {
    switch (popularity) {
      case 'Very Popular':
        return <Star className="w-4 h-4" />;
      case 'Popular':
        return <TrendingUp className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Japanese Restaurant Chains
            </h1>
            <p className="text-xl text-gray-600 mb-6 max-w-3xl mx-auto">
              Discover all {filteredChains.length} Japanese restaurant chains
              {selectedCategory !== 'All' ? ` specializing in ${selectedCategory}` : ''}
              {searchTerm ? ` matching "${searchTerm}"` : ''} with their specialties,
              prices, and ordering tips for a confident dining experience.
            </p>
              {/* Search Bar */}
            <div className="max-w-md mx-auto relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search for a chain..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === selectedCategory
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </div>      {/* Chains Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredChains.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No chain found
            </h3>
            <p className="text-gray-600 mb-4">
              Try modifying your search or filters
            </p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All');
              }}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredChains.map((chain) => (
            <Link
              key={chain.slug}
              href={`/chains/${chain.slug}`}
              className="bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-200 overflow-hidden relative"
              style={chain.bgImage ? {
                backgroundImage: `url('${chain.bgImage}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              } : {}}
            >
              {chain.bgImage && (
                <div 
                  className="absolute inset-0 hover:opacity-75 transition-all duration-300"
                  style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}
                ></div>
              )}
              <div className="p-6 relative z-10">
                {/* Header with popularity badge */}
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className={`text-xl font-semibold mb-1 ${chain.bgImage ? 'text-white' : 'text-gray-900'}`}>
                      {chain.name}
                    </h3>
                    <p className={`text-sm japanese-text ${chain.bgImage ? 'text-gray-200' : 'text-gray-500'}`}>
                      {chain.nameJp}
                    </p>
                  </div>
                  <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getPopularityBadge(chain.popularity)}`}>
                    {getPopularityIcon(chain.popularity)}
                    <span>{chain.popularity}</span>
                  </div>
                </div>

                {/* Category */}
                <div className="mb-3">
                  <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${chain.bgImage ? 'bg-black bg-opacity-40 text-white' : 'bg-red-50 text-red-700'}`}>
                    {chain.category}
                  </span>
                </div>

                {/* Description */}
                <p className={`text-sm mb-4 line-clamp-2 ${chain.bgImage ? 'text-gray-200' : 'text-gray-600'}`}>
                  {chain.description}
                </p>

                {/* Price info */}
                <div className="flex items-center justify-between">
                  <div className={`flex items-center text-sm ${chain.bgImage ? 'text-gray-300' : 'text-gray-500'}`}>
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>Average Price</span>
                  </div>
                  <span className={`text-sm font-semibold ${chain.bgImage ? 'text-white' : 'text-gray-900'}`}>
                    {chain.avgPrice}
                  </span>                </div>
              </div>
            </Link>
          ))}
        </div>
        )}
      </div>

      {/* Stats Section */}
      <div className="bg-gray-100 border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">{chains.length}</div>
              <div className="text-gray-600">Chains Referenced</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">{filteredChains.length}</div>
              <div className="text-gray-600">Currently Displayed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">100%</div>
              <div className="text-gray-600">In English</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-red-600 mb-2">24/7</div>
              <div className="text-gray-600">Accessible</div>
            </div>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Need help choosing?
            </h2>
            <p className="text-gray-600 mb-6">
              Consult our practical guides to better understand different types of restaurants.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/dish-types"
              className="text-center p-6 bg-red-50 rounded-lg hover:bg-red-100 transition-colors"
            >
              <div className="text-2xl mb-3">🍜</div>
              <h3 className="font-semibold text-gray-900 mb-2">By Dish Type</h3>
              <p className="text-sm text-gray-600">
                Find chains by culinary specialty
              </p>
            </Link>
            
            <Link
              href="/guides/how-to-order"
              className="text-center p-6 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors"
            >
              <div className="text-2xl mb-3">📱</div>
              <h3 className="font-semibold text-gray-900 mb-2">How to Order</h3>
              <p className="text-sm text-gray-600">
                Complete guide to ordering
              </p>
            </Link>
            
            <Link
              href="/guides"
              className="text-center p-6 bg-yellow-50 rounded-lg hover:bg-yellow-100 transition-colors"
            >
              <div className="text-2xl mb-3">📚</div>
              <h3 className="font-semibold text-gray-900 mb-2">All Guides</h3>
              <p className="text-sm text-gray-600">
                Practical tips and tricks
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}




