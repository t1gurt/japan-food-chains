import { Metadata } from 'next';
import { Clock, MapPin, CreditCard, Users, Utensils, Info, ChefHat, Award, Star } from 'lucide-react';
import Link from 'next/link';
import ChainViewTracker from '@/components/ChainViewTracker';

export const metadata: Metadata = {
  title: 'Saizeriya (サイゼリヤ) - The Ultimate Italian Chain | A Complete Guide',
  description: 'Discover everything about Saizeriya, Japan\'s most popular Italian chain restaurant. Budget-friendly authentic Italian dishes, complete menu guide, ordering tips, and practical information for visitors.',
  keywords: 'Saizeriya, サイゼリヤ, Italian chain restaurant Japan, budget Italian food Tokyo, cheap pizza Japan, affordable pasta Japan, family restaurant Japan, Japanese chain guide',
  openGraph: {
    title: 'Saizeriya (サイゼリヤ) - The Ultimate Italian Chain | Complete Guide',
    description: 'Everything you need to know about Saizeriya, Japan\'s most beloved Italian chain restaurant. Budget-friendly authentic Italian cuisine for everyone.',
  },
};

export default function SaizeriyaPage() {
  return (
    <>
    <ChainViewTracker chainName="Saizeriya" chainCategory="Italian" />
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-xl shadow-lg text-white p-8 mb-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold mb-4">
              Saizeriya <span className="text-red-200">(サイゼリヤ)</span>
            </h1>
            <p className="text-xl text-red-100 mb-6">
              Japan's ultimate Italian chain restaurant - Authentic cuisine at unbeatable prices
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-red-500/20 rounded-lg p-3">
                <div className="text-2xl font-bold">1,500+</div>
                <div className="text-sm text-red-200">Restaurants</div>
              </div>
              <div className="bg-red-500/20 rounded-lg p-3">
                <div className="text-2xl font-bold">299¥~</div>
                <div className="text-sm text-red-200">From</div>
              </div>
              <div className="bg-red-500/20 rounded-lg p-3">
                <div className="text-2xl font-bold">Italian</div>
                <div className="text-sm text-red-200">Cuisine</div>
              </div>
              <div className="bg-red-500/20 rounded-lg p-3">
                <div className="text-2xl font-bold">Family</div>
                <div className="text-sm text-red-200">Friendly</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Introduction */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">The Revolution of Italian Cuisine in Japan</h2>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Saizeriya (サイゼリヤ)</strong> has accomplished the impossible: making authentic Italian cuisine 
                accessible to everyone in Japan. Since its founding in 1973, this legendary chain has redefined 
                the concept of "family restaurant" by offering quality Italian dishes at incredibly affordable prices.
              </p>
              
              <p className="text-gray-700 leading-relaxed mb-4">
                What makes Saizeriya unique is its commitment to <strong>authentic Italian flavors</strong> 
                while maintaining prices that suit every budget. From pizza starting at 399¥ to fresh pasta 
                for under 300¥, Saizeriya proves that accessibility and quality can coexist.
              </p>
              
              <p className="text-gray-700 leading-relaxed">
                With its recognizable red and white decor and omnipresent locations throughout Japan, 
                Saizeriya has become much more than just a restaurant - it's a cultural institution 
                that has democratized Italian cuisine for the Japanese.
              </p>
            </div>

            {/* Menu */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-6">
                <Utensils className="w-6 h-6 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Signature Menu</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Pizzas */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <ChefHat className="w-5 h-5 text-red-600 mr-2" />
                    Pizzas
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">Pizza Margherita</div>
                        <div className="text-sm text-gray-600">ピザマルゲリータ</div>
                      </div>
                      <span className="text-red-600 font-bold">399¥</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">Pepperoni Pizza</div>
                        <div className="text-sm text-gray-600">ペペロニピザ</div>
                      </div>
                      <span className="text-red-600 font-bold">499¥</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">Quattro Formaggi</div>
                        <div className="text-sm text-gray-600">クアトロフォルマッジ</div>
                      </div>
                      <span className="text-red-600 font-bold">599¥</span>
                    </div>
                  </div>
                </div>

                {/* Pasta */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <ChefHat className="w-5 h-5 text-red-600 mr-2" />
                    Pasta
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">Spaghetti Peperoncino</div>
                        <div className="text-sm text-gray-600">スパゲッティペペロンチーノ</div>
                      </div>
                      <span className="text-red-600 font-bold">299¥</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">Carbonara</div>
                        <div className="text-sm text-gray-600">カルボナーラ</div>
                      </div>
                      <span className="text-red-600 font-bold">399¥</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">Arrabiata</div>
                        <div className="text-sm text-gray-600">アラビアータ</div>
                      </div>
                      <span className="text-red-600 font-bold">349¥</span>
                    </div>
                  </div>
                </div>

                {/* Appetizers & Sides */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <ChefHat className="w-5 h-5 text-red-600 mr-2" />
                    Appetizers & Sides
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">Escargot</div>
                        <div className="text-sm text-gray-600">エスカルゴ</div>
                      </div>
                      <span className="text-red-600 font-bold">299¥</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">Garlic Bread</div>
                        <div className="text-sm text-gray-600">ガーリックトースト</div>
                      </div>
                      <span className="text-red-600 font-bold">199¥</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">Salad Bar</div>
                        <div className="text-sm text-gray-600">サラダバー</div>
                      </div>
                      <span className="text-red-600 font-bold">299¥</span>
                    </div>
                  </div>
                </div>

                {/* Beverages */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <ChefHat className="w-5 h-5 text-red-600 mr-2" />
                    Beverages
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">Wine Decanter</div>
                        <div className="text-sm text-gray-600">ワインデキャンタ</div>
                      </div>
                      <span className="text-red-600 font-bold">199¥</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">Soft Drinks</div>
                        <div className="text-sm text-gray-600">ソフトドリンク</div>
                      </div>
                      <span className="text-red-600 font-bold">199¥</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <div>
                        <div className="font-medium">Coffee</div>
                        <div className="text-sm text-gray-600">コーヒー</div>
                      </div>
                      <span className="text-red-600 font-bold">149¥</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* How to Order */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Info className="w-6 h-6 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">How to Order at Saizeriya</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Electronic Ordering System</h4>
                  <ol className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <span className="bg-red-100 text-red-600 text-xs font-medium px-2 py-1 rounded mr-3 mt-0.5">1</span>
                      <span>Take a seat at any available table</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-red-100 text-red-600 text-xs font-medium px-2 py-1 rounded mr-3 mt-0.5">2</span>
                      <span>Use the electronic tablet on the table</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-red-100 text-red-600 text-xs font-medium px-2 py-1 rounded mr-3 mt-0.5">3</span>
                      <span>Browse menu categories and select items</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-red-100 text-red-600 text-xs font-medium px-2 py-1 rounded mr-3 mt-0.5">4</span>
                      <span>Confirm your order on the screen</span>
                    </li>
                    <li className="flex items-start">
                      <span className="bg-red-100 text-red-600 text-xs font-medium px-2 py-1 rounded mr-3 mt-0.5">5</span>
                      <span>Wait for your food to be served</span>
                    </li>
                  </ol>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Useful Japanese Phrases</h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <div className="font-medium text-gray-900">Ordering:</div>
                      <div className="text-gray-700">"Kore o onegaishimasu"</div>
                      <div className="text-gray-500 text-xs">これをお願いします</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">More time:</div>
                      <div className="text-gray-700">"Mō sukoshi matte kudasai"</div>
                      <div className="text-gray-500 text-xs">もう少し待ってください</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">Additional order:</div>
                      <div className="text-gray-700">"Tsuika chūmon onegaishimasu"</div>
                      <div className="text-gray-500 text-xs">追加注文お願いします</div>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">The check:</div>
                      <div className="text-gray-700">"Okaikei onegaishimasu"</div>
                      <div className="text-gray-500 text-xs">お会計お願いします</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Competitive Advantages */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <div className="flex items-center mb-4">
                <Award className="w-6 h-6 text-red-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Why Choose Saizeriya</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Unbeatable Prices</h4>
                      <p className="text-sm text-gray-700">
                        Pizza from 399¥, pasta from 299¥ - maximum accessibility
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Italian Authenticity</h4>
                      <p className="text-sm text-gray-700">
                        Traditional recipes, quality ingredients
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">National Presence</h4>
                      <p className="text-sm text-gray-700">
                        Over 1,500 restaurants, always nearby
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Technological Innovation</h4>
                      <p className="text-sm text-gray-700">
                        Electronic ordering, optimized service, modern experience
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Adaptability</h4>
                      <p className="text-sm text-gray-700">
                        Menu adapted to Japanese tastes while maintaining authenticity
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-red-600 text-xs">✓</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Family Atmosphere</h4>
                      <p className="text-sm text-gray-700">
                        Welcoming environment, perfect for all ages
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Practical Information */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <Info className="w-5 h-5 text-red-600 mr-2" />
                Practical Information
              </h3>
              
              <div className="space-y-4 text-sm">
                <div className="flex items-start space-x-3">
                  <Clock className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Hours</div>
                    <div className="text-gray-600">11AM-11PM (general)</div>
                    <div className="text-gray-500 text-xs">Continuous service</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Location</div>
                    <div className="text-gray-600">City centers, suburbs</div>
                    <div className="text-gray-500 text-xs">1,500+ restaurants</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <CreditCard className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Payment</div>
                    <div className="text-gray-600">Cash, cards, PayPay</div>
                    <div className="text-gray-500 text-xs">All cards accepted</div>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Users className="w-4 h-4 text-gray-400 mt-1" />
                  <div>
                    <div className="font-medium text-gray-900">Clientele</div>
                    <div className="text-gray-600">Families, students</div>
                    <div className="text-gray-500 text-xs">Very popular</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-gray-200">
                <a 
                  href="https://www.saizeriya.co.jp" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-red-600 hover:text-red-700 text-sm font-medium"
                >
                  Official Saizeriya Website →
                </a>
              </div>
            </div>

            {/* Typical Budget */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Typical Budget</h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Pizza Margherita</span>
                  <span className="font-medium">399¥</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Pasta Peperoncino</span>
                  <span className="font-medium">299¥</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Beverage</span>
                  <span className="font-medium">199¥</span>
                </div>
                <div className="border-t border-gray-200 pt-2 mt-2">
                  <div className="flex justify-between font-medium">
                    <span className="text-gray-900">Complete meal</span>
                    <span className="text-gray-900">700-1000¥</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Our Rating */}
            <div className="bg-red-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Our Review</h3>
              <div className="flex items-center mb-2">
                <div className="flex text-red-400">
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4 fill-current" />
                  <Star className="w-4 h-4" />
                </div>
                <span className="text-sm text-gray-600 ml-2">Excellent value for money</span>
              </div>
              <p className="text-sm text-gray-700">
                <strong>The successful democratization of Italian cuisine.</strong> Saizeriya proves 
                that accessibility and authenticity can coexist. Unbeatable prices 
                for honest and flavorful Italian cuisine. Perfect for discovering 
                or rediscovering Italian classics.
              </p>
            </div>

            {/* Must-Try Specialties */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Must Try</h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span><strong>Pizza Margherita</strong> - The authentic for 399¥</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span><strong>Peperoncino</strong> - Perfect simplicity</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span><strong>Escargot</strong> - Surprising specialty</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <span><strong>Wine Decanter</strong> - Perfect accompaniment</span>
                </div>
              </div>
            </div>

            {/* Navigation to other chains */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Other Family Restaurants</h3>
              
              <div className="space-y-3">
                <Link 
                  href="/chains/gusto" 
                  className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="font-medium text-gray-900">Gusto</div>
                  <div className="text-sm text-gray-600">The versatile family restaurant</div>
                </Link>
                
                <Link 
                  href="/chains/skylark" 
                  className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="font-medium text-gray-900">Skylark</div>
                  <div className="text-sm text-gray-600">The pioneer of the genre</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
