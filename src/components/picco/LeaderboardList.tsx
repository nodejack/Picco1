import React from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
      <div className="flex flex-col items-center mb-4">
        <Tabs defaultValue="global">
          <TabsList className="bg-[var(--surface-dark)] border border-[var(--border-color)]">
            <TabsTrigger 
              value="global" 
              className="data-[state=active]:bg-[var(--primary-green)] data-[state=active]:text-[var(--background-dark)] text-[var(--text-secondary-light)]"
            >
              Global
            </TabsTrigger>
            <TabsTrigger 
              value="weekly" 
              className="data-[state=active]:bg-[var(--primary-green)] data-[state=active]:text-[var(--background-dark)] text-[var(--text-secondary-light)]"
            >
              Weekly
            </TabsTrigger>
            <TabsTrigger 
              value="daily" 
              className="data-[state=active]:bg-[var(--primary-green)] data-[state=active]:text-[var(--background-dark)] text-[var(--text-secondary-light)]"
            >
              Daily
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>
      {leaderboardData.map((user) => (
        <LeaderboardUser key={user.rank} {...user} />
      ))}
    </main>
  );
};