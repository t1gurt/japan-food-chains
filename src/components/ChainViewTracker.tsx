'use client';

import { useEffect } from 'react';
import { trackChainView } from '@/lib/analytics-events';

interface ChainViewTrackerProps {
  chainName: string;
  chainCategory: string;
}

export default function ChainViewTracker({ chainName, chainCategory }: ChainViewTrackerProps) {
  useEffect(() => {
    // Send chain view event when component mounts
    trackChainView(chainName, chainCategory);
  }, [chainName, chainCategory]);

  // This component renders nothing
  return null;
}
