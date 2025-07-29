import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Heart, Music, Gamepad2 } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Big Echo | Japan's #1 Karaoke | JapanChains",
  description: "Largest karaoke chain. DAM guide, booking, prices for a successful night.",
  keywords: [
    'big echo', 'ビッグエコー', 'Japanese karaoke', 'daiichikosho',
    'denmoku guide', 'dam system', 'nomihoudai', 'hitokara', 
    'karaoke box culture', 'English guide', 'karaoke etiquette',
    'romaji rubi', 'karaoke prices Japan', 'French songs Japan'
  ],
  openGraph: {
    title: "Big Echo | Japan's #1 Karaoke | JapanChains",
    description: "Largest karaoke chain. DAM guide, booking, prices for a successful night.",
    type: 'article',
    locale: "en_US",
    siteName: "JapanChains - Your Guide to Japanese Restaurants"
  },
  alternates: {
    canonical: '/chains/big-echo',
  },
  robots: {
    index: true,
    follow: true
  },
};

export default function BigEchoPage() {
  return (
    <>
      <ChainViewTracker chainName="big-echo" chainCategory="karaoke" />
      <div className="min-h-screen bg-gray-50">
        {/* Header with back button */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link 
              href="/type-plat/karaoke" 
              className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Karaokes
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-purple-600 rounded-lg flex items-center justify-center">
                <Music className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Big Echo</h1>
                <p className="text-gray-600">ビッグエコー</p>
                <div className="flex items-center mt-2">
                  <span className="bg-purple-100 text-purple-800 text-sm font-medium px-2.5 py-0.5 rounded">
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
              {/* Main description */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">Japanese Karaoke: A Unique Culture</h2>
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg mb-6">
                  <h3 className="text-lg font-semibold text-purple-900 mb-3">🎵 What is Japanese Karaoke?</h3>
                  <p className="text-gray-700 leading-relaxed mb-3">
                    Unlike Western karaoke where you sing in front of an audience, Japanese karaoke is practiced 
                    in <strong>"karaoke boxes"</strong> - private soundproof rooms where you can sing freely 
                    with your friends without fear of judgment.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    The essence of Japanese karaoke: <em>"It doesn't matter if you sing well or badly, no one judges you!"</em> 
                    The emphasis is on shared fun and participation, not performance.
                  </p>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Big Echo: Japan's Karaoke Leader</h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  <strong>Big Echo (ビッグエコー)</strong> is Japan's largest karaoke chain with over 400 establishments 
                  nationwide. Operated by Daiichikosho, this chain guarantees standardized quality 
                  and experience across all its locations.
                </p>
                
                <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <h4 className="font-semibold text-blue-900 mb-2">🎤 The LIVE DAM System: Premium Technology</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Big Echo uses the <strong>"DAM"</strong> system, considered the premium choice in the Japanese market. 
                    Key advantages: exceptional audio quality, numerous official artist videos (本人映像), 
                    and the latest models (LIVE DAM Ai) include voice commands and a high-precision scoring system.
                  </p>
                </div>
              </div>

              {/* Guide for the first visit */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  <Users className="w-5 h-5 inline mr-2 text-purple-600" />
                  Your First Visit to Big Echo: Complete Guide
                </h2>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-purple-600 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      📝 1. At the Reception (Uketsuke - 受付)
                    </h3>
                    <div className="space-y-4">
                      <p className="text-gray-700">
                        The reception is your first point of contact. Look for signs saying 
                        <strong> "フロント" or "受付"</strong>. The staff will ask you some essential questions.
                      </p>
                      
                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">💳 MANDATORY and Recommended Membership</h4>
                        <div className="space-y-2">
                          <p className="text-green-800 text-sm">
                            <strong>Important:</strong> Membership registration is usually <em>mandatory</em> 
                            on your first visit. An ID (passport) will be required.
                          </p>
                          <p className="text-green-800 text-sm">
                            <strong>Advantage:</strong> Registration is free or very cheap, and member discounts 
                            apply <em>immediately</em>! There's no reason to refuse.
                          </p>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-blue-50 p-3 rounded-lg">
                          <h4 className="font-semibold text-blue-900 mb-2">👥 Number of People</h4>
                          <div className="space-y-1 text-sm">
                            <div><strong>1 person:</strong> 一人でお願いします</div>
                            <div><em>Hitori de onegaishimasu</em></div>
                            <div><strong>2 people:</strong> 二人でお願いします</div>
                            <div><em>Futari de onegaishimasu</em></div>
                            <div><strong>3 people:</strong> 三人でお願いします</div>
                            <div><em>San-nin de onegaishimasu</em></div>
                          </div>
                        </div>
                        
                        <div className="bg-purple-50 p-3 rounded-lg">
                          <h4 className="font-semibold text-purple-900 mb-2">⏰ Desired Duration</h4>
                          <div className="space-y-1 text-sm">
                            <div><strong>1 hour:</strong> 一時間お願いします</div>
                            <div><em>Ichi-jikan onegaishimasu</em></div>
                            <div><strong>2 hours:</strong> 二時間お願いします</div>
                            <div><em>Ni-jikan onegaishimasu</em></div>
                            <p className="text-purple-800 mt-2">
                              <strong>Minimum:</strong> 1 hour, billed in 30-min increments
                            </p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-orange-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-900 mb-2">🎫 Important Ticket/Receipt</h4>
                        <p className="text-orange-800 text-sm">
                          After providing this information, you will receive a ticket with your room number, 
                          start time, and end time. <strong>Keep it carefully!</strong> It will be 
                          essential for final payment.
                        </p>
                      </div>

                      <div className="bg-red-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-red-900 mb-2">🥤 "One Drink Order" System - MANDATORY</h4>
                        <div className="space-y-2">
                          <p className="text-red-800 text-sm">
                            <strong>Essential Rule:</strong> Each person MUST order at least 1 drink. 
                            It's not optional; it's a condition to benefit from the displayed rate.
                          </p>
                          <p className="text-red-800 text-sm">
                            This drink will be charged <em>in addition</em> to the room price. 
                            Additional budget to plan: ¥200-500 per person minimum.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-purple-600 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      💰 2. Complete Price and Promotion Breakdown
                    </h3>
                    <div className="space-y-4">
                      <p className="text-gray-700 text-sm">
                        Understanding Big Echo's pricing structure will allow you to optimize your budget 
                        and take advantage of the best available offers.
                      </p>
                      
                      <div className="bg-yellow-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-yellow-900 mb-2">⚠️ Billing System: Key Points</h4>
                        <ul className="space-y-1 text-sm text-yellow-800">
                          <li>• <strong>Billing:</strong> Per person, in 30-minute increments</li>
                          <li>• <strong>Minimum duration:</strong> 1 hour (2 x 30-min increments)</li>
                          <li>• <strong>One Drink Order:</strong> +¥200-500 per person mandatory</li>
                          <li>• <strong>Variable rates:</strong> Depending on day, time, member status</li>
                        </ul>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">📅 Off-Peak vs Peak Hours</h4>
                          <div className="space-y-3 text-sm">
                            <div>
                              <strong className="text-green-700">💚 ADVANTAGEOUS:</strong>
                              <div className="ml-2">
                                <div>• Mon-Thu 11 AM-6 PM: ¥300-500/30min</div>
                                <div>• Weekend mornings: ¥400-600/30min</div>
                                <div>• Happy Hours: ¥350-550/30min</div>
                              </div>
                            </div>
                            <div>
                              <strong className="text-red-700">💸 EXPENSIVE:</strong>
                              <div className="ml-2">
                                <div>• Fri-Sat evening: ¥800-1200/30min</div>
                                <div>• Sunday evening: ¥600-900/30min</div>
                                <div>• Holidays/Festivals: ¥700-1100/30min</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-gray-50 p-4 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-2">🎫 Customer Status and Discounts</h4>
                          <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                              <span>Occasional visitor:</span>
                              <span className="text-red-600">Full price</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Standard member:</span>
                              <span className="text-green-600">-15 to -25%</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Student (学割):</span>
                              <span className="text-blue-600">-20 to -30%</span>
                            </div>
                            <div className="flex justify-between">
                              <span>Senior (60+):</span>
                              <span className="text-purple-600">-15 to -20%</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">🕐 Special Plans: Free Time vs Hourly</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          <div>
                            <p className="font-medium text-blue-800">📊 Smart Calculation:</p>
                            <div className="text-sm text-blue-700 space-y-1">
                              <div>• 1h standard: ¥800-1200</div>
                              <div>• 2h standard: ¥1400-2000</div>
                              <div>• <strong>Free Time 3h: ¥1800-2500</strong></div>
                              <div className="text-green-700 font-medium">
                                → Free Time = Economical from 2h30+!
                              </div>
                            </div>
                          </div>
                          <div>
                            <p className="font-medium text-blue-800">✁ERecommendations:</p>
                            <div className="text-sm text-blue-700 space-y-1">
                              <div>• Short session (1-2h): Hourly</div>
                              <div>• Long session (2h30+): Free Time</div>
                              <div>• Party group: Free Time + Nomihoudai</div>
                              <div>• First try: Hourly to test</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">💡 Concrete Example: Group of 4 People</h4>
                        <div className="space-y-2 text-sm">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                            <div>
                              <p className="font-medium text-green-800">Economical Scenario (Wednesday 3 PM):</p>
                              <div className="text-green-700">
                                <div>• Free Time 3h member: ¥2000 × 4 = ¥8000</div>
                                <div>• One Drink × 4: ¥300 × 4 = ¥1200</div>
                                <div>• <strong>Total: ¥9200 (¥2300/person)</strong></div>
                              </div>
                            </div>
                            <div>
                              <p className="font-medium text-red-800">Expensive Scenario (Saturday 9 PM):</p>
                              <div className="text-red-700">
                                <div>• 3h standard: ¥3600 × 4 = ¥14400</div>
                                <div>• One Drink × 4: ¥400 × 4 = ¥1600</div>
                                <div>• <strong>Total: ¥16000 (¥4000/person)</strong></div>
                              </div>
                            </div>
                          </div>
                          <p className="text-green-800 font-medium text-center mt-2">
                            💰 Difference: ¥6800 - Choosing the right time can halve the bill!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-purple-600 pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      🎮 3. Mastering the Denmoku: Your Control Center
                    </h3>
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold text-blue-900 mb-2">🌍 FIRST PRIORITY: Change the Language</h4>
                      <p className="text-blue-800 text-sm mb-2">
                        <strong>Action N°1:</strong> As soon as you enter the room, grab the Denmoku (touch remote) 
                        and look for the globe 🌍 or flag icon to switch to English, French, or another available language.
                      </p>
                      <p className="text-blue-800 text-sm">
                        This simple action will transform your experience from frustrating to enjoyable! 
                        All functions become instantly understandable.
                      </p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">🔍 Optimized Song Search</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• <strong>Song Search:</strong> General search</li>
                          <li>• <strong>Artist Search:</strong> By artist name</li>
                          <li>• <strong>英数 (Eisu):</strong> Alphabetical sort A-Z</li>
                          <li>• <strong>Genre:</strong> By musical style</li>
                          <li>• <strong>Ranking:</strong> Popular songs</li>
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">🎛️ Essential Audio Controls</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• <strong>Music Volume:</strong> Music Volume</li>
                          <li>• <strong>Mic Volume:</strong> Microphone Volume</li>
                          <li>• <strong>Key Control:</strong> Key Control (+/- for your voice)</li>
                          <li>• <strong>Tempo:</strong> Song Speed</li>
                          <li>• <strong>Echo:</strong> Reverb Effect</li>
                        </ul>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">📋 Practical Functions</h4>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                        <div>
                          <strong>Reservation:</strong> Add songs to your queue
                        </div>
                        <div>
                          <strong>History:</strong> View songs already sung
                        </div>
                        <div>
                          <strong>My List:</strong> Create your favorite playlists
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Advanced Experiences */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  <Award className="w-5 h-5 inline mr-2 text-purple-600" />
                  Advanced Experiences: Big Echo Like an Expert
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-purple-900 mb-3">🎭 Special Concept Rooms</h3>
                    <div className="space-y-4">
                      <div className="border-l-4 border-purple-600 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-2">📽️ Dual Projector Rooms</h4>
                        <p className="text-gray-700 text-sm">
                          Two large screens create a spectacular immersive experience. 
                          The cinematic atmosphere completely transforms the singing experience!
                        </p>
                      </div>
                      
                      <div className="border-l-4 border-pink-600 pl-4">
                        <h4 className="font-semibold text-gray-900 mb-2">👑 Princess & Themed Rooms</h4>
                        <p className="text-gray-700 text-sm">
                          Rooms decorated according to special themes (often in limited collaboration with anime, 
                          movies, or brands). Perfect for special occasions!
                        </p>
                      </div>
                      
                      <div className="bg-orange-100 p-3 rounded-lg">
                        <p className="text-orange-800 text-sm">
                          <strong>💡 Tip:</strong> Ask at the reception which special rooms are available. 
                          Note: they may have time restrictions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">🎉 Party Packages: The Perfect Group Solution</h3>
                    <div className="space-y-3">
                      <p className="text-blue-800 text-sm">
                        The <strong>"Party Courses"</strong> combine fixed singing time (usually 3h) + 
                        food platter + nomihoudai option. An ideal hassle-free solution for groups!
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="bg-white p-3 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-1">Generally Included:</h4>
                          <ul className="text-gray-700 text-sm space-y-1">
                            <li>• 3h of guaranteed karaoke</li>
                            <li>• Appetizer/snack platter</li>
                            <li>• Nomihoudai option +supplement</li>
                            <li>• Uninterrupted service</li>
                          </ul>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-1">Advantages:</h4>
                          <ul className="text-gray-700 text-sm space-y-1">
                            <li>• Fixed price known in advance</li>
                            <li>• No order management</li>
                            <li>• Perfect for birthdays</li>
                            <li>• Guaranteed festive atmosphere</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-900 mb-3">🎤 Hitokara: The Art of Solo Karaoke</h3>
                    <div className="space-y-3">
                      <p className="text-green-800 text-sm">
                        The <strong>"Hitori Karaoke"</strong> (一人カラオケ) or "Hitokara" is perfectly normal in Japan! 
                        Many come alone to practice, relax, or simply enjoy their personal time.
                      </p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div className="bg-white p-3 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-1">Why Try It:</h4>
                          <ul className="text-gray-700 text-sm space-y-1">
                            <li>• Practice without judgment</li>
                            <li>• Relaxation and stress relief</li>
                            <li>• Discovery of new songs</li>
                            <li>• Moment of total freedom</li>
                          </ul>
                        </div>
                        <div className="bg-white p-3 rounded-lg">
                          <h4 className="font-semibold text-gray-900 mb-1">Big Echo Advantages:</h4>
                          <ul className="text-gray-700 text-sm space-y-1">
                            <li>• Special solo rates</li>
                            <li>• Welcoming staff</li>
                            <li>• Rooms adapted for 1 person</li>
                            <li>• No social pressure</li>
                          </ul>
                        </div>
                      </div>
                      
                      <div className="bg-yellow-100 p-3 rounded-lg">
                        <p className="text-yellow-800 text-sm">
                          <strong>💭 For the shy:</strong> Starting with hitokara can be the perfect way 
                          to discover karaoke before trying it with a group!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Glossary of important terms */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  <Info className="w-5 h-5 inline mr-2 text-purple-600" />
                  Glossary of Essential Terms
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div className="border-b border-gray-200 pb-2">
                      <h4 className="font-semibold text-gray-900">受付 (Uketsuke)</h4>
                      <p className="text-gray-600 text-sm">Reception, welcome desk</p>
                    </div>
                    <div className="border-b border-gray-200 pb-2">
                      <h4 className="font-semibold text-gray-900">会員 (Kaiin)</h4>
                      <p className="text-gray-600 text-sm">Member, subscriber</p>
                    </div>
                    <div className="border-b border-gray-200 pb-2">
                      <h4 className="font-semibold text-gray-900">学割 (Gakuwari)</h4>
                      <p className="text-gray-600 text-sm">Student discount</p>
                    </div>
                    <div className="border-b border-gray-200 pb-2">
                      <h4 className="font-semibold text-gray-900">ワンドリンクオーダー制</h4>
                      <p className="text-gray-600 text-sm">Mandatory one-drink minimum system</p>
                    </div>
                    <div className="border-b border-gray-200 pb-2">
                      <h4 className="font-semibold text-gray-900">飲み放題 (Nomihōdai)</h4>
                      <p className="text-gray-600 text-sm">All-you-can-drink</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="border-b border-gray-200 pb-2">
                      <h4 className="font-semibold text-gray-900">フリータイム (Free Time)</h4>
                      <p className="text-gray-600 text-sm">Free time package</p>
                    </div>
                    <div className="border-b border-gray-200 pb-2">
                      <h4 className="font-semibold text-gray-900">延長 (Enchō)</h4>
                      <p className="text-gray-600 text-sm">Extension, prolongation</p>
                    </div>
                    <div className="border-b border-gray-200 pb-2">
                      <h4 className="font-semibold text-gray-900">デンモク (Denmoku)</h4>
                      <p className="text-gray-600 text-sm">Karaoke touch remote</p>
                    </div>
                    <div className="border-b border-gray-200 pb-2">
                      <h4 className="font-semibold text-gray-900">一人カラオケ (Hitori Karaoke)</h4>
                      <p className="text-gray-600 text-sm">Solo karaoke</p>
                    </div>
                    <div className="border-b border-gray-200 pb-2">
                      <h4 className="font-semibold text-gray-900">本人映像 (Honnin Eizō)</h4>
                      <p className="text-gray-600 text-sm">Official artist video</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Orders and detailed service */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  <Utensils className="w-5 h-5 inline mr-2 text-purple-600" />
                  Ordering In Your Room: Complete Guide
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-yellow-900 mb-3">📞 Ordering Methods: No Need to Go Out!</h3>
                    <p className="text-yellow-800 text-sm mb-3">
                      Contrary to what you might think, <strong>you don't need to leave your room</strong> 
                      to order. Everything is done from the comfort of your karaoke box!
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-3 rounded-lg border">
                        <h4 className="font-semibold text-gray-900 mb-2">📞 Wall Phone (Traditional)</h4>
                        <p className="text-gray-700 text-sm mb-2">
                          Most rooms have a wall-mounted phone that connects you directly to the reception.
                        </p>
                        <div className="text-xs text-gray-600">
                          <strong>How to:</strong> Pick up the receiver, wait for a staff member to answer, 
                          then communicate your order.
                        </div>
                      </div>
                      
                      <div className="bg-white p-3 rounded-lg border">
                        <h4 className="font-semibold text-gray-900 mb-2">📱 Tablet/Digital Interface (Modern)</h4>
                        <p className="text-gray-700 text-sm mb-2">
                          Recent establishments use tablets or interfaces on the Denmoku.
                        </p>
                        <div className="text-xs text-gray-600">
                          <strong>Advantage:</strong> Visual interface with product images. 
                          Perfect for non-Japanese speakers!
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">🍹 Detailed Drink and Food Options</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">🥤 À la Carte (Individual)</h4>
                        <div className="space-y-2 text-sm">
                          <div><strong>Drinks:</strong> ¥200-500</div>
                          <div>• Soft drinks, juices, tea</div>
                          <div>• Beer, cocktails, sake</div>
                          <div>• Hot drinks</div>
                          <div><strong>Snacks:</strong> ¥300-800</div>
                          <div>• Fries, edamame</div>
                          <div>• Japanese pizza, onigiri</div>
                        </div>
                      </div>

                      <div className="bg-green-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">🍺 Drink Bar (Self-Service)</h4>
                        <div className="space-y-2 text-sm">
                          <div><strong>Price:</strong> ¥200-400/hour</div>
                          <div><strong>Included:</strong></div>
                          <div>• Unlimited sodas</div>
                          <div>• Various juices</div>
                          <div>• Hot/cold tea</div>
                          <div>• Coffee</div>
                          <div className="text-green-800 font-medium">💡 Very economical!</div>
                        </div>
                      </div>

                      <div className="bg-purple-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-purple-900 mb-2">🍻 Nomihoudai (All-You-Can-Drink)</h4>
                        <div className="space-y-2 text-sm">
                          <div><strong>Standard:</strong> ¥800-1,500/h</div>
                          <div>• Beer, basic cocktails</div>
                          <div>• Sake, shochu</div>
                          <div><strong>Premium:</strong> ¥1,200-2,000/h</div>
                          <div>• High-end alcohols</div>
                          <div>• Sophisticated cocktails</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-gray-900 font-semibold mb-3">🍽️ Complete Food Menu</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Light Snacks (¥300-600)</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• <strong>Fries</strong> (フライドポテト) - Karaoke classic</li>
                          <li>• <strong>Edamame</strong> (枝豆) - Salted soybeans</li>
                          <li>• <strong>Peanuts</strong> and savory snacks</li>
                          <li>• <strong>Onigiri</strong> (おにぎり) - Rice balls</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">More Substantial Dishes (¥600-1,200)</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• <strong>Japanese Pizza</strong> - Unique style</li>
                          <li>• <strong>Yakitori</strong> - Chicken skewers</li>
                          <li>• <strong>Fried Rice</strong> and various noodles</li>
                          <li>• <strong>Japanese Curry</strong> - Comfort food</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h3 className="text-orange-900 font-semibold mb-2">📦 Outside Food and Drink Policy</h3>
                    <div className="space-y-2">
                      <p className="text-orange-800 text-sm">
                        <strong>Varies by location:</strong> Some Big Echo locations allow outside 
                        food/drinks (持込可 - Mochikomi-ka), while others strictly prohibit it.
                      </p>
                      <div className="bg-white p-3 rounded border-l-4 border-orange-500">
                        <p className="text-orange-900 text-sm font-medium">
                          ⚠️ <strong>Mandatory check:</strong> Consult the specific branch's website 
                          or ask at the reception BEFORE making your purchases!
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <h3 className="text-green-900 font-semibold mb-3">🗣️ Useful Phrases for Ordering</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div>
                        <div className="mb-2">
                          <strong>To get attention:</strong><br />
                          <span className="text-gray-700">すみません (Sumimasen)</span><br />
                          <em>"Excuse me"</em>
                        </div>
                        <div>
                          <strong>To order by pointing:</strong><br />
                          <span className="text-gray-700">これをお願いします (Kore o onegaishimasu)</span><br />
                          <em>"This, please"</em>
                        </div>
                      </div>
                      <div>
                        <div className="mb-2">
                          <strong>To ask for the bill:</strong><br />
                          <span className="text-gray-700">お会計お願いします (O-kaikei onegaishimasu)</span><br />
                          <em>"The bill, please"</em>
                        </div>
                        <div>
                          <strong>To say thank you:</strong><br />
                          <span className="text-gray-700">ありがとうございます (Arigatou gozaimasu)</span><br />
                          <em>"Thank you very much"</em>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Session End and Payment */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  <Clock className="w-5 h-5 inline mr-2 text-purple-600" />
                  Session End and Payment: Complete Process
                </h2>
                
                <div className="space-y-6">
                  <div className="border-l-4 border-orange-600 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-3">⏰ The Final Countdown: Automatic Notification</h3>
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <p className="text-orange-800 text-sm mb-2">
                        <strong>10 minutes before the end:</strong> Your room phone will ring automatically. 
                        This is your official signal that time is running out!
                      </p>
                      <p className="text-orange-800 text-sm">
                        The staff will inform you that there's little time left and ask if you wish to extend. 
                        <strong>Don't panic</strong> - it's a standard and friendly procedure.
                      </p>
                    </div>
                  </div>

                  <div className="border-l-4 border-green-600 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-3">⏳ Session Extension (Enchō - 延長)</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-green-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">How to Extend</h4>
                        <div className="space-y-2 text-sm">
                          <div>
                            <strong>Magic phrase:</strong><br />
                            <span className="text-gray-700">延長お願いします</span><br />
                            <em>(Enchō onegaishimasu)</em>
                          </div>
                          <p className="text-green-800">
                            Simply say this phrase when the phone rings, 
                            and the staff will take care of the rest!
                          </p>
                        </div>
                      </div>
                      
                      <div className="bg-green-50 p-3 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">Practical Details</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• Extensions in 30-minute increments</li>
                          <li>• Availability depends on subsequent bookings</li>
                          <li>• Confirmation of the new end time</li>
                          <li>• Automatic adjustment of your bill</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="border-l-4 border-blue-600 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-3">💳 Detailed Payment Process</h3>
                    
                    <div className="bg-blue-50 p-4 rounded-lg mb-4">
                      <h4 className="font-semibold text-blue-900 mb-2">✅ Payment Steps</h4>
                      <div className="space-y-3">
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">1</div>
                          <div>
                            <p className="text-blue-900 font-medium text-sm">Gather Your Things</p>
                            <p className="text-blue-800 text-xs">
                              Pack your belongings and find the ticket/receipt received at reception. 
                              <strong>This ticket is essential!</strong>
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">2</div>
                          <div>
                            <p className="text-blue-900 font-medium text-sm">Return to Reception</p>
                            <p className="text-blue-800 text-xs">
                              Go to reception with your ticket. 
                              Staff will calculate your total bill.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0 mt-0.5">3</div>
                          <div>
                            <p className="text-blue-900 font-medium text-sm">Bill Calculation</p>
                            <p className="text-blue-800 text-xs">
                              Total = Room time + Drinks/food consumed + Any extensions
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-white p-3 rounded-lg border">
                        <h4 className="font-medium text-gray-900 mb-2">💰 Accepted Payment Methods</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• <strong>Cash</strong> (現金) - Always accepted</li>
                          <li>• <strong>Credit cards</strong> - Visa, Mastercard, JCB, Amex</li>
                          <li>• <strong>IC Cards</strong> - Suica, Pasmo (transport)</li>
                          <li>• <strong>QR Codes</strong> - PayPay, Line Pay</li>
                          <li>• <strong>Debit cards</strong> (at some locations)</li>
                        </ul>
                      </div>
                      
                      <div className="bg-white p-3 rounded-lg border">
                        <h4 className="font-medium text-gray-900 mb-2">💡 Payment Tips</h4>
                        <ul className="space-y-1 text-sm text-gray-700">
                          <li>• <strong>Cash recommended</strong> - Always accepted</li>
                          <li>• <strong>Foreign cards</strong> - Generally OK in cities</li>
                          <li>• <strong>Tips</strong> - Not necessary in Japan</li>
                          <li>• <strong>Receipt</strong> - Ask if needed (レシート)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-gray-900 font-semibold mb-3">🗣️ Useful Phrases for Session End</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div>
                        <div className="mb-2">
                          <strong>To finish now:</strong><br />
                          <span className="text-gray-700">終わります (Owarimasu)</span><br />
                          <em>"We are finishing"</em>
                        </div>
                        <div>
                          <strong>To extend:</strong><br />
                          <span className="text-gray-700">延長お願いします (Enchō onegaishimasu)</span><br />
                          <em>"Extension, please"</em>
                        </div>
                      </div>
                      <div>
                        <div className="mb-2">
                          <strong>To ask for the bill:</strong><br />
                          <span className="text-gray-700">お会計お願いします (O-kaikei onegaishimasu)</span><br />
                          <em>"The bill, please"</em>
                        </div>
                        <div>
                          <strong>To pay by card:</strong><br />
                          <span className="text-gray-700">カードで (Kādo de)</span><br />
                          <em>"By card"</em>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Karaoke etiquette and culture */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  <Heart className="w-5 h-5 inline mr-2 text-purple-600" />
                  Karaoke Etiquette: The Golden Rules of Harmony
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-gradient-to-r from-green-50 to-blue-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-green-900 mb-3">👥 Group Harmony: Essential Rules</h3>
                    <div className="space-y-3">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium text-gray-900">🎤 Share the Microphone</p>
                          <p className="text-gray-700 text-sm">
                            Never monopolize! Make sure everyone gets a chance to sing. 
                            This is the golden rule of Japanese karaoke.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium text-gray-900">👏 Be an Excellent Audience</p>
                          <p className="text-gray-700 text-sm">
                            Actively encourage! Applaud, use the free maracas/tambourines, 
                            and create a positive atmosphere for the singer.
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium text-gray-900">🚫 Don't Steal the Spotlight</p>
                          <p className="text-gray-700 text-sm">
                            Don't sing over someone else, unless explicitly invited. 
                            Let everyone have their moment of glory!
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium text-gray-900">🔄 Avoid Immediate Repetitions</p>
                          <p className="text-gray-700 text-sm">
                            If someone just sang a song, wait before singing it again. 
                            Vary styles and artists!
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                        <div>
                          <p className="font-medium text-gray-900">🎵 Choose for the Group</p>
                          <p className="text-gray-700 text-sm">
                            Alternate between your personal tastes and songs everyone knows. 
                            Popular hits create a great atmosphere!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-red-900 mb-3">⚠️ House Rules: Must Be Respected</h3>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-red-600">⚠️</span>
                        <span className="text-gray-700 text-sm">
                          <strong>Equipment:</strong> Handle with care, no damage
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-red-600">🚭</span>
                        <span className="text-gray-700 text-sm">
                          <strong>Tobacco:</strong> Prohibited in non-smoking rooms (even e-cigarettes)
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-red-600">👀</span>
                        <span className="text-gray-700 text-sm">
                          <strong>Privacy:</strong> Do not look into other rooms, do not invite yourself in
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-red-600">🕐</span>
                        <span className="text-gray-700 text-sm">
                          <strong>Minors:</strong> Restrictions after 10 PM-11 PM for those under 18
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-red-600">🐕</span>
                        <span className="text-gray-700 text-sm">
                          <strong>Animals:</strong> No pets allowed
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Guide for English speakers */}
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  <TrendingUp className="w-5 h-5 inline mr-2 text-purple-600" />
                  English Speaker's Guide: Find Your Repertoire!
                </h2>
                
                <div className="space-y-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-blue-900 mb-3">🇫🇷 French Music: Reality and Tips</h3>
                    <div className="space-y-3">
                      <p className="text-blue-800 text-sm">
                        <strong>Let's be honest:</strong> The DAM catalog contains few French songs compared 
                        to English and Japanese music. But don't despair!
                      </p>
                      
                      <div className="bg-white p-3 rounded-lg">
                        <h4 className="font-semibold text-gray-900 mb-2">✅ What you'll probably find:</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                          <div>
                            <p className="font-medium">Classics:</p>
                            <ul className="text-gray-700 space-y-1">
                              <li>• Édith Piaf</li>
                              <li>• Jacques Brel</li>
                              <li>• Serge Gainsbourg</li>
                              <li>• Charles Aznavour</li>
                            </ul>
                          </div>
                          <div>
                            <p className="font-medium">Modern:</p>
                            <ul className="text-gray-700 space-y-1">
                              <li>• Daft Punk</li>
                              <li>• Stromae</li>
                              <li>• Christine and the Queens</li>
                              <li>• Mylène Farmer</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-yellow-100 p-3 rounded-lg">
                        <p className="text-yellow-800 text-sm">
                          <strong>Pro Tip:</strong> Check the catalog on clubdam.com before your visit 
                          to prepare your list of available French songs!
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-purple-900 mb-3">🎌 Try J-Pop with Rōmaji Rubi!</h3>
                    <div className="space-y-3">
                      <p className="text-purple-800 text-sm">
                        <strong>Magic Function:</strong> The "ローマ字ルビ" (rōmaji rubi) display the Latin phonetics 
                        of Japanese lyrics, allowing you to sing in Japanese!
                      </p>
                      
                      <div className="bg-white p-3 rounded-lg border-l-4 border-orange-500">
                        <h4 className="font-semibold text-orange-900 mb-2">⚠️ Important Limitation</h4>
                        <p className="text-orange-800 text-sm">
                          Warning: This function usually only appears on the Denmoku screen, 
                          not on the big TV screen. Use it as a "training tool" or memory aid!
                        </p>
                      </div>
                      
                      <div className="bg-green-100 p-3 rounded-lg">
                        <h4 className="font-semibold text-green-900 mb-2">💡 Recommended Strategy</h4>
                        <p className="text-green-800 text-sm">
                          Start with simple and repetitive J-Pop songs. Anime and drama theme songs 
                          are perfect for beginners! Your Japanese friends will be impressed.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">🌍 International Music: Your Comfort Zone</h3>
                    <p className="text-gray-700 text-sm mb-3">
                      The English catalog is huge! Pop, rock, R&B, classics... You'll be spoiled for choice.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-sm">
                      <div>
                        <p className="font-medium text-gray-900">Safe Choices:</p>
                        <ul className="text-gray-700 space-y-1">
                          <li>• The Beatles</li>
                          <li>• Queen</li>
                          <li>• ABBA</li>
                          <li>• Michael Jackson</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Modern Pop:</p>
                        <ul className="text-gray-700 space-y-1">
                          <li>• Taylor Swift</li>
                          <li>• Ed Sheeran</li>
                          <li>• Adele</li>
                          <li>• Bruno Mars</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Group Vibes:</p>
                        <ul className="text-gray-700 space-y-1">
                          <li>• Don't Stop Me Now</li>
                          <li>• Sweet Caroline</li>
                          <li>• Bohemian Rhapsody</li>
                          <li>• I Will Survive</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Practical Information */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  <Info className="w-5 h-5 inline mr-2 text-purple-600" />
                  Practical Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">🕒 Hours</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>Mon-Thu: 11 AM-2 AM</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>Fri-Sat: 11 AM-5 AM</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>Sunday: 11 AM-12 AM</span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">💳 Payment Methods</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div>• Cash (recommended)</div>
                      <div>• Major credit cards</div>
                      <div>• IC Cards (Suica, Pasmo)</div>
                      <div>• Mobile payments (PayPay, Line Pay)</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">📍 Location</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div>• Main city centers</div>
                      <div>• Entertainment districts</div>
                      <div>• Near major train stations</div>
                      <div>• Shopping malls</div>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">ℹ️ Good to Know</h4>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div>• Reservation recommended in the evening</div>
                      <div>• Minimum 2 people generally</div>
                      <div>• Non-smoking policy in most establishments</div>
                      <div>• Free Wi-Fi available</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Highlights */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">✨ Why Choose Big Echo</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Largest Network in Japan</p>
                      <p className="text-xs text-gray-600">400+ establishments guarantee quality and accessibility</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Premium DAM System</p>
                      <p className="text-xs text-gray-600">Exceptional audio quality and 300K+ songs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">International Welcome</p>
                      <p className="text-xs text-gray-600">Multilingual interfaces and staff accustomed to tourists</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Options for Everyone</p>
                      <p className="text-xs text-gray-600">From solo hitokara to group party courses</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">Authentic Culture</p>
                      <p className="text-xs text-gray-600">Japanese karaoke experience in its essence</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Detailed Services */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">🎵 Services</h3>
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Music className="w-4 h-4 mr-3 text-purple-600 flex-shrink-0" />
                    <span>Private karaoke box</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Gamepad2 className="w-4 h-4 mr-3 text-purple-600 flex-shrink-0" />
                    <span>Modern equipment</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Users className="w-4 h-4 mr-3 text-purple-600 flex-shrink-0" />
                    <span>Rooms for 2 to 20 people</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Utensils className="w-4 h-4 mr-3 text-purple-600 flex-shrink-0" />
                    <span>Food service</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Heart className="w-4 h-4 mr-3 text-purple-600 flex-shrink-0" />
                    <span>All-you-can-drink packages</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Star className="w-4 h-4 mr-3 text-purple-600 flex-shrink-0" />
                    <span>Scoring system</span>
                  </div>
                </div>
              </div>

              {/* Statistics */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">📊 In Numbers</h3>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">400+</div>
                    <div className="text-xs text-gray-600">Establishments</div>
                  </div>
                  <hr className="border-gray-200" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">300K+</div>
                    <div className="text-xs text-gray-600">Songs available</div>
                  </div>
                  <hr className="border-gray-200" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">30+</div>
                    <div className="text-xs text-gray-600">Years of experience</div>
                  </div>
                  <hr className="border-gray-200" />
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">24h</div>
                    <div className="text-xs text-gray-600">Open continuously (some)</div>
                  </div>
                </div>
              </div>

              {/* Expert Tips */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">💡 Expert Tips</h3>
                <div className="space-y-3 text-sm">
                  <div className="bg-green-50 p-3 rounded-lg">
                    <p className="text-green-800 font-medium">🕐 Optimal Timing</p>
                    <p className="text-green-700 text-xs">Morning and early afternoon for the best prices. Avoid Friday-Saturday evenings to save money.</p>
                  </div>
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-blue-800 font-medium">🎫 Strategic Reservations</p>
                    <p className="text-blue-700 text-xs">Book in advance on weekends. Become a member on your first visit to save immediately.</p>
                  </div>
                  <div className="bg-yellow-50 p-3 rounded-lg">
                    <p className="text-yellow-800 font-medium">💰 Budget Optimization</p>
                    <p className="text-yellow-700 text-xs">Nomihoudai is cost-effective from 2-3 drinks. Free Time is economical for 2h+ sessions.</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg">
                    <p className="text-purple-800 font-medium">🎵 Cultural Preparation</p>
                    <p className="text-purple-700 text-xs">Consult clubdam.com before your visit to prepare your French playlist and discover J-Pop.</p>
                  </div>
                </div>
              </div>

              {/* Category */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">🏷️ Category</h3>
                <Link 
                  href="/type-plat/karaoke"
                  className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
                >
                  <Music className="w-4 h-4 mr-2" />
                  Karaoke
                  <ArrowLeft className="w-4 h-4 ml-2 rotate-180" />
                </Link>
                <div className="mt-3 text-xs text-gray-500">
                  Discover other popular karaoke chains in Japan
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}