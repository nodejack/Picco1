import { useState } from 'react';
import { ArrowDown, ArrowUp, User } from 'lucide-react';
import { cn } from '@/lib/utils';
import { LeaderboardUser } from '@/components/picco/LeaderboardUser';

const users = [
  { rank: 1, name: 'Alex', avatar: 'https://source.unsplash.com/150x150/?portrait&sig=1', correct: 120, streak: 12, change: 'up' },
  { rank: 2, name: 'Brie', avatar: 'https://source.unsplash.com/150x150/?portrait&sig=2', correct: 115, streak: 8, change: 'down' },
  { rank: 3, name: 'Charlie', avatar: 'https://source.unsplash.com/150x150/?portrait&sig=3', correct: 110, streak: 5, change: 'none' },
  { rank: 4, name: 'Dana', avatar: 'https://source.unsplash.com/150x150/?portrait&sig=4', correct: 105, streak: 3, change: 'up' },
  { rank: 5, name: 'Eli', avatar: 'https://source.unsplash.com/150x150/?portrait&sig=5', correct: 100, streak: 2, change: 'none' },
  { rank: 6, name: 'Fiona', avatar: 'https://source.unsplash.com/150x150/?portrait&sig=6', correct: 95, streak: 1, change: 'down' },
  { rank: 7, name: 'George', avatar: 'https://source.unsplash.com/150x150/?portrait&sig=7', correct: 90, streak: 0, change: 'up' },
];

const tabs = ['Global', 'Weekly', 'Daily'];

export const LeaderboardPage = () => {
  const [activeTab, setActiveTab] = useState('Global');

  return (
    <div className="flex flex-col bg-[var(--background-dark)] text-[var(--text-primary-light)]">
      <header className="sticky top-0 z-10 flex flex-col gap-4 bg-[var(--background-dark)] p-4 pb-3">
        <h1 className="text-center text-xl font-bold">Leaderboard</h1>
        <div className="flex justify-between rounded-lg bg-[var(--surface-dark)] p-1">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                'w-full rounded-md py-2 text-sm font-medium transition-colors',
                activeTab === tab ? 'bg-[var(--primary-green)] text-black' : 'text-[var(--text-secondary-light)]'
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </header>

      <main className="flex flex-col gap-3 p-4 pt-0">
        {users.map((user, index) => (
          <LeaderboardUser
            key={user.rank}
            rank={user.rank}
            name={user.name}
            avatar={user.avatar}
            correct={user.correct}
            streak={user.streak}
            change={user.change}
            isCurrentUser={index === 0} // Example: Alex is the current user
          />
        ))}
      </main>
    </div>
  );
};