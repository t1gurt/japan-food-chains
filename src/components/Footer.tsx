import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <span className="text-xl font-bold text-red-400">🍜 Japan Food Chains</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Your complete guide to Japanese restaurant chains. 
              Discover, order, and enjoy Japanese cuisine with confidence.
            </p>
          </div>

          {/* Quick navigation */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/chains" className="text-gray-300 hover:text-white transition-colors">
                  All chains
                </Link>
              </li>
              <li>
                <Link href="/food-type" className="text-gray-300 hover:text-white transition-colors">
                  By dish type
                </Link>
              </li>
              <li>
                <Link href="/guides" className="text-gray-300 hover:text-white transition-colors">
                  Practical guides
                </Link>
              </li>
              <li>
                <Link href="/guides/how-to-order" className="text-gray-300 hover:text-white transition-colors">
                  How to order
                </Link>
              </li>
            </ul>
          </div>

          {/* Guides and resources */}
          <div>
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link href="/guides/culture-and-etiquette" className="text-gray-300 hover:text-white transition-colors">
                  Culture & Etiquette
                </Link>
              </li>
              <li>
                <Link href="/guides/dietary-requirements" className="text-gray-300 hover:text-white transition-colors">
                  Dietary requirements
                </Link>
              </li>
              <li>
                <Link href="/guides/articles" className="text-gray-300 hover:text-white transition-colors">
                  Articles
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator line */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Japan Food Chains. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
