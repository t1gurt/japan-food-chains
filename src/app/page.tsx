import Image from "next/image";
import Link from "next/link";
import MobileSearch from "@/components/MobileSearchFixed";
import MobileCategoryGrid from "@/components/MobileCategoryGrid";
import MobileChainCards from "@/components/MobileChainCards";
import MobileGuidesPreview from "@/components/MobileGuidesPreview";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Japanese Restaurants 2025 | Japan Food Chains",
  description: "45+ detailed Japanese chains. Menus, prices, complete guide for your trip to Japan!",
  keywords: "japanese restaurant, japanese chains, japan travel, restaurant guide, japanese menu, japan prices",
  openGraph: {
    title: "Japanese Restaurants 2025 | Japan Food Chains",
    description: "45+ detailed Japanese chains. Menus, prices, complete guide for your trip to Japan!",
    type: "website",
    locale: "en_US",
    siteName: "Japan Food Chains - Japanese Restaurant Guide"
  },
  alternates: {
    canonical: "/"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-red-50 to-orange-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Your English Guide to
            <span className="text-red-600 block">Japanese Restaurant Chains</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            The first comprehensive English guide to easily navigate Japanese 
            restaurant chains. Detailed menus, ordering methods and practical tips.
          </p>
          
          {/* Mobile Search */}
          <div className="md:hidden mb-8">
            <MobileSearch />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/food-type"
              className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors"
            >
              Explore by Food Type
            </Link>
            <Link 
              href="/chaines"
              className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-semibold hover:bg-red-600 hover:text-white transition-colors"
            >
              View All Chains
            </Link>
          </div>
        </div>
      </section>

      {/* Mobile Category Grid */}
      <MobileCategoryGrid />

      {/* Mobile Popular Chains */}
      <MobileChainCards />

      {/* Featured Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Discover by Cuisine Type
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { name: "Gyūdon", subtitle: "牛丼", description: "Beef rice bowls", href: "/food-type/gyudon" },
              { name: "Ramen", subtitle: "ラーメン", description: "Japanese noodles", href: "/food-type/ramen", bgImage: "/images/chaines/ippudo/shiromaru-motoaji.jpg" },
              { name: "Kaiten-zushi", subtitle: "回転寿司", description: "Conveyor sushi", href: "/food-type/kaiten-zushi" },
              { name: "Japanese Curry", subtitle: "カレー", description: "Japanese-style curry", href: "/food-type/curry" },
              { name: "Teishoku", subtitle: "定食", description: "Complete meals", href: "/food-type/teishoku" },
              { name: "Tempura", subtitle: "天ぷら", description: "Japanese fritters", href: "/food-type/tempura" },
              { name: "Udon", subtitle: "うどん", description: "Thick noodles", href: "/food-type/udon" },
              { name: "Soba", subtitle: "そば", description: "Buckwheat noodles", href: "/food-type/soba" },
              { name: "Family Restaurant", subtitle: "ファミレス", description: "Family restaurants", href: "/food-type/family-restaurants" },
              { name: "Japanese Burgers", subtitle: "日本のハンバーガー", description: "Burger innovation", href: "/food-type/burgers" },
              { name: "Chinese Cuisine", subtitle: "中華料理", description: "Japanese adaptation", href: "/food-type/cuisine-chinoise" },
              { name: "Izakaya", subtitle: "居酒屋", description: "Traditional pubs", href: "/food-type/izakaya" },
              { name: "Yakiniku", subtitle: "焼肉", description: "Japanese BBQ", href: "/food-type/yakiniku" },
              { name: "Steak", subtitle: "ステーキ", description: "Beef excellence", href: "/food-type/steak" },
              { name: "Karaoke", subtitle: "カラオケ", description: "Musical entertainment", href: "/food-type/karaoke" },
            ].map((category) => (
              <Link 
                key={category.name}
                href={category.href}
                className="group relative overflow-hidden bg-gray-50 rounded-lg p-6 hover:bg-red-50 transition-colors border border-gray-200 hover:border-red-200 block"
                style={category.bgImage ? {
                  backgroundImage: `url('${category.bgImage}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                } : {}}
              >
                {category.bgImage && (
                  <div 
                    className="absolute inset-0 group-hover:opacity-75 transition-all duration-300"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}
                  ></div>
                )}
                <div className="relative z-10">
                  <h4 className={`font-semibold mb-1 ${category.bgImage ? 'text-white group-hover:text-red-200' : 'text-gray-900 group-hover:text-red-600'}`}>
                    {category.name}
                  </h4>
                  <p className={`text-sm japanese-text mb-2 ${category.bgImage ? 'text-gray-200' : 'text-gray-600'}`}>
                    {category.subtitle}
                  </p>
                  <p className={`text-xs ${category.bgImage ? 'text-gray-300' : 'text-gray-500'}`}>
                    {category.description}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Chains */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Popular Chains
          </h3>          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { name: "Yoshinoya", japanese: "吉野家", type: "Gyūdon", slug: "yoshinoya" },
              { name: "Nakau", japanese: "なか卯", type: "Gyūdon", slug: "nakau" },
              { name: "Sushiro", japanese: "スシロー", type: "Kaiten-zushi", slug: "sushiro" },
              { name: "CoCo Ichibanya", japanese: "ココイチ", type: "Curry", slug: "coco-ichibanya" },
              { name: "Ootoya", japanese: "大戸屋", type: "Teishoku", slug: "ootoya" },
              { name: "Ichiran", japanese: "一蘭", type: "Ramen", slug: "ichiran" },
              { name: "Marugame Seimen", japanese: "丸亀製麺", type: "Udon", slug: "marugame-seimen" },
              { name: "Yudetaro", japanese: "ゆで太郎", type: "Soba", slug: "yudetaro" },
              { name: "Tenya", japanese: "てんや", type: "Tempura", slug: "tenya" },
              { name: "Gyukaku", japanese: "牛角", type: "Yakiniku", slug: "gyukaku" },
              { name: "Jolly Pasta", japanese: "ジョリーパスタ", type: "Family Restaurant", slug: "jolly-pasta" },
              { name: "Ikinari Steak", japanese: "いきなりステーキ", type: "Steak", slug: "ikinari-steak" },
              { name: "Big Echo", japanese: "ビッグエコー", type: "Karaoke", slug: "big-echo" },
            ].map((chain) => (
              <Link 
                key={chain.name}
                href={`/chaines/${chain.slug}`}
                className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-200 hover:border-red-200"
              >
                <h4 className="font-semibold text-gray-900 mb-1">{chain.name}</h4>
                <p className="text-sm text-gray-600 japanese-text mb-2">{chain.japanese}</p>
                <p className="text-xs text-red-600 font-medium">{chain.type}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Guides Preview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Practical Guides
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "How to Order",                description: "Master ticket machines, touch screens and QR code ordering",
                icon: "🎫",
                href: "/guides/comment-commander"
              },
              {
                title: "Dietary Requirements",
                description: "Complete guide for vegetarians, vegans, pork-free and allergies",
                icon: "🥗",
                href: "/guides/regimes-alimentaires"
              },
              {
                title: "Culture & Etiquette",
                description: "Learn proper manners and Japanese culinary culture",
                icon: "🙏",
                href: "/guides/culture-etiquette"
              }
            ].map((guide) => (
              <Link 
                key={guide.title}
                href={guide.href}
                className="bg-gray-50 rounded-lg p-8 hover:bg-red-50 transition-colors border border-gray-200 hover:border-red-200"
              >
                <div className="text-4xl mb-4">{guide.icon}</div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{guide.title}</h4>
                <p className="text-gray-600">{guide.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Guides Preview */}
      <MobileGuidesPreview />
    </div>
  );
}
