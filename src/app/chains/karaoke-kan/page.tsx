import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Heart, Music, Gamepad2 } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Karaoke Kan カラオケ館 | Premium Karaoke | JapanChains',
  description: 'Premium karaoke experience. Elegant rooms, cutting-edge equipment, quality service.',
  keywords: [
    'karaoke kan', 'カラオケ館', 'karaoke', 'private rooms',
    'quality equipment', 'authentic experience', 'japanese singing',
    'entertainment', 'karaoke box', 'friendly atmosphere'
  ],
  openGraph: {
    title: 'Karaoke Kan: The Premium Karaoke Experience | JapanChains',
    description: 'Discover Karaoke Kan, the premium karaoke chain. Elegant rooms, cutting-edge equipment and quality service.',
    type: 'article',
    url: '/chains/karaoke-kan',
  },
  alternates: {
    canonical: '/chains/karaoke-kan',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function KaraokeKanPage() {
  return (
    <>
      <ChainViewTracker chainName="karaoke-kan" chainCategory="karaoke" />
      <div className="min-h-screen bg-gray-50">
        {/* Header with back button */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link 
              href="/dish-types/karaoke" 
              className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Karaoke
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                <Music className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Karaoke Kan</h1>
                <p className="text-gray-600">カラオケ館</p>
                <div className="flex items-center mt-2">
                  <span className="bg-blue-100 text-blue-800 text-sm font-medium px-2.5 py-0.5 rounded">
                    Karaoke
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Description */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">About Karaoke Kan</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Karaoke Kan (カラオケ館) is a premium karaoke chain renowned for the exceptional 
                  quality of its equipment and impeccable service. With over 200 establishments 
                  spread throughout Japan, Karaoke Kan has established itself as a reference 
                  in the Japanese musical entertainment industry.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4">
                  The chain distinguishes itself through its premium approach, offering spacious 
                  and elegantly decorated rooms, equipped with the most advanced audio and video 
                  systems on the market. Karaoke Kan targets a demanding clientele seeking a 
                  refined and memorable karaoke experience.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Founded with the philosophy of transforming each karaoke session into an 
                  exceptional moment, Karaoke Kan continues to innovate by offering personalized 
                  services and cutting-edge technologies to satisfy the highest expectations.
                </p>
              </div>

              {/* History and philosophy */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  <History className="w-5 h-5 inline mr-2 text-blue-600" />
                  History and Philosophy
                </h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-medium text-gray-900">1990s - Birth of the Premium Concept</h4>
                    <p className="text-gray-700 text-sm">
                      Karaoke Kan was born from the desire to create a premium karaoke experience, 
                      differentiating itself through quality service and elegant facilities.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-medium text-gray-900">2000s - Technological Innovation</h4>
                    <p className="text-gray-700 text-sm">
                      A pioneer in adopting new technologies, Karaoke Kan invested heavily 
                      in professional audio equipment and advanced interface systems.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-medium text-gray-900">2010s-2020s - Expansion and Refinement</h4>
                    <p className="text-gray-700 text-sm">
                      Strategic expansion in premium districts of major cities, with a focus 
                      on continuous improvement of customer experience and space design.
                    </p>
                  </div>
                </div>
              </div>

              {/* Premium services */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  <Award className="w-5 h-5 inline mr-2 text-blue-600" />
                  Premium Services
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">🎵 Premium Audio System</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Professional high-fidelity audio system</li>
                      <li>• Premium wireless microphones with noise reduction</li>
                      <li>• Professional 32-band equalizer</li>
                      <li>• Advanced vocal effects and intelligent harmonization</li>
                      <li>• Personalized monitoring system</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">📺 Video Technology</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• 4K ultra-high definition screens</li>
                      <li>• Intuitive and responsive touch interface</li>
                      <li>• Intelligent search system</li>
                      <li>• High-quality video recording</li>
                      <li>• Integrated social sharing</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">🏠 Quality Spaces</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Spacious contemporary design rooms</li>
                      <li>• Professional acoustic isolation</li>
                      <li>• High-end and ergonomic furniture</li>
                      <li>• Customizable ambient lighting</li>
                      <li>• Optimized individual air conditioning</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">🍽�E�EGastronomic Service</h4>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Elaborate gastronomic menu</li>
                      <li>• Premium beverage selection</li>
                      <li>• Discreet and efficient room service</li>
                      <li>• Vegetarian and dietary options</li>
                      <li>• Carefully presented dishes</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Premium pricing */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  <CreditCard className="w-5 h-5 inline mr-2 text-blue-600" />
                  Premium Pricing
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">💎 Standard Rates (per person)</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-700">30 minutes</span>
                        <span className="font-medium text-blue-600">¥500-750</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-700">1 hour</span>
                        <span className="font-medium text-blue-600">¥900-1,400</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-700">2 hours</span>
                        <span className="font-medium text-blue-600">¥1,600-2,400</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-700">3h Premium Package</span>
                        <span className="font-medium text-blue-600">¥2,200-3,200</span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">⭁ESpecial Offers</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-700">Premium Morning (9am-1pm)</span>
                        <span className="font-medium text-green-600">-25%</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-700">Monday-Wednesday</span>
                        <span className="font-medium text-green-600">-20%</span>
                      </div>
                      <div className="flex justify-between items-center py-2 border-b border-gray-100">
                        <span className="text-gray-700">Loyalty members</span>
                        <span className="font-medium text-green-600">-15%</span>
                      </div>
                      <div className="flex justify-between items-center py-2">
                        <span className="text-gray-700">Birthday package</span>
                        <span className="font-medium text-green-600">-30%</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-900 mb-2">🥁EPremium Drink Packages</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Premium Soft Bar</span>
                      <div className="text-blue-700">¥400-500/h</div>
                    </div>
                    <div>
                      <span className="font-medium">Nomihoudai Deluxe</span>
                      <div className="text-blue-700">¥800-1,200/h</div>
                    </div>
                    <div>
                      <span className="font-medium">VIP Selection</span>
                      <div className="text-blue-700">¥1,500-2,200/h</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Premium experience */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  <Star className="w-5 h-5 inline mr-2 text-blue-600" />
                  The Karaoke Kan Experience
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">✨ Refined Atmosphere</h4>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      Karaoke Kan cultivates a sophisticated and elegant atmosphere. The establishments 
                      feature contemporary design with quality materials, creating an environment that 
                      is both luxurious and comfortable. Carefully studied lighting and refined 
                      decoration transform each session into a memorable experience.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">🎯 Clientele and Occasions</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h5 className="font-medium text-gray-900 text-sm mb-1">Professionals</h5>
                        <p className="text-gray-600 text-xs">Corporate receptions, company events</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h5 className="font-medium text-gray-900 text-sm mb-1">Celebrations</h5>
                        <p className="text-gray-600 text-xs">Birthdays, engagements, achievements</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h5 className="font-medium text-gray-900 text-sm mb-1">VIP Groups</h5>
                        <p className="text-gray-600 text-xs">Private parties, exclusive events</p>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-lg">
                        <h5 className="font-medium text-gray-900 text-sm mb-1">Dates</h5>
                        <p className="text-gray-600 text-xs">Romantic meetings, intimate outings</p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-medium text-gray-900 mb-3">🔧 Personalized Services</h4>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">1</div>
                        <div>
                          <p className="text-gray-900 font-medium text-sm">VIP Welcome</p>
                          <p className="text-gray-600 text-xs">Personalized reception with presentation of premium services and dedicated assistance.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">2</div>
                        <div>
                          <p className="text-gray-900 font-medium text-sm">Personalized Configuration</p>
                          <p className="text-gray-600 text-xs">Professional audio adjustment according to your vocal and musical preferences.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">3</div>
                        <div>
                          <p className="text-gray-900 font-medium text-sm">Expert Catalog</p>
                          <p className="text-gray-600 text-xs">Access to extensive catalog with personalized recommendations and new releases.</p>
                        </div>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">4</div>
                        <div>
                          <p className="text-gray-900 font-medium text-sm">Concierge Service</p>
                          <p className="text-gray-600 text-xs">Attentive service with priority orders and continuous assistance.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed practical information */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  <Info className="w-5 h-5 inline mr-2 text-blue-600" />
                  Practical Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🕒 Opening Hours</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>Mon-Thu: 12:00 PM-2:00 AM</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>Fri-Sat: 12:00 PM-5:00 AM</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>Sunday: 12:00 PM-12:00 AM</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>Special mornings: 9:00 AM-1:00 PM</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">💳 Accepted Payments</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div>• International credit cards</div>
                      <div>• Japanese debit cards</div>
                      <div>• IC Cards (Suica, Pasmo, etc.)</div>
                      <div>• Mobile payments (PayPay, Line Pay, Apple Pay)</div>
                      <div>• Cash (with exact change)</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">📍 Premium Locations</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div>• Central business districts</div>
                      <div>• Premium entertainment districts</div>
                      <div>• Luxury shopping centers</div>
                      <div>• Premium tourist areas</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">⚠�E�EImportant Information</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div>• Reservation highly recommended</div>
                      <div>• Strict non-smoking policy</div>
                      <div>• Smart casual dress code</div>
                      <div>• Free high-speed Wi-Fi</div>
                      <div>• Priority parking available</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Premium highlights */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">💎 Premium Excellence</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Exceptional Audio Quality</p>
                      <p className="text-xs text-gray-600">Professional high-fidelity systems</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Personalized Service</p>
                      <p className="text-xs text-gray-600">Dedicated assistance and continuous support</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Refined Design</p>
                      <p className="text-xs text-gray-600">Contemporary and elegant spaces</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Premium Experience</p>
                      <p className="text-xs text-gray-600">Every detail designed for your pleasure</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed premium services */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">🌟 Premium Services</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Music className="w-4 h-4 mr-3 text-blue-600 flex-shrink-0" />
                    <span>High-quality karaoke</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Gamepad2 className="w-4 h-4 mr-3 text-blue-600 flex-shrink-0" />
                    <span>Professional equipment</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Users className="w-4 h-4 mr-3 text-blue-600 flex-shrink-0" />
                    <span>Spacious premium rooms</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Utensils className="w-4 h-4 mr-3 text-blue-600 flex-shrink-0" />
                    <span>Gastronomic menu</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Heart className="w-4 h-4 mr-3 text-blue-600 flex-shrink-0" />
                    <span>Concierge service</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Star className="w-4 h-4 mr-3 text-blue-600 flex-shrink-0" />
                    <span>Personalized experience</span>
                  </div>
                </div>
              </div>

              {/* Premium statistics */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">📊 Excellence in Numbers</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">200+</div>
                    <div className="text-xs text-gray-600">Premium establishments</div>
                  </div>
                  <hr className="border-gray-200" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">350K+</div>
                    <div className="text-xs text-gray-600">Quality titles</div>
                  </div>
                  <hr className="border-gray-200" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">95%</div>
                    <div className="text-xs text-gray-600">Customer satisfaction</div>
                  </div>
                  <hr className="border-gray-200" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">VIP</div>
                    <div className="text-xs text-gray-600">Guaranteed experience</div>
                  </div>
                </div>
              </div>

              {/* Loyalty program */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">🎫 Loyalty Program</h3>
                <div className="space-y-3">
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <p className="text-yellow-800 font-medium text-sm">🥁EBronze Member</p>
                    <p className="text-yellow-700 text-xs">5% discount after 3 visits</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="text-gray-800 font-medium text-sm">🥁ESilver Member</p>
                    <p className="text-gray-700 text-xs">10% + reservation priority</p>
                  </div>
                  <div className="bg-yellow-100 p-3 rounded-lg">
                    <p className="text-yellow-900 font-medium text-sm">🥁EGold Member</p>
                    <p className="text-yellow-800 text-xs">15% + VIP room access</p>
                  </div>
                </div>
              </div>

              {/* Premium tips */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">💡 Expert Tips</h3>
                <div className="space-y-3 text-sm">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-blue-800 font-medium">📞 VIP Reservations</p>
                    <p className="text-blue-700 text-xs">Book 24h in advance for the best rooms</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="text-purple-800 font-medium">🎵 Morning Sessions</p>
                    <p className="text-purple-700 text-xs">Enjoy the calm and advantageous rates</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-green-800 font-medium">🍾 Special Occasions</p>
                    <p className="text-green-700 text-xs">Celebration packages with extras included</p>
                  </div>
                </div>
              </div>

              {/* Category */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">🏷�E�ECategory</h3>
                <Link 
                  href="/dish-types/karaoke"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  <Music className="w-4 h-4 mr-2" />
                  Premium Karaoke
                  <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                </Link>
                <div className="mt-3 text-xs text-gray-500">
                  Explore the world of Japanese karaoke and its different chains
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


