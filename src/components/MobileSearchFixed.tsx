'use client';

import { useState, useEffect, useRef } from 'react';
import { Search, ArrowRight, ExternalLink } from 'lucide-react';
import { restaurantChains } from '@/data/site-data';

interface SearchResult {
  type: 'chain' | 'category';
  label: string;
  url: string;
  subtitle?: string;
}

const searchOptions: SearchResult[] = [
  // Chains
  ...restaurantChains.map(chain => ({
    type: 'chain' as const,
    label: chain.charAt(0).toUpperCase() + chain.slice(1).replace(/-/g, ' '),
    url: `/chains/${chain}`,
    subtitle: 'Restaurant chain'
  })),
  
  // Categories
  { type: 'category', label: 'Gyudon 牛丼', url: '/food-type/gyudon', subtitle: 'Beef bowl chains' },
  { type: 'category', label: 'Ramen ラーメン', url: '/food-type/ramen', subtitle: 'Noodle soup chains' },
  { type: 'category', label: 'Kaiten-zushi 回転寿司', url: '/food-type/kaiten-zushi', subtitle: 'Conveyor belt sushi' },
  { type: 'category', label: 'Udon うどん', url: '/food-type/udon', subtitle: 'Thick wheat noodles' },
  { type: 'category', label: 'Tempura 天ぷら', url: '/food-type/tempura', subtitle: 'Deep-fried dishes' },
  { type: 'category', label: 'Yakiniku 焼肉', url: '/food-type/yakiniku', subtitle: 'Grilled meat' },
];

export default function MobileSearch() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (query.trim()) {
      const filtered = searchOptions.filter(option =>
        option.label.toLowerCase().includes(query.toLowerCase()) ||
        (option.subtitle && option.subtitle.toLowerCase().includes(query.toLowerCase()))
      );
      setResults(filtered.slice(0, 8));
    } else {
      setResults([]);
    }
  }, [query]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    setQuery('');
    setResults([]);
  };

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-2 w-full px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-600 text-sm hover:border-gray-300 transition-colors"
      >
        <Search className="w-4 h-4" />
        <span>Search chains or categories...</span>
      </button>
    );
  }

  return (
    <div className="fixed inset-0 bg-black/50 z-50 md:hidden">
      <div className="bg-white h-full flex flex-col">
        {/* Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search chains or categories..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              onClick={handleClose}
              className="px-4 py-3 text-blue-600 font-medium"
            >
              Cancel
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="flex-1 overflow-y-auto">
          {query.trim() && results.length === 0 && (
            <div className="p-4 text-center text-gray-500">
              No results found for "{query}"
            </div>
          )}
          
          {results.length > 0 && (
            <div className="divide-y divide-gray-100">
              {results.map((result, index) => (
                <a
                  key={index}
                  href={result.url}
                  onClick={handleClose}
                  className="flex items-center justify-between p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-gray-900">
                        {result.label}
                      </span>
                      {result.type === 'category' && (
                        <span className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full">
                          Category
                        </span>
                      )}
                    </div>
                    {result.subtitle && (
                      <p className="text-sm text-gray-500 mt-1">
                        {result.subtitle}
                      </p>
                    )}
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400" />
                </a>
              ))}
            </div>
          )}

          {query.trim() === '' && (
            <div className="p-4">
              <h3 className="font-medium text-gray-900 mb-3">Popular searches</h3>
              <div className="space-y-2">
                {searchOptions.slice(0, 6).map((option, index) => (
                  <a
                    key={index}
                    href={option.url}
                    onClick={handleClose}
                    className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <div>
                      <div className="font-medium text-gray-900">{option.label}</div>
                      {option.subtitle && (
                        <div className="text-sm text-gray-500">{option.subtitle}</div>
                      )}
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400" />
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
