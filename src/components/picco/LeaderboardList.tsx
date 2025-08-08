import React from 'react';
import { LeaderboardUser } from './LeaderboardUser';

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
  {
    rank: 4,
    avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=2680&auto=format&fit=crop',
    name: 'Satoshi Jr.',
    isVerified: false,
    correct: 225,
    streak: 8,
    isFollowing: false,
    rankChange: 'up',
  },
  {
    rank: 5,
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2680&auto=format&fit=crop',
    name: 'DiamondHands',
    isVerified: true,
    correct: 220,
    streak: 9,
    isFollowing: false,
    rankChange: null,
  },
  {
    rank: 6,
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?q=80&w=2680&auto=format&fit=crop',
    name: 'LaserEyes',
    isVerified: false,
    correct: 215,
    streak: 7,
    isFollowing: false,
    rankChange: 'down',
  },
];

export const LeaderboardList = () => {
  return (
    <main className="flex-grow p-4 space-y-3">
      {leaderboardData.map((user) => (
        <LeaderboardUser key={user.rank} {...user} />
      ))}
    </main>
  );
};