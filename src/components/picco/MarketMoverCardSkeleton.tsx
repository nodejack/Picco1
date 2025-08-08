import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';

export const MarketMoverCardSkeleton = () => {
  return (
    <div className="bg-[var(--surface-dark)] rounded-lg p-3 flex flex-col gap-2 h-full">
      <div className="flex items-center gap-2">
        <Skeleton className="w-6 h-6 rounded-full" />
        <Skeleton className="h-5 w-12" />
      </div>
      <div className="flex items-end justify-between mt-auto">
        <Skeleton className="h-6 w-20" />
        <Skeleton className="h-5 w-10" />
      </div>
    </div>
  );
};