import React from 'react';
import { Rocket, Zap, Bug, FlaskConical } from 'lucide-react';

const achievements = [
  { name: 'Early Adopter', Icon: Rocket },
  { name: 'Power User', Icon: Zap },
  { name: 'Bug Squasher', Icon: Bug },
  { name: 'Beta Tester', Icon: FlaskConical },
];

export const Achievements = () => {
  return (
    <section className="mt-8">
      <h2 className="text-xl font-bold">Achievements</h2>
      <div className="mt-4 grid grid-cols-4 gap-4">
        {achievements.map((achievement) => (
          <div key={achievement.name} className="flex flex-col items-center gap-2">
            <div className="flex aspect-square w-full items-center justify-center rounded-lg bg-[var(--surface-dark)]">
              <achievement.Icon className="h-10 w-10 text-[var(--primary-green)]" />
            </div>
            <p className="text-center text-xs font-medium text-[var(--text-secondary-light)]">{achievement.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};