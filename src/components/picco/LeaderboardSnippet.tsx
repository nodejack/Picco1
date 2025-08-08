import React from 'react';
import { Link } from 'react-router-dom';
import { LeaderboardUser } from './LeaderboardUser';
import { Button } from '@/components/ui/button';

const leaderboardData = [
  {
    rank: 1,
    name: 'CryptoKing',
    isVerified: true,
    correct: 254,
    streak: 15,
    isFollowing: false,
    rankChange: null,
  },
  {
    rank: 2,
    name: 'CoinQueen',
    isVerified: false,
    correct: 248,
    streak: 12,
    isFollowing: true,
    rankChange: null,
  },
  {
    rank: 3,
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
    <section>
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