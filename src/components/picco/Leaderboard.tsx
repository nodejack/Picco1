import React from 'react';
import { LeaderboardItem } from './LeaderboardItem';

const leaderboardData = [
  {
    avatar: 'https://images.unsplash.com/photo-1639747280804-dd2d6b3d88ac?q=80&w=2574&auto=format&fit=crop',
    name: 'CryptoKing',
    streak: 5,
  },
  {
    avatar: 'https://images.unsplash.com/photo-1642766324553-54b5bca73b53?q=80&w=2574&auto=format&fit=crop',
    name: 'CoinMaster',
    streak: 3,
  },
  {
    avatar: 'https://images.unsplash.com/photo-1640951613773-54706e06851d?q=80&w=2670&auto=format&fit=crop',
    name: 'BlockchainPro',
    streak: 2,
  },
];

export const Leaderboard = () => {
  return (
    <section className="p-4 mt-8">
      <h2 className="text-2xl font-bold mb-4">Leaderboard</h2>
      <div className="space-y-3">
        {leaderboardData.map((user, index) => (
          <LeaderboardItem key={index} {...user} />
        ))}
      </div>
    </section>
  );
};