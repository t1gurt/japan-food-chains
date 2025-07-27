import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Heart, ChefHat, Flame, Crown, Fish } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tsunahachi つな八 | Tempura Master Since 1923 | Japan Food Chains',
  description: 'Century-old tempura master. Gastronomic experience, exceptional ingredients, unmatched expertise.',
  keywords: [
    'tsunahachi', 'つな八', 'tempura', 'traditional restaurant',
    'founded 1923', 'authentic technique', 'tempura master',
    'exceptional quality', 'japanese tradition', 'century expertise'
  ],
  openGraph: {
    title: 'Tsunahachi: The Tempura Institution Since 1923 | Japan Food Chains',
    description: 'Discover Tsunahachi, the tempura master for a century. A gastronomic experience with exceptional ingredients and unmatched expertise.',
    type: 'article',
    locale: "en_US",
    siteName: "Japan Food Chains - Japanese Restaurant Guide"
  },
  alternates: {
    canonical: '/chains/tsunahachi',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function TsunahachiPage() {
  return (
    <>
      <ChainViewTracker chainName="tsunahachi" chainCategory="tempura" />
      <div className="min-h-screen bg-gray-50">
      {/* Header with back button */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/dish-types/tempura" 
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tempura & Tendon
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-amber-600 rounded-lg flex items-center justify-center">
              <Crown className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Tsunahachi</h1>
              <p className="text-lg text-gray-600">つな八</p>
              <p className="text-sm text-gray-500">The tempura institution since 1923</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Introduction */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Info className="w-5 h-5 text-amber-600" />
                <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
              </div>
              
              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-gray-700 mb-4">
                  <strong>Tsunahachi</strong> (つな八) is Japan's century-old tempura 
                  institution, founded in 1923 in Ginza. This prestigious chain of over 
                  30 restaurants has maintained the traditional art of tempura for a 
                  century, passed down from master to apprentice. Tsunahachi represents 
                  absolute excellence in Japanese frying, with ancient techniques and 
                  exceptional ingredients.
                </p>
                
                <div className="bg-amber-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-amber-800 mb-2">👑 Century-old mastery</h3>
                  <ul className="text-amber-700 space-y-1">
                    <li>• <strong>Founded in 1923</strong> - A century of tempura expertise</li>
                    <li>• <strong>Traditional techniques</strong> - Master-apprentice transmission</li>
                    <li>• <strong>Premium ingredients</strong> - Rigorous daily selection</li>
                    <li>• <strong>Art of frying</strong> - Absolute technical perfection</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold mb-3">🏮 Prestigious history</h3>
                <p className="mb-4">
                  Tsunahachi was founded in 1923 by Tsunaji Hirata in the Ginza district, 
                  during its reconstruction after the Great Kantō earthquake. 
                  The original restaurant, a simple tempura counter, revolutionized the 
                  art of frying by standardizing techniques that had been kept secret 
                  by master cooks since the Edo period.
                </p>

                <h3 className="text-xl font-semibold mb-3">🎓 Tempura school</h3>
                <p className="mb-4">
                  More than a chain, Tsunahachi is a true training school for tempura arts. 
                  Each cook undergoes a minimum 5-year apprenticeship before mastering 
                  all techniques. The company has trained thousands of chefs who have 
                  then opened their own restaurants, spreading Tsunahachi standards 
                  throughout Japan.
                </p>

                <h3 className="text-xl font-semibold mb-3">🌊 Art of tempura batter</h3>
                <p className="mb-4">
                  Tsunahachi's tempura batter follows a century-old recipe: ice water, 
                  special flour and minimal mixing technique to avoid gluten formation. 
                  This batter, prepared in small quantities throughout service, 
                  guarantees an ultra-light and crispy texture that never masks 
                  the flavor of the ingredients.
                </p>

                <h3 className="text-xl font-semibold mb-3">🔥 Temperature mastery</h3>
                <p className="mb-4">
                  Each ingredient at Tsunahachi is fried at a specific temperature: 
                  160°C for delicate vegetables, 170°C for shrimp, 180°C for white fish. 
                  This thermal precision, controlled to degree, allows achieving 
                  perfect texture for each tempura, with a tender heart and ideal 
                  golden crust.
                </p>

                <h3 className="text-xl font-semibold mb-3">🦐 Exceptional selection</h3>
                <p className="mb-4">
                  Tsunahachi sources exclusively from the best suppliers: live shrimp 
                  from Kumamoto, mountain vegetables from selected producers, line-caught 
                  fish from Tokyo Bay. This premium quality, visible in every bite, 
                  justifies the legendary reputation of the brand among Japanese 
                  food connoisseurs.
                </p>
              </div>
            </div>

            {/* Detailed menu */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Utensils className="w-5 h-5 text-amber-600" />
                <h2 className="text-2xl font-bold text-gray-900">Exceptional Tempura Menu</h2>
              </div>

              {/* Premium seafood tempura */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🦐 Premium Seafood Tempura</h3>
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Fish className="w-5 h-5 text-blue-600" />
                    <h4 className="font-semibold text-blue-800">🌊 Exceptional freshness</h4>
                  </div>
                  <p className="text-blue-800 text-sm">
                    All seafood is selected live in the morning and prepared according 
                    to traditional Japanese rules to preserve their natural texture 
                    and flavor.
                  </p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 font-medium">English Name</th>
                        <th className="text-left p-3 font-medium">日本語</th>
                        <th className="text-left p-3 font-medium">Description</th>
                        <th className="text-left p-3 font-medium">Price</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-3 font-medium">Giant Shrimp</td>
                        <td className="p-3">大海老天ぷら</td>
                        <td className="p-3">Tiger shrimp from Kumamoto, 20cm+</td>
                        <td className="p-3">¥800</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Anago (Conger Eel)</td>
                        <td className="p-3">穴子天ぷら</td>
                        <td className="p-3">Tokyo conger eel, melting texture</td>
                        <td className="p-3">¥650</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Kohada (Gizzard Shad)</td>
                        <td className="p-3">小肌天ぷら</td>
                        <td className="p-3">Small silver fish, delicate</td>
                        <td className="p-3">¥580</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Kisu (Japanese Whiting)</td>
                        <td className="p-3">鱚天ぷら</td>
                        <td className="p-3">Fine white fish, pearly flesh</td>
                        <td className="p-3">¥520</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Fresh Squid</td>
                        <td className="p-3">烏賊天ぷら</td>
                        <td className="p-3">Crispy tentacles</td>
                        <td className="p-3">¥480</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Seafood Kakiage</td>
                        <td className="p-3">海鮮かき揚げ</td>
                        <td className="p-3">Mixed shrimp and shellfish</td>
                        <td className="p-3">¥750</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Seasonal vegetable tempura */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🥬 Seasonal Vegetable Tempura</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 font-medium">English Name</th>
                        <th className="text-left p-3 font-medium">日本語</th>
                        <th className="text-left p-3 font-medium">Description</th>
                        <th className="text-left p-3 font-medium">Price</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-3 font-medium">Japanese Eggplant</td>
                        <td className="p-3">茄子天ぷら</td>
                        <td className="p-3">Purple nasu, melting inside</td>
                        <td className="p-3">¥380</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Shishito Pepper</td>
                        <td className="p-3">ししとう天ぷら</td>
                        <td className="p-3">Green sweet pepper, slightly spicy</td>
                        <td className="p-3">¥320</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Lotus Root Renkon</td>
                        <td className="p-3">蓮根天ぷら</td>
                        <td className="p-3">Crispy perforated root</td>
                        <td className="p-3">¥350</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Shiitake Mushroom</td>
                        <td className="p-3">椎茸天ぷら</td>
                        <td className="p-3">Premium meaty mushroom</td>
                        <td className="p-3">¥420</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Chrysanthemum</td>
                        <td className="p-3">菊花天ぷら</td>
                        <td className="p-3">Edible flower, delicate bitterness</td>
                        <td className="p-3">¥450</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Vegetable Kakiage</td>
                        <td className="p-3">野菜かき揚げ</td>
                        <td className="p-3">Julienned seasonal vegetables</td>
                        <td className="p-3">¥480</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Traditional tendon sets */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🍱 Traditional Tendon Sets</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 font-medium">English Name</th>
                        <th className="text-left p-3 font-medium">日本語</th>
                        <th className="text-left p-3 font-medium">Description</th>
                        <th className="text-left p-3 font-medium">Price</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-3 font-medium">Classic Tendon</td>
                        <td className="p-3">天丼</td>
                        <td className="p-3">Shrimp + vegetables on rice, sweet sauce</td>
                        <td className="p-3">¥1,200</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Ebi Tendon</td>
                        <td className="p-3">海老天丼</td>
                        <td className="p-3">Double premium giant shrimp</td>
                        <td className="p-3">¥1,800</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Anago Tendon</td>
                        <td className="p-3">穴子天丼</td>
                        <td className="p-3">Grilled conger eel, refined flavor</td>
                        <td className="p-3">¥1,650</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Kakiage Tendon</td>
                        <td className="p-3">かき揚げ天丼</td>
                        <td className="p-3">Giant vegetable and seafood fritter</td>
                        <td className="p-3">¥1,380</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Vegetarian Tendon</td>
                        <td className="p-3">精進天丼</td>
                        <td className="p-3">Seasonal vegetables only assortment</td>
                        <td className="p-3">¥1,150</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Deluxe Tendon</td>
                        <td className="p-3">特上天丼</td>
                        <td className="p-3">Chef's premium selection</td>
                        <td className="p-3">¥2,500</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Kaiseki tasting sets */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🍽️ Kaiseki Tasting Sets</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 font-medium">English Name</th>
                        <th className="text-left p-3 font-medium">日本語</th>
                        <th className="text-left p-3 font-medium">Description</th>
                        <th className="text-left p-3 font-medium">Price</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-3 font-medium">Discovery Set</td>
                        <td className="p-3">お試しセット</td>
                        <td className="p-3">5 tempura + rice + soup + vegetables</td>
                        <td className="p-3">¥1,580</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Tradition Set</td>
                        <td className="p-3">伝統セット</td>
                        <td className="p-3">8 tempura + tendon + dessert</td>
                        <td className="p-3">¥2,200</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Master Set</td>
                        <td className="p-3">職人セット</td>
                        <td className="p-3">12 tempura served progressively</td>
                        <td className="p-3">¥3,500</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Imperial Set</td>
                        <td className="p-3">御膳セット</td>
                        <td className="p-3">15 premium tempura + accompaniments</td>
                        <td className="p-3">¥5,000</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Chef's Omakase</td>
                        <td className="p-3">おまかせコース</td>
                        <td className="p-3">Surprise menu based on daily arrivals</td>
                        <td className="p-3">¥6,800</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Traditional accompaniments */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🍚 Traditional Accompaniments</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 font-medium">English Name</th>
                        <th className="text-left p-3 font-medium">日本語</th>
                        <th className="text-left p-3 font-medium">Description</th>
                        <th className="text-left p-3 font-medium">Price</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-3 font-medium">Plain Rice</td>
                        <td className="p-3">白ご飯</td>
                        <td className="p-3">Premium Japanese Koshihikari rice</td>
                        <td className="p-3">¥300</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Miso Soup</td>
                        <td className="p-3">味噌汁</td>
                        <td className="p-3">Traditional wakame broth</td>
                        <td className="p-3">¥200</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Pickled Vegetables</td>
                        <td className="p-3">お漬物</td>
                        <td className="p-3">Assorted house tsukemono</td>
                        <td className="p-3">¥350</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Tentsuyu Sauce</td>
                        <td className="p-3">天つゆ</td>
                        <td className="p-3">Traditional dipping sauce</td>
                        <td className="p-3">¥150</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Grated Radish</td>
                        <td className="p-3">大根おろし</td>
                        <td className="p-3">Fresh daikon, natural digestive</td>
                        <td className="p-3">¥200</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Fresh Wasabi</td>
                        <td className="p-3">生わさび</td>
                        <td className="p-3">Freshly grated wasabi</td>
                        <td className="p-3">¥300</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Traditional drinks */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">🍵 Traditional Beverages</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-medium text-amber-600 mb-3">Premium Teas</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Sencha green tea</strong> - ¥400</li>
                      <li>• <strong>Imperial gyokuro</strong> - ¥800</li>
                      <li>• <strong>Roasted hojicha</strong> - ¥350</li>
                      <li>• <strong>Genmaicha</strong> - ¥300</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-amber-600 mb-3">Premium Sake</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Junmai Daiginjo</strong> - ¥1,200</li>
                      <li>• <strong>Local Edo sake</strong> - ¥800</li>
                      <li>• <strong>Hot sake kan</strong> - ¥600</li>
                      <li>• <strong>Non-alcoholic amazake</strong> - ¥450</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-amber-600 mb-3">Other Beverages</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Asahi draft beer</strong> - ¥500</li>
                      <li>• <strong>Traditional ramune</strong> - ¥300</li>
                      <li>• <strong>Mineral water</strong> - ¥200</li>
                      <li>• <strong>Plum ume juice</strong> - ¥400</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Art of tempura */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Crown className="w-5 h-5 text-amber-600" />
                <h2 className="text-2xl font-bold text-gray-900">The Century-Old Art of Tempura</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-amber-800 mb-2">🎭 Preparation ritual</h3>
                  <p className="text-amber-700 text-sm mb-3">
                    At Tsunahachi, each tempura follows a century-old protocol: 
                    ingredients at room temperature, ice-cold batter prepared in small 
                    batches, oil maintained at precise temperature for each type of food.
                  </p>
                  <ul className="text-amber-700 text-sm space-y-1">
                    <li>• <strong>Ice water mandatory</strong> - Prevents gluten development</li>
                    <li>• <strong>Minimal mixing</strong> - Deliberately lumpy batter</li>
                    <li>• <strong>Immediate frying</strong> - No waiting time</li>
                    <li>• <strong>Direct service</strong> - Tasting within the minute</li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🌡️ Thermal mastery</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Tender vegetables: 160-165°C</li>
                      <li>• Thick shrimp: 170-175°C</li>
                      <li>• White fish: 175-180°C</li>
                      <li>• Fine kakiage: 180-185°C</li>
                      <li>• Constant thermometer control</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">⏱️ Cooking timing</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• 20cm shrimp: 2-3 minutes</li>
                      <li>• Eggplant slice: 1-2 minutes</li>
                      <li>• Fish fillet: 1.5-2.5 minutes</li>
                      <li>• Vegetable kakiage: 3-4 minutes</li>
                      <li>• Constant batter bubble observation</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">👨‍🍳 Traditional training</h4>
                  <p className="text-sm text-blue-700">
                    Each Tsunahachi chef follows a minimum 5-year apprenticeship: 
                    1 year ingredient preparation, 2 years temperature mastery, 
                    2 years batter technique and timing. This rigorous training 
                    guarantees constant excellence in all chain restaurants.
                  </p>
                </div>
              </div>
            </div>

            {/* Practical guide */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-5 h-5 text-amber-600" />
                <h2 className="text-2xl font-bold text-gray-900">Expert Tasting Guide</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">🍤 Perfect tempura initiation</h3>
                  <ol className="text-green-700 text-sm space-y-1">
                    <li><strong>1.</strong> Start with discovery set to appreciate variety</li>
                    <li><strong>2.</strong> Taste immediately, tempura cools quickly</li>
                    <li><strong>3.</strong> Dip lightly in tentsuyu, don't drown</li>
                    <li><strong>4.</strong> Alternate with grated radish to cleanse palate</li>
                    <li><strong>5.</strong> Observe chef's technique if counter available</li>
                  </ol>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🥇 Prestige initiation menu</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Tradition set</strong> - Complete experience (¥2,200)</li>
                      <li>• <strong>Sencha tea</strong> - Perfect accompaniment (¥400)</li>
                      <li>• <strong>Pickled vegetables</strong> - Palate cleanser (¥350)</li>
                      <li>• <strong>Extra grated radish</strong> - Digestive (¥200)</li>
                      <li><strong>Total: ¥3,150</strong> for authentic discovery</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">👑 Expert gourmet menu</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Chef's omakase</strong> - Surprise menu (¥6,800)</li>
                      <li>• <strong>Imperial gyokuro</strong> - Premium tea (¥800)</li>
                      <li>• <strong>Fresh wasabi</strong> - Noble accompaniment (¥300)</li>
                      <li>• <strong>Junmai sake</strong> - Perfect pairing (¥1,200)</li>
                      <li><strong>Total: ¥9,100</strong> for ultimate experience</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h4 className="font-medium text-purple-800 mb-2">🎯 Expert tasting tips</h4>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• <strong>Reservation recommended</strong> - High popularity guaranteed</li>
                    <li>• <strong>Counter preferred</strong> - Watch chef at work</li>
                    <li>• <strong>Lunch cheaper</strong> - Advantageous lunch sets</li>
                    <li>• <strong>Seasonal menu</strong> - Special seasonal ingredients</li>
                    <li>• <strong>Japanese etiquette</strong> - Respect traditional atmosphere</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Essential information */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Essential Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-amber-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Hours</div>
                    <div className="text-sm text-gray-600">11:30 AM - 9:30 PM</div>
                    <div className="text-sm text-gray-500">Closed some Mondays</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-amber-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-sm text-gray-600">30+ premium restaurants</div>
                    <div className="text-sm text-gray-500">Ginza, Shinjuku, Kyoto</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CreditCard className="w-5 h-5 text-amber-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Payment</div>
                    <div className="text-sm text-gray-600">Cards accepted</div>
                    <div className="text-sm text-gray-500">Cash preferred</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Crown className="w-5 h-5 text-amber-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Average budget</div>
                    <div className="text-sm text-gray-600">¥2,000-6,000 per person</div>
                    <div className="text-sm text-gray-500">Excellence justified</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tips for visitors */}
            <div className="bg-amber-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-amber-800 mb-4">
                👑 Tips for International Visitors
              </h3>
              
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-amber-700">Century-old institution</div>
                  <div className="text-amber-600">Authentic traditional tempura experience</div>
                </div>
                
                <div>
                  <div className="font-medium text-amber-700">Exceptional quality</div>
                  <div className="text-amber-600">Premium ingredients, ancient techniques</div>
                </div>
                
                <div>
                  <div className="font-medium text-amber-700">Reservation advised</div>
                  <div className="text-amber-600">High popularity, limited seats</div>
                </div>
                
                <div>
                  <div className="font-medium text-amber-700">Justified prices</div>
                  <div className="text-amber-600">Absolute excellence, memory investment</div>
                </div>
              </div>
            </div>

            {/* Art of tempura */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">
                🎭 The Art of Tempura
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-blue-700">Perfect batter</div>
                  <div className="text-blue-600">Ice water + minimal mixing = lightness</div>
                </div>
                <div>
                  <div className="font-medium text-blue-700">Precise temperature</div>
                  <div className="text-blue-600">Each ingredient has its optimal temperature</div>
                </div>
                <div>
                  <div className="font-medium text-blue-700">Critical timing</div>
                  <div className="text-blue-600">Immediate tasting mandatory</div>
                </div>
                <div>
                  <div className="font-medium text-blue-700">Premium selection</div>
                  <div className="text-blue-600">Live ingredients, maximum quality</div>
                </div>
              </div>
            </div>

            {/* Tradition since 1923 */}
            <div className="bg-gray-900 text-white rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-3">
                🏮 Tradition Since 1923
              </h3>
              <p className="text-sm text-gray-300">
                Tsunahachi has preserved the authentic art of Edo tempura for a century. 
                This institution has trained generations of tempura masters and maintains 
                the highest standards of traditional Japanese cuisine. Each visit is a 
                journey through Japan's culinary history.
              </p>
            </div>

            {/* Useful links */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
              <div className="space-y-2">
                <a href="https://www.tsunahachi.co.jp/" 
                   className="block text-amber-600 hover:text-amber-700 text-sm">
                  → Official Tsunahachi website
                </a>
                <a href="/dish-types/tempura" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Complete tempura & tendon guide
                </a>
                <a href="/chains/tenya" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Compare with Tenya
                </a>
                <a href="/dish-types" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Explore other specialties
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
