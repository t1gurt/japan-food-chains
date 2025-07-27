'use client';

import React from 'react';
import Link from 'next/link';

const guides = [
  {
    title: "How to Order",
    shortTitle: "Ordering",
    description: "Vending machines, touch screens and QR codes",
    icon: "🎫",
    href: "/guides/how-to-order",
    color: "bg-blue-50 border-blue-200"
  },
  {
    title: "Dietary Requirements",
    shortTitle: "Dietary",
    description: "Vegetarian, vegan, pork-free, allergies",
    icon: "🥗",
    href: "/guides/dietary-requirements",
    color: "bg-green-50 border-green-200"
  },
  {
    title: "Culture & Etiquette",
    shortTitle: "Etiquette",
    description: "Good manners and Japanese culture",
    icon: "🙏",
    href: "/guides/culture-and-etiquette",
    color: "bg-purple-50 border-purple-200"
  }
];

const MobileGuidesPreview: React.FC = () => {
  return (
    <div className="md:hidden px-4 py-6">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">
        Practical Guides
      </h3>
      <div className="space-y-3">
        {guides.map((guide) => (
          <Link 
            key={guide.title}
            href={guide.href}
            className={`block p-4 rounded-lg border-2 hover:shadow-md transition-all ${guide.color}`}
          >
            <div className="flex items-start space-x-3">
              <div className="text-2xl">{guide.icon}</div>
              <div className="flex-1 min-w-0">
                <h4 className="font-semibold text-gray-900 text-sm mb-1">
                  {guide.shortTitle}
                </h4>
                <p className="text-xs text-gray-600 line-clamp-2">
                  {guide.description}
                </p>
              </div>
              <div className="text-gray-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="mt-4 text-center">
        <Link 
          href="/guides"
          className="text-red-600 text-sm font-medium hover:text-red-700"
        >
          View all guides →
        </Link>
      </div>
    </div>
  );
};

export default MobileGuidesPreview;
