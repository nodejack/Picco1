import React from 'react';

interface User {
  rank: number;
  name: string;
  avatar: string;
}

interface LeaderboardPreviewProps {
  users: User[];
}

export const LeaderboardPreview: React.FC<LeaderboardPreviewProps> = ({ users }) => {
  return (
    <div className="mt-4 space-y-3">
      {users.map((user) => (
        <div key={user.rank} className="flex items-center gap-4 rounded-xl bg-[var(--surface-dark)] p-3">
          <p className="w-6 text-center text-lg font-bold text-[var(--text-secondary-light)]">{user.rank}</p>
          <img src={user.avatar} alt={user.name} className="size-10 rounded-full" />
          <p className="flex-grow font-semibold">{user.name}</p>
        </div>
      ))}
    </div>
  );
};