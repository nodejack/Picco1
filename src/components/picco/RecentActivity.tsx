import React from 'react';
import { Bitcoin, Gem } from 'lucide-react';

const activities = [
  { type: 'Bitcoin', result: 'Win' },
  { type: 'Ethereum', result: 'Loss' },
];

export const RecentActivity = () => {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold">Recent Activity</h2>
      <div className="mt-4 space-y-3">
        {activities.map((activity, index) => (
          <div key={index} className="flex cursor-pointer items-center gap-4 rounded-xl bg-[var(--surface-dark)] p-3 transition-colors duration-200 hover:bg-zinc-800">
            <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-[var(--background-dark)]">
              {activity.type === 'Bitcoin' ? (
                <Bitcoin className="h-7 w-7 text-yellow-400" />
              ) : (
                <Gem className="h-7 w-7 text-gray-400" />
              )}
            </div>
            <div className="flex-grow">
              <p className="font-medium">{activity.type} Prediction</p>
              <p className="text-sm text-[var(--text-secondary-light)]">
                Result: <span className={`font-semibold ${activity.result === 'Win' ? 'text-green-400' : 'text-red-400'}`}>{activity.result}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};