'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Search, X, MapPin, Utensils } from 'lucide-react';
import { chains } from '../data/tutorial/chains';

interface SearchResult {
  type: 'chain' | 'food-type';
  id: string;
  name: string;
  href: string;
  description?: string;
}

export default function MobileSearch() {
  const foodTypes = [
    { id: 'gyudon', name: 'Gyudon', href: '/food-type/gyudon' },
    { id: 'ramen', name: 'Ramen', href: '/food-type/ramen' },
    { id: 'sushi', name: 'Sushi', href: '/food-type/kaiten-zushi' },
    { id: 'udon', name: 'Udon', href: '/food-type/udon' },
    { id: 'tempura', name: 'Tempura', href: '/food-type/tempura' },
    { id: 'yakiniku', name: 'Yakiniku', href: '/food-type/yakiniku' },
    { id: 'teishoku', name: 'Teishoku', href: '/food-type/teishoku' },
    { id: 'curry', name: 'Curry', href: '/food-type/curry' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const performSearch = (searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([]);
      return;
    }

    const chainResults = chains
      .filter(chain => 
        chain.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        chain.japanese?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        chain.description?.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .slice(0, 5)
      .map(chain => ({
        type: 'chain' as const,
        id: chain.id,
        name: chain.name,
        href: `/chains/${chain.id}`,
        description: chain.description
      }));

    const foodTypeResults = foodTypes
      .filter(food => 
        food.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
      .slice(0, 3)
      .map(food => ({
        type: 'food-type' as const,
        id: food.id,
        name: food.name,
        href: food.href
      }));

    setResults([...foodTypeResults, ...chainResults]);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      performSearch(query);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  const handleOpen = () => {
    setIsOpen(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 100);
  };

  const handleClose = () => {
    setIsOpen(false);
    setQuery('');
    setResults([]);
  };

  const handleResultClick = () => {
    handleClose();
  };

  return (
    <>
      {/* Search Button */}
      <button
        onClick={handleOpen}
        className="flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-200"
        aria-label="Search restaurants"
      >
        <Search className="w-5 h-5 text-gray-600" />
      </button>

      {/* Search Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="bg-white h-full flex flex-col">
            {/* Header */}
            <div className="flex items-center p-4 border-b border-gray-200">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search chains or food types..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
              </div>
              <button
                onClick={handleClose}
                className="ml-3 p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>

            {/* Results */}
            <div className="flex-1 overflow-auto p-4">
              {query.trim() && results.length === 0 && (
                <div className="text-center py-8 text-gray-500">
                  <Search className="w-12 h-12 mx-auto mb-3 text-gray-300" />
                  <p>No results found for "{query}"</p>
                </div>
              )}

              {results.length > 0 && (
                <div className="space-y-3">
                  {results.map((result) => (
                    <Link
                      key={`${result.type}-${result.id}`}
                      href={result.href}
                      onClick={handleResultClick}
                      className="block p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div className="flex items-start space-x-3">
                        <div className="flex-shrink-0 mt-1">
                          {result.type === 'chain' ? (
                            <MapPin className="w-5 h-5 text-red-500" />
                          ) : (
                            <Utensils className="w-5 h-5 text-orange-500" />
                          )}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-900 mb-1">
                            {result.name}
                          </h3>
                          {result.description && (
                            <p className="text-sm text-gray-600 line-clamp-2">
                              {result.description}
                            </p>
                          )}
                          <span className="text-xs text-gray-500 capitalize">
                            {result.type === 'food-type' ? 'Food Type' : 'Chain'}
                          </span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              )}

              {!query.trim() && (
                <div className="space-y-6">
                  {/* Popular Categories */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Popular Food Types
                    </h3>
                    <div className="grid grid-cols-2 gap-3">
                      {foodTypes.slice(0, 4).map((food) => (
                        <Link
                          key={food.id}
                          href={food.href}
                          onClick={handleResultClick}
                          className="p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors text-center"
                        >
                          <div className="font-medium text-gray-900">
                            {food.name}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Popular Chains */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Popular Chains
                    </h3>
                    <div className="space-y-2">
                      {chains.slice(0, 5).map((chain) => (
                        <Link
                          key={chain.id}
                          href={`/chains/${chain.id}`}
                          onClick={handleResultClick}
                          className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                        >
                          <div className="flex items-center space-x-3">
                            <MapPin className="w-4 h-4 text-red-500 flex-shrink-0" />
                            <div>
                              <div className="font-medium text-gray-900">
                                {chain.name}
                              </div>
                              {chain.japanese && (
                                <div className="text-sm text-gray-600">
                                  {chain.japanese}
                                </div>
                              )}
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
