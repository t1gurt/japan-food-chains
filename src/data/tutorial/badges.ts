// src/data/tutorial/badges.ts
import type { Badge, BadgeCategory, BadgeRarity } from '@/types/tutorial';

export const allBadges: Omit<Badge, 'earnedAt'>[] = [
  // Beginner Badges
  {
    id: 'maitre-baguettes',
    name: 'Chopsticks Master',
    description: 'You have mastered the art of using chopsticks correctly',
    icon: '🥢',
    category: 'manners',
    rarity: 'common',
    relatedChains: [],
    isRealVisitBadge: false,
  },
  {
    id: 'expert-ticket-machine',
    name: 'Ticket Machine Expert',
    description: 'You know how to use ticket machines like a pro',
    icon: '�',
    category: 'systems',
    rarity: 'common',
    relatedChains: ['matsuya', 'nakau'],
    isRealVisitBadge: false,
  },
  {
    id: 'decouvreur-gyudon',
    name: 'Gyūdon Discoverer',
    description: 'You know the basics of Japan\'s national dish',
    icon: '🍚',
    category: 'chains',
    rarity: 'common',
    relatedChains: ['yoshinoya', 'sukiya', 'matsuya'],
    isRealVisitBadge: false,
  },
  {
    id: 'amateur-ramen',
    name: 'Ramen Enthusiast',
    description: 'First approach to the complex world of ramen',
    icon: '🍜',
    category: 'chains',
    rarity: 'common',
    relatedChains: ['ichiran', 'ippudo'],
    isRealVisitBadge: false,
  },
  {
    id: 'initie-kaiten-zushi',
    name: 'Kaiten-Zushi Initiate',
    description: 'You understand the conveyor belt sushi system',
    icon: '🍣',
    category: 'systems',
    rarity: 'common',
    relatedChains: ['sushiro', 'kura-sushi'],
    isRealVisitBadge: false,
  },

  // Intermediate Badges
  {
    id: 'connaisseur-chaines',
    name: 'Chain Connoisseur',
    description: 'You can easily distinguish between different chains',
    icon: '🏪',
    category: 'chains',
    rarity: 'rare',
    relatedChains: [],
    isRealVisitBadge: false,
  },
  {
    id: 'maitre-tactile',
    name: 'Touch Screen Master',
    description: 'Expert at touch screen ordering systems',
    icon: '📱',
    category: 'systems',
    rarity: 'rare',
    relatedChains: ['gusto', 'saizeriya'],
    isRealVisitBadge: false,
  },
  {
    id: 'expert-family-restaurant',
    name: 'Family Restaurant Expert',
    description: 'Master of Japanese family restaurant etiquette',
    icon: '👨‍👩‍👧‍👦',
    category: 'chains',
    rarity: 'rare',
    relatedChains: ['gusto', 'saizeriya', 'jonathans'],
    isRealVisitBadge: false,
  },
  {
    id: 'specialiste-curry',
    name: 'Curry Specialist',
    description: 'You can navigate the world of Japanese curry',
    icon: '🍛',
    category: 'chains',
    rarity: 'rare',
    relatedChains: ['coco-ichibanya'],
    isRealVisitBadge: false,
  },
  {
    id: 'explorateur-saveurs',
    name: 'Flavor Explorer',
    description: 'Culinary adventurer who explores all tastes',
    icon: '👅',
    category: 'expert',
    rarity: 'rare',
    relatedChains: [],
    isRealVisitBadge: false,
  },

  // Advanced Badges
  {
    id: 'maitre-47-chaines',
    name: 'Master of 47 Chains',
    description: 'Encyclopedic knowledge of all chains',
    icon: '🎓',
    category: 'expert',
    rarity: 'legendary',
    relatedChains: [],
    isRealVisitBadge: false,
  },
  {
    id: 'expert-commande',
    name: 'Ordering Expert',
    description: 'Perfect mastery of all ordering systems',
    icon: '⚡',
    category: 'systems',
    rarity: 'legendary',
    relatedChains: [],
    isRealVisitBadge: false,
  },
  {
    id: 'stratege-culinaire',
    name: 'Culinary Strategist',
    description: 'Able to optimize any restaurant experience',
    icon: '🧠',
    category: 'expert',
    rarity: 'legendary',
    relatedChains: [],
    isRealVisitBadge: false,
  },
  {
    id: 'sensei-chaines',
    name: 'Chain Sensei',
    description: 'Mastery level worthy of teaching others',
    icon: '�',
    category: 'expert',
    rarity: 'legendary',
    relatedChains: [],
    isRealVisitBadge: false,
  },
  {
    id: 'ambassadeur-culturel',
    name: 'Cultural Ambassador',
    description: 'Deep understanding of Japanese food culture',
    icon: '🌟',
    category: 'expert',
    rarity: 'legendary',
    relatedChains: [],
    isRealVisitBadge: false,
  },

  // Real Visit Badges
  {
    id: 'vrai-visiteur',
    name: 'Real Visitor',
    description: 'First real visit to a Japanese restaurant',
    icon: '🏆',
    category: 'real_visit',
    rarity: 'rare',
    relatedChains: [],
    isRealVisitBadge: true,
  },
  {
    id: 'explorateur-reel',
    name: 'Real Explorer',
    description: 'Visited 5 different chains',
    icon: '🌟',
    category: 'real_visit',
    rarity: 'rare',
    relatedChains: [],
    isRealVisitBadge: true,
  },
  {
    id: 'conquerant-chaines',
    name: 'Chain Conqueror',
    description: 'Practical mastery of 10 chains',
    icon: '👑',
    category: 'real_visit',
    rarity: 'legendary',
    relatedChains: [],
    isRealVisitBadge: true,
  },
  {
    id: 'maitre-terrain',
    name: 'Field Master',
    description: 'Confirmed expert with 20 chains visited',
    icon: '🎌',
    category: 'real_visit',
    rarity: 'legendary',
    relatedChains: [],
    isRealVisitBadge: true,
  },
  {
    id: 'legende-vivante',
    name: 'Living Legend',
    description: 'Absolute legend with 30+ chains explored',
    icon: '🏯',
    category: 'real_visit',
    rarity: 'legendary',
    relatedChains: [],
    isRealVisitBadge: true,
  },
];

export const getBadgesByCategory = (category: BadgeCategory) => {
  return allBadges.filter(badge => badge.category === category);
};

export const getBadgesByRarity = (rarity: BadgeRarity) => {
  return allBadges.filter(badge => badge.rarity === rarity);
};

export const getRealVisitBadges = () => {
  return allBadges.filter(badge => badge.isRealVisitBadge);
};

export const getBadgeById = (id: string) => {
  return allBadges.find(badge => badge.id === id);
};