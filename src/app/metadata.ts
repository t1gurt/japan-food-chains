import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL('https://www.japanfoodchains.com'),
  title: {
    default: 'Japan Food Chains - Japanese Restaurant Chains Guide',
    template: '%s | Japan Food Chains'
  },
  description: 'Complete guide to Japanese restaurant chains in English. Discover the best Japanese restaurants, their specialties and how to order.',
  keywords: ['japanese restaurants', 'japanese chains', 'restaurant guide', 'japan', 'japanese cuisine'],
  authors: [{ name: 'Japan Food Chains' }],
  creator: 'Japan Food Chains',
  publisher: 'Japan Food Chains',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
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
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.japanfoodchains.com',
    title: 'Japan Food Chains - Japanese Restaurant Chains Guide',
    description: 'Complete guide to Japanese restaurant chains in English. Discover the best Japanese restaurants, their specialties and how to order.',
    siteName: 'Japan Food Chains',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Japan Food Chains - Japanese Restaurant Chains Guide',
    description: 'Complete guide to Japanese restaurant chains in English. Discover the best Japanese restaurants, their specialties and how to order.',
  },
  alternates: {
    canonical: 'https://www.japanfoodchains.com',
  },
};
