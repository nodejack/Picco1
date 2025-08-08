import React from 'react';
import { Link } from 'react-router-dom';
import { LeaderboardUser } from './LeaderboardUser';
import { Button } from '@/components/ui/button';

const leaderboardData = [
  {
    rank: 1,
    avatar: 'https://images.unsplash.com/photo-1639747280804-dd2d6b3d88ac?q=80&w=2574&auto=format&fit=crop',
    name: 'CryptoKing',
    isVerified: true,
    correct: 254,
    streak: 15,
    isFollowing: false,
    rankChange: null,
  },
  {
    rank: 2,
    avatar: 'https://images.unsplash.com/photo-1642766324553-54b5bca73b53?q=80&w=2574&auto=format&fit=crop',
    name: 'CoinQueen',
    isVerified: false,
    correct: 248,
    streak: 12,
    isFollowing: true,
    rankChange: null,
  },
  {
    rank: 3,
    avatar: 'https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=2670&auto=format&fit=crop',
    name: 'HodlMaster',
    isVerified: true,
    correct: 231,
    streak: 18,
    isFollowing: false,
    rankChange: null,
  },
];

export const LeaderboardSnippet = () => {
  return (
    <section className="p-4 mt-6">
      <h2 className="text-2xl font-bold mb-4">Top Predictors</h2>
      <div className="space-y-3">
        {leaderboardData.slice(0, 3).map((user) => (
          <LeaderboardUser key={user.rank} {...user} />
        ))}
      </div>
      <Button asChild className="w-full mt-4 font-bold py-3 rounded-lg transition-colors h-auto bg-[var(--surface-dark)] text-white hover:bg-zinc-700">
        <Link to="/leaderboard">
          View Full Leaderboard
        </Link>
      </Button>
    </section>
  );
};