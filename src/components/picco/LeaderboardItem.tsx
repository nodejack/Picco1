import React from 'react';

interface LeaderboardItemProps {
  avatar: string;
  name: string;
  streak: number;
}

export const LeaderboardItem: React.FC<LeaderboardItemProps> = ({ avatar, name, streak }) => {
  return (
    <div className="flex items-center gap-4 bg-[var(--surface-dark)] p-3 rounded-lg">
      <img alt={`${name} avatar`} className="w-12 h-12 rounded-full object-cover" src={avatar} />
      <div className="flex-grow">
        <p className="font-bold">{name}</p>
        <p className="text-sm text-[var(--text-secondary-light)]">🔥 Streak: {streak}</p>
      </div>
      <div className="verified-badge">✓</div>
    </div>
  );
};