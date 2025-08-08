import React from 'react';
import { User } from '@/types';
import { cn } from '@/lib/utils';
import { ArrowUp, ArrowDown, CheckCircle } from 'lucide-react';

interface LeaderboardItemProps {
  user: User;
  rank: number;
}

export const LeaderboardItem: React.FC<LeaderboardItemProps> = ({ user, rank }) => {
  const { name, score, change, isVerified, avatar } = user;

  const rankStyles: { [key: number]: string } = {
    1: 'text-[var(--gold-color)]',
    2: 'text-[var(--silver-color)]',
    3: 'text-[var(--bronze-color)]',
  };

  const rankClass = rank <= 3 ? rankStyles[rank] : 'text-[var(--text-secondary-light)]';

  return (
    <div className="flex items-center p-4 border-b border-[var(--border-color)] last:border-b-0 hover:bg-white/5 transition-colors">
      <div className={cn('w-8 text-center text-lg font-bold', rankClass)}>
        {rank}
      </div>
      <img src={avatar} alt={name} className="w-10 h-10 rounded-full mx-4" />
      <div className="flex-grow">
        <div className="flex items-center gap-2">
          <p className="font-bold text-white">{name}</p>
          {isVerified && <CheckCircle className="w-4 h-4 text-blue-400" />}
        </div>
        <p className="text-sm text-[var(--text-secondary-light)]">{score.toLocaleString()} pts</p>
      </div>
      <div
        className={cn(
          'flex items-center gap-1 font-bold text-sm',
          change > 0 ? 'text-green-400' : change < 0 ? 'text-red-400' : 'text-[var(--text-secondary-light)]'
        )}
      >
        {change > 0 && <ArrowUp className="w-4 h-4" />}
        {change < 0 && <ArrowDown className="w-4 h-4" />}
        <span>{Math.abs(change)}</span>
      </div>
    </div>
  );
};