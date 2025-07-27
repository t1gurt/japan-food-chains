import Link from "next/link";
import ChainViewTracker from "@/components/ChainViewTracker";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Doutor Coffee : Le Cafﾃｩ Self-Service Japonais | Japan Food Chains',
  description: 'Dﾃｩcouvrez Doutor, le pionnier du cafﾃｩ self-service au Japon. Menu, prix, et l\'art du cafﾃｩ rapide et abordable pour une pause ﾃ la japonaise.',
  keywords: 'doutor coffee, cafﾃｩ japonais, self-service cafﾃｩ, kissaten moderne, cafﾃｩ rapide japon, petit dﾃｩjeuner japonais',
  openGraph: {
    title: 'Doutor Coffee : Le Cafﾃｩ Self-Service Japonais | Japan Food Chains',
    description: 'Dﾃｩcouvrez Doutor, le pionnier du cafﾃｩ self-service au Japon. Menu, prix, et l\'art du cafﾃｩ rapide et abordable pour une pause ﾃ la japonaise.',
    type: 'article',
    locale: 'fr_FR',
    siteName: 'Japan Food Chains - Guide des Restaurants Japonais'
  },
  alternates: {
    canonical: '/chaines/doutor'
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function DoutorPage() {
  return (
    <>
      <ChainViewTracker chainName="doutor" chainCategory="cafe" />
      
      <div className="min-h-screen bg-gray-50">
        {/* Breadcrumb */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <nav className="text-sm">
              <Link href="/" className="text-gray-500 hover:text-purple-600">Accueil</Link>
              <span className="text-gray-400 mx-2">/</span>
              <Link href="/dish-types/cafe" className="text-gray-500 hover:text-purple-600">Cafﾃｩ</Link>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-purple-600 font-medium">Doutor Coffee</span>
            </nav>
          </div>
        </div>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-800 via-green-700 to-emerald-600 text-white py-20">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="flex items-center justify-center mb-8">
              <span className="text-6xl mr-4">笘・/span>
              <span className="text-6xl mr-4">純窶坂凾・・/span>
              <span className="text-6xl">笞｡</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Doutor Coffee
            </h1>
            <p className="text-2xl mb-4 text-green-100 japanese-text">繝峨ヨ繝ｼ繝ｫ繧ｳ繝ｼ繝偵・</p>
            <p className="text-xl mb-8 text-green-100">
              Le Pionnier du Cafﾃｩ Express Japonais - Rﾃｩvolution du Self-Service
            </p>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
              <h2 className="text-2xl font-bold mb-4">L'Innovation Cafﾃｩ Japonaise</h2>
              <p className="text-lg text-green-200">
                Depuis 1980, Doutor rﾃｩvolutionne la culture cafﾃｩ japonaise en introduisant 
                le concept de cafﾃｩ rapide et abordable, transformant la pause cafﾃｩ 
                en expﾃｩrience accessible au rythme effrﾃｩnﾃｩ de la vie urbaine.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold">
                Pionnier 1980
              </span>
              <span className="bg-emerald-100 text-emerald-800 px-4 py-2 rounded-full font-semibold">
                Self-Service Rapide
              </span>
              <span className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full font-semibold">
                Prix Accessibles
              </span>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Histoire & Innovation */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                醇 Rﾃｩvolution du Cafﾃｩ Express
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">笘・Naissance de l'Innovation (1980)</h3>
                  <p className="text-gray-700 mb-4">
                    Doutor Coffee naﾃｮt en 1980 avec une vision rﾃｩvolutionnaire : 
                    dﾃｩmocratiser le cafﾃｩ de qualitﾃｩ en crﾃｩant le premier systﾃｨme 
                    de cafﾃｩ self-service au Japon, brisant les codes du service traditionnel.
                  </p>
                  <p className="text-gray-700">
                    Le fondateur Hiromichi Toriba s'inspire des coffee shops amﾃｩricains 
                    pour crﾃｩer un concept hybride unique : qualitﾃｩ japonaise + 
                    efficacitﾃｩ moderne + prix accessibles.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">噫 Impact Culturel</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Rﾃｩvolution :</strong> Doutor transforme la perception du cafﾃｩ au Japon, 
                    le rendant accessible aux masses et introduisant la culture du 
                    "cafﾃｩ nomade" dans l'archipel.
                  </p>
                  <ul className="text-gray-700 space-y-1">
                    <li>窶｢ <strong>Dﾃｩmocratisation :</strong> Cafﾃｩ de qualitﾃｩ pour tous</li>
                    <li>窶｢ <strong>Rapiditﾃｩ :</strong> Service express adaptﾃｩ au rythme urbain</li>
                    <li>窶｢ <strong>Accessibilitﾃｩ :</strong> Prix abordables sans compromis</li>
                    <li>窶｢ <strong>Modernitﾃｩ :</strong> Ambiance contemporaine dﾃｩcontractﾃｩe</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Menu & Spﾃｩcialitﾃｩs */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                笘・L'Art du Cafﾃｩ Express Doutor
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                {/* Cafﾃｩ Signature */}
                <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">笘・Cafﾃｩ Premium</h3>
                  <p className="text-gray-600 japanese-text mb-2">繝励Ξ繝溘い繝繝悶Ξ繝ｳ繝・/p>
                  <p className="text-2xl font-bold text-green-600 mb-3">250ﾂ･-380ﾂ･</p>
                  <p className="text-gray-700 mb-4">
                    Blend exclusif Doutor, torrﾃｩfaction soignﾃｩe, extraction rapide 
                    mais parfaite. Qualitﾃｩ constante ﾃ prix dﾃｩmocratique.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Blend Original :</span>
                      <span className="text-sm font-semibold">250ﾂ･</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Cafﾃｩ Glacﾃｩ :</span>
                      <span className="text-sm font-semibold">280ﾂ･</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Espresso :</span>
                      <span className="text-sm font-semibold">220ﾂ･</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Cafﾃｩ au Lait :</span>
                      <span className="text-sm font-semibold">320ﾂ･</span>
                    </div>
                  </div>
                </div>

                {/* Sandwichs & Fast Food */}
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 border border-emerald-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">･ｪ Repas Express</h3>
                  <p className="text-gray-600 japanese-text mb-2">繧ｵ繝ｳ繝峨う繝・メ繝ｻ霆ｽ鬟・/p>
                  <p className="text-2xl font-bold text-emerald-600 mb-3">380ﾂ･-580ﾂ･</p>
                  <p className="text-gray-700 mb-4">
                    Sandwichs fraﾃｮchement prﾃｩparﾃｩs, hot-dogs, pﾃ｢tisseries. 
                    Parfait pour un repas rapide et savoureux en dﾃｩplacement.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Sandwich Jambon :</span>
                      <span className="text-sm font-semibold">380ﾂ･</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Hot Dog :</span>
                      <span className="text-sm font-semibold">420ﾂ･</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Croissant :</span>
                      <span className="text-sm font-semibold">280ﾂ･</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Set Cafﾃｩ+Sandwich :</span>
                      <span className="text-sm font-semibold">580ﾂ･</span>
                    </div>
                  </div>
                </div>

                {/* Boissons Variﾃｩes */}
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl p-6 border border-teal-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">･､ Boissons Modernes</h3>
                  <p className="text-gray-600 japanese-text mb-2">繝｢繝繝ｳ繝峨Μ繝ｳ繧ｯ</p>
                  <p className="text-2xl font-bold text-teal-600 mb-3">280ﾂ･-450ﾂ･</p>
                  <p className="text-gray-700 mb-4">
                    Large sﾃｩlection de thﾃｩs, smoothies, boissons glacﾃｩes. 
                    Innovation constante pour suivre les tendances contemporaines.
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Thﾃｩ Royal Milk :</span>
                      <span className="text-sm font-semibold">320ﾂ･</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Smoothie Fruits :</span>
                      <span className="text-sm font-semibold">420ﾂ･</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Thﾃｩ Glacﾃｩ :</span>
                      <span className="text-sm font-semibold">280ﾂ･</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">Latte Saisonnier :</span>
                      <span className="text-sm font-semibold">450ﾂ･</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Menu Sets */}
              <div className="mt-8 bg-gray-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4">鎖・・Sets Express Doutor</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Sets Matinaux :</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>窶｢ <strong>Morning Set A (繝｢繝ｼ繝九Φ繧ｰ繧ｻ繝・ヨA)</strong> - 480ﾂ･ - Cafﾃｩ + toast + ﾅ砥f</li>
                      <li>窶｢ <strong>Morning Set B (繝｢繝ｼ繝九Φ繧ｰ繧ｻ繝・ヨB)</strong> - 520ﾂ･ - Cafﾃｩ + croissant + salade</li>
                      <li>窶｢ <strong>Business Morning</strong> - 580ﾂ･ - Cafﾃｩ + sandwich + journal</li>
                      <li>窶｢ <strong>Express Morning</strong> - 380ﾂ･ - Cafﾃｩ + pain au chocolat</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-2">Sets Dﾃｩjeuner :</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      <li>窶｢ <strong>Lunch Set (繝ｩ繝ｳ繝√そ繝・ヨ)</strong> - 680ﾂ･ - Sandwich + cafﾃｩ + dessert</li>
                      <li>窶｢ <strong>Quick Lunch</strong> - 580ﾂ･ - Hot dog + boisson + chips</li>
                      <li>窶｢ <strong>Salad Set</strong> - 620ﾂ･ - Salade + cafﾃｩ + petit pain</li>
                      <li>窶｢ <strong>Business Lunch</strong> - 750ﾂ･ - Repas complet express</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Expﾃｩrience Self-Service */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                純窶坂凾・・L'Expﾃｩrience Self-Service Rﾃｩvolutionnaire
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">笞｡ Rapiditﾃｩ Optimisﾃｩe</h3>
                  <p className="text-gray-700 mb-4">
                    Systﾃｨme perfectionnﾃｩ : commande au comptoir, service immﾃｩdiat, 
                    rotation rapide. Idﾃｩal pour les salarymen pressﾃｩs.
                  </p>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>窶｢ <strong>Commande :</strong> 30 secondes maximum</li>
                    <li>窶｢ <strong>Prﾃｩparation :</strong> 2-3 minutes</li>
                    <li>窶｢ <strong>Service :</strong> Plateau self-service</li>
                    <li>窶｢ <strong>Efficacitﾃｩ :</strong> File fluide garantie</li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">腸 Accessibilitﾃｩ Prix</h3>
                  <p className="text-gray-700 mb-4">
                    Philosophie dﾃｩmocratique : qualitﾃｩ sans premium price. 
                    Cafﾃｩ quotidien abordable pour tous les budgets urbains.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Cafﾃｩ simple :</span>
                      <span className="font-semibold">250ﾂ･</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Set complet :</span>
                      <span className="font-semibold">580ﾂ･</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Budget moyen :</span>
                      <span className="font-semibold">400ﾂ･</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Compﾃｩtitif vs :</span>
                      <span className="font-semibold">Starbucks</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">識 Clientﾃｨle Urbaine</h3>
                  <p className="text-gray-700 mb-4">
                    Espace adaptﾃｩ au rythme japonais : lecture rapide, pause efficace, 
                    rencontres informelles. Atmosphﾃｨre dﾃｩcontractﾃｩe mais dynamique.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-green-600 mr-2">笨・/span>
                      <span>Wifi gratuit rapide</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-600 mr-2">笨・/span>
                      <span>Tables individuelles</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-600 mr-2">笨・/span>
                      <span>Ambiance moderne</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-600 mr-2">笨・/span>
                      <span>Journaux gratuits</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Self-Service Guide */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                識 Doutor Self-Service Guide
              </h2>
              
              <div className="bg-green-50 rounded-xl p-8 border border-green-200">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-green-800 mb-4">搭 Step-by-Step Procedure</h3>
                    <div className="space-y-3">
                      <div className="flex items-start">
                        <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">1</span>
                        <div>
                          <p className="font-semibold text-gray-800">Check the displayed menu</p>
                          <p className="text-sm text-gray-600">Clear panels with photos and prices</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">2</span>
                        <div>
                          <p className="font-semibold text-gray-800">Order at the counter</p>
                          <p className="text-sm text-gray-600">Multilingual staff in tourist centers</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">3</span>
                        <div>
                          <p className="font-semibold text-gray-800">Pay (cash/card)</p>
                          <p className="text-sm text-gray-600">International cards accepted</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <span className="w-8 h-8 bg-green-500 text-white rounded-full flex items-center justify-center mr-3 text-sm font-bold">4</span>
                        <div>
                          <p className="font-semibold text-gray-800">Pick up your order</p>
                          <p className="text-sm text-gray-600">Tray + number or name called</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-green-800 mb-4">庁 Tips for Optimal Experience</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">笘・/span>
                        <span><strong>Optimal hours:</strong> 7 AM-9 AM to avoid morning rush</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">腸</span>
                        <span><strong>Best value:</strong> Morning sets, complete breakfast</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">純窶坂凾・・/span>
                        <span><strong>Express mode:</strong> Simple order, coffee + croissant</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-600 mr-2">導</span>
                        <span><strong>Modern:</strong> Loyalty points, mobile app available</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Dietary Regimes */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                ･・Dietary Regimes & Options
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                  <h3 className="text-lg font-bold text-green-800 mb-4">笨・Vegetarian</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Possible options</strong>: Several vegetarian choices 
                    available, including drinks, pastries, and some sandwiches.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">笨・/span>
                      <span>All coffees and teas</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">笨・/span>
                      <span>Meat-free pastries</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">笨・/span>
                      <span>Vegetable sandwiches</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-2">笞・・/span>
                      <span>Check bread (butter/milk)</span>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="text-lg font-bold text-blue-800 mb-4">盛 Pork-Free/Halal</h3>
                  <p className="text-gray-700 mb-4">
                    <strong>Generally OK</strong>: Most options 
                    do not contain pork. Unofficial halal certification.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">笨・/span>
                      <span>Coffees, teas, desserts</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">笨・/span>
                      <span>Most sandwiches</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-2">笞・・/span>
                      <span>Ham sandwich (check)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-yellow-500 mr-2">笞・・/span>
                      <span>Ask staff for ingredients</span>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 rounded-xl p-6 border border-orange-200">
                  <h3 className="text-lg font-bold text-orange-800 mb-4">笞・・Allergies</h3>
                  <p className="text-gray-700 mb-4">
                    Allergen information available upon request. 
                    Staff trained to provide information on main ingredients.
                  </p>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">笞・・/span>
                      <span>Gluten (bread, pastries)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">笞・・/span>
                      <span>Milk (latte, desserts)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-orange-500 mr-2">笞・・/span>
                      <span>Eggs (some pastries)</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-green-500 mr-2">笨・/span>
                      <span>Staff can inform</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Express Business Culture */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                直 Doutor and the Express Business Culture
              </h2>
              
              <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">召 Salaryman Revolution</h3>
                    <p className="text-gray-700 mb-4">
                      Doutor transforms the coffee break for Japanese salarymen: 
                      out with long rituals, in with efficiency without compromising 
                      quality. An innovation that meets the fast pace of urban life.
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>窶｢ <strong>Speed:</strong> Adapted to tight schedules</li>
                      <li>窶｢ <strong>Economy:</strong> Reasonable daily budget</li>
                      <li>窶｢ <strong>Flexibility:</strong> Takeaway or eat-in</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">検 Social Impact</h3>
                    <p className="text-gray-700 mb-4">
                      Beyond coffee, Doutor democratizes access to quality time: 
                      morning break, informal meetings, transition between subway and office. 
                      A new way to experience the city.
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>窶｢ <strong>Democratization:</strong> Quality coffee for everyone</li>
                      <li>窶｢ <strong>Socialization:</strong> Casual meetings</li>
                      <li>窶｢ <strong>Innovation:</strong> Model copied throughout Asia</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">
                    笘・"Doutor: The Coffee that Revolutionized Japan"
                  </h3>
                  <p className="text-gray-600">
                    By creating the first express coffee concept in Japan, Doutor not only 
                    changed the way coffee is consumed, but also redefined the urban break, 
                    influencing a whole generation of chains across Asia.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="text-center">
              <div className="inline-flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/dish-types/cafe"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  竊・Back to Cafe
                </Link>
                <Link 
                  href="/chaines"
                  className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  All Chains
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}



