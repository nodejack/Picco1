import React from 'react';
import { LeaderboardItem } from './LeaderboardItem';
import { User } from '@/types';

interface LeaderboardProps {
  data: User[];
}

export const Leaderboard = ({ data }: LeaderboardProps) => {
  return (
    <div className="bg-[var(--surface-dark)] rounded-lg overflow-hidden">
      <div className="flex flex-col">
        {data.map((user, index) => (
          <LeaderboardItem key={user.id} user={user} rank={index + 1} />
        ))}
      </div>
    </div>
  );
};