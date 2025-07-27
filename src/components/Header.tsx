'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const isActivePath = (path: string) => {
    if (path === '/' && pathname === '/') return true;
    if (path !== '/' && pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <nav className="bg-white shadow-sm border-b hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-red-600">🍜 Japan Food Chains</span>
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link 
              href="/tutorial" 
              className={`transition-colors ${
                isActivePath('/tutorial') 
                  ? 'text-red-600 font-medium' 
                  : 'text-gray-700 hover:text-red-600'
              }`}
            >
              🎓 Tutorial
            </Link>
            <Link 
              href="/type-plat" 
              className={`transition-colors ${
                isActivePath('/type-plat') 
                  ? 'text-red-600 font-medium' 
                  : 'text-gray-700 hover:text-red-600'
              }`}
            >
              By Dish Type
            </Link>
            <Link 
              href="/chains" 
              className={`transition-colors ${
                isActivePath('/chains') 
                  ? 'text-red-600 font-medium' 
                  : 'text-gray-700 hover:text-red-600'
              }`}
            >
              By Chain A-Z
            </Link>
            <Link 
              href="/guides" 
              className={`transition-colors ${
                isActivePath('/guides') 
                  ? 'text-red-600 font-medium' 
                  : 'text-gray-700 hover:text-red-600'
              }`}
            >
              Practical Guides
            </Link>
            <Link 
              href="/about" 
              className={`transition-colors ${
                isActivePath('/about') 
                  ? 'text-red-600 font-medium' 
                  : 'text-gray-700 hover:text-red-600'
              }`}
            >
              About
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
