import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Leaf } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Ganso Aburado 元祖油堂 | Healthy Abura Soba | Japonchaines',
  description: 'Innovative abura soba: hybrid noodles, healthy concept, free oolong tea.',
  keywords: [
    'ganso aburado', '元祖油堂', 'abura soba', '油そば',
    'hybrid noodles', 'modern innovation', 'healthy tea',
    'modern design', 'pasta noodles', 'healthy concept'
  ],
  openGraph: {
    title: 'Ganso Aburado: Healthy and Innovative Abura Soba | Japonchaines',
    description: 'Discover Ganso Aburado and its unique hybrid noodles (wheat and pasta). A modern and healthy abura soba concept.',
    type: 'article',
    url: '/chains/ganso-aburado',
  },
  alternates: {
    canonical: '/chains/ganso-aburado',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function GansoAburadoPage() {
  return (
    <>
      <ChainViewTracker chainName="ganso-aburado" chainCategory="aburasoba" />
      <div className="min-h-screen bg-gray-50">
        {/* Header avec retour */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <Link 
              href="/type-plat/aburasoba" 
              className="inline-flex items-center text-orange-600 hover:text-orange-700 mb-4"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Abura Soba
            </Link>
            
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl font-bold">堂</span>
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Ganso Aburado</h1>
                <p className="text-lg text-gray-600">元祖油堂 | がんそあぶらどう</p>
                <p className="text-sm text-gray-500">Modern innovation of abura soba</p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contenu principal */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Présentation générale */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Avant-Garde of Abura Soba</h2>
                <div className="prose prose-orange max-w-none">
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Ganso Aburado represents <strong>the modern evolution of abura soba</strong>, 
                    founded in 2012 with a revolutionary mission: to reinvent brothless noodles 
                    for the contemporary era. A pioneer of <strong>nutritional innovation</strong>, 
                    this chain combines culinary tradition with health consciousness.
                  </p>
                  <p className="text-gray-700">
                    With its <strong>unique hybrid noodles</strong> (a blend of wheat and pasta flour), 
                    its <strong>modern interior design</strong> and its concept of <strong>free healthy tea</strong>, 
                    Ganso Aburado attracts an urban clientele concerned with well-being and culinary innovation.
                  </p>
                </div>
              </div>

              {/* Histoire et innovation */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <History className="w-6 h-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Nutritional Revolution</h2>
                </div>
                
                <div className="space-y-6">
                  {/* Genèse */}
                  <div className="border-l-4 border-indigo-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">2012: Wellness Vision</h3>
                    <p className="text-gray-700">
                      Ganso Aburado was born from a simple observation: <strong>why couldn't abura soba be 
                      even healthier?</strong> The founders developed a revolutionary concept combining 
                      culinary pleasure and nutritional well-being.
                    </p>
                  </div>

                  {/* Innovation nouilles */}
                  <div className="border-l-4 border-purple-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Hybrid Noodle Revolution</h3>
                    <p className="text-gray-700">
                      The flagship innovation: <strong>unique noodles blending traditional wheat flour 
                      and durum pasta flour</strong>. This combination creates an unprecedented texture, 
                      firmer and more nutritious, with a subtle taste reminiscent of the best Italian pasta.
                    </p>
                  </div>

                  {/* Concept santé */}
                  <div className="border-l-4 border-green-500 pl-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Integrated Health Ecosystem</h3>
                    <p className="text-gray-700">
                      Beyond noodles, Ganso Aburado developed a <strong>complete wellness ecosystem</strong>: 
                      free black oolong tea (rich in antioxidants), soothing zen design, and optimized 
                      portions for nutritional balance.
                    </p>
                  </div>
                </div>
              </div>

              {/* Menu signature */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <Utensils className="w-6 h-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Innovative Menu</h2>
                </div>
                
                <div className="space-y-6">
                  {/* Abura Soba Signature */}
                  <div className="border border-indigo-200 rounded-lg p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900">Signature Abura Soba</h3>
                        <p className="text-gray-600 japanese-text">元祖油そば</p>
                      </div>
                      <span className="text-2xl font-bold text-indigo-600">¥880</span>
                    </div>
                    <p className="text-gray-700 mb-3">
                      Abura soba reinvented with exclusive hybrid noodles. Unique semi-Asian, semi-Italian texture, 
                      balanced, less salty tare, high-quality oil, and fresh vegetables for a modern culinary experience.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div><strong>Portions:</strong>並盛/大盛/特大盛 (same price)</div>
                      <div><strong>Innovation:</strong> Unique hybrid noodles</div>
                      <div><strong>Health:</strong> Less sodium, more fiber</div>
                      <div><strong>Bonus:</strong> Free black oolong tea</div>
                    </div>
                  </div>

                  {/* Options wellness */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="border border-green-200 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <Leaf className="w-4 h-4 text-green-600 mr-2" />
                        <h4 className="font-bold text-gray-900">Vegetarian Option</h4>
                      </div>
                      <p className="text-gray-600 text-sm mb-2">ベジタブル油そば - ¥880</p>
                      <p className="text-gray-700 text-sm">
                        Animal-product-free version with vegan tare and various organic vegetables.
                      </p>
                    </div>
                    
                    <div className="border border-blue-200 rounded-lg p-4">
                      <h4 className="font-bold text-gray-900 mb-2">Premium Healthy Tea</h4>
                      <p className="text-gray-600 text-sm mb-2">黒烏龍茶 - Free!</p>
                      <p className="text-gray-700 text-sm">
                        Black oolong tea rich in polyphenols, aids digestion and fat metabolism.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Expérience unique */}
              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <Award className="w-6 h-6 text-orange-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">The Ganso Aburado Experience</h2>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="font-bold text-indigo-800 mb-2">🏮 Modern Ambiance</h3>
                    <p className="text-gray-700 text-sm">
                      Contemporary interior design with warm lighting, discreet lounge music, 
                      and an atmosphere that invites relaxation. A striking contrast to traditional 
                      abura soba establishments.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="font-bold text-indigo-800 mb-2">🍵 Tea Ritual</h3>
                    <p className="text-gray-700 text-sm">
                      Every meal begins with the serving of <strong>free hot black oolong tea</strong>, 
                      preparing the palate and aiding digestion. A gesture of hospitality that transforms 
                      fast food into a zen moment.
                    </p>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 shadow-sm">
                    <h3 className="font-bold text-indigo-800 mb-2">🍜 Hybrid Technique</h3>
                    <p className="text-gray-700 text-sm">
                      Hybrid noodles require a slightly different mixing technique: 
                      <strong>more delicate movements</strong> to preserve their unique texture 
                      and reveal the full complexity of their flavor.
                    </p>
                  </div>
                </div>
              </div>

              {/* Aspect santé */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center mb-4">
                  <Leaf className="w-6 h-6 text-green-600 mr-3" />
                  <h2 className="text-2xl font-bold text-gray-900">Wellness Philosophy</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Nutritional Benefits</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• <strong>Enriched fibers:</strong> Hybrid noodles richer in fiber</li>
                      <li>• <strong>Reduced sodium:</strong> Less salty tare, preserved taste</li>
                      <li>• <strong>Antioxidants:</strong> Black oolong tea with polyphenols</li>
                      <li>• <strong>Digestion:</strong> Selected ingredients for digestibility</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Environmental Impact</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• <strong>Responsible sourcing:</strong> Prioritized local ingredients</li>
                      <li>• <strong>Eco-friendly packaging:</strong> Recyclable materials</li>
                      <li>• <strong>Reduced waste:</strong> Optimized portions</li>
                      <li>• <strong>Energy:</strong> Low-consumption equipment</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar avec infos pratiques */}
            <div className="space-y-6">
              {/* Informations essentielles */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Practical Information</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Typical Hours</h4>
                      <p className="text-sm text-gray-600">11:00 AM - 10:30 PM (varies by store)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <CreditCard className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Average Price</h4>
                      <p className="text-sm text-gray-600">¥880-1080 (all sizes)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-orange-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Presence</h4>
                      <p className="text-sm text-gray-600">Tokyo, Osaka, urban centers</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Points forts */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Highlights</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-gray-700">Innovative hybrid noodles</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-gray-700">Free healthy tea</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-gray-700">Soothing modern design</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-gray-700">Vegetarian options</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-4 h-4 text-yellow-500" />
                    <span className="text-sm text-gray-700">Integrated wellness approach</span>
                  </div>
                </div>
              </div>

              {/* Conseils voyage */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-blue-800 mb-4">💡 Travel Tips</h3>
                <div className="space-y-3 text-sm text-blue-700">
                  <p><strong>First time:</strong> Taste the noodles alone first to appreciate the unique texture.</p>
                  <p><strong>Tea included:</strong> Enjoy the free oolong tea - it's a real health bonus!</p>
                  <p><strong>Ambiance:</strong> Perfect for a relaxed meal, less "rush" than traditional chains.</p>
                  <p><strong>Vegetarians:</strong> Vegan options available - rare in abura soba!</p>
                </div>
              </div>

              {/* Comparaison */}
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6">
                <h3 className="text-lg font-bold text-amber-800 mb-4">🔄 VS Tokyo Abura-gumi</h3>
                <div className="space-y-3 text-sm text-amber-700">
                  <p><strong>Style:</strong> Modern & healthy vs Traditional & authentic</p>
                  <p><strong>Noodles:</strong> Innovative hybrid vs Traditional wheat</p>
                  <p><strong>Ambiance:</strong> Zen design vs Classic functional</p>
                  <p><strong>Audience:</strong> Health-conscious urbanites vs Traditional purists</p>
                </div>
              </div>

              {/* Localisation Tokyo */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">Recommended Tokyo Stores</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-indigo-500 pl-3">
                    <h4 className="font-semibold text-gray-900">Akasaka</h4>
                    <p className="text-sm text-gray-600">赤坂店</p>
                    <p className="text-xs text-gray-500">1 min from Akasaka station</p>
                  </div>
                  <div className="border-l-4 border-purple-500 pl-3">
                    <h4 className="font-semibold text-gray-900">Tamachi</h4>
                    <p className="text-sm text-gray-600">田町店</p>
                    <p className="text-xs text-gray-500">1 min from Tamachi station</p>
                  </div>
                  <div className="border-l-4 border-blue-500 pl-3">
                    <h4 className="font-semibold text-gray-900">Kamiyacho</h4>
                    <p className="text-sm text-gray-600">神谷町店</p>
                    <p className="text-xs text-gray-500">2 min from Kamiyacho station</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation vers autres chaînes */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Discover other Abura Soba chains</h3>
            <div className="flex flex-wrap gap-4">
              <Link 
                href="/chaines/tokyo-abura-gumi"
                className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-amber-600 hover:to-orange-600 transition-all"
              >
                Tokyo Abura-gumi →
              </Link>
              <Link 
                href="/type-plat/aburasoba"
                className="border-2 border-indigo-500 text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-500 hover:text-white transition-all"
              >
                Complete Abura Soba Guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
