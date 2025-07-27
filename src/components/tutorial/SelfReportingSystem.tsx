/**
 * Self-Reporting System Component
 * Self-reporting and verification functionality for restaurant visits
 */

'use client';

import React, { useState, useEffect } from 'react';
import { useSelfReporting } from '../../hooks/tutorial/useSelfReporting';
import { chains } from '../../data/tutorial/chains';
import { VisitedStore } from '../../types/tutorial';

interface SelfReportingSystemProps {
  className?: string;
}

export const SelfReportingSystem: React.FC<SelfReportingSystemProps> = ({ className = '' }) => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  const {
    reports,
    pendingReports,
    verifiedReports,
    submitReport,
    getReportsByChain,
    getRecentReports,
    getTotalVisits,
    getUniqueChains,
    getVisitStreak
  } = useSelfReporting();

  const [selectedChain, setSelectedChain] = useState('');
  const [visitDate, setVisitDate] = useState('');

  // Set date only on client side
  useEffect(() => {
    if (isClient) {
      setVisitDate(new Date().toISOString().split('T')[0]);
    }
  }, [isClient]);

  // Show loading on non-client side
  if (!isClient) {
    return (
      <div className={`bg-white rounded-lg shadow-lg p-8 ${className}`}>
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/2 mb-6"></div>
          <div className="space-y-4">
            <div className="h-10 bg-gray-200 rounded"></div>
            <div className="h-10 bg-gray-200 rounded"></div>
            <div className="h-20 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }
  const [notes, setNotes] = useState('');
  const [photo, setPhoto] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showRecentReports, setShowRecentReports] = useState(true);

  const recentReports = getRecentReports(5);
  const totalVisits = getTotalVisits();
  const uniqueChains = getUniqueChains();
  const visitStreak = getVisitStreak();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedChain) return;

    setIsSubmitting(true);
    try {
      // Simplified report submission
      await submitReport({
        chainId: selectedChain,
        visitDate: visitDate
      });
      
      // Reset form
      setSelectedChain('');
      setVisitDate(new Date().toISOString().split('T')[0]);
      setNotes('');
      setPhoto(null);
      
      alert('✅ Visit report successfully recorded!');
    } catch (error) {
      console.error('Error during submission:', error);
      alert('❌ Error during recording. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handlePhotoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Size check (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        alert('Photo must not exceed 5MB');
        return;
      }
      
      // Type check
      if (!file.type.startsWith('image/')) {
        alert('Please select an image');
        return;
      }
      
      setPhoto(file);
    }
  };

  return (
    <div className={`space-y-6 ${className}`}>
      {/* System Header */}
      <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-lg shadow-lg p-6 text-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-2">🍽️ Self-Reporting System</h2>
          <p className="text-green-100 mb-4">
            Share your visits to Japanese restaurant chains and earn experience points!
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold">{totalVisits}</div>
              <div className="text-xs text-green-100">Total visits</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{uniqueChains}</div>
              <div className="text-xs text-green-100">Chains visited</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{visitStreak}</div>
              <div className="text-xs text-green-100">Current streak</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold">{verifiedReports.length}</div>
              <div className="text-xs text-green-100">Verified visits</div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-6">
        {/* Report Form */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">📝 Report a Visit</h3>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Chain Selection */}
            <div>
              <label htmlFor="chain" className="block text-sm font-medium text-gray-700 mb-1">
                Restaurant chain visited *
              </label>
              <select
                id="chain"
                value={selectedChain}
                onChange={(e) => setSelectedChain(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select a chain...</option>
                {chains.map((chain) => (
                  <option key={chain.id} value={chain.id}>
                    {chain.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Visit Date */}
            <div>
              <label htmlFor="visitDate" className="block text-sm font-medium text-gray-700 mb-1">
                Visit date *
              </label>
              <input
                type="date"
                id="visitDate"
                value={visitDate}
                onChange={(e) => setVisitDate(e.target.value)}
                max={new Date().toISOString().split('T')[0]}
                required
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            {/* Notes */}
            <div>
              <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
                Notes about your experience (optional)
              </label>
              <textarea
                id="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Share your experience: dishes tried, impressions, recommendations..."
                rows={3}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
            </div>

            {/* Photo */}
            <div>
              <label htmlFor="photo" className="block text-sm font-medium text-gray-700 mb-1">
                Photo from your visit (optional)
              </label>
              <input
                type="file"
                id="photo"
                accept="image/*"
                onChange={handlePhotoChange}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              {photo && (
                <p className="text-sm text-green-600 mt-1">
                  ✅ Photo selected: {photo.name}
                </p>
              )}
            </div>

            {/* Important Information */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h4 className="font-medium text-blue-900 mb-2">💡 Trust-Based System</h4>
              <ul className="text-sm text-blue-800 space-y-1">
                <li>• Your reports are automatically recorded</li>
                <li>• Be honest to maintain system integrity</li>
                <li>• Each visit earns you experience points</li>
                <li>• Photos and notes help verify authenticity</li>
              </ul>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || !selectedChain}
              className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
                isSubmitting || !selectedChain
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-green-600 text-white hover:bg-green-700'
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Recording...
                </span>
              ) : (
                'Report this visit'
              )}
            </button>
          </form>
        </div>

        {/* Recent Reports */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900">📊 Recent Activity</h3>
          </div>

          <div className="text-center py-6">
            <div className="text-3xl mb-2">📝</div>
            <p className="text-gray-600">Reporting system in development.</p>
            <p className="text-sm text-gray-500">Visit reports will be available soon!</p>
          </div>

          {/* Encouragement */}
          <div className="mt-6 p-4 bg-gradient-to-r from-orange-100 to-red-100 rounded-lg">
            <h4 className="font-medium text-orange-900 mb-2">🎯 Keep exploring!</h4>
            <p className="text-sm text-orange-800">
              There are {chains.length - uniqueChains} chains left to discover. 
              Each new visit brings you closer to expert status!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
