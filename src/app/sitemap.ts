import { MetadataRoute } from 'next';
import { restaurantChains, foodTypes, staticPages } from '../data/site-data';
import { promises as fs } from 'fs';
import { join } from 'path';

// Static export configuration
export const dynamic = 'force-static';

// Site base URL (using custom domain)
const baseUrl = 'https://www.japanfoodchains.com';

// Function to get file modification date
async function getFileModifiedDate(filePath: string): Promise<Date> {
  try {
    const stats = await fs.stat(filePath);
    return stats.mtime;
  } catch (error) {
    // Return current date if file doesn't exist
    return new Date();
  }
}

// Function to generate file path from page path
function getPageFilePath(page: string): string {
  const srcDir = join(process.cwd(), 'src', 'app');
  
  if (page === '') {
    return join(srcDir, 'page.tsx');
  }
  
  return join(srcDir, page.slice(1), 'page.tsx');
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const currentDate = new Date();

  // Static pages sitemap entries
  const staticSitemapEntries = await Promise.all(
    staticPages.map(async (page) => {
      const filePath = getPageFilePath(page);
      const lastModified = await getFileModifiedDate(filePath);
      
      return {
        url: `${baseUrl}${page}`,
        lastModified,
        changeFrequency: 'weekly' as const,
        priority: page === '' ? 1.0 : 0.8,
        alternates: {
          languages: {
            'en-US': `${baseUrl}${page}`,
          },
        },
      };
    })
  );

  // Restaurant chain pages sitemap entries
  const restaurantSitemapEntries = await Promise.all(
    restaurantChains.map(async (chain) => {
      const filePath = join(process.cwd(), 'src', 'app', 'chaines', chain, 'page.tsx');
      const lastModified = await getFileModifiedDate(filePath);
      
      return {
        url: `${baseUrl}/chaines/${chain}`,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.7,
        alternates: {
          languages: {
            'en-US': `${baseUrl}/chaines/${chain}`,
          },
        },
      };
    })
  );

  // Food type pages sitemap entries
  const foodTypeSitemapEntries = await Promise.all(
    foodTypes.map(async (type) => {
      const filePath = join(process.cwd(), 'src', 'app', 'type-plat', type, 'page.tsx');
      const lastModified = await getFileModifiedDate(filePath);
      
      return {
        url: `${baseUrl}/type-plat/${type}`,
        lastModified,
        changeFrequency: 'monthly' as const,
        priority: 0.6,
        alternates: {
          languages: {
            'en-US': `${baseUrl}/type-plat/${type}`,
          },
        },
      };
    })
  );

  return [
    ...staticSitemapEntries,
    ...restaurantSitemapEntries,
    ...foodTypeSitemapEntries,
  ];
}
