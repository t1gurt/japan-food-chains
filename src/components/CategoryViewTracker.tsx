'use client';

import { useEffect } from 'react';
import { trackCategoryView } from '@/lib/analytics-events';

interface CategoryViewTrackerProps {
  categoryName: string;
}

export default function CategoryViewTracker({ categoryName }: CategoryViewTrackerProps) {
  useEffect(() => {
    // Send category view event when component mounts
    trackCategoryView(categoryName);
  }, [categoryName]);

  // This component renders nothing
  return null;
}
