import Link from "next/link";
import CategoryViewTracker from '../../../components/CategoryViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Abura Soba: Guide to Tokyo's Brothless Noodles | JapanChains",
  description: "Discover abura soba, Tokyo's 'oil noodles'. A healthier dish than it appears, with its own tasting rituals.",
  keywords: "abura soba, Tokyo noodles, Japanese cuisine, oil noodles, mazesoba",
  openGraph: {
    title: "Abura Soba: Guide to Tokyo's Brothless Noodles | JapanChains",
    description: "Discover abura soba, Tokyo's 'oil noodles'. A healthier dish than it appears, with its own tasting rituals.",
    type: "article",
    url: "https://japonchaines.com/type-plat/aburasoba",
    siteName: "JapanChains",
    locale: "en_US",
    images: [{
      url: "/images/aburasoba-cover.jpg",
      width: 1200,
      height: 630,
      alt: "Abura Soba - Tokyo's brothless noodles"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Abura Soba: Guide to Tokyo's Brothless Noodles | JapanChains",
    description: "Discover abura soba, Tokyo's 'oil noodles'. A healthier dish than it appears, with its own tasting rituals.",
    images: ["/images/aburasoba-cover.jpg"]
  },
  alternates: {
    canonical: "https://japonchaines.com/type-plat/aburasoba"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

export default function AburassobaPage() {
  const abursobaChains = [
    {
      name: "Tokyo Abura-gumi Sōhonten",
      japanese: "東京油組総本店",
      description: "The emblematic chain for classic abura soba. Traditional style with high-quality noodles and secret tare.",
      specialties: ["Classic Abura Soba", "Abura Soba with egg", "Oimeshi (extra rice)"],
      priceRange: "¥880",
      orderingMethod: "Vending machine",
      vegetarianOptions: "Limited",
      uniqueFeatures: ["Classic style", "Same price all sizes", "Mixing instructions"],
      founded: "2009",
      href: "/chaines/tokyo-abura-gumi"
    },
    {
      name: "Ganso Aburado",
      japanese: "元祖油堂",
      description: "Modern innovation with unique noodles mixing wheat flour and pasta flour. Modern atmosphere and free tea.",
      specialties: ["Signature Abura Soba", "Hybrid noodles", "Free black oolong tea"],
      priceRange: "¥880",
      orderingMethod: "Vending machine",
      vegetarianOptions: "Available",
      uniqueFeatures: ["Innovative noodles", "Free health tea", "Modern design"],
      founded: "2012",
      href: "/chaines/ganso-aburado"
    }
  ];

  const abursobaComponents = [
    {
      name: "Noodles (麺)",
      japanese: "めん",
      description: "Thick and chewy wheat noodles, specially designed to absorb tare without becoming mushy",
      characteristics: "Chewy texture, smooth surface, thick diameter",
      importance: "Base of the recipe - determines the taste experience",
      details: "Uses high hydration rate to achieve characteristic 'mochi-mochi' texture"
    },
    {
      name: "Tare (タレ)",
      japanese: "たれ",
      description: "Concentrated sauce at the bottom of the bowl, mixture of shoyu, pork/chicken broth and oyster",
      characteristics: "Intense, umami, slightly sweet",
      importance: "Soul of the dish - contains all the flavor",
      details: "Often prepared with chashu cooking juice for more richness"
    },
    {
      name: "Flavored Oil (香味油)",
      japanese: "こうみゆ",
      description: "Sesame oil or blend of flavored oils, coats noodles and carries flavors",
      characteristics: "Aromatic, smooth, non-greasy",
      importance: "Flavor vehicle and silky texture",
      details: "Contrary to appearances, provides fewer calories than traditional ramen"
    },
    {
      name: "Toppings (具)",
      japanese: "ぐ",
      description: "Minimalist selection: chashu, menma, nori, optional marinated egg",
      characteristics: "Simple, balanced, non-dominant",
      importance: "Complement without masking the main taste",
      details: "Egg yolk adds creamy richness that's much appreciated"
    }
  ];

  const eatingSteps = [
    {
      step: 1,
      title: "Add condiments",
      japanese: "調味料を加える",
      description: "Pour vinegar (酢) and chili oil (ラー油) over the hot noodles",
      tip: "2 rounds for normal portion, 3 rounds for large portion"
    },
    {
      step: 2,
      title: "Vigorous mixing",
      japanese: "よく混ぜる",
      description: "Mix vigorously to bring up the tare from the bottom and coat all noodles",
      tip: "Mix while hot for perfect emulsion"
    },
    {
      step: 3,
      title: "Immediate tasting",
      japanese: "すぐに食べる",
      description: "Eat quickly to enjoy optimal temperature and texture",
      tip: "Slurp loudly - it's encouraged!"
    },
    {
      step: 4,
      title: "Oimeshi (optional)",
      japanese: "追い飯",
      description: "Add rice to the remaining sauce for a 'second dish'",
      tip: "Like making 'scarpetta' with bread in Italy"
    }
  ];

  return (
    <>
      <CategoryViewTracker categoryName="aburasoba" />
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="text-sm">
              <Link href="/" className="text-gray-500 hover:text-red-600">Home</Link>
              <span className="text-gray-400 mx-2">/</span>
              <Link href="/type-plat" className="text-gray-500 hover:text-red-600">Dish Type</Link>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-gray-900 font-medium">Abura Soba</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-r from-amber-100 to-orange-100 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <span className="text-5xl mr-4">🍜</span>
                  <div>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                      Abura Soba
                    </h1>
                    <p className="text-2xl text-gray-600 japanese-text">油そば</p>
                    <p className="text-lg text-gray-500 italic">Flavored oil noodles</p>
                  </div>
                </div>
                <p className="text-xl text-gray-700 mb-6">
                  Don't be fooled by its name! Abura soba is healthier than classic ramen. 
                  Brothless noodles, mixed with concentrated sauce and flavored oil.
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-sm font-medium">
                    Price: ¥880
                  </span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Healthier than ramen
                  </span>
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    Interactive experience
                  </span>
                </div>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">The Art of Abura Soba</h3>
                <p className="text-gray-600 mb-4">
                  Born in the 1950s in Tokyo, abura soba transforms the eater into a chef. 
                  You mix the ingredients yourself to create your own culinary masterpiece.
                </p>
                <p className="text-gray-600">
                  <strong>Healthy paradox:</strong> Despite its name "oil noodles", abura soba contains 
                  2/3 of the calories of ramen and half the salt!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Components Breakdown */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Anatomy of Abura Soba: The Four Pillars
              <span className="block text-lg text-gray-600 mt-2">油そばの四つの柱</span>
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {abursobaComponents.map((component, index) => (
                <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{component.name}</h3>
                  <p className="text-gray-600 japanese-text text-sm mb-3">{component.japanese}</p>
                  <p className="text-gray-600 text-sm mb-4">{component.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div>
                      <span className="font-semibold text-gray-900">Character: </span>
                      <span className="text-gray-600">{component.characteristics}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-gray-900">Importance: </span>
                      <span className="text-gray-600">{component.importance}</span>
                    </div>
                    <div className="pt-2 border-t border-orange-200">
                      <span className="font-semibold text-gray-900">Detail: </span>
                      <span className="text-gray-600 text-xs">{component.details}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How to Eat Guide */}
        <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Tasting Ritual: You Are the Chef!
              <span className="block text-lg text-gray-600 mt-2">食べ方の儀式</span>
            </h2>
            
            <div className="grid lg:grid-cols-4 gap-6">
              {eatingSteps.map((step, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg relative">
                  <div className="absolute -top-4 left-6 bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                    {step.step}
                  </div>
                  <div className="mt-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 japanese-text text-sm mb-3">{step.japanese}</p>
                    <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <p className="text-orange-800 text-xs font-medium">💡 Tip: {step.tip}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                Advanced Customization
                <span className="block text-sm font-normal text-gray-600">カスタマイズオプション</span>
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl mb-4">🧅</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Chopped Onions</h4>
                  <p className="text-gray-600 text-sm">Add crunch and a fresh, spicy note</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-4">🧄</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Grated Garlic</h4>
                  <p className="text-gray-600 text-sm">Completely transforms the dish's aromatic profile</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl mb-4">🌶️</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">Black Pepper</h4>
                  <p className="text-gray-600 text-sm">Adds a spicy and fragrant dimension</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Chains */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Main Abura Soba Chains
            </h2>
            <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {abursobaChains.map((chain, index) => (
                <Link 
                  key={index}
                  href={chain.href}
                  className="group bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-orange-200 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gray-200 rounded-lg flex items-center justify-center mr-4">
                        <span className="text-xs text-gray-500">Logo</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                          {chain.name}
                        </h3>
                        <p className="text-gray-600 japanese-text">{chain.japanese}</p>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{chain.description}</p>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900">Specialties:</h4>
                        <p className="text-sm text-gray-600">{chain.specialties.join(", ")}</p>
                      </div>
                      <div className="grid grid-cols-1 gap-2 text-sm">
                        <div>
                          <span className="font-semibold text-gray-900">Price: </span>
                          <span className="text-gray-600">{chain.priceRange}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900">Founded: </span>
                          <span className="text-gray-600">{chain.founded}</span>
                        </div>
                        <div>
                          <span className="font-semibold text-gray-900">Ordering: </span>
                          <span className="text-gray-600">{chain.orderingMethod}</span>
                        </div>
                      </div>
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Unique features:</h4>
                        <div className="flex flex-wrap gap-1">
                          {chain.uniqueFeatures.map((feature, featureIndex) => (
                            <span key={featureIndex} className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded-full">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <div className="text-sm text-gray-600">
                          <span className="font-semibold text-gray-900">Vegetarian: </span>
                          <span className="text-gray-600">{chain.vegetarianOptions}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mt-6 flex items-center justify-between">
                      <span className="text-orange-600 font-medium text-sm group-hover:text-orange-700">
                        View details →
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-16 bg-gradient-to-r from-orange-500 to-red-500 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Discover Abura Soba?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              This unique culinary experience awaits you in Tokyo's streets. 
              Become a chef for a day and create your own masterpiece!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/chaines/tokyo-abura-gumi"
                className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Tokyo Abura-gumi
              </Link>
              <Link 
                href="/chaines/ganso-aburado"
                className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Ganso Aburado
              </Link>
              <Link 
                href="/guides/comment-commander"
                className="bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-800 transition-colors border-2 border-orange-300"
              >
                Ordering Guide
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
