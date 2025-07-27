/**
 * Badge display component
 * Displays earned badges, in-progress badges, and badge details
 */

'use client';

import React, { useState, useEffect } from 'react';
import { useBadgeSystem } from '../../hooks/tutorial/useBadgeSystem';
import { Badge, BadgeCategory, BadgeRarity } from '../../types/tutorial';

interface BadgeDisplayProps {
  className?: string;
}

export const BadgeDisplay: React.FC<BadgeDisplayProps> = ({ className = '' }) => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  const {
    earnedBadges,
    availableBadges,
    badgeStatsByCategory,
    badgeStatsByRarity,
    getFilteredBadges,
    getUpcomingBadges,
    getBadgeDetails,
    getCollectionCompleteness,
    badgeCategories
  } = useBadgeSystem();

  const [selectedCategory, setSelectedCategory] = useState<BadgeCategory | 'all'>('all');
  const [selectedRarity, setSelectedRarity] = useState<BadgeRarity | 'all'>('all');
  const [showOnlyEarned, setShowOnlyEarned] = useState(false);

  // Handle case when useBadgeSystem hook data is not available
  if (!badgeCategories || Object.keys(badgeCategories).length === 0) {
    return (
      <div className={`bg-white rounded-lg shadow-lg p-8 ${className}`}>
        <div className="text-center">
          <div className="text-4xl mb-4">🎯</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Badge System Loading...</h3>
          <p className="text-gray-600">The badge system is being initialized.</p>
        </div>
      </div>
    );
  }

  // Show loading when not on client side
  if (!isClient) {
    return (
      <div className={`bg-white rounded-lg shadow-lg p-8 ${className}`}>
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/3 mb-6"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="h-32 bg-gray-200 rounded-lg"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  const [selectedBadge, setSelectedBadge] = useState<string | null>(null);

  const collectionStats = getCollectionCompleteness();
  const upcomingBadges = getUpcomingBadges();

  // Filtered badges
  const filteredBadges = getFilteredBadges(
    selectedCategory === 'all' ? undefined : selectedCategory,
    selectedRarity === 'all' ? undefined : selectedRarity,
    showOnlyEarned
  );

  // Color class based on badge rarity
  const getRarityColorClass = (rarity: BadgeRarity) => {
    switch (rarity) {
      case 'common':
        return 'border-gray-300 bg-gray-50';
      case 'rare':
        return 'border-blue-300 bg-blue-50';
      case 'legendary':
        return 'border-yellow-300 bg-yellow-50';
      default:
        return 'border-gray-300 bg-gray-50';
    }
  };

  // Category icon
  const getCategoryIcon = (category: BadgeCategory) => {
    const categoryInfo = badgeCategories[category];
    return categoryInfo?.icon || '🏅';
  };

  if (typeof collectionStats === 'number') {
    return (
      <div className={`bg-white rounded-lg shadow-lg p-8 ${className}`}>
        <div className="text-center">
          <div className="text-4xl mb-4">🎯</div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Start Your Collection!</h3>
          <p className="text-gray-600">Complete your first lesson to unlock your first badges.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Collection header */}
      <div className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg shadow-lg p-6 text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">🏆 Badge Collection</h2>
          <p className="text-yellow-100 mb-4">
            Discover and collect all badges by learning and visiting restaurants!
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold">{collectionStats.earned}</div>
              <div className="text-xs text-yellow-100">Badges earned</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{collectionStats.total}</div>
              <div className="text-xs text-yellow-100">Total available</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{collectionStats.percentage}%</div>
              <div className="text-xs text-yellow-100">Completed</div>
            </div>
            <div>
              <div className="text-2xl font-bold">{collectionStats.remaining}</div>
              <div className="text-xs text-yellow-100">Remaining</div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-4">
            <div className="bg-white/20 rounded-full h-2">
              <div 
                className="bg-white rounded-full h-2 transition-all duration-500"
                style={{ width: `${collectionStats.percentage}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Statistics by category */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">📊 Progress by Category</h3>
        
        <div className="grid md:grid-cols-5 gap-4">
          {Object.entries(badgeStatsByCategory).map(([category, stats]) => {
            const categoryInfo = badgeCategories[category as BadgeCategory];
            const categoryStats = stats as { earned: number; total: number; percentage: number };
            return (
              <div key={category} className="text-center">
                <div className="text-2xl mb-2">{getCategoryIcon(category as BadgeCategory)}</div>
                <h4 className="font-medium text-sm text-gray-900">{categoryInfo?.name}</h4>
                <p className="text-xs text-gray-600 mb-2">{categoryStats.earned}/{categoryStats.total}</p>
                <div className="bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 rounded-full h-2 transition-all duration-500"
                    style={{ width: `${categoryStats.percentage}%` }}
                  />
                </div>
                <p className="text-xs text-gray-500 mt-1">{categoryStats.percentage}%</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Upcoming badges to unlock */}
      {upcomingBadges.length > 0 && (
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">🎯 Next Badges to Unlock</h3>
          
          <div className="space-y-4">
            {upcomingBadges.map((upcoming: any, index) => (
              <div key={upcoming.badge.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex items-center space-x-4">
                  <div className="text-3xl opacity-50">{upcoming.badge.icon}</div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">{upcoming.badge.name}</h4>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        upcoming.isClose ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-600'
                      }`}>
                        {upcoming.isClose ? 'Almost there!' : 'In progress'}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">{upcoming.badge.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{upcoming.progressText}</span>
                      <div className="flex-1 mx-4">
                        <div className="bg-gray-200 rounded-full h-2">
                          <div 
                            className={`rounded-full h-2 transition-all duration-500 ${
                              upcoming.isClose ? 'bg-green-500' : 'bg-blue-600'
                            }`}
                            style={{ width: `${upcoming.progress}%` }}
                          />
                        </div>
                      </div>
                      <span className="text-xs font-medium">{upcoming.progress}%</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="bg-white rounded-lg shadow-lg p-6">
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div>
            <label className="text-sm font-medium text-gray-700 mr-2">Category:</label>
            <select 
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as BadgeCategory | 'all')}
              className="border border-gray-300 rounded px-3 py-1 text-sm"
            >
              <option value="all">All</option>
              {Object.entries(badgeCategories).map(([key, category]) => (
                <option key={key} value={key}>
                  {(category as any).icon} {(category as any).name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mr-2">Rarity:</label>
            <select 
              value={selectedRarity}
              onChange={(e) => setSelectedRarity(e.target.value as BadgeRarity | 'all')}
              className="border border-gray-300 rounded px-3 py-1 text-sm"
            >
              <option value="all">All</option>
              <option value="common">🥉 Common</option>
              <option value="rare">🥈 Rare</option>
              <option value="legendary">🥇 Legendary</option>
            </select>
          </div>

          <div className="flex items-center">
            <input 
              type="checkbox" 
              id="onlyEarned"
              checked={showOnlyEarned}
              onChange={(e) => setShowOnlyEarned(e.target.checked)}
              className="mr-2"
            />
            <label htmlFor="onlyEarned" className="text-sm text-gray-700">
              Only earned badges
            </label>
          </div>
        </div>

        {/* Badge grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {filteredBadges.map((badge: any) => {
            const isEarned = 'earnedAt' in badge;
            const badgeDetails = getBadgeDetails(badge.id);
            const earnedBadge = isEarned ? badge as Badge & { earnedAt: string } : null;
            
            return (
              <div
                key={badge.id}
                className={`relative border-2 rounded-lg p-4 cursor-pointer transition-all hover:shadow-md ${
                  isEarned 
                    ? getRarityColorClass(badge.rarity)
                    : 'border-gray-200 bg-gray-50 opacity-60'
                }`}
                onClick={() => setSelectedBadge(selectedBadge === badge.id ? null : badge.id)}
              >
                <div className="text-center">
                  <div className={`text-3xl mb-2 ${!isEarned ? 'grayscale' : ''}`}>
                    {badge.icon}
                  </div>
                  <h4 className="font-medium text-xs text-gray-900 mb-1 line-clamp-2">
                    {badge.name}
                  </h4>
                  
                  {earnedBadge && (
                    <p className="text-xs text-green-600 font-medium">
                      ✓ {new Date(earnedBadge.earnedAt).toLocaleDateString()}
                    </p>
                  )}
                  
                  {!isEarned && (
                    <p className="text-xs text-gray-500">Not earned</p>
                  )}
                </div>

                {/* Rarity indicator */}
                <div className={`absolute top-2 right-2 w-3 h-3 rounded-full ${
                  badge.rarity === 'legendary' ? 'bg-yellow-400' :
                  badge.rarity === 'rare' ? 'bg-blue-400' : 'bg-gray-400'
                }`} />
              </div>
            );
          })}
        </div>

        {filteredBadges.length === 0 && (
          <div className="text-center py-8">
            <div className="text-4xl mb-2">🔍</div>
            <p className="text-gray-600">No badges found with these filters.</p>
          </div>
        )}
      </div>

      {/* Selected badge details */}
      {selectedBadge && (() => {
        const badgeDetails = getBadgeDetails(selectedBadge);
        if (!badgeDetails) return null;

        return (
          <div className="bg-white rounded-lg shadow-lg p-6 border border-blue-200">
            <div className="flex items-start space-x-4">
              <div className="text-5xl">{badgeDetails.icon}</div>
              <div className="flex-1">
                <div className="flex items-center space-x-2 mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{badgeDetails.name}</h3>
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    badgeDetails.rarity === 'legendary' ? 'bg-yellow-100 text-yellow-800' :
                    badgeDetails.rarity === 'rare' ? 'bg-blue-100 text-blue-800' :
                    'bg-gray-100 text-gray-800'
                  }`}>
                    {badgeDetails.rarityInfo.icon} {badgeDetails.rarityInfo.label}
                  </span>
                  <span className={`px-2 py-1 text-xs rounded-full ${badgeDetails.categoryColorClass}`}>
                    {getCategoryIcon(badgeDetails.category)} {badgeDetails.categoryInfo?.name}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-3">{badgeDetails.description}</p>
                
                {badgeDetails.requirements && (
                  <p className="text-sm text-blue-600 mb-2">
                    <strong>Requirements:</strong> {badgeDetails.requirements}
                  </p>
                )}
                
                {badgeDetails.isEarned && badgeDetails.earnedAt && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-3">
                    <p className="text-sm text-green-800">
                      ✅ <strong>Earned on:</strong> {new Date(badgeDetails.earnedAt).toLocaleDateString('en-US', {
                        weekday: 'long',
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                )}
                
                {!badgeDetails.isEarned && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-3">
                    <p className="text-sm text-blue-800">
                      🎯 <strong>How to earn:</strong> {badgeDetails.requirements || 'Continue your learning to unlock this badge!'}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
};
