import Link from "next/link";
import Image from "next/image";
import { Clock, MapPin, DollarSign, Users, ChefHat, Star, Award, TrendingUp, Heart, Utensils } from "lucide-react";
import ChainViewTracker from '../../../components/ChainViewTracker';

export const metadata = {
  title: "Nakau なか卯 | Gyudon + Udon | Japan Food Chains",
  description: "Perfect fusion of gyudon-udon. Family quality, varied menu, Oyako-don specialty.",
  keywords: ["Nakau", "なか卯", "gyudon", "udon", "tempura", "japanese restaurants", "chain", "english guide"],
  openGraph: {
    title: "Nakau なか卯 | Gyudon + Udon | Japan Food Chains",
    description: "Perfect fusion of gyudon-udon. Family quality, varied menu, Oyako-don specialty.",
    type: "article",
    url: '/chains/nakau',
  },
  alternates: {
    canonical: '/chains/nakau'
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function NakauPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      <ChainViewTracker chainName="Nakau" chainCategory="gyudon" />
      
      {/* Navigation Breadcrumb */}
      <nav className="bg-white shadow-sm border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
          <div className="flex items-center space-x-2 text-sm">
            <Link href="/" className="text-orange-600 hover:text-orange-800 font-medium">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/dish-types/gyudon" className="text-orange-600 hover:text-orange-800 font-medium">
              Gyūdon
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">Nakau</span>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
          <div className="bg-gradient-to-r from-orange-600 to-orange-700 px-8 py-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="w-32 h-32 bg-white rounded-2xl flex items-center justify-center shadow-lg">
                <div className="text-orange-600 font-bold text-4xl">なか卯</div>
              </div>
              
              <div className="text-center md:text-left text-white">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Nakau
                  <span className="block text-2xl md:text-3xl mt-2 text-orange-200">なか卯</span>
                </h1>
                <p className="text-xl md:text-2xl text-orange-100 font-medium">
                  The Perfect Gyūdon & Udon Fusion
                </p>
                <p className="text-lg text-orange-200 mt-2">
                  Family Quality Specialist since 1969
                </p>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="px-8 py-6 bg-gradient-to-r from-orange-50 to-orange-100">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-700">460+</div>
                <div className="text-sm text-orange-600">Restaurants</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-700">55 years</div>
                <div className="text-sm text-orange-600">Of history</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-700">¥490~</div>
                <div className="text-sm text-orange-600">Average price</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-orange-700">24/7</div>
                <div className="text-sm text-orange-600">Some locations</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Introduction */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Users className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Discover Nakau</h2>
              </div>
              
              <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
                <p className="text-xl text-orange-600 font-semibold mb-4">
                  Nakau revolutionizes the Japanese fast-food experience by combining two of Japan's most popular dishes: gyūdon and udon.
                </p>
                
                <p>
                  Founded in <strong>1969</strong> under the name "Nakau Honten", this unique chain developed an innovative concept that distinguishes it from competitors Yoshinoya, Sukiya and Matsuya. Rather than focusing solely on gyūdon, Nakau expanded its menu to include <strong>freshly prepared udon</strong>, creating a unique positioning in the Japanese fast-food market.
                </p>
                
                <p>
                  Nakau's philosophy is based on <strong>"accessible family quality"</strong> - offering dishes that remind you of home cooking while maintaining the speed and efficiency of a fast-food chain. This approach has allowed the brand to build loyalty among diverse customers, from busy salarymen to families looking for a satisfying meal.
                </p>
              </div>
            </div>

            {/* Signature Menu */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <ChefHat className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Menu & Specialties</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-orange-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-orange-800 mb-4 flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Premium Gyūdon
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>親子丼 (Oyako-don)</strong> - Chicken and egg, signature specialty</li>
                    <li><strong>牛丼 (Gyū-don)</strong> - Simmered beef, home-style</li>
                    <li><strong>カツ丼 (Katsu-don)</strong> - Breaded pork cutlet</li>
                    <li><strong>天丼 (Ten-don)</strong> - Tempura over rice</li>
                    <li><strong>海鮮丼 (Kaisen-don)</strong> - Assorted seafood</li>
                  </ul>
                </div>

                <div className="bg-orange-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-orange-800 mb-4 flex items-center gap-2">
                    <Utensils className="w-5 h-5" />
                    Udon & Noodles
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li><strong>かけうどん (Kake udon)</strong> - Plain udon in dashi broth</li>
                    <li><strong>肉うどん (Niku udon)</strong> - Udon with simmered beef</li>
                    <li><strong>天ぷらうどん (Tempura udon)</strong> - With shrimp tempura</li>
                    <li><strong>カレーうどん (Curry udon)</strong> - Udon in Japanese curry</li>
                    <li><strong>そば (Soba)</strong> - Buckwheat noodles available</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gradient-to-r from-orange-100 to-orange-50 rounded-lg">
                <div className="flex items-start gap-3">
                  <Star className="w-5 h-5 text-orange-600 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-orange-800 mb-2">Nakau's Secret</h4>
                    <p className="text-gray-700 text-sm">
                      The <strong>udon are prepared fresh</strong> in each restaurant, unlike most chains that use industrial noodles. The dashi broth is prepared daily with authentic bonito flakes (katsuobushi), creating a superior taste experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Ordering Guide */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Clock className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Ordering Guide</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-orange-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-orange-800 mb-4">Hybrid Ordering System</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">🎫 Vending Machine</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Insert your money</li>
                        <li>• Select your main dish</li>
                        <li>• Choose size (並/大/特盛)</li>
                        <li>• Add side dishes</li>
                        <li>• Collect ticket and change</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">👥 Counter Ordering</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        <li>• Some stores accept direct orders</li>
                        <li>• Staff generally speak basic English</li>
                        <li>• Payment by cash or IC card</li>
                        <li>• Take-away option available</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <h4 className="font-bold text-blue-800 mb-2">Tips to Optimize Your Order</h4>
                      <ul className="text-sm text-blue-700 space-y-1">
                        <li>• "定食 (teishoku)" sets include miso soup and vegetables</li>
                        <li>• Ask for "大盛り無料 (ōmori muryō)" for free extra rice (certain dishes)</li>
                        <li>• Udon requires 3-5 minutes additional preparation time</li>
                        <li>• Green tea water is self-service</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Cultural Experience */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Heart className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">The Nakau Experience</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-orange-800">Atmosphere & Ambiance</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span><strong>Warm design</strong> - Light wood interior, soft lighting</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span><strong>Family spaces</strong> - Tables for 4-6 people available</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span><strong>Attentive service</strong> - Staff trained in hospitality</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span><strong>Relaxed atmosphere</strong> - Less rushed than Yoshinoya</span>
                    </li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-bold text-orange-800">Key Differentiators</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span><strong>Superior quality</strong> - Fresher ingredients</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span><strong>Diversified menu</strong> - Gyūdon AND udon under one roof</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span><strong>Visible preparation</strong> - Open kitchen in some stores</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span><strong>Continuous innovation</strong> - New seasonal products</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Practical Information */}
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">Practical Information</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="bg-orange-50 rounded-lg p-4">
                    <h3 className="font-bold text-orange-800 mb-2 flex items-center gap-2">
                      <DollarSign className="w-4 h-4" />
                      Price Range
                    </h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Gyūdon 並盛</strong>: ¥490-580</li>
                      <li>• <strong>Oyako-don</strong>: ¥650-750</li>
                      <li>• <strong>Simple Udon</strong>: ¥380-480</li>
                      <li>• <strong>Complete sets</strong>: ¥800-1,200</li>
                      <li>• <strong>Kids menu</strong>: ¥480-580</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 rounded-lg p-4">
                    <h3 className="font-bold text-orange-800 mb-2 flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      Typical Hours
                    </h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>City centers</strong>: 24/7 or 6 AM - 2 AM</li>
                      <li>• <strong>Suburbs</strong>: 7 AM - 11 PM generally</li>
                      <li>• <strong>Highways</strong>: Extended hours</li>
                      <li>• <strong>No closure</strong>: New Year only</li>
                    </ul>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-green-50 rounded-lg p-4">
                    <h3 className="font-bold text-green-800 mb-2">Dietary Requirements</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Vegetarian</strong>: Udon with vegetable dashi (on request)</li>
                      <li>• <strong>Pork-free</strong>: Many options available</li>
                      <li>• <strong>Allergies</strong>: Information available in English</li>
                      <li>• <strong>Children</strong>: Adapted menu and adjustable portions</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4">
                    <h3 className="font-bold text-blue-800 mb-2">Additional Services</h3>
                    <ul className="text-sm text-gray-700 space-y-1">
                      <li>• <strong>Free Wi-Fi</strong> in most stores</li>
                      <li>• <strong>Power outlets</strong> at counters</li>
                      <li>• <strong>Take-out ordering</strong> optimized</li>
                      <li>• <strong>Delivery</strong> via Uber Eats/demae-can</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Info Card */}
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-6">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Nakau at a Glance</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Founded</div>
                    <div className="text-sm text-gray-600">1969 (55 years)</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Restaurants</div>
                    <div className="text-sm text-gray-600">460+ in Japan</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Star className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Specialty</div>
                    <div className="text-sm text-gray-600">Gyūdon + Fresh Udon</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Average budget</div>
                    <div className="text-sm text-gray-600">¥500-800 per person</div>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">Strength</div>
                    <div className="text-sm text-gray-600">Family quality</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-bold text-gray-900 mb-3">Recommendations</h4>
                <div className="space-y-2">
                  <div className="bg-orange-50 rounded-lg p-3">
                    <div className="font-medium text-orange-800 text-sm">For beginners</div>
                    <div className="text-xs text-orange-600">親子丼 (Oyako-don) ¥650</div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-3">
                    <div className="font-medium text-orange-800 text-sm">Complete experience</div>
                    <div className="text-xs text-orange-600">Gyūdon + Udon set</div>
                  </div>
                  <div className="bg-orange-50 rounded-lg p-3">
                    <div className="font-medium text-orange-800 text-sm">Budget option</div>
                    <div className="text-xs text-orange-600">かけうどん ¥380</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Links */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Similar Chains</h3>
              <div className="space-y-3">
                <Link href="/chains/yoshinoya" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="font-medium text-gray-900">Yoshinoya</div>
                  <div className="text-sm text-gray-600">The original gyūdon</div>
                </Link>
                <Link href="/chains/sukiya" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="font-medium text-gray-900">Sukiya</div>
                  <div className="text-sm text-gray-600">Leader by number</div>
                </Link>
                <Link href="/chains/matsuya" className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <div className="font-medium text-gray-900">Matsuya</div>
                  <div className="text-sm text-gray-600">Technological innovation</div>
                </Link>
                <Link href="/dish-types/udon" className="block p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-colors">
                  <div className="font-medium text-orange-800">Udon Specialists</div>
                  <div className="text-sm text-orange-600">Discover other chains</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
