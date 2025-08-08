import React from 'react';
import { LeaderboardUser } from './LeaderboardUser';

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
  {
    rank: 4,
    name: 'Satoshi Jr.',
    isVerified: false,
    correct: 225,
    streak: 8,
    isFollowing: false,
    rankChange: 'up',
  },
  {
    rank: 5,
    name: 'DiamondHands',
    isVerified: true,
    correct: 220,
    streak: 9,
    isFollowing: false,
    rankChange: null,
  },
  {
    rank: 6,
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