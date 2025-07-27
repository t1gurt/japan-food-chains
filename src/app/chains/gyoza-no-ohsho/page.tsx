import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Heart, Zap, Crown, ChefHat } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Gyoza no Ohsho 鬢・ｭ舌・邇句ｰ・| King of Gyoza | Japan Food Chains",
  description: "6 billion gyoza sold! Secret recipe since 1967, patented yaki-age technique. A Japanese cultural institution.",
  keywords: [
    'gyoza no ohsho', '鬢・ｭ舌・邇句ｰ・, 'japanese gyoza', 'yaki-age technique',
    'secret recipe', 'japanese institution', 'chinese cuisine',
    'king of gyoza', 'culinary tradition', 'authentic'
  ],
  openGraph: {
    title: "Gyoza no Ohsho 鬢・ｭ舌・邇句ｰ・| King of Gyoza | Japan Food Chains",
    description: "6 billion gyoza sold! Secret recipe since 1967, patented yaki-age technique. A Japanese cultural institution.",
    type: 'article',
    locale: "en_US",
    siteName: "Japan Food Chains - Japanese Restaurant Guide"
  },
  alternates: {
    canonical: '/chaines/gyoza-no-ohsho',
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function GyozaNoOhshoPage() {
  return (
    <>
      <ChainViewTracker chainName="gyoza-no-ohsho" chainCategory="cuisine_chinoise" />
      <div className="min-h-screen bg-gray-50">
        {/* Header avec retour */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link 
              href="/dish-types/cuisine-chinoise" 
              className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Chinese Cuisine
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-red-700 rounded-lg flex items-center justify-center">
                <Crown className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Gyoza no Ohsho</h1>
                <p className="text-lg text-gray-600">鬢・ｭ舌・邇句ｰ・/p>
                <p className="text-sm text-gray-500">The king of Japanese gyoza since 1967</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contenu principal */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Prﾃｩsentation */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Info className="w-5 h-5 text-red-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Overview</h2>
                </div>
                
                <div className="prose prose-gray max-w-none">
                  <p className="text-lg text-gray-700 mb-4">
                    <strong>Gyoza no Ohsho</strong> (鬢・ｭ舌・邇句ｰ・ "The King of Gyoza") is THE absolute reference 
                    for gyoza in Japan. Founded in 1967 in Kyoto, this iconic chain has over 730 restaurants 
                    and has sold over 6 billion gyoza since its creation. More than just a restaurant chain, 
                    Gyoza no Ohsho is a cultural institution that has helped popularize gyoza throughout Japan.
                  </p>
                  
                  <div className="bg-red-50 p-4 rounded-lg mb-6">
                    <h3 className="font-semibold text-red-800 mb-2">荘 The Kingdom of Gyoza</h3>
                    <ul className="text-red-700 space-y-1">
                      <li>窶｢ <strong>6 billion gyoza sold</strong> - Absolute record in Japan</li>
                      <li>窶｢ <strong>Secret recipe</strong> - Filling and dough perfected since 1967</li>
                      <li>窶｢ <strong>Artisanal cooking</strong> - Each gyoza grilled to order</li>
                      <li>窶｢ <strong>Consistent quality</strong> - Strict standards in all restaurants</li>
                    </ul>
                  </div>

                  <h3 className="text-xl font-semibold mb-3">尚 Legendary Origins</h3>
                  <p className="mb-4">
                    The story begins in 1967 when Kato Jizo, the founder, opened the first 
                    restaurant in the popular Shijo Kawaramachi district of Kyoto. His 
                    goal: to create the perfect gyoza accessible to everyone. The recipe, kept 
                    secret for over 50 years, combines traditional Chinese influences 
                    and adaptations to Japanese tastes.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">･・Technical Innovation</h3>
                  <p className="mb-4">
                    Gyoza no Ohsho revolutionized gyoza cooking with its patented 
                    "yaki-age" (grilling-steaming) technique which guarantees a perfect 
                    result: crispy golden base and tender, juicy top. This method is taught 
                    in the chain's internal training school.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">検 Cultural Phenomenon</h3>
                  <p className="mb-4">
                    Ohsho's gyoza have become an element of Japanese popular 
                    culture. The chain regularly appears in anime and dramas, 
                    and its restaurants are intergenerational gathering places. 
                    The slogan "Oishii gyoza wa Ohsho da!" (Delicious gyoza are Ohsho's!) 
                    is known to all Japanese people.
                  </p>

                  <h3 className="text-xl font-semibold mb-3">溌 Training School</h3>
                  <p className="mb-4">
                    The chain has its own training school where each employee 
                    learns the secret preparation and cooking techniques. 
                    This multi-week training guarantees uniform quality and 
                    respect for the brand's culinary traditions.
                  </p>
                </div>
              </div>

              {/* Menu dﾃｩtaillﾃｩ */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <Utensils className="w-5 h-5 text-red-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Legendary Menu</h2>
                </div>

                {/* Gyoza - The Specialty */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">･・Gyoza - The Absolute Specialty</h3>
                  <div className="bg-yellow-50 p-4 rounded-lg mb-4">
                    <div className="flex items-center space-x-2 mb-2">
                      <Crown className="w-5 h-5 text-yellow-600" />
                      <h4 className="font-semibold text-yellow-800">荘 The Legendary Gyoza</h4>
                    </div>
                    <p className="text-yellow-800 text-sm">
                      Secret recipe since 1967, each gyoza is handmade and cooked 
                      using the patented "yaki-age" technique for a perfect result.
                    </p>
                  </div>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="text-left p-3 font-medium">English Name</th>
                          <th className="text-left p-3 font-medium">譌･譛ｬ隱・/th>
                          <th className="text-left p-3 font-medium">Description</th>
                          <th className="text-left p-3 font-medium">Price</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="p-3 font-medium">Signature Gyoza (6 pieces)</td>
                          <td className="p-3">鬢・ｭ撰ｼ・蛟具ｼ・/td>
                          <td className="p-3">The absolute specialty, pork-vegetable filling</td>
                          <td className="p-3">ﾂ･260</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Boiled Gyoza (6 pieces)</td>
                          <td className="p-3">豌ｴ鬢・ｭ撰ｼ・蛟具ｼ・/td>
                          <td className="p-3">Boiled version, softer texture</td>
                          <td className="p-3">ﾂ･280</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Fried Gyoza (6 pieces)</td>
                          <td className="p-3">謠壹￡鬢・ｭ撰ｼ・蛟具ｼ・/td>
                          <td className="p-3">Completely fried, very crispy</td>
                          <td className="p-3">ﾂ･300</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Large Gyoza Platter (12 pieces)</td>
                          <td className="p-3">鬢・ｭ仙､ｧ逧ｿ・・2蛟具ｼ・/td>
                          <td className="p-3">For big appetites or sharing</td>
                          <td className="p-3">ﾂ･480</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Shrimp Gyoza (6 pieces)</td>
                          <td className="p-3">豬ｷ閠・､・ｭ撰ｼ・蛟具ｼ・/td>
                          <td className="p-3">Shrimp filling, premium version</td>
                          <td className="p-3">ﾂ･380</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Traditional Chinese Dishes */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">骨 Authentic Chinese Dishes</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="text-left p-3 font-medium">English Name</th>
                          <th className="text-left p-3 font-medium">譌･譛ｬ隱・/th>
                          <th className="text-left p-3 font-medium">Description</th>
                          <th className="text-left p-3 font-medium">Price</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="p-3 font-medium">Shrimp Fried Rice</td>
                          <td className="p-3">豬ｷ閠√メ繝｣繝ｼ繝上Φ</td>
                          <td className="p-3">Signature fried rice with shrimp</td>
                          <td className="p-3">ﾂ･650</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Ohsho Ramen</td>
                          <td className="p-3">邇句ｰ・Λ繝ｼ繝｡繝ｳ</td>
                          <td className="p-3">Homemade ramen, rich flavorful broth</td>
                          <td className="p-3">ﾂ･480</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Sweet and Sour Pork</td>
                          <td className="p-3">驟｢雎・/td>
                          <td className="p-3">Chinese classic, perfectly balanced sauce</td>
                          <td className="p-3">ﾂ･780</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Mapo Tofu</td>
                          <td className="p-3">鮗ｻ蟀・ｱ・・</td>
                          <td className="p-3">Spicy tofu with minced pork, authentic</td>
                          <td className="p-3">ﾂ･580</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Chicken with Cashew Nuts</td>
                          <td className="p-3">鮓剰ｉ縺ｮ繧ｫ繧ｷ繝･繝ｼ繝翫ャ繝・ｒ繧・/td>
                          <td className="p-3">Stir-fried chicken with nuts, perfect texture</td>
                          <td className="p-3">ﾂ･720</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Spicy Shrimp</td>
                          <td className="p-3">豬ｷ閠√・繝√Μ繧ｽ繝ｼ繧ｹ</td>
                          <td className="p-3">Shrimp with spicy sauce, house specialty</td>
                          <td className="p-3">ﾂ･850</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Noodles and Soups */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">狛 Noodles & Soups</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="bg-gray-50">
                          <th className="text-left p-3 font-medium">English Name</th>
                          <th className="text-left p-3 font-medium">譌･譛ｬ隱・/th>
                          <th className="text-left p-3 font-medium">Description</th>
                          <th className="text-left p-3 font-medium">Price</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200">
                        <tr>
                          <td className="p-3 font-medium">Ohsho Yakisoba</td>
                          <td className="p-3">邇句ｰ・┥縺阪◎縺ｰ</td>
                          <td className="p-3">Signature stir-fried noodles, special sauce</td>
                          <td className="p-3">ﾂ･520</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Ramen Gyoza Set</td>
                          <td className="p-3">繝ｩ繝ｼ繝｡繝ｳ鬢・ｭ舌そ繝・ヨ</td>
                          <td className="p-3">Perfect combo: ramen + 3 gyoza</td>
                          <td className="p-3">ﾂ･650</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Wonton Soup</td>
                          <td className="p-3">繝ｯ繝ｳ繧ｿ繝ｳ繧ｹ繝ｼ繝・/td>
                          <td className="p-3">Chinese dumplings in clear broth</td>
                          <td className="p-3">ﾂ･450</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Dan Dan Noodles</td>
                          <td className="p-3">諡・・ｺｺ</td>
                          <td className="p-3">Spicy sesame noodles, specialty</td>
                          <td className="p-3">ﾂ･680</td>
                        </tr>
                        <tr>
                          <td className="p-3 font-medium">Chinese Udon</td>
                          <td className="p-3">荳ｭ闖ｯ縺・←繧・/td>
                          <td className="p-3">Unique Sino-Japanese fusion</td>
                          <td className="p-3">ﾂ･580</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Vegetables and Sides */}
                <div className="mb-8">
                  <h3 className="text-xl font-semibold mb-4">･ｬ Vegetables & Sides</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-red-600 mb-3">Stir-fried Vegetables</h4>
                      <ul className="space-y-2 text-sm">
                        <li>窶｢ <strong>Garlic Spinach</strong> - Quick stir-fry, intense flavor (ﾂ･380)</li>
                        <li>窶｢ <strong>Eggplant in Sauce</strong> - Simmered in soy-miso sauce (ﾂ･450)</li>
                        <li>窶｢ <strong>Oyster Broccoli</strong> - Authentic oyster sauce (ﾂ･420)</li>
                        <li>窶｢ <strong>Stir-fried Mushrooms</strong> - Mix of various mushrooms (ﾂ･480)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-red-600 mb-3">Appetizers & Snacks</h4>
                      <ul className="space-y-2 text-sm">
                        <li>窶｢ <strong>Marinated Vegetables</strong> - Kimchi-style assortment (ﾂ･320)</li>
                        <li>窶｢ <strong>Cucumber Salad</strong> - Sesame dressing (ﾂ･280)</li>
                        <li>窶｢ <strong>Fried Tofu</strong> - Soy-ginger sauce (ﾂ･350)</li>
                        <li>窶｢ <strong>Egg with Tomatoes</strong> - Chinese comfort dish (ﾂ･380)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Drinks */}
                <div className="mb-6">
                  <h3 className="text-xl font-semibold mb-4">瑳 Drinks</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-medium text-red-600 mb-3">Beers</h4>
                      <ul className="space-y-1 text-sm">
                        <li>窶｢ <strong>Japanese Beer</strong> - ﾂ･350 (M), ﾂ･550 (L)</li>
                        <li>窶｢ <strong>Tsingtao Chinese Beer</strong> - ﾂ･380</li>
                        <li>窶｢ <strong>Non-alcoholic Beer</strong> - ﾂ･300</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-red-600 mb-3">Chinese Alcohols</h4>
                      <ul className="space-y-1 text-sm">
                        <li>窶｢ <strong>Shaoxing (rice wine)</strong> - ﾂ･420</li>
                        <li>窶｢ <strong>Hot Sake</strong> - ﾂ･380</li>
                        <li>窶｢ <strong>Whisky Highball</strong> - ﾂ･400</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-red-600 mb-3">Non-alcoholic</h4>
                      <ul className="space-y-1 text-sm">
                        <li>窶｢ <strong>Oolong Tea</strong> - ﾂ･200</li>
                        <li>窶｢ <strong>Jasmine Tea</strong> - ﾂ･220</li>
                        <li>窶｢ <strong>Coca Cola</strong> - ﾂ･250</li>
                        <li>窶｢ <strong>Orange Juice</strong> - ﾂ･280</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Techniques and Know-how */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <ChefHat className="w-5 h-5 text-red-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Legendary Craftsmanship</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-amber-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-amber-800 mb-2">･・The Art of Perfect Gyoza</h3>
                    <p className="text-amber-700 text-sm mb-3">
                      Each gyoza follows a strict 7-step artisanal process, 
                      from the preparation of the secret filling to the patented "yaki-age" 
                      cooking that guarantees the perfect result.
                    </p>
                    <ul className="text-amber-700 text-sm space-y-1">
                      <li>窶｢ <strong>Secret filling</strong> - Pork-vegetable mixture with guarded proportions</li>
                      <li>窶｢ <strong>Hand-folding</strong> - Minimum 18 folds per gyoza</li>
                      <li>窶｢ <strong>Yaki-age cooking</strong> - Grilling then steaming in one go</li>
                      <li>窶｢ <strong>Precise timing</strong> - 3 minutes 30 for perfect cooking</li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">将 Ohsho Training School</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>窶｢ Intensive training of at least 3 weeks</li>
                        <li>窶｢ Learning secret techniques</li>
                        <li>窶｢ Mandatory certification to serve</li>
                        <li>窶｢ Continuous training and improvement</li>
                        <li>窶｢ Transmission of brand values</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">溌 Quality Control</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>窶｢ Strict standards for all ingredients</li>
                        <li>窶｢ Daily inspection of fillings</li>
                        <li>窶｢ Controlled cooking temperature</li>
                        <li>窶｢ Regular tasting test</li>
                        <li>窶｢ National quality certification</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h4 className="font-medium text-red-800 mb-2">醇 Cultural Heritage</h4>
                    <p className="text-sm text-red-700">
                      Gyoza no Ohsho is recognized as a living culinary heritage of Japan. 
                      The chain has contributed to making gyoza a Japanese national dish and 
                      continues to innovate while preserving the ancestral traditions 
                      of Chinese cuisine adapted to Japanese tastes.
                    </p>
                  </div>
                </div>
              </div>

              {/* Practical Guide */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center space-x-2 mb-4">
                  <Star className="w-5 h-5 text-red-600" />
                  <h2 className="text-2xl font-bold text-gray-900">Perfect Visitor's Guide</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-800 mb-2">･・Mandatory First Visit</h3>
                    <ol className="text-blue-700 text-sm space-y-1">
                      <li><strong>1.</strong> You MUST start with the signature gyoza (6 pieces)</li>
                      <li><strong>2.</strong> Add shrimp fried rice for balance</li>
                      <li><strong>3.</strong> Beer or oolong tea to accompany</li>
                      <li><strong>4.</strong> Observe the cooking technique at the counter</li>
                      <li><strong>5.</strong> Taste the differences with other chains</li>
                    </ol>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">識 Discovery Menu</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>窶｢ <strong>Gyoza signature</strong> - Must-try (ﾂ･260)</li>
                        <li>窶｢ <strong>Shrimp Fried Rice</strong> - Classic (ﾂ･650)</li>
                        <li>窶｢ <strong>Ohsho Ramen</strong> - House specialty (ﾂ･480)</li>
                        <li>窶｢ <strong>Japanese Beer</strong> - Perfect pairing (ﾂ･350)</li>
                        <li><strong>Total : ﾂ･1,740</strong> for the essential experience</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">検 Gourmet Menu</h4>
                      <ul className="text-sm text-gray-600 space-y-1">
                        <li>窶｢ <strong>Large Gyoza Platter</strong> - For true enthusiasts (ﾂ･480)</li>
                        <li>窶｢ <strong>Sweet and Sour Pork</strong> - Authentic (ﾂ･780)</li>
                        <li>窶｢ <strong>Spicy Shrimp</strong> - Premium (ﾂ･850)</li>
                        <li>窶｢ <strong>Tsingtao Chinese Beer</strong> - Authentic Chinese (ﾂ･380)</li>
                        <li><strong>Total : ﾂ･2,490</strong> for connoisseurs</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h4 className="font-medium text-green-800 mb-2">庁 Expert Tips</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>窶｢ <strong>Peak hours</strong> - Avoid 12 PM - 1 PM and 7 PM - 8 PM</li>
                      <li>窶｢ <strong>Counter recommended</strong> - View of gyoza cooking</li>
                      <li>窶｢ <strong>Perfect sauce</strong> - Mix soy sauce, vinegar, and sesame oil</li>
                      <li>窶｢ <strong>Progressive ordering</strong> - Gyoza arrive hot every 5 minutes</li>
                      <li>窶｢ <strong>Takeout available</strong> - Frozen gyoza available</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Essential Information */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Essential Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <div className="font-medium">Hours</div>
                      <div className="text-sm text-gray-600">11 AM - 11 PM (Mon-Fri)</div>
                      <div className="text-sm text-gray-600">11 AM - 1 AM (Sat-Sun)</div>
                      <div className="text-sm text-gray-500">Some 24/7</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <div className="font-medium">Location</div>
                      <div className="text-sm text-gray-600">730+ restaurants in Japan</div>
                      <div className="text-sm text-gray-500">Everywhere: city centers, suburbs</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CreditCard className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <div className="font-medium">Payment</div>
                      <div className="text-sm text-gray-600">Cash preferred</div>
                      <div className="text-sm text-gray-500">Cards in some restaurants</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Crown className="w-5 h-5 text-red-600 mt-0.5" />
                    <div>
                      <div className="font-medium">Average budget</div>
                      <div className="text-sm text-gray-600">ﾂ･800-1,500 per person</div>
                      <div className="text-sm text-gray-500">Excellent value for money</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tips for Visitors */}
              <div className="bg-red-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-red-800 mb-4">
                  庁 Tips for Visitors
                </h3>
                
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-medium text-red-700">Must-try Gyoza</div>
                    <div className="text-red-600">It's THE absolute reference, impossible to miss</div>
                  </div>
                  
                  <div>
                    <div className="font-medium text-red-700">Unique Technique</div>
                    <div className="text-red-600">Observe the "yaki-age" cooking at the counter</div>
                  </div>
                  
                  <div>
                    <div className="font-medium text-red-700">Unbeatable Prices</div>
                    <div className="text-red-600">Exceptional quality for very affordable prices</div>
                  </div>
                  
                  <div>
                    <div className="font-medium text-red-700">Authentic Experience</div>
                    <div className="text-red-600">Japanese cultural institution, not just a restaurant</div>
                  </div>
                </div>
              </div>

              {/* Records and Figures */}
              <div className="bg-yellow-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-yellow-800 mb-3">
                  醇 Records & Figures
                </h3>
                <div className="space-y-3 text-sm">
                  <div>
                    <div className="font-medium text-yellow-700">6 billion</div>
                    <div className="text-yellow-600">Number of gyoza sold since 1967</div>
                  </div>
                  <div>
                    <div className="font-medium text-yellow-700">730+ restaurants</div>
                    <div className="text-yellow-600">Largest Chinese cuisine chain in Japan</div>
                  </div>
                  <div>
                    <div className="font-medium text-yellow-700">ﾂ･260</div>
                    <div className="text-yellow-600">Gyoza price unchanged for years</div>
                  </div>
                  <div>
                    <div className="font-medium text-yellow-700">3min30</div>
                    <div className="text-yellow-600">Perfect gyoza cooking time</div>
                  </div>
                </div>
              </div>

              {/* Cultural Note */}
              <div className="bg-purple-50 rounded-lg p-6">
                <h3 className="text-lg font-semibold text-purple-800 mb-3">
                  尚 Cultural Note
                </h3>
                <p className="text-sm text-purple-700">
                  Gyoza no Ohsho has transformed a Chinese dish into a symbol of Japanese 
                  popular culture. Gyoza, initially introduced by soldiers returning from 
                  Manchuria, became a Japanese national dish thanks to Ohsho. The chain 
                  represents the excellence of Japanese culinary adaptation: taking the 
                  best from elsewhere and perfecting it.
                </p>
              </div>

              {/* Useful Links */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
                <div className="space-y-2">
                  <a href="https://www.ohsho.co.jp/" 
                     className="block text-red-600 hover:text-red-700 text-sm">
                    竊・Official Gyoza no Ohsho Site
                  </a>
                  <a href="/dish-types/cuisine-chinoise" 
                     className="block text-orange-600 hover:text-orange-700 text-sm">
                    竊・Complete Chinese Cuisine Guide
                  </a>
                  <a href="/chaines/bamiyan" 
                     className="block text-orange-600 hover:text-orange-700 text-sm">
                    竊・Compare with Bamiyan
                  </a>
                  <a href="/chaines/ringer-hut" 
                     className="block text-orange-600 hover:text-orange-700 text-sm">
                    竊・Compare with Ringer Hut
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



