import React from 'react';
import { Award, CheckCircle, History } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { createAvatar } from '@dicebear/core';
import { bottts } from '@dicebear/collection';

interface LeaderboardUserProps {
  rank: number;
  name: string;
  isVerified: boolean;
  correct: number;
  streak: number;
  isFollowing: boolean;
  rankChange: 'up' | 'down' | null;
}

export const LeaderboardUser: React.FC<LeaderboardUserProps> = ({
  rank,
  name,
  isVerified,
  correct,
  streak,
  isFollowing,
  rankChange,
}) => {
  const rankStyles: { [key: number]: any } = {
    1: {
      card: 'border-[var(--gold-color)]/50 shadow-[0_0_20px_rgba(255,215,0,0.2)]',
      rankText: 'text-[var(--gold-color)]',
      avatar: 'border-[var(--gold-color)]',
      icon: 'text-[var(--gold-color)]',
    },
    2: {
      card: 'border-[var(--silver-color)]/50 shadow-[0_0_20px_rgba(192,192,192,0.2)]',
      rankText: 'text-[var(--silver-color)]',
      avatar: 'border-[var(--silver-color)]',
      icon: 'text-[var(--silver-color)]',
    },
    3: {
      card: 'border-[var(--bronze-color)]/50 shadow-[0_0_20px_rgba(205,127,50,0.2)]',
      rankText: 'text-[var(--bronze-color)]',
      avatar: 'border-[var(--bronze-color)]',
      icon: 'text-[var(--bronze-color)]',
    },
  };

  const currentRankStyle = rank <= 3 ? rankStyles[rank] : null;

  const animationClass = rankChange === 'up' ? 'animate-rank-up' : rankChange === 'down' ? 'animate-rank-down' : '';

  // Generate avatar SVG using dicebear bottts
  const avatar = createAvatar(bottts, {
    seed: name,
    size: 48,
  });
  const avatarSvg = avatar.toString();

  return (
    <div
      className={cn(
        'bg-[var(--surface-dark)] rounded-2xl p-4 transition-colors duration-300',
        currentRankStyle?.card,
        animationClass
      )}
    >
      <div className="flex items-center gap-4">
        {currentRankStyle ? (
          <div className="relative">
            <Award className={cn('absolute -top-2 -left-2', currentRankStyle.icon)} size={24} strokeWidth={1.5} />
            <p className={cn('text-2xl font-bold w-8 text-center', currentRankStyle.rankText)}>{rank}</p>
          </div>
        ) : (
          <p className="text-xl font-bold text-[var(--text-secondary-light)] w-8 text-center">{rank}</p>
        )}
        <div
          className={cn(
            'w-12 h-12 rounded-full flex items-center justify-center',
            currentRankStyle ? `border-2 ${currentRankStyle.avatar}` : ''
          )}
          dangerouslySetInnerHTML={{ __html: avatarSvg }}
        />
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <p className="text-lg font-bold">{name}</p>
            {isVerified && <CheckCircle className="text-blue-400" size={16} />}
          </div>
          <div className="flex gap-4 text-xs mt-1 text-[var(--text-secondary-light)]">
            <span><span className="font-bold text-white">{correct}</span> Correct</span>
            <span><span className="font-bold text-white">{streak}</span> Streak</span>
          </div>
        </div>
        {rank > 3 ? (
          <Button variant="ghost" size="icon" className="text-[var(--text-secondary-light)] hover:text-white">
            <History size={20} />
          </Button>
        ) : isFollowing ? (
          <Button className="bg-[var(--primary-green)] text-black font-bold py-2 px-4 rounded-full text-sm h-auto hover:bg-emerald-400">
            Following
          </Button>
        ) : (
          <Button className="bg-[var(--surface-dark)] text-white font-bold py-2 px-4 rounded-full text-sm h-auto hover:bg-[var(--primary-green)] hover:text-black border border-white/20 hover:border-transparent">
            Follow
          </Button>
        )}
      </div>
    </div>
  );
};