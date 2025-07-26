import Link from 'next/link';
import { ArrowLeft, Heart, Users, Globe, Target, BookOpen, Star } from 'lucide-react';
import PageViewTracker from '../../components/PageViewTracker';
import { getTotalChainCount, getTotalFoodTypeCount } from '../../lib/chain-count';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "About Us | Our Mission | JapanChains",
  description: "Discover our mission: the definitive guide to Japanese restaurant chains for English-speaking travelers.",
  keywords: "about JapanChains, mission, Japanese restaurant guide, travel Japan, English speakers",
  openGraph: {
    title: "About Us | Our Mission | JapanChains",
    description: "Discover our mission: the definitive guide to Japanese restaurant chains for English-speaking travelers.",
    type: "website",
    locale: "en_US",
    siteName: "JapanChains - Your Guide to Japanese Restaurants"
  },
  alternates: {
    canonical: "/about"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function AboutPage() {
  const totalChains = getTotalChainCount();

  return (
    <>
      <PageViewTracker
        pageName="about"
        pageCategory="information"
        pageType="about_page"
      />
      <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-r from-red-600 to-orange-600 text-white">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <div className="flex justify-center mb-6">
                <div className="bg-white/20 p-4 rounded-full">
                  <Heart className="h-12 w-12" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                About Our Mission
              </h1>
              <p className="text-xl md:text-2xl text-red-100 max-w-3xl mx-auto">
                The first complete and authentic English guide to Japanese restaurant chains.
              </p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Mission Statement */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <div className="flex items-center mb-6">
              <Target className="h-8 w-8 text-red-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
            </div>
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
              <p className="text-xl mb-6">
                We are creating <strong>the most complete and authentic English guide</strong> to Japanese restaurant chains,
                specially designed for English-speaking travelers in Japan.
              </p>
              <p className="mb-4">
                Faced with the sometimes intimidating richness of Japanese gastronomy, we offer a cultural bridge,
                transforming the anxiety of the unknown into the excitement of discovery.
              </p>
              <p>
                Our goal is simple: to enable every English-speaking traveler to have an authentic and stress-free
                dining experience in Japanese restaurant chains.
              </p>
            </div>
          </div>

          {/* Why This Site Exists */}
          <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-8 mb-12">
            <div className="flex items-center mb-6">
              <Users className="h-8 w-8 text-orange-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Why This Site Exists</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">The Challenge</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="bg-red-100 text-red-600 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                    <span>Menus only in Japanese</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-100 text-red-600 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                    <span>Complex ordering systems (vending machines, touch screens)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-100 text-red-600 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                    <span>Lack of reliable information in English</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-red-100 text-red-600 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                    <span>Cultural specifics and dietary needs</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Our Solution</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-600 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                    <span>Full English-Japanese-Romaji translations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-600 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                    <span>Step-by-step visual guides</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-600 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                    <span>Authentic cultural information</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-green-100 text-green-600 rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></span>
                    <span>Specialized guides for every dietary requirement</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Our Approach */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
            <div className="flex items-center mb-6">
              <BookOpen className="h-8 w-8 text-red-600 mr-3" />
              <h2 className="text-3xl font-bold text-gray-900">Our Approach</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-red-100 p-4 rounded-full inline-block mb-4">
                  <Globe className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Cultural Research</h3>
                <p className="text-gray-600">
                  Each chain is studied in its historical and cultural Japanese context for authentic understanding.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 p-4 rounded-full inline-block mb-4">
                  <Users className="h-8 w-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">English Perspective</h3>
                <p className="text-gray-600">
                  We adapt explanations to English cultural references, facilitating understanding and appropriation.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 p-4 rounded-full inline-block mb-4">
                  <Star className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">Practical Experience</h3>
                <p className="text-gray-600">
                  All our guides are based on real experience, tested and validated to ensure their usefulness on the ground.
                </p>
              </div>
            </div>
          </div>

          {/* Coverage */}
          <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-2xl p-8 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Comprehensive Coverage</h2>
            <div className="grid md:grid-cols-2 gap-8">            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{totalChains} Documented Chains</h3>
              <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                <span>• Gyūdon (3 chains)</span>
                <span>• Ramen (4 chains)</span>
                <span>• Kaiten-zushi (3 chains)</span>
                <span>• Japanese Curry (3 chains)</span>
                <span>• Tempura (2 chains)</span>
                <span>• Udon/Soba (4 chains)</span>
                <span>• Family restaurants (3 chains)</span>
                <span>• Japanese Burgers (3 chains)</span>
                <span>• Chinese Cuisine (3 chains)</span>
                <span>• Izakaya (3 chains)</span>
              </div>
            </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Specialized Guides</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Detailed ordering methods</li>
                  <li>✓ Guides for special diets</li>
                  <li>✓ Cultural and historical context</li>
                  <li>✓ Complete trilingual translations</li>
                  <li>✓ Practical on-the-ground tips</li>
                  <li>✓ Comparisons between chains</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-red-600 mb-3">Authenticity</h3>
                <p className="text-gray-700 mb-6">
                  We always prioritize cultural accuracy and fidelity to Japanese traditions, while making them accessible to English speakers.
                </p>

                <h3 className="text-xl font-semibold text-orange-600 mb-3">Accessibility</h3>
                <p className="text-gray-700">
                  All information is presented clearly and usefully, even for travelers discovering Japan for the first time.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-green-600 mb-3">Cultural Respect</h3>
                <p className="text-gray-700 mb-6">
                  We promote a respectful approach to Japanese culture, encouraging open-mindedness and curiosity.
                </p>

                <h3 className="text-xl font-semibold text-blue-600 mb-3">Excellence</h3>
                <p className="text-gray-700">
                  We are committed to maintaining the highest level of quality in our research, translations, and recommendations.
                </p>
              </div>
            </div>        </div>
        </div>
      </div>
    </>
  );
}
