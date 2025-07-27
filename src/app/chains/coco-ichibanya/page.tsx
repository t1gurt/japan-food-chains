import Link from 'next/link';
import { ArrowLeft, Clock, MapPin, CreditCard, Info, Star, TrendingUp, Users, History, Award, Utensils, Heart, Flame, Crown } from 'lucide-react';
import ChainViewTracker from '../../../components/ChainViewTracker';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "CoCo Ichibanya 繧ｳ繧ｳ繧､繝・| #1 Curry | JapanChains",
  description: "Customize your curry: spices (1-10), rice, 40+ toppings. Japanese curry leader.",
  keywords: [
    'coco ichibanya', '繧ｳ繧ｳ繧､繝・, 'Japanese curry', 'customization',
    'consistent quality', 'authentic curry', 'Japanese style',
    'curry leader', 'custom spices', 'curry rice'
  ],
  openGraph: {
    title: "CoCo Ichibanya 繧ｳ繧ｳ繧､繝・| #1 Curry | JapanChains",
    description: "Customize your curry: spices (1-10), rice, 40+ toppings. Japanese curry leader.",
    type: 'article',
    locale: "en_US",
    siteName: "JapanChains - Your Guide to Japanese Restaurants"
  },
  alternates: {
    canonical: '/chaines/coco-ichibanya',
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function CocoIchibanyaPage() {
  const menuCategories = [
    {
      name: "Classic Curries",
      japanese: "螳夂分繧ｫ繝ｬ繝ｼ",
      items: [
        {
          name: "Pork Cutlet Curry",
          japanese: "繝昴・繧ｯ繧ｫ繝・き繝ｬ繝ｼ",
          price: "ﾂ･820",
          description: "The essential breaded pork cutlet with CoCo's signature curry",
          spiceLevel: "Customizable 0-10",
          isPopular: true
        },
        {
          name: "Chicken Cutlet Curry",
          japanese: "繝√く繝ｳ繧ｫ繝・き繝ｬ繝ｼ",
          price: "ﾂ･790",
          description: "Crispy chicken cutlet, a lighter option than pork",
          spiceLevel: "Customizable 0-10"
        },
        {
          name: "Beef Curry",
          japanese: "繝薙・繝輔き繝ｬ繝ｼ",
          price: "ﾂ･740",
          description: "Simple curry with tender beef pieces",
          spiceLevel: "Customizable 0-10"
        },
        {
          name: "Vegetable Curry",
          japanese: "驥手除繧ｫ繝ｬ繝ｼ",
          price: "ﾂ･620",
          description: "Vegetarian option with seasonal vegetables",
          spiceLevel: "Customizable 0-10",
          isVegetarian: true
        }
      ]
    },
    {
      name: "Premium Curries",
      japanese: "繝励Ξ繝溘い繝繧ｫ繝ｬ繝ｼ",
      items: [
        {
          name: "Seafood Curry",
          japanese: "繧ｷ繝ｼ繝輔・繝峨き繝ｬ繝ｼ",
          price: "ﾂ･980",
          description: "Shrimp, squid, and vegetables in a rich curry",
          spiceLevel: "Customizable 0-10"
        },
        {
          name: "Grand Mother Curry",
          japanese: "繧ｰ繝ｩ繝ｳ繝峨・繧ｶ繝ｼ繧ｫ繝ｬ繝ｼ",
          price: "ﾂ･890",
          description: "Traditional recipe with long-simmered vegetables",
          spiceLevel: "Customizable 0-10"
        },
        {
          name: "Chicken & Vegetables",
          japanese: "繝√く繝ｳ縺ｨ驥手除",
          price: "ﾂ･850",
          description: "Chicken pieces with assorted fresh vegetables",
          spiceLevel: "Customizable 0-10"
        }
      ]
    }
  ];

  const spiceLevels = [
    { level: 0, name: "Very mild", japanese: "逕伜哨", description: "For children, no spiciness", color: "bg-green-100 text-green-800" },
    { level: 1, name: "Mild", japanese: "繧・ｄ逕伜哨", description: "Very light, for beginners", color: "bg-green-200 text-green-800" },
    { level: 2, name: "Normal", japanese: "譎ｮ騾・, description: "Japanese standard, popular", color: "bg-yellow-100 text-yellow-800" },
    { level: 3, name: "Moderately spicy", japanese: "繧・ｄ霎帛哨", description: "Starts to be slightly spicy", color: "bg-yellow-200 text-yellow-800" },
    { level: 4, name: "Spicy", japanese: "霎帛哨", description: "Medium spice level", color: "bg-orange-200 text-orange-800" },
    { level: 5, name: "Very spicy", japanese: "螟ｧ霎・, description: "For confirmed enthusiasts", color: "bg-orange-300 text-orange-800" },
    { level: 6, name: "Ultra spicy", japanese: "豼霎・, description: "Serious challenge", color: "bg-red-200 text-red-800" },
    { level: 7, name: "Extreme", japanese: "讌ｵ霎・, description: "Caution! Very intense", color: "bg-red-300 text-red-800" },
    { level: 8, name: "Diabolical", japanese: "謔ｪ鬲碑ｾ・, description: "Reserved for experts", color: "bg-red-400 text-red-900" },
    { level: 9, name: "Hell", japanese: "蝨ｰ迯・ｾ・, description: "Human limit", color: "bg-red-500 text-white" },
    { level: 10, name: "Apocalypse", japanese: "邨よ忰霎・, description: "Ultimate challenge!", color: "bg-red-600 text-white" }
  ];

  const toppings = [
    {
      category: "Proteins",
      japanese: "繧ｿ繝ｳ繝代け雉ｪ",
      items: [
        { name: "Pork Cutlet", japanese: "繝昴・繧ｯ繧ｫ繝・, price: "ﾂ･250" },
        { name: "Chicken Cutlet", japanese: "繝√く繝ｳ繧ｫ繝・, price: "ﾂ･220" },
        { name: "Sausage", japanese: "繧ｽ繝ｼ繧ｻ繝ｼ繧ｸ", price: "ﾂ･180" },
        { name: "Egg", japanese: "縺溘∪縺・, price: "ﾂ･120" },
        { name: "Fried Shrimp", japanese: "繧ｨ繝薙ヵ繝ｩ繧､", price: "ﾂ･280" }
      ]
    },
    {
      category: "Vegetables",
      japanese: "驥手除",
      items: [
        { name: "Spinach", japanese: "縺ｻ縺・ｌ繧楢拷", price: "ﾂ･150" },
        { name: "Eggplant", japanese: "縺ｪ縺・, price: "ﾂ･160" },
        { name: "Mushrooms", japanese: "縺阪・縺・, price: "ﾂ･140" },
        { name: "Zucchini", japanese: "繧ｺ繝・く繝ｼ繝・, price: "ﾂ･140" },
        { name: "Potatoes", japanese: "縺倥ｃ縺後＞繧・, price: "ﾂ･130" }
      ]
    },
    {
      category: "Add-ons",
      japanese: "繝医ャ繝斐Φ繧ｰ",
      items: [
        { name: "Cheese", japanese: "繝√・繧ｺ", price: "ﾂ･160" },
        { name: "Natto", japanese: "邏崎ｱ・, price: "ﾂ･120" },
        { name: "Mayonnaise", japanese: "繝槭Κ繝阪・繧ｺ", price: "ﾂ･60" },
        { name: "Poached Egg", japanese: "貂ｩ豕峨◆縺ｾ縺・, price: "ﾂ･100" }
      ]
    }
  ];

  const orderingSteps = [
    {
      step: 1,
      title: "Choose your base",
      japanese: "繝吶・繧ｹ驕ｸ謚・,
      description: "Select your base curry (pork, chicken, beef, vegetables, etc.)"
    },
    {
      step: 2,
      title: "Spice level",
      japanese: "霎帙＆繝ｬ繝吶Ν",
      description: "Indicate your preferred spice level from 0 to 10 (2 is standard)"
    },
    {
      step: 3,
      title: "Portion size",
      japanese: "繝ｩ繧､繧ｹ縺ｮ驥・,
      description: "Choose the amount of rice: Normal (譎ｮ騾・, Large (螟ｧ逶帙ｊ), Small (蟆代↑繧・"
    },
    {
      step: 4,
      title: "Toppings",
      japanese: "繝医ャ繝斐Φ繧ｰ",
      description: "Add additional toppings to your liking"
    },
    {
      step: 5,
      title: "Drinks",
      japanese: "繝峨Μ繝ｳ繧ｯ",
      description: "Optional: order a drink (recommended for high spice levels)"
    }
  ];

  const practicalInfo = [
    {
      category: "Opening Hours",
      japanese: "蝟ｶ讌ｭ譎る俣",
      info: "Generally 11:00 AM-11:00 PM, varies by location"
    },
    {
      category: "Payment Methods",
      japanese: "謾ｯ謇輔＞譁ｹ豕・,
      info: "Cash, credit cards, IC cards (Suica, Pasmo), PayPay"
    },
    {
      category: "Reservations",
      japanese: "莠育ｴ・,
      info: "Not necessary, counter service only"
    },
    {
      category: "Wi-Fi",
      japanese: "Wi-Fi",
      info: "Available in most establishments"
    },
    {
      category: "English Menu",
      japanese: "闍ｱ隱槭Γ繝九Η繝ｼ",
      info: "Available, with clear photos and descriptions"
    }
  ];

  const culturalTips = [
    {
      title: "CoCo's Spice System",
      japanese: "繧ｳ繧ｳ縺ｮ繧ｹ繝代う繧ｹ繧ｷ繧ｹ繝・Β",
      description: "CoCo Ichibanya popularized the spice level system from 0 to 10. Level 2 is considered 'normal' in Japan."
    },
    {
      title: "Infinite Customization",
      japanese: "辟｡髯舌き繧ｹ繧ｿ繝槭う繧ｺ",
      description: "CoCo is famous for allowing complete customization of its curry with over 40 different toppings."
    },
    {
      title: "Origin and Expansion",
      japanese: "襍ｷ貅舌→諡｡螟ｧ",
      description: "Founded in 1978 in Nagoya, CoCo has become the world's largest curry chain with restaurants in 7 countries."
    },
    {
      title: "Vegetarian Options",
      japanese: "繝吶ず繧ｿ繝ｪ繧｢繝ｳ蟇ｾ蠢・,
      description: "CoCo offers certified vegetarian and even vegan options, rare in Japan."
    }
  ];

  const usefulPhrases = [
    {
      situation: "Ordering",
      japanese: "豕ｨ譁・凾",
      phrases: [
        { french: "Pork katsu curry, level 3 please", japanese: "繝昴・繧ｯ繧ｫ繝・き繝ｬ繝ｼ縲・逡ｪ縺ｧ縺企｡倥＞縺励∪縺・, romaji: "Pﾅ耕u katsu karﾄ・ san-ban de onegaishimasu" },
        { french: "Normal rice", japanese: "繝ｩ繧､繧ｹ譎ｮ騾壹〒", romaji: "Raisu futsﾅｫ de" },
        { french: "Large portion of rice", japanese: "繝ｩ繧､繧ｹ螟ｧ逶帙ｊ縺ｧ", romaji: "Raisu ﾅ肯ori de" },
        { french: "With extra cheese topping", japanese: "繝√・繧ｺ繝医ャ繝斐Φ繧ｰ縺ｧ", romaji: "Chﾄｫzu toppingu de" }
      ]
    },
    {
      situation: "About Spice Level",
      japanese: "霎帙＆縺ｫ縺､縺・※",
      phrases: [
        { french: "Not spicy at all", japanese: "蜈ｨ辟ｶ霎帙￥縺ｪ縺・〒", romaji: "Zenzen karakunai de" },
        { french: "A little spicy", japanese: "蟆代＠霎帙ａ縺ｧ", romaji: "Sukoshi karame de" },
        { french: "Very spicy", japanese: "縺ｨ縺ｦ繧りｾ帙￥縺ｦ", romaji: "Totemo karakute" },
        { french: "The spiciest possible", japanese: "荳逡ｪ霎帙＞縺ｮ縺ｧ", romaji: "Ichiban karai no de" }
      ]
    },
    {
      situation: "Questions",
      japanese: "雉ｪ蝠・,
      phrases: [
        { french: "What toppings are available?", japanese: "縺ｩ繧薙↑繝医ャ繝斐Φ繧ｰ縺後≠繧翫∪縺吶°・・, romaji: "Donna toppingu ga arimasu ka?" },
        { french: "Is it vegetarian?", japanese: "繝吶ず繧ｿ繝ｪ繧｢繝ｳ蟇ｾ蠢懊〒縺吶°・・, romaji: "Bejitarian taiﾅ・desu ka?" },
        { french: "How long is the wait?", japanese: "縺ｩ縺ｮ縺上ｉ縺・ｾ・■縺ｾ縺吶°・・, romaji: "Dono kurai machimasu ka?" }
      ]
    }  ];
  return (
    <>
      <ChainViewTracker chainName="coco-ichibanya" chainCategory="curry" />
      <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              CoCo螢ｱ逡ｪ螻・              <span className="block text-2xl md:text-3xl font-normal mt-2 text-orange-100">
                CoCo Ichibanya
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-orange-100 max-w-4xl mx-auto">
              Guinness Record 窶｢ The world's largest curry chain
            </p>
            <p className="text-lg mb-8 text-orange-50 max-w-3xl mx-auto">
              From the philosophy "Koko ga ichiban ya!" (This is the best place!) to the global empire of personalized curry. 
              Over 12 billion possible combinations since 1978.
            </p>
            
            <div className="grid md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-orange-100">1978</div>
                <div className="text-sm text-orange-50">Founded in Nagoya</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-orange-100">1,480+</div>
                <div className="text-sm text-orange-50">Global restaurants</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-orange-100">12蜆・</div>
                <div className="text-sm text-orange-50">Curry combinations</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4">
                <div className="text-2xl font-bold text-orange-100">12</div>
                <div className="text-sm text-orange-50">Countries & territories</div>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-white text-orange-600 px-4 py-2 rounded-full font-semibold">
                幻・・Levels 0-10
              </span>
              <span className="bg-white text-orange-600 px-4 py-2 rounded-full font-semibold">
                ･・Vegan Options
              </span>
              <span className="bg-white text-orange-600 px-4 py-2 rounded-full font-semibold">
                笞｡ Fast Service
              </span>
              <span className="bg-white text-orange-600 px-4 py-2 rounded-full font-semibold">
                腸 ﾂ･500-1200
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Menu Signature
            <span className="block text-lg text-gray-600 mt-2">繝｡繝九Η繝ｼ</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {menuCategories.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 shadow-lg">
                <h3 className="text-2xl font-bold mb-6 text-orange-800">
                  {category.name}
                  <span className="block text-sm font-normal text-gray-600">{category.japanese}</span>
                </h3>
                <div className="space-y-4">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-white rounded-lg p-4 shadow-sm relative">
                      {item.isPopular && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                          莠ｺ豌・No.1
                        </span>
                      )}
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-gray-900">
                          {item.name}
                          {item.isVegetarian && <span className="ml-2 text-green-600">験</span>}
                        </h4>
                        <span className="text-lg font-bold text-orange-600">{item.price}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{item.japanese}</p>
                      <p className="text-gray-700 text-sm mb-2">{item.description}</p>
                      <p className="text-xs text-orange-600 font-medium">{item.spiceLevel}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spice Level Guide */}
      <section className="py-16 bg-gradient-to-br from-red-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Guide des Niveaux d'ﾃ英ice
            <span className="block text-lg text-gray-600 mt-2">霎帙＆繝ｬ繝吶Ν繧ｬ繧､繝・/span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {spiceLevels.map((level, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-2xl font-bold px-3 py-1 rounded-full ${level.color}`}>
                    {level.level}
                  </span>
                  <div className="text-right">
                    <h4 className="font-semibold text-gray-900">{level.name}</h4>
                    <p className="text-sm text-gray-600">{level.japanese}</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">{level.description}</p>
              </div>
            ))}
          </div>
          
          <div className="mt-8 bg-white rounded-xl p-6 shadow-lg">
            <h3 className="text-xl font-bold mb-4 text-gray-900">庁 Conseils pour Choisir</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-semibold text-green-600">Dﾃｩbutants :</p>
                <p>Commencez par le niveau 1 ou 2</p>
              </div>
              <div>
                <p className="font-semibold text-orange-600">Amateurs :</p>
                <p>Niveaux 3 ﾃ 5 sont parfaits</p>
              </div>
              <div>
                <p className="font-semibold text-red-600">Experts :</p>
                <p>Niveaux 6+ sont un vrai dﾃｩfi</p>
              </div>
              <div>
                <p className="font-semibold text-purple-600">Challenge :</p>
                <p>Niveau 10 = Signature requise !</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Toppings Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Toppings Disponibles
            <span className="block text-lg text-gray-600 mt-2">繝医ャ繝斐Φ繧ｰ荳隕ｧ</span>
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {toppings.map((category, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-6 text-orange-800">
                  {category.category}
                  <span className="block text-sm font-normal text-gray-600">{category.japanese}</span>
                </h3>
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="bg-white rounded-lg p-3 shadow-sm">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-medium text-gray-900">{item.name}</h4>
                          <p className="text-xs text-gray-600">{item.japanese}</p>
                        </div>
                        <span className="text-orange-600 font-semibold">{item.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ordering Guide */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Comment Commander
            <span className="block text-lg text-gray-600 mt-2">豕ｨ譁・婿豕・/span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {orderingSteps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-gray-900">{step.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{step.japanese}</p>
                <p className="text-sm text-gray-700">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Tips */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Culture & Histoire
            <span className="block text-lg text-gray-600 mt-2">譁・喧縺ｨ豁ｴ蜿ｲ</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {culturalTips.map((tip, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-orange-800">
                  {tip.title}
                  <span className="block text-sm font-normal text-gray-600">{tip.japanese}</span>
                </h3>
                <p className="text-gray-700">{tip.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Useful Phrases */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Phrases Utiles
            <span className="block text-lg text-gray-600 mt-2">萓ｿ蛻ｩ縺ｪ繝輔Ξ繝ｼ繧ｺ</span>
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {usefulPhrases.map((section, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-bold mb-6 text-green-800">
                  {section.situation}
                  <span className="block text-sm font-normal text-gray-600">{section.japanese}</span>
                </h3>
                <div className="space-y-4">
                  {section.phrases.map((phrase, phraseIndex) => (
                    <div key={phraseIndex} className="border-l-4 border-green-400 pl-4">
                      <p className="font-medium text-gray-900 mb-1">{phrase.french}</p>
                      <p className="text-lg text-gray-800 mb-1">{phrase.japanese}</p>
                      <p className="text-sm text-gray-600 italic">{phrase.romaji}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Information */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Informations Pratiques
            <span className="block text-lg text-gray-600 mt-2">螳溽畑諠・ｱ</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {practicalInfo.map((info, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl p-6 shadow-lg">
                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                  {info.category}
                  <span className="block text-sm font-normal text-gray-600">{info.japanese}</span>
                </h3>
                <p className="text-gray-700">{info.info}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Links */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-12 text-gray-900">
            Explore More
            <span className="block text-lg text-gray-600 mt-2">髢｢騾｣繝壹・繧ｸ</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Link href="/dish-types/curry" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group">
              <div className="text-4xl mb-4">惚</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-600">
                All Japanese Curries
              </h3>
              <p className="text-gray-600">Discover CoCo Ichibanya, Go!Go!Curry and more</p>
            </Link>
            
            <Link href="/guides/how-to-order" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group">
              <div className="text-4xl mb-4">搭</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-600">
                Ordering Guide
              </h3>
              <p className="text-gray-600">Master the art of ordering in Japan</p>
            </Link>
            
            <Link href="/guides/regimes-alimentaires" className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow group">
              <div className="text-4xl mb-4">験</div>
              <h3 className="text-xl font-semibold mb-2 group-hover:text-orange-600">
                Dietary Regimes
              </h3>
              <p className="text-gray-600">Vegetarian options and restrictions</p>
            </Link>
          </div>        </div>
      </section>

      {/* History and Philosophy */}
      <section className="py-16 bg-gradient-to-br from-amber-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            The History of a Curry Empire
            <span className="block text-lg text-gray-600 mt-2">繧ｫ繝ｬ繝ｼ蟶晏嵜縺ｮ豁ｴ蜿ｲ</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h3 className="text-2xl font-bold text-orange-800 mb-6">
                From Humble Beginnings to World Records
                <span className="block text-sm font-normal text-gray-600 mt-1">humble beginning to world records</span>
              </h3>
              <div className="space-y-4 text-gray-700">
                <p>
                  <strong>1974:</strong> It all began in the modest cafeteria "Bacchus" (繝舌ャ繧ｫ繧ｹ) 
                  of Munetsugu Tokuji and his wife Naomi in Nagoya. Mrs. Munetsugu's homemade curry 
                  became so popular that they decided to specialize.
                </p>
                <p>
                  <strong>1978:</strong> Opening of the first "Curry House CoCo Ichibanya" 
                   in Nishibibajima-cho, in the suburbs of Nagoya, surrounded by rice fields. 
                  Locals said: "A restaurant can't work in such a place!"
                </p>
                <p>
                  <strong>The revelation:</strong> On the first day of opening, seeing the joy 
                  of the customers, the founder instantly abandoned his real estate business. 
                  He had found his calling: to serve the best curry in the world.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h4 className="text-xl font-bold text-gray-900 mb-6">
                Philosophy "Koko ga ichiban ya!"
                <span className="block text-sm font-normal text-gray-600">Koko ga ichiban ya!</span>
              </h4>
              <div className="space-y-4">
                <div className="border-l-4 border-orange-400 pl-4">
                  <p className="font-semibold text-orange-800">豁､蜃ｦ縺御ｸ逡ｪ繧・ｼ・/p>
                  <p className="text-sm text-gray-600">"This is the best place!"</p>
                  <p className="text-sm text-gray-700 mt-2">
                    Born from a shinkansen trip after tasting Tokyo curries. 
                    The founder realized his curry was the best.
                  </p>
                </div>
                
                <div className="border-l-4 border-yellow-400 pl-4">
                  <p className="font-semibold text-yellow-800">繝九さ繝ｻ繧ｭ繝薙・繝上く</p>
                  <p className="text-sm text-gray-600">Nico 窶｢ Kibi 窶｢ Haki</p>
                  <p className="text-sm text-gray-700 mt-2">
                    <strong>Nico:</strong> Always smile<br/>
                    <strong>Kibi:</strong> Move with energy<br/>
                    <strong>Haki:</strong> Speak clearly
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-4">醇</div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Guinness Record</h4>
              <p className="text-gray-600 text-sm">
                Officially recognized as "the world's largest curry restaurant chain" 
                with over 1,480 restaurants in 12 countries and territories.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-4">件</div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Global Expansion</h4>
              <p className="text-gray-600 text-sm">
                First overseas restaurant in 1994 in Hawaii. Today present in Asia, 
                Europe (London), and even India - the country of origin of curry!
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <div className="text-3xl mb-4">､・/div>
              <h4 className="text-lg font-bold text-gray-900 mb-3">Bloom System</h4>
              <p className="text-gray-600 text-sm">
                Unique owner-employee training system. 90%+ survival rate 
                after 10 years - a record in the restaurant industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* International Expansion */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            CoCo Ichibanya Around the World
            <span className="block text-lg text-gray-600 mt-2">繧ｰ繝ｭ繝ｼ繝舌Ν螻暮幕謌ｦ逡･</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold text-blue-800 mb-6">Global Adaptation Strategy</h3>
              <p className="text-gray-700 mb-6">
                CoCo Ichibanya's international success is based on a unique philosophy: 
                maintaining <strong>taste consistency</strong> while adapting to local cultures.
              </p>
              
              <div className="space-y-4">
                <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-blue-400">
                  <h4 className="font-semibold text-blue-800 mb-2">・・ United States & Hawaii</h4>
                  <p className="text-sm text-gray-600">
                    Immense popularity among American military personnel. Adapted menu with 
                    macaroni & cheese for children and generous portions.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-red-400">
                  <h4 className="font-semibold text-red-800 mb-2">・・ United Kingdom</h4>
                  <p className="text-sm text-gray-600">
                    Premium positioning in London. "Katsu Curry" was already popular, 
                    CoCo brings Japanese authenticity.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-green-400">
                  <h4 className="font-semibold text-green-800 mb-2">・・ China</h4>
                  <p className="text-sm text-gray-600">
                    Successful transformation: Instagram-friendly design, targeting young women, 
                    CoCo becomes THE reference for Japanese curry.
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-4 shadow-sm border-l-4 border-orange-400">
                  <h4 className="font-semibold text-orange-800 mb-2">・・ India</h4>
                  <p className="text-sm text-gray-600">
                    The ultimate challenge! 100% adapted menu: vegetarian/non-vegetarian separation, 
                    paneer, lamb, no beef or pork.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Global Presence in Numbers
                <span className="block text-sm font-normal text-gray-600">Global footprint by numbers</span>
              </h3>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center p-4 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg">
                  <div className="text-2xl font-bold text-orange-700">1,264</div>
                  <div className="text-xs text-gray-600">Restaurants Japan</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg">
                  <div className="text-2xl font-bold text-blue-700">216</div>
                  <div className="text-xs text-gray-600">Restaurants International</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg">
                  <div className="text-2xl font-bold text-green-700">968蜆・/div>
                  <div className="text-xs text-gray-600">Sales Japan (ﾂ･)</div>
                </div>
                <div className="text-center p-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-lg">
                  <div className="text-2xl font-bold text-purple-700">185蜆・/div>
                  <div className="text-xs text-gray-600">Sales International (ﾂ･)</div>
                </div>
              </div>
              
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900">Most Important Countries:</h4>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">・・ Thailand</span>
                    <span className="text-sm font-semibold text-gray-900">51 restaurants</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">・・ China</span>
                    <span className="text-sm font-semibold text-gray-900">50 restaurants</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">・・ South Korea</span>
                    <span className="text-sm font-semibold text-gray-900">31 restaurants</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-700">・・ Taiwan</span>
                    <span className="text-sm font-semibold text-gray-900">28 restaurants</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white rounded-xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">The Secret to Global Success</h3>
            <p className="text-lg text-orange-100 max-w-3xl mx-auto">
              "Same taste everywhere, smart local adaptations" - CoCo Ichibanya proves that a 
              chain can be both globally consistent and locally relevant.
            </p>
          </div>
        </div>
      </section>

      {/* The CoCo Ichibanya System */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            What Makes CoCo Ichibanya Unique
            <span className="block text-lg text-gray-600 mt-2">繧ｳ繧ｳ繧､繝√・迢ｬ閾ｪ繧ｷ繧ｹ繝・Β</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 mb-12">
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-orange-800 mb-6">
                The "Bloom System" (繝悶Ν繝ｼ繝繧ｷ繧ｹ繝・Β)
                <span className="block text-sm font-normal text-gray-600">Unique owner training system</span>
              </h3>
              
              <div className="space-y-4">
                <div className="bg-orange-50 rounded-lg p-4">
                  <h4 className="font-semibold text-orange-800 mb-2">識 Revolutionary Concept</h4>
                  <p className="text-sm text-gray-700">
                    Unlike traditional franchises, CoCo Ichibanya trains its future owners 
                    in-house for 3-6 years before allowing them to open their restaurant.
                  </p>
                </div>
                
                <div className="bg-green-50 rounded-lg p-4">
                  <h4 className="font-semibold text-green-800 mb-2">腸 No Royalties</h4>
                  <p className="text-sm text-gray-700">
                    Owners pay NO percentage on their sales! 
                    CoCo Ichibanya earns through the sale of ingredients and materials.
                  </p>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">嶋 Exceptional Success Rate</h4>
                  <p className="text-sm text-gray-700">
                    Over 90% of Bloom owners continue their business after 10 years - 
                    an absolute record in the restaurant industry!
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-red-800 mb-6">
                Mass Customization (繝槭せ繝ｻ繧ｫ繧ｹ繧ｿ繝槭う繧ｼ繝ｼ繧ｷ繝ｧ繝ｳ)
                <span className="block text-sm font-normal text-gray-600">Mass customization</span>
              </h3>
              
              <div className="space-y-4">
                <div className="bg-yellow-50 rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-800 mb-2">耳 Your Curry, Your Creation</h4>
                  <p className="text-sm text-gray-700">
                    Over 12 billion possible combinations! Each customer creates 
                    THEIR unique curry impossible to replicate elsewhere.
                  </p>
                </div>
                
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold text-purple-800 mb-2">ｧ Psychology of Attachment</h4>
                  <p className="text-sm text-gray-700">
                    By creating "their" curry, customers develop a unique emotional attachment 
                    that makes them loyal to the brand.
                  </p>
                </div>
                
                <div className="bg-indigo-50 rounded-lg p-4">
                  <h4 className="font-semibold text-indigo-800 mb-2">笞｡ Great "Neutral" Curry</h4>
                  <p className="text-sm text-gray-700">
                    The base curry is intentionally "characterless" - it serves as a blank canvas 
                    for your toppings to shine!
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-3">宵</div>
              <h4 className="font-bold text-gray-900 mb-2">Consistent Quality</h4>
              <p className="text-sm text-gray-600">
                Same curry sauce imported from Japan in all global restaurants
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-3">導</div>
              <h4 className="font-bold text-gray-900 mb-2">Digital Innovation</h4>
              <p className="text-sm text-gray-600">
                Official app, QR codes, mobile ordering, partner delivery
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-3">験</div>
              <h4 className="font-bold text-gray-900 mb-2">Vegetarian Options</h4>
              <p className="text-sm text-gray-600">
                Certified vegetarian curry, respectful local adaptations
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="text-3xl mb-3">､・/div>
              <h4 className="font-bold text-gray-900 mb-2">Haus Partnership</h4>
              <p className="text-sm text-gray-600">
                Alliance with Haus Foods to secure the supply chain
              </p>
            </div>          </div>
        </div>
      </section>
    </div>
    </>
  );
}



