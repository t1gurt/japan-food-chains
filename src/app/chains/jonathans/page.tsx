import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Heart, Coffee, Leaf, Wine, Crown } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Jonathans (ジョナサン) | Family Restaurant | Japanese Restaurant Chain Guide',
  description: 'Complete guide to Jonathans - Premium family restaurant with Western menu and relaxed atmosphere. Perfect for family meals and gatherings with friends.',
  keywords: [
    'jonathans', 'ジョナサン', 'family restaurant', 'western menu',
    'relaxed atmosphere', 'family dining', 'family restaurant',
    'western cuisine', 'friendly', 'varied menu'
  ],
  openGraph: {
    title: 'Jonathans (ジョナサン) | Premium Western Family Restaurant',
    description: 'Discover Jonathans, premium family restaurant with Western menu and relaxed atmosphere',
    type: 'article',
    url: '/chains/jonathans',
  },
  alternates: {
    canonical: '/chains/jonathans',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function JonathansPage() {
  return (
    <>
      <ChainViewTracker chainName="jonathans" chainCategory="family-restaurants" />
      <div className="min-h-screen bg-gray-50">
      {/* Header with back button */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/dish-types/family-restaurants" 
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Family Restaurants
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white text-2xl font-bold">J</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Jonathan's</h1>
              <p className="text-lg text-gray-600">ジョナサン | じょなさん</p>
              <p className="text-sm text-gray-500">The premium family restaurant of the Skylark Group</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Presentation */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Info className="w-5 h-5 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900">Overview</h2>
              </div>
              
              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-gray-700 mb-4">
                  <strong>Jonathan's (ジョナサン)</strong> is the "premium" version of family restaurants 
                  from the Skylark Group, positioned a notch above Gusto in terms of quality, service, 
                  and atmosphere. With over 300 establishments primarily concentrated in metropolitan 
                  areas, Jonathan's targets a slightly more affluent clientele seeking a refined 
                  yet family-friendly dining experience.
                </p>
                
                <div className="bg-purple-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-purple-800 mb-2">👑 The premium famiresu</h3>
                  <ul className="text-purple-700 space-y-1">
                    <li>• <strong>Superior quality</strong> - Selected ingredients and careful preparation</li>
                    <li>• <strong>Attentive service</strong> - Extensive staff training</li>
                    <li>• <strong>Cozy atmosphere</strong> - Warm decor and soft lighting</li>
                    <li>• <strong>Metropolitan areas</strong> - Premium locations in major cities</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold mb-3">🎯 Unique positioning</h3>
                <p className="mb-4">
                  Jonathan's occupies a particular niche in the Japanese family restaurant ecosystem: 
                  higher quality than Gusto but less formal than traditional restaurants. This 
                  intermediate position attracts affluent urban families, couples, and groups of 
                  friends seeking a compromise between accessibility and refinement.
                </p>

                <h3 className="text-xl font-semibold mb-3">🍷 Culinary innovation</h3>
                <p className="mb-4">
                  Unlike its more popular competitors, Jonathan's focuses on culinary innovation 
                  and adapting international gastronomic trends to Japanese taste. The chain is 
                  often the first to introduce new concepts or sophisticated seasonal dishes 
                  in the famiresu universe.
                </p>

                <h3 className="text-xl font-semibold mb-3">🌟 Complete experience</h3>
                <p className="mb-4">
                  Jonathan's doesn't just serve meals: the chain offers a true experience with 
                  its spectacular dessert bar, elaborate drink menu, and seasonal events that 
                  transform each visit into a little family celebration.
                </p>

                <h3 className="text-xl font-semibold mb-3">🏙�E�EUrban culture</h3>
                <p className="mb-4">
                  Located primarily in Tokyo, Yokohama, and major metropolises, Jonathan's 
                  reflects modern Japanese urban culture: accessible sophistication, confident 
                  internationalism, and the search for balance between tradition and modernity.
                </p>
              </div>
            </div>

            {/* Detailed menu */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Utensils className="w-5 h-5 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900">Jonathan's Refined Menu</h2>
              </div>

              {/* Signature specialties */}
              <div className="mb-8">
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-purple-800 mb-3">⭁ESignature Specialties</h3>
                  <p className="text-purple-700 text-sm mb-3">
                    Jonathan's develops its own exclusive recipes with qualified chefs
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div className="bg-white p-3 rounded">
                      <div className="font-medium text-purple-700">🥩 Premium steaks</div>
                      <div className="text-purple-600 text-sm">Selected meats, perfect cooking</div>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <div className="font-medium text-purple-700">🍝 Artisanal pasta</div>
                      <div className="text-purple-600 text-sm">Italian recipes adapted to taste</div>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <div className="font-medium text-purple-700">🍰 Spectacular desserts</div>
                      <div className="text-purple-600 text-sm">Original creations from pastry chef</div>
                    </div>
                    <div className="bg-white p-3 rounded">
                      <div className="font-medium text-purple-700">🍷 Wine selection</div>
                      <div className="text-purple-600 text-sm">Rare for a famiresu</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main dishes */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🍽�E�EPremium Main Dishes</h3>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="text-left p-3 font-medium">Name</th>
                        <th className="text-left p-3 font-medium">Category</th>
                        <th className="text-left p-3 font-medium">Description</th>
                        <th className="text-left p-3 font-medium">Price</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="p-3 font-medium">Angus Beef Steak</td>
                        <td className="p-3 text-red-600">Meat</td>
                        <td className="p-3">200g Angus beef steak with herb sauce</td>
                        <td className="p-3">¥1,899</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Truffle Cream Pasta</td>
                        <td className="p-3 text-yellow-600">Italian</td>
                        <td className="p-3">Fresh pasta with black truffle cream</td>
                        <td className="p-3">¥1,299</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Grilled Salmon Teriyaki</td>
                        <td className="p-3 text-blue-600">Fish</td>
                        <td className="p-3">Grilled salmon, house teriyaki sauce, vegetables</td>
                        <td className="p-3">¥1,599</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Chicken Cordon Bleu</td>
                        <td className="p-3 text-green-600">Poultry</td>
                        <td className="p-3">Chicken breast stuffed with ham and cheese</td>
                        <td className="p-3">¥1,399</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Seafood Doria</td>
                        <td className="p-3 text-purple-600">Gratin</td>
                        <td className="p-3">Rice gratin with seafood and béchamel sauce</td>
                        <td className="p-3">¥1,199</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Seasonal menu */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🌸 Seasonal Menus</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-pink-600 mb-3">🌸 Spring (March-May)</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Sakura Parfait</strong> - ¥799 (signature dessert)</li>
                      <li>• <strong>Bamboo Shoot Risotto</strong> - ¥1,199</li>
                      <li>• <strong>Cherry Blossom Cocktail</strong> - ¥599</li>
                      <li>• <strong>Spring Vegetable Salad</strong> - ¥899</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-orange-600 mb-3">🍁 Autumn (Sept-Nov)</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Mushroom & Truffle Pizza</strong> - ¥1,399</li>
                      <li>• <strong>Pumpkin Soup Premium</strong> - ¥699</li>
                      <li>• <strong>Chestnut Mont Blanc</strong> - ¥899</li>
                      <li>• <strong>Autumn Harvest Platter</strong> - ¥1,799</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Dessert bar */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🍰 Spectacular Dessert Bar</h3>
                
                <div className="bg-pink-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-pink-800 mb-2">🎂 Unique concept in famiresu</h4>
                  <p className="text-pink-700 text-sm mb-3">
                    Jonathan's offers the most elaborate dessert bar of all family restaurants
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="font-medium text-pink-700 mb-2">Available desserts</div>
                      <ul className="text-pink-600 text-sm space-y-1">
                        <li>• 20+ cakes and tarts</li>
                        <li>• 10+ ice cream parfaits</li>
                        <li>• Fresh fruits and compotes</li>
                        <li>• 8 artisanal ice cream flavors</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-medium text-pink-700 mb-2">Formula and pricing</div>
                      <ul className="text-pink-600 text-sm space-y-1">
                        <li>• <strong>Unlimited access:</strong> ¥899</li>
                        <li>• <strong>+ meal:</strong> ¥599 (supplement)</li>
                        <li>• <strong>Children:</strong> ¥399 (up to 12 years)</li>
                        <li>• <strong>Happy Hour:</strong> ¥699 (2-5 PM)</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-medium text-purple-600 mb-3">🧁ESignature cakes</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Chocolate Opera</li>
                      <li>• Strawberry Shortcake</li>
                      <li>• Matcha Tiramisu</li>
                      <li>• Lemon Tart Premium</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-600 mb-3">🍨 Ice cream parfaits</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Seasonal Fruit Tower</li>
                      <li>• Chocolate Volcano</li>
                      <li>• Matcha Parfait Supreme</li>
                      <li>• Berry Cheesecake Parfait</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-purple-600 mb-3">☁EAccompaniments</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• Premium coffee (8 varieties)</li>
                      <li>• Exceptional teas</li>
                      <li>• Artisanal hot chocolate</li>
                      <li>• Digestive liqueurs</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Beverage menu */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Wine className="w-5 h-5 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900">Sophisticated Beverage Menu</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-purple-800 mb-2">🍷 First famiresu chain with wines</h3>
                  <p className="text-purple-700 text-sm mb-3">
                    Jonathan's revolutionizes the concept by offering a real wine selection
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="font-medium text-purple-700 mb-2">Wines by the glass</div>
                      <ul className="text-purple-600 text-sm space-y-1">
                        <li>• French red - ¥599</li>
                        <li>• German white - ¥549</li>
                        <li>• Provence rosé - ¥649</li>
                        <li>• Champagne - ¥899</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-medium text-purple-700 mb-2">Japanese wines</div>
                      <ul className="text-purple-600 text-sm space-y-1">
                        <li>• Koshu white - ¥799</li>
                        <li>• Muscat Berry A - ¥749</li>
                        <li>• Yamanashi red - ¥849</li>
                        <li>• Premium sake - ¥599</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🍹 Signature cocktails</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Jonathan's Mojito - ¥699</li>
                      <li>• Sakura Cosmo - ¥799</li>
                      <li>• Yuzu Sour - ¥649</li>
                      <li>• Matcha Martini - ¥749</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">☁EPremium coffees</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Blue Mountain - ¥599</li>
                      <li>• Kona Hawaiian - ¥549</li>
                      <li>• Ethiopian Single - ¥499</li>
                      <li>• Espresso Romano - ¥399</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🫁EExceptional teas</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Earl Grey Premium - ¥449</li>
                      <li>• Darjeeling First Flush - ¥499</li>
                      <li>• Japanese Gyokuro - ¥549</li>
                      <li>• Premium Oolong - ¥499</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Atmosphere and service */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Crown className="w-5 h-5 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900">Premium Atmosphere and Service</h2>
              </div>
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-purple-600 mb-3">🏺 Carefully designed interior</h3>
                    <ul className="text-sm space-y-2">
                      <li><strong>Soft lighting:</strong> Warm and intimate atmosphere</li>
                      <li><strong>Quality furniture:</strong> Comfortable booths, spacious tables</li>
                      <li><strong>Seasonal decoration:</strong> Adapted to Japanese events</li>
                      <li><strong>Modular spaces:</strong> Areas for families, couples, groups</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-purple-600 mb-3">👨‍🍳 Professional service</h3>
                    <ul className="text-sm space-y-2">
                      <li><strong>Extensive training:</strong> Staff qualified in service and wines</li>
                      <li><strong>Personalized advice:</strong> Recommendations based on taste</li>
                      <li><strong>Perfect timing:</strong> French-style service, no rush</li>
                      <li><strong>Attention to detail:</strong> Careful presentation of each dish</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-amber-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-amber-800 mb-2">✨ Special experiences</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="font-medium text-amber-700 mb-2">Seasonal events</div>
                      <ul className="text-amber-600 text-sm space-y-1">
                        <li>• Valentine's menu with pink desserts</li>
                        <li>• Christmas lights and festive menu</li>
                        <li>• Hanami celebration with sakura specialties</li>
                        <li>• Halloween with decorations and themed menu</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-medium text-amber-700 mb-2">Premium services</div>
                      <ul className="text-amber-600 text-sm space-y-1">
                        <li>• Reservations accepted (rare in famiresu)</li>
                        <li>• Birthday service with surprise dessert</li>
                        <li>• Gift wrapping for takeaway desserts</li>
                        <li>• Food and wine pairing recommendations</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Visiting strategies */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="w-5 h-5 text-purple-600" />
                <h2 className="text-2xl font-bold text-gray-900">How to Optimize Your Visit</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-green-800 mb-2">💡 Strategies by occasion</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="font-medium text-green-700 mb-2">🥁ERomantic date</div>
                      <ul className="text-green-600 text-sm space-y-1">
                        <li>• Reserve an evening table</li>
                        <li>• Order a wine for two</li>
                        <li>• Finish with the dessert bar</li>
                        <li>• Avoid weekends (more family-oriented)</li>
                      </ul>
                    </div>
                    <div>
                      <div className="font-medium text-green-700 mb-2">👨‍👩‍👧‍👦 Family outing</div>
                      <ul className="text-green-600 text-sm space-y-1">
                        <li>• Weekend 12-3 PM ideal</li>
                        <li>• Kids menu available</li>
                        <li>• Dessert bar = guaranteed happiness</li>
                        <li>• Spaces adapted for strollers</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">⏰ Best time slots</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li><strong>Quiet lunch:</strong> 11:30 AM-2 PM weekdays</li>
                      <li><strong>Afternoon tea:</strong> 2-5 PM with desserts</li>
                      <li><strong>Romantic dinner:</strong> 7-9 PM weekdays</li>
                      <li><strong>Family brunch:</strong> 10 AM-1 PM weekends</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">💰 Budget optimization</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li><strong>Lunch sets:</strong> -30% vs à la carte dishes</li>
                      <li><strong>Happy hour desserts:</strong> 2-5 PM</li>
                      <li><strong>Seasonal menu:</strong> Often better value</li>
                      <li><strong>Avoid:</strong> Weekend evenings (full prices)</li>
                    </ul>
                  </div>
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
                  <Clock className="w-5 h-5 text-purple-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Hours</div>
                    <div className="text-sm text-gray-600">10:00 AM - 12:00 AM (general)</div>
                    <div className="text-sm text-gray-500">Some 24/7</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-purple-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-sm text-gray-600">300+ restaurants</div>
                    <div className="text-sm text-gray-500">Metropolitan areas</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CreditCard className="w-5 h-5 text-purple-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Payment</div>
                    <div className="text-sm text-gray-600">All cards accepted</div>
                    <div className="text-sm text-gray-500">Mobile payment, splits possible</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-purple-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Average price</div>
                    <div className="text-sm text-gray-600">¥1,500-2,500 per person</div>
                    <div className="text-sm text-gray-500">Premium but accessible</div>
                  </div>
                </div>
              </div>
            </div>

            {/* First visit recommendations */}
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-800 mb-4">
                🎯 Recommended First Visit
              </h3>
              
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-purple-700">Getting started</div>
                  <div className="text-purple-600">Angus Beef Steak + dessert bar = complete experience</div>
                </div>
                
                <div>
                  <div className="font-medium text-purple-700">To discover the atmosphere</div>
                  <div className="text-purple-600">Come late afternoon, order a glass of wine</div>
                </div>
                
                <div>
                  <div className="font-medium text-purple-700">With children</div>
                  <div className="text-purple-600">Weekend lunch + dessert bar = guaranteed success</div>
                </div>
                
                <div>
                  <div className="font-medium text-purple-700">Tight budget?</div>
                  <div className="text-purple-600">Weekday lunch set + shared dessert</div>
                </div>
              </div>
            </div>

            {/* Reservations */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-3">
                📞 Reservations
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-blue-700">Unique service</div>
                  <div className="text-blue-600">Only famiresu chain to accept reservations</div>
                </div>
                <div>
                  <div className="font-medium text-blue-700">When to reserve?</div>
                  <div className="text-blue-600">• Weekend evenings (highly recommended)<br/>• Groups of 6+ people<br/>• Special occasions</div>
                </div>
                <div>
                  <div className="font-medium text-blue-700">How?</div>
                  <div className="text-blue-600">• Phone of each restaurant<br/>• Jonathan's mobile app<br/>• Official website</div>
                </div>
              </div>
            </div>

            {/* Skylark comparison */}
            <div className="bg-orange-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-orange-800 mb-3">
                📊 Position in Skylark Group
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-orange-700">Vs Gusto</div>
                  <div className="text-orange-600">+50% more expensive but much higher quality</div>
                </div>
                <div>
                  <div className="font-medium text-orange-700">Target clientele</div>
                  <div className="text-orange-600">Affluent urban families, couples, young professionals</div>
                </div>
                <div>
                  <div className="font-medium text-orange-700">Unique positioning</div>
                  <div className="text-orange-600">Between popular famiresu and classic restaurant</div>
                </div>
              </div>
            </div>

            {/* Cultural note */}
            <div className="bg-green-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-green-800 mb-3">
                🏮 Cultural Impact
              </h3>
              <p className="text-sm text-green-700">
                Jonathan's redefined the concept of family restaurants in Japan by proving that 
                family accessibility and culinary sophistication could be combined. The chain 
                influenced the entire industry by showing there was a market for "accessible 
                premium" in Japanese family dining.
              </p>
            </div>

            {/* Useful links */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
              <div className="space-y-2">
                <a href="https://www.skylark.co.jp/jonathans/" 
                   className="block text-purple-600 hover:text-purple-700 text-sm">
                  ↁEOfficial Jonathan's website
                </a>
                <a href="/dish-types/family-restaurants" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  ↁEFamily restaurants guide
                </a>
                <a href="/chains/gusto" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  ↁECompare with Gusto
                </a>
                <a href="/chains/saizeriya" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  ↁEDiscover Saizeriya
                </a>              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}



