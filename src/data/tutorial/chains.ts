// src/data/tutorial/chains.ts

import { Chain } from '@/types/tutorial';

export const chains: Chain[] = [
  // Gyūdon chains (3 stores)
  {
    id: 'yoshinoya',
    name: 'Yoshinoya',
    japanese: '吉野家',
    category: 'gyudon',
    description: 'Symbol of gyūdon culture',
    difficulty: 'facile',
    features: ['Counter ordering', 'Fast service', 'Affordable prices'],
  },
  {
    id: 'sukiya',
    name: 'Sukiya',
    japanese: 'すき家',
    category: 'gyudon',
    description: 'Open 24/7 with customization options',
    difficulty: 'facile',
    features: ['Ticket machine', 'Varied menu', 'Open 24/7'],
  },
  {
    id: 'matsuya',
    name: 'Matsuya',
    japanese: '松屋',
    category: 'gyudon',
    description: 'Fusion with teishoku culture',
    difficulty: 'facile',
    features: ['Orange ticket machine', 'Set menus', 'Popular curry'],
  },

  // Ramen chains (3 stores)
  {
    id: 'ichiran',
    name: 'Ichiran',
    japanese: '一蘭',
    category: 'ramen',
    description: 'Tonkotsu ramen and personal experience',
    difficulty: 'moyen',
    features: ['Individual counter', 'Deep customization', 'Secret broth'],
  },
  {
    id: 'ippudo',
    name: 'Ippudo',
    japanese: '一風堂',
    category: 'ramen',
    description: 'Pioneer of modern tonkotsu',
    difficulty: 'moyen',
    features: ['Famous Shiromaru', 'Modern atmosphere', 'Kaedama available'],
  },
  {
    id: 'tenkaippin',
    name: 'Tenkaippin',
    japanese: '天下一品',
    category: 'ramen',
    description: 'Thick kotteri tradition',
    difficulty: 'moyen',
    features: ['Unique kotteri broth', 'Loyal fanbase', 'Vintage atmosphere'],
  },

  // Kaiten-zushi chains (3 stores)
  {
    id: 'sushiro',
    name: 'Sushiro',
    japanese: 'スシロー',
    category: 'kaiten-zushi',
    description: 'Industry leader with technological innovation',
    difficulty: 'moyen',
    features: ['Online reservation', 'Quality sushi', 'Fixed prices'],
  },
  {
    id: 'kura-sushi',
    name: 'Kura Sushi',
    japanese: 'くら寿司',
    category: 'kaiten-zushi',
    description: 'Additive-free concept',
    difficulty: 'moyen',
    features: ['Bikkurapon system', 'Preservative-free sushi', 'Advanced technology'],
  },
  {
    id: 'hama-sushi',
    name: 'Hama Sushi',
    japanese: 'はま寿司',
    category: 'kaiten-zushi',
    description: 'Cost-performance oriented',
    difficulty: 'facile',
    features: ['Very low prices', 'Touch ordering', 'Wide variety'],
  },

  // Curry chains (3 stores)
  {
    id: 'coco-ichibanya',
    name: 'CoCo Ichibanya',
    japanese: 'CoCo壱番屋',
    category: 'curry',
    description: 'King of Japanese curry',
    difficulty: 'facile',
    features: ['Spice levels 1-10', 'Numerous toppings', 'Adjustable portions'],
  },
  {
    id: 'go-go-curry',
    name: 'Go!Go!Curry',
    japanese: 'ゴーゴーカレー',
    category: 'curry',
    description: 'Authentic Kanazawa curry',
    difficulty: 'moyen',
    features: ['Kanazawa style', 'Thick sauce', 'Free cabbage'],
  },
  {
    id: 'sukiya-curry',
    name: 'Sukiya Curry',
    japanese: 'すき家カレー',
    category: 'curry',
    description: 'Evolution from gyūdon',
    difficulty: 'facile',
    features: ['Fusion curry', 'Affordable prices', 'Fast service'],
  },

  // Tempura/Tendon chains (2 stores)
  {
    id: 'tenya',
    name: 'Tenya',
    japanese: 'てんや',
    category: 'tempura',
    description: 'Affordable tendon chain',
    difficulty: 'facile',
    features: ['Reasonable prices', 'Fresh tempura', 'Fast service'],
  },
  {
    id: 'tsunahachi',
    name: 'Tsunahachi',
    japanese: 'つな八',
    category: 'tempura',
    description: 'Traditional master technique',
    difficulty: 'moyen',
    features: ['Ancestral tradition', 'Artisanal technique', 'Premium quality'],
  },

  // Udon chains (2 stores)
  {
    id: 'marugame-seimen',
    name: 'Marugame Seimen',
    japanese: '丸亀製麺',
    category: 'udon',
    description: 'Authentic Sanuki udon',
    difficulty: 'moyen',
    features: ['Made on-site', 'Fresh udon', 'Sanuki style'],
  },
  {
    id: 'hanamaru-udon',
    name: 'Hanamaru Udon',
    japanese: 'はなまるうどん',
    category: 'udon',
    description: 'Self-service pioneer',
    difficulty: 'facile',
    features: ['Self-service', 'Low prices', 'Varied tempura'],
  },

  // Soba chains (3 stores)
  {
    id: 'fuji-soba',
    name: 'Fuji Soba',
    japanese: '富士そば',
    category: 'soba',
    description: 'Representative of Tokyo standing soba',
    difficulty: 'facile',
    features: ['Ultra-fast service', 'Standing counter', 'Tokyo style'],
  },
  {
    id: 'yudetaro',
    name: 'Yudetaro',
    japanese: 'ゆで太郎',
    category: 'soba',
    description: 'Embodiment of modern soba culture',
    difficulty: 'facile',
    features: ['Modern soba', 'Efficient service', 'Affordable prices'],
  },
  {
    id: 'komoro-soba',
    name: 'Komoro Soba',
    japanese: '小諸そば',
    category: 'soba',
    description: 'Traditional Shinshu soba technique',
    difficulty: 'moyen',
    features: ['Shinshu tradition', 'Artisanal soba', 'Superior quality'],
  },

  // Family restaurants (4 stores)
  {
    id: 'saizeriya',
    name: 'Saizeriya',
    japanese: 'サイゼリヤ',
    category: 'family-restaurant',
    description: 'Phenomenal cost-performance',
    difficulty: 'facile',
    features: ['Italian cuisine', 'Very low prices', 'Photo menu'],
  },
  {
    id: 'gusto',
    name: 'Gusto',
    japanese: 'ガスト',
    category: 'family-restaurant',
    description: 'Japan\'s largest family restaurant',
    difficulty: 'facile',
    features: ['Varied menu', 'Order tablets', 'Drink bar'],
  },
  {
    id: 'jonathans',
    name: 'Jonathan\'s',
    japanese: 'ジョナサン',
    category: 'family-restaurant',
    description: 'Premium experience',
    difficulty: 'moyen',
    features: ['Premium quality', 'Attentive service', 'Chic atmosphere'],
  },
  {
    id: 'jolly-pasta',
    name: 'Jolly Pasta',
    japanese: 'ジョリーパスタ',
    category: 'family-restaurant',
    description: 'Italian pasta specialist',
    difficulty: 'facile',
    features: ['Italian pasta', 'Varied menu', 'Reasonable prices'],
  },

  // Japanese burgers (4 stores)
  {
    id: 'mos-burger',
    name: 'MOS Burger',
    japanese: 'モスバーガー',
    category: 'burger',
    description: 'Symbol of unique Japanese evolution',
    difficulty: 'facile',
    features: ['Japanese burger', 'Fresh ingredients', 'Unique style'],
  },
  {
    id: 'freshness-burger',
    name: 'Freshness Burger',
    japanese: 'フレッシュネスバーガー',
    category: 'burger',
    description: 'Premium-oriented',
    difficulty: 'moyen',
    features: ['Premium quality', 'Natural ingredients', 'Modern atmosphere'],
  },
  {
    id: 'lotteria',
    name: 'Lotteria',
    japanese: 'ロッテリア',
    category: 'burger',
    description: 'Japanese expansion of Korean origin',
    difficulty: 'facile',
    features: ['Unique style', 'Affordable prices', 'Local menu'],
  },
  {
    id: 'domdom',
    name: 'Dom Dom Burger',
    japanese: 'ドムドムバーガー',
    category: 'burger',
    description: 'Japan\'s first burger chain, resurrected phoenix',
    difficulty: 'moyen',
    features: ['Legendary history', 'Viral creative menus', 'Wabi-sabi culture'],
  },

  // Chinese cuisine (4 stores)
  {
    id: 'bamiyan',
    name: 'Bamiyan',
    japanese: 'バーミヤン',
    category: 'chinese',
    description: 'Family Chinese cuisine',
    difficulty: 'facile',
    features: ['Family menu', 'Affordable prices', 'Relaxed atmosphere'],
  },
  {
    id: 'hidakaya',
    name: 'Hidakaya',
    japanese: '日高屋',
    category: 'chinese',
    description: 'Popular gyoza and ramen',
    difficulty: 'facile',
    features: ['Famous gyoza', 'Chinese ramen', 'Popular prices'],
  },
  {
    id: 'gyoza-no-ohsho',
    name: 'Gyoza no Ohsho',
    japanese: '餃子の王将',
    category: 'chinese',
    description: 'Authentic Kansai origin',
    difficulty: 'moyen',
    features: ['Authentic gyoza', 'Kansai origin', 'Traditional technique'],
  },
  {
    id: 'ringer-hut',
    name: 'Ringer Hut',
    japanese: 'リンガーハット',
    category: 'chinese',
    description: 'Nagasaki champon specialist',
    difficulty: 'moyen',
    features: ['Nagasaki champon', 'Abundant vegetables', 'Special noodles'],
  },

  // Izakaya (4 stores)
  {
    id: 'torikizoku',
    name: 'Torikizoku',
    japanese: '鳥貴族',
    category: 'izakaya',
    description: 'Uniform pricing revolution',
    difficulty: 'moyen',
    features: ['Uniform pricing', 'Varied yakitori', 'Popular atmosphere'],
  },
  {
    id: 'kushikatsu-tanaka',
    name: 'Kushikatsu Tanaka',
    japanese: '串カツ田中',
    category: 'izakaya',
    description: 'Renowned Osaka kushikatsu',
    difficulty: 'moyen',
    features: ['Osaka kushikatsu', 'Special sauce', 'Typical atmosphere'],
  },
  {
    id: 'shirokiya',
    name: 'Shirokiya',
    japanese: '白木屋',
    category: 'izakaya',
    description: 'Representative of comprehensive izakaya',
    difficulty: 'moyen',
    features: ['Complete menu', 'Traditional atmosphere', 'Varied service'],
  },
  {
    id: 'watami',
    name: 'Watami',
    japanese: 'ワタミ',
    category: 'izakaya',
    description: 'Large group stability',
    difficulty: 'moyen',
    features: ['Major chain', 'Stable service', 'Extended menu'],
  },

  // Cafe/Coffee shops (3 stores)
  {
    id: 'komeda',
    name: 'Komeda Coffee',
    japanese: 'コメダ珈琲店',
    category: 'cafe',
    description: 'Kissaten culture heritage and morning service innovation',
    difficulty: 'facile',
    features: ['Morning service', 'Nostalgic atmosphere', 'Traditional coffee'],
  },
  {
    id: 'doutor',
    name: 'Doutor Coffee',
    japanese: 'ドトールコーヒー',
    category: 'cafe',
    description: 'Pioneer of Japanese coffee revolution and quality innovation',
    difficulty: 'facile',
    features: ['Quality coffee', 'Fast service', 'Reasonable prices'],
  },
  {
    id: 'hoshino',
    name: 'Hoshino Coffee',
    japanese: '星乃珈琲店',
    category: 'cafe',
    description: 'Showa nostalgia and traditional siphon coffee renaissance',
    difficulty: 'moyen',
    features: ['Siphon coffee', 'Showa atmosphere', 'Artisanal quality'],
  },

  // Street food (1 store)
  {
    id: 'gindako',
    name: 'Gindako',
    japanese: '銀だこ',
    category: 'street-food',
    description: 'Authentic Osaka takoyaki taste and craftsmanship demonstration',
    difficulty: 'facile',
    features: ['Osaka takoyaki', 'Live preparation', 'Artisanal technique'],
  },

  // Steak (1 store)
  {
    id: 'ikinari-steak',
    name: 'Ikinari Steak',
    japanese: 'いきなりステーキ',
    category: 'steak',
    description: 'Standing steak revolution',
    difficulty: 'moyen',
    features: ['Standing steak', 'Revolutionary concept', 'Quality meat'],
  },

  // Yakiniku (2 stores)
  {
    id: 'gyukaku',
    name: 'Gyukaku',
    japanese: '牛角',
    category: 'yakiniku',
    description: 'Representative of premium yakiniku chains',
    difficulty: 'moyen',
    features: ['Premium yakiniku', 'Selected meat', 'Quality service'],
  },
  {
    id: 'anan',
    name: 'Anan',
    japanese: '安安',
    category: 'yakiniku',
    description: 'Casual yakiniku chain focused on cost-performance',
    difficulty: 'facile',
    features: ['Affordable prices', 'Relaxed atmosphere', 'Good performance'],
  },

  // Karaoke (2 stores)
  {
    id: 'big-echo',
    name: 'Big Echo',
    japanese: 'ビッグエコー',
    category: 'karaoke',
    description: 'Japan\'s largest karaoke chain with modern equipment and comfortable environment',
    difficulty: 'facile',
    features: ['Modern equipment', 'Various room types', 'Excellent service'],
  },
  {
    id: 'karaoke-kan',
    name: 'Karaoke Kan',
    japanese: 'カラオケ館',
    category: 'karaoke',
    description: 'High-quality service and premium traditional karaoke experience',
    difficulty: 'moyen',
    features: ['Premium service', 'Superior sound quality', 'Traditional experience'],
  },

  // Teishoku (3 stores)
  {
    id: 'ootoya',
    name: 'Ootoya',
    japanese: '大戸屋',
    category: 'teishoku',
    description: 'Traditional Japanese cuisine in modern style',
    difficulty: 'moyen',
    features: ['Authentic teishoku', 'Fresh ingredients', 'Traditional atmosphere'],
  },
  {
    id: 'yayoiken',
    name: 'Yayoiken',
    japanese: 'やよい軒',
    category: 'teishoku',
    description: 'Traditional teishoku culture',
    difficulty: 'facile',
    features: ['Varied teishoku', 'Unlimited rice', 'Affordable prices'],
  },
  {
    id: 'miyamoto-munashi',
    name: 'Miyamoto Munashi',
    japanese: '宮本むなし',
    category: 'teishoku',
    description: 'Teishoku tradition',
    difficulty: 'facile',
    features: ['Traditional style', 'Classic menu', 'Simple service'],
  },
];

export const getChainsByCategory = (category: string) => {
  return chains.filter(chain => chain.category === category);
};

export const getChainById = (id: string) => {
  return chains.find(chain => chain.id === id);
};

export const getChainsByDifficulty = (difficulty: 'facile' | 'moyen' | 'difficile') => {
  return chains.filter(chain => chain.difficulty === difficulty);
};