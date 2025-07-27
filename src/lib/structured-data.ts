// Structured data (JSON-LD) generation utilities

interface WebsiteSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  url: string;
  potentialAction: {
    '@type': string;
    target: string;
    'query-input': string;
  };
  publisher: {
    '@type': string;
    name: string;
  };
}

interface BreadcrumbSchema {
  '@context': string;
  '@type': string;
  itemListElement: Array<{
    '@type': string;
    position: number;
    name: string;
    item: string;
  }>;
}

interface RestaurantSchema {
  '@context': string;
  '@type': string;
  name: string;
  description: string;
  servesCuisine: string;
  url: string;
  priceRange: string;
  hasMenu: string;
}

// Website-wide structured data
export function generateWebsiteSchema(): WebsiteSchema {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://username.github.io/japonchaines';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Japanese Restaurant Chains Guide',
    description: 'Complete guide to Japanese restaurant chains in English',
    url: baseUrl,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${baseUrl}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Japanese Restaurant Chains Guide',
    },
  };
}

// Breadcrumb structured data
export function generateBreadcrumbSchema(
  breadcrumbs: Array<{ name: string; url: string }>
): BreadcrumbSchema {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://username.github.io/japonchaines';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: crumb.url.startsWith('http') ? crumb.url : `${baseUrl}${crumb.url}`,
    })),
  };
}

// Restaurant page structured data
export function generateRestaurantSchema(
  name: string,
  description: string,
  cuisine: string,
  slug: string
): RestaurantSchema {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://username.github.io/japonchaines';
  
  return {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name,
    description,
    servesCuisine: cuisine,
    url: `${baseUrl}/chains/${slug}`,
    priceRange: '$',
    hasMenu: `${baseUrl}/chains/${slug}#menu`,
  };
}
