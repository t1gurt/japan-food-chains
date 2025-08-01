import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Udon & Soba : Japanese Noodles Guide | Japan Food Chains",
  description: "Explore the two great Japanese noodle traditions: thick Udon from Kansai and fine Soba from Edo.",
  keywords: "udon, soba, japanese noodles, Marugame Seimen, Fuji Soba, culinary traditions",
  openGraph: {
    title: "Udon & Soba : Japanese Noodles Guide | Japan Food Chains",
    description: "Explore the two great Japanese noodle traditions: thick Udon from Kansai and fine Soba from Edo.",
    type: "article",
    url: "https://japanfoodchains.com/food-type/udon-soba",
    siteName: "Japan Food Chains",
    locale: "en_US",
    images: [{
      url: "/images/udon-soba-cover.jpg",
      width: 1200,
      height: 630,
      alt: "Udon and Soba - Traditional Japanese noodles"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Udon & Soba : Japanese Noodles Guide | Japan Food Chains",
    description: "Explore the two great Japanese noodle traditions: thick Udon from Kansai and fine Soba from Edo.",
    images: ["/images/udon-soba-cover.jpg"]
  },
  alternates: {
    canonical: "https://japanfoodchains.com/food-type/udon-soba"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

export default function UdonSobaRedirectPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <nav className="text-sm">
            <Link href="/" className="text-gray-500 hover:text-purple-600">Home</Link>
            <span className="text-gray-400 mx-2">/</span>
            <Link href="/food-type" className="text-gray-500 hover:text-purple-600">Food Type</Link>
            <span className="text-gray-400 mx-2">/</span>
            <span className="text-purple-600 font-medium">Udon & Soba</span>
          </nav>
        </div>
      </div>

      {/* Redirection Hero */}
      <section className="bg-gradient-to-br from-purple-900 via-indigo-800 to-gray-900 text-white py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center mb-8">
            <span className="text-6xl mr-4">🍲</span>
            <span className="text-6xl mr-4">🌾</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Traditional Japanese Noodles
          </h1>
          <p className="text-xl mb-8 text-purple-100">
            We've separated the Udon and Soba categories to offer you 
            a deeper exploration of these two distinct culinary traditions.
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-8">
            <h2 className="text-2xl font-bold mb-4">Choose your tradition:</h2>
            <p className="text-lg text-purple-200">
              Discover the unique nuances between thick Udon noodles from Kansai 
              and fine Soba noodles from Edo (Tokyo).
            </p>
          </div>
        </div>
      </section>

      {/* Choice Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            
            {/* Udon Choice */}
            <Link 
              href="/food-type/udon"
              className="group bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-8 border border-orange-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-center">
                <div className="text-6xl mb-6">🍲</div>
                <h2 className="text-3xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors mb-4">
                  Udon
                </h2>
                <p className="text-xl text-gray-600 japanese-text mb-6">うどん</p>
                <p className="text-gray-700 mb-6">
                  Thick and chewy wheat noodles, originating from Kansai (southern Japan). 
                  Comforting and generous, they embody warmth and conviviality.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h3 className="font-bold text-gray-900 mb-2">Main Chains:</h3>
                    <ul className="text-sm text-gray-600">
                      <li>• Marugame Seimen - 丸亀製麺</li>
                      <li>• Hanamaru Udon - はなまるうどん</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <h3 className="font-bold text-gray-900 mb-2">Characteristics:</h3>
                    <ul className="text-sm text-gray-600">
                      <li>• Thick and chewy texture</li>
                      <li>• Flavorful and comforting broth</li>
                      <li>• Kansai tradition</li>
                      <li>• Very affordable prices</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8">
                  <span className="bg-orange-100 text-orange-800 px-6 py-3 rounded-full font-semibold group-hover:bg-orange-200 transition-colors">
                    Explore Udon →
                  </span>
                </div>
              </div>
            </Link>

            {/* Soba Choice */}
            <Link 
              href="/food-type/soba"
              className="group bg-gradient-to-br from-purple-50 to-indigo-50 rounded-xl p-8 border border-purple-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-center">
                <div className="text-6xl mb-6">🌾</div>
                <h2 className="text-3xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors mb-4">
                  Soba
                </h2>
                <p className="text-xl text-gray-600 japanese-text mb-6">そば</p>
                <p className="text-gray-700 mb-6">
                  Fine buckwheat noodles, tradition of Edo (Tokyo). Refined and fragrant, 
                  they represent Japanese elegance and subtlety.
                </p>
                
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <h3 className="font-bold text-gray-900 mb-2">Main Chains:</h3>
                    <ul className="text-sm text-gray-600">
                      <li>• Fuji Soba - 富士そば</li>
                      <li>• Yudetaro - ゆで太郎</li>
                      <li>• Komoro Soba - 小諸そば</li>
                    </ul>
                  </div>
                  
                  <div className="bg-white rounded-lg p-4">
                    <h3 className="font-bold text-gray-900 mb-2">Characteristics:</h3>
                    <ul className="text-sm text-gray-600">
                      <li>• Fine and firm texture</li>
                      <li>• Subtle buckwheat flavor</li>
                      <li>• Edo (Tokyo) tradition</li>
                      <li>• Refined experience</li>
                    </ul>
                  </div>
                </div>
                
                <div className="mt-8">
                  <span className="bg-purple-100 text-purple-800 px-6 py-3 rounded-full font-semibold group-hover:bg-purple-200 transition-colors">
                    Explore Soba →
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Cultural Context */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Two Culinary Philosophies
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🍲 The Udon Spirit</h3>
              <p className="text-gray-700 mb-4">
                Originating from <strong>Kansai</strong> (Osaka, Kyoto), udon embodies the generosity 
                and conviviality of southern Japan. Thick and comforting, they 
                prioritize satisfaction and sharing.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Tradition of generosity</li>
                <li>• Chewy and satisfying texture</li>
                <li>• Rich and fragrant broth</li>
                <li>• Family conviviality</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-4">🌾 The Soba Soul</h3>
              <p className="text-gray-700 mb-4">
                <strong>Edo</strong> (Tokyo) tradition, soba represents elegance 
                and the pursuit of perfection. Fine and subtle, they prioritize 
                the purity of flavors and the present moment.
              </p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Edo refinement</li>
                <li>• Delicate buckwheat taste</li>
                <li>• Meditative experience</li>
                <li>• Elegant simplicity</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-12 bg-white rounded-xl p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
              Why this separation?
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl mb-3">🎯</div>
                <h4 className="font-bold text-gray-900 mb-2">Specialization</h4>
                <p className="text-sm text-gray-600">
                  Each tradition deserves its own in-depth exploration
                </p>
              </div>
              <div>
                <div className="text-3xl mb-3">🏛️</div>
                <h4 className="font-bold text-gray-900 mb-2">Cultural Context</h4>
                <p className="text-sm text-gray-600">
                  Understanding the distinct regional and philosophical origins
                </p>
              </div>
              <div>
                <div className="text-3xl mb-3">🎨</div>
                <h4 className="font-bold text-gray-900 mb-2">Unique Experience</h4>
                <p className="text-sm text-gray-600">
                  Discovering nuances between two Japanese culinary arts
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to explore Japan's noodle traditions?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Choose your path: the generosity of Udon or the elegance of Soba
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/food-type/udon"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              🍲 Discover Udon
            </Link>
            <Link 
              href="/food-type/soba"
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              🌾 Explore Soba
            </Link>
          </div>
          <div className="mt-6">
            <Link 
              href="/food-type"
              className="text-gray-400 hover:text-white transition-colors"
            >
              ← Back to food types
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
