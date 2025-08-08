import React from 'react';
import { Bitcoin, Gem } from 'lucide-react';

const activities = [
  { type: 'Bitcoin', result: 'Win' },
  { type: 'Ethereum', result: 'Loss' },
];

export const RecentActivity = () => {
  return (
    <section className="mt-6">
      <h2 className="text-lg md:text-base font-bold">Recent Activity</h2>
      <div className="mt-3 space-y-2">
        {activities.map((activity, index) => (
          <div key={index} className="flex cursor-pointer items-center gap-3 rounded-lg bg-[var(--surface-dark)] p-2.5 transition-colors duration-200 hover:bg-zinc-800">
            <div className="flex size-10 shrink-0 items-center justify-center rounded-md bg-[var(--background-dark)]">
              {activity.type === 'Bitcoin' ? (
                <Bitcoin className="h-5 w-5 text-yellow-400" />
              ) : (
                <Gem className="h-5 w-5 text-gray-400" />
              )}
            </div>
            <div className="flex-grow">
              <p className="text-sm font-medium">{activity.type} Prediction</p>
              <p className="text-xs text-[var(--text-secondary-light)]">
                Result: <span className={`font-semibold ${activity.result === 'Win' ? 'text-green-400' : 'text-red-400'}`}>{activity.result}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};