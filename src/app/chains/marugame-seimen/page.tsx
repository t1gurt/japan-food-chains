import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, Award, History, Wheat, Globe, Eye, ChefHat, Utensils, Heart, Lightbulb } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Marugame Seimen 丸亀製麺 | Artisanal Udon | JapanChains",
  description: "Watch artisans prepare fresh udon. Quick self-service, affordable, delicious.",
  keywords: [
    'marugame seimen', '丸亀製麺', 'artisanal udon', 'men-shokunin',
    'sanuki tradition', 'dekinitate', 'fresh udon', 'visible craftsmanship',
    'japanese noodles', 'japanese udon chain', 'kagawa udon'
  ],
  openGraph: {
    title: "Marugame Seimen 丸亀製麺 | Artisanal Udon | JapanChains",
    description: "Watch artisans prepare fresh udon. Quick self-service, affordable, delicious.",
    type: 'article',
    locale: "en_US",
    siteName: "JapanChains - Japanese Restaurant Guide"
  },
  alternates: {
    canonical: 'https://japanchains.com/chains/marugame-seimen'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true }
  },
};

export default function MarugameSeimensPage() {
  return (
    <React.Fragment>
      <ChainViewTracker chainName="marugame-seimen" chainCategory="udon" />
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">

        {/* Navigation */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link
              href="/dish-types/udon"
              className="inline-flex items-center text-gray-600 hover:text-orange-600 transition-colors group"
            >
              <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Udon Chains
            </Link>
          </div>
        </div>

        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-orange-600 to-amber-600 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 p-6 rounded-full">
                  <span className="text-4xl font-bold">丸</span>
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Marugame Seimen
              </h1>
              <p className="text-xl md:text-2xl text-orange-100 mb-4">
                丸亀製麺 | Marugame Seimen
              </p>
              <p className="text-lg text-orange-200 max-w-3xl mx-auto mb-8">
                The Soul of Udon: An Artisanal and Living Experience
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                  🔥 Visible Craftsmanship
                </span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                  🏮 800+ Restaurants
                </span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                  🍜 Sanuki Tradition
                </span>
                <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-medium">
                  ⭐ Since 2000
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Introduction */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <Eye className="h-6 w-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Our Stage is the Kitchen</h2>
                </div>

                <div className="prose prose-lg max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    Crossing the threshold of a Marugame Seimen isn't simply entering a restaurant.
                    What opens before you is a true <strong>theater of udon</strong>: steam rising from
                    bubbling pots, the hypnotic rhythm of noodle cutting, and the energetic voices
                    of staff orchestrating into a captivating culinary symphony for all the senses.
                  </p>

                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    This open space evokes the spirit of <strong>artisan bakeries</strong> or
                    lively markets where craftsmen proudly display their expertise. At Marugame Seimen,
                    every step of udon making unfolds before your eyes - a testament to our
                    absolute confidence in our process and passion for excellence.
                  </p>

                  <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 my-8">
                    <div className="flex items-start">
                      <Star className="h-6 w-6 text-orange-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold text-orange-900 mb-2">The Culinary Theater Experience</h4>
                        <p className="text-orange-800">
                          Unlike traditional restaurants, Marugame Seimen transforms preparation
                          into performance. This transparency reflects Japanese confidence in the artisan
                          process and invites customers to appreciate the craftsmanship before even tasting.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Dekinitate Philosophy */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <Award className="h-6 w-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">The Philosophy of "Dekinitate"</h2>
                </div>

                <div className="prose prose-lg max-w-none">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Voluntary "Inefficiency" in Service of Excellence</h3>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Marugame Seimen made a radical strategic choice: <strong>no central kitchen</strong>.
                    From a traditional economic standpoint, this decision seems "inefficient." Installing noodle
                    machines in each restaurant, training artisans, maintaining boiling water vats continuously
                    costs far more than centralized production.
                  </p>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    Yet we choose this "inefficiency" because our priority isn't cost optimization,
                    but <strong>delivering the emotion of "dekinitate"</strong> (できたて - freshly prepared).
                    Each restaurant is an independent "seimenjo" (製麺所), an autonomous noodle workshop.
                  </p>

                  <div className="bg-blue-50 border-l-4 border-blue-400 p-6 my-6">
                    <h4 className="font-semibold text-blue-900 mb-3">🔬 The Science of Freshness</h4>
                    <p className="text-blue-800">
                      This approach achieves what frozen or refrigerated noodles cannot reproduce:
                      <strong>overwhelming freshness, tender texture, and rich wheat aroma</strong> that can only
                      exist in freshly beaten and boiled noodles.
                    </p>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">The Challenge of "Ritsuryō Ryōritsu"</h3>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    This philosophy is rooted in founder Takaya Awata's thinking and his concept of
                    <strong>"ritsuryō ryōritsu"</strong> (二律両立) - the coexistence of two apparent contradictions.
                    How to reconcile artisanal "handmade, fresh" quality with chain accessibility?
                    This challenge rests on a simple principle: <strong>"Everything for customer joy"</strong>.
                  </p>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 my-8">
                    <h4 className="font-semibold text-green-900 mb-3">🎌 Cultural Comparison</h4>
                    <p className="text-green-800">
                      Just as many cultures value craftsmanship in bakery and pastry,
                      Marugame Seimen's "inefficiency" expresses our passion for offering a true gastronomic
                      experience at an accessible price. It's the embodiment of traditional craftsmanship
                      spirit in a modern format.
                    </p>
                  </div>
                </div>
              </div>

              {/* Artisans - Men-Shokunin */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <ChefHat className="h-6 w-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">The Artisans: Men-Shokunin</h2>
                </div>

                <div className="prose prose-lg max-w-none">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Beyond Simple Staff: The Masters of Udon</h3>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    In our more than 800 restaurants in Japan, work <strong>"men-shokunin"</strong> (麺職人)
                    - literally "noodle artisans." This title isn't granted lightly: only those who
                    pass a rigorous internal exam with about a <strong>30% success rate</strong>
                    can bear this name.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 my-8">
                    <div className="bg-orange-50 p-6 rounded-xl border border-orange-200">
                      <h4 className="font-semibold text-orange-900 mb-3">🎓 The Men-Shokunin Exam</h4>
                      <ul className="space-y-2 text-orange-800 text-sm">
                        <li>• <strong>Ingredient selection:</strong> Flour quality evaluation</li>
                        <li>• <strong>Climate adaptation:</strong> Adjustment for temperature and humidity</li>
                        <li>• <strong>Technical mastery:</strong> Kneading, maturation, cutting</li>
                        <li>• <strong>Quality control:</strong> Perfect "koshi" texture</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-xl border border-blue-200">
                      <h4 className="font-semibold text-blue-900 mb-3">🏅 The Master Craftsman Spirit</h4>
                      <p className="text-blue-800 text-sm">
                        This approach recalls the tradition of <strong>Master craftsmen</strong>,
                        where technical excellence is recognized and celebrated. Each restaurant displays the
                        "men-shokunin meikan" (麺職人名鑑) - the artisan registry, allowing customers
                        to know who prepares their noodles.
                      </p>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-4 mt-8">Daily Mastery</h3>

                  <p className="text-gray-700 leading-relaxed mb-6">
                    These artisans don't simply follow a manual. They <strong>read the flour's condition,
                      adjust water and salt content according to the day's climate, and control maturation time</strong>
                    to produce the best possible noodles each day. They continuously perfect
                    their techniques and sensitivity to offer that day's finest noodles.
                  </p>

                  <div className="bg-purple-50 border-l-4 border-purple-400 p-6 my-6">
                    <h4 className="font-semibold text-purple-900 mb-3">🎨 Art in Simplicity</h4>
                    <p className="text-purple-800">
                      Like master artisans worldwide, men-shokunin understand that true mastery
                      reveals itself in simplicity. With only three ingredients - flour, water, salt -
                      they create infinite subtle nuances that distinguish exceptional udon.
                    </p>
                  </div>
                </div>
              </div>

              {/* History and Evolution */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <History className="h-6 w-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">History and Evolution</h2>
                </div>

                <div className="space-y-6">
                  {/* Creation */}
                  <div className="border-l-4 border-orange-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">2000: Birth of the Concept</h3>
                    <p className="text-gray-700">
                      Marugame Seimen was created by <strong>Toridoll Corporation</strong> with a
                      revolutionary vision: making quality artisanal udon accessible to the general public.
                      The "製麺所" (seimenjo - noodle workshop) concept places manufacturing
                      at the heart of customer experience, embodying the Japanese philosophy of
                      <em>shokunin</em> (職人) - the artisan devoted to perfecting their craft.
                    </p>
                  </div>

                  {/* Innovation */}
                  <div className="border-l-4 border-blue-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">2003-2010: Format Revolution</h3>
                    <p className="text-gray-700">
                      Introduction of the <strong>"open workshop"</strong> format where customers
                      choose their freshly prepared udon, then their tempura and accompaniments
                      self-service style. This approach democratizes traditional Sanuki udon
                      while respecting the Japanese principle of <em>omotenashi</em> (おもてなし) -
                      sincere and selfless hospitality.
                    </p>
                  </div>

                  {/* Expansion */}
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">2011+: National and International Expansion</h3>
                    <p className="text-gray-700">
                      Explosive growth in Japan with <strong>over 800 restaurants</strong>.
                      Successful international expansion in Asia, United States and Europe,
                      adapting the concept to local tastes while preserving authenticity.
                      This approach reflects Japanese ability to adapt while maintaining
                      cultural essence (<em>shuza o tamotsu</em> - 主座を保つ).
                    </p>
                  </div>

                  {/* Continuous innovation */}
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">2020+: Continuous Innovation</h3>
                    <p className="text-gray-700">
                      Integration of modern technology: mobile ordering, process optimization,
                      but always with <strong>maintaining visible craftsmanship</strong> that defines
                      the brand identity. This duality perfectly illustrates the Japanese
                      philosophy of <em>wa</em> (和) - harmony between tradition and modernity.
                    </p>
                  </div>
                </div>
              </div>

              {/* Cultural Experience */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <Globe className="w-6 h-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Understanding the Cultural Experience</h2>
                </div>

                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-4 rounded-lg border border-orange-200">
                      <h3 className="font-semibold text-orange-800 mb-3 flex items-center">
                        🎭 The Art of Shokunin
                      </h3>
                      <p className="text-sm text-orange-700 leading-relaxed">
                        Each <strong>shokunin</strong> (職人) at Marugame Seimen embodies the Japanese tradition
                        of the artisan who dedicates their life to perfecting a unique art. Unlike
                        versatile chefs, the shokunin specializes in a precise domain
                        - here, the art of udon - and devotes decades to perfecting it.
                      </p>
                    </div>

                    <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-4 rounded-lg border border-blue-200">
                      <h3 className="font-semibold text-blue-800 mb-3 flex items-center">
                        🏮 Omotenashi in Action
                      </h3>
                      <p className="text-sm text-blue-700 leading-relaxed">
                        <strong>Omotenashi</strong> (おもてなし) manifests in every detail:
                        free oshibori (hot towel), complimentary water, service
                        with no tipping included in the price. This hospitality without ulterior
                        commercial motive creates an authentically Japanese experience.
                      </p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
                    <h3 className="font-semibold text-green-800 mb-3">🌾 The Philosophy of Monozukuri</h3>
                    <p className="text-sm text-green-700 leading-relaxed">
                      <strong>Monozukuri</strong> (ものづくり) - the art of making things with
                      pride and perfection - guides every aspect of Marugame Seimen. From selecting
                      domestic ingredients to visible noodle manufacturing, every step reflects
                      this Japanese philosophy that values the process as much as the final result.
                    </p>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg border border-purple-200">
                    <h3 className="font-semibold text-purple-800 mb-3">🥢 Cultural Codes to Know</h3>
                    <div className="grid md:grid-cols-2 gap-4 text-sm text-purple-700">
                      <div>
                        <p className="font-medium mb-1">• Slurping noodles</p>
                        <p className="text-xs">Making noise while eating udon is not only accepted but encouraged - it cools the noodles and intensifies flavors.</p>
                      </div>
                      <div>
                        <p className="font-medium mb-1">• Respecting the process</p>
                        <p className="text-xs">Watching artisans work is part of the experience. It's a valued spectacle in Japanese culture.</p>
                      </div>
                      <div>
                        <p className="font-medium mb-1">• Organized self-service</p>
                        <p className="text-xs">The system reflects Japanese efficiency while maintaining quality and mutual respect.</p>
                      </div>
                      <div>
                        <p className="font-medium mb-1">• Finishing your bowl</p>
                        <p className="text-xs">Completely finishing your meal is a sign of respect for the ingredients and artisans' work.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed menu in main content */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-6">
                  <ChefHat className="w-6 h-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Menu and Prices</h2>
                </div>

                {/* Main Udon */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-orange-600 text-sm">麺</span>
                    </div>
                    Main Udon
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full border border-gray-200 rounded-lg">
                      <thead className="bg-gray-50">
                        <tr>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Type</th>
                          <th className="px-4 py-3 text-left text-sm font-medium text-gray-900">Description</th>
                          <th className="px-4 py-3 text-right text-sm font-medium text-gray-900">Price</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="px-4 py-3 font-medium text-gray-900">
                            Kake Udon<br />
                            <span className="text-xs text-gray-500">かけうどん</span>
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-700">
                            Plain udon in dashi broth, authentic version
                          </td>
                          <td className="px-4 py-3 text-right font-medium">¥290</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-gray-900">
                            Bukkake Udon<br />
                            <span className="text-xs text-gray-500">ぶっかけうどん</span>
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-700">
                            Concentrated sauce poured directly on noodles
                          </td>
                          <td className="px-4 py-3 text-right font-medium">¥320</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-gray-900">
                            Zaru Udon<br />
                            <span className="text-xs text-gray-500">ざるうどん</span>
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-700">
                            Cold udon served on bamboo with dipping sauce
                          </td>
                          <td className="px-4 py-3 text-right font-medium">¥390</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-gray-900">
                            Niku Udon<br />
                            <span className="text-xs text-gray-500">肉うどん</span>
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-700">
                            With simmered beef slices, richer version
                          </td>
                          <td className="px-4 py-3 text-right font-medium">¥590</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-gray-900">
                            Kamatama Udon<br />
                            <span className="text-xs text-gray-500">釜玉うどん</span>
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-700">
                            Hot udon with raw egg, mixed before you
                          </td>
                          <td className="px-4 py-3 text-right font-medium">¥390</td>
                        </tr>
                        <tr>
                          <td className="px-4 py-3 font-medium text-gray-900">
                            Carbonara Udon<br />
                            <span className="text-xs text-gray-500">カルボナーラうどん</span>
                          </td>
                          <td className="px-4 py-3 text-sm text-gray-700">
                            East-meets-West fusion with creamy sauce
                          </td>
                          <td className="px-4 py-3 text-right font-medium">¥490</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Tempura and sides */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center">
                    <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                      <span className="text-orange-600 text-sm">天</span>
                    </div>
                    Tempura and Sides
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-gray-200 rounded p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Classic Tempura</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Ebi (Shrimp)</span>
                          <span className="font-medium">¥140</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Ika (Squid)</span>
                          <span className="font-medium">¥120</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Kakiage (Mixed fritter)</span>
                          <span className="font-medium">¥130</span>
                        </div>
                      </div>
                    </div>
                    <div className="border border-gray-200 rounded p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Vegetable Tempura</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Nasu (Eggplant)</span>
                          <span className="font-medium">¥100</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Kabocha (Pumpkin)</span>
                          <span className="font-medium">¥100</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Renkon (Lotus)</span>
                          <span className="font-medium">¥100</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Condiments */}
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">Free Condiments</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                    <div>
                      <strong>天かす (Tenkasu)</strong> - Tempura crumbs
                    </div>
                    <div>
                      <strong>ねぎ (Negi)</strong> - Chopped green onions
                    </div>
                    <div>
                      <strong>生姜 (Shōga)</strong> - Pickled ginger
                    </div>
                    <div>
                      <strong>ごま (Goma)</strong> - Sesame seeds
                    </div>
                    <div>
                      <strong>七味 (Shichimi)</strong> - 7-spice blend
                    </div>
                    <div>
                      <strong>醤油 (Shōyu)</strong> - Various soy sauces
                    </div>
                  </div>
                </div>
              </div>

              {/* Ordering guide */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">The Marugame Experience</h2>

                <div className="space-y-6">
                  {/* Steps */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-orange-600 font-bold">1</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Observe</h3>
                      <p className="text-sm text-gray-600">Watch artisans prepare udon</p>
                    </div>

                    <div className="text-center">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-orange-600 font-bold">2</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Choose</h3>
                      <p className="text-sm text-gray-600">Select your udon type and size</p>
                    </div>

                    <div className="text-center">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-orange-600 font-bold">3</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Tempura</h3>
                      <p className="text-sm text-gray-600">Add tempura and sides</p>
                    </div>

                    <div className="text-center">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-orange-600 font-bold">4</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Customize</h3>
                      <p className="text-sm text-gray-600">Free condiments self-service</p>
                    </div>

                    <div className="text-center">
                      <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                        <span className="text-orange-600 font-bold">5</span>
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">Enjoy</h3>
                      <p className="text-sm text-gray-600">Savor your freshly prepared udon</p>
                    </div>
                  </div>

                  {/* Tips */}
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">Expert Tips</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-medium text-gray-900">Optimal timing:</div>
                        <div className="text-gray-700">Arrive during peak hours to see active preparation</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Perfect texture:</div>
                        <div className="text-gray-700">Udon should be firm yet tender (コシ - koshi)</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Fresh tempura:</div>
                        <div className="text-gray-700">Choose the hottest tempura</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Condiments:</div>
                        <div className="text-gray-700">Start simple, add gradually</div>
                      </div>
                    </div>
                  </div>

                  {/* Japanese phrases */}
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-3">Useful Phrases</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <div className="font-medium text-gray-900">Order udon:</div>
                        <div className="text-gray-700">&quot;Kake udon hitotsu kudasai&quot;</div>
                        <div className="text-gray-500 text-xs">かけうどん一つください</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Large size:</div>
                        <div className="text-gray-700">&quot;Ōmori de onegaishimasu&quot;</div>
                        <div className="text-gray-500 text-xs">大盛でお願いします</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">Shrimp tempura:</div>
                        <div className="text-gray-700">&quot;Ebi tempura kudasai&quot;</div>
                        <div className="text-gray-500 text-xs">エビ天ぷらください</div>
                      </div>
                      <div>
                        <div className="font-medium text-gray-900">It&apos;s delicious:</div>
                        <div className="text-gray-700">&quot;Oishii desu&quot;</div>
                        <div className="text-gray-500 text-xs">おいしいです</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Practical information */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                  <Info className="w-5 h-5 text-orange-600 mr-2" />
                  Practical Information
                </h3>
                
                <div className="space-y-4 text-sm">
                  <div className="flex items-start space-x-3">
                    <Clock className="w-4 h-4 text-gray-400 mt-1" />
                    <div>
                      <div className="font-medium text-gray-900">Hours</div>
                      <div className="text-gray-600">11am-11pm (general)</div>
                      <div className="text-gray-500 text-xs">Varies by location</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 text-gray-400 mt-1" />
                    <div>
                      <div className="font-medium text-gray-900">Location</div>
                      <div className="text-gray-600">City centers, shopping malls</div>
                      <div className="text-gray-500 text-xs">800+ restaurants in Japan</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CreditCard className="w-4 h-4 text-gray-400 mt-1" />
                    <div>
                      <div className="font-medium text-gray-900">Payment</div>
                      <div className="text-gray-600">Cash, cards, IC cards</div>
                      <div className="text-gray-500 text-xs">Mobile apps accepted</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Users className="w-4 h-4 text-gray-400 mt-1" />
                    <div>
                      <div className="font-medium text-gray-900">Clientele</div>
                      <div className="text-gray-600">All ages, families</div>
                      <div className="text-gray-500 text-xs">Educational experience</div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <a 
                    href="https://www.marugame-seimen.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-orange-600 hover:text-orange-700 text-sm font-medium"
                  >
                    Official Marugame Seimen Website →
                  </a>
                </div>
              </div>

              {/* Average prices */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Average Prices</h3>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Kake udon</span>
                    <span className="font-medium">¥290</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Niku udon</span>
                    <span className="font-medium">¥590</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">+ Ebi tempura</span>
                    <span className="font-medium">+¥140</span>
                  </div>
                  <div className="border-t border-gray-200 pt-2 mt-2">
                    <div className="flex justify-between font-medium">
                      <span className="text-gray-900">Average meal</span>
                      <span className="text-gray-900">¥450-650</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Our opinion */}
              <div className="bg-orange-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Opinion</h3>
                <div className="flex items-center mb-2">
                  <div className="flex text-orange-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                  <span className="text-sm text-gray-600 ml-2">Exceptional authentic experience</span>
                </div>
                <p className="text-sm text-gray-700">
                  <strong>Accessible excellence.</strong> Marugame Seimen offers a 
                  unique experience combining tradition and modernity. The ability 
                  to observe live manufacturing adds an invaluable educational and 
                  cultural dimension. Essential for understanding the art of udon.
                </p>
              </div>

              {/* Sizes and options */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Sizes and Options</h3>
                
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span><strong>並 (Nami)</strong> - Regular size</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span><strong>大 (Ō)</strong> - Large size (+¥100)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span><strong>得 (Toku)</strong> - Extra large (+¥150)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span><strong>半 (Han)</strong> - Half portion (-¥50)</span>
                  </div>
                </div>
              </div>

              {/* Navigation to other chains */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Other Udon/Soba Chains</h3>
                
                <div className="space-y-3">
                  <Link 
                    href="/chains/hanamaru-udon" 
                    className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="font-medium text-gray-900">Hanamaru Udon</div>
                    <div className="text-sm text-gray-600">The direct competitor</div>
                  </Link>
                  
                  <Link 
                    href="/chains/fuji-soba" 
                    className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="font-medium text-gray-900">Fuji Soba</div>
                    <div className="text-sm text-gray-600">Soba specialist</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
