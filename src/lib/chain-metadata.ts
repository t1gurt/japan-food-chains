import { Metadata } from 'next';

// Master data for chain information
const chainData: Record<string, {
  name: string;
  nameJp: string;
  category: string;
  description: string;
  specialties: string[];
  founded?: string;
}> = {
  'anan': {
    name: 'Anan',
    nameJp: '安安',
    category: 'Yakiniku',
    description: 'Affordable authentic charcoal yakiniku with the concept "安くて旨い" (cheap yet delicious).',
    specialties: ['Charcoal kalbi', 'Harami', 'All-you-can-eat sets', 'Grilled vegetables'],
    founded: '1999'
  },
  'bamiyan': {
    name: 'Bamiyan',
    nameJp: 'バーミヤン',
    category: 'Chinese Cuisine',
    description: 'Family Chinese restaurant chain with generous portions at affordable prices and casual atmosphere.',
    specialties: ['Gyoza', 'Chinese ramen', 'Fried rice', 'Black pepper beef'],
    founded: '1986'
  },
  'coco-ichibanya': {
    name: 'CoCo Ichibanya',
    nameJp: 'CoCo壱番屋',
    category: 'Curry',
    description: 'Most popular Japanese curry chain with complete customization of spices and toppings.',
    specialties: ['Curry katsu', 'Vegetarian curry', 'Spice levels', 'Various toppings'],
    founded: '1978'
  },
  'domdom': {
    name: 'Dom Dom Burger',
    nameJp: 'ドムドムバーガー',
    category: 'Burgers',
    description: 'Japan\'s first burger chain (1970), legendary phoenix reborn with unique viral creations and wabi-sabi spirit.',
    specialties: ['Whole crab burger', 'Amakara chicken', 'Creative burgers', 'Dom-ren culture'],
    founded: '1970'
  },
  'doutor': {
    name: 'Doutor Coffee',
    nameJp: 'ドトールコーヒー',
    category: 'Café',
    description: 'Pioneer of affordable coffee in Japan, revolutionary in Japanese coffee culture.',
    specialties: ['Quality coffee', 'Sandwiches', 'Milan sandwich', 'Iced coffee'],
    founded: '1980'
  },
  'freshness-burger': {
    name: 'Freshness Burger',
    nameJp: 'フレッシュネスバーガー',
    category: 'Burgers',
    description: 'Premium burger chain with fresh ingredients and healthy options in modern concept.',
    specialties: ['Fresh burgers', 'Avocado burger', 'Healthy options', 'Gourmet salads'],
    founded: '1992'
  },
  'fuji-soba': {
    name: 'Fuji Soba',
    nameJp: '富士そば',
    category: 'Soba',
    description: 'Iconic 24/7 soba chain in Tokyo, symbol of popular fast food culture.',
    specialties: ['Traditional soba', '24-hour service', 'Kake soba', 'Tempura soba'],
    founded: '1966'
  },
  'gindako': {
    name: 'Gindako',
    nameJp: '銀だこ',
    category: 'Street Food',
    description: 'Authentic Osaka takoyaki specialist, bringing street food culture across Japan.',
    specialties: ['Crispy takoyaki', 'Original sauce', 'Osaka techniques', 'Creative variations'],
    founded: '1997'
  },
  'go-go-curry': {
    name: 'Go Go Curry',
    nameJp: 'ゴーゴーカレー',
    category: 'Curry',
    description: 'Kanazawa-style curry with thick black roux and unique baseball-inspired atmosphere.',
    specialties: ['Black curry', 'Generous portions', 'Baseball atmosphere', 'Thick sauce'],
    founded: '2004'
  },
  'gusto': {
    name: 'Gusto',
    nameJp: 'ガスト',
    category: 'Family Restaurant',
    description: 'Leading family restaurant in Japan with varied menu and affordable prices for the whole family.',
    specialties: ['Family menu', 'Drink bar', 'Western dishes', 'Desserts'],
    founded: '1992'
  },
  'gyoza-no-ohsho': {
    name: 'Gyoza no Ohsho',
    nameJp: '餃子の王将',
    category: 'Chinese Cuisine',
    description: 'Authentic popular Chinese cuisine chain, specializing in handmade gyoza.',
    specialties: ['Handmade gyoza', 'Yakimeshi', 'Chinese ramen', 'Generous portions'],
    founded: '1967'
  },
  'gyukaku': {
    name: 'Gyukaku',
    nameJp: '牛角',
    category: 'Yakiniku',
    description: 'Premium yakiniku chain offering high-quality meat in modern atmosphere.',
    specialties: ['Premium kalbi', 'Wagyu', 'Tasting courses', 'All-you-can-eat sets'],
    founded: '1996'
  },
  'hama-sushi': {
    name: 'Hama Sushi',
    nameJp: 'はま寿司',
    category: 'Kaiten-zushi',
    description: 'Affordable conveyor belt sushi with consistent quality and technological innovation for service.',
    specialties: ['Affordable sushi', 'Fresh fish', 'Automated service', 'Varied menu'],
    founded: '1999'
  },
  'hanamaru-udon': {
    name: 'Hanamaru Udon',
    nameJp: 'はなまるうどん',
    category: 'Udon',
    description: 'Fast and affordable udon chain with fresh noodles prepared daily.',
    specialties: ['Fresh udon', 'Various tempura', 'Fast service', 'Accessible prices'],
    founded: '2000'
  },
  'hidakaya': {
    name: 'Hidakaya',
    nameJp: '日高屋',
    category: 'Chinese Cuisine',
    description: 'Popular and affordable Chinese cuisine, specializing in everyday ramen and gyoza.',
    specialties: ['Popular ramen', 'Crispy gyoza', 'Fried rice', 'Popular prices'],
    founded: '1986'
  },
  'hoshino': {
    name: 'Hoshino Coffee',
    nameJp: '星乃珈琲店',
    category: 'Café',
    description: 'Traditional café with retro atmosphere, specializing in siphon coffee and thick pancakes.',
    specialties: ['Siphon coffee', 'Thick pancakes', 'Retro atmosphere', 'Homemade desserts'],
    founded: '2011'
  },
  'ichiran': {
    name: 'Ichiran',
    nameJp: '一蘭',
    category: 'Ramen',
    description: 'Specialized tonkotsu ramen with unique ordering system and focused individual experience.',
    specialties: ['Tonkotsu ramen', 'Yatai system', 'Customization', 'Individual focus'],
    founded: '1960'
  },
  'ikinari-steak': {
    name: 'Ikinari Steak',
    nameJp: 'いきなりステーキ',
    category: 'Steak',
    description: 'Standing steak revolution with meat by weight and instant cooking in innovative concept.',
    specialties: ['Standing steak', 'Sold by weight', 'Instant cooking', 'Premium meat'],
    founded: '2013'
  },
  'ippudo': {
    name: 'Ippudo',
    nameJp: '一風堂',
    category: 'Ramen',
    description: 'Premium Hakata ramen with refined tonkotsu broth and international reputation.',
    specialties: ['Hakata tonkotsu', 'Shiromaru', 'Akamaru', 'Premium ramen'],
    founded: '1985'
  },
  'jolly-pasta': {
    name: 'Jolly Pasta',
    nameJp: 'ジョリーパスタ',
    category: 'Family Restaurant',
    description: 'Family restaurant specializing in pasta with varied menu adapted to Japanese tastes.',
    specialties: ['Japanese pasta', 'Original sauces', 'Family menu', 'Fusion dishes'],
    founded: '1994'
  },
  'jonathans': {
    name: 'Jonathan\'s',
    nameJp: 'ジョナサン',
    category: 'Family Restaurant',
    description: 'Premium family restaurant from Skylark Group with varied cuisine and refined atmosphere.',
    specialties: ['Varied menu', 'Premium quality', 'Family atmosphere', 'Desserts'],
    founded: '1979'
  },
  'komeda': {
    name: 'Komeda Coffee',
    nameJp: 'コメダ珈琲店',
    category: 'Café',
    description: 'Traditional Nagoya café famous for its morning service and nostalgic atmosphere.',
    specialties: ['Morning service', 'Shiro-noir', 'Traditional coffee', 'Showa atmosphere'],
    founded: '1968'
  },
  'komoro-soba': {
    name: 'Komoro Soba',
    nameJp: '小諸そば',
    category: 'Soba',
    description: 'Traditional soba chain with authentic recipes and fast service in city centers.',
    specialties: ['Traditional soba', 'Homemade tsuyu', 'Fast service', 'Fresh tempura'],
    founded: '1984'
  },
  'kura-sushi': {
    name: 'Kura Sushi',
    nameJp: 'くら寿司',
    category: 'Kaiten-zushi',
    description: 'Innovative conveyor belt sushi with capsule system and technology for playful experience.',
    specialties: ['Capsule system', 'Fresh sushi', 'Playful technology', 'Accessible prices'],
    founded: '1977'
  },
  'kushikatsu-tanaka': {
    name: 'Kushikatsu Tanaka',
    nameJp: '串カツ田中',
    category: 'Izakaya',
    description: 'Osaka kushikatsu specialist with popular atmosphere and no double-dipping rule.',
    specialties: ['Osaka kushikatsu', 'No 2x sauce rule', 'Popular atmosphere', 'Cold beer'],
    founded: '1929'
  },
  'lotteria': {
    name: 'Lotteria',
    nameJp: 'ロッテリア',
    category: 'Burgers',
    description: 'Historic Japanese burger chain with local flavors and unique innovations.',
    specialties: ['Japanese burgers', 'Ebi burger', 'Local innovations', 'Fusion flavors'],
    founded: '1972'
  },
  'marugame-seimen': {
    name: 'Marugame Seimen',
    nameJp: '丸亀製麺',
    category: 'Udon',
    description: 'Fresh udon prepared in front of you with Sanuki tradition and crispy tempura.',
    specialties: ['Sanuki udon', 'Visible preparation', 'Fresh tempura', 'Artisanal quality'],
    founded: '2000'
  },
  'matsuya': {
    name: 'Matsuya',
    nameJp: '松屋',
    category: 'Gyudon',
    description: 'Economical gyudon 24/7 with varied menu and automatic ticket system.',
    specialties: ['Economical gyudon', '24-hour service', 'Varied menu', 'Unbeatable prices'],
    founded: '1966'
  },
  'miyamoto-munashi': {
    name: 'Miyamoto Munashi',
    nameJp: '宮本むなし',
    category: 'Teishoku',
    description: 'Traditional teishoku with unlimited rice and miso in authentic popular atmosphere.',
    specialties: ['Unlimited rice', 'Free miso', 'Complete teishoku', 'Popular atmosphere'],
    founded: '1953'
  },
  'mos-burger': {
    name: 'Mos Burger',
    nameJp: 'モスバーガー',
    category: 'Burgers',
    description: 'Premium Japanese burgers with local ingredients and artisanal made-to-order quality.',
    specialties: ['Made-to-order', 'Japanese ingredients', 'Premium quality', 'Teriyaki burger'],
    founded: '1972'
  },
  'ootoya': {
    name: 'Ootoya',
    nameJp: '大戸屋',
    category: 'Teishoku',
    description: 'Authentic teishoku with home-style cooking, fresh ingredients and balanced dishes.',
    specialties: ['Home-style cooking', 'Balanced teishoku', 'Grilled fish', 'Fresh vegetables'],
    founded: '1992'
  },
  'osaka-ohsho': {
    name: 'Osaka Ohsho',
    nameJp: '大阪王将',
    category: 'Chinese Cuisine',
    description: 'Osaka Chinese cuisine with crispy gyoza and generous portions in Kansai spirit.',
    specialties: ['Osaka gyoza', 'Generous yakimeshi', 'Kansai spirit', 'Large portions'],
    founded: '1969'
  },
  'ringer-hut': {
    name: 'Ringer Hut',
    nameJp: 'リンガーハット',
    category: 'Chinese Cuisine',
    description: 'Nagasaki champon specialist with fresh vegetables and authentic broth.',
    specialties: ['Nagasaki champon', 'Fresh vegetables', 'Sara udon', 'Authentic broth'],
    founded: '1974'
  },
  'saizeriya': {
    name: 'Saizeriya',
    nameJp: 'サイゼリヤ',
    category: 'Family Restaurant',
    description: 'Italian family restaurant with ultra-affordable prices and varied menu for everyone.',
    specialties: ['Affordable Italian', 'Unbeatable prices', 'Drink bar', 'Family menu'],
    founded: '1973'
  },
  'shirokiya': {
    name: 'Shirokiya',
    nameJp: '白木屋',
    category: 'Izakaya',
    description: 'Traditional izakaya with friendly atmosphere, varied menu and affordable prices for groups.',
    specialties: ['Izakaya atmosphere', 'Varied menu', 'Various drinks', 'Friend groups'],
    founded: '1983'
  },
  'sukiya': {
    name: 'Sukiya',
    nameJp: 'すき家',
    category: 'Gyudon',
    description: 'Gyudon leader with largest network in Japan and diversified 24/7 menu.',
    specialties: ['Gyudon leader', 'Largest network', 'Diversified menu', '24-hour service'],
    founded: '1982'
  },
  'sukiya-curry': {
    name: 'Sukiya Curry',
    nameJp: 'すき家カレー',
    category: 'Curry',
    description: 'Sukiya\'s curry extension with authentic Japanese curry and accessible Sukiya prices.',
    specialties: ['Sukiya curry', 'Accessible prices', 'Fast menu', 'Consistent quality'],
    founded: '2010'
  },
  'sushiro': {
    name: 'Sushiro',
    nameJp: 'スシロー',
    category: 'Kaiten-zushi',
    description: 'Conveyor belt sushi leader with technological innovation and accessible quality.',
    specialties: ['Kaiten leader', 'Tech innovation', 'Accessible quality', 'Seasonal menu'],
    founded: '1984'
  },
  'tenkaippin': {
    name: 'Tenkaippin',
    nameJp: '天下一品',
    category: 'Ramen',
    description: 'Unique kotteri ramen with ultra-rich broth and incomparable creamy texture.',
    specialties: ['Unique kotteri', 'Creamy broth', 'Thick texture', 'Kyoto style'],
    founded: '1971'
  },
  'tenya': {
    name: 'Tenya',
    nameJp: 'てんや',
    category: 'Tempura',
    description: 'Fast and affordable tempura with professional technique and seasonal ingredients.',
    specialties: ['Fast tempura', 'Professional technique', 'Accessible prices', 'Seasonal ingredients'],
    founded: '1989'
  },
  'torikizoku': {
    name: 'Torikizoku',
    nameJp: '鳥貴族',
    category: 'Izakaya',
    description: 'Revolutionary uniform pricing yakitori with consistent quality and casual atmosphere.',
    specialties: ['Uniform pricing', 'Quality yakitori', 'Price revolution', 'Casual atmosphere'],
    founded: '1985'
  },
  'tsunahachi': {
    name: 'Tsunahachi',
    nameJp: '綱八',
    category: 'Tempura',
    description: 'Historic traditional Tokyo tempura with ancestral technique and seasonal respect.',
    specialties: ['Historic tempura', 'Ancestral technique', 'Tokyo tradition', 'Seasonal respect'],
    founded: '1923'
  },
  'watami': {
    name: 'Watami',
    nameJp: 'ワタミ',
    category: 'Izakaya',
    description: 'Modern izakaya with ecological concept, varied menu and contemporary atmosphere.',
    specialties: ['Ecological concept', 'Modern menu', 'Contemporary atmosphere', 'Groups'],
    founded: '1984'
  },
  'yayoiken': {
    name: 'Yayoiken',
    nameJp: 'やよい軒',
    category: 'Teishoku',
    description: 'Authentic teishoku with unlimited white rice and quality home-cooked dishes.',
    specialties: ['Unlimited rice', 'Home-cooked dishes', 'Authentic teishoku', 'Consistent quality'],
    founded: '1886'
  },
  'yoshinoya': {
    name: 'Yoshinoya',
    nameJp: '吉野家',
    category: 'Gyudon',
    description: 'Historic gyudon pioneer since 1899 with tradition and continuous innovation.',
    specialties: ['Gyudon pioneer', '1899 tradition', 'Continuous innovation', 'Secret recipe'],
    founded: '1899'
  },
  'yudetaro': {
    name: 'Yudetaro',
    nameJp: 'ゆで太郎',
    category: 'Soba',
    description: 'Fast soba and udon with fresh tempura in efficient dining concept.',
    specialties: ['Soba and udon', 'Fresh tempura', 'Fast service', 'Reasonable prices'],
    founded: '1994'
  }
};

export function generateChainMetadata(chainSlug: string): Metadata {
  const chain = chainData[chainSlug];
  
  if (!chain) {
    return {
      title: 'Japanese Restaurant Chain | Complete Guide',
      description: 'Discover this Japanese restaurant chain with our detailed guide.',
    };
  }

  const title = `${chain.name} (${chain.nameJp}) | ${chain.category} | Japanese Restaurant Guide`;
  const description = `${chain.description} Complete menu, prices, ordering tips and practical guide for ${chain.name}.`;
  
  return {
    title,
    description,
    keywords: [
      chain.name.toLowerCase(),
      chain.nameJp,
      chain.category.toLowerCase(),
      ...chain.specialties.map(s => s.toLowerCase()),
      'japanese restaurant',
      'japan restaurant chain',
      'japan travel guide',
      'how to order in japan'
    ],
    openGraph: {
      title,
      description,
      type: 'article',
      url: `/chains/${chainSlug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `/chains/${chainSlug}`,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
