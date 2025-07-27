import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Heart, Gift, Crown, Building, Wine } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Shirokiya (白木屋) - Traditional Izakaya Experience | Complete Guide',
  description: 'Discover Shirokiya, one of Japan\'s most iconic izakaya chains. Authentic atmosphere, diverse menu, and the art of Japanese drinking culture.',
  keywords: [
    'shirokiya', '白木屋', 'izakaya', 'traditional',
    'authentic atmosphere', 'japanese menu', 'cultural experience',
    'japanese cuisine', 'traditional drinks', 'local atmosphere'
  ],
  openGraph: {
    title: 'Shirokiya: The Traditional Izakaya Experience | Complete Guide',
    description: 'Discover Shirokiya, one of Japan\'s most iconic izakaya chains. Authentic atmosphere, diverse menu and the art of Japanese drinking.',
    type: 'article',
    url: '/chains/shirokiya',
  },
  alternates: {
    canonical: '/chains/shirokiya',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ShirokiyaPage() {
  return (
    <>
      <ChainViewTracker chainName="Shirokiya" chainCategory="Izakaya" />
      <div className="min-h-screen bg-gray-50">
      {/* Header with back navigation */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link 
            href="/dish-types/izakaya" 
            className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Izakaya
          </Link>
          
          <div className="flex items-center space-x-4">
            <div className="w-16 h-16 bg-blue-800 rounded-lg flex items-center justify-center">
              <Building className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Shirokiya</h1>
              <p className="text-lg text-gray-600">白木屋</p>
              <p className="text-sm text-gray-500">The accessible traditional izakaya since 1983</p>
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
              <div className="flex items-center space-x-2 mb-4">
                <Info className="w-5 h-5 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Introduction</h2>
              </div>
              
              <div className="prose prose-gray max-w-none">
                <p className="text-lg text-gray-700 mb-4">
                  <strong>Shirokiya</strong> (白木屋, "White Wood House") is one of Japan's most 
                  iconic izakaya chains, belonging to the Monteroza Group. Founded in 1983, 
                  it operates over 480 restaurants and perfectly embodies the traditional 
                  spirit of Japanese izakaya while remaining accessible to family budgets. 
                  Shirokiya is renowned for its authentic atmosphere and quality traditional cuisine.
                </p>
                
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <h3 className="font-semibold text-blue-800 mb-2">🏮 Tradition meets modernity</h3>
                  <ul className="text-blue-700 space-y-1">
                    <li>• <strong>Traditional décor</strong> - Authentic Showa era atmosphere</li>
                    <li>• <strong>Personal service</strong> - Warm and family-friendly welcome</li>
                    <li>• <strong>Varied cuisine</strong> - Menu balancing tradition and innovation</li>
                    <li>• <strong>Reasonable prices</strong> - Accessible to families and groups</li>
                  </ul>
                </div>

                <h3 className="text-xl font-semibold mb-3">🏢 Monteroza Group</h3>
                <p className="mb-4">
                  Shirokiya is part of the powerful Monteroza Group, which also owns 
                  Torikizoku and Watami. This affiliation allows it to benefit from an 
                  optimized supply chain and high quality standards, while maintaining 
                  its own identity centered on izakaya tradition.
                </p>

                <h3 className="text-xl font-semibold mb-3">🍶 Culinary philosophy</h3>
                <p className="mb-4">
                  Shirokiya's philosophy is based on the concept of "ichigo ichie" (一期一会), 
                  the idea that each encounter is unique and precious. This approach translates 
                  into attentive service, carefully prepared dishes, and an atmosphere 
                  that encourages exchanges and conviviality between customers.
                </p>

                <h3 className="text-xl font-semibold mb-3">🎯 Family positioning</h3>
                <p className="mb-4">
                  Unlike upscale or ultra-specialized izakaya, Shirokiya targets a broad 
                  audience including families with children, groups of friends, and 
                  work colleagues. This accessibility makes it an excellent entry point 
                  for discovering Japanese izakaya culture.
                </p>

                <h3 className="text-xl font-semibold mb-3">🌸 Seasonal experience</h3>
                <p className="mb-4">
                  Shirokiya adapts its menu and decoration according to Japanese seasons, 
                  offering spring specialties (sakura), summer (festivals), autumn 
                  (momiji), and winter (kotatsu). This approach reinforces the authenticity 
                  of the cultural experience offered to customers.
                </p>
              </div>
            </div>

            {/* Detailed Menu */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Utensils className="w-5 h-5 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Traditional Menu</h2>
              </div>

              {/* Yakitori Specialties */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🔥 Yakitori & Grilled Items</h3>
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
                        <td className="p-3 font-medium">Yakitori Assortment</td>
                        <td className="p-3">焼き鳥盛り合わせ</td>
                        <td className="p-3">Selection of 5 different skewers</td>
                        <td className="p-3">¥880</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Momo (thigh)</td>
                        <td className="p-3">もも</td>
                        <td className="p-3">Juicy chicken thigh, tare sauce</td>
                        <td className="p-3">¥190</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Tsukune</td>
                        <td className="p-3">つくね</td>
                        <td className="p-3">House-made minced chicken balls</td>
                        <td className="p-3">¥210</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Negima</td>
                        <td className="p-3">ねぎま</td>
                        <td className="p-3">Chicken and leek, popular classic</td>
                        <td className="p-3">¥200</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Beef Teriyaki</td>
                        <td className="p-3">牛テリヤキ</td>
                        <td className="p-3">Beef skewers with teriyaki sauce</td>
                        <td className="p-3">¥320</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Pork Miso</td>
                        <td className="p-3">豚みそ</td>
                        <td className="p-3">Pork marinated in red miso, flavorful</td>
                        <td className="p-3">¥250</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Fish and Seafood */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🐟 Fish & Seafood</h3>
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
                        <td className="p-3 font-medium">Daily Sashimi</td>
                        <td className="p-3">本日の刺身</td>
                        <td className="p-3">Fresh selection according to arrival</td>
                        <td className="p-3">¥780</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Grilled Mackerel</td>
                        <td className="p-3">焼きサバ</td>
                        <td className="p-3">Salt-grilled mackerel, traditional</td>
                        <td className="p-3">¥580</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Fried Squid</td>
                        <td className="p-3">イカフライ</td>
                        <td className="p-3">Crispy squid rings</td>
                        <td className="p-3">¥480</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Aji Tataki</td>
                        <td className="p-3">アジたたき</td>
                        <td className="p-3">Horse mackerel seared with herbs</td>
                        <td className="p-3">¥650</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Grilled Scallops</td>
                        <td className="p-3">ホタテ焼き</td>
                        <td className="p-3">Scallops grilled with butter</td>
                        <td className="p-3">¥720</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Traditional Dishes */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🍲 Traditional Dishes</h3>
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
                        <td className="p-3 font-medium">Chicken Karaage</td>
                        <td className="p-3">鶏からあげ</td>
                        <td className="p-3">House signature fried chicken</td>
                        <td className="p-3">¥520</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">House Gyoza</td>
                        <td className="p-3">手作り餃子</td>
                        <td className="p-3">6 pieces, dough made on-site</td>
                        <td className="p-3">¥420</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Agedashi Tofu</td>
                        <td className="p-3">揚げ出し豆腐</td>
                        <td className="p-3">Fried tofu in dashi broth</td>
                        <td className="p-3">¥380</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Motsu Nikomi</td>
                        <td className="p-3">もつ煮込み</td>
                        <td className="p-3">Miso offal stew, specialty</td>
                        <td className="p-3">¥680</td>
                      </tr>
                      <tr>
                        <td className="p-3 font-medium">Takoyaki</td>
                        <td className="p-3">たこ焼き</td>
                        <td className="p-3">8 pieces, authentic Osaka style</td>
                        <td className="p-3">¥450</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Salads and Vegetables */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4">🥗 Salads & Vegetables</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-blue-600 mb-3">Fresh Salads</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Tofu Salad</strong> - Silky tofu, crisp vegetables (¥420)</li>
                      <li>• <strong>Caesar Salad</strong> - Japanese version with wasabi (¥580)</li>
                      <li>• <strong>Octopus Salad</strong> - Tako su, traditional vinaigrette (¥650)</li>
                      <li>• <strong>Pickled Vegetables</strong> - Assorted tsukemono (¥320)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-600 mb-3">Prepared Vegetables</h4>
                    <ul className="space-y-2 text-sm">
                      <li>• <strong>Edamame</strong> - Garlic or plain soy beans (¥280)</li>
                      <li>• <strong>Spinach Goma-ae</strong> - Spinach with sesame sauce (¥380)</li>
                      <li>• <strong>Cucumber Miso</strong> - Moromi miso for dipping (¥350)</li>
                      <li>• <strong>Grilled Corn</strong> - Butter and soy sauce (¥420)</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Beverages */}
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-4">🍺 Beverages</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-medium text-blue-600 mb-3">Beer</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Draft Beer</strong> - ¥380 (M), ¥580 (L)</li>
                      <li>• <strong>Bottled Beer</strong> - ¥450-520</li>
                      <li>• <strong>Non-alcoholic Beer</strong> - ¥350</li>
                    </ul>
                    
                    <h4 className="font-medium text-blue-600 mb-3 mt-4">Sake</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Hot Sake</strong> - ¥420 (1 gō)</li>
                      <li>• <strong>Cold Sake</strong> - ¥480 (1 gō)</li>
                      <li>• <strong>Premium Sake</strong> - ¥680-980</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-600 mb-3">Shōchū & Whisky</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Sweet Potato Shōchū</strong> - ¥420</li>
                      <li>• <strong>Barley Shōchū</strong> - ¥420</li>
                      <li>• <strong>Whisky Highball</strong> - ¥450</li>
                      <li>• <strong>Whisky on the Rocks</strong> - ¥580</li>
                    </ul>

                    <h4 className="font-medium text-blue-600 mb-3 mt-4">Chu-hi</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Lime</strong> - ¥420</li>
                      <li>• <strong>Grapefruit</strong> - ¥420</li>
                      <li>• <strong>Ume (plum)</strong> - ¥450</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-blue-600 mb-3">Non-alcoholic</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Iced Tea</strong> - ¥280</li>
                      <li>• <strong>Coca Cola</strong> - ¥320</li>
                      <li>• <strong>Fruit Juice</strong> - ¥350</li>
                      <li>• <strong>Mineral Water</strong> - ¥250</li>
                    </ul>

                    <h4 className="font-medium text-blue-600 mb-3 mt-4">Hot Teas</h4>
                    <ul className="space-y-1 text-sm">
                      <li>• <strong>Green Tea</strong> - ¥200</li>
                      <li>• <strong>Oolong Tea</strong> - ¥250</li>
                      <li>• <strong>Jasmine Tea</strong> - ¥280</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Atmosphere and Experience */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Crown className="w-5 h-5 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Traditional Atmosphere</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-amber-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-amber-800 mb-2">🏮 Authentic décor</h3>
                  <p className="text-amber-700 text-sm mb-3">
                    Shirokiya faithfully recreates the atmosphere of Showa era izakaya 
                    with red lanterns, paper placemats, and warm wooden décor 
                    that evokes traditional Japan.
                  </p>
                  <ul className="text-amber-700 text-sm space-y-1">
                    <li>• <strong>Wooden counter</strong> - View of the open kitchen</li>
                    <li>• <strong>Traditional booths</strong> - Low tables, intimate atmosphere</li>
                    <li>• <strong>Soft lighting</strong> - Lanterns and warm light</li>
                    <li>• <strong>Ambient music</strong> - Discrete Japanese melodies</li>
                  </ul>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🎭 Traditional service</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Energetic "Irasshaimase!" welcome</li>
                      <li>• Hot oshibori towels</li>
                      <li>• Personalized recommendations</li>
                      <li>• Attention to empty glasses</li>
                      <li>• Friendly and relaxed atmosphere</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">👥 Typical clientele</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• Office workers after work (nomikai)</li>
                      <li>• Families on weekends</li>
                      <li>• Groups of friends for celebrations</li>
                      <li>• Couples for casual dinner</li>
                      <li>• Tourists discovering izakaya</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-2">🍻 Sharing culture</h4>
                  <p className="text-sm text-green-700">
                    Shirokiya encourages the Japanese tradition of "kanpai" (cheers!) and 
                    sharing dishes among diners. The staff creates an atmosphere 
                    conducive to exchanges and culinary discovery in groups, 
                    perfectly embodying the community spirit of izakaya.
                  </p>
                </div>
              </div>
            </div>

            {/* Practical Guide */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center space-x-2 mb-4">
                <Star className="w-5 h-5 text-blue-600" />
                <h2 className="text-2xl font-bold text-gray-900">Practical Guide</h2>
              </div>
              
              <div className="space-y-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">📋 Visit steps</h3>
                  <ol className="text-blue-700 text-sm space-y-1">
                    <li><strong>1.</strong> Arrival - Wait to be seated by staff</li>
                    <li><strong>2.</strong> Seating - Remove shoes if low tables</li>
                    <li><strong>3.</strong> Oshibori - Use the offered hot towel</li>
                    <li><strong>4.</strong> Drink order - Always start with a beverage</li>
                    <li><strong>5.</strong> Successive orders - Add dishes progressively</li>
                    <li><strong>6.</strong> Kanpai - Toast before drinking</li>
                    <li><strong>7.</strong> Bill - Ask "okaikei kudasai"</li>
                  </ol>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🎯 Recommended first order</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Draft Beer</strong> - To start (¥380)</li>
                      <li>• <strong>Edamame</strong> - Traditional appetizer (¥280)</li>
                      <li>• <strong>Yakitori Assortment</strong> - Discovery (¥880)</li>
                      <li>• <strong>Karaage</strong> - House specialty (¥520)</li>
                      <li><strong>Total: ¥2,060</strong> for complete introduction</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🍶 Traditional experience</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>• <strong>Hot Sake</strong> - Traditional drink (¥420)</li>
                      <li>• <strong>Daily Sashimi</strong> - Guaranteed freshness (¥780)</li>
                      <li>• <strong>Motsu Nikomi</strong> - Traditional dish (¥680)</li>
                      <li>• <strong>Pickled Vegetables</strong> - Side dish (¥320)</li>
                      <li><strong>Total: ¥2,200</strong> for Japanese authenticity</li>
                    </ul>
                  </div>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-medium text-yellow-800 mb-2">⚠️ Important points</h4>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• <strong>Reservation recommended</strong> on weekends and holidays</li>
                    <li>• <strong>Smoking/non-smoking</strong> - Sometimes separate areas</li>
                    <li>• <strong>Table service</strong> - No self-service</li>
                    <li>• <strong>Group billing</strong> - Single payment per table</li>
                    <li>• <strong>No tipping expected</strong> - Service included in prices</li>
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
                  <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Hours</div>
                    <div className="text-sm text-gray-600">5:00 PM - 12:00 AM (Sun-Thu)</div>
                    <div className="text-sm text-gray-600">5:00 PM - 1:00 AM (Fri-Sat)</div>
                    <div className="text-sm text-gray-500">Some restaurants open for lunch</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-sm text-gray-600">480+ restaurants in Japan</div>
                    <div className="text-sm text-gray-500">City centers, stations, shopping malls</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CreditCard className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Payment</div>
                    <div className="text-sm text-gray-600">Cash preferred</div>
                    <div className="text-sm text-gray-500">Cards and e-wallets vary by restaurant</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Wine className="w-5 h-5 text-blue-600 mt-0.5" />
                  <div>
                    <div className="font-medium">Average budget</div>
                    <div className="text-sm text-gray-600">¥2,500-4,000 per person</div>
                    <div className="text-sm text-gray-500">With alcoholic beverages</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tips for Visitors */}
            <div className="bg-blue-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-blue-800 mb-4">
                💡 Tips for Visitors
              </h3>
              
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-blue-700">First time</div>
                  <div className="text-blue-600">Ideal for discovering authentic izakaya</div>
                </div>
                
                <div>
                  <div className="font-medium text-blue-700">Reservation</div>
                  <div className="text-blue-600">Recommended for evenings, show name in Japanese</div>
                </div>
                
                <div>
                  <div className="font-medium text-blue-700">Etiquette</div>
                  <div className="text-blue-600">Respect traditions: kanpai before drinking</div>
                </div>
                
                <div>
                  <div className="font-medium text-blue-700">Atmosphere</div>
                  <div className="text-blue-600">Lively atmosphere is encouraged, it's the izakaya spirit</div>
                </div>
              </div>
            </div>

            {/* Must-Try Specialties */}
            <div className="bg-amber-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-amber-800 mb-3">
                🏆 Must-Try Specialties
              </h3>
              <div className="space-y-3 text-sm">
                <div>
                  <div className="font-medium text-amber-700">Yakitori Assortment</div>
                  <div className="text-amber-600">Perfect for discovering different parts of chicken</div>
                </div>
                <div>
                  <div className="font-medium text-amber-700">House Karaage</div>
                  <div className="text-amber-600">Signature recipe, crispy and juicy chicken</div>
                </div>
                <div>
                  <div className="font-medium text-amber-700">Daily Sashimi</div>
                  <div className="text-amber-600">Guaranteed freshness, seasonal selection</div>
                </div>
                <div>
                  <div className="font-medium text-amber-700">Motsu Nikomi</div>
                  <div className="text-amber-600">Comforting traditional dish, authentic</div>
                </div>
              </div>
            </div>

            {/* Cultural Note */}
            <div className="bg-purple-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-purple-800 mb-3">
                🏮 Cultural Note
              </h3>
              <p className="text-sm text-purple-700">
                Shirokiya embodies the essence of traditional Japanese izakaya: a place 
                to relax after work where all generations and social classes mix. 
                The name "White Wood House" evokes simplicity and authenticity, 
                fundamental values of Japanese culture of sharing and conviviality.
              </p>
            </div>

            {/* Useful Links */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4">Useful Links</h3>
              <div className="space-y-2">
                <a href="https://www.monteroza.co.jp/shop/shirokiya/" 
                   className="block text-blue-600 hover:text-blue-700 text-sm">
                  → Official Shirokiya Website
                </a>
                <a href="/dish-types/izakaya" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Complete izakaya guide
                </a>
                <a href="/chains/torikizoku" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Compare with Torikizoku
                </a>
                <a href="/chains/watami" 
                   className="block text-orange-600 hover:text-orange-700 text-sm">
                  → Compare with Watami
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
