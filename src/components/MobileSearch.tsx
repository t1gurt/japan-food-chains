'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { Search, X, MapPin, Utensils } from 'lucide-react';

const foodTypes = [
  { id: 'ramen', name: 'Ramen', href: '/food-type/ramen' },
  { id: 'gyudon', name: 'Gyudon', href: '/food-type/gyudon' },
  { id: 'kaiten-zushi', name: 'Kaiten-zushi', href: '/food-type/kaiten-zushi' },
  { id: 'yakiniku', name: 'Yakiniku', href: '/food-type/yakiniku' },
  { id: 'udon', name: 'Udon', href: '/food-type/udon' },
  { id: 'soba', name: 'Soba', href: '/food-type/soba' },
];

const chains = [
  { id: 'yoshinoya', name: 'Yoshinoya', japanese: '吉野家', description: 'Famous for beef bowls' },
  { id: 'ichiran', name: 'Ichiran', japanese: '一蘭', description: 'Tonkotsu ramen specialty' },
  { id: 'sushiro', name: 'Sushiro', japanese: 'スシロー', description: 'Kaiten-zushi chain' },
];

interface SearchResult {
  type: 'chain' | 'food-type';
  id: string;
  name: string;
  href: string;
  description?: string;
}

export default function MobileSearch() {
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
      .slice(0, 5)
      .map(food => ({
        type: 'food-type' as const,
        id: food.id,
        name: food.name,
        href: food.href
      }));

    setResults([...foodTypeResults, ...chainResults]);
  };

  useEffect(() => {
    if (query.trim()) {
      performSearch(query);
    } else {
      setResults([]);
    }
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

  return (
    <>
      {!isOpen && (
        <button
          onClick={handleOpen}
          className="w-full bg-gray-100 hover:bg-gray-200 rounded-lg px-4 py-3 flex items-center space-x-3 transition-colors"
        >
          <Search className="w-5 h-5 text-gray-500" />
          <span className="text-gray-500">Search chains and food types...</span>
        </button>
      )}

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-start justify-center pt-4">
          <div className="bg-white w-full max-w-lg mx-4 rounded-lg shadow-xl max-h-[90vh] flex flex-col">
            <div className="p-4 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <Search className="w-5 h-5 text-gray-400" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search chains and food types..."
                  className="flex-1 outline-none text-gray-900"
                  autoComplete="off"
                />
                <button
                  onClick={handleClose}
                  className="p-1 hover:bg-gray-100 rounded"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              {results.length > 0 ? (
                <div className="p-2">
                  {results.map((result) => (
                    <div key={`${result.type}-${result.id}`} className="mb-2">
                      <Link
                        href={result.href}
                        onClick={handleClose}
                        className="block p-3 hover:bg-gray-50 rounded-lg border border-gray-100"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="flex-shrink-0">
                            {result.type === 'food-type' ? (
                              <MapPin className="w-5 h-5 text-red-500" />
                            ) : (
                              <Utensils className="w-5 h-5 text-orange-500" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <h3 className="text-sm font-medium text-gray-900 truncate">
                                {result.name}
                              </h3>
                              <span className="text-xs text-gray-500 ml-2">
                                {result.type === 'food-type' ? 'Food Type' : 'Chain'}
                              </span>
                            </div>
                            {result.description && (
                              <p className="text-xs text-gray-600 mt-1 truncate">
                                {result.description}
                              </p>
                            )}
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              ) : query.trim() ? (
                <div className="p-8 text-center">
                  <p className="text-gray-500">No results found for "{query}"</p>
                </div>
              ) : (
                <div className="p-4 space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">
                      Popular Food Types
                    </h3>
                    <div className="space-y-1">
                      {[
                        { name: 'Ramen', href: '/food-type/ramen' },
                        { name: 'Gyudon', href: '/food-type/gyudon' },
                        { name: 'Kaiten-zushi', href: '/food-type/kaiten-zushi' },
                      ].map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={handleClose}
                          className="block p-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900 mb-2">
                      Popular Chains
                    </h3>
                    <div className="space-y-1">
                      {[
                        { name: 'Yoshinoya', href: '/chains/yoshinoya' },
                        { name: 'Ichiran', href: '/chains/ichiran' },
                        { name: 'Sushiro', href: '/chains/sushiro' },
                      ].map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          onClick={handleClose}
                          className="block p-2 text-sm text-gray-700 hover:bg-gray-50 rounded group"
                        >
                          <div className="flex items-center justify-between">
                            <span>{item.name}</span>
                            <MapPin className="w-4 h-4 text-red-500 flex-shrink-0" />
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
