import React from 'react';
import { cn } from '@/lib/utils';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

interface MarketMoverCardProps {
  icon: string;
  ticker: string;
  price: string;
  change: number;
}

export const MarketMoverCard: React.FC<MarketMoverCardProps> = ({ icon, ticker, price, change }) => {
  const isPositive = change >= 0;

  return (
    <div className="bg-[var(--surface-dark)] rounded-lg p-3 flex flex-col gap-2 h-full">
      <div className="flex items-center gap-2">
        <img src={icon} alt={`${ticker} logo`} className="w-6 h-6" />
        <span className="font-bold text-base text-white">{ticker}</span>
      </div>
      <div className="flex items-end justify-between mt-auto">
        <span className="font-mono text-lg text-white">{price}</span>
        <div className={cn(
          "flex items-center text-sm font-bold",
          isPositive ? "text-[var(--primary-green)]" : "text-[var(--primary-red)]"
        )}>
          {isPositive ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
          <span>{Math.abs(change)}%</span>
        </div>
      </div>
    </div>
  );
};