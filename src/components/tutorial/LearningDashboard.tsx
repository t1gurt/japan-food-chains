/**
 * Learning Dashboard Component
 * Displays learning progress, statistics, and recommended actions
 */

'use client';

import React, { useState, useEffect } from 'react';
import { useLearningProgress } from '../../hooks/tutorial/useLearningProgress';
import { useBadgeSystem } from '../../hooks/tutorial/useBadgeSystem';
import { LearningLevel } from '../../types/tutorial';

interface LearningDashboardProps {
  className?: string;
}

export const LearningDashboard: React.FC<LearningDashboardProps> = ({ className = '' }) => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  const {
    profile,
    isLoading
  } = useLearningProgress();

  const {
    earnedBadges,
    badgeStatsByCategory,
    getRecentBadges,
    getCollectionCompleteness
  } = useBadgeSystem();

  const [selectedLevel, setSelectedLevel] = useState<LearningLevel>('debutant');

  // Not on client side or loading state
  if (!isClient || !profile) {
    return (
      <div className={`bg-white rounded-lg shadow-lg p-8 ${className}`}>
        <div className="animate-pulse">
          <div className="h-4 bg-gray-200 rounded w-3/4 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        </div>
      </div>
    );
  }

  const recentBadges = getRecentBadges(3);
  const collectionStats = getCollectionCompleteness();
  
  // Simplified calculated values
  const overallProgress = Math.round((profile.completedLessons.length / 10) * 100); // Assumption: 10 lessons
  const learningStats = {
    totalLessonsCompleted: profile.completedLessons.length,
    totalQuizzesPassed: Math.floor(profile.completedLessons.length * 0.8) // Assumption
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold mb-2">Hello, {profile.name}! 🎌</h2>
            <p className="text-blue-100">
              Level {profile.level} • {profile.totalPoints} points • {earnedBadges.length} badges
            </p>
          </div>
          <div className="text-right">
            <div className="text-3xl font-bold">{overallProgress}%</div>
            <div className="text-sm text-blue-100">Overall Progress</div>
          </div>
        </div>

        {/* Global Progress Bar */}
        <div className="mt-4">
          <div className="bg-white/20 rounded-full h-2">
            <div 
              className="bg-white rounded-full h-2 transition-all duration-500"
              style={{ width: `${overallProgress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Quick Statistics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <div className="text-2xl font-bold text-green-600">{learningStats?.totalLessonsCompleted || 0}</div>
          <div className="text-sm text-gray-600">Completed Lessons</div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <div className="text-2xl font-bold text-blue-600">{learningStats?.totalQuizzesPassed || 0}</div>
          <div className="text-sm text-gray-600">Passed Quizzes</div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <div className="text-2xl font-bold text-purple-600">{profile.realStoreVisits}</div>
          <div className="text-sm text-gray-600">Real Visits</div>
        </div>
        
        <div className="bg-white rounded-lg shadow p-4 text-center">
          <div className="text-2xl font-bold text-orange-600">{profile.currentStreak}</div>
          <div className="text-sm text-gray-600">Consecutive Days</div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Progress by Level */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">📚 Progress by Level</h3>
          
          {/* Level Selector */}
          <div className="flex space-x-2 mb-4">
            {(['debutant', 'intermediaire', 'avance'] as LearningLevel[]).map((level) => (
              <button
                key={level}
                onClick={() => setSelectedLevel(level)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  selectedLevel === level
                    ? 'bg-blue-100 text-blue-800'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                {level.charAt(0).toUpperCase() + level.slice(1)}
              </button>
            ))}
          </div>

          {/* Selected Level Details */}
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span>Progress</span>
                <span>{selectedLevel === profile.level ? overallProgress : 0}%</span>
              </div>
              <div className="bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-blue-600 rounded-full h-2 transition-all duration-500"
                  style={{ width: `${selectedLevel === profile.level ? overallProgress : 0}%` }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Completed Lessons</span>
                <div className="font-semibold">{selectedLevel === profile.level ? profile.completedLessons.length : 0}/10</div>
              </div>
              <div>
                <span className="text-gray-600">Estimated Time Remaining</span>
                <div className="font-semibold">{Math.max(0, 300 - (profile.completedLessons.length * 30))}min</div>
              </div>
            </div>
          </div>
        </div>

        {/* Recommended Next Steps */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">🎯 Next Steps</h3>
          
          <div className="text-center py-8">
            <div className="text-4xl mb-2">📚</div>
            <p className="text-gray-600 mb-4">Continue your learning with the next lessons!</p>
            <button className="text-sm bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              View Available Lessons
            </button>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Recent Badges */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">🏅 Recent Badges</h3>
          
          {recentBadges.length > 0 ? (
            <div className="space-y-3">
              {recentBadges.map((badge: any) => (
                <div key={badge.id} className="flex items-center space-x-3">
                  <div className="text-2xl">{badge.icon}</div>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium text-sm text-gray-900 truncate">{badge.name}</div>
                    <div className="text-xs text-gray-500">
                      {new Date(badge.earnedAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              ))}
              
              <div className="pt-2 border-t border-gray-200">
                <div className="text-center">
                  <span className="text-sm text-gray-600">
                    {typeof collectionStats === 'object' ? (
                      `${collectionStats.earned}/${collectionStats.total} badges (${collectionStats.percentage}%)`
                    ) : (
                      '0/0 badges (0%)'
                    )}
                  </span>
                </div>
              </div>
            </div>
          ) : (
            <div className="text-center py-4">
              <div className="text-3xl mb-2">🎯</div>
              <p className="text-sm text-gray-600">Complete your first lesson to earn your first badge!</p>
            </div>
          )}
        </div>

        {/* Next Goals */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">🎖️ Next Goals</h3>
          
          <div className="space-y-4">
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium">Complete 5 lessons</span>
                <span>{Math.min(100, Math.round((profile.completedLessons.length / 5) * 100))}%</span>
              </div>
              <div className="bg-gray-200 rounded-full h-2 mb-1">
                <div 
                  className="bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full h-2 transition-all duration-500"
                  style={{ width: `${Math.min(100, Math.round((profile.completedLessons.length / 5) * 100))}%` }}
                />
              </div>
              <p className="text-xs text-gray-600">Progress in your studies to unlock new content</p>
            </div>
            
            <div>
              <div className="flex justify-between text-sm mb-1">
                <span className="font-medium">Visit 3 restaurants</span>
                <span>{Math.min(100, Math.round((profile.realStoreVisits / 3) * 100))}%</span>
              </div>
              <div className="bg-gray-200 rounded-full h-2 mb-1">
                <div 
                  className="bg-gradient-to-r from-green-400 to-blue-500 rounded-full h-2 transition-all duration-500"
                  style={{ width: `${Math.min(100, Math.round((profile.realStoreVisits / 3) * 100))}%` }}
                />
              </div>
              <p className="text-xs text-gray-600">Put your knowledge into practice at real restaurants</p>
            </div>
          </div>
        </div>

        {/* Time Statistics */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">⏱️ Learning Time</h3>
          
          <div className="space-y-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">{profile.completedLessons.length * 30}min</div>
              <div className="text-sm text-gray-600">Total Study Time</div>
            </div>
            
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <span className="text-gray-600">Average per lesson</span>
                <div className="font-semibold">30min</div>
              </div>
              <div>
                <span className="text-gray-600">Efficiency</span>
                <div className="font-semibold text-green-600">Excellent</div>
              </div>
            </div>

            <div className="pt-2 border-t border-gray-200">
              <p className="text-xs text-gray-500 text-center">
                Keep up this pace to maintain good progress!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg shadow-lg p-6 text-white text-center">
        <h3 className="text-xl font-bold mb-2">🚀 Continue Your Learning!</h3>
        <p className="mb-4 text-green-100">
          Each lesson brings you closer to mastering Japanese food culture.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button className="bg-white text-green-600 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors">
            Continue Learning
          </button>
          <button className="bg-green-400 text-white px-6 py-2 rounded-lg font-medium hover:bg-green-500 transition-colors">
            Report a Visit
          </button>
        </div>
      </div>
    </div>
  );
};
