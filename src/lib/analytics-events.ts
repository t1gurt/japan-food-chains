import { event } from '@/lib/gtag';

// Track restaurant chain page views (improved version)
export const trackChainView = (chainName: string, chainCategory: string) => {
  event({
    action: 'view_chain',
    category: 'restaurant_engagement',
    label: chainName,
    custom_parameters: {
      chain_name: chainName,
      chain_category: chainCategory,
      content_type: 'chain_detail'
    }
  });
};

// Track category page views
export const trackCategoryView = (categoryName: string) => {
  event({
    action: 'view_category',
    category: 'category_engagement', 
    label: categoryName,
    custom_parameters: {
      category_name: categoryName,
      content_type: 'category_listing'
    }
  });
};

// Track guide page views
export const trackGuideView = (guideName: string) => {
  event({
    action: 'view_guide',
    category: 'guide_engagement',
    label: guideName,
    custom_parameters: {
      guide_name: guideName,
      content_type: 'guide'
    }
  });
};

// Chain comparison events
export const trackChainComparison = (chainsCompared: string[]) => {
  event({
    action: 'compare_chains',
    category: 'restaurant_engagement',
    label: chainsCompared.join(' vs '),
    custom_parameters: {
      chains_compared: chainsCompared,
      comparison_count: chainsCompared.length
    }
  });
};

// Track external link clicks
export const trackExternalLink = (url: string, linkName: string) => {
  event({
    action: 'click_external_link',
    category: 'engagement',
    label: `${linkName} - ${url}`,
  });
};

// Track search functionality usage
export const trackSearch = (searchTerm: string, resultCount?: number) => {
  event({
    action: 'search',
    category: 'search_engagement',
    label: searchTerm,
    custom_parameters: {
      search_term: searchTerm,
      result_count: resultCount
    }
  });
};

// Track restaurant chain page views (backward compatibility)
export const trackRestaurantView = (restaurantName: string) => {
  // Simple mapping to infer category
  const categoryMap: { [key: string]: string } = {
    'yoshinoya': 'gyudon',
    'sukiya': 'gyudon', 
    'matsuya': 'gyudon',
    'ichiran': 'ramen',
    'ippudo': 'ramen',
    'sushiro': 'kaiten-zushi',
    'kura-sushi': 'kaiten-zushi',
    'coco-ichibanya': 'curry',
    'miyamoto-munashi': 'teishoku',
    'ootoya': 'teishoku',
    'yayoiken': 'teishoku'
  };
  
  const category = categoryMap[restaurantName.toLowerCase()] || 'other';
  trackChainView(restaurantName, category);
};
