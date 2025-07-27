import { Metadata } from 'next';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'All Japanese Restaurant Chains | Complete Guide',
    description: 'Discover all Japanese restaurant chains with our complete guide. 46 chains referenced with menus, prices, and ordering tips for English-speaking travelers.',
    keywords: [
      'Japanese restaurant chains',
      'yoshinoya', 'sukiya', 'matsuya', 
      'sushiro', 'kura sushi', 'hama sushi',
      'ichiran', 'ippudo', 'tenkaippin',
      'coco ichibanya', 'go go curry',
      'ootoya', 'tenya', 'gyukaku', 'futago',
      'isomaru suisan', 'izakaya', 'seafood',
      'premium yakiniku', 'hasami-deru kalbi',
      'japan restaurant guide',
      'how to eat in japan',
      'cheap restaurants japan'
    ],
    openGraph: {
      title: 'All Japanese Restaurant Chains',
      description: 'Complete guide to 46 Japanese restaurant chains with menus and practical tips',
      type: 'website',
      url: '/chains',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'All Japanese Restaurant Chains',
      description: 'Complete guide to 46 Japanese restaurant chains',
    },
    alternates: {
      canonical: '/chains',
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
