import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Zap, Smartphone, Truck } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Bamiyan (バ�Eミヤン) : Family Chinese Restaurant Guide | JapanChains",
  description: "Discover Bamiyan, the family Chinese restaurant from the Skylark group. Varied menus, gyoza, ramen, and generous dishes at very affordable prices.",
  keywords: [
    'bamiyan', 'バ�Eミヤン', 'Chinese cuisine', 'Chinese restaurant Japan',
    'gyoza', 'Chinese ramen', 'fried rice', 'black pepper beef',
    'family restaurant', 'affordable prices Japan', 'restaurant chain'
  ],
  openGraph: {
    title: "Bamiyan (バ�Eミヤン) : Family Chinese Restaurant Guide | JapanChains",
    description: "Discover Bamiyan, the family Chinese restaurant from the Skylark group. Varied menus, gyoza, ramen, and generous dishes at very affordable prices.",
    type: 'article',
    url: '/chains/bamiyan',
    locale: "en_US",
    siteName: "JapanChains - Your Guide to Japanese Restaurants"
  },
  alternates: {
    canonical: '/chains/bamiyan',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function BamiyanPage() {
  return (
    <>
      <ChainViewTracker chainName="bamiyan" chainCategory="cuisine-chinoise" />
      <div className="min-h-screen bg-gray-50">
      {/* Header avec retour */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/dish-types/cuisine-chinoise" 
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Retour à la Cuisine Chinoise
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-orange-600 rounded-lg flex items-center justify-center">
              <Smartphone className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Bamiyan</h1>
              <p className="text-lg text-gray-600">バ�Eミヤン</p>
              <p className="text-sm text-gray-500">La cuisine chinoise familiale et moderne depuis 1986</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contenu principal */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Présentation */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Info className="w-5 h-5 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900">Overview</h2>
              </div>
              
              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-gray-700 mb-4">
                  <strong>Bamiyan</strong> (バ�Eミヤン) is a modern Chinese cuisine chain 
                  belonging to the Skylark Holdings group, which also owns Gusto and 
                  Jonathan's. Founded in 1986, Bamiyan has over 320 restaurants in Japan 
                  and is distinguished by its family-friendly approach, affordable prices, and 
                  technological innovation. The chain is a pioneer in service robots in Japan.
                </p>
                
                <div className="bg-orange-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-orange-800 mb-2">🤁EInnovation & Modernity</h3>
                  <ul className="text-orange-700 space-y-1">
                    <li>• <strong>Serving robots</strong> - "Bamiyan-kun" delivers dishes</li>
                    <li>• <strong>Touch ordering</strong> - Tablets on every table</li>
                    <li>• <strong>Efficient delivery</strong> - Fast and accurate service</li>
                    <li>• <strong>Transparent prices</strong> - Clear menu, no surprises</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold mb-3">🏢 Skylark Group</h3>
                <p className="mb-4">
                  Belonging to the powerful Skylark Holdings group, Bamiyan benefits 
                  from optimized logistics and constant R&D investments. 
                  This affiliation allows it to maintain competitive prices 
                  while offering cutting-edge technological innovations, 
                  such as the serving robots deployed in most restaurants.
                </p>

                <h3 className="text-xl font-semibold mb-3">👨‍👩‍👧‍👦 Family Positioning</h3>
                <p className="mb-4">
                  Bamiyan specifically targets Japanese families with 
                  children, offering a colorful and playful environment, attractive 
                  children's menus, and prices that allow families to 
                  eat out regularly. Restaurants are designed to accommodate 
                  strollers and high chairs.
                </p>

                <h3 className="text-xl font-semibold mb-3">🍜 Adapted Chinese Cuisine</h3>
                <p className="mb-4">
                  Bamiyan's menu offers Chinese cuisine adapted to Japanese tastes, 
                  less spicy and milder than the original. This 
                  approach allows Japanese children to be introduced to Chinese 
                  cuisine while satisfying adults looking for authentic but accessible flavors.
                </p>

                <h3 className="text-xl font-semibold mb-3">🚀 Technology at Service</h3>
                <p className="mb-4">
                  Bamiyan is a pioneer in automation in Japanese catering. 
                  In addition to serving robots, the chain experiments with 
                  artificial intelligence to optimize orders, 
                  reduce waiting times, and improve customer experience 
                  while controlling staff costs.
                </p>
              </div>
            </div>

            {/* Menu détaillé */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Utensils className="w-5 h-5 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900">Family & Modern Menu</h2>
              </div>

              {/* Plats signature */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">⭁EBamiyan Specialties</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 font-medium">French Name</th>
                        <th className="text-left p-3 font-medium">日本誁E/th>
                        <th className="text-left p-3 font-medium">Description</th>
                        <th className="text-left p-3 font-medium">Price</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-3 font-medium">Gyoza Bamiyan (6 pièces)</td>
                        <td className="p-3">バ�Eミヤン餁E��！E個！E/td>
                        <td className="p-3">Signature gyoza, thin and crispy wrapper</td>
                        <td className="p-3">¥380</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Special Fried Rice</td>
                        <td className="p-3">特製チャーハン</td>
                        <td className="p-3">Fried rice with eggs and vegetables, homemade recipe</td>
                        <td className="p-3">¥680</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Bamiyan Ramen</td>
                        <td className="p-3">バ�Eミヤンラーメン</td>
                        <td className="p-3">Signature ramen, rich and balanced broth</td>
                        <td className="p-3">¥580</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Lemon Chicken</td>
                        <td className="p-3">油淋鶁E/td>
                        <td className="p-3">Fried chicken with lemon sauce, slightly tangy</td>
                        <td className="p-3">¥780</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Mild Mapo Tofu</td>
                        <td className="p-3">マイルド麻婁E��E�E</td>
                        <td className="p-3">Mild version for families</td>
                        <td className="p-3">¥650</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Plats principaux */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🍽�E�EMain Dishes</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 font-medium">French Name</th>
                        <th className="text-left p-3 font-medium">日本誁E/th>
                        <th className="text-left p-3 font-medium">Description</th>
                        <th className="text-left p-3 font-medium">Price</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-3 font-medium">Porc sauce aigre-douce</td>
                        <td className="p-3">酢豁E/td>
                        <td className="p-3">Revisited classic, balanced sauce</td>
                        <td className="p-3">¥880</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Beef with Onions</td>
                        <td className="p-3">牛肉と玉�Eぎ炒めE/td>
                        <td className="p-3">Tender sliced beef, caramelized onions</td>
                        <td className="p-3">¥980</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Mild Chili Shrimp</td>
                        <td className="p-3">海老チリマイルチE/td>
                        <td className="p-3">Less spicy family version</td>
                        <td className="p-3">¥950</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Peking Duck</td>
                        <td className="p-3">北京ダチE��</td>
                        <td className="p-3">Traditional duck, simplified service</td>
                        <td className="p-3">¥1,280</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Cashew Chicken</td>
                        <td className="p-3">鶏肉カシューナッチE��めE/td>
                        <td className="p-3">Crispy stir-fry, delicate flavor</td>
                        <td className="p-3">¥780</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Nouilles et soupes */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🍜 Noodles & Soups</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 font-medium">French Name</th>
                        <th className="text-left p-3 font-medium">日本誁E/th>
                        <th className="text-left p-3 font-medium">Description</th>
                        <th className="text-left p-3 font-medium">Price</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-3 font-medium">Yakisoba familial</td>
                        <td className="p-3">ファミリー焼きそば</td>
                        <td className="p-3">Large portion for sharing</td>
                        <td className="p-3">¥680</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Vegetable Ramen</td>
                        <td className="p-3">野菜ラーメン</td>
                        <td className="p-3">Light broth, crispy vegetables</td>
                        <td className="p-3">¥650</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Mild Dan Dan Men</td>
                        <td className="p-3">マイルド担、E��</td>
                        <td className="p-3">Sesame noodles, mild version</td>
                        <td className="p-3">¥780</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Wonton Soup</td>
                        <td className="p-3">ワンタンスーチE/td>
                        <td className="p-3">Thin dumplings in clear broth</td>
                        <td className="p-3">¥580</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Chinese Udon</td>
                        <td className="p-3">中華ぁE��めE/td>
                        <td className="p-3">Original Bamiyan fusion</td>
                        <td className="p-3">¥680</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Menu enfants */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🧁EKids Menu</h3>
                <div className="bg-pink-50 p-4 rounded-lg mb-4">
                  <p className="text-pink-800 text-sm">
                    <strong>Specially adapted:</strong> Kid-sized portions, mild flavors, 
                    and fun presentation with toys included.
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-orange-600 mb-3">Main Dishes</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Mini Fried Rice</strong> - Colorful kid's version (¥450)</li>
                      <li>• <strong>Small Gyoza</strong> - 3 adapted pieces (¥250)</li>
                      <li>• <strong>Chinese Nuggets</strong> - Mild breaded chicken (¥380)</li>
                      <li>• <strong>Plain Noodles</strong> - Plain Udon (¥350)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-orange-600 mb-3">Kids Sets</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Happy Set</strong> - Dish + drink + toy (¥680)</li>
                      <li>• <strong>Discovery Set</strong> - Varied mini dishes (¥750)</li>
                      <li>• <strong>Birthday Set</strong> - With special dessert (¥850)</li>
                      <li>• <strong>Kids Drink Bar</strong> - All-you-can-drink (¥200)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Boissons */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">🥤 Drinks & Drink Bar</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-medium text-orange-600 mb-3">Hot Drinks</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Oolong Tea</strong> - ¥200</li>
                      <li>• <strong>Jasmine Tea</strong> - ¥220</li>
                      <li>• <strong>American Coffee</strong> - ¥250</li>
                      <li>• <strong>Japanese Green Tea</strong> - ¥200</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-orange-600 mb-3">Cold Drinks</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Iced Tea</strong> - ¥250</li>
                      <li>• <strong>Cola</strong> - ¥280</li>
                      <li>• <strong>Orange Juice</strong> - ¥300</li>
                      <li>• <strong>Mineral Water</strong> - ¥200</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-orange-600 mb-3">Drink Bar</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Adult Drink Bar</strong> - ¥350</li>
                      <li>• <strong>Kids Drink Bar</strong> - ¥200</li>
                      <li>• <strong>Over 30 drinks</strong> all-you-can-drink</li>
                      <li>• <strong>Coffee, teas, sodas</strong> included</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Innovation technologique */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Zap className="w-5 h-5 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900">Technological Innovation</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">🤁EBamiyan-kun: The Serving Robot</h3>
                  <p className="text-blue-700 text-sm mb-3">
                    Bamiyan pioneered the introduction of serving robots in Japan. 
                    "Bamiyan-kun", the mascot robot, efficiently delivers dishes to tables 
                    and has become an attraction for children.
                  </p>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• <strong>Autonomous Navigation</strong> - Moves independently between tables</li>
                    <li>• <strong>Voice Recognition</strong> - Simple interaction with customers</li>
                    <li>• <strong>Optimized Capacity</strong> - Carries multiple dishes simultaneously</li>
                    <li>• <strong>Kids Attraction</strong> - Playful and friendly design</li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">📱 Touch Ordering</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Tablets on every table</li>
                      <li>• Interactive menu with photos</li>
                      <li>• Multi-language ordering</li>
                      <li>• Direct payment at table</li>
                      <li>• Integrated kids games</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">⚡ Optimized Efficiency</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Reduced waiting times</li>
                      <li>• Improved order accuracy</li>
                      <li>• Automatic multi-language service</li>
                      <li>• Preference customization</li>
                      <li>• Customer data analysis</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-2">🚀 Continuous Innovation</h4>
                  <p className="text-sm text-green-700">
                    Bamiyan continues to invest in technology to improve the customer experience: 
                    artificial intelligence to predict orders, optimization of kitchen workflows, 
                    and new forms of human-machine interaction. The chain serves as an innovation 
                    laboratory for the Skylark group.
                  </p>
                </div>
              </div>
            </div>

            {/* Guide pratique */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Users className="w-5 h-5 text-orange-600" />
                <h2 className="text-2xl font-bold text-gray-900">Practical Family Guide</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-2">👨‍👩‍👧‍👦 Optimal Family Experience</h3>
                  <ol className="text-purple-700 text-sm space-y-1">
                    <li><strong>1.</strong> Reservation via app or website recommended</li>
                    <li><strong>2.</strong> Request table with tablet for children</li>
                    <li><strong>3.</strong> Order via touch tablet (easy and fun)</li>
                    <li><strong>4.</strong> Watch Bamiyan-kun robot arrive</li>
                    <li><strong>5.</strong> Enjoy the drink bar to extend the moment</li>
                  </ol>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🎯 Typical Family Menu</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Gyoza Bamiyan</strong> - For sharing (¥380)</li>
                      <li>• <strong>Special Fried Rice</strong> - Main dish (¥680)</li>
                      <li>• <strong>Happy Kids Set</strong> - Complete menu (¥680)</li>
                      <li>• <strong>Family Drink Bar</strong> - All-you-can-drink (¥550)</li>
                      <li><strong>Total : ¥2,290</strong> for a family of 3</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🤁ETechnological Experience</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Touch tablet</strong> - Interactive ordering</li>
                      <li>• <strong>Serving robot</strong> - Delivery by Bamiyan-kun</li>
                      <li>• <strong>Kids games</strong> - On tablet while waiting</li>
                      <li>• <strong>Digital payment</strong> - Contactless at table</li>
                      <li><strong>Duration: 1h-1h30</strong> with children</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-medium text-orange-800 mb-2">💡 Practical Tips</h4>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>• <strong>Quiet hours</strong> - 2 PM - 5 PM to avoid crowds</li>
                    <li>• <strong>Kids chairs</strong> - Available, ask upon arrival</li>
                    <li>• <strong>Allergies</strong> - Detailed information on tablet</li>
                    <li>• <strong>Parking</strong> - Generally free for families</li>
                    <li>• <strong>Takeout</strong> - Takeout service available</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Informations essentielles */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Essential Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Hours</div>
                    <div className="text-sm text-gray-600">11:00 AM - 11:00 PM</div>
                    <div className="text-sm text-gray-500">Perfect for families</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-sm text-gray-600">320+ restaurants in Japan</div>
                    <div className="text-sm text-gray-500">Suburbs, shopping centers</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CreditCard className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Payment</div>
                    <div className="text-sm text-gray-600">All cards, payment at table</div>
                    <div className="text-sm text-gray-500">Advanced cashless technology</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Smartphone className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Family budget</div>
                    <div className="text-sm text-gray-600">¥1,500-2,500 per person</div>
                    <div className="text-sm text-gray-500">Kids menu ¥450-850</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Conseils pour les visiteurs */}
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-orange-800 mb-4">
                💡 Tips for Families
              </h3>
              
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-orange-700">Perfect with kids</div>
                  <div className="text-orange-600">Robots, tablets, games: kids love it</div>
                </div>
                
                <div>
                  <div className="font-medium text-orange-700">Easy Technology</div>
                  <div className="text-orange-600">Intuitive tablets, even without speaking Japanese</div>
                </div>
                
                <div>
                  <div className="font-medium text-orange-700">Transparent Prices</div>
                  <div className="text-orange-600">All prices displayed, no surprises</div>
                </div>
                
                <div>
                  <div className="font-medium text-orange-700">Modern Experience</div>
                  <div className="text-orange-600">Discovery of the future of dining</div>
                </div>
              </div>
            </div>

            {/* Innovation highlights */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">
                🤁ETechnological Innovations
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-blue-700">Bamiyan-kun Robot</div>
                  <div className="text-blue-600">First public-facing serving robot in Japan</div>
                </div>
                <div>
                  <div className="font-medium text-blue-700">Touch Tablets</div>
                  <div className="text-blue-600">Multi-language ordering with detailed photos</div>
                </div>
                <div>
                  <div className="font-medium text-blue-700">Contactless Payment</div>
                  <div className="text-blue-600">Full cashless technology</div>
                </div>
                <div>
                  <div className="font-medium text-blue-700">Artificial Intelligence</div>
                  <div className="text-blue-600">Continuous experience optimization</div>
                </div>
              </div>
            </div>

            {/* Note culturelle */}
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">
                🏮 Cultural Note
              </h3>
              <p className="text-sm text-purple-700">
                Bamiyan represents the Japanese vision of the future of dining: 
                technology at the service of humanity, efficiency without losing conviviality, 
                and innovation to democratize access to quality cuisine. 
                The chain illustrates the unique Japanese approach blending Chinese culinary 
                tradition and Japanese high-tech.
              </p>
            </div>

            {/* Liens utiles */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
              <div className="space-y-2">
                <a href="https://www.skylark.co.jp/bamiyan/" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  ↁEOfficial Bamiyan Website
                </a>
                <a href="/dish-types/chinese-cuisine" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  ↁEComplete Chinese Cuisine Guide
                </a>
                <a href="/chains/gyoza-no-ohsho" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  ↁECompare with Gyoza no Ohsho
                </a>
                <a href="/chains/ringer-hut" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  ↁECompare with Ringer Hut
                </a>              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}



