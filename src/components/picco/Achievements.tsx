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
    <section className="mt-6">
      <h2 className="text-lg md:text-base font-bold">Achievements</h2>
      <div className="mt-3 grid grid-cols-4 gap-3">
        {achievements.map((achievement) => (
          <div key={achievement.name} className="group flex cursor-pointer flex-col items-center gap-1.5">
            <div className="flex aspect-square w-full items-center justify-center rounded-md bg-[var(--surface-dark)] transition-colors duration-200 group-hover:bg-zinc-800">
              <achievement.Icon className="h-8 w-8 md:h-6 md:w-6 text-[var(--primary-green)] transition-transform duration-200 group-hover:scale-110" />
            </div>
            <p className="text-center text-xs text-[var(--text-secondary-light)]">{achievement.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};