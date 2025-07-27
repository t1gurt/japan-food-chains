'use client';

import { useEffect } from 'react';
import { trackGuideView } from '@/lib/analytics-events';

interface GuideViewTrackerProps {
  guideName: string;
}

export default function GuideViewTracker({ guideName }: GuideViewTrackerProps) {
  useEffect(() => {
    // Send guide view event when component mounts
    trackGuideView(guideName);
  }, [guideName]);

  // This component renders nothing
  return null;
}
